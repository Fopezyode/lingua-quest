import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Sparkles, ArrowRight, Volume2, HelpCircle } from './Icons';
import { sfx, speakText } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export default function QuizView({ language, onAddXp, onPerfectScore }) {
  const [quizzes, setQuizzes] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // For sentence-scramble questions
  const [placedTokens, setPlacedTokens] = useState([]);
  const [availableTokens, setAvailableTokens] = useState([]);
  const [scrambleStatus, setScrambleStatus] = useState(null); // 'correct' | 'wrong' | null

  useEffect(() => {
    if (language && language.quizzes) {
      setQuizzes(language.quizzes);
      resetQuiz();
    }
  }, [language]);

  const currentQ = quizzes[currentIdx];

  // Setup tokens when moving to a sentence scramble question
  useEffect(() => {
    if (currentQ && currentQ.type === 'sentence-scramble') {
      const allTokens = [...currentQ.tokens, ...(currentQ.distractors || [])]
        .map((text, idx) => ({ id: `token-${idx}-${text}`, text }))
        .sort(() => Math.random() - 0.5);
      setAvailableTokens(allTokens);
      setPlacedTokens([]);
      setScrambleStatus(null);
      setIsAnswered(false);
    } else {
      setSelectedOption(null);
      setIsAnswered(false);
    }
  }, [currentIdx, currentQ]);

  const resetQuiz = () => {
    setCurrentIdx(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setPlacedTokens([]);
    setAvailableTokens([]);
    setScrambleStatus(null);
  };

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      sfx.playCorrect();
      setScore(prev => prev + 1);
      onAddXp(10);
    } else {
      sfx.playWrong();
    }
  };

  // Sentence scramble token actions
  const handlePickToken = (token) => {
    if (isAnswered) return;
    setPlacedTokens(prev => [...prev, token]);
    setAvailableTokens(prev => prev.filter(t => t.id !== token.id));
  };

  const handleRemoveToken = (token) => {
    if (isAnswered) return;
    setPlacedTokens(prev => prev.filter(t => t.id !== token.id));
    setAvailableTokens(prev => [...prev, token]);
  };

  const handleCheckScramble = () => {
    if (isAnswered || placedTokens.length === 0) return;
    const constructed = placedTokens.map(t => t.text).join(' ');
    const isCorrect = constructed.trim() === currentQ.targetSentence.trim();

    setIsAnswered(true);
    if (isCorrect) {
      sfx.playCorrect();
      setScrambleStatus('correct');
      setScore(prev => prev + 1);
      onAddXp(15);
    } else {
      sfx.playWrong();
      setScrambleStatus('wrong');
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < quizzes.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Quiz complete
      setIsFinished(true);
      if (score + (selectedOption === currentQ?.correctIndex || scrambleStatus === 'correct' ? 0 : 0) >= quizzes.length - 1) {
        sfx.playFanfare();
        triggerConfetti();
        if (onPerfectScore) onPerfectScore();
      }
    }
  };

  const getSpeakablePhrase = () => {
    if (currentQ?.speechPhrase) return currentQ.speechPhrase;
    if (currentQ?.type === 'sentence-scramble') return currentQ.targetSentence;
    if (currentQ?.type === 'multiple-choice' && currentQ?.options) {
      return currentQ.options[currentQ.correctIndex];
    }
    return null;
  };

  if (!currentQ && !isFinished) {
    return <div className="p-8 text-center">No quiz questions loaded.</div>;
  }

  if (isFinished) {
    const isPerfect = score === quizzes.length;
    return (
      <div className="quiz-completion-card">
        <div className="completion-icon-wrapper">
          <Sparkles size={52} className="text-yellow-400" />
        </div>
        <h2 className="completion-title">
          {isPerfect ? 'Flawless Victory!' : 'Quiz Completed!'}
        </h2>
        <div className="score-badge-circle">
          <span className="score-num">{score}</span>
          <span className="score-total">/ {quizzes.length}</span>
        </div>
        <p className="completion-desc">
          {isPerfect
            ? `Spectacular! You answered every question correctly in ${language.name}. You earned bonus XP!`
            : `Great practice! Review the tricky points and try again to hit 100% mastery.`}
        </p>
        <button onClick={resetQuiz} className="btn-primary">
          <RotateCcw size={18} /> Retry Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {/* Header & Progress */}
      <div className="quiz-header">
        <div className="quiz-meta">
          <span className="quiz-mode-tag">
            {currentQ.type === 'sentence-scramble' ? '🧩 Sentence Scramble' : '🎯 Multiple Choice'}
          </span>
          <span className="quiz-counter">
            Question {currentIdx + 1} of {quizzes.length}
          </span>
        </div>
        <div className="quiz-score-pill">
          Score: {score}
        </div>
      </div>

      <div className="flashcard-progress-bar">
        <div
          className="flashcard-progress-fill"
          style={{
            width: `${((currentIdx + 1) / quizzes.length) * 100}%`,
            backgroundColor: language.accentColor,
          }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="quiz-card">
        {/* MULTIPLE CHOICE FORMAT */}
        {currentQ.type === 'multiple-choice' && (
          <div className="mcq-view">
            <h3 className="quiz-question-title">{currentQ.question}</h3>

            <div className="quiz-options-grid">
              {currentQ.options.map((option, idx) => {
                let btnClass = 'quiz-option-btn';
                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    btnClass += ' correct';
                  } else if (idx === selectedOption) {
                    btnClass += ' wrong';
                  } else {
                    btnClass += ' faded';
                  }
                } else if (selectedOption === idx) {
                  btnClass += ' selected';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={btnClass}
                    disabled={isAnswered}
                  >
                    <span className="option-letter">{['A', 'B', 'C', 'D'][idx]}</span>
                    <span className="option-text">{option}</span>
                    {isAnswered && idx === currentQ.correctIndex && (
                      <CheckCircle2 size={20} className="option-feedback-icon text-green-500" />
                    )}
                    {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                      <XCircle size={20} className="option-feedback-icon text-red-500" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* SENTENCE SCRAMBLE FORMAT */}
        {currentQ.type === 'sentence-scramble' && (
          <div className="scramble-view">
            <div className="scramble-prompt-box">
              <span className="scramble-prompt-label">Challenge:</span>
              <h3 className="scramble-prompt-text">{currentQ.prompt}</h3>
            </div>

            {/* Staging Rack (where placed tokens land) */}
            <div className={`scramble-rack ${scrambleStatus ? scrambleStatus : ''}`}>
              {placedTokens.length === 0 ? (
                <div className="empty-rack-hint">
                  Tap word tiles below in the correct sequence to build the sentence
                </div>
              ) : (
                placedTokens.map((token) => (
                  <button
                    key={token.id}
                    onClick={() => handleRemoveToken(token)}
                    className="tile-placed"
                    disabled={isAnswered}
                    title="Tap to remove"
                  >
                    {token.text}
                  </button>
                ))
              )}
            </div>

            {/* Word Bank */}
            <div className="scramble-bank">
              {availableTokens.map((token) => (
                <button
                  key={token.id}
                  onClick={() => handlePickToken(token)}
                  className="tile-bank"
                  disabled={isAnswered}
                >
                  {token.text}
                </button>
              ))}
            </div>

            {!isAnswered && (
              <div className="scramble-actions">
                <button
                  onClick={handleCheckScramble}
                  className="btn-primary"
                  disabled={placedTokens.length === 0}
                >
                  Check Sentence Order
                </button>
              </div>
            )}
          </div>
        )}

        {/* Feedback / Explanation Box */}
        {isAnswered && (
          <div className="quiz-explanation-box">
            <div className="explanation-content">
              <div className="explanation-header">
                {currentQ.type === 'multiple-choice' ? (
                  selectedOption === currentQ.correctIndex ? (
                    <span className="feedback-status success">✓ Spot On!</span>
                  ) : (
                    <span className="feedback-status error">✗ Not quite right</span>
                  )
                ) : (
                  scrambleStatus === 'correct' ? (
                    <span className="feedback-status success">✓ Perfectly Assembled!</span>
                  ) : (
                    <span className="feedback-status error">✗ Order mismatch. Correct: "{currentQ.targetSentence}"</span>
                  )
                )}
                {getSpeakablePhrase() && (
                  <button
                    onClick={() => speakText(getSpeakablePhrase(), language.speechCode)}
                    className="audio-btn-sm"
                    title="Listen to native pronunciation"
                  >
                    <Volume2 size={16} />
                  </button>
                )}
              </div>
              <p className="explanation-body">{currentQ.explanation}</p>
            </div>

            <button onClick={handleNextQuestion} className="btn-primary next-q-btn">
              {currentIdx < quizzes.length - 1 ? 'Next Challenge' : 'Complete Quiz'}
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
