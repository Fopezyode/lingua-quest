export const LANGUAGES = {
  hausa: {
    id: 'hausa',
    name: 'Hausa',
    nativeName: 'Harshen Hausa',
    flag: '🇳🇬',
    speechCode: 'ha-NG',
    family: 'Afroasiatic (Chadic)',
    speakers: '85+ Million speakers (Nigeria, Niger, Ghana, Cameroon, Chad)',
    tagline: 'The primary lingua franca of West Africa',
    overview: 'Hausa is one of the most widely spoken languages in Africa. It uses the Boko alphabet (Latin script with 5 special hooked letters) and is known for its musical tonal cadence and hospitable greetings.',
    accentColor: '#10b981', // Emerald green
    accentBg: '#ecfdf5',
    alphabet: {
      title: 'Hausa Boko Alphabet & Special Letters',
      description: 'Hausa uses the standard Latin alphabet with 5 unique "hooked" or glottal letters called baƙaƙe masu ƙugiya. Paying attention to these will immediately make your pronunciation authentic!',
      letters: [
        { char: 'Ɓ / ɓ', name: 'Implosive B', ipa: '/ɓ/', soundLike: 'An "air-drawing" B formed by sucking air inward into the throat', example: 'ɓarawo (thief)', note: 'Do not confuse with standard B' },
        { char: 'Ɗ / ɗ', name: 'Implosive D', ipa: '/ɗ/', soundLike: 'A deep D produced with glottal suction', example: 'ɗaya (one)', note: 'Essential for counting numbers' },
        { char: 'Ƙ / ƙ', name: 'Ejective K', ipa: '/kʼ/', soundLike: 'Sharp popping K sound with throat closure', example: 'ƙofa (door)', note: 'Stronger and crisper than English K' },
        { char: 'ʼY / ʼy', name: 'Glottalized Y', ipa: '/ʔj/', soundLike: 'A brief throat catch (glottal stop) followed instantly by Y', example: 'ʼyaʼya (children / fruits)', note: 'Always written with an apostrophe' },
        { char: 'Ts / ts', name: 'Ejective TS', ipa: '/tsʼ/ or /sʼ/', soundLike: 'Crisp popping "ts" sound like in "cats"', example: 'tsuntsu (bird)', note: 'Treated as a distinct single consonant sound' },
        { char: 'A / a', name: 'A', ipa: '/a/', soundLike: 'Like "a" in father', example: 'abinci (food)', note: 'Can be short or drawn long (aa)' },
        { char: 'E / e', name: 'E', ipa: '/e/', soundLike: 'Like "e" in grey', example: 'e (yes)', note: 'Often lengthened in polite conversation' },
        { char: 'I / i', name: 'I', ipa: '/i/', soundLike: 'Like "ee" in meet', example: 'ina (where / I am)', note: 'Very common in question words' },
        { char: 'O / o', name: 'O', ipa: '/o/', soundLike: 'Like "o" in go', example: 'sauka (descend / alight)', note: 'Pure vowel, no diphthong glide' },
        { char: 'U / u', name: 'U', ipa: '/u/', soundLike: 'Like "oo" in moon', example: 'uku (three)', note: 'Rounded lips' }
      ],
      specialRules: [
        { title: 'Tones matter', desc: 'Hausa has high, low, and falling tones. While tone marks are usually omitted in everyday writing, context makes the meaning clear.' },
        { title: 'Long vs Short Vowels', desc: 'Doubled vowels (like "aa" or "ii") are held twice as long as single vowels.' },
        { title: 'Glottal Stops', desc: 'An apostrophe (like in "a\'a" meaning No) represents a quick vocal cord catch.' }
      ]
    },
    grammarGuide: [
      {
        title: 'Subject Pronouns (Wakilan Suna)',
        explanation: 'In Hausa, pronouns change depending on who is doing the action. Politeness matters: plural "Ku" is used to show great respect to elders.',
        examples: [
          { item: 'Ni', meaning: 'I / Me' },
          { item: 'Kai', meaning: 'You (masculine singular)' },
          { item: 'Ke', meaning: 'You (feminine singular)' },
          { item: 'Shi', meaning: 'He / Him' },
          { item: 'Ita', meaning: 'She / Her' },
          { item: 'Mu', meaning: 'We / Us' },
          { item: 'Ku', meaning: 'You all (plural or respectful)' },
          { item: 'Su', meaning: 'They / Them' }
        ]
      },
      {
        title: 'Word Order: SVO (Subject - Verb - Object)',
        explanation: 'Hausa sentence structure is intuitive for English speakers: Subject first, then Verb, then Object.',
        examples: [
          { item: 'Ina son ruwa', meaning: 'I want water (Ina = I am, son = wanting, ruwa = water)' },
          { item: 'Ina jin Hausa', meaning: 'I understand/speak Hausa (jin = hearing/understanding)' }
        ]
      },
      {
        title: 'The Art of Greeting Etiquette',
        explanation: 'In Hausa culture, rushing straight to business without asking about health, family, and work is considered impolite. Always begin with a warm greeting!',
        examples: [
          { item: 'Sannu da aiki', meaning: 'Well done with your work (said to anyone working)' },
          { item: 'Ina kwana? -> Lafiya lau', meaning: 'How was your morning? -> Fine and in good health.' }
        ]
      }
    ],
    vocabulary: [
      { id: 'h1', category: 'Greetings', native: 'Sannu', phonetic: 'sahn-noo', english: 'Hello / Greetings', exampleSentence: 'Sannu abokina!', sentenceTranslation: 'Hello my friend!', tip: 'The universal warm Hausa greeting used anytime.' },
      { id: 'h2', category: 'Greetings', native: 'Ina kwana?', phonetic: 'ee-nah kwah-nah', english: 'Good morning (How did you sleep?)', exampleSentence: 'Ina kwana, Baba?', sentenceTranslation: 'Good morning, Father?', tip: 'Response is always "Lafiya lau" (In peaceful health).' },
      { id: 'h3', category: 'Greetings', native: 'Ina wuni?', phonetic: 'ee-nah woo-nee', english: 'Good afternoon / Good evening', exampleSentence: 'Ina wuni, Hajiya?', sentenceTranslation: 'Good afternoon, Hajiya?', tip: 'Used from mid-day until dusk.' },
      { id: 'h4', category: 'Greetings', native: 'Na gode', phonetic: 'nah goh-deh', english: 'Thank you', exampleSentence: 'Na gode ƙwarai da gaske.', sentenceTranslation: 'Thank you very much indeed.', tip: 'Add "ƙwarai" for deep heartfelt gratitude.' },
      { id: 'h5', category: 'Greetings', native: 'Don Allah', phonetic: 'don ahl-lah', english: 'Please', exampleSentence: 'Kawo ruwa, don Allah.', sentenceTranslation: 'Bring water, please.', tip: 'Literally means "For the sake of God".' },
      { id: 'h6', category: 'Greetings', native: 'Sai an jima', phonetic: 'sigh ahn jee-mah', english: 'See you later / Goodbye', exampleSentence: 'To, sai an jima!', sentenceTranslation: 'Alright, see you later!', tip: 'Friendly and common parting phrase.' },
      { id: 'h7', category: 'Numbers', native: 'Ɗaya', phonetic: 'dah-yah (with hooked d)', english: 'One (1)', exampleSentence: 'Ina son guda ɗaya.', sentenceTranslation: 'I want one piece.', tip: 'Notice the hooked Ɗ.' },
      { id: 'h8', category: 'Numbers', native: 'Biyu', phonetic: 'bee-yoo', english: 'Two (2)', exampleSentence: 'Bani guda biyu.', sentenceTranslation: 'Give me two pieces.', tip: 'Basic number.' },
      { id: 'h9', category: 'Numbers', native: 'Uku', phonetic: 'oo-koo', english: 'Three (3)', exampleSentence: 'Akwai mutum uku.', sentenceTranslation: 'There are three people.', tip: 'Simple phonetic.' },
      { id: 'h10', category: 'Numbers', native: 'Huɗu', phonetic: 'hoo-doo (hooked d)', english: 'Four (4)', exampleSentence: 'Kofofi huɗu.', sentenceTranslation: 'Four doors.', tip: 'Hooked ɗ in second syllable.' },
      { id: 'h11', category: 'Numbers', native: 'Biyar', phonetic: 'bee-yahr', english: 'Five (5)', exampleSentence: 'Minti biyar.', sentenceTranslation: 'Five minutes.', tip: 'Very common time reference.' },
      { id: 'h12', category: 'Numbers', native: 'Goma', phonetic: 'goh-mah', english: 'Ten (10)', exampleSentence: 'Naira goma.', sentenceTranslation: 'Ten Naira.', tip: 'Base for larger decimal counts.' },
      { id: 'h13', category: 'Food & Dining', native: 'Ruwa', phonetic: 'roo-wah', english: 'Water', exampleSentence: 'Ina son shan ruwa.', sentenceTranslation: 'I want to drink water.', tip: 'Life essential.' },
      { id: 'h14', category: 'Food & Dining', native: 'Abinci', phonetic: 'ah-been-chee', english: 'Food / Meal', exampleSentence: 'Abinci ya yi daɗi!', sentenceTranslation: 'The food is delicious!', tip: '"Daɗi" means sweetness or deliciousness.' },
      { id: 'h15', category: 'Food & Dining', native: 'Shinkafa', phonetic: 'sheen-kah-fah', english: 'Rice', exampleSentence: 'Ina son shinkafa da nama.', sentenceTranslation: 'I want rice and meat.', tip: 'A West African staple.' },
      { id: 'h16', category: 'Food & Dining', native: 'Nama', phonetic: 'nah-mah', english: 'Meat / Beef', exampleSentence: 'Wannan naman shanu ne.', sentenceTranslation: 'This is beef.', tip: 'Hausa grilled meat is famously known as Suya.' },
      { id: 'h17', category: 'Everyday & Travel', native: 'Nawa ne wannan?', phonetic: 'nah-wah neh wahn-nahn', english: 'How much is this?', exampleSentence: 'Nawa ne wannan riga?', sentenceTranslation: 'How much is this shirt?', tip: 'Essential shopping and bargaining question.' },
      { id: 'h18', category: 'Everyday & Travel', native: 'Ya yi tsada', phonetic: 'yah yee tsah-dah', english: "It is too expensive", exampleSentence: 'A\'a, ya yi tsada, rage mana!', sentenceTranslation: "No, it's too expensive, discount it for me!", tip: 'Polite bargaining banter expected in open markets.' },
      { id: 'h19', category: 'Everyday & Travel', native: 'Ban gane ba', phonetic: 'bahn gah-neh bah', english: "I do not understand", exampleSentence: 'Yi haƙuri, ban gane ba.', sentenceTranslation: "Sorry, I don't understand.", tip: '"Ba... ba" frames negative sentences in Hausa.' },
      { id: 'h20', category: 'Everyday & Travel', native: 'Sunana...', phonetic: 'soo-nah-nah', english: 'My name is...', exampleSentence: 'Sunana Bello.', sentenceTranslation: 'My name is Bello.', tip: 'Easy way to introduce yourself.' }
    ],
    immersionDialogues: [
      {
        title: 'Bargaining at the Kano Market',
        context: 'You visit a bustling textile & spice stall in Kano, Nigeria. Friendly interaction and polite bargaining are expected.',
        culturalTip: 'Never start asking the price before greeting! Greet first with "Sannu" or "Ina wuni", then inquire with a smile.',
        lines: [
          { speaker: 'You (Baƙo - Guest)', role: 'learner', native: 'Sannu malam! Ina wuni?', phonetic: 'sahn-noo mah-lahm! ee-nah woo-nee?', english: 'Hello sir! Good afternoon!', avatar: '🧭' },
          { speaker: 'Mai Shago (Shopkeeper)', role: 'native', native: 'Lafiya lau! Barka da zuwa! Me kake so?', phonetic: 'lah-fee-yah low! bahr-kah dah zoo-wah! meh kah-keh soh?', english: 'Peace and health! Welcome! What would you like?', avatar: '👳🏾‍♂️' },
          { speaker: 'You (Baƙo - Guest)', role: 'learner', native: 'Ina son wannan yadi. Nawa ne wannan?', phonetic: 'ee-nah sohn wahn-nahn yah-dee. nah-wah neh wahn-nahn?', english: 'I want this fabric. How much is this?', avatar: '🧭' },
          { speaker: 'Mai Shago (Shopkeeper)', role: 'native', native: 'Naira dubu biyar ne.', phonetic: 'nigh-rah doo-boo bee-yahr neh.', english: 'It is five thousand Naira.', avatar: '👳🏾‍♂️' },
          { speaker: 'You (Baƙo - Guest)', role: 'learner', native: 'A\'a, ya yi tsada! Don Allah rage min!', phonetic: 'ah-ah, yah yee tsah-dah! don ahl-lah rah-geh meen!', english: 'Oh no, it is too expensive! Please reduce it for me!', avatar: '🧭' },
          { speaker: 'Mai Shago (Shopkeeper)', role: 'native', native: 'To, kawo dubu huɗu. Na gode!', phonetic: 'toh, kah-woh doo-boo hoo-doo. nah goh-deh!', english: 'Alright, bring four thousand. Thank you!', avatar: '👳🏾‍♂️' }
        ]
      }
    ],
    quizzes: [
      {
        type: 'multiple-choice',
        question: 'What is the standard polite reply to "Ina kwana?" (Good morning)?',
        options: ['Lafiya lau', 'Sai an jima', 'Ya yi tsada', 'Ban gane ba'],
        correctIndex: 0,
        explanation: '"Lafiya lau" translates to "Fine and in peaceful health", the customary warm reply to morning greetings.'
      },
      {
        type: 'multiple-choice',
        question: 'Which hooked letter in Hausa sounds like a popped "ts" (as in "cats")?',
        options: ['Ƙ / ƙ', 'Ɗ / ɗ', 'Ts / ts', 'Ɓ / ɓ'],
        correctIndex: 2,
        explanation: 'The ejective digraph "Ts / ts" is produced with crisp airflow like in "tsuntsu" (bird).'
      },
      {
        type: 'sentence-scramble',
        prompt: 'Build the sentence: "I want water, please."',
        targetSentence: 'Ina son ruwa don Allah',
        tokens: ['Ina', 'son', 'ruwa', 'don', 'Allah'],
        distractors: ['abinci', 'tsada'],
        explanation: '"Ina son" = I want, "ruwa" = water, "don Allah" = please.'
      },
      {
        type: 'multiple-choice',
        question: 'How do you say "Thank you" in Hausa?',
        options: ['Sannu', 'Na gode', 'Don Allah', 'Goma'],
        correctIndex: 1,
        explanation: '"Na gode" literally means "I give thanks".'
      }
    ],
    matchingPairs: [
      { id: 'mp1', native: 'Sannu', english: 'Hello' },
      { id: 'mp2', native: 'Ruwa', english: 'Water' },
      { id: 'mp3', native: 'Na gode', english: 'Thank you' },
      { id: 'mp4', native: 'Ɗaya', english: 'One (1)' },
      { id: 'mp5', native: 'Abinci', english: 'Food' }
    ]
  },

  german: {
    id: 'german',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    speechCode: 'de-DE',
    family: 'Indo-European (West Germanic)',
    speakers: '130+ Million speakers (Germany, Austria, Switzerland, Luxembourg)',
    tagline: 'The language of science, philosophy, engineering, and compound words',
    overview: 'German is famous for logical grammar, three grammatical genders (der, die, das), capitalized nouns, and compound words. Once you understand the building blocks, reading and speaking German is systematic and immensely rewarding.',
    accentColor: '#f59e0b', // Amber/gold
    accentBg: '#fffbeb',
    alphabet: {
      title: 'German Alphabet & Umlauts (Das Alphabet)',
      description: 'German uses the 26 Latin letters plus three umlauts (Ä, Ö, Ü) and the unique ligature "ß" (Eszett / sharp S). Notice that every single noun in German is always capitalized!',
      letters: [
        { char: 'Ä / ä', name: 'A-Umlaut', ipa: '/ɛː/', soundLike: 'Like the "e" in bed or "ai" in air', example: 'Äpfel (apples)', note: 'Can be transcribed as "ae" if keyboard lacks umlauts' },
        { char: 'Ö / ö', name: 'O-Umlaut', ipa: '/øː/', soundLike: 'Shape lips to say "O" but make the sound "E"', example: 'Öl (oil), schön (beautiful)', note: 'Can be transcribed as "oe"' },
        { char: 'Ü / ü', name: 'U-Umlaut', ipa: '/yː/', soundLike: 'Pucker lips for "oo" while saying "ee"', example: 'über (above / over)', note: 'Can be transcribed as "ue"' },
        { char: 'ß', name: 'Eszett (Sharp S)', ipa: '/s/', soundLike: 'A crisp, unvoiced "ss" like in hiss', example: 'Straße (street), heiß (hot)', note: 'Only exists in lower-case in traditional German; preceded by long vowels' },
        { char: 'W / w', name: 'W', ipa: '/v/', soundLike: 'Pronounced like English "V"', example: 'Wasser (water -> sounds like vah-ser)', note: 'German W always makes a V sound' },
        { char: 'V / v', name: 'V', ipa: '/f/', soundLike: 'Pronounced like English "F"', example: 'Vogel (bird), Vater (father)', note: 'German V almost always sounds like an F' },
        { char: 'J / j', name: 'J', ipa: '/j/', soundLike: 'Pronounced like English "Y"', example: 'Ja (yes -> sounds like yah)', note: 'Never sounds like English J' },
        { char: 'Z / z', name: 'Z', ipa: '/ts/', soundLike: 'Pronounced like "ts" in pizza or cats', example: 'Zeit (time -> sounds like tsite)', note: 'Crisp and punchy' },
        { char: 'EI', name: 'EI Diphthong', ipa: '/aɪ/', soundLike: 'Like "eye" or "pie"', example: 'Nein (no), Eins (one)', note: 'Remember: EI sounds like "eye"' },
        { char: 'IE', name: 'IE Diphthong', ipa: '/iː/', soundLike: 'Like "ee" in see', example: 'Bier (beer), Sie (you)', note: 'Remember: IE sounds like "ee"' }
      ],
      specialRules: [
        { title: 'Always Capitalize All Nouns', desc: 'Every noun (person, place, object, concept) must begin with a capital letter: das Buch (the book), der Tisch (the table).' },
        { title: 'The "W" and "V" Flip', desc: 'Remember: W is pronounced /v/ (Wasser = Vah-ser), while V is pronounced /f/ (Vier = Feer).' },
        { title: 'Compound Word Magic', desc: 'Germans combine smaller words to make mega-words: Handschuh (Hand + shoe = glove)!' }
      ]
    },
    grammarGuide: [
      {
        title: 'The Three Genders: Der, Die, Das',
        explanation: 'Every German noun has a grammatical gender: Masculine (der), Feminine (die), and Neuter (das). Always learn the article with the noun!',
        examples: [
          { item: 'der Kaffee', meaning: 'the coffee (masculine)' },
          { item: 'die Butter', meaning: 'the butter (feminine)' },
          { item: 'das Brot', meaning: 'the bread (neuter)' }
        ]
      },
      {
        title: 'Formal "Sie" vs Casual "du"',
        explanation: 'Use "Sie" (capitalized) with strangers, shop clerks, business contacts, and elders. Use "du" with friends, family, children, and pets.',
        examples: [
          { item: 'Wie heißen Sie?', meaning: 'What is your name? (Formal)' },
          { item: 'Wie heißt du?', meaning: 'What is your name? (Informal/Casual)' }
        ]
      },
      {
        title: 'Verb Position Rule #1',
        explanation: 'In a standard main statement, the conjugated verb is ALWAYS the second element in the sentence.',
        examples: [
          { item: 'Ich trinke Kaffee', meaning: 'I drink coffee (Position 1: Ich, Position 2: trinke)' },
          { item: 'Heute trinke ich Kaffee', meaning: 'Today drink I coffee (Verb stays in Position 2!)' }
        ]
      }
    ],
    vocabulary: [
      { id: 'g1', category: 'Greetings', native: 'Hallo', phonetic: 'hah-loh', english: 'Hello', exampleSentence: 'Hallo, wie geht es dir?', sentenceTranslation: 'Hello, how are you?', tip: 'Friendly and universal for all casual situations.' },
      { id: 'g2', category: 'Greetings', native: 'Guten Morgen', phonetic: 'goo-ten mor-gen', english: 'Good morning', exampleSentence: 'Guten Morgen allerseits!', sentenceTranslation: 'Good morning everyone!', tip: 'Used until about 11 AM.' },
      { id: 'g3', category: 'Greetings', native: 'Guten Tag', phonetic: 'goo-ten tahk', english: 'Good day / Hello (formal)', exampleSentence: 'Guten Tag, Herr Schmidt.', sentenceTranslation: 'Good day, Mr. Schmidt.', tip: 'Standard polite daytime greeting.' },
      { id: 'g4', category: 'Greetings', native: 'Guten Abend', phonetic: 'goo-ten ah-bent', english: 'Good evening', exampleSentence: 'Guten Abend zusammen!', sentenceTranslation: 'Good evening everyone!', tip: 'Used from early evening onwards.' },
      { id: 'g5', category: 'Greetings', native: 'Danke schön', phonetic: 'dahn-keh shern', english: 'Thank you very much', exampleSentence: 'Vielen Dank für Ihre Hilfe!', sentenceTranslation: 'Many thanks for your help!', tip: 'Add "schön" or "sehr" for added warmth.' },
      { id: 'g6', category: 'Greetings', native: 'Bitte', phonetic: 'bit-teh', english: 'Please / You are welcome', exampleSentence: 'Ein Wasser, bitte.', sentenceTranslation: 'A water, please.', tip: 'The magical German multi-purpose word for please, welcome, or excuse me.' },
      { id: 'g7', category: 'Greetings', native: 'Tschüss', phonetic: 'chooss (with rounded lips)', english: 'Bye (casual)', exampleSentence: 'Tschüss, bis morgen!', sentenceTranslation: 'Bye, see you tomorrow!', tip: 'Most common informal farewell.' },
      { id: 'g8', category: 'Numbers', native: 'Eins', phonetic: 'eyens', english: 'One (1)', exampleSentence: 'Eins, zwei, drei!', sentenceTranslation: 'One, two, three!', tip: 'Notice the "ei" = eye sound.' },
      { id: 'g9', category: 'Numbers', native: 'Zwei', phonetic: 'tsveye', english: 'Two (2)', exampleSentence: 'Zwei Brötchen, bitte.', sentenceTranslation: 'Two bread rolls, please.', tip: 'Starts with crisp "ts" sound.' },
      { id: 'g10', category: 'Numbers', native: 'Drei', phonetic: 'dry', english: 'Three (3)', exampleSentence: 'Drei Euro, bitte.', sentenceTranslation: 'Three euros, please.', tip: 'Sounds just like English dry.' },
      { id: 'g11', category: 'Numbers', native: 'Vier', phonetic: 'feer', english: 'Four (4)', exampleSentence: 'Vier Personen.', sentenceTranslation: 'Four people.', tip: 'V is pronounced F!' },
      { id: 'g12', category: 'Numbers', native: 'Fünf', phonetic: 'fuunf (rounded lips)', english: 'Five (5)', exampleSentence: 'Es ist fünf Uhr.', sentenceTranslation: "It's five o'clock.", tip: 'Practice the Ü umlaut.' },
      { id: 'g13', category: 'Food & Dining', native: 'das Wasser', phonetic: 'dahs vah-ser', english: 'the water', exampleSentence: 'Ein Glas Wasser, bitte.', sentenceTranslation: 'A glass of water, please.', tip: 'In restaurants, water is usually sparkling (mit Gas) unless you ask for "ohne Gas".' },
      { id: 'g14', category: 'Food & Dining', native: 'das Brot', phonetic: 'dahs broht', english: 'the bread', exampleSentence: 'Deutsches Brot ist weltberühmt.', sentenceTranslation: 'German bread is world famous.', tip: 'Germany has over 3,000 certified bread varieties!' },
      { id: 'g15', category: 'Food & Dining', native: 'der Kaffee', phonetic: 'dair kah-feh', english: 'the coffee', exampleSentence: 'Ich trinke gerne Kaffee mit Milch.', sentenceTranslation: 'I like drinking coffee with milk.', tip: 'Masculine noun.' },
      { id: 'g16', category: 'Food & Dining', native: 'Die Rechnung, bitte', phonetic: 'dee resh-noong bit-teh', english: 'The bill / check, please', exampleSentence: 'Zahlen, bitte! Die Rechnung.', sentenceTranslation: 'Pay please! The bill.', tip: 'German waiters wait until you explicitly request the bill.' },
      { id: 'g17', category: 'Everyday & Travel', native: 'Ja / Nein', phonetic: 'yah / nyen', english: 'Yes / No', exampleSentence: 'Ja, gerne! / Nein, danke.', sentenceTranslation: 'Yes, gladly! / No, thank you.', tip: 'The two most essential responses.' },
      { id: 'g18', category: 'Everyday & Travel', native: 'Ich verstehe nicht', phonetic: 'eesh fer-shtay-eh neesht', english: "I don't understand", exampleSentence: 'Entschuldigung, ich verstehe nicht.', sentenceTranslation: "Excuse me, I don't understand.", tip: 'Super useful for beginner travelers.' },
      { id: 'g19', category: 'Everyday & Travel', native: 'Sprechen Sie Englisch?', phonetic: 'shprekh-en zee eng-leesh', english: 'Do you speak English? (Formal)', exampleSentence: 'Hallo, sprechen Sie Englisch?', sentenceTranslation: 'Hello, do you speak English?', tip: 'Polite way to inquire before switching.' },
      { id: 'g20', category: 'Everyday & Travel', native: 'Ich heiße...', phonetic: 'eesh heye-seh', english: 'My name is...', exampleSentence: 'Ich heiße Lukas.', sentenceTranslation: 'My name is Lukas.', tip: 'Uses the sharp ß (eszett).' }
    ],
    immersionDialogues: [
      {
        title: 'Ordering at a Berlin Bakery (Bäckerei)',
        context: 'You step into a cozy bakery on a crisp morning in Berlin. The aroma of freshly baked Brezeln (pretzels) fills the room.',
        culturalTip: 'Always greet the cashier with "Guten Morgen" or "Hallo" before stating your order!',
        lines: [
          { speaker: 'Verkäuferin (Baker)', role: 'native', native: 'Guten Morgen! Was darf es sein?', phonetic: 'goo-ten mor-gen! vahs dahrf es zeyen?', english: 'Good morning! What can I get for you?', avatar: '👩🏼‍🍳' },
          { speaker: 'You (Kunde - Customer)', role: 'learner', native: 'Guten Morgen! Ich hätte gerne eine Brezel und einen Kaffee, bitte.', phonetic: 'goo-ten mor-gen! eesh het-teh gair-neh eye-neh bret-tsel oont eye-nen kah-feh, bit-teh.', english: 'Good morning! I would like a pretzel and a coffee, please.', avatar: '🥐' },
          { speaker: 'Verkäuferin (Baker)', role: 'native', native: 'Mit Milch und Zucker?', phonetic: 'meet meelkh oont tsoo-ker?', english: 'With milk and sugar?', avatar: '👩🏼‍🍳' },
          { speaker: 'You (Kunde - Customer)', role: 'learner', native: 'Nur mit Milch, bitte. Wie viel kostet das?', phonetic: 'noor meet meelkh, bit-teh. vee feel kos-tet dahs?', english: 'Only with milk, please. How much does that cost?', avatar: '🥐' },
          { speaker: 'Verkäuferin (Baker)', role: 'native', native: 'Das macht vier Euro fünfzig, bitte.', phonetic: 'dahs mahkht feer oy-ro fuunf-tseesh, bit-teh.', english: 'That makes 4.50 Euros, please.', avatar: '👩🏼‍🍳' },
          { speaker: 'You (Kunde - Customer)', role: 'learner', native: 'Hier bitte. Vielen Dank und einen schönen Tag!', phonetic: 'heer bit-teh. fee-len dahnk oont eye-nen sher-nen tahk!', english: 'Here you go. Thank you very much and have a nice day!', avatar: '🥐' }
        ]
      }
    ],
    quizzes: [
      {
        type: 'multiple-choice',
        question: 'How is the German letter "W" pronounced in words like "Wasser"?',
        options: ['Like English "V"', 'Like English "W"', 'Like English "F"', 'Silent'],
        correctIndex: 0,
        explanation: 'In German, "W" is always pronounced like an English "V" (e.g. Wasser sounds like "Vah-ser").'
      },
      {
        type: 'multiple-choice',
        question: 'Which gender article matches "das Brot" (the bread)?',
        options: ['Masculine (der)', 'Neuter (das)', 'Feminine (die)', 'Plural only'],
        correctIndex: 1,
        explanation: '"Das Brot" is neuter gender.'
      },
      {
        type: 'sentence-scramble',
        prompt: 'Arrange the words to say: "A coffee, please."',
        targetSentence: 'Einen Kaffee bitte',
        tokens: ['Einen', 'Kaffee', 'bitte'],
        distractors: ['Wasser', 'Danke'],
        explanation: '"Einen Kaffee, bitte" is the classic polite cafe order.'
      },
      {
        type: 'multiple-choice',
        question: 'Which word means "Please" and also "You are welcome"?',
        options: ['Danke', 'Tschüss', 'Bitte', 'Hallo'],
        correctIndex: 2,
        explanation: '"Bitte" serves as both "please" and the response "you are welcome" (Gern geschehen / Bitte schön).'
      }
    ],
    matchingPairs: [
      { id: 'gmp1', native: 'Guten Tag', english: 'Good day' },
      { id: 'gmp2', native: 'Wasser', english: 'Water' },
      { id: 'gmp3', native: 'Danke schön', english: 'Thank you' },
      { id: 'gmp4', native: 'Eins', english: 'One (1)' },
      { id: 'gmp5', native: 'Tschüss', english: 'Goodbye' }
    ]
  },

  latin: {
    id: 'latin',
    name: 'Latin',
    nativeName: 'Lingua Latina',
    flag: '🏛️',
    speechCode: 'la',
    family: 'Indo-European (Italic)',
    speakers: 'Classical literary language of Rome; official language of Vatican City; ancestor of Romance languages & 60%+ of English vocabulary',
    tagline: 'The timeless foundation of law, science, medicine, and Western thought',
    overview: 'Latin is the mother tongue of French, Spanish, Italian, and Portuguese, and provides the roots for over 60% of high-level English words. Learning Latin gives you an intellectual superpower: instantly unlocking the vocabulary of medicine, biology, law, and literature.',
    accentColor: '#8b5cf6', // Imperial Purple
    accentBg: '#f5f3ff',
    alphabet: {
      title: 'Classical Latin Alphabet & Restored Pronunciation',
      description: 'Classical Latin used 23 letters (no J, U, or W originally; I and V served as both vowels and consonants). Restored Classical pronunciation brings ancient Rome alive with crisp, rhythmic sounds.',
      letters: [
        { char: 'C', name: 'Hard C', ipa: '/k/', soundLike: 'ALWAYS hard like "k" in cat, never soft like "s"', example: 'Cicero (pronounced KEE-keh-ro), Caesar (pronounced KAI-sahr)', note: 'Never soft in Classical Latin' },
        { char: 'V', name: 'Consonantal V', ipa: '/w/', soundLike: 'Pronounced like English "W" in wine', example: 'Veni, vidi, vici (pronounced WEH-nee, WEE-dee, WEE-kee)', note: 'Ancient Romans wrote V for both "u" and "w"' },
        { char: 'G', name: 'Hard G', ipa: '/ɡ/', soundLike: 'ALWAYS hard like "g" in get, never like "gem"', example: 'gens (clan), gladius (sword)', note: 'Always voiced velar plosive' },
        { char: 'AE', name: 'AE Diphthong', ipa: '/aɪ/', soundLike: 'Sounds like "eye" in aisle or sky', example: 'Caesar (KAI-sar), bonae (BOH-nigh)', note: 'Very common noun feminine plural ending' },
        { char: 'OE', name: 'OE Diphthong', ipa: '/ɔɪ/', soundLike: 'Sounds like "oy" in boy or coin', example: 'poena (punishment -> POY-nah)', note: 'Gave rise to English words like penalty' },
        { char: 'T', name: 'Hard T', ipa: '/t/', soundLike: 'Always crisp "t", never "sh" as in nation', example: 'ratio (RAH-tee-oh), natio (NAH-tee-oh)', note: 'Keep it punchy' },
        { char: 'S', name: 'Sibilant S', ipa: '/s/', soundLike: 'Always unvoiced "s" like in hiss, never "z"', example: 'rosa (ROH-sah)', note: 'Pure unvoiced sibilant' },
        { char: 'Long Vowels (ā, ē, ī, ō, ū)', name: 'Macrons', ipa: '/aː, eː, iː, oː, uː/', soundLike: 'Held for double the duration of short vowels', example: 'Rōma (ROH-mah)', note: 'Vowel length changes word meanings!' }
      ],
      specialRules: [
        { title: 'The "C" and "V" Rule', desc: 'In Classical Latin, C is always "K" and V is always "W". Thus, "Veni, vidi, vici" = "Weni, widi, wiki"!' },
        { title: 'No Silent Letters', desc: 'Every single letter in a Latin word is pronounced distinctly: nihil = nee-heel, puella = poo-el-lah.' },
        { title: 'English Word Roots', desc: 'Notice how Latin words built modern language: aqua (water) -> aquarium; videre (to see) -> video; audire (to hear) -> audio!' }
      ]
    },
    grammarGuide: [
      {
        title: 'Flexible Word Order (Inflected Language)',
        explanation: 'Because word endings (cases) tell you who does what to whom, Latin word order is artistic and flexible. Classical writers often favored SOV (Subject-Object-Verb).',
        examples: [
          { item: 'Senatus Populusque Romanus', meaning: 'The Senate and the Roman People (SPQR)' },
          { item: 'Canis puellam amat', meaning: 'The dog loves the girl (canis = subject, puellam = object, amat = verb)' }
        ]
      },
      {
        title: 'Core Cases Made Easy',
        explanation: 'Nominative is the Subject (doing the action), Accusative is the Direct Object (receiving the action), and Genitive shows Possession (of something).',
        examples: [
          { item: 'Amicus (Nominative)', meaning: 'The friend (as the subject)' },
          { item: 'Amicum (Accusative)', meaning: 'The friend (as the object)' },
          { item: 'Amici (Genitive)', meaning: 'Of the friend' }
        ]
      },
      {
        title: 'Latin Mottoes That Shaped History',
        explanation: 'Latin expressions are embedded in law, university crests, and state mottoes around the globe.',
        examples: [
          { item: 'Carpe diem', meaning: 'Seize the day (Horace)' },
          { item: 'Per aspera ad astra', meaning: 'Through hardships to the stars' },
          { item: 'Amor vincit omnia', meaning: 'Love conquers all (Virgil)' }
        ]
      }
    ],
    vocabulary: [
      { id: 'l1', category: 'Greetings', native: 'Salvē!', phonetic: 'sahl-way', english: 'Hello! (to one person)', exampleSentence: 'Salvē, amīce!', sentenceTranslation: 'Hello, my friend!', tip: 'Plural form to a group is "Salvēte!"' },
      { id: 'l2', category: 'Greetings', native: 'Salvēte!', phonetic: 'sahl-way-teh', english: 'Hello! (to a group)', exampleSentence: 'Salvēte, omnēs!', sentenceTranslation: 'Hello, everyone!', tip: 'Used when addressing two or more people.' },
      { id: 'l3', category: 'Greetings', native: 'Valē!', phonetic: 'wah-lay', english: 'Goodbye! / Farewell!', exampleSentence: 'Valē, cāra discipula!', sentenceTranslation: 'Farewell, dear student!', tip: 'Literally means "Be healthy / strong".' },
      { id: 'l4', category: 'Greetings', native: 'Quid agis?', phonetic: 'kweed ah-gees', english: 'How are you? / What are you doing?', exampleSentence: 'Salvē! Quid agis hodiē?', sentenceTranslation: 'Hello! How are you today?', tip: 'Classic conversational icebreaker in Rome.' },
      { id: 'l5', category: 'Greetings', native: 'Grātiās tibi agō', phonetic: 'grah-tee-ahs tee-bee ah-goh', english: 'I give thanks to you / Thank you', exampleSentence: 'Grātiās tibi agō, magister.', sentenceTranslation: 'Thank you, teacher.', tip: 'Root of "grace" and "gratitude".' },
      { id: 'l6', category: 'Greetings', native: 'Quaesō', phonetic: 'kwy-soh', english: 'Please / I ask', exampleSentence: 'Venī hūc, quaesō.', sentenceTranslation: 'Come here, please.', tip: 'Polite request marker.' },
      { id: 'l7', category: 'Numbers', native: 'Ūnus', phonetic: 'oo-noos', english: 'One (1)', exampleSentence: 'Ūnus deus.', sentenceTranslation: 'One god.', tip: 'Root of unicorn, unit, unison.' },
      { id: 'l8', category: 'Numbers', native: 'Duo', phonetic: 'doo-oh', english: 'Two (2)', exampleSentence: 'Duo frātrēs.', sentenceTranslation: 'Two brothers.', tip: 'Root of duel, duet, dual.' },
      { id: 'l9', category: 'Numbers', native: 'Trēs', phonetic: 'trays', english: 'Three (3)', exampleSentence: 'Trēs corōnae.', sentenceTranslation: 'Three crowns.', tip: 'Root of triangle, trio, trinity.' },
      { id: 'l10', category: 'Numbers', native: 'Quattuor', phonetic: 'kwaht-two-or', english: 'Four (4)', exampleSentence: 'Quattuor annī.', sentenceTranslation: 'Four years.', tip: 'Root of quartet, quadrilateral.' },
      { id: 'l11', category: 'Numbers', native: 'Quīnque', phonetic: 'kween-kway', english: 'Five (5)', exampleSentence: 'Quīnque librī.', sentenceTranslation: 'Five books.', tip: 'Root of quintet, quintessential.' },
      { id: 'l12', category: 'Food & Life', native: 'Aqua', phonetic: 'ah-kwah', english: 'Water', exampleSentence: 'Aqua vītae.', sentenceTranslation: 'Water of life.', tip: 'Root of aquatic, aquarium, aqueduct.' },
      { id: 'l13', category: 'Food & Life', native: 'Pānis', phonetic: 'pah-nees', english: 'Bread', exampleSentence: 'Pānem et circēnsēs!', sentenceTranslation: 'Bread and circuses! (Juvenal)', tip: 'Root of French pain and Spanish pan.' },
      { id: 'l14', category: 'Food & Life', native: 'Vīnum', phonetic: 'wee-noom', english: 'Wine', exampleSentence: 'In vīnō vēritās.', sentenceTranslation: 'In wine there is truth.', tip: 'Root of vintage, vineyard, wine.' },
      { id: 'l15', category: 'Food & Life', native: 'Domus', phonetic: 'doh-moos', english: 'Home / House', exampleSentence: 'Domus mea est parva.', sentenceTranslation: 'My house is small.', tip: 'Root of domestic, dome, domicile.' },
      { id: 'l16', category: 'Famous Mottoes', native: 'Carpe diem', phonetic: 'kahr-peh dee-em', english: 'Seize the day', exampleSentence: 'Carpe diem, quam minimum crēdula posterō.', sentenceTranslation: 'Seize the day, trusting as little as possible in tomorrow.', tip: 'Horace\'s timeless wisdom.' },
      { id: 'l17', category: 'Famous Mottoes', native: 'Vēnī, vīdī, vīcī', phonetic: 'way-nee, wee-dee, wee-kee', english: 'I came, I saw, I conquered', exampleSentence: 'Iūlius Caesar dīxit: Vēnī, vīdī, vīcī.', sentenceTranslation: 'Julius Caesar said: I came, I saw, I conquered.', tip: 'Notice the Classical "W" sound!' },
      { id: 'l18', category: 'Famous Mottoes', native: 'Amor vincit omnia', phonetic: 'ah-mor ween-keet ohm-nee-ah', english: 'Love conquers all', exampleSentence: 'Omnia vincit amor, et nōs cēdāmus amōrī.', sentenceTranslation: 'Love conquers all, and let us yield to love.', tip: 'Virgil (Eclogue X).' },
      { id: 'l19', category: 'Everyday & Travel', native: 'Nōn intellegō', phonetic: 'nohn een-tel-leh-goh', english: 'I do not understand', exampleSentence: 'Ignōsce mihi, nōn intellegō.', sentenceTranslation: 'Excuse me, I do not understand.', tip: 'Root of "intelligence".' },
      { id: 'l20', category: 'Everyday & Travel', native: 'Nōmen mihi est...', phonetic: 'noh-men mee-hee est', english: 'My name is...', exampleSentence: 'Nōmen mihi est Marcus.', sentenceTranslation: 'My name is Marcus.', tip: 'Literally: "The name to me is...".' }
    ],
    immersionDialogues: [
      {
        title: 'Encounter in the Roman Forum (Forum Rōmānum)',
        context: 'Two scholars meet beneath the marble arches of the Temple of Saturn in ancient Rome to discuss philosophy and life.',
        culturalTip: 'Romans greeted each other with wishes of health and vigor: "Salvē!" (be healthy!) and "Valē!" (be strong!).',
        lines: [
          { speaker: 'Marcus', role: 'native', native: 'Salvē, Marce! Quid agis hodiē?', phonetic: 'sahl-way, mahr-keh! kweed ah-gees hoh-dee-ay?', english: 'Hello, Marcus! How are you today?', avatar: '🏛️' },
          { speaker: 'Lucius', role: 'learner', native: 'Salvē! Optimē valeō. Ad bibliothēcam eō.', phonetic: 'sahl-way! op-tee-may wah-leh-oh. ahd beeb-lee-oh-thay-kahm eh-oh.', english: 'Hello! I am doing excellently. I am going to the library.', avatar: '📜' },
          { speaker: 'Marcus', role: 'native', native: 'Cūr tantum studēs? Carpe diem, amīce!', phonetic: 'koor tahn-toom stoo-days? kahr-peh dee-em, ah-mee-keh!', english: 'Why do you study so much? Seize the day, friend!', avatar: '🏛️' },
          { speaker: 'Lucius', role: 'learner', native: 'Vērum dīcis! Eāmus ad tabernam bibere vīnum.', phonetic: 'way-room dee-kees! eh-ah-moos ahd tah-behr-nahm bee-beh-reh wee-noom.', english: 'You speak the truth! Let us go to the tavern to drink wine.', avatar: '📜' },
          { speaker: 'Marcus', role: 'native', native: 'Placet! In vīnō vēritās!', phonetic: 'plah-ket! een wee-noh way-ree-tahs!', english: 'Agreed! In wine there is truth!', avatar: '🏛️' },
          { speaker: 'Lucius', role: 'learner', native: 'Ita vērō! Valē ad tempus!', phonetic: 'ee-tah way-roh! wah-lay ahd tem-poos!', english: 'Indeed! Farewell for now!', avatar: '📜' }
        ]
      }
    ],
    quizzes: [
      {
        type: 'multiple-choice',
        question: 'In Classical Latin restored pronunciation, how is the letter "C" pronounced?',
        options: ['Always hard "K" (as in cat)', 'Soft "S" before E or I', 'Like "CH" in cheese', 'Silent'],
        correctIndex: 0,
        explanation: 'In Classical Latin, C is always pronounced like "K". For example, "Cicero" is pronounced "KEE-keh-ro".'
      },
      {
        type: 'multiple-choice',
        question: 'What is the famous translation of Julius Caesar\'s "Vēnī, vīdī, vīcī"?',
        options: ['I came, I saw, I conquered', 'Seize the day', 'Love conquers all', 'Peace be with you'],
        correctIndex: 0,
        explanation: '"Vēnī, vīdī, vīcī" means "I came, I saw, I conquered", announced after his swift victory at the Battle of Zela.'
      },
      {
        type: 'sentence-scramble',
        prompt: 'Assemble the phrase meaning: "Seize the day"',
        targetSentence: 'Carpe diem',
        tokens: ['Carpe', 'diem'],
        distractors: ['vitae', 'magna'],
        explanation: '"Carpe diem" from Horace literally means "pluck / harvest the day".'
      },
      {
        type: 'multiple-choice',
        question: 'How do you say "Hello" to a single person in Latin?',
        options: ['Valē', 'Salvē', 'Grātiās', 'Aqua'],
        correctIndex: 1,
        explanation: '"Salvē!" is hello to one person, while "Salvēte!" is used for a group.'
      }
    ],
    matchingPairs: [
      { id: 'lmp1', native: 'Salvē', english: 'Hello' },
      { id: 'lmp2', native: 'Aqua', english: 'Water' },
      { id: 'lmp3', native: 'Pānis', english: 'Bread' },
      { id: 'lmp4', native: 'Ūnus', english: 'One (1)' },
      { id: 'lmp5', native: 'Valē', english: 'Goodbye' }
    ]
  },

  greek: {
    id: 'greek',
    name: 'Greek (Modern)',
    nativeName: 'Ελληνικά',
    flag: '🇬🇷',
    speechCode: 'el-GR',
    family: 'Indo-European (Hellenic)',
    speakers: '13+ Million speakers (Greece, Cyprus, worldwide diaspora)',
    tagline: 'The cradle of Western civilization, philosophy, theatre, and the arts',
    overview: 'Modern Greek is musical, expressive, and direct heir to over 3,400 years of documented written history. Learning the Greek alphabet takes less than 30 minutes, and unlocks road signs in Athens, café menus in Santorini, and the root words behind English science and art.',
    accentColor: '#0284c7', // Aegean Sea Blue
    accentBg: '#f0f9ff',
    alphabet: {
      title: 'The Greek Alphabet (Το Ελληνικό Αλφάβητο)',
      description: 'The 24 letters of the Greek alphabet are easy to master! You already recognize many from math and science. Tap each letter to inspect its sound and see English cognates.',
      letters: [
        { char: 'Α α', name: 'Alpha', ipa: '/a/', soundLike: 'Like "a" in father', example: 'αγάπη (agapi - love)', note: 'First letter of the alphabet' },
        { char: 'Β β', name: 'Beta (Vita)', ipa: '/v/', soundLike: 'In Modern Greek, pronounced like "V" in violin!', example: 'βιβλίο (vivlio - book)', note: 'Not a "B" sound in Modern Greek' },
        { char: 'Γ γ', name: 'Gamma', ipa: '/ɣ/ or /ʝ/', soundLike: 'A soft throaty "g/y" sound like "y" in yes before e/i', example: 'γάλα (gala - milk)', note: 'Soft guttural sound' },
        { char: 'Δ δ', name: 'Delta', ipa: '/ð/', soundLike: 'Like "th" in "this" or "feather"', example: 'δρόμος (dromos - street / road)', note: 'Voiced dental fricative' },
        { char: 'Ε ε', name: 'Epsilon', ipa: '/e/', soundLike: 'Like "e" in pet', example: 'ευχαριστώ (efcharisto - thanks)', note: 'Short, clean vowel' },
        { char: 'Ζ ζ', name: 'Zeta', ipa: '/z/', soundLike: 'Like "z" in zoo', example: 'ζωή (zoi - life)', note: 'Smooth voiced sibilant' },
        { char: 'Η η', name: 'Eta (Ita)', ipa: '/i/', soundLike: 'Like "ee" in meet', example: 'ήλιος (ilios - sun)', note: 'Pronounced "ee" in Modern Greek' },
        { char: 'Θ θ', name: 'Theta', ipa: '/θ/', soundLike: 'Like "th" in think or theatre', example: 'θάλασσα (thalassa - sea)', note: 'Unvoiced dental fricative' },
        { char: 'Ι ι', name: 'Iota', ipa: '/i/', soundLike: 'Like "ee" in beet', example: 'ιστορία (istoria - history)', note: 'Source of the idiom "not one iota"' },
        { char: 'Κ κ', name: 'Kappa', ipa: '/k/', soundLike: 'Like "k" in kite', example: 'καφές (kafes - coffee)', note: 'Crisp consonant' },
        { char: 'Λ λ', name: 'Lambda', ipa: '/l/', soundLike: 'Like "l" in light', example: 'λεμόνι (lemoni - lemon)', note: 'Pure lateral consonant' },
        { char: 'Μ μ', name: 'Mu (Mi)', ipa: '/m/', soundLike: 'Like "m" in music', example: 'μέλι (meli - honey)', note: 'Root of metric micro-' },
        { char: 'Ν ν', name: 'Nu (Ni)', ipa: '/n/', soundLike: 'Like "n" in name', example: 'νερό (nero - water)', note: 'Looks like English "v" but is N!' },
        { char: 'Ξ ξ', name: 'Xi', ipa: '/ks/', soundLike: 'Like "x" in box', example: 'ξένος (xenos - foreigner/guest)', note: 'Root of xenophile, xenophobia' },
        { char: 'Ο ο', name: 'Omicron', ipa: '/o/', soundLike: 'Like "o" in spot', example: 'όνομα (onoma - name)', note: 'Literally "little o"' },
        { char: 'Π π', name: 'Pi', ipa: '/p/', soundLike: 'Like "p" in park', example: 'παιδί (paidi - child)', note: 'The mathematical constant ratio' },
        { char: 'Ρ ρ', name: 'Rho', ipa: '/r/', soundLike: 'A tap/rolled "r" like in Spanish', example: 'ρολόι (roloi - clock/watch)', note: 'Looks like "p" but is R!' },
        { char: 'Σ σ / ς', name: 'Sigma', ipa: '/s/', soundLike: 'Like "s" in sun', example: 'σπίτι (spiti - house)', note: 'Written "σ" inside a word and "ς" at the very end' },
        { char: 'Τ τ', name: 'Tau', ipa: '/t/', soundLike: 'Like "t" in tea', example: 'τραπέζι (trapezi - table)', note: 'Crisp dental T' },
        { char: 'Υ υ', name: 'Upsilon', ipa: '/i/', soundLike: 'Like "ee" in meet in Modern Greek', example: 'ύπνος (ipnos - sleep)', note: 'Root of hypnosis' },
        { char: 'Φ φ', name: 'Phi', ipa: '/f/', soundLike: 'Like "f" in phone', example: 'φίλος (filos - friend)', note: 'Root of philosophy, philanthropy' },
        { char: 'Χ χ', name: 'Chi', ipa: '/x/ or /ç/', soundLike: 'Rough breathy "ch" like in Scottish loch', example: 'χρόνος (chronos - time)', note: 'Root of chronology' },
        { char: 'Ψ ψ', name: 'Psi', ipa: '/ps/', soundLike: 'Like "ps" in lapse or caps', example: 'ψωμί (psomi - bread)', note: 'Root of psychology' },
        { char: 'Ω ω', name: 'Omega', ipa: '/o/', soundLike: 'Like "o" in open', example: 'ώρα (ora - hour/time)', note: 'Literally "big O", the final letter' }
      ],
      specialRules: [
        { title: 'The "Ne" vs "Ochi" Trap!', desc: 'Caution for English speakers: "Ναι" (Ne) means YES! (Even though it sounds like "nay"). "Όχι" (Ochi) means NO.' },
        { title: 'Digraph Sounds', desc: 'To make /b/ sound, Greek uses "ΜΠ / μπ" (e.g. μπύρα = beer). To make /d/, Greek uses "ΝΤ / ντ" (e.g. ντομάτα = tomato).' },
        { title: 'Stress Accent (Τόνος)', desc: 'Words have an accent mark (ά, έ, ή, ί, ό, ύ, ώ) showing exactly which syllable receives vocal stress.' }
      ]
    },
    grammarGuide: [
      {
        title: 'Three Genders with Clear Articles',
        explanation: 'Modern Greek nouns have three genders: Masculine (ο), Feminine (η), and Neuter (το). The ending of the word usually hints at the gender.',
        examples: [
          { item: 'ο καφές (o kafes)', meaning: 'the coffee (masculine)' },
          { item: 'η θάλασσα (i thalassa)', meaning: 'the sea (feminine)' },
          { item: 'το κρασί (to krasi)', meaning: 'the wine (neuter)' }
        ]
      },
      {
        title: 'Polite "Γεια σας" vs Casual "Γεια σου"',
        explanation: '"Γεια σου" (Yassou) is for one friend or child. "Γεια σας" (Yassas) is for elders, professionals, or any group of people.',
        examples: [
          { item: 'Γεια σου, Ελένη!', meaning: 'Hello, Eleni! (Casual / 1 person)' },
          { item: 'Γεια σας, κύριε Παπαδόπουλε!', meaning: 'Hello, Mr. Papadopoulos! (Polite / Formal)' }
        ]
      },
      {
        title: 'English Words from Greek',
        explanation: 'Over 150,000 English words have Greek roots! Recognizing them makes vocabulary effortless.',
        examples: [
          { item: 'δημοκρατία (dimokratia)', meaning: 'democracy (demos = people + kratos = power)' },
          { item: 'τηλέφωνο (tilefono)', meaning: 'telephone (tele = far + foni = voice)' }
        ]
      }
    ],
    vocabulary: [
      { id: 'gr1', category: 'Greetings', native: 'Γεια σου / Γεια σας', phonetic: 'yah-soo / yah-sahs', english: 'Hello / Goodbye', exampleSentence: 'Γεια σας! Τι κάνετε;', sentenceTranslation: 'Hello! How are you doing? (Formal)', tip: 'Literally means "Health to you!"' },
      { id: 'gr2', category: 'Greetings', native: 'Καλημέρα', phonetic: 'kah-lee-meh-rah', english: 'Good morning', exampleSentence: 'Καλημέρα, όμορφη μέρα!', sentenceTranslation: 'Good morning, beautiful day!', tip: 'Used until about noon or 1 PM.' },
      { id: 'gr3', category: 'Greetings', native: 'Καλησπέρα', phonetic: 'kah-lee-speh-rah', english: 'Good evening', exampleSentence: 'Καλησπέρα σε όλους!', sentenceTranslation: 'Good evening to everyone!', tip: 'Used from afternoon until night.' },
      { id: 'gr4', category: 'Greetings', native: 'Ευχαριστώ', phonetic: 'ef-khah-ree-stoh', english: 'Thank you', exampleSentence: 'Ευχαριστώ πολύ!', sentenceTranslation: 'Thank you very much!', tip: 'Root of "Eucharist".' },
      { id: 'gr5', category: 'Greetings', native: 'Παρακαλώ', phonetic: 'pah-rah-kah-loh', english: 'Please / You are welcome', exampleSentence: 'Έναν καφέ, παρακαλώ.', sentenceTranslation: 'A coffee, please.', tip: 'Used for both "please" and "you\'re welcome".' },
      { id: 'gr6', category: 'Greetings', native: 'Αντίο', phonetic: 'ahn-dee-oh', english: 'Goodbye (farewell)', exampleSentence: 'Αντίο, καλό ταξίδι!', sentenceTranslation: 'Goodbye, have a good trip!', tip: 'A more formal parting.' },
      { id: 'gr7', category: 'Numbers', native: 'Ένα', phonetic: 'eh-nah', english: 'One (1)', exampleSentence: 'Ένα εισιτήριο, παρακαλώ.', sentenceTranslation: 'One ticket, please.', tip: 'Neuter form of one.' },
      { id: 'gr8', category: 'Numbers', native: 'Δύο', phonetic: 'thee-oh', english: 'Two (2)', exampleSentence: 'Δύο καφέδες.', sentenceTranslation: 'Two coffees.', tip: 'Remember Δ is pronounced like "th" in this.' },
      { id: 'gr9', category: 'Numbers', native: 'Τρία', phonetic: 'tree-ah', english: 'Three (3)', exampleSentence: 'Τρία τραπέζια.', sentenceTranslation: 'Three tables.', tip: 'Root of triangle.' },
      { id: 'gr10', category: 'Numbers', native: 'Τέσσερα', phonetic: 'tes-seh-rah', english: 'Four (4)', exampleSentence: 'Τέσσερις φίλοι.', sentenceTranslation: 'Four friends.', tip: 'Root of tetrahedron.' },
      { id: 'gr11', category: 'Numbers', native: 'Πέντε', phonetic: 'pen-deh', english: 'Five (5)', exampleSentence: 'Πέντε λεπτά.', sentenceTranslation: 'Five minutes.', tip: 'Root of pentagon.' },
      { id: 'gr12', category: 'Food & Dining', native: 'Νερό', phonetic: 'neh-roh', english: 'Water', exampleSentence: 'Ένα μπουκάλι νερό, παρακαλώ.', sentenceTranslation: 'A bottle of water, please.', tip: 'Derived from ancient Byzantine "fresh water".' },
      { id: 'gr13', category: 'Food & Dining', native: 'Ψωμί', phonetic: 'psoh-mee', english: 'Bread', exampleSentence: 'Φρέσκο ψωμί.', sentenceTranslation: 'Fresh bread.', tip: 'Notice the Greek letter Ψ (psi).' },
      { id: 'gr14', category: 'Food & Dining', native: 'Καφές', phonetic: 'kah-fes', english: 'Coffee', exampleSentence: 'Έναν ελληνικό καφέ, παρακαλώ.', sentenceTranslation: 'A Greek coffee, please.', tip: 'Try it "μέτριος" (metrios - medium sweet).' },
      { id: 'gr15', category: 'Food & Dining', native: 'Το λογαριασμό, παρακαλώ', phonetic: 'toh loh-gah-ree-ahs-moh, pah-rah-kah-loh', english: 'The bill, please', exampleSentence: 'Μπορούμε να έχουμε το λογαριασμό;', sentenceTranslation: 'May we have the bill?', tip: 'Essential restaurant phrase.' },
      { id: 'gr16', category: 'Everyday & Travel', native: 'Ναι / Όχι', phonetic: 'neh / oh-khee', english: 'Yes / No', exampleSentence: 'Ναι, ευχαριστώ! / Όχι, δεν πειράζει.', sentenceTranslation: "Yes, thank you! / No, it doesn't matter.", tip: 'CRITICAL: Ναι (Ne) means YES!' },
      { id: 'gr17', category: 'Everyday & Travel', native: 'Δεν καταλαβαίνω', phonetic: 'then kah-tah-lah-veh-noh', english: "I don't understand", exampleSentence: 'Συγγνώμη, δεν καταλαβαίνω.', sentenceTranslation: "Excuse me, I don't understand.", tip: 'Very handy for beginners.' },
      { id: 'gr18', category: 'Everyday & Travel', native: 'Μιλάτε αγγλικά;', phonetic: 'mee-lah-teh ahng-glee-kah', english: 'Do you speak English?', exampleSentence: 'Γεια σας, μιλάτε αγγλικά;', sentenceTranslation: 'Hello, do you speak English?', tip: 'Polite inquiry.' },
      { id: 'gr19', category: 'Everyday & Travel', native: 'Πού είναι...;', phonetic: 'poo ee-neh', english: 'Where is...?', exampleSentence: 'Πού είναι η παραλία;', sentenceTranslation: 'Where is the beach?', tip: 'Crucial for navigating Greek islands and cities.' },
      { id: 'gr20', category: 'Everyday & Travel', native: 'Με λένε...', phonetic: 'meh leh-neh', english: 'My name is...', exampleSentence: 'Με λένε Νίκο.', sentenceTranslation: 'My name is Nikos.', tip: 'Literally: "They call me...".' }
    ],
    immersionDialogues: [
      {
        title: 'Ordering at an Athenian Taverna (Ταβέρνα)',
        context: 'You sit at an outdoor table with blue chairs in the historic Plaka neighborhood under the shadow of the Acropolis.',
        culturalTip: 'In Greece, dining is leisurely. You will never be rushed out. When you want to pay, make eye contact and ask for "το λογαριασμό".',
        lines: [
          { speaker: 'Σερβιτόρος (Waiter)', role: 'native', native: 'Καλησπέρα σας! Ένα τραπέζι για δύο;', phonetic: 'kah-lee-speh-rah sahs! eh-nah trah-peh-zee yah thee-oh?', english: 'Good evening! A table for two?', avatar: '🍽️' },
          { speaker: 'You (Πελάτης - Customer)', role: 'learner', native: 'Καλησπέρα! Ναι, παρακαλώ, κοντά στο παράθυρο.', phonetic: 'kah-lee-speh-rah! neh, pah-rah-kah-loh, kohn-dah stoh pah-rah-thee-roh.', english: 'Good evening! Yes, please, near the window.', avatar: '🇬🇷' },
          { speaker: 'Σερβιτόρος (Waiter)', role: 'native', native: 'Ορίστε! Τι θα θέλατε να πιείτε;', phonetic: 'oh-ree-steh! tee thah theh-lah-teh nah pee-ee-teh?', english: 'Here you go! What would you like to drink?', avatar: '🍽️' },
          { speaker: 'You (Πελάτης - Customer)', role: 'learner', native: 'Ένα μπουκάλι νερό και μία χωριάτικη σαλάτα, παρακαλώ.', phonetic: 'eh-nah boo-kah-lee neh-roh keh mee-ah khoh-ryah-tee-kee sah-lah-tah, pah-rah-kah-loh.', english: 'A bottle of water and a Greek village salad, please.', avatar: '🇬🇷' },
          { speaker: 'Σερβιτόρος (Waiter)', role: 'native', native: 'Πολύ ωραία! Και για κυρίως πιάτο;', phonetic: 'poh-lee oh-reh-ah! keh yah kee-ree-ohs pyah-toh?', english: 'Very nice! And for main dish?', avatar: '🍽️' },
          { speaker: 'You (Πελάτης - Customer)', role: 'learner', native: 'Σουβλάκι με πατάτες! Ευχαριστώ πολύ!', phonetic: 'soov-lah-kee meh pah-tah-tes! ef-khah-ree-stoh poh-lee!', english: 'Souvlaki with potatoes! Thank you very much!', avatar: '🇬🇷' }
        ]
      }
    ],
    quizzes: [
      {
        type: 'multiple-choice',
        question: 'What does the Greek word "Ναι" (pronounced "Ne") actually mean in English?',
        options: ['Yes', 'No', 'Never', 'Maybe'],
        correctIndex: 0,
        explanation: '"Ναι" (Ne) means YES! Beginners often confuse it with English "nay" or "no", but "Όχι" is no.'
      },
      {
        type: 'multiple-choice',
        question: 'How is the letter "Β / β" (Beta) pronounced in Modern Greek?',
        options: ['Like "V" in victory', 'Like "B" in boy', 'Like "W" in water', 'Silent'],
        correctIndex: 0,
        explanation: 'In Modern Greek, Beta is pronounced like an English "V" (e.g. βιολί = violin, βιβλίο = book).'
      },
      {
        type: 'sentence-scramble',
        prompt: 'Form the sentence: "A coffee, please."',
        targetSentence: 'Έναν καφέ παρακαλώ',
        tokens: ['Έναν', 'καφέ', 'παρακαλώ'],
        distractors: ['νερό', 'όχι'],
        explanation: '"Έναν καφέ, παρακαλώ" is the quintessential Athenian cafe phrase.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the morning greeting in Greek?',
        options: ['Καλημέρα', 'Καλησπέρα', 'Αντίο', 'Ευχαριστώ'],
        correctIndex: 0,
        explanation: '"Καλημέρα" (Kalimera) comes from καλή (good) + μέρα (day).'
      }
    ],
    matchingPairs: [
      { id: 'grmp1', native: 'Καλημέρα', english: 'Good morning' },
      { id: 'grmp2', native: 'Νερό', english: 'Water' },
      { id: 'grmp3', native: 'Ευχαριστώ', english: 'Thank you' },
      { id: 'grmp4', native: 'Ένα', english: 'One (1)' },
      { id: 'grmp5', native: 'Ψωμί', english: 'Bread' }
    ]
  },

  french: {
    id: 'french',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    speechCode: 'fr-FR',
    family: 'Indo-European (Romance)',
    speakers: '300+ Million speakers across Europe, Africa, North America, and the Caribbean',
    tagline: 'The global language of diplomacy, culinary art, haute couture, and romance',
    overview: 'French is an official language in 29 countries and international bodies. With its melodic rhythm, nasal vowels, and charming liaison between words, French turns everyday speech into poetry.',
    accentColor: '#3b82f6', // French Royal Blue
    accentBg: '#eff6ff',
    alphabet: {
      title: 'French Alphabet & Accent Marks (L\'Alphabet)',
      description: 'French uses the standard 26 Latin letters with 5 essential accent marks that alter pronunciation and distinguish word meanings.',
      letters: [
        { char: 'É / é', name: 'Accent Aigu (Acute)', ipa: '/e/', soundLike: 'Like "ay" in day, but short and clipped', example: 'café (coffee), été (summer)', note: 'Only appears on the letter E' },
        { char: 'È / è', name: 'Accent Grave', ipa: '/ɛ/', soundLike: 'Like "e" in get or pet', example: 'mère (mother), très (very)', note: 'Opens the mouth wider than é' },
        { char: 'Ê / ê', name: 'Accent Circonflexe', ipa: '/ɛ/', soundLike: 'Like "e" in bet, historical marker of a lost S', example: 'fête (party - related to feast), forêt (forest)', note: 'Often marks where a historical "s" disappeared' },
        { char: 'Ç / ç', name: 'Cédille (Cedilla)', ipa: '/s/', soundLike: 'Forces C to make a soft "S" sound before A, O, or U', example: 'français (French), garçon (boy)', note: 'Without the cedilla, "ca" would sound like "ka"' },
        { char: 'Ë / ë', name: 'Tréma (Umlaut/Diaeresis)', ipa: '/i/ or /e/', soundLike: 'Separates two adjacent vowels so both are voiced', example: 'Noël (Christmas - noh-el)', note: 'Prevents vowels from merging into a diphthong' },
        { char: 'R / r', name: 'Guttural R', ipa: '/ʁ/', soundLike: 'Produced in the back of the throat like a soft gargle', example: 'rouge (red), Paris', note: 'Signature French sound' },
        { char: 'U / u', name: 'French U', ipa: '/y/', soundLike: 'Shape lips for "oo" while vocalizing "ee"', example: 'salut (hi), tu (you)', note: 'Different from "ou" sound' },
        { char: 'ON / on', name: 'Nasal ON', ipa: '/ɔ̃/', soundLike: 'Say "song" without pronouncing the "ng"', example: 'bon (good), bonbon (candy)', note: 'Air resonates through the nose' },
        { char: 'AN / EN', name: 'Nasal AN/EN', ipa: '/ɑ̃/', soundLike: 'Say "dawn" through your nose', example: 'France, enfant (child)', note: 'Very common ending' }
      ],
      specialRules: [
        { title: 'Silent Final Consonants', desc: 'The letters D, P, S, T, X, Z are almost always SILENT at the end of French words (e.g. "Paris" = pah-ree, "chat" = shah).' },
        { title: 'The Liaison (Linking)', desc: 'When a word ending in a normally silent consonant is followed by a word starting with a vowel, you link them together: "les amis" = lay-zah-mee!' },
        { title: 'The Politeness Imperative', desc: 'In France, you must ALWAYS say "Bonjour madame / monsieur" upon entering any shop or speaking to anyone.' }
      ]
    },
    grammarGuide: [
      {
        title: 'Masculine vs Feminine: Le vs La',
        explanation: 'French nouns are either masculine (le / un) or feminine (la / une). Plural is always "les / des".',
        examples: [
          { item: 'le croissant', meaning: 'the croissant (masculine)' },
          { item: 'la baguette', meaning: 'the baguette (feminine)' },
          { item: 'les baguettes', meaning: 'the baguettes (plural)' }
        ]
      },
      {
        title: 'Polite "Vous" vs Casual "Tu"',
        explanation: 'Always default to "Vous" with adults you do not know well. Only use "Tu" with close friends, classmates, or children.',
        examples: [
          { item: 'Comment vous appelez-vous?', meaning: 'What is your name? (Formal/Polite)' },
          { item: 'Comment tu t\'appelles?', meaning: 'What is your name? (Casual)' }
        ]
      },
      {
        title: 'Negation Sandwich: Ne... Pas',
        explanation: 'To make a sentence negative, surround the verb with "ne" and "pas".',
        examples: [
          { item: 'Je comprends', meaning: 'I understand' },
          { item: 'Je ne comprends pas', meaning: 'I do not understand (ne + verb + pas)' }
        ]
      }
    ],
    vocabulary: [
      { id: 'f1', category: 'Greetings', native: 'Bonjour', phonetic: 'bohn-zhoor', english: 'Hello / Good morning', exampleSentence: 'Bonjour madame, comment allez-vous?', sentenceTranslation: 'Hello madam, how are you?', tip: 'The universal daytime greeting.' },
      { id: 'f2', category: 'Greetings', native: 'Bonsoir', phonetic: 'bohn-swahr', english: 'Good evening', exampleSentence: 'Bonsoir à tous!', sentenceTranslation: 'Good evening to all!', tip: 'Used from late afternoon onwards.' },
      { id: 'f3', category: 'Greetings', native: 'Salut', phonetic: 'sah-loo', english: 'Hi / Bye (casual)', exampleSentence: 'Salut Pierre, ça va?', sentenceTranslation: 'Hi Pierre, how are things?', tip: 'Final T is silent.' },
      { id: 'f4', category: 'Greetings', native: 'Merci beaucoup', phonetic: 'mair-see boh-koo', english: 'Thank you very much', exampleSentence: 'Merci beaucoup pour votre aide.', sentenceTranslation: 'Thank you very much for your help.', tip: 'Polite and heartfelt.' },
      { id: 'f5', category: 'Greetings', native: 'S\'il vous plaît', phonetic: 'seel voo pleh', english: 'Please (formal)', exampleSentence: 'Un café, s\'il vous plaît.', sentenceTranslation: 'A coffee, please.', tip: 'Literally means "If it pleases you".' },
      { id: 'f6', category: 'Greetings', native: 'Au revoir', phonetic: 'oh ruh-vwahr', english: 'Goodbye', exampleSentence: 'Au revoir et bonne journée!', sentenceTranslation: 'Goodbye and have a nice day!', tip: 'Literally means "Until we see each other again".' },
      { id: 'f7', category: 'Numbers', native: 'Un', phonetic: 'uhn (nasal)', english: 'One (1)', exampleSentence: 'Un croissant.', sentenceTranslation: 'One croissant.', tip: 'Feminine form is "une".' },
      { id: 'f8', category: 'Numbers', native: 'Deux', phonetic: 'duh', english: 'Two (2)', exampleSentence: 'Deux cafés.', sentenceTranslation: 'Two coffees.', tip: 'Final X is silent.' },
      { id: 'f9', category: 'Numbers', native: 'Trois', phonetic: 'trwah', english: 'Three (3)', exampleSentence: 'Trois personnes.', sentenceTranslation: 'Three people.', tip: 'Final S is silent.' },
      { id: 'f10', category: 'Numbers', native: 'Quatre', phonetic: 'kahtr', english: 'Four (4)', exampleSentence: 'Quatre heures.', sentenceTranslation: 'Four hours / 4 o\'clock.', tip: 'Notice crisp T-R.' },
      { id: 'f11', category: 'Numbers', native: 'Cinq', phonetic: 'sank (nasal)', english: 'Five (5)', exampleSentence: 'Cinq minutes.', sentenceTranslation: 'Five minutes.', tip: 'Final Q is pronounced like K.' },
      { id: 'f12', category: 'Food & Dining', native: 'de l\'eau', phonetic: 'duh loh', english: 'water', exampleSentence: 'Une carafe d\'eau, s\'il vous plaît.', sentenceTranslation: 'A pitcher of tap water, please (free in France!).', tip: 'Tap water carafe is free by French law in restaurants.' },
      { id: 'f13', category: 'Food & Dining', native: 'le pain', phonetic: 'luh pan (nasal)', english: 'bread', exampleSentence: 'Du pain frais.', sentenceTranslation: 'Fresh bread.', tip: 'France consumes 30 million baguettes daily.' },
      { id: 'f14', category: 'Food & Dining', native: 'le café', phonetic: 'luh kah-fay', english: 'coffee (espresso)', exampleSentence: 'Un café en terrasse, s\'il vous plaît.', sentenceTranslation: 'A coffee on the terrace, please.', tip: 'Asking for "un café" gives you an espresso.' },
      { id: 'f15', category: 'Food & Dining', native: 'L\'addition, s\'il vous plaît', phonetic: 'lah-dee-syohn seel voo pleh', english: 'The bill / check, please', exampleSentence: 'Garçon, l\'addition s\'il vous plaît.', sentenceTranslation: 'Waiter, the check please.', tip: 'French servers never bring the check until you request it.' },
      { id: 'f16', category: 'Everyday & Travel', native: 'Oui / Non', phonetic: 'wee / nohn', english: 'Yes / No', exampleSentence: 'Oui, avec plaisir! / Non, merci.', sentenceTranslation: 'Yes, with pleasure! / No, thank you.', tip: 'Most common conversational affirmations.' },
      { id: 'f17', category: 'Everyday & Travel', native: 'Je ne comprends pas', phonetic: 'zhuh nuh kohm-prahn pah', english: "I don't understand", exampleSentence: 'Pardon, je ne comprends pas.', sentenceTranslation: "Pardon, I don't understand.", tip: 'Classic "ne... pas" negative sandwich.' },
      { id: 'f18', category: 'Everyday & Travel', native: 'Parlez-vous anglais ?', phonetic: 'pahr-lay voo ahn-gleh', english: 'Do you speak English? (Formal)', exampleSentence: 'Excusez-moi, parlez-vous anglais ?', sentenceTranslation: 'Excuse me, do you speak English?', tip: 'Always start with "Bonjour" before asking this.' },
      { id: 'f19', category: 'Everyday & Travel', native: 'Où est... ?', phonetic: 'oo eh', english: 'Where is... ?', exampleSentence: 'Où est la station de métro ?', sentenceTranslation: 'Where is the metro station?', tip: 'Notice the grave accent on "Où" (meaning where vs ou meaning or).' },
      { id: 'f20', category: 'Everyday & Travel', native: 'Je m\'appelle...', phonetic: 'zhuh mah-pel', english: 'My name is...', exampleSentence: 'Je m\'appelle Camille.', sentenceTranslation: 'My name is Camille.', tip: 'Literally: "I call myself...".' }
    ],
    immersionDialogues: [
      {
        title: 'Morning at a Parisian Café (Au Café Parisien)',
        context: 'You find a sidewalk terrace table in Saint-Germain-des-Prés with a wicker chair facing the bustling morning street.',
        culturalTip: 'Never snap your fingers or yell "garçon!" - simple eye contact and "Monsieur, s\'il vous plaît" is the mark of good manners.',
        lines: [
          { speaker: 'Serveur (Waiter)', role: 'native', native: 'Bonjour monsieur ! Vous avez choisi ?', phonetic: 'bohn-zhoor muh-syur! vooz ah-vay shwah-zee?', english: 'Good morning sir! Have you chosen?', avatar: '☕' },
          { speaker: 'You (Client - Customer)', role: 'learner', native: 'Bonjour ! Oui, je voudrais un café crème et un croissant, s\'il vous plaît.', phonetic: 'bohn-zhoor! wee, zhuh voo-dreh uhn kah-fay krehm ay uhn krwah-sahn, seel voo pleh.', english: 'Good morning! Yes, I would like a coffee with cream and a croissant, please.', avatar: '🥐' },
          { speaker: 'Serveur (Waiter)', role: 'native', native: 'Très bien. Et avec ceci ?', phonetic: 'treh byan. ay ah-vek suh-see?', english: 'Very good. And with that?', avatar: '☕' },
          { speaker: 'You (Client - Customer)', role: 'learner', native: 'Ce sera tout, merci beaucoup !', phonetic: 'suh seh-rah too, mair-see boh-koo!', english: 'That will be all, thank you very much!', avatar: '🥐' },
          { speaker: 'Serveur (Waiter)', role: 'native', native: 'Parfait, je vous apporte ça tout de suite.', phonetic: 'pahr-feh, zhuh vooz ah-port sah too duh sweet.', english: 'Perfect, I will bring that to you right away.', avatar: '☕' }
        ]
      }
    ],
    quizzes: [
      {
        type: 'multiple-choice',
        question: 'Are final consonants like D, S, and T usually pronounced in French?',
        options: ['No, they are usually silent', 'Yes, always pronounced loudly', 'Only pronounced in winter', 'Only if capital letters'],
        correctIndex: 0,
        explanation: 'In French, final consonants (like the "s" in Paris, or the "t" in chat) are almost always silent unless linked via liaison.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the purpose of the cédille in "Français" (ç)?',
        options: ['It makes the C sound like a soft "S"', 'It makes the C sound like a "K"', 'It makes the letter silent', 'It indicates a double letter'],
        correctIndex: 0,
        explanation: 'The cedilla (ç) forces the C to produce a soft /s/ sound in front of vowels A, O, or U where it would otherwise sound like K.'
      },
      {
        type: 'sentence-scramble',
        prompt: 'Form the sentence: "A coffee, please."',
        targetSentence: "Un café s'il vous plaît",
        tokens: ['Un', 'café', "s'il", 'vous', 'plaît'],
        distractors: ['pain', 'non'],
        explanation: '"Un café, s\'il vous plaît" is the classic polite request in any French café.'
      },
      {
        type: 'multiple-choice',
        question: 'What is the polite phrase meaning "Thank you very much"?',
        options: ['Merci beaucoup', 'Au revoir', 'S\'il vous plaît', 'Bonsoir'],
        correctIndex: 0,
        explanation: '"Merci beaucoup" means thank you very much.'
      }
    ],
    matchingPairs: [
      { id: 'fmp1', native: 'Bonjour', english: 'Hello' },
      { id: 'fmp2', native: 'de l\'eau', english: 'Water' },
      { id: 'fmp3', native: 'Merci beaucoup', english: 'Thank you' },
      { id: 'fmp4', native: 'Un', english: 'One (1)' },
      { id: 'fmp5', native: 'Au revoir', english: 'Goodbye' }
    ]
  }
};
