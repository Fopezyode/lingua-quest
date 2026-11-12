import React from 'react';
import { Shield, MessageSquare, Layers, HelpCircle, Zap, BookOpen, Compass } from './Icons';

export const MODES = [
  { id: 'path', label: 'Learning Path', icon: Shield, desc: 'CEFR Tree & Trials' },
  { id: 'sandbox', label: 'Coach & Chat', icon: MessageSquare, desc: 'Persona & Audio Lab' },
  { id: 'flashcards', label: 'Flashcards', icon: Layers, desc: '3D Memory Cards' },
  { id: 'quiz', label: 'Quiz Arena', icon: HelpCircle, desc: 'Puzzles & Scramble' },
  { id: 'match', label: 'Speed Match', icon: Zap, desc: 'Pair Matching Game' },
  { id: 'alphabet', label: 'Alphabet & Sounds', icon: Compass, desc: 'Letter Soundboard' },
  { id: 'phrasebook', label: 'Phrasebook & Grammar', icon: BookOpen, desc: 'Curriculum Guide' },
  { id: 'dialogue', label: 'Immersion Dialogues', icon: MessageSquare, desc: 'Real Conversations' },
];

export default function ModeNavigation({ currentMode, onSelectMode, activeLangColor }) {
  return (
    <div className="mode-nav-wrapper">
      <div className="mode-nav-list" role="tablist">
        {MODES.map((mode) => {
          const Icon = mode.icon;
          const isActive = currentMode === mode.id;
          return (
            <button
              key={mode.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectMode(mode.id)}
              className={`mode-button ${isActive ? 'active' : ''}`}
              style={{
                '--active-color': activeLangColor,
              }}
            >
              <Icon size={18} className="mode-icon" />
              <div className="mode-text-container">
                <span className="mode-label">{mode.label}</span>
                <span className="mode-desc">{mode.desc}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
