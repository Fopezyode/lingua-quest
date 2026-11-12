import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LANGUAGES } from './src/data/languages.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicAudioDir = path.join(__dirname, 'public', 'audio');

// Ensure directories
for (const langKey of Object.keys(LANGUAGES)) {
  const dir = path.join(publicAudioDir, langKey);
  fs.mkdirSync(dir, { recursive: true });
}

function cleanText(text) {
  if (!text) return '';
  let clean = text.split('/')[0].trim();
  clean = clean.replace(/\([^)]*\)/g, '').replace(/\[[^\]]*\]/g, '').trim();
  return clean;
}

const langCodeMap = {
  hausa: 'ha',
  german: 'de',
  latin: 'la',
  greek: 'el',
  french: 'fr',
};

async function downloadPhrase(langKey, id, text) {
  const tl = langCodeMap[langKey] || 'en';
  const cleaned = cleanText(text);
  if (!cleaned) return;

  const destFile = path.join(publicAudioDir, langKey, `${id}.mp3`);
  if (fs.existsSync(destFile) && fs.statSync(destFile).size > 100) {
    // Already downloaded
    return;
  }

  const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${tl}&q=${encodeURIComponent(cleaned)}`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });

    if (res.ok) {
      const buf = await res.arrayBuffer();
      fs.writeFileSync(destFile, Buffer.from(buf));
      console.log(`[OK] ${langKey} -> ${id}: "${cleaned}" (${buf.byteLength} bytes)`);
    } else {
      console.warn(`[FAIL ${res.status}] ${langKey} -> ${id}: "${cleaned}"`);
    }
  } catch (err) {
    console.error(`[ERR] ${langKey} -> ${id}: ${err.message}`);
  }

  // Small delay to be polite to the server
  await new Promise((r) => setTimeout(r, 120));
}

async function run() {
  console.log('Starting indigenous audio prefetch...');

  for (const [langKey, langObj] of Object.entries(LANGUAGES)) {
    console.log(`\n--- Fetching audio for ${langObj.name} ---`);

    // 1. Vocabulary
    if (langObj.vocabulary) {
      for (const item of langObj.vocabulary) {
        await downloadPhrase(langKey, item.id, item.native);
      }
    }

    // 2. Alphabet examples
    if (langObj.alphabet && langObj.alphabet.letters) {
      for (let i = 0; i < langObj.alphabet.letters.length; i++) {
        const letter = langObj.alphabet.letters[i];
        const speakPayload = letter.example ? letter.example.split(' ')[0] : letter.char;
        await downloadPhrase(langKey, `letter_${i}`, speakPayload);
      }
    }

    // 3. Immersion Dialogue lines
    if (langObj.immersionDialogues) {
      for (let dIdx = 0; dIdx < langObj.immersionDialogues.length; dIdx++) {
        const d = langObj.immersionDialogues[dIdx];
        for (let lIdx = 0; lIdx < d.lines.length; lIdx++) {
          await downloadPhrase(langKey, `dial_${dIdx}_${lIdx}`, d.lines[lIdx].native);
        }
      }
    }
  }

  console.log('\nAll indigenous audio files successfully pre-cached!');
}

run();
