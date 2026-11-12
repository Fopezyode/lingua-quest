import React, { useState, useEffect } from 'react';
import { LANGUAGES } from './data/languages';
import Navbar from './components/Navbar';
import ModeNavigation from './components/ModeNavigation';
import CurriculumPathView from './components/CurriculumPathView';
import ConversationalSandboxView from './components/ConversationalSandboxView';
import FlashcardsView from './components/FlashcardsView';
import QuizView from './components/QuizView';
import MatchGameView from './components/MatchGameView';
import AlphabetStudioView from './components/AlphabetStudioView';
import GrammarLibraryView from './components/GrammarLibraryView';
import DialogueImmersionView from './components/DialogueImmersionView';
import AchievementsModal from './components/AchievementsModal';
import { Globe } from './components/Icons';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('lq_dark_mode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Active language
  const [currentLangId, setCurrentLangId] = useState(() => {
    return localStorage.getItem('lq_active_lang') || 'hausa';
  });

  // Active mode - default to extensive curriculum path
  const [currentMode, setCurrentMode] = useState(() => {
    return localStorage.getItem('lq_active_mode') || 'path';
  });

  // Mastered words set
  const [masteredWords, setMasteredWords] = useState(() => {
    const saved = localStorage.getItem('lq_mastered_words');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  // Explored languages set
  const [exploredLangs, setExploredLangs] = useState(() => {
    const saved = localStorage.getItem('lq_explored_langs');
    return saved ? new Set(JSON.parse(saved)) : new Set(['hausa']);
  });

  // User stats & progress
  const [userStats, setUserStats] = useState(() => {
    const saved = localStorage.getItem('lq_user_stats');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {
      totalXp: 40,
      todayXp: 15,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      masteredCount: 3,
      perfectQuizCount: 0,
      languagesExplored: 1,
      classicalExplored: false,
    };
  });

  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  // Sync theme to root class & localStorage
  useEffect(() => {
    localStorage.setItem('lq_dark_mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync active language
  useEffect(() => {
    localStorage.setItem('lq_active_lang', currentLangId);

    // Track explored languages
    setExploredLangs((prev) => {
      const updated = new Set(prev);
      updated.add(currentLangId);
      localStorage.setItem('lq_explored_langs', JSON.stringify(Array.from(updated)));

      setUserStats((s) => ({
        ...s,
        languagesExplored: updated.size,
        classicalExplored: s.classicalExplored || currentLangId === 'latin' || currentLangId === 'greek',
      }));

      return updated;
    });
  }, [currentLangId]);

  // Persist userStats
  useEffect(() => {
    localStorage.setItem('lq_user_stats', JSON.stringify(userStats));
  }, [userStats]);

  // Sync active mode
  useEffect(() => {
    localStorage.setItem('lq_active_mode', currentMode);
  }, [currentMode]);

  // Persist mastered words
  useEffect(() => {
    localStorage.setItem('lq_mastered_words', JSON.stringify(Array.from(masteredWords)));
  }, [masteredWords]);

  const currentLanguage = LANGUAGES[currentLangId] || LANGUAGES.hausa;

  // Add XP handler
  const handleAddXp = (amount) => {
    setUserStats((prev) => ({
      ...prev,
      totalXp: prev.totalXp + amount,
      todayXp: prev.todayXp + amount,
    }));
  };

  // Mark word mastered
  const handleMarkWordMastered = (wordId) => {
    setMasteredWords((prev) => {
      const updated = new Set(prev);
      updated.add(wordId);
      setUserStats((s) => ({ ...s, masteredCount: updated.size }));
      return updated;
    });
  };

  // Perfect quiz score handler
  const handlePerfectScore = () => {
    setUserStats((prev) => ({
      ...prev,
      perfectQuizCount: prev.perfectQuizCount + 1,
      totalXp: prev.totalXp + 25,
      todayXp: prev.todayXp + 25,
    }));
  };

  // Reset all stats
  const handleResetStats = () => {
    const freshStats = {
      totalXp: 0,
      todayXp: 0,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      masteredCount: 0,
      perfectQuizCount: 0,
      languagesExplored: 1,
      classicalExplored: false,
    };
    setUserStats(freshStats);
    setMasteredWords(new Set());
    setExploredLangs(new Set([currentLangId]));
    localStorage.removeItem('lq_user_stats');
    localStorage.removeItem('lq_mastered_words');
    setIsAchievementsOpen(false);
  };

  return (
    <div
      className={`app-root ${darkMode ? 'theme-dark' : 'theme-light'}`}
      style={{
        '--theme-accent': currentLanguage.accentColor,
        '--theme-accent-bg': currentLanguage.accentBg,
      }}
    >
      {/* Top Navigation */}
      <Navbar
        languages={LANGUAGES}
        currentLangId={currentLangId}
        onSelectLang={(id) => setCurrentLangId(id)}
        userStats={userStats}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
        onOpenAchievements={() => setIsAchievementsOpen(true)}
      />

      <main className="main-content">
        {/* Language Hero Banner */}
        <section className="lang-hero">
          <div className="hero-content">
            <div className="hero-flag-title">
              <span className="hero-flag">{currentLanguage.flag}</span>
              <div>
                <h1 className="hero-title">{currentLanguage.name}</h1>
                <div className="hero-native-name">{currentLanguage.nativeName} • {currentLanguage.family}</div>
              </div>
            </div>
            <p className="hero-overview">{currentLanguage.overview}</p>
            <div className="hero-metadata">
              <span className="hero-badge">👥 {currentLanguage.speakers}</span>
              <span className="hero-badge">💡 {currentLanguage.tagline}</span>
            </div>
          </div>
        </section>

        {/* Interactive Mode Navigation Tabs */}
        <ModeNavigation
          currentMode={currentMode}
          onSelectMode={(mode) => setCurrentMode(mode)}
          activeLangColor={currentLanguage.accentColor}
        />

        {/* Dynamic Mode Content */}
        <div className="mode-view-wrapper">
          {currentMode === 'path' && (
            <CurriculumPathView
              language={currentLanguage}
              onAddXp={handleAddXp}
            />
          )}

          {currentMode === 'sandbox' && (
            <ConversationalSandboxView
              language={currentLanguage}
              onAddXp={handleAddXp}
            />
          )}

          {currentMode === 'flashcards' && (
            <FlashcardsView
              language={currentLanguage}
              onAddXp={handleAddXp}
              onMarkWordMastered={handleMarkWordMastered}
              masteredWords={masteredWords}
            />
          )}

          {currentMode === 'quiz' && (
            <QuizView
              language={currentLanguage}
              onAddXp={handleAddXp}
              onPerfectScore={handlePerfectScore}
            />
          )}

          {currentMode === 'match' && (
            <MatchGameView
              language={currentLanguage}
              onAddXp={handleAddXp}
            />
          )}

          {currentMode === 'alphabet' && (
            <AlphabetStudioView
              language={currentLanguage}
            />
          )}

          {currentMode === 'phrasebook' && (
            <GrammarLibraryView
              language={currentLanguage}
              onAddXp={handleAddXp}
            />
          )}

          {currentMode === 'dialogue' && (
            <DialogueImmersionView
              language={currentLanguage}
              onAddXp={handleAddXp}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer-bar">
        <div className="footer-content">
          <div className="footer-brand">
            <Globe size={18} className="text-indigo-400" />
            <span>LinguaQuest • Master Hausa, German, Latin, Greek & French</span>
          </div>
          <div className="footer-tips">
            <span>✨ Pro-Tip: Tap speaker icons to hear native speech & build auditory memory!</span>
          </div>
        </div>
      </footer>

      {/* Badges / Achievements Modal */}
      <AchievementsModal
        isOpen={isAchievementsOpen}
        onClose={() => setIsAchievementsOpen(false)}
        userStats={userStats}
        onResetStats={handleResetStats}
      />
    </div>
  );
}
