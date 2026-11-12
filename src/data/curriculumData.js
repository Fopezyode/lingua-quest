// Comprehensive CEFR-Aligned Curriculum & Learning Progression Data
// Covers Hausa, German, Latin, Greek, and French with multi-step interactive lessons

export const CURRICULUM = {
  hausa: {
    title: 'Hausa Cultural Journey',
    subtitle: 'From Kano Courtesies to Fluent Marketplace Haggling',
    units: [
      {
        id: 'ha_u1',
        unitNumber: 1,
        title: 'Unit 1: The Sacred Art of Greetings',
        level: 'A1.1 Foundations',
        description: 'Master northern Nigerian greeting etiquette, morning honorifics, and hooked glottal consonants.',
        color: '#10b981',
        stages: [
          {
            id: 'ha_u1_s1',
            title: 'Morning Salutations & Well-Being',
            subtitle: 'Ina kwana? & Lafiya lau',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: 'Greetings are a Sacred Obligation',
              explanation: 'In Hausa culture, rushing past greetings is seen as disrespectful. You must always inquire about health, peace, and sleep before any transaction. "Ina kwana?" specifically asks how one spent the night. The standard reply is "Lafiya lau" (In peaceful health).',
              culturalTip: 'Placing your right hand lightly over your heart when greeting an elder shows deep traditional humility.'
            },
            practice: {
              audioId: 'h2',
              nativePhrase: 'Ina kwana?',
              englishMeaning: 'Good morning / How was your sleep?',
              phonetic: 'EE-nah KWAH-nah',
              tokens: ['Ina', 'kwana?'],
              distractors: ['ruwa', 'tsada'],
              comprehension: {
                question: 'When a shopkeeper or elder welcomes you with "Ina kwana?", what is the customary polite reply?',
                options: ['Ban gane ba', 'Lafiya lau', 'Ya yi tsada', 'Sai an jima'],
                correctIndex: 1,
                explanation: '"Lafiya lau" literally means "health and peace", reassuring the speaker that all is well.'
              }
            }
          },
          {
            id: 'ha_u1_s2',
            title: 'The Hooked Glottals (Ɓ, Ɗ, Ƙ, Ts)',
            subtitle: 'Implosives and crisp ejectives',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: 'Mastering Glottalized Consonants',
              explanation: 'Hausa features unique consonants that do not exist in standard English. Ɓ and Ɗ are implosive sounds where air is drawn inward, while Ƙ is an ejective consonant popped with pressure from the throat. "Ts" is a sharp air burst, like in "tsuntsu" (bird).',
              culturalTip: 'Pronouncing the hook accurately is vital: "fara" means to begin, while "faɗa" means to fight or speak!'
            },
            practice: {
              audioId: 'letter_1',
              nativePhrase: 'Ɓauna',
              englishMeaning: 'Buffalo (implosive Ɓ test)',
              phonetic: 'BAW-nah',
              tokens: ['Ɓauna'],
              distractors: ['Bauna', 'Goma'],
              comprehension: {
                question: 'Which consonant in Hausa is produced as a crisp, explosive popped sound similar to "cats"?',
                options: ['M', 'Ts', 'L', 'Z'],
                correctIndex: 1,
                explanation: 'The digraph "Ts / ts" is an ejective burst unique to Afroasiatic phonology.'
              }
            }
          },
          {
            id: 'ha_u1_s3',
            title: 'Gratitude & Polite Parting',
            subtitle: 'Na gode & Sai an jima',
            type: 'lesson',
            xp: 30,
            grammarConcept: {
              title: 'Giving Thanks & Saying Farewell',
              explanation: '"Na gode" translates directly to "I give thanks". Adding "kwarai" makes it "Thank you very much". When taking your leave, say "Sai an jima" (Until later / see you soon).',
              culturalTip: 'Always receive gifts or change with both hands or the right hand; never use the left hand alone.'
            },
            practice: {
              audioId: 'h4',
              nativePhrase: 'Na gode kwarai',
              englishMeaning: 'Thank you very much',
              phonetic: 'Nah GOH-day KWAH-rye',
              tokens: ['Na', 'gode', 'kwarai'],
              distractors: ['Sannu', 'Don'],
              comprehension: {
                question: 'How do you say "Thank you very much" to someone who helped you?',
                options: ['Sai an jima', 'Na gode kwarai', 'Ina wuni', 'Ɗaya biyu'],
                correctIndex: 1,
                explanation: '"Na gode kwarai" expresses genuine heartfelt appreciation.'
              }
            }
          },
          {
            id: 'ha_u1_boss',
            title: 'Unit 1 Boss Trial: Kano Welcome',
            subtitle: 'Prove greeting mastery under test conditions',
            type: 'checkpoint',
            xp: 50,
            challenge: {
              prompt: 'A traditional merchant in Kano greets you warmly. Demonstrate your mastery of greetings, hooked sounds, and respect!',
              questions: [
                {
                  q: 'What is the afternoon greeting in Hausa?',
                  options: ['Ina wuni?', 'Ina kwana?', 'Lafiya', 'Abinci'],
                  correctIndex: 0
                },
                {
                  q: 'What does "Don Allah" literally signify in everyday speech?',
                  options: ['Hurry up', 'Please / For God\'s sake', 'Goodbye', 'Very expensive'],
                  correctIndex: 1
                },
                {
                  q: 'Which response correctly concludes a conversation politely?',
                  options: ['Ya yi tsada', 'Sai an jima', 'Ruwa', 'Ban gane ba'],
                  correctIndex: 1
                }
              ]
            }
          }
        ]
      },
      {
        id: 'ha_u2',
        unitNumber: 2,
        title: 'Unit 2: The Kurmi Market & Haggling',
        level: 'A1.2 Practical Immersion',
        description: 'Navigate ancient market stalls, count currency, and master the art of friendly bargaining.',
        color: '#f59e0b',
        stages: [
          {
            id: 'ha_u2_s1',
            title: 'Counting 1 to 5 (Ɗaya zuwa Biyar)',
            subtitle: 'The foundation of counting',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: 'Cardinal Numbers in the Market',
              explanation: 'Numbers form the backbone of commerce. Ɗaya (1), Biyu (2), Uku (3), Huɗu (4), and Biyar (5). Notice that "Ɗaya" and "Huɗu" both contain the hooked Ɗ sound.',
              culturalTip: 'In northern markets, transactions are social interactions. Smile and take your time when agreeing on numbers.'
            },
            practice: {
              audioId: 'h7',
              nativePhrase: 'Ɗaya, biyu, uku',
              englishMeaning: 'One, two, three',
              phonetic: 'DYAH-yah, BEE-yoo, OO-koo',
              tokens: ['Ɗaya,', 'biyu,', 'uku'],
              distractors: ['hudu', 'goma'],
              comprehension: {
                question: 'What is the Hausa number for "Three"?',
                options: ['Ɗaya', 'Biyu', 'Uku', 'Biyar'],
                correctIndex: 2,
                explanation: '"Uku" is the number 3.'
              }
            }
          },
          {
            id: 'ha_u2_s2',
            title: 'Inquiring Price: Nawa ne wannan?',
            subtitle: 'Asking "How much is this?"',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: 'Forming Price Inquiries',
              explanation: '"Nawa ne?" means "How much is it?". Adding "wannan" (this) allows you to point at any fabric, fruit, or pottery and ask "Nawa ne wannan?".',
              culturalTip: 'Vendors expect a light-hearted negotiation. Starting price is rarely the final price!'
            },
            practice: {
              audioId: 'dial_0_1',
              nativePhrase: 'Nawa ne wannan?',
              englishMeaning: 'How much is this?',
              phonetic: 'NAH-wah neh WAHN-nahn?',
              tokens: ['Nawa', 'ne', 'wannan?'],
              distractors: ['Lafiya', 'uku'],
              comprehension: {
                question: 'You see beautiful leather sandals. How do you ask the vendor for the price?',
                options: ['Ina kwana?', 'Nawa ne wannan?', 'Na gode kwarai', 'Ya yi kyau'],
                correctIndex: 1,
                explanation: '"Nawa ne wannan?" is the universal phrase for asking how much an item costs.'
              }
            }
          },
          {
            id: 'ha_u2_s3',
            title: 'Friendly Haggling: Ya yi tsada!',
            subtitle: '"It is too expensive!"',
            type: 'lesson',
            xp: 30,
            grammarConcept: {
              title: 'Expressing Value & Requesting a Discount',
              explanation: 'When given a steep price, exclaim with a smile: "Ya yi tsada!" (It is too expensive!). Follow it up with "Rage min don Allah" (Reduce it for me, please).',
              culturalTip: 'Bargaining is viewed as building a friendship between customer and merchant.'
            },
            practice: {
              audioId: 'dial_0_3',
              nativePhrase: 'Ya yi tsada! Don Allah rage min.',
              englishMeaning: "It's too expensive! Please reduce it for me.",
              phonetic: 'Yah yee TSAH-dah! Don Ahl-lah RAH-gay meen.',
              tokens: ['Ya', 'yi', 'tsada!', 'Don', 'Allah', 'rage', 'min.'],
              distractors: ['Sannu', 'Biyu'],
              comprehension: {
                question: 'What does "Ya yi tsada" mean?',
                options: ['It is cheap', 'It is too expensive', 'It is broken', 'I do not want it'],
                correctIndex: 1,
                explanation: '"Tsada" signifies high price or expense.'
              }
            }
          },
          {
            id: 'ha_u2_boss',
            title: 'Unit 2 Boss Trial: Master of Kurmi Market',
            subtitle: 'Bargain for genuine spices and indigo cloth',
            type: 'checkpoint',
            xp: 60,
            challenge: {
              prompt: 'Navigate a bustling trade scenario: inquire, evaluate, and close a deal respectfully!',
              questions: [
                {
                  q: 'What is the number 5 in Hausa?',
                  options: ['Biyar', 'Huɗu', 'Uku', 'Goma'],
                  correctIndex: 0
                },
                {
                  q: 'How do you say "I want" in Hausa?',
                  options: ['Ina son', 'Ina kwana', 'Ban gane', 'Na gode'],
                  correctIndex: 0
                },
                {
                  q: 'The vendor agrees to your discount! How do you close the purchase?',
                  options: ['Na gode, ga kuɗin (Thank you, here is the money)', 'Ban gane ba', 'Ina wuni', 'Ya yi tsada'],
                  correctIndex: 0
                }
              ]
            }
          }
        ]
      }
    ]
  },
  german: {
    title: 'German Language Expedition',
    subtitle: 'From Everyday Guten Morgen to Berlin Street Fluency',
    units: [
      {
        id: 'de_u1',
        unitNumber: 1,
        title: 'Unit 1: The Formal & Informal World',
        level: 'A1.1 Foundations',
        description: 'Master Sie vs du, essential greetings, and the German phonetic landscape.',
        color: '#3b82f6',
        stages: [
          {
            id: 'de_u1_s1',
            title: 'Salutations Throughout the Day',
            subtitle: 'Guten Morgen, Tag & Abend',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: 'German Time-Specific Courtesy',
              explanation: 'Germans use distinct greetings depending on the clock: "Guten Morgen" (morning until ~11am), "Guten Tag" (daytime), and "Guten Abend" (evening). "Hallo" is universal among friends.',
              culturalTip: 'Direct eye contact and a firm handshake are customary when greeting in professional or formal settings.'
            },
            practice: {
              audioId: 'g2',
              nativePhrase: 'Guten Morgen!',
              englishMeaning: 'Good morning!',
              phonetic: 'GOO-ten MOR-gen',
              tokens: ['Guten', 'Morgen!'],
              distractors: ['Abend', 'Bitte'],
              comprehension: {
                question: 'Which greeting is appropriate when meeting a colleague at 9:00 AM?',
                options: ['Guten Abend', 'Gute Nacht', 'Guten Morgen', 'Tschüss'],
                correctIndex: 2,
                explanation: '"Guten Morgen" is used specifically in morning hours.'
              }
            }
          },
          {
            id: 'de_u1_s2',
            title: 'Du vs. Sie: The Politeness Divide',
            subtitle: 'Navigating informal and formal address',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: 'Formal "Sie" vs. Casual "du"',
              explanation: 'Always use capitalized "Sie" with strangers, doctors, officials, and elders. Use "du" with friends, family, and children. Crossing over to "du" (das Duzen) is usually offered by the elder or superior.',
              culturalTip: 'Defaulting to "Sie" in stores and restaurants shows respect and cultural poise.'
            },
            practice: {
              audioId: 'dial_0_0',
              nativePhrase: 'Wie geht es Ihnen?',
              englishMeaning: 'How are you? (Formal)',
              phonetic: 'Vee gayt es EE-nen?',
              tokens: ['Wie', 'geht', 'es', 'Ihnen?'],
              distractors: ['dir', 'Hallo'],
              comprehension: {
                question: 'You speak to a bus conductor in Munich. How do you ask how they are doing?',
                options: ['Wie geht es dir?', 'Wie geht es Ihnen?', 'Was geht ab?', 'Tschüss'],
                correctIndex: 1,
                explanation: '"Wie geht es Ihnen?" is the polite formal construction.'
              }
            }
          },
          {
            id: 'de_u1_s3',
            title: 'Bitte & Danke: The Polish of Conversation',
            subtitle: 'The multi-purpose "Bitte"',
            type: 'lesson',
            xp: 30,
            grammarConcept: {
              title: 'The Chameleon Word: "Bitte"',
              explanation: '"Bitte" means "Please", "You\'re welcome", "Here you go" (handing something over), and "Pardon?" (Bitte schön?). "Danke" or "Vielen Dank" expresses your gratitude.',
              culturalTip: 'Saying "Guten Appetit" before eating and responding with "Danke, gleichfalls!" is universal at dining tables.'
            },
            practice: {
              audioId: 'g4',
              nativePhrase: 'Vielen Dank!',
              englishMeaning: 'Thank you very much!',
              phonetic: 'FEE-len dahnk!',
              tokens: ['Vielen', 'Dank!'],
              distractors: ['Bitte', 'Morgen'],
              comprehension: {
                question: 'Someone holds the door open for you. What do you reply?',
                options: ['Auf Wiedersehen', 'Danke schön', 'Gute Nacht', 'Nein'],
                correctIndex: 1,
                explanation: '"Danke schön" expresses polite appreciation.'
              }
            }
          },
          {
            id: 'de_u1_boss',
            title: 'Unit 1 Boss Trial: Berlin Arrival',
            subtitle: 'Test your greeting reflexes and formality etiquette',
            type: 'checkpoint',
            xp: 50,
            challenge: {
              prompt: 'You step into a boutique hotel in Berlin. Greet the clerk, state your purpose, and navigate formalities!',
              questions: [
                {
                  q: 'What is the polite phrase for "Goodbye" to someone you address formally?',
                  options: ['Tschüss', 'Auf Wiedersehen', 'Bis gleich', 'Hallo'],
                  correctIndex: 1
                },
                {
                  q: 'How do you say "Excuse me / I am sorry" in German?',
                  options: ['Entschuldigung', 'Guten Tag', 'Ja', 'Bitte'],
                  correctIndex: 0
                },
                {
                  q: 'What does "Ich verstehe nicht" mean?',
                  options: ['I understand', 'I do not understand', 'Where is the train?', 'How much?'],
                  correctIndex: 1
                }
              ]
            }
          }
        ]
      }
    ]
  },
  latin: {
    title: 'Classical Latin Forum',
    subtitle: 'From Roman Forum Salutations to Timeless Rhetoric',
    units: [
      {
        id: 'la_u1',
        unitNumber: 1,
        title: 'Unit 1: The Voice of the Republic',
        level: 'Classical Level 1',
        description: 'Master Roman greetings, singular vs. plural salutations, and phonetic macrons.',
        color: '#dc2626',
        stages: [
          {
            id: 'la_u1_s1',
            title: 'Salvē & Salvēte: The Roman Greeting',
            subtitle: 'Wishing good health to one and many',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: 'Imperative Greetings of Health',
              explanation: 'The Roman greeting "Salvē!" literally means "Be healthy!" (imperative of salvere). When addressing a crowd or multiple people, the suffix changes to "-te": "Salvēte!".',
              culturalTip: 'Romans greeted peers with a grasp of the forearm, wishing fortitude and physical well-being.'
            },
            practice: {
              audioId: 'l1',
              nativePhrase: 'Salvē!',
              englishMeaning: 'Hello / Greetings (to one person)!',
              phonetic: 'SAHL-way!',
              tokens: ['Salvē!'],
              distractors: ['Valē', 'Roma'],
              comprehension: {
                question: 'You enter a room with several Roman senators. Which greeting must you use?',
                options: ['Salvē', 'Salvēte', 'Valē', 'Grātiās'],
                correctIndex: 1,
                explanation: '"Salvēte" is the plural imperative address.'
              }
            }
          },
          {
            id: 'la_u1_s2',
            title: 'Valē: The Noble Farewell',
            subtitle: 'Bidding farewell with strength',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: '"Valē" Means "Be Strong"',
              explanation: 'Just like "Salvē", "Valē!" comes from valere (to be strong, prevail). To multiple citizens, you say "Valēte!". This is where modern words like "valiant" and "valid" originate.',
              culturalTip: 'Letters in antiquity routinely concluded with "Cura ut valeas" (Take care that you stay strong).'
            },
            practice: {
              audioId: 'l3',
              nativePhrase: 'Valē, amīce!',
              englishMeaning: 'Farewell, friend!',
              phonetic: 'VAH-lay, ah-MEE-kay!',
              tokens: ['Valē,', 'amīce!'],
              distractors: ['Salvē', 'Forum'],
              comprehension: {
                question: 'What is the plural form of the farewell "Valē"?',
                options: ['Valēte', 'Salvēte', 'Amīcī', 'Grātiās'],
                correctIndex: 0
                ,
                explanation: 'Add "-te" to the imperative stem for plural address.'
              }
            }
          },
          {
            id: 'la_u1_boss',
            title: 'Unit 1 Boss Trial: Steps of the Curia',
            subtitle: 'Converse with a Roman magistrate',
            type: 'checkpoint',
            xp: 50,
            challenge: {
              prompt: 'Stand in the Forum Romanum and address the assembly with classical decorum!',
              questions: [
                {
                  q: 'How did Romans say "Thank you"?',
                  options: ['Grātiās tibi agō', 'Salvēte', 'Valē', 'Carpe diem'],
                  correctIndex: 0
                },
                {
                  q: 'In classical Latin, how is the letter "V" pronounced?',
                  options: ['Like English "V"', 'Like English "W"', 'Like English "B"', 'Silent'],
                  correctIndex: 1
                },
                {
                  q: 'What does "Senātus Populusque Rōmānus" represent?',
                  options: ['The Emperor\'s guard', 'The Senate and People of Rome', 'The Roman Marketplace', 'Peace to all'],
                  correctIndex: 1
                }
              ]
            }
          }
        ]
      }
    ]
  },
  greek: {
    title: 'Hellenic Odyssey',
    subtitle: 'From the Streets of Athens to Philosophical Foundations',
    units: [
      {
        id: 'gr_u1',
        unitNumber: 1,
        title: 'Unit 1: The Modern Hellenic Voice',
        level: 'A1.1 Foundations',
        description: 'Master the Greek script, warm everyday greetings, and essential courtesy.',
        color: '#0284c7',
        stages: [
          {
            id: 'gr_u1_s1',
            title: 'Yassou & Yassas: Wishing Health',
            subtitle: 'Γεια σου & Γεια σας',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: 'Health to You: "Υγεία σου"',
              explanation: '"Γεια σου" (Yassou) is a contraction of "υγεία σου" (health to you). When speaking to an elder or a group, use the formal/plural form "Γεια σας" (Yassas).',
              culturalTip: 'Greeks value warmth and hospitality (philoxenia). Greeting shopkeepers with a bright "Yassas!" creates instant rapport.'
            },
            practice: {
              audioId: 'gr1',
              nativePhrase: 'Γεια σου!',
              englishMeaning: 'Hello / Greetings (informal)',
              phonetic: 'YAH-soo!',
              tokens: ['Γεια', 'σου!'],
              distractors: ['Καλημέρα', 'Ευχαριστώ'],
              comprehension: {
                question: 'Which greeting is used to formally greet an elder or a group in Greek?',
                options: ['Γεια σου', 'Γεια σας', 'Αντίο', 'Ναι'],
                correctIndex: 1,
                explanation: '"Γεια σας" is the respectful formal and plural form.'
              }
            }
          },
          {
            id: 'gr_u1_s2',
            title: 'Kalimera & Kalispera: Daylight Greetings',
            subtitle: 'Καλημέρα & Καλησπέρα',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: 'Compounding "Good" and "Day"',
              explanation: '"Καλημέρα" combines "καλή" (good) and "ημέρα" (day). It is used until roughly noon. From late afternoon onward, "Καλησπέρα" (good evening) takes over.',
              culturalTip: 'Never rush through "Kalimera"; it is often accompanied by an inquiry about family and coffee.'
            },
            practice: {
              audioId: 'gr2',
              nativePhrase: 'Καλημέρα!',
              englishMeaning: 'Good morning!',
              phonetic: 'Kah-lee-MEH-rah!',
              tokens: ['Καλημέρα!'],
              distractors: ['Αντίο', 'Όχι'],
              comprehension: {
                question: 'What time of day is "Καλησπέρα" used?',
                options: ['Dawn', 'Early morning', 'Late afternoon and evening', 'Only at midnight'],
                correctIndex: 2,
                explanation: '"Καλησπέρα" specifically greets the evening.'
              }
            }
          },
          {
            id: 'gr_u1_boss',
            title: 'Unit 1 Boss Trial: Plaka Neighborhood Walk',
            subtitle: 'Engage with Athens locals in the historic district',
            type: 'checkpoint',
            xp: 50,
            challenge: {
              prompt: 'Navigate a traditional Greek kafeneio and marketplace encounter with grace!',
              questions: [
                {
                  q: 'How do you say "Thank you" in Greek?',
                  options: ['Παρακαλώ', 'Ευχαριστώ (Efcharisto)', 'Αντίο', 'Ναι'],
                  correctIndex: 1
                },
                {
                  q: 'What does "Παρακαλώ" (Parakalo) mean?',
                  options: ['Please & You are welcome', 'Goodbye', 'Where is it?', 'How much?'],
                  correctIndex: 0
                },
                {
                  q: 'What is the Greek word for "Yes"? (Careful, it sounds like English "no"!)',
                  options: ['Όχι (Ochi)', 'Ναι (Ne)', 'Γεια', 'Καλά'],
                  correctIndex: 1
                }
              ]
            }
          }
        ]
      }
    ]
  },
  french: {
    title: 'French Immersion Promenade',
    subtitle: 'From Parisian Café Etiquette to Natural Rhythm',
    units: [
      {
        id: 'fr_u1',
        unitNumber: 1,
        title: 'Unit 1: The Golden Rule of Bonjour',
        level: 'A1.1 Foundations',
        description: 'Understand why "Bonjour" is mandatory in France, plus essential politeness formulas.',
        color: '#8b5cf6',
        stages: [
          {
            id: 'fr_u1_s1',
            title: 'The Mandatory "Bonjour"',
            subtitle: 'The passport to French interaction',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: '"Bonjour" is Not Optional',
              explanation: 'In France, asking a question without first saying "Bonjour Madame/Monsieur" is considered deeply impolite. It acknowledges the other person as a human being before any commercial transaction begins.',
              culturalTip: 'Always say "Bonjour" immediately upon stepping into any French bakery (boulangerie) or shop.'
            },
            practice: {
              audioId: 'f1',
              nativePhrase: 'Bonjour!',
              englishMeaning: 'Hello / Good morning!',
              phonetic: 'Bohn-ZHOOR!',
              tokens: ['Bonjour!'],
              distractors: ['Bonsoir', 'Merci'],
              comprehension: {
                question: 'You step into a Paris boulangerie at 10 AM. What is the very first word you should utter?',
                options: ['Un croissant, s\'il vous plaît', 'Bonjour!', 'Combien?', 'Au revoir'],
                correctIndex: 1,
                explanation: 'Always acknowledge the baker with "Bonjour!" before ordering.'
              }
            }
          },
          {
            id: 'fr_u1_s2',
            title: 'S\'il vous plaît & Merci',
            subtitle: 'The pillars of French courtesy',
            type: 'lesson',
            xp: 25,
            grammarConcept: {
              title: '"If it pleases you"',
              explanation: '"S\'il vous plaît" literally translates to "If it pleases you" (formal). Use "s\'il te plaît" only with close friends or children. "Merci beaucoup" adds heartfelt emphasis.',
              culturalTip: 'Soft voice tones are appreciated in public transit and restaurants across France.'
            },
            practice: {
              audioId: 'f4',
              nativePhrase: 'Merci beaucoup!',
              englishMeaning: 'Thank you very much!',
              phonetic: 'Mehr-SEE boh-KOO!',
              tokens: ['Merci', 'beaucoup!'],
              distractors: ['Bonjour', 'Non'],
              comprehension: {
                question: 'What is the formal way to say "Please" in French?',
                options: ['S\'il te plaît', 'S\'il vous plaît', 'De rien', 'Pardon'],
                correctIndex: 1,
                explanation: '"S\'il vous plaît" uses the respectful "vous" form.'
              }
            }
          },
          {
            id: 'fr_u1_boss',
            title: 'Unit 1 Boss Trial: Left Bank Café',
            subtitle: 'Order coffee and interact with a Parisian waiter',
            type: 'checkpoint',
            xp: 50,
            challenge: {
              prompt: 'Sit at an outdoor terrace and order an espresso with textbook Parisian etiquette!',
              questions: [
                {
                  q: 'How do you say "Goodbye" in standard French?',
                  options: ['Au revoir', 'Bonsoir', 'Merci', 'De rien'],
                  correctIndex: 0
                },
                {
                  q: 'When someone says "Merci", how do you politely reply "You are welcome"?',
                  options: ['De rien / Je vous en prie', 'Au revoir', 'Pardon', 'S\'il vous plaît'],
                  correctIndex: 0
                },
                {
                  q: 'What is the polite phrase to get a waiter\'s attention or apologize for bumping into someone?',
                  options: ['Pardon / Excusez-moi', 'Bonjour', 'Oui', 'Non'],
                  correctIndex: 0
                }
              ]
            }
          }
        ]
      }
    ]
  }
};
