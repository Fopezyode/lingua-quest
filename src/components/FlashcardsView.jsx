import React, { useState, useEffect } from 'react';
import { Volume2, RotateCcw, Shuffle, ArrowLeft, ArrowRight, Check, Sparkles } from './Icons';
import { speakText, sfx } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export default function FlashcardsView({ language, onAddXp, onMarkWordMastered, masteredWords }) {
  const [deck, setDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState(1.0); // 1.0x normal or 0.8x slow for clear pronunciation

  // Initialize or reset deck whenever language changes
  useEffect(() => {
    if (language && language.vocabulary) {
      setDeck([...language.vocabulary]);
      setCurrentIndex(0);
      setIsFlipped(false);
      setSessionCompleted(false);
    }
  }, [language]);

  const currentCard = deck[currentIndex];

  const handleFlip = () => {
    sfx.playFlip();
    setIsFlipped(!isFlipped);
  };

  const handleSpeak = (e, text) => {
    e.stopPropagation();
    speakText(text, language.speechCode, audioSpeed, currentCard ? currentCard.id : null);
  };

  const toggleAudioSpeed = (e) => {
    e.stopPropagation();
    setAudioSpeed((s) => (s === 1.0 ? 0.8 : 1.0));
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < deck.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(deck.length - 1);
    }
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  const handleMastered = (e) => {
    e.stopPropagation();
    if (!currentCard) return;

    sfx.playCorrect();
    onAddXp(5);
    onMarkWordMastered(currentCard.id);

    // If last card or all cards mastered
    if (currentIndex >= deck.length - 1) {
      triggerConfetti();
      sfx.playFanfare();
      setSessionCompleted(true);
    } else {
      handleNext();
    }
  };

  const handleRestart = () => {
    setDeck([...language.vocabulary]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionCompleted(false);
  };

  if (!currentCard && !sessionCompleted) {
    return <div className="p-8 text-center">No flashcards available.</div>;
  }

  if (sessionCompleted) {
    return (
      <div className="flashcard-completion-card">
        <div className="completion-icon-wrapper">
          <Sparkles size={48} className="text-yellow-400" />
        </div>
        <h2 className="completion-title">Splendid Work!</h2>
        <p className="completion-desc">
          You cycled through the full beginner deck for <strong>{language.name}</strong>. Keep up the momentum to build long-term memory!
        </p>
        <button onClick={handleRestart} className="btn-primary">
          <RotateCcw size={18} />
          Practice Deck Again
        </button>
      </div>
    );
  }

  const isWordMastered = masteredWords && masteredWords.has(currentCard.id);

  return (
    <div className="flashcards-container">
      {/* Deck Controls Header */}
      <div className="flashcards-header">
        <div className="progress-info">
          <span className="progress-badge">
            Card {currentIndex + 1} of {deck.length}
          </span>
          <span className="category-badge">{currentCard.category}</span>
          {isWordMastered && (
            <span className="mastered-pill">
              <Check size={14} /> Mastered
            </span>
          )}
        </div>

        <div className="flashcards-header-actions">
          <button
            onClick={toggleAudioSpeed}
            className="btn-ghost speed-toggle-pill"
            title="Toggle native speech speed"
          >
            🔊 {audioSpeed === 1.0 ? 'Native (1.0x)' : '🐢 Slow (0.8x)'}
          </button>
          <button
            onClick={handleShuffle}
            className="btn-ghost"
            title="Shuffle Deck"
          >
            <Shuffle size={16} /> Shuffle
          </button>
        </div>
      </div>

      {/* Progress Track */}
      <div className="flashcard-progress-bar">
        <div
          className="flashcard-progress-fill"
          style={{
            width: `${((currentIndex + 1) / deck.length) * 100}%`,
            backgroundColor: language.accentColor,
          }}
        ></div>
      </div>

      {/* The 3D Flip Card */}
      <div
        className={`flashcard-scene ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          {/* Front Face */}
          <div className="flashcard-face flashcard-front">
            <div className="card-top-row">
              <span className="lang-tag">{language.name}</span>
              <button
                onClick={(e) => handleSpeak(e, currentCard.native)}
                className="audio-btn"
                title="Listen to native pronunciation"
                aria-label="Listen"
              >
                <Volume2 size={22} />
              </button>
            </div>

            <div className="card-center">
              <div className="native-word">{currentCard.native}</div>
              <div className="phonetic-word">[{currentCard.phonetic}]</div>
            </div>

            <div className="card-footer-hint">
              <span>Tap card to reveal English meaning ↺</span>
            </div>
          </div>

          {/* Back Face */}
          <div className="flashcard-face flashcard-back">
            <div className="card-top-row">
              <span className="lang-tag">English Meaning</span>
              <button
                onClick={(e) => handleSpeak(e, currentCard.native)}
                className="audio-btn"
                title="Replay pronunciation"
                aria-label="Replay audio"
              >
                <Volume2 size={22} />
              </button>
            </div>

            <div className="card-center">
              <div className="english-translation">{currentCard.english}</div>
              {currentCard.exampleSentence && (
                <div className="example-box">
                  <div className="example-native">
                    "{currentCard.exampleSentence}"
                  </div>
                  <div className="example-meaning">
                    — {currentCard.sentenceTranslation}
                  </div>
                </div>
              )}
            </div>

            {currentCard.tip && (
              <div className="card-tip-badge">
                💡 <strong>Tip:</strong> {currentCard.tip}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flashcard-actions">
        <button
          onClick={handlePrev}
          className="btn-nav"
          title="Previous Card"
          aria-label="Previous card"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          className="btn-action btn-learning"
          title="Next card for further review"
        >
          Still Practicing
        </button>

        <button
          onClick={handleMastered}
          className="btn-action btn-mastered"
          title="Mark card as mastered (+5 XP)"
        >
          <Check size={18} /> Got It! (+5 XP)
        </button>

        <button
          onClick={handleNext}
          className="btn-nav"
          title="Next Card"
          aria-label="Next card"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
