import React from 'react';
import { Globe, Flame, Trophy, Award, Sun, Moon, Sparkles } from './Icons';

export default function Navbar({
  languages,
  currentLangId,
  onSelectLang,
  userStats,
  darkMode,
  onToggleTheme,
  onOpenAchievements
}) {
  const currentLang = languages[currentLangId];
  const dailyGoalPercent = Math.min(100, Math.round((userStats.todayXp / 50) * 100));

  return (
    <header className="navbar-container">
      <div className="navbar-top">
        {/* Brand */}
        <div className="brand-group">
          <div className="brand-logo">
            <Globe size={26} className="brand-icon" />
            <span className="brand-pulse"></span>
          </div>
          <div>
            <div className="brand-title">LinguaQuest</div>
            <div className="brand-subtitle">Interactive Beginner Polyglot</div>
          </div>
        </div>

        {/* Stats & Actions */}
        <div className="stats-group">
          {/* Streak */}
          <div className="stat-pill streak-pill" title="Current Daily Streak">
            <Flame size={18} className="stat-icon-flame" />
            <span className="stat-value">{userStats.streak}</span>
            <span className="stat-label">days</span>
          </div>

          {/* XP */}
          <div className="stat-pill xp-pill" title="Total XP Earned">
            <Trophy size={18} className="stat-icon-trophy" />
            <span className="stat-value">{userStats.totalXp}</span>
            <span className="stat-label">XP</span>
          </div>

          {/* Daily Goal Meter */}
          <div className="goal-meter" title={`Today's Goal: ${userStats.todayXp}/50 XP`}>
            <div className="goal-track">
              <div
                className="goal-bar"
                style={{ width: `${dailyGoalPercent}%` }}
              ></div>
            </div>
            <span className="goal-text">{dailyGoalPercent}%</span>
          </div>

          {/* Achievements button */}
          <button
            onClick={onOpenAchievements}
            className="btn-icon"
            title="View Badges & Achievements"
            aria-label="Achievements"
          >
            <Award size={19} />
          </button>

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className="btn-icon"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>
      </div>

      {/* Language Selector Bar */}
      <nav className="lang-bar" aria-label="Languages">
        {Object.values(languages).map((lang) => {
          const isActive = lang.id === currentLangId;
          return (
            <button
              key={lang.id}
              onClick={() => onSelectLang(lang.id)}
              className={`lang-tab ${isActive ? 'active' : ''}`}
              style={{
                '--lang-color': lang.accentColor,
              }}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
              {isActive && <span className="lang-active-dot"></span>}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
