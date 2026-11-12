import React, { useState, useMemo } from 'react';
import { Search, Volume2, BookOpen, Sparkles, Check } from './Icons';
import { speakText } from '../utils/audio';

export default function GrammarLibraryView({ language, onAddXp }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories present in this language
  const categories = useMemo(() => {
    if (!language || !language.vocabulary) return ['All'];
    const cats = new Set(language.vocabulary.map((v) => v.category));
    return ['All', ...Array.from(cats)];
  }, [language]);

  // Filtered vocabulary list
  const filteredVocabulary = useMemo(() => {
    if (!language || !language.vocabulary) return [];
    return language.vocabulary.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.native.toLowerCase().includes(q) ||
        item.english.toLowerCase().includes(q) ||
        (item.phonetic && item.phonetic.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [language, selectedCategory, searchQuery]);

  const handlePlayAudio = (phrase, id) => {
    speakText(phrase, language.speechCode, 1.0, id);
    onAddXp(1); // Small reward for exploring audio!
  };

  return (
    <div className="grammar-library-container">
      {/* Search & Category Filter Bar */}
      <div className="library-controls-card">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${language.name} words, English meanings, or phonetics...`}
            className="search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="search-clear-btn"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
              style={{
                '--pill-accent': language.accentColor,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Vocabulary Results */}
      <div className="vocabulary-results-section">
        <div className="results-count-bar">
          <span>Showing {filteredVocabulary.length} phrases in {selectedCategory}</span>
        </div>

        {filteredVocabulary.length === 0 ? (
          <div className="no-results-box">
            No phrases match "{searchQuery}". Try another keyword or clear the search.
          </div>
        ) : (
          <div className="vocab-grid">
            {filteredVocabulary.map((item) => (
              <div key={item.id} className="vocab-card">
                <div className="vocab-card-header">
                  <span className="vocab-category-tag">{item.category}</span>
                  <button
                    onClick={() => handlePlayAudio(item.native, item.id)}
                    className="audio-btn-sm"
                    title="Listen to native audio"
                    aria-label="Listen"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>

                <div className="vocab-main">
                  <div className="vocab-native">{item.native}</div>
                  <div className="vocab-phonetic">[{item.phonetic}]</div>
                  <div className="vocab-english">{item.english}</div>
                </div>

                {item.exampleSentence && (
                  <div className="vocab-example">
                    <div className="example-text">"{item.exampleSentence}"</div>
                    <div className="example-sub">— {item.sentenceTranslation}</div>
                  </div>
                )}

                {item.tip && (
                  <div className="vocab-tip">
                    💡 {item.tip}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bite-Sized Grammar Guides */}
      {language.grammarGuide && language.grammarGuide.length > 0 && (
        <div className="grammar-guide-section">
          <div className="rules-section-header">
            <BookOpen size={20} className="text-blue-500" />
            <h3 className="rules-title">Bite-Sized Grammar Guides</h3>
          </div>

          <div className="grammar-cards-grid">
            {language.grammarGuide.map((guide, idx) => (
              <div key={idx} className="grammar-guide-card">
                <h4 className="guide-card-title">{guide.title}</h4>
                <p className="guide-card-explanation">{guide.explanation}</p>

                {guide.examples && guide.examples.length > 0 && (
                  <div className="guide-examples-list">
                    {guide.examples.map((ex, eIdx) => (
                      <div key={eIdx} className="guide-example-row">
                        <span className="guide-example-item">{ex.item}</span>
                        <span className="guide-example-meaning">{ex.meaning}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
