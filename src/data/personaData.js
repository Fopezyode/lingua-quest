// Authentic Indigenous Personas & Interactive Sandbox Scenarios
// Designed for genuine cultural dialogue, real-time native speech, and listening dictation

export const PERSONAS = {
  hausa: {
    id: 'hausa_amina',
    name: 'Amina Al-Hassan',
    role: 'Kano Artisan & Culture Host',
    avatar: '🧕',
    location: 'Kano, Northern Nigeria',
    bio: 'Born in the ancient walled city of Kano. Amina loves weaving traditional indigo fabrics, cooking tuwon shinkafa, and sharing warm northern Nigerian hospitality.',
    speechCode: 'ha',
    accentNote: 'Speaks standard Kananci (Kano Hausa), the cultural benchmark for spoken Hausa.',
    greeting: 'Sannu da zuwa! Ni ce Amina daga Kano. Ina kwana? Kana son mu yi magana a Hausa yau?',
    greetingPhonetic: 'SAHN-noo dah ZOO-wah! Nee cheh Ah-MEE-nah DAH-gah KAH-noh. EE-nah KWAH-nah? KAH-nah son moo yee mah-GAH-nah ah HOW-sah YOW?',
    greetingEnglish: 'Welcome! I am Amina from Kano. Good morning! Would you like to practice speaking Hausa together today?',
    greetingAudioId: 'h1',
    scenarios: [
      {
        id: 'sc_courtyard',
        title: 'Morning Courtyard Greetings',
        desc: 'Exchange proper time-of-day courtesies and family inquiries.',
        icon: 'Sun',
        starterPrompts: [
          { native: 'Ina kwana, Amina?', english: 'Good morning, Amina!', phonetic: 'EE-nah KWAH-nah, Ah-MEE-nah?', audioId: 'h2' },
          { native: 'Lafiya lau, na gode kwarai.', english: 'Very fine, thank you very much.', phonetic: 'LAH-fee-yah low, nah GOH-day KWAH-rye.', audioId: 'h4' },
          { native: 'Ina wuni? Ya aiki?', english: 'Good afternoon! How is work going?', phonetic: 'EE-nah WOO-nee? Yah EYE-kee?', audioId: 'h3' },
          { native: 'Sai an jima!', english: 'Until later / see you soon!', phonetic: 'SIGH ahn JEE-mah!', audioId: 'h6' }
        ]
      },
      {
        id: 'sc_market',
        title: 'Bargaining at Kurmi Market',
        desc: 'Browse hand-woven textiles and friendly market negotiations.',
        icon: 'ShoppingBag',
        starterPrompts: [
          { native: 'Sannu! Nawa ne wannan?', english: 'Hello! How much is this?', phonetic: 'SAHN-noo! NAH-wah neh WAHN-nahn?', audioId: 'dial_0_1' },
          { native: 'Ya yi tsada! Don Allah rage min.', english: "It's too expensive! Please reduce it for me.", phonetic: 'Yah yee TSAH-dah! Don Ahl-lah RAH-gay meen.', audioId: 'dial_0_3' },
          { native: 'Ina son wannan yadi mai kyau.', english: 'I want this beautiful fabric.', phonetic: 'EE-nah son WAHN-nahn YAH-dee my KYOW.', audioId: 'h14' },
          { native: 'Ga kudin, na gode.', english: 'Here is the money, thank you.', phonetic: 'Gah KOO-deen, nah GOH-day.', audioId: 'dial_0_5' }
        ]
      },
      {
        id: 'sc_food',
        title: 'Dining & Hospitality',
        desc: 'Requesting refreshments and praising local dishes.',
        icon: 'Utensils',
        starterPrompts: [
          { native: 'Ina son ruwa don Allah.', english: 'I want water, please.', phonetic: 'EE-nah son ROO-wah don Ahl-lah.', audioId: 'h14' },
          { native: 'Abincin yana da daɗi sosai!', english: 'The food is very delicious!', phonetic: 'Ah-BEEN-cheen YAH-nah dah DAH-dee SOH-sigh!', audioId: 'h18' },
          { native: 'Akwai abinci mai dumi?', english: 'Is there warm food available?', phonetic: 'Ah-KWY ah-BEEN-chee my DOO-mee?', audioId: 'h15' }
        ]
      }
    ],
    dictationChallenges: [
      {
        id: 'd_ha_1',
        audioId: 'h2',
        spokenText: 'Ina kwana?',
        prompt: 'Listen to Amina\'s morning greeting and transcribe what you hear:',
        translation: 'Good morning / How was your night?',
        tokens: ['Ina', 'kwana?', 'Sannu', 'ruwa']
      },
      {
        id: 'd_ha_2',
        audioId: 'h4',
        spokenText: 'Na gode',
        prompt: 'Amina is thanking you for a gesture. Transcribe the phrase:',
        translation: 'Thank you',
        tokens: ['Na', 'gode', 'tsada', 'Allah']
      },
      {
        id: 'd_ha_3',
        audioId: 'dial_0_3',
        spokenText: 'Ya yi tsada',
        prompt: 'Transcribe the key market bargaining exclamation:',
        translation: 'It is too expensive',
        tokens: ['Ya', 'yi', 'tsada', 'Don', 'Lafiya']
      }
    ],
    replies: [
      {
        keywords: ['ina kwana', 'kwana', 'morning', 'lafiya lau'],
        native: 'Lafiya lau! Ya iyalinka da gida? Fatan kowa yana cikin aminci.',
        phonetic: 'LAH-fee-yah low! Yah ee-YAH-leen-kah dah GEE-dah? FAH-tahn KOH-wah YAH-nah CHEE-keen ah-MEEN-chee.',
        english: 'Very fine! How is your family and home? I hope everyone is in peaceful health.',
        culturalTip: 'In Hausa culture, asking about the home and family ("gida da iyali") establishes genuine warmth.'
      },
      {
        keywords: ['ina wuni', 'wuni', 'afternoon', 'yamma'],
        native: 'Lafiya kalau, aiki yana tafiya da kyau. Barka da rana!',
        phonetic: 'LAH-fee-yah KAH-low, EYE-kee YAH-nah TAH-fee-yah dah KYOW. BAR-kah dah RAH-nah!',
        english: 'Peacefully well, work is moving smoothly. Blessed daytime to you!',
        culturalTip: '"Barka da rana" is an auspicious daytime wish frequently heard across northern Nigeria.'
      },
      {
        keywords: ['na gode', 'gode', 'thank', 'thanks'],
        native: 'Ba komai! Farin cikina ne in taimaka maka a koyon yarenmu mai dadi.',
        phonetic: 'Bah KOH-my! FAH-reen CHEE-kee-nah neh een TY-mah-kah MAH-kah ah KOH-yon yah-REN-moo my DAH-dee.',
        english: 'You are welcome (It is nothing)! It is my joy to help you learn our sweet language.',
        culturalTip: '"Ba komai" is the natural, gracious reply to "Na gode", equivalent to "Don\'t mention it".'
      },
      {
        keywords: ['nawa', 'price', 'cost', 'tsada', 'rage'],
        native: 'Toh! Saboda kai bako ne mai ladabi, zan rage maka kuɗin. Zai zama naira ɗari biyar kawai!',
        phonetic: 'Toh! Sah-BOH-dah kye BAH-koh neh my LAH-dah-bee, zahn RAH-gay MAH-kah KOO-deen.',
        english: 'Alright! Because you are a respectful guest, I will discount the price. It will be 500 Naira only!',
        culturalTip: 'Courtesy and good humor ("ladabi") are honored by Hausa merchants with generous discounts.'
      },
      {
        keywords: ['ruwa', 'abinci', 'water', 'food', 'hungry'],
        native: 'Ga ruwa mai sanyi! Zauna ka sha, ka huta kafin mu ci gaba da magana.',
        phonetic: 'Gah ROO-wah my SAHN-yee! ZOW-nah kah shah, kah HOO-tah KAH-feen moo chee GAH-bah dah mah-GAH-nah.',
        english: 'Here is cool water! Sit and drink, rest a moment before we continue our conversation.',
        culturalTip: 'Offering cool water to a newly arrived traveler or visitor is the first law of northern hospitality.'
      },
      {
        keywords: ['sai an jima', 'bye', 'farewell', 'goodbye'],
        native: 'Toh madalla! Sai an jima, Allah ya ba da sa\'a da kariya!',
        phonetic: 'Toh mah-DAHL-lah! SIGH ahn JEE-mah, AHL-lah yah bah dah SAH-ah dah kah-REE-yah!',
        english: 'Wonderful! Until later, may God grant good fortune and protection!',
        culturalTip: '"Madalla" is an expression of delight, satisfaction, and gratitude.'
      }
    ],
    defaultReply: {
      native: 'Madalla da wannan magana! Kana koyo da kyau sosai. Ka sake gwada wani zance?',
      phonetic: 'Mah-DAHL-lah dah WAHN-nahn mah-GAH-nah! KAH-nah KOH-yoh dah KYOW SOH-sigh.',
      english: 'Wonderful words! You are learning very well. Would you like to try another phrase?',
      culturalTip: 'Keep practicing out loud—Hausa has a poetic, rhythmic cadence!'
    }
  },

  german: {
    id: 'german_lukas',
    name: 'Lukas Weber',
    role: 'Berlin Graduate Student & Language Buddy',
    avatar: '👱‍♂️',
    location: 'Berlin-Kreuzberg, Germany',
    bio: 'Studying sociology in Berlin, coffee enthusiast, and avid reader. Lukas loves helping learners conquer noun genders, German compound words, and everyday urban dialogue.',
    speechCode: 'de',
    accentNote: 'Speaks clear Hochdeutsch with contemporary urban Berlin warmth.',
    greeting: 'Hallo und herzlich willkommen! Ich bin Lukas aus Berlin. Wie geht es dir heute? Worüber möchtest du sprechen?',
    greetingPhonetic: 'HAH-loh oont HERTZ-leesh vil-KOH-men! Eesh bin LOO-kahs ows bair-LEEN.',
    greetingEnglish: 'Hello and welcome! I am Lukas from Berlin. How are you today? What would you like to talk about?',
    greetingAudioId: 'g1',
    scenarios: [
      {
        id: 'sc_cafe',
        title: 'At the Specialty Café',
        desc: 'Order flat whites, pastries, and interact with the barista.',
        icon: 'Utensils',
        starterPrompts: [
          { native: 'Guten Tag! Einen Kaffee bitte.', english: 'Good day! A coffee please.', phonetic: 'GOO-ten tahg! EYE-nen KAH-fay BIT-teh.', audioId: 'g2' },
          { native: 'Was können Sie empfehlen?', english: 'What can you recommend?', phonetic: 'Vahs KUR-nen zee em-PFAY-len?', audioId: 'dial_0_1' },
          { native: 'Zusammen oder getrennt?', english: 'Together or separate? (The classic bill question)', phonetic: 'Tsoo-ZAH-men OH-der geh-TRENT?', audioId: 'g4' },
          { native: 'Vielen Dank, das schmeckt super!', english: 'Thank you very much, this tastes great!', phonetic: 'FEE-len dahnk, dahs shmekt ZOO-per!', audioId: 'g4' }
        ]
      },
      {
        id: 'sc_directions',
        title: 'Lost Near Alexanderplatz',
        desc: 'Ask for directions to the U-Bahn or museums.',
        icon: 'MapPin',
        starterPrompts: [
          { native: 'Entschuldigung, wo ist die U-Bahn?', english: 'Excuse me, where is the subway?', phonetic: 'Ent-SHOOL-dee-goong, voh ist dee OO-bahn?', audioId: 'dial_0_2' },
          { native: 'Ich verstehe nicht ganz.', english: "I don't quite understand.", phonetic: 'Eesh fer-SHTAY-eh neesht gahnts.', audioId: 'dial_0_4' },
          { native: 'Ist es weit von hier?', english: 'Is it far from here?', phonetic: 'Ist es vite fon heer?', audioId: 'g3' }
        ]
      }
    ],
    dictationChallenges: [
      {
        id: 'd_de_1',
        audioId: 'g2',
        spokenText: 'Guten Morgen',
        prompt: 'Listen to Lukas\'s morning greeting and transcribe:',
        translation: 'Good morning',
        tokens: ['Guten', 'Morgen', 'Tag', 'Abend']
      },
      {
        id: 'd_de_2',
        audioId: 'g4',
        spokenText: 'Vielen Dank',
        prompt: 'Transcribe the expression of gratitude:',
        translation: 'Thank you very much',
        tokens: ['Vielen', 'Dank', 'Bitte', 'Hallo']
      }
    ],
    replies: [
      {
        keywords: ['hallo', 'guten tag', 'guten morgen', 'wie geht'],
        native: 'Mir geht es prima, danke! Schön, dass du Deutsch üben möchtest. Das Wetter in Berlin ist heute überraschend sonnig.',
        phonetic: 'Meer gayt es PREE-mah, DAHN-keh! Shoen dahs doo DOYTCH EW-ben mursh-test.',
        english: 'I am doing great, thanks! Nice that you want to practice German. The weather in Berlin is surprisingly sunny today.',
        culturalTip: 'Small talk about the weather or coffee is common, but Germans appreciate getting straight to the point!'
      },
      {
        keywords: ['kaffee', 'coffee', 'bitte', 'trinken', 'cafe'],
        native: 'Sehr gerne! Ein Cappuccino mit Hafermilch kommt sofort. Möchtest du auch ein Croissant oder ein Stück Kuchen dazu?',
        phonetic: 'Zair GAIR-neh! Eye-n KAH-poo-chee-noh mit HAH-fer-milsh...',
        english: 'With pleasure! One oat-milk cappuccino coming right up. Would you also like a croissant or cake with that?',
        culturalTip: 'Café culture in Germany is serious business: "Kaffee und Kuchen" at 3 PM is practically an institution.'
      },
      {
        keywords: ['danke', 'vielen dank', 'thanks'],
        native: 'Bitte sehr! Gern geschehen. Wenn du noch Fragen zur Grammatik hast, frag mich jederzeit.',
        phonetic: 'BIT-teh zair! Gairn geh-SHAY-en...',
        english: 'You\'re very welcome! Gladly done. If you have any questions about grammar, ask me anytime.',
        culturalTip: '"Gern geschehen" is the warmest and most natural way to say "My pleasure".'
      },
      {
        keywords: ['tschüss', 'auf wiedersehen', 'bye', 'ciao'],
        native: 'Alles klar! Mach\'s gut und bis zum nächsten Mal! Tschüss!',
        phonetic: 'AHL-les klahr! Mahks goot oont bis tsoom NAYSH-sten mahl! Chyoos!',
        english: 'All right! Take care and until next time! Bye!',
        culturalTip: '"Mach\'s gut" is the colloquial German equivalent to "Take care".'
      }
    ],
    defaultReply: {
      native: 'Sehr gut formuliert! Dein Deutsch wird von Tag zu Tag natürlicher. Was möchtest du als Nächstes ausprobieren?',
      phonetic: 'Zair goot for-moo-LEERT! Dine doytch veert fon tahg tsoo tahg nah-TEWR-leesh-er.',
      english: 'Very well phrased! Your German is getting more natural every day. What would you like to explore next?',
      culturalTip: 'Keep paying attention to capital letters for all German nouns (das Haus, der Tisch)!'
    }
  },

  latin: {
    id: 'latin_marcus',
    name: 'Marcus Tullius',
    role: 'Roman Scholar & Forum Orator',
    avatar: '🏛️',
    location: 'Forum Romanum, Classical Rome',
    bio: 'A student of classical rhetoric and Roman civic jurisprudence. Marcus speaks the timeless language of Cicero, Virgil, and Horace, eager to illuminate classical grammar and Roman daily life.',
    speechCode: 'la',
    accentNote: 'Speaks classical restored pronunciation (hard C as in "cat", V pronounced as English "W").',
    greeting: 'Salvē, amīce! Marcus sum, civis Rōmānus. Gaudēo tē vidēre in Forō. Quid hodiē disces?',
    greetingPhonetic: 'SAHL-way, ah-MEE-kay! MAHR-koos soom, KEE-wis roh-MAH-noos. GOW-deh-oh tay wee-DAY-reh een FOH-roh.',
    greetingEnglish: 'Greetings, friend! I am Marcus, a Roman citizen. I rejoice to see you in the Forum. What will you study today?',
    greetingAudioId: 'l1',
    scenarios: [
      {
        id: 'sc_forum',
        title: 'Meeting in the Roman Forum',
        desc: 'Engage with fellow citizens near the Temple of Saturn.',
        icon: 'BookOpen',
        starterPrompts: [
          { native: 'Salvē, Marce! Quōmodo tē habēs?', english: 'Greetings, Marcus! How are you doing?', phonetic: 'SAHL-way, MAHR-kay! KWOH-moh-doh tay HAH-bays?', audioId: 'l1' },
          { native: 'Grātiās tibi agō ex animō.', english: 'I give you thanks from the bottom of my heart.', phonetic: 'GRAH-tee-ahs TEE-bee AH-goh ex AH-nee-moh.', audioId: 'l4' },
          { native: 'Valē atque venī iterum!', english: 'Farewell and come again!', phonetic: 'VAH-lay AHT-kway WEH-nee ee-TEH-room!', audioId: 'l3' }
        ]
      }
    ],
    dictationChallenges: [
      {
        id: 'd_la_1',
        audioId: 'l1',
        spokenText: 'Salvē',
        prompt: 'Listen to Marcus\'s classical greeting and transcribe:',
        translation: 'Greetings / Hello',
        tokens: ['Salvē', 'Valē', 'Roma', 'Amīce']
      }
    ],
    replies: [
      {
        keywords: ['salve', 'salvete', 'hello', 'quomodo'],
        native: 'Valēo et fēlīx sum! Vīta Rōmāna hodiē tranquilla est. Quid dē philosophia aut rē pūblicā cōgitās?',
        phonetic: 'VAH-lay-oh et FAY-leex soom! WEE-tah roh-MAH-nah hoh-DEE-ay trahn-KWEEL-lah est.',
        english: 'I am strong and joyful! Roman life today is tranquil. What are your thoughts on philosophy or the Republic?',
        culturalTip: '"Valēo" literally means "I am healthy and strong"—physical fortitude was prized by Romans.'
      },
      {
        keywords: ['gratias', 'thank', 'ago'],
        native: 'Libenter! Nihil est dignius inter amīcōs quam concordia et veritās.',
        phonetic: 'Lee-BEN-ter! NEE-hil est DIG-nee-oos een-ter ah-MEE-kohs kwahm kon-KOR-dee-ah...',
        english: 'Willingly! Nothing is more worthy among friends than harmony and truth.',
        culturalTip: '"Libenter" means "Gladly" or "With pleasure", the quintessential stoic response.'
      }
    ],
    defaultReply: {
      native: 'Bene dictum est! Lingua Latīna est mēns et vōx antīquitātis. Perge discere!',
      phonetic: 'BEH-neh DEEK-toom est! LEEN-gwah lah-TEE-nah est mayns et wohx...',
      english: 'Well said! The Latin language is the mind and voice of antiquity. Keep learning!',
      culturalTip: 'Notice the lack of articles (no "the" or "a") in Latin—every word carries maximum weight!'
    }
  },

  greek: {
    id: 'greek_eleni',
    name: 'Eleni Papadaki',
    role: 'Thessaloniki Architect & Culture Enthusiast',
    avatar: '🏛️',
    location: 'Thessaloniki, Greece',
    bio: 'Passionate about Hellenic history, Mediterranean cooking, and philosophy. Eleni loves teaching modern spoken Greek while highlighting its ancient philosophical roots.',
    speechCode: 'el',
    accentNote: 'Speaks melodious, modern Athenian/Macedonian Greek with crisp vowel articulation.',
    greeting: 'Γεια σου! Είμαι η Ελένη από τη Θεσσαλονίκη. Χαίρομαι πολύ που σε γνωρίζω! Τι θα ήθελες να μάθεις σήμερα;',
    greetingPhonetic: 'YAH-soo! EE-meh ee eh-LEH-nee ah-POH tee thehs-sah-loh-NEE-kee. KHEH-roh-meh poh-LEE...',
    greetingEnglish: 'Hello! I am Eleni from Thessaloniki. I am very glad to meet you! What would you like to learn today?',
    greetingAudioId: 'gr1',
    scenarios: [
      {
        id: 'sc_kafeneio',
        title: 'At the Greek Kafeneio',
        desc: 'Order Greek coffee, frappé, and chat about island travels.',
        icon: 'Utensils',
        starterPrompts: [
          { native: 'Καλημέρα! Έναν ελληνικό καφέ, παρακαλώ.', english: 'Good morning! A Greek coffee, please.', phonetic: 'Kah-lee-MEH-rah! EH-nahn eh-lee-nee-KOH kah-FEH, pah-rah-kah-LOH.', audioId: 'gr2' },
          { native: 'Πόσο κάνει αυτό;', english: 'How much does this cost?', phonetic: 'POH-soh KAH-nee ahf-TOH?', audioId: 'dial_0_1' },
          { native: 'Ευχαριστώ πάρα πολύ!', english: 'Thank you very much!', phonetic: 'Ef-khah-ree-STOH PAH-rah poh-LEE!', audioId: 'gr4' }
        ]
      }
    ],
    dictationChallenges: [
      {
        id: 'd_gr_1',
        audioId: 'gr1',
        spokenText: 'Γεια σου',
        prompt: 'Listen to Eleni\'s greeting and transcribe in Greek script:',
        translation: 'Hello / Greetings',
        tokens: ['Γεια', 'σου', 'Καλημέρα', 'Ναι']
      }
    ],
    replies: [
      {
        keywords: ['γεια', 'καλημερα', 'καλησπερα', 'yassou', 'hello'],
        native: 'Καλημέρα και σε σένα! Ο ήλιος λάμπει στο Αιγαίο σήμερα. Πώς πάει η μέρα σου;',
        phonetic: 'Kah-lee-MEH-rah keh seh SEH-nah! Oh EE-lee-os LAHM-bee stoh eh-YEH-oh...',
        english: 'Good morning to you as well! The sun is shining over the Aegean today. How is your day going?',
        culturalTip: 'Greek conversation is filled with gesture, eye contact, and sincere personal warmth.'
      },
      {
        keywords: ['ευχαριστω', 'efcharisto', 'thanks', 'thank'],
        native: 'Παρακαλώ, χαρά μου! Δεν κάνει τίποτα. Είναι υπέροχο να μιλάς ελληνικά.',
        phonetic: 'Pah-rah-kah-LOH, khah-RAH moo! Dhen KAH-nee TEE-poh-tah...',
        english: 'You\'re welcome, my pleasure! It was nothing. It is wonderful that you speak Greek.',
        culturalTip: '"Δεν κάνει τίποτα" (It does nothing) is the everyday phrase for "Don\'t mention it".'
      }
    ],
    defaultReply: {
      native: 'Μπράβο! Πολύ ωραία πρόταση. Η εξάσκηση κάνει τον μάστορα!',
      phonetic: 'BRAH-voh! Poh-LEE oh-REH-ah PROH-tah-see. Ee ex-AHS-kee-see KAH-nee ton MAHS-toh-rah!',
      english: 'Bravo! Very nice sentence. Practice makes the master!',
      culturalTip: 'Greek words often share roots with English scientific terms (e.g., logos, chronos, bios)!'
    }
  },

  french: {
    id: 'french_camille',
    name: 'Camille Laurent',
    role: 'Parisian Barista & Literature Enthusiast',
    avatar: '🥖',
    location: 'Quartier Latin, Paris, France',
    bio: 'Working in an independent bookshop café on the Left Bank. Camille loves French literature, pastry baking, and teaching natural Parisian conversation beyond textbook formalities.',
    speechCode: 'fr',
    accentNote: 'Speaks natural contemporary Parisian French with natural liaisons.',
    greeting: 'Bonjour et bienvenue ! Je m\'appelle Camille. Comment vas-tu aujourd\'hui ? De quoi aimerais-tu parler ?',
    greetingPhonetic: 'Bohn-ZHOOR ay bee-en-veh-NOO! Zheh mah-PELL Kah-MEEL.',
    greetingEnglish: 'Hello and welcome! My name is Camille. How are you today? What would you like to talk about?',
    greetingAudioId: 'f1',
    scenarios: [
      {
        id: 'sc_boulangerie',
        title: 'Morning at the Boulangerie',
        desc: 'Order baguettes, croissants, and navigate bakery etiquette.',
        icon: 'Utensils',
        starterPrompts: [
          { native: 'Bonjour Madame ! Un croissant s\'il vous plaît.', english: 'Good morning! A croissant please.', phonetic: 'Bohn-ZHOOR Mah-DAHM! Un krwah-SAHN seel voo play.', audioId: 'f1' },
          { native: 'Ce sera tout, merci beaucoup !', english: 'That will be all, thank you very much!', phonetic: 'Seh seh-RAH too, mehr-SEE boh-KOO!', audioId: 'f4' },
          { native: 'Combien coûte cette baguette ?', english: 'How much does this baguette cost?', phonetic: 'Kohm-bee-EN koot set bah-GET?', audioId: 'dial_0_1' }
        ]
      }
    ],
    dictationChallenges: [
      {
        id: 'd_fr_1',
        audioId: 'f1',
        spokenText: 'Bonjour',
        prompt: 'Listen to Camille\'s greeting and transcribe:',
        translation: 'Hello / Good morning',
        tokens: ['Bonjour', 'Bonsoir', 'Merci', 'Oui']
      }
    ],
    replies: [
      {
        keywords: ['bonjour', 'salut', 'comment vas-tu', 'hello'],
        native: 'Bonjour ! Ça va très bien, merci. Il fait un temps parfait pour lire en terrasse. Et toi, comment se passe ta journée ?',
        phonetic: 'Bohn-ZHOOR! Sah vah tray bee-EN, mehr-SEE...',
        english: 'Good morning! I am doing very well, thanks. The weather is perfect for reading on a terrace. And you, how is your day?',
        culturalTip: 'Always remember: entering any shop in France without saying "Bonjour" first is seen as a major faux pas!'
      },
      {
        keywords: ['merci', 'beaucoup', 'thanks', 'thank'],
        native: 'Je vous en prie ! C\'est un plaisir d\'échanger avec toi.',
        phonetic: 'Zheh vooz ahn PREE! Say tun pleh-ZEER...',
        english: 'You are very welcome! It is a pleasure to talk with you.',
        culturalTip: '"Je vous en prie" is the elegant and polite form of "De rien".'
      }
    ],
    defaultReply: {
      native: 'C\'est très bien dit ! Ton accent et ton vocabulaire s\'améliorent à vue d\'œil. Continuons !',
      phonetic: 'Say tray bee-en DEE! Tohn ahk-SAHN ay tohn voh-kah-bew-LEHR...',
      english: 'That is very well said! Your accent and vocabulary are improving visibly. Let\'s continue!',
      culturalTip: 'French rhythm relies on smooth liaisons—connecting the ending consonant to the next vowel sound!'
    }
  }
};
