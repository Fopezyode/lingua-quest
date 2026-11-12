import React, { useState, useEffect } from 'react';
import { Zap, RotateCcw, Sparkles, Check, Trophy } from './Icons';
import { sfx, speakText } from '../utils/audio';
import { triggerConfetti } from '../utils/confetti';

export default function MatchGameView({ language, onAddXp }) {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]); // indices
  const [matchedIds, setMatchedIds] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [combo, setCombo] = useState(0);

  // Initialize game
  const initGame = () => {
    if (!language || !language.vocabulary) return;

    // Pick 5 random vocabulary items from the language
    const sample = [...language.vocabulary]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    // Create 10 cards: 5 native, 5 english
    const cardDeck = [];
    sample.forEach((item) => {
      cardDeck.push({
        pairId: item.id,
        text: item.native,
        phonetic: item.phonetic,
        type: 'native',
      });
      cardDeck.push({
        pairId: item.id,
        text: item.english,
        type: 'english',
      });
    });

    // Shuffle the cards
    setCards(cardDeck.sort(() => Math.random() - 0.5));
    setSelectedCards([]);
    setMatchedIds(new Set());
    setMoves(0);
    setTimer(0);
    setTimerActive(true);
    setIsGameWon(false);
    setCombo(0);
  };

  useEffect(() => {
    initGame();
  }, [language]);

  // Timer tick
  useEffect(() => {
    let interval = null;
    if (timerActive && !isGameWon) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, isGameWon]);

  const handleCardClick = (idx) => {
    if (selectedCards.length >= 2) return;
    if (selectedCards.includes(idx)) return;
    const card = cards[idx];
    if (matchedIds.has(card.pairId)) return;

    sfx.playFlip();

    const newSelected = [...selectedCards, idx];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setMoves((m) => m + 1);
      const firstCard = cards[newSelected[0]];
      const secondCard = cards[newSelected[1]];

      // Check if both correspond to same pairId and different types
      if (firstCard.pairId === secondCard.pairId && firstCard.type !== secondCard.type) {
        // Matched!
        sfx.playCorrect();
        const nativeCard = firstCard.type === 'native' ? firstCard : secondCard;
        speakText(nativeCard.text, language.speechCode, 1.0, nativeCard.pairId);
        const updatedMatched = new Set(matchedIds);
        updatedMatched.add(firstCard.pairId);
        setMatchedIds(updatedMatched);
        setCombo((c) => c + 1);
        onAddXp(10 + combo * 2);

        setTimeout(() => {
          setSelectedCards([]);
          // Check win condition
          if (updatedMatched.size === 5) {
            setTimerActive(false);
            setIsGameWon(true);
            sfx.playFanfare();
            triggerConfetti();
            onAddXp(25); // Bonus win XP
          }
        }, 400);
      } else {
        // Mismatch
        sfx.playWrong();
        setCombo(0);
        setTimeout(() => {
          setSelectedCards([]);
        }, 900);
      }
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="match-game-container">
      {/* Game Header Bar */}
      <div className="match-header">
        <div className="match-stats">
          <div className="stat-item">
            <span className="stat-title">⏱ Time:</span>
            <span className="stat-val">{formatTime(timer)}</span>
          </div>
          <div className="stat-item">
            <span className="stat-title">🎯 Moves:</span>
            <span className="stat-val">{moves}</span>
          </div>
          <div className="stat-item">
            <span className="stat-title">🔥 Combo:</span>
            <span className="stat-val combo-badge">x{combo}</span>
          </div>
        </div>

        <button onClick={initGame} className="btn-ghost" title="Reset game">
          <RotateCcw size={16} /> New Game
        </button>
      </div>

      {isGameWon ? (
        <div className="match-won-card">
          <div className="completion-icon-wrapper">
            <Trophy size={48} className="text-yellow-400" />
          </div>
          <h2 className="completion-title">Speed Match Conquered!</h2>
          <p className="completion-desc">
            You linked all 5 pairs in <strong>{formatTime(timer)}</strong> across <strong>{moves} moves</strong>. +25 Bonus XP awarded!
          </p>
          <button onClick={initGame} className="btn-primary">
            <Zap size={18} /> Play Another Round
          </button>
        </div>
      ) : (
        <div className="match-grid">
          {cards.map((card, idx) => {
            const isSelected = selectedCards.includes(idx);
            const isMatched = matchedIds.has(card.pairId);

            let cardClass = 'match-card';
            if (isMatched) cardClass += ' matched';
            else if (isSelected) cardClass += ' selected';
            if (card.type === 'native') cardClass += ' native-type';

            return (
              <button
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={cardClass}
                disabled={isMatched}
              >
                <div className="match-card-content">
                  <span className="match-card-text">{card.text}</span>
                  {card.phonetic && !isMatched && (
                    <span className="match-card-phonetic">[{card.phonetic}]</span>
                  )}
                  {isMatched && (
                    <span className="match-card-check">
                      <Check size={18} />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
