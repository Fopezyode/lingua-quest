import React from 'react';
import { Award, Trophy, Flame, Star, CheckCircle2, RotateCcw } from './Icons';

export default function AchievementsModal({
  isOpen,
  onClose,
  userStats,
  onResetStats
}) {
  if (!isOpen) return null;

  // Compute Level
  const level = Math.floor(userStats.totalXp / 100) + 1;
  const rankTitles = ['Language Novice', 'Word Explorer', 'Polyglot Scout', 'Cultural Ambassador', 'Polyglot Master'];
  const rank = rankTitles[Math.min(rankTitles.length - 1, level - 1)];

  // Achievements definitions
  const achievements = [
    {
      id: 'first_word',
      title: 'First Step',
      desc: 'Mastered your first vocabulary word',
      icon: '🌟',
      unlocked: userStats.masteredCount > 0,
    },
    {
      id: 'streak_keeper',
      title: 'Streak Flame',
      desc: 'Kept your study streak active',
      icon: '🔥',
      unlocked: userStats.streak >= 1,
    },
    {
      id: 'xp_champion',
      title: 'Century Club',
      desc: 'Earned 100 or more total XP',
      icon: '🏆',
      unlocked: userStats.totalXp >= 100,
    },
    {
      id: 'multi_lang',
      title: 'Polyglot Scout',
      desc: 'Explored multiple languages in one session',
      icon: '🌍',
      unlocked: userStats.languagesExplored >= 2,
    },
    {
      id: 'classical_scholar',
      title: 'Classical Scholar',
      desc: 'Practiced Latin or Modern Greek',
      icon: '🏛️',
      unlocked: userStats.classicalExplored,
    },
    {
      id: 'quiz_master',
      title: 'Sharp Shooter',
      desc: 'Achieved a perfect score on a quiz',
      icon: '🎯',
      unlocked: userStats.perfectQuizCount > 0,
    },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <Award size={24} className="text-yellow-400" />
            <h2 className="modal-title">Badges & Achievements</h2>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            ✕
          </button>
        </div>

        {/* Level Banner */}
        <div className="level-banner">
          <div className="level-badge-large">Lvl {level}</div>
          <div className="level-info">
            <h3 className="level-rank-name">{rank}</h3>
            <p className="level-sub">
              {userStats.totalXp} Total XP earned • {unlockedCount} of {achievements.length} Badges Unlocked
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`achievement-card ${ach.unlocked ? 'unlocked' : 'locked'}`}
            >
              <div className="achievement-icon">{ach.icon}</div>
              <div className="achievement-details">
                <div className="achievement-title">
                  {ach.title}
                  {ach.unlocked && (
                    <CheckCircle2 size={16} className="text-green-500 inline-block ml-1" />
                  )}
                </div>
                <div className="achievement-desc">{ach.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <button
            onClick={() => {
              if (window.confirm('Reset all progress, streaks, and XP?')) {
                onResetStats();
              }
            }}
            className="btn-danger-ghost"
          >
            <RotateCcw size={14} /> Reset Progress
          </button>

          <button onClick={onClose} className="btn-primary">
            Keep Learning
          </button>
        </div>
      </div>
    </div>
  );
}
