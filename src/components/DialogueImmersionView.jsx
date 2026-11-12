import React, { useState } from 'react';
import { Volume2, Play, Sparkles, MessageSquare, Check } from './Icons';
import { speakText, sfx } from '../utils/audio';

export default function DialogueImmersionView({ language, onAddXp }) {
  const [activeLineIdx, setActiveLineIdx] = useState(null);
  const [roleplayMode, setRoleplayMode] = useState(false);
  const [practicedLines, setPracticedLines] = useState(new Set());
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  const dialogues = language.immersionDialogues;
  const dialogue = dialogues && dialogues[0];

  if (!dialogue) {
    return <div className="p-8 text-center">No immersion dialogues loaded for this language.</div>;
  }

  const handleSpeakLine = (line, idx) => {
    setActiveLineIdx(idx);
    speakText(line.native, language.speechCode, 1.0, line.audioId || `dial_0_${idx}`);

    if (roleplayMode && line.role === 'learner') {
      const updated = new Set(practicedLines);
      updated.add(idx);
      setPracticedLines(updated);
      onAddXp(5);
      sfx.playCorrect();
    }
  };

  const handlePlayAll = async () => {
    if (isPlayingAll) return;
    setIsPlayingAll(true);

    for (let i = 0; i < dialogue.lines.length; i++) {
      setActiveLineIdx(i);
      speakText(dialogue.lines[i].native, language.speechCode, 1.0, dialogue.lines[i].audioId || `dial_0_${i}`);
      // Wait for line to finish roughly (2.5 seconds per line)
      await new Promise((res) => setTimeout(res, 2700));
    }

    setIsPlayingAll(false);
    onAddXp(20);
    sfx.playFanfare();
  };

  return (
    <div className="dialogue-immersion-container">
      {/* Scenario Header Card */}
      <div className="scenario-card" style={{ '--accent-c': language.accentColor }}>
        <div className="scenario-top">
          <div className="scenario-badge">
            <MessageSquare size={16} />
            <span>Real-World Scenario</span>
          </div>
          <div className="scenario-actions">
            <button
              onClick={() => setRoleplayMode(!roleplayMode)}
              className={`btn-ghost ${roleplayMode ? 'active-pill' : ''}`}
            >
              {roleplayMode ? '🎭 Roleplay Active' : '🎭 Practice Roleplay'}
            </button>
            <button
              onClick={handlePlayAll}
              disabled={isPlayingAll}
              className="btn-primary-sm"
            >
              <Play size={15} /> {isPlayingAll ? 'Playing...' : 'Play Full Scene'}
            </button>
          </div>
        </div>

        <h2 className="scenario-title">{dialogue.title}</h2>
        <p className="scenario-context">{dialogue.context}</p>

        {dialogue.culturalTip && (
          <div className="cultural-tip-card">
            <span className="tip-star">🌍</span>
            <div>
              <strong>Cultural Etiquette: </strong>
              {dialogue.culturalTip}
            </div>
          </div>
        )}
      </div>

      {/* Roleplay instruction banner if active */}
      {roleplayMode && (
        <div className="roleplay-banner">
          <Sparkles size={18} className="text-yellow-400" />
          <span>
            <strong>Roleplay Mode:</strong> Read your parts (marked "You") out loud, then tap the speaker icon or checkmark to earn XP!
          </span>
        </div>
      )}

      {/* Dialogue Thread */}
      <div className="dialogue-thread">
        {dialogue.lines.map((line, idx) => {
          const isLearner = line.role === 'learner';
          const isCurrentActive = activeLineIdx === idx;
          const isPracticed = practicedLines.has(idx);

          return (
            <div
              key={idx}
              className={`dialogue-bubble-row ${isLearner ? 'learner-row' : 'native-row'}`}
            >
              <div className="speaker-avatar" title={line.speaker}>
                {line.avatar || (isLearner ? '🧭' : '🗣️')}
              </div>

              <div
                className={`dialogue-bubble ${isLearner ? 'learner-bubble' : 'native-bubble'} ${isCurrentActive ? 'playing-line' : ''}`}
              >
                <div className="bubble-header">
                  <span className="speaker-name">{line.speaker}</span>
                  <div className="bubble-actions">
                    {roleplayMode && isLearner && (
                      <span className={`practice-status-badge ${isPracticed ? 'done' : ''}`}>
                        {isPracticed ? <Check size={14} /> : 'Your Turn'}
                      </span>
                    )}
                    <button
                      onClick={() => handleSpeakLine(line, idx)}
                      className="audio-btn-sm"
                      title="Listen to this line"
                      aria-label="Listen"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="bubble-native">{line.native}</div>
                <div className="bubble-phonetic">[{line.phonetic}]</div>
                <div className="bubble-english">{line.english}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
