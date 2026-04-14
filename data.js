const episodesData = [
    {
        id: "1",
        title: "Identité et Situation Personnelle",
        theme: "Identity and Personal Situation",
        vocabulary: [
            { fr: "Allo !", en: "Hello! (Informal / Phone)", note: "Used both on the phone and as a general greeting in Quebec." },
            { fr: "Salut !", en: "Hi! (Informal)" },
            { fr: "Bonjour !", en: "Hello! (Daytime greeting)" },
            { fr: "Bye !", en: "Bye! (Informal)" },
            { fr: "À bientôt !", en: "See you later! (Informal)" },
            { fr: "Au revoir !", en: "Goodbye! (General)" },
            { fr: "Je suis célibataire.", en: "I am single." },
            { fr: "Je suis marié(e).", en: "I am married." },
            { fr: "Je suis divorcé(e).", en: "I am divorced." },
            { fr: "Je suis conjoint de fait.", en: "I am in a common-law relationship." },
            { fr: "J’ai un garçon / une fille.", en: "I have a boy / a girl." },
            { fr: "Je n’ai pas d’enfants.", en: "I do not have children." },
            { fr: "vendeur / vendeuse", en: "salesperson" },
            { fr: "musicien / musicienne", en: "musician" },
            { fr: "professeur / professeure", en: "teacher" },
            { fr: "infirmier / infirmière", en: "nurse" },
            { fr: "le Mexique", en: "Mexico" },
            { fr: "les États-Unis", en: "United States" },
            { fr: "la Chine", en: "China" }
        ],
        grammar: [
            {
                title: "Venir de (To come from)",
                explanation: "<p>To say 'I come from', use <strong>Je viens de + Country</strong>. The preposition <em>de</em> contracts based on the country's gender:</p>",
                examples: [
                    { fr: "Je viens du Pérou (de + le).", en: "I come from Peru (Masculine)." },
                    { fr: "Je viens de la France (de + la).", en: "I come from France (Feminine)." },
                    { fr: "Je viens d'Allemagne (de + l').", en: "I come from Germany (Vowel)." },
                    { fr: "Je viens des États-Unis (de + les).", en: "I come from the United States (Plural)." }
                ]
            },
            {
                title: "Standard Introduction Structure",
                explanation: "<p>Combining everything into a full introduction:</p>",
                examples: [
                    { fr: "Je m'appelle [Name]. Je suis [Marital Status]. Je suis [Profession]. Je suis [Nationality]. J'habite à [City]. Je parle [Language].", en: "My name is [Name]. I am [Status]. I am [Profession]. I am [Nationality]. I live in [City]. I speak [Language]." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Formal Meeting",
                lines: [
                    { speaker: "Valérie", fr: "Bonjour ! Mon nom est Valérie.", en: "Hello! My name is Valérie.", align: "left" },
                    { speaker: "Sébastien", fr: "Bonjour, madame. Je suis Sébastien. Ravi de vous rencontrer.", en: "Hello, ma'am. I am Sébastien. Nice to meet you.", align: "right" },
                    { speaker: "Valérie", fr: "De même.", en: "Likewise.", align: "left" }
                ]
            }
        ],
        culture: "<p><strong>Accents:</strong> You learned the French letters and special accents like accent aigu (é), accent grave (è), tréma (ï), and cédille (ç) which forces 'c' to sound like 's' before a/o/u.</p>"
    },
    {
        id: "2",
        title: "Nombres, Âge et Dates",
        theme: "Numbers, Age, and Dates",
        vocabulary: [
            { fr: "Vingt-sept (27)", en: "Twenty-seven" },
            { fr: "Trente-et-un (31)", en: "Thirty-one" }
        ],
        grammar: [
            {
                title: "Special Rules for French Numbers",
                explanation: "<p>Numbers from 70 to 99 use mathematics in French.</p>",
                examples: [
                    { fr: "70 (soixante-dix)", en: "60 + 10" },
                    { fr: "80 (quatre-vingts)", en: "4 x 20" },
                    { fr: "92 (quatre-vingt-douze)", en: "80 + 12" },
                    { fr: "Trois millions", en: "Three million (million takes an 's' in plural)" }
                ]
            },
            {
                title: "Expressing Birthdays",
                explanation: "<p>The standard format is Day-Month-Year. In writing, internationally it's YYYY-MM-DD. For the 1st of the month, always use '1er' (premier).</p>",
                examples: [
                    { fr: "Ma date de naissance, c’est le 12 décembre 1993.", en: "My date of birth is December 12, 1993." },
                    { fr: "Je suis né le 30 octobre 1982.", en: "I was born on October 30, 1982." }
                ]
            }
        ],
        dialogues: [],
        culture: "<p>Quebeckers use the exact same complex numbers (soixante-dix, quatre-vingts) as in France, avoiding the 'septante / nonante' used in Switzerland.</p>"
    },
    {
        id: "3",
        title: "L'Heure, la Politesse et l'Horaire",
        theme: "Time, Politeness, and Schedule",
        vocabulary: [
            { fr: "Nom / Prénom", en: "Last Name / First Name" },
            { fr: "Date de naissance", en: "Date of Birth" },
            { fr: "Courriel", en: "Email" }
        ],
        grammar: [
            {
                title: "Telling Time",
                explanation: "<p>Use <em>moins</em> to express 'minutes to' an hour, and <em>et</em> for adding halves/quarters.</p>",
                examples: [
                    { fr: "onze heures moins quart", en: "Quarter to eleven (10:45)" },
                    { fr: "une heure et quart", en: "Quarter past one (1:15)" },
                    { fr: "cinq heures et demie", en: "Half past five (5:30)" }
                ]
            },
            {
                title: "Formal vs Informal Addressing (Tu vs Vous)",
                explanation: "<p>Use <em>vous</em> (Formal) for strangers and elders. Use <em>tu</em> (Informal) for friends.</p>",
                examples: [
                    { fr: "As-tu l'heure? (Informal)", en: "Do you have the time?" },
                    { fr: "Avez-vous l'heure? (Formal)", en: "Do you have the time?" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Discussing Schedules",
                lines: [
                    { speaker: "Person A", fr: "Le cours de français est de 18 h à 21 h.", en: "The French class is from 18:00 to 21:00.", align: "left" },
                    { speaker: "Person B", fr: "Le restaurant est ouvert du mardi au samedi.", en: "The restaurant is open from Tuesday to Saturday.", align: "right" }
                ]
            }
        ],
        culture: "<p>Quebec French often simplifies time in fast casual speech, but remains standard in writing. Abbreviations like <em>ch.</em> (chemin/road), <em>boul.</em> (boulevard), and <em>app.</em> (apartment) are very common.</p>"
    },
    {
        id: "4",
        title: "Les Objets et la Localisation",
        theme: "Objects and Locations",
        vocabulary: [
            { fr: "La table", en: "The table" },
            { fr: "Le crayon", en: "The pencil" },
            { fr: "Les clés", en: "The keys" },
            { fr: "Le parapluie", en: "The umbrella" },
            { fr: "Sur", en: "On" },
            { fr: "Sous", en: "Under" },
            { fr: "Derrière", en: "Behind" }
        ],
        grammar: [
            {
                title: "There is / There are (Il y a)",
                explanation: "<p><strong>Il y a</strong> is fixed and answers 'what exists here'. The negative is <strong>Il n'y a pas</strong>.</p>",
                examples: [
                    { fr: "Sur la table, il y a une lampe.", en: "On the table, there is a lamp." },
                    { fr: "Sur le lit, il n’y a rien.", en: "On the bed, there is nothing." }
                ]
            },
            {
                title: "Possession with 'de'",
                explanation: "<p>To state ownership ('X's Y'), invert it to 'The Y of X' using the preposition <em>de</em>.</p>",
                examples: [
                    { fr: "Voici la table de Jean-Martin.", en: "Here is Jean-Martin's table." },
                    { fr: "Voici le crayon de Geneviève.", en: "Here is Geneviève's pencil." }
                ]
            }
        ],
        dialogues: [],
        culture: "<p>Visual description is straightforward. 'Dans le dessin A, les crayons sont sur la table' (In drawing A, the pencils are on the table).</p>"
    },
    {
        id: "5",
        title: "Famille et Adjectifs Possessifs",
        theme: "Family and Possessive Adjectives",
        vocabulary: [
            { fr: "L'auto", en: "The car (Quebec)" },
            { fr: "Le parc de stationnement", en: "The parking lot" },
            { fr: "Le sac à main", en: "The handbag" }
        ],
        grammar: [
            {
                title: "Possessive Adjectives",
                explanation: "<p>Possessive adjectives (My, Your, His...) agree with the gender and number of the <strong>object being possessed</strong>, not the owner.</p>",
                examples: [
                    { fr: "Son père", en: "His/Her father (Masculine)" },
                    { fr: "Ses crayons", en: "His/Her pencils (Plural)" },
                    { fr: "Ton auto", en: "Your car (Feminine, but takes 'ton' because 'auto' starts with a vowel)" }
                ]
            },
            {
                title: "Polite 'Vous'",
                explanation: "<p>When using the polite <em>Vous</em>, your possessive adjectives become <em>votre</em> (singular) and <em>vos</em> (plural).</p>",
                examples: [
                    { fr: "Votre famille", en: "Your family (Formal)" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Formal Introductions",
                lines: [
                    { speaker: "Person A", fr: "Bonjour, monsieur Légaré.", en: "Hello, Mr. Légaré.", align: "left" },
                    { speaker: "Person B", fr: "Bonjour. Je m’appelle Anne-Sophie. Je suis heureuse de vous rencontrer.", en: "Hello, my name is Anne-Sophie. I am happy to meet you.", align: "right" }
                ]
            }
        ],
        culture: "<p>Using <em>Vous</em> to elders and strangers is highly respected both in France and Quebec. The rule remains identical across the Francophonie.</p>"
    },
    {
        id: "6",
        title: "Loisirs et Présent Continu",
        theme: "Hobbies and Present Continuous",
        vocabulary: [
            { fr: "Faire du ski", en: "To ski" },
            { fr: "Faire du camping", en: "To go camping" },
            { fr: "Faire la vaisselle", en: "To wash the dishes" },
            { fr: "Le char", en: "The car (Quebec colloquial)" },
            { fr: "Ça me tente", en: "I feel like it / I'm tempted (Quebec)" },
            { fr: "Ça marche !", en: "That works! / It's a deal!" }
        ],
        grammar: [
            {
                title: "Present Continuous (Être en train de)",
                explanation: "<p>To express what you are doing right now, use <strong>être en train de + infinitive verb</strong>. This matches the English 'be doing' form.</p>",
                examples: [
                    { fr: "Je suis en train de manger.", en: "I am eating (right now)." },
                    { fr: "Ils sont en train de jouer au hockey.", en: "They are playing hockey." }
                ]
            },
            {
                title: "Quebec Spoken Quirk",
                explanation: "<p>In highly colloquial Quebec French, speakers might drop 'en train de' and use the present participle directly: <em>Je suis mangeant</em> (rare in writing, found in rural speech).</p>",
                examples: []
            }
        ],
        dialogues: [
            {
                context: "Weekend Plans",
                lines: [
                    { speaker: "A", fr: "Ça me tente d'aller faire du ski à Mont-Tremblant ce week-end.", en: "I feel like going skiing at Mont-Tremblant this weekend.", align: "left" },
                    { speaker: "B", fr: "Oh wow, ça marche ! J'adore le ski ! On prend mon char.", en: "Oh wow, that works! I love skiing! We'll take my car.", align: "right" },
                    { speaker: "A", fr: "D'accord, et on apporte de la poutine pour le lunch ?", en: "Okay, and we bring poutine for lunch?", align: "left" },
                    { speaker: "B", fr: "Oui, bien sûr ! C'est obligatoire !", en: "Yes, of course! It's mandatory!", align: "right" }
                ]
            }
        ],
        culture: "<p>Quebeckers value outdoor activities. Expressions like <strong>Ça me tente</strong> (I feel like it) and <strong>mon char</strong> (my car) are quintessential markers of Quebec French.</p>"
    },
    {
        id: "7",
        title: "Les Adjectifs Qualificatifs",
        theme: "Describing People and Adjectives",
        vocabulary: [
            { fr: "Gentil / Gentille", en: "Nice / Kind" },
            { fr: "Intelligent(e)", en: "Smart" },
            { fr: "Timide", en: "Shy" },
            { fr: "Drôle", en: "Funny" },
            { fr: "Ben", en: "Very (Quebec colloquial for 'bien')" }
        ],
        grammar: [
            {
                title: "Adjective Gender and Placement",
                explanation: "<p>Adjectives must agree in gender (add -e for feminine) and number (add -s for plural) with the noun they modify.</p><p>Most adjectives go <strong>after</strong> the noun, but short ones (beau, bon, grand, petit, jeune, vieux) go <strong>before</strong>.</p>",
                examples: [
                    { fr: "Un beau garçon", en: "A handsome boy" },
                    { fr: "Une femme intelligente", en: "A smart woman" },
                    { fr: "Il est beau -> Elle est belle", en: "He is handsome -> She is beautiful" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Describing a Coworker",
                lines: [
                    { speaker: "A", fr: "Tu connais le nouveau comptable ?", en: "Do you know the new accountant?", align: "left" },
                    { speaker: "B", fr: "Oui, il est ben gentil, il est très patient.", en: "Yes, he's very nice, he is very patient.", align: "right" },
                    { speaker: "A", fr: "L'ancien était toujours en colère.", en: "The old one was always angry.", align: "left" }
                ]
            }
        ],
        culture: "<p>In Quebec, you will hear the word <em>ben</em> (a pronunciation of 'bien') used as an intensifier, similar to 'very' or 'super'. Example: <em>Il est ben drôle</em> (He is extremely funny).</p>"
    },
    {
        id: "8",
        title: "Au Restaurant et L'Impératif",
        theme: "At the Restaurant and the Imperative",
        vocabulary: [
            { fr: "La facture / L'addition", en: "The bill" },
            { fr: "Le fromage en grains", en: "Cheese curds" },
            { fr: "La poutine", en: "Poutine (Quebec dish)" },
            { fr: "Un steak frites, moyen", en: "A steak and fries, medium rare" }
        ],
        grammar: [
            {
                title: "The Imperative Mood (L'impératif)",
                explanation: "<p>Used for commands and requests. To form it, take the present tense of (tu, nous, vous) and drop the pronoun.</p>",
                examples: [
                    { fr: "Donnez-moi la facture, s'il vous plaît. (Vous form)", en: "Give me the bill, please." },
                    { fr: "Prends ce menu. (Tu form)", en: "Take this menu." },
                    { fr: "Allons-y. (Nous form)", en: "Let's go." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Ordering Poutine",
                lines: [
                    { speaker: "Waiter", fr: "Vous êtes prêt à commander ?", en: "Are you ready to order?", align: "left" },
                    { speaker: "Customer", fr: "Oui, pour moi, je vais prendre une poutine, avec du fromage en grains.", en: "Yes, for me, I'll take a poutine, with cheese curds.", align: "right" },
                    { speaker: "Waiter", fr: "Parfait. Ça sera prêt dans 15 minutes.", en: "Perfect. It will be ready in 15 minutes.", align: "left" }
                ]
            }
        ],
        culture: "<p>Poutine—fries, fresh cheese curds (fromage en grains), and hot gravy—is the most famous Quebec fast food. When asking for the check, Quebeckers often say <strong>la facture</strong> instead of l'addition.</p>"
    },
    {
        id: "9",
        title: "La Santé et Chez le Médecin",
        theme: "Health and at the Doctor's",
        vocabulary: [
            { fr: "Le ventre", en: "The stomach / belly" },
            { fr: "La gorge", en: "The throat" },
            { fr: "Un rhume", en: "A cold" },
            { fr: "De la fièvre", en: "A fever" },
            { fr: "L'ordonnance", en: "The prescription" }
        ],
        grammar: [
            {
                title: "Avoir mal à (Having pain in)",
                explanation: "<p>Combine <em>avoir mal à</em> with the definite article of the body part. Remember contractions: à + le = au, à + les = aux.</p>",
                examples: [
                    { fr: "J'ai mal au ventre.", en: "My stomach hurts. (au = à + le)" },
                    { fr: "J'ai mal à la tête.", en: "My head hurts." },
                    { fr: "J'ai mal aux dents.", en: "My teeth hurt. (aux = à + les)" }
                ]
            }
        ],
        dialogues: [
            {
                context: "At the Clinic",
                lines: [
                    { speaker: "Doctor", fr: "Bonjour, monsieur, qu'est-ce que vous avez ?", en: "Hello, sir, what's wrong?", align: "left" },
                    { speaker: "Patient", fr: "J'ai mal à la gorge depuis 2 jours, pis j'ai de la fièvre.", en: "My throat has hurt for 2 days, and I have a fever.", align: "right" },
                    { speaker: "Doctor", fr: "C'est un rhume. Voici l'ordonnance et votre congé de maladie.", en: "It's a cold. Here is the prescription and your sick note.", align: "left" }
                ]
            }
        ],
        culture: "<p>Quebec has a public health insurance system called RAMQ (Régie de l'assurance maladie du Québec). Many doctors ask you to rest and take Tylenol over prescribing heavy drugs for mild illness.</p>"
    },
    {
        id: "10",
        title: "Demander Son Chemin",
        theme: "Asking for Directions",
        vocabulary: [
            { fr: "Tout droit", en: "Straight ahead" },
            { fr: "À gauche / À droite", en: "To the left / To the right" },
            { fr: "Le feu de circulation", en: "The traffic light" },
            { fr: "À pied", en: "On foot / walking" },
            { fr: "Je me suis perdu(e)", en: "I am lost" }
        ],
        grammar: [
            {
                title: "Directions via Imperative",
                explanation: "<p>When giving directions to a stranger, always use the <em>vous</em> form of the imperative.</p>",
                examples: [
                    { fr: "Tournez à gauche.", en: "Turn left." },
                    { fr: "Allez tout droit.", en: "Go straight." },
                    { fr: "Prenez la première rue.", en: "Take the first street." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Lost near Metro Berri-UQAM",
                lines: [
                    { speaker: "Tourist", fr: "Pardon, je me suis perdu. Comment aller à la station Berri-UQAM ?", en: "Excuse me, I'm lost. How do I get to Berri-UQAM station?", align: "left" },
                    { speaker: "Local", fr: "Allez tout droit jusqu'au feu, puis tournez à droite.", en: "Go straight to the light, then turn right.", align: "right" },
                    { speaker: "Tourist", fr: "C'est loin ?", en: "Is it far?", align: "left" },
                    { speaker: "Local", fr: "Non, c'est 5 minutes à pied, tu ne peux pas le rater.", en: "No, it's a 5 minute walk, you can't miss it.", align: "right" }
                ]
            }
        ],
        culture: "<p>Montreal's downtown revolves around <em>Rue Sainte-Catherine</em> (the main shopping artery) and major metro hubs like Berri-UQAM. Quebeckers are famously helpful when offering directions.</p>"
    },
    {
        id: "11",
        title: "Les Activités Passées",
        theme: "Past Activities (Passé Composé)",
        vocabulary: [
            { fr: "Hier", en: "Yesterday" },
            { fr: "Ce matin", en: "This morning" },
            { fr: "La semaine dernière", en: "Last week" },
            { fr: "Le week-end (la fin de semaine)", en: "The weekend" }
        ],
        grammar: [
            {
                title: "Passé Composé (The Past Tense)",
                explanation: "<p>Used to describe completed past actions. Constructed using: <strong>Auxiliary verb (Avoir/Être) + Past Participle</strong>.</p>",
                examples: [
                    { fr: "J'ai travaillé.", en: "I worked. (Avoir)" },
                    { fr: "J'ai mangé de la poutine.", en: "I ate poutine. (Avoir)" }
                ]
            },
            {
                title: "Using 'Être' as the Auxiliary",
                explanation: "<p>16 specific movement verbs (aller, venir, sortir, arriver, etc.) use <em>Être</em> instead of Avoir. The participle must agree in gender/number with the subject when Être is used.</p>",
                examples: [
                    { fr: "Je suis allé(e).", en: "I went." },
                    { fr: "Nous sommes sorti(e)s.", en: "We went out." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Weekend Recap",
                lines: [
                    { speaker: "A", fr: "Qu'est-ce que tu as fait ce week-end ?", en: "What did you do this weekend?", align: "left" },
                    { speaker: "B", fr: "J'ai été au camping avec ma blonde.", en: "I went camping with my girlfriend.", align: "right" },
                    { speaker: "A", fr: "Wow, tu as eu du fun ?", en: "Wow, did you have fun?", align: "left" },
                    { speaker: "B", fr: "Ben oui ! On a fait du feu, c'était ben bon.", en: "Oh yes! We made a fire, it was really nice.", align: "right" }
                ]
            }
        ],
        culture: "<p>When describing past events, Quebec speakers frequently use <em>J'ai été</em> interchangeably with <em>Je suis allé(e)</em> (I went), though the latter is grammar-book correct.</p>"
    },
    {
        id: "13",
        title: "Logement et Appartement",
        theme: "Housing and Apartments",
        vocabulary: [
            { fr: "Le loyer", en: "The rent" },
            { fr: "Le chauffage", en: "The heating" },
            { fr: "La caution", en: "The security deposit" },
            { fr: "Le bail", en: "The lease" },
            { fr: "Non meublé", en: "Unfurnished" },
            { fr: "Un 3 et demi (3 ½)", en: "A one-bedroom apartment (Quebec size metric)" }
        ],
        grammar: [
            {
                title: "Avoir besoin de (To have need of)",
                explanation: "<p>To say 'I need', use <strong>avoir besoin de + noun/verb</strong>.</p>",
                examples: [
                    { fr: "J'ai besoin d'un appartement.", en: "I need an apartment." },
                    { fr: "J'ai besoin de trouver un logement.", en: "I need to find housing." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Calling about an Apartment (Kijiji)",
                lines: [
                    { speaker: "Tenant", fr: "Bonjour, je vous appelle pour l'appartement sur Kijiji. Quel est le loyer ?", en: "Hello, I'm calling about the Kijiji apartment. What is the rent?", align: "left" },
                    { speaker: "Landlord", fr: "C'est 1400 dollars par mois, le chauffage et l'eau sont inclus.", en: "It's 1400 dollars a month, heating and water are included.", align: "right" },
                    { speaker: "Tenant", fr: "Est-ce qu'il y a un stationnement ?", en: "Is there a parking space?", align: "left" },
                    { speaker: "Landlord", fr: "Oui, inclus dans le prix.", en: "Yes, included in the price.", align: "right" }
                ]
            }
        ],
        culture: "<p>In Quebec, apartments are sized in halves. A <strong>1 ½</strong> is a studio, a <strong>3 ½</strong> is a one-bedroom apartment (living room, bedroom, kitchen + half bathroom), and a <strong>4 ½</strong> is a two-bedroom. Kijiji is the most popular localized platform to find them.</p>"
    },
    {
        id: "14",
        title: "La Météo et le Climat",
        theme: "Weather and Climate",
        vocabulary: [
            { fr: "La neige", en: "The snow" },
            { fr: "Le soleil", en: "The sun" },
            { fr: "Le vent", en: "The wind" },
            { fr: "Il pleut", en: "It is raining" }
        ],
        grammar: [
            {
                title: "Weather Expressions with 'Faire'",
                explanation: "<p>We use the verb <em>Faire</em> or impersonal <em>Il</em> to describe conditions.</p>",
                examples: [
                    { fr: "Il fait très froid.", en: "It is very cold." },
                    { fr: "Il neige beaucoup.", en: "It snows a lot." },
                    { fr: "On prévoit du soleil.", en: "Sun is forecasted (They predict sun)." }
                ]
            }
        ],
        dialogues: [],
        culture: "<p>Weather is a monumental topic in Quebec due to the extreme winters. The meteorology vocabulary—such as <em>Il vente beaucoup</em> (It's very windy)—is a major conversational staple.</p>"
    },
    {
        id: "15",
        title: "Vêtements et Projets Futurs",
        theme: "Clothes and Future Plans",
        vocabulary: [
            { fr: "Le poulet / Le bœuf", en: "Chicken / Beef" },
            { fr: "Les bleuets sauvages", en: "Wild blueberries" }
        ],
        grammar: [
            {
                title: "Futur Proche (The Near Future)",
                explanation: "<p>To express what you are <em>going</em> to do, use <strong>Aller (present) + Infinitive verb</strong>.</p>",
                examples: [
                    { fr: "Je vais aller au lit.", en: "I am going to go to bed." },
                    { fr: "Il va pleuvoir.", en: "It is going to rain." },
                    { fr: "On va aller à la plage.", en: "We are going to go to the beach." }
                ]
            },
            {
                title: "Partitive Articles (Quantities)",
                explanation: "<p>Use <em>du, de la, de l', des</em> for unknown quantities ('some'). Use specific measurements for defined amounts.</p>",
                examples: [
                    { fr: "Du lait", en: "Some milk" },
                    { fr: "Deux litres de lait", en: "Two liters of milk" }
                ]
            }
        ],
        dialogues: [],
        culture: "<p>Quebec wild blueberries (les bleuets sauvages) are a tremendous point of pride, particularly those from the Lac-Saint-Jean region.</p>"
    }
];
