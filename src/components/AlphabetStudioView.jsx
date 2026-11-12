import React, { useState } from 'react';
import { Volume2, Sparkles, BookOpen, Compass } from './Icons';
import { speakText } from '../utils/audio';

export default function AlphabetStudioView({ language }) {
  const [activeLetter, setActiveLetter] = useState(null);
  const alphabetData = language.alphabet;

  if (!alphabetData) {
    return <div className="p-8 text-center">No alphabet guide available.</div>;
  }

  const handlePlaySound = (letter, idx) => {
    setActiveLetter(letter.char);
    const speakPayload = letter.example ? letter.example.split(' ')[0] : letter.char;
    speakText(speakPayload, language.speechCode, 1.0, `letter_${idx}`);
  };

  return (
    <div className="alphabet-studio-container">
      {/* Studio Header Banner */}
      <div className="alphabet-hero-banner" style={{ '--accent-c': language.accentColor }}>
        <div className="alphabet-hero-badge">
          <Compass size={18} />
          <span>Phonetics & Letter Studio</span>
        </div>
        <h2 className="alphabet-hero-title">{alphabetData.title}</h2>
        <p className="alphabet-hero-desc">{alphabetData.description}</p>
      </div>

      {/* Interactive Soundboard Grid */}
      <div className="alphabet-section-header">
        <h3 className="section-title">Tap Any Letter to Listen & Explore</h3>
        <span className="section-subtitle">{alphabetData.letters.length} key sounds</span>
      </div>

      <div className="alphabet-grid">
        {alphabetData.letters.map((letter, idx) => {
          const isSelected = activeLetter === letter.char;
          return (
            <div
              key={idx}
              className={`letter-card ${isSelected ? 'active-letter' : ''}`}
              onClick={() => handlePlaySound(letter, idx)}
            >
              <div className="letter-header">
                <span className="letter-char">{letter.char}</span>
                <button
                  className="audio-btn-sm"
                  title="Listen to pronunciation"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlaySound(letter, idx);
                  }}
                >
                  <Volume2 size={16} />
                </button>
              </div>

              <div className="letter-body">
                <div className="letter-name">{letter.name}</div>
                <div className="letter-ipa">IPA: {letter.ipa}</div>
                <div className="letter-sound-like">
                  <strong>Sounds like:</strong> {letter.soundLike}
                </div>
                {letter.example && (
                  <div className="letter-example">
                    <strong>Example:</strong> <span className="example-term">{letter.example}</span>
                  </div>
                )}
              </div>

              {letter.note && (
                <div className="letter-footer-note">
                  {letter.note}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Special Phonetic & Pronunciation Rules */}
      {alphabetData.specialRules && alphabetData.specialRules.length > 0 && (
        <div className="special-rules-section">
          <div className="rules-section-header">
            <Sparkles size={20} className="text-yellow-500" />
            <h3 className="rules-title">Key Pronunciation Master Rules</h3>
          </div>

          <div className="rules-grid">
            {alphabetData.specialRules.map((rule, idx) => (
              <div key={idx} className="rule-card">
                <div className="rule-number">Rule 0{idx + 1}</div>
                <h4 className="rule-card-title">{rule.title}</h4>
                <p className="rule-card-desc">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
