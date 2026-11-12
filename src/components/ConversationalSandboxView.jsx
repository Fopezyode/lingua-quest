import React, { useState, useEffect, useRef } from 'react';
import { PERSONAS } from '../data/personaData';
import {
  Volume2,
  Send,
  Headphones,
  RotateCcw
} from './Icons';
import { speakText, sfx } from '../utils/audio';

export default function ConversationalSandboxView({ language, onAddXp }) {
  const persona = PERSONAS[language.id] || PERSONAS.hausa;

  // Selected scenario
  const [activeScenarioId, setActiveScenarioId] = useState(
    persona.scenarios && persona.scenarios[0] ? persona.scenarios[0].id : null
  );

  // Message conversation thread
  const [messages, setMessages] = useState([
    {
      id: 'msg-0',
      sender: 'persona',
      native: persona.greeting,
      phonetic: persona.greetingPhonetic,
      english: persona.greetingEnglish,
      audioId: persona.greetingAudioId,
      culturalTip: 'In native cultural etiquette, warm greetings establish goodwill before any other interaction.'
    }
  ]);

  // Input text
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTranslations, setShowTranslations] = useState(true);

  // Dictation Challenge Modal state
  const [isDictationOpen, setIsDictationOpen] = useState(false);
  const [dictationIdx, setDictationIdx] = useState(0);
  const [dictationTokens, setDictationTokens] = useState([]);
  const [availableTokens, setAvailableTokens] = useState([]);
  const [dictationChecked, setDictationChecked] = useState(false);
  const [dictationCorrect, setDictationCorrect] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Active scenario object
  const activeScenario =
    persona.scenarios?.find((s) => s.id === activeScenarioId) || persona.scenarios?.[0];

  // Send a user message and generate persona reply
  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    sfx.playFlip();

    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      native: text
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);
    onAddXp(5); // XP for actively engaging in conversation!

    // Find persona response based on keywords
    setTimeout(() => {
      const lower = text.toLowerCase();
      let matchedReply = null;

      if (persona.replies) {
        for (const reply of persona.replies) {
          const hasMatch = reply.keywords.some((kw) => lower.includes(kw.toLowerCase()));
          if (hasMatch) {
            matchedReply = reply;
            break;
          }
        }
      }

      if (!matchedReply) {
        matchedReply = persona.defaultReply;
      }

      const botMsg = {
        id: `msg-bot-${Date.now()}`,
        sender: 'persona',
        native: matchedReply.native,
        phonetic: matchedReply.phonetic,
        english: matchedReply.english,
        culturalTip: matchedReply.culturalTip
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
      sfx.playCorrect();

      // Automatically speak the persona's response
      speakText(matchedReply.native, language.speechCode);
    }, 900);
  };

  // Launch a dictation challenge
  const handleStartDictation = () => {
    if (!persona.dictationChallenges || persona.dictationChallenges.length === 0) return;
    const challenge = persona.dictationChallenges[dictationIdx % persona.dictationChallenges.length];
    setAvailableTokens([...challenge.tokens].sort(() => Math.random() - 0.5));
    setDictationTokens([]);
    setDictationChecked(false);
    setDictationCorrect(false);
    setIsDictationOpen(true);

    // Play initial audio
    speakText(challenge.spokenText, language.speechCode, 1.0, challenge.audioId);
  };

  const handlePickDictationToken = (tok) => {
    if (dictationChecked) return;
    setDictationTokens((prev) => [...prev, tok]);
    setAvailableTokens((prev) => prev.filter((t) => t !== tok));
    sfx.playFlip();
  };

  const handleRemoveDictationToken = (tok) => {
    if (dictationChecked) return;
    setDictationTokens((prev) => prev.filter((t) => t !== tok));
    setAvailableTokens((prev) => [...prev, tok]);
    sfx.playFlip();
  };

  const handleVerifyDictation = () => {
    const challenge = persona.dictationChallenges[dictationIdx % persona.dictationChallenges.length];
    const userText = dictationTokens.join(' ').trim().toLowerCase().replace(/[.,!?;:]/g, '');
    const expected = challenge.spokenText.trim().toLowerCase().replace(/[.,!?;:]/g, '');
    const isCorrect = userText === expected;

    setDictationChecked(true);
    setDictationCorrect(isCorrect);

    if (isCorrect) {
      sfx.playFanfare();
      onAddXp(15);
    } else {
      sfx.playWrong();
    }
  };

  const handleNextDictation = () => {
    const nextIdx = (dictationIdx + 1) % persona.dictationChallenges.length;
    setDictationIdx(nextIdx);
    const nextChallenge = persona.dictationChallenges[nextIdx];
    setAvailableTokens([...nextChallenge.tokens].sort(() => Math.random() - 0.5));
    setDictationTokens([]);
    setDictationChecked(false);
    setDictationCorrect(false);
    speakText(nextChallenge.spokenText, language.speechCode, 1.0, nextChallenge.audioId);
  };

  return (
    <div className="sandbox-container">
      {/* Persona Header Card */}
      <div className="persona-header-card" style={{ '--accent-c': language.accentColor }}>
        <div className="persona-profile-row">
          <div className="persona-avatar-circle">
            <span className="persona-avatar-emoji">{persona.avatar}</span>
            <div className="persona-online-status" title="Active native speaker coach" />
          </div>

          <div className="persona-info-col">
            <div className="persona-name-badge-row">
              <h3 className="persona-name">{persona.name}</h3>
              <span className="persona-location-badge">📍 {persona.location}</span>
            </div>
            <p className="persona-role-text">{persona.role}</p>
            <p className="persona-bio-text">{persona.bio}</p>
          </div>

          {/* Dictation Lab Launcher */}
          <div className="persona-actions-col">
            <button
              onClick={handleStartDictation}
              className="btn-dictation-lab"
              title="Practice native listening & audio transcription"
            >
              <Headphones size={18} />
              <span>Listening Lab</span>
            </button>
            <button
              onClick={() => setShowTranslations(!showTranslations)}
              className={`btn-ghost-sm ${showTranslations ? 'active-pill' : ''}`}
            >
              {showTranslations ? '👁️ Subtitles ON' : '🙈 Subtitles OFF'}
            </button>
          </div>
        </div>

        {/* Scenario Selector Pills */}
        {persona.scenarios && persona.scenarios.length > 0 && (
          <div className="scenario-selector-row">
            <span className="scenario-row-label">Scenarios:</span>
            <div className="scenario-pill-list">
              {persona.scenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenarioId(sc.id)}
                  className={`scenario-pill-btn ${activeScenarioId === sc.id ? 'active' : ''}`}
                >
                  <span>{sc.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Chat Stream */}
      <div className="sandbox-chat-area">
        <div className="chat-messages-thread">
          {messages.map((msg) => {
            const isBot = msg.sender === 'persona';
            return (
              <div
                key={msg.id}
                className={`chat-bubble-row ${isBot ? 'persona-row' : 'user-row'}`}
              >
                {isBot && (
                  <div className="msg-sender-avatar">
                    <span>{persona.avatar}</span>
                  </div>
                )}

                <div className={`chat-bubble ${isBot ? 'bubble-persona' : 'bubble-user'}`}>
                  <div className="bubble-text-header">
                    <span className="bubble-native-text">{msg.native}</span>
                    {isBot && (
                      <button
                        onClick={() => speakText(msg.native, language.speechCode, 1.0, msg.audioId)}
                        className="bubble-audio-btn"
                        title="Listen to native voice"
                      >
                        <Volume2 size={16} />
                      </button>
                    )}
                  </div>

                  {/* Phonetics & English translation for persona messages */}
                  {isBot && showTranslations && (
                    <div className="bubble-translation-box">
                      {msg.phonetic && (
                        <div className="bubble-phonetic">/{msg.phonetic}/</div>
                      )}
                      {msg.english && (
                        <div className="bubble-english">"{msg.english}"</div>
                      )}
                    </div>
                  )}

                  {/* Cultural note if present */}
                  {isBot && msg.culturalTip && (
                    <div className="bubble-cultural-badge">
                      <span className="tip-sparkle">💡</span>
                      <span>{msg.culturalTip}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="chat-bubble-row persona-row">
              <div className="msg-sender-avatar">
                <span>{persona.avatar}</span>
              </div>
              <div className="chat-bubble bubble-persona typing-bubble">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Reply Chips */}
        {activeScenario && activeScenario.starterPrompts && (
          <div className="starter-prompts-bar">
            <span className="starter-label">Quick Replies:</span>
            <div className="starter-chips-scroll">
              {activeScenario.starterPrompts.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => {
                    handleSendMessage(prompt.native);
                    speakText(prompt.native, language.speechCode, 1.0, prompt.audioId);
                  }}
                  className="starter-prompt-chip"
                >
                  <span className="prompt-native">{prompt.native}</span>
                  <span className="prompt-sub">({prompt.english})</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Message Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="chat-input-bar"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Type a message in ${language.name} or English to ${persona.name}...`}
            className="chat-text-input"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="btn-send-message"
            title="Send Message"
          >
            <Send size={18} />
          </button>
        </form>
      </div>

      {/* Dictation / Listening Lab Modal */}
      {isDictationOpen && (
        <div className="modal-overlay" onClick={() => setIsDictationOpen(false)}>
          <div className="modal-card dictation-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dictation-modal-header">
              <div className="dictation-badge">
                <Headphones size={20} className="text-indigo-400" />
                <span>Native Listening & Dictation Lab</span>
              </div>
              <button onClick={() => setIsDictationOpen(false)} className="btn-close">✕</button>
            </div>

            <div className="dictation-modal-content text-center">
              <p className="dictation-intro-text">
                Listen carefully to <strong>{persona.name}</strong>'s authentic voice note and reconstruct the phrase:
              </p>

              {/* Speaker Control */}
              <div className="dictation-speaker-circle-row">
                <button
                  onClick={() => {
                    const c = persona.dictationChallenges[dictationIdx % persona.dictationChallenges.length];
                    speakText(c.spokenText, language.speechCode, 1.0, c.audioId);
                  }}
                  className="btn-large-speaker"
                  title="Play native audio"
                >
                  <Volume2 size={36} />
                </button>
              </div>

              {/* Constructed phrase dropzone */}
              <div className={`token-dropzone ${dictationChecked ? (dictationCorrect ? 'correct' : 'error') : ''}`}>
                {dictationTokens.length === 0 ? (
                  <span className="dropzone-placeholder">Tap words below in the order you hear them...</span>
                ) : (
                  dictationTokens.map((tok, i) => (
                    <button
                      key={i}
                      disabled={dictationChecked}
                      onClick={() => handleRemoveDictationToken(tok)}
                      className="token-chip placed"
                    >
                      {tok}
                    </button>
                  ))
                )}
              </div>

              {/* Available word tokens */}
              <div className="token-bank">
                {availableTokens.map((tok, i) => (
                  <button
                    key={i}
                    disabled={dictationChecked}
                    onClick={() => handlePickDictationToken(tok)}
                    className="token-chip"
                  >
                    {tok}
                  </button>
                ))}
              </div>

              {/* Result banner */}
              {dictationChecked && (
                <div className={`dictation-result-banner ${dictationCorrect ? 'success' : 'error'}`}>
                  {dictationCorrect ? (
                    <div>
                      <strong>✓ Perfect Listening Comprehension!</strong>
                      <p>Meaning: "{persona.dictationChallenges[dictationIdx].translation}" (+15 XP)</p>
                    </div>
                  ) : (
                    <div>
                      <strong>✗ Needs fine-tuning.</strong>
                      <p>
                        Spoken Phrase: "
                        <strong>{persona.dictationChallenges[dictationIdx].spokenText}</strong>" (
                        {persona.dictationChallenges[dictationIdx].translation})
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="dictation-modal-actions">
                {!dictationChecked ? (
                  <button
                    disabled={dictationTokens.length === 0}
                    onClick={handleVerifyDictation}
                    className="btn-primary"
                  >
                    Check Transcription
                  </button>
                ) : (
                  <button onClick={handleNextDictation} className="btn-primary">
                    Next Audio Challenge <RotateCcw size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
