import React, { useState, useEffect } from 'react';
import { CURRICULUM } from '../data/curriculumData';
import {
  Sparkles,
  CheckCircle2,
  Lock,
  Volume2,
  Play,
  RotateCcw,
  ArrowRight,
  Shield,
  Award,
  BookOpen,
  HelpCircle,
  Check
} from './Icons';
import { speakText, sfx } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export default function CurriculumPathView({ language, onAddXp }) {
  const curriculum = CURRICULUM[language.id] || CURRICULUM.hausa;

  // Track completed stage IDs in localStorage
  const storageKey = `lq_curriculum_progress_${language.id}`;
  const [completedStages, setCompletedStages] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return new Set(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
    // Default: first stage unlocked, none completed initially
    return new Set();
  });

  // Active lesson modal state
  const [activeStage, setActiveStage] = useState(null);
  const [lessonStep, setLessonStep] = useState(1); // 1: Concept, 2: Audio, 3: Dictation, 4: Comprehension, 5: Victory
  const [placedTokens, setPlacedTokens] = useState([]);
  const [availableTokens, setAvailableTokens] = useState([]);
  const [dictationChecked, setDictationChecked] = useState(false);
  const [dictationCorrect, setDictationCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [comprehensionChecked, setComprehensionChecked] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState(1.0);

  // Boss challenge state
  const [bossStep, setBossStep] = useState(0);
  const [bossAnswers, setBossAnswers] = useState({});
  const [bossFinished, setBossFinished] = useState(false);
  const [bossScore, setBossScore] = useState(0);

  // Sync completed stages to localStorage
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(Array.from(completedStages)));
  }, [completedStages, storageKey]);

  // Flatten all stages to determine sequential unlocking
  const allStages = [];
  curriculum.units.forEach((u) => {
    u.stages.forEach((s) => {
      allStages.push({ ...s, unitId: u.id, unitTitle: u.title });
    });
  });

  const isStageUnlocked = (stageId, index) => {
    if (index === 0) return true;
    const prevStage = allStages[index - 1];
    return completedStages.has(prevStage.id);
  };

  const isStageCompleted = (stageId) => completedStages.has(stageId);

  // Launch a stage
  const handleOpenStage = (stage) => {
    setActiveStage(stage);
    setLessonStep(1);
    setDictationChecked(false);
    setDictationCorrect(false);
    setSelectedAnswer(null);
    setComprehensionChecked(false);
    setAudioSpeed(1.0);

    if (stage.type === 'lesson') {
      const p = stage.practice;
      const allT = [...(p.tokens || []), ...(p.distractors || [])]
        .map((txt, i) => ({ id: `token-${i}-${txt}`, text: txt }))
        .sort(() => Math.random() - 0.5);
      setAvailableTokens(allT);
      setPlacedTokens([]);
    } else if (stage.type === 'checkpoint') {
      setBossStep(0);
      setBossAnswers({});
      setBossFinished(false);
      setBossScore(0);
    }
  };

  const handleCloseStage = () => {
    setActiveStage(null);
  };

  // Dictation token actions
  const handlePickToken = (tok) => {
    if (dictationChecked) return;
    setPlacedTokens((prev) => [...prev, tok]);
    setAvailableTokens((prev) => prev.filter((t) => t.id !== tok.id));
    sfx.playFlip();
  };

  const handleRemoveToken = (tok) => {
    if (dictationChecked) return;
    setPlacedTokens((prev) => prev.filter((t) => t.id !== tok.id));
    setAvailableTokens((prev) => [...prev, tok]);
    sfx.playFlip();
  };

  const handleCheckDictation = () => {
    const constructed = placedTokens.map((t) => t.text).join(' ').trim();
    const target = (activeStage.practice.tokens || []).join(' ').trim();
    const isCorrect = constructed === target;

    setDictationChecked(true);
    setDictationCorrect(isCorrect);

    if (isCorrect) {
      sfx.playCorrect();
      onAddXp(10);
    } else {
      sfx.playWrong();
    }
  };

  // Comprehension question actions
  const handleSelectOption = (optIdx) => {
    if (comprehensionChecked) return;
    setSelectedAnswer(optIdx);
    setComprehensionChecked(true);

    const isCorrect = optIdx === activeStage.practice.comprehension.correctIndex;
    if (isCorrect) {
      sfx.playCorrect();
      onAddXp(10);
    } else {
      sfx.playWrong();
    }
  };

  // Advance lesson steps
  const handleNextStep = () => {
    if (lessonStep < 4) {
      setLessonStep((s) => s + 1);
    } else {
      // Complete lesson!
      setLessonStep(5);
      const updated = new Set(completedStages);
      updated.add(activeStage.id);
      setCompletedStages(updated);
      onAddXp(activeStage.xp || 25);
      sfx.playFanfare();
      triggerConfetti();
    }
  };

  // Boss challenge actions
  const handleSelectBossAnswer = (qIdx, optIdx) => {
    if (bossAnswers[qIdx] !== undefined) return;
    const currentQ = activeStage.challenge.questions[qIdx];
    const isCorrect = optIdx === currentQ.correctIndex;

    const newAnswers = { ...bossAnswers, [qIdx]: optIdx };
    setBossAnswers(newAnswers);

    if (isCorrect) {
      sfx.playCorrect();
      setBossScore((s) => s + 1);
    } else {
      sfx.playWrong();
    }
  };

  const handleNextBossQuestion = () => {
    const questions = activeStage.challenge.questions;
    if (bossStep < questions.length - 1) {
      setBossStep((s) => s + 1);
    } else {
      // Completed Boss Challenge!
      setBossFinished(true);
      const isPassed = (bossScore + (bossAnswers[bossStep] === questions[bossStep].correctIndex ? 1 : 0)) >= questions.length - 1;
      if (isPassed) {
        const updated = new Set(completedStages);
        updated.add(activeStage.id);
        setCompletedStages(updated);
        onAddXp(activeStage.xp || 50);
        sfx.playFanfare();
        triggerConfetti();
      }
    }
  };

  // Calculate overall curriculum completion
  const totalStagesCount = allStages.length;
  const completedCount = allStages.filter((s) => completedStages.has(s.id)).length;
  const progressPercent = Math.round((completedCount / totalStagesCount) * 100);

  return (
    <div className="curriculum-container">
      {/* Curriculum Hero Header */}
      <div className="curriculum-hero-card" style={{ '--accent-c': language.accentColor }}>
        <div className="curriculum-hero-top">
          <div className="curriculum-badge">
            <Shield size={16} />
            <span>Structured CEFR Learning Path</span>
          </div>
          <div className="curriculum-stats-pill">
            <Award size={16} className="text-yellow-400" />
            <span>{completedCount} / {totalStagesCount} Stages Mastered ({progressPercent}%)</span>
          </div>
        </div>

        <h2 className="curriculum-hero-title">{curriculum.title}</h2>
        <p className="curriculum-hero-desc">{curriculum.subtitle}</p>

        {/* Linear Progress Bar */}
        <div className="curriculum-progress-track">
          <div
            className="curriculum-progress-fill"
            style={{ width: `${progressPercent}%`, backgroundColor: language.accentColor }}
          />
        </div>
      </div>

      {/* Units & Stages Roadmap */}
      <div className="curriculum-roadmap">
        {curriculum.units.map((unit) => {
          return (
            <div key={unit.id} className="curriculum-unit-section">
              <div className="unit-header-card" style={{ borderLeftColor: unit.color }}>
                <div className="unit-meta">
                  <span className="unit-number-tag" style={{ backgroundColor: `${unit.color}22`, color: unit.color }}>
                    Unit {unit.unitNumber}
                  </span>
                  <span className="unit-level-tag">{unit.level}</span>
                </div>
                <h3 className="unit-title">{unit.title}</h3>
                <p className="unit-desc">{unit.description}</p>
              </div>

              {/* Stages Path Track */}
              <div className="unit-stages-track">
                {unit.stages.map((stage) => {
                  const globalIdx = allStages.findIndex((s) => s.id === stage.id);
                  const unlocked = isStageUnlocked(stage.id, globalIdx);
                  const completed = isStageCompleted(stage.id);
                  const isCurrent = unlocked && !completed;
                  const isBoss = stage.type === 'checkpoint';

                  return (
                    <div
                      key={stage.id}
                      className={`stage-node-card ${completed ? 'is-completed' : ''} ${isCurrent ? 'is-current' : ''} ${!unlocked ? 'is-locked' : ''} ${isBoss ? 'is-boss-card' : ''}`}
                    >
                      <div className="stage-node-left">
                        <button
                          disabled={!unlocked}
                          onClick={() => handleOpenStage(stage)}
                          className={`stage-circle-btn ${completed ? 'btn-completed' : ''} ${isCurrent ? 'btn-current' : ''} ${!unlocked ? 'btn-locked' : ''}`}
                          style={{
                            '--node-accent': unit.color,
                          }}
                        >
                          {completed ? (
                            <Check size={20} className="node-icon-check" />
                          ) : !unlocked ? (
                            <Lock size={18} className="node-icon-lock" />
                          ) : isBoss ? (
                            <Shield size={22} className="node-icon-boss" />
                          ) : (
                            <Play size={18} className="node-icon-play" />
                          )}
                        </button>
                      </div>

                      <div className="stage-node-body">
                        <div className="stage-node-meta">
                          <span className="stage-type-pill">
                            {isBoss ? '👑 Boss Trial' : `Stage ${globalIdx + 1}`}
                          </span>
                          <span className="stage-xp-pill">+{stage.xp} XP</span>
                        </div>
                        <h4 className="stage-title">{stage.title}</h4>
                        <p className="stage-subtitle">{stage.subtitle}</p>
                      </div>

                      <div className="stage-node-action">
                        {completed ? (
                          <button
                            onClick={() => handleOpenStage(stage)}
                            className="btn-ghost-sm"
                          >
                            <RotateCcw size={14} /> Review
                          </button>
                        ) : isCurrent ? (
                          <button
                            onClick={() => handleOpenStage(stage)}
                            className="btn-primary-sm"
                            style={{ backgroundColor: unit.color }}
                          >
                            <Play size={14} /> Start (+{stage.xp} XP)
                          </button>
                        ) : (
                          <span className="locked-label">Locked</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Lesson Modal Runner */}
      {activeStage && activeStage.type === 'lesson' && (
        <div className="modal-overlay" onClick={handleCloseStage}>
          <div className="modal-card lesson-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="lesson-modal-header">
              <div className="lesson-stepper">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`step-pill ${lessonStep >= step ? 'active' : ''} ${lessonStep > step ? 'done' : ''}`}
                  >
                    {step === 1 && '1. Concept'}
                    {step === 2 && '2. Listen'}
                    {step === 3 && '3. Build'}
                    {step === 4 && '4. Apply'}
                  </div>
                ))}
              </div>
              <button onClick={handleCloseStage} className="btn-close">✕</button>
            </div>

            {/* Step 1: Cultural & Grammar Concept */}
            {lessonStep === 1 && (
              <div className="lesson-step-content animate-fadeIn">
                <div className="lesson-concept-badge">
                  <BookOpen size={18} />
                  <span>Grammar & Cultural Etiquette</span>
                </div>
                <h3 className="lesson-step-title">{activeStage.grammarConcept.title}</h3>
                <p className="lesson-concept-body">{activeStage.grammarConcept.explanation}</p>

                {activeStage.grammarConcept.culturalTip && (
                  <div className="lesson-cultural-tip">
                    <span className="tip-icon">🌍</span>
                    <div>
                      <strong>Cultural Insight:</strong>
                      <p>{activeStage.grammarConcept.culturalTip}</p>
                    </div>
                  </div>
                )}

                <div className="lesson-bottom-action">
                  <button onClick={handleNextStep} className="btn-primary">
                    Proceed to Audio Practice <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Native Audio Ear Training */}
            {lessonStep === 2 && (
              <div className="lesson-step-content animate-fadeIn text-center">
                <div className="lesson-concept-badge">
                  <Volume2 size={18} />
                  <span>Native Pronunciation Ear Training</span>
                </div>

                <div className="audio-focus-card">
                  <div className="audio-target-native">{activeStage.practice.nativePhrase}</div>
                  <div className="audio-target-phonetic">/{activeStage.practice.phonetic}/</div>
                  <div className="audio-target-english">"{activeStage.practice.englishMeaning}"</div>

                  <div className="audio-play-row">
                    <button
                      onClick={() =>
                        speakText(
                          activeStage.practice.nativePhrase,
                          language.speechCode,
                          audioSpeed,
                          activeStage.practice.audioId
                        )
                      }
                      className="btn-large-speaker"
                      title="Listen with native accent"
                    >
                      <Volume2 size={32} />
                    </button>
                    <button
                      onClick={() => setAudioSpeed((s) => (s === 1.0 ? 0.75 : 1.0))}
                      className="btn-speed-toggle"
                    >
                      Speed: {audioSpeed}x
                    </button>
                  </div>
                  <p className="audio-instruction-hint">
                    Tap the speaker to train your ear on the authentic native cadence and glottal flow.
                  </p>
                </div>

                <div className="lesson-bottom-action">
                  <button onClick={handleNextStep} className="btn-primary">
                    Continue to Dictation <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Dictation / Word Assembly */}
            {lessonStep === 3 && (
              <div className="lesson-step-content animate-fadeIn">
                <div className="lesson-concept-badge">
                  <HelpCircle size={18} />
                  <span>Listening Dictation & Sentence Assembly</span>
                </div>
                <p className="dictation-prompt-text">
                  Reconstruct the native sentence for: <strong>"{activeStage.practice.englishMeaning}"</strong>
                </p>

                <div className="dictation-audio-btn-row">
                  <button
                    onClick={() =>
                      speakText(
                        activeStage.practice.nativePhrase,
                        language.speechCode,
                        1.0,
                        activeStage.practice.audioId
                      )
                    }
                    className="audio-btn-sm"
                  >
                    <Volume2 size={16} /> Replay Audio
                  </button>
                </div>

                {/* Placed Tokens Box */}
                <div className={`token-dropzone ${dictationChecked ? (dictationCorrect ? 'correct' : 'error') : ''}`}>
                  {placedTokens.length === 0 ? (
                    <span className="dropzone-placeholder">Tap words below in the correct order...</span>
                  ) : (
                    placedTokens.map((tok) => (
                      <button
                        key={tok.id}
                        onClick={() => handleRemoveToken(tok)}
                        className="token-chip placed"
                        disabled={dictationChecked}
                      >
                        {tok.text}
                      </button>
                    ))
                  )}
                </div>

                {/* Available Tokens */}
                <div className="token-bank">
                  {availableTokens.map((tok) => (
                    <button
                      key={tok.id}
                      onClick={() => handlePickToken(tok)}
                      className="token-chip"
                      disabled={dictationChecked}
                    >
                      {tok.text}
                    </button>
                  ))}
                </div>

                {/* Check Feedback */}
                {dictationChecked && (
                  <div className={`dictation-result-banner ${dictationCorrect ? 'success' : 'error'}`}>
                    {dictationCorrect ? (
                      <span>✓ Flawless word order! You earned +10 XP</span>
                    ) : (
                      <span>
                        ✗ Not quite. The correct phrase is: "
                        <strong>{(activeStage.practice.tokens || []).join(' ')}</strong>"
                      </span>
                    )}
                  </div>
                )}

                <div className="lesson-bottom-action">
                  {!dictationChecked ? (
                    <button
                      disabled={placedTokens.length === 0}
                      onClick={handleCheckDictation}
                      className="btn-primary"
                    >
                      Check Answer
                    </button>
                  ) : (
                    <button onClick={handleNextStep} className="btn-primary">
                      Next Step <ArrowRight size={18} />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Scenario Comprehension */}
            {lessonStep === 4 && (
              <div className="lesson-step-content animate-fadeIn">
                <div className="lesson-concept-badge">
                  <Award size={18} />
                  <span>Real-World Scenario Check</span>
                </div>
                <h3 className="comprehension-q">{activeStage.practice.comprehension.question}</h3>

                <div className="comprehension-options">
                  {activeStage.practice.comprehension.options.map((opt, idx) => {
                    const isCorrect = idx === activeStage.practice.comprehension.correctIndex;
                    const isSelected = selectedAnswer === idx;
                    let cls = 'option-choice-btn';
                    if (comprehensionChecked) {
                      if (isCorrect) cls += ' option-correct';
                      else if (isSelected) cls += ' option-wrong';
                    }

                    return (
                      <button
                        key={idx}
                        disabled={comprehensionChecked}
                        onClick={() => handleSelectOption(idx)}
                        className={cls}
                      >
                        <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                        <span className="opt-text">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {comprehensionChecked && (
                  <div className="comprehension-explanation-box">
                    <p>{activeStage.practice.comprehension.explanation}</p>
                  </div>
                )}

                <div className="lesson-bottom-action">
                  {comprehensionChecked && (
                    <button onClick={handleNextStep} className="btn-primary">
                      Complete Lesson & Earn XP <Sparkles size={18} />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Step 5: Victory Screen */}
            {lessonStep === 5 && (
              <div className="lesson-step-content animate-fadeIn text-center">
                <div className="victory-icon-circle">
                  <Sparkles size={48} className="text-yellow-400" />
                </div>
                <h3 className="victory-title">Stage Mastered!</h3>
                <p className="victory-desc">
                  You successfully completed <strong>{activeStage.title}</strong> and deepened your genuine native comprehension.
                </p>
                <div className="victory-xp-badge">+{activeStage.xp || 25} XP Awarded</div>
                <div className="lesson-bottom-action">
                  <button onClick={handleCloseStage} className="btn-primary">
                    Return to Learning Path <CheckCircle2 size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Boss Challenge Modal */}
      {activeStage && activeStage.type === 'checkpoint' && (
        <div className="modal-overlay" onClick={handleCloseStage}>
          <div className="modal-card boss-modal" onClick={(e) => e.stopPropagation()}>
            <div className="boss-modal-header">
              <div className="boss-badge">
                <Shield size={20} className="text-red-400" />
                <span>Unit Boss Trial Challenge</span>
              </div>
              <button onClick={handleCloseStage} className="btn-close">✕</button>
            </div>

            {!bossFinished ? (
              <div className="boss-modal-content">
                <p className="boss-prompt-context">{activeStage.challenge.prompt}</p>

                <div className="boss-question-card">
                  <div className="boss-q-number">
                    Question {bossStep + 1} of {activeStage.challenge.questions.length}
                  </div>
                  <h3 className="boss-q-text">{activeStage.challenge.questions[bossStep].q}</h3>

                  <div className="boss-options-list">
                    {activeStage.challenge.questions[bossStep].options.map((opt, oIdx) => {
                      const isAnswered = bossAnswers[bossStep] !== undefined;
                      const isSelected = bossAnswers[bossStep] === oIdx;
                      const isCorrect = oIdx === activeStage.challenge.questions[bossStep].correctIndex;
                      let cls = 'boss-opt-btn';
                      if (isAnswered) {
                        if (isCorrect) cls += ' opt-correct';
                        else if (isSelected) cls += ' opt-wrong';
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isAnswered}
                          onClick={() => handleSelectBossAnswer(bossStep, oIdx)}
                          className={cls}
                        >
                          <span className="boss-opt-index">{oIdx + 1}</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="boss-modal-footer">
                  {bossAnswers[bossStep] !== undefined && (
                    <button onClick={handleNextBossQuestion} className="btn-primary">
                      {bossStep < activeStage.challenge.questions.length - 1 ? 'Next Question' : 'Complete Trial'}
                      <ArrowRight size={18} />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="boss-modal-content text-center">
                <div className="victory-icon-circle">
                  <Award size={48} className="text-yellow-400" />
                </div>
                <h3 className="victory-title">Trial Completed!</h3>
                <p className="victory-desc">
                  You scored <strong>{bossScore} / {activeStage.challenge.questions.length}</strong> on the Unit Boss Trial!
                </p>
                <div className="victory-xp-badge">+{activeStage.xp || 50} XP Awarded</div>
                <button onClick={handleCloseStage} className="btn-primary mt-6">
                  Claim Victory & Unlock Next Unit <CheckCircle2 size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
