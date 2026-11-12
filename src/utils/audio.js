// High-Fidelity Indigenous / Native Pronunciation Audio Engine + Web Audio SFX
import audioMap from '../data/audioMap.json';

class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playCorrect() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  playWrong() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.setValueAtTime(200, now + 0.15);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch {
      // Audio fallback
    }
  }

  playFlip() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      // Audio fallback
    }
  }

  playFanfare() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);

        gain.gain.setValueAtTime(0.2, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.35);
      });
    } catch {
      // Audio fallback
    }
  }
}

export const sfx = new SoundEffects();

let currentAudio = null;

// Stop any active audio playback
export function stopAudio() {
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) {
      console.warn(e);
    }
    currentAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      console.warn(e);
    }
  }
}

/**
 * Fallback browser TTS if offline and not in audioMap
 */
function fallbackSpeechSynthesis(text, isoLang, rate) {
  if (!('speechSynthesis' in window)) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate;
  utterance.pitch = 1.0;

  let bcp47 = 'en-US';
  if (isoLang === 'ha') bcp47 = 'ha-NG';
  else if (isoLang === 'de') bcp47 = 'de-DE';
  else if (isoLang === 'fr') bcp47 = 'fr-FR';
  else if (isoLang === 'el') bcp47 = 'el-GR';
  else if (isoLang === 'la') bcp47 = 'it-IT';
  else bcp47 = isoLang;

  utterance.lang = bcp47;

  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    const match =
      voices.find(v => (v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Google')) && v.lang.toLowerCase().startsWith(isoLang)) ||
      voices.find(v => v.lang.toLowerCase().startsWith(bcp47.toLowerCase())) ||
      voices.find(v => v.lang.toLowerCase().startsWith(isoLang));

    if (match) {
      utterance.voice = match;
    }
  }

  window.speechSynthesis.speak(utterance);
}

/**
 * Indigenous Native Speaker Audio Engine
 * 1. Checks pre-bundled static native MP3 recordings (instant, offline, genuine native accents)
 * 2. Falls back to local /api/tts proxy endpoint
 * 3. Falls back to browser speech synthesis
 */
export function speakText(text, langCode = 'ha', rate = 1.0, audioId = null) {
  stopAudio();
  if (!text) return;

  // Clean the text
  let cleanText = text.split('/')[0].trim();
  cleanText = cleanText.replace(/\([^)]*\)/g, '').replace(/\[[^\]]*\]/g, '').trim();

  // Normalize language identifier to match audioMap keys: 'hausa', 'german', 'latin', 'greek', 'french'
  let langKey = 'hausa';
  let isoLang = 'ha';
  const l = (langCode || '').toLowerCase();
  if (l.includes('ha') || l.includes('hausa')) { langKey = 'hausa'; isoLang = 'ha'; }
  else if (l.includes('de') || l.includes('german')) { langKey = 'german'; isoLang = 'de'; }
  else if (l.includes('fr') || l.includes('french')) { langKey = 'french'; isoLang = 'fr'; }
  else if (l.includes('el') || l.includes('greek')) { langKey = 'greek'; isoLang = 'el'; }
  else if (l.includes('la') || l.includes('latin')) { langKey = 'latin'; isoLang = 'la'; }

  // 1. Check if we have a pre-bundled static native recording on disk
  let localAudioUrl = null;
  const langAudios = audioMap[langKey];
  if (langAudios) {
    const lower = cleanText.toLowerCase();
    const stripped = lower.replace(/[.,!?;:'"¿¡()[\]]/g, '').trim();

    if (audioId && langAudios[audioId]) {
      localAudioUrl = langAudios[audioId];
    } else if (langAudios[lower]) {
      localAudioUrl = langAudios[lower];
    } else if (langAudios[stripped]) {
      localAudioUrl = langAudios[stripped];
    } else {
      // Find matching key ignoring punctuation
      for (const [key, path] of Object.entries(langAudios)) {
        const normKey = key.replace(/[.,!?;:'"¿¡()[\]]/g, '').trim();
        if (normKey === stripped && normKey.length > 0) {
          localAudioUrl = path;
          break;
        }
      }
    }
  }

  const audioTargetUrl = localAudioUrl || `/api/tts?tl=${isoLang}&q=${encodeURIComponent(cleanText)}`;

  try {
    const audio = new Audio(audioTargetUrl);
    audio.playbackRate = rate;
    currentAudio = audio;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Audio play error, falling back to speech synthesis:', err);
        fallbackSpeechSynthesis(cleanText, isoLang, rate);
      });
    }
  } catch (err) {
    console.warn('Audio exception, falling back to speech synthesis:', err);
    fallbackSpeechSynthesis(cleanText, isoLang, rate);
  }
}
