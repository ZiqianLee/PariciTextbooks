const episodes1 = [
    {
        id: "1",
        title: "Identité et Situation Personnelle",
        theme: "Identity and Personal Situation",
        vocabulary: [
            // Greetings
            { fr: "Allo !", en: "Hello! (Informal / Phone)", note: "Extremely common in Quebec for daily greetings." },
            { fr: "Salut !", en: "Hi! (Informal)" },
            { fr: "Bonjour !", en: "Hello! / Good morning! (General)" },
            { fr: "Bye !", en: "Bye! (Informal)" },
            { fr: "À bientôt !", en: "See you soon!" },
            { fr: "Au revoir !", en: "Goodbye!" },
            // Marital
            { fr: "Je suis célibataire.", en: "I am single." },
            { fr: "Je suis marié(e).", en: "I am married. (Add 'e' for feminine)" },
            { fr: "Je suis divorcé(e).", en: "I am divorced." },
            { fr: "Je suis conjoint de fait.", en: "I am in a common-law relationship." },
            { fr: "J’ai un garçon.", en: "I have a boy / a son." },
            { fr: "J’ai une fille.", en: "I have a girl / a daughter." },
            { fr: "J’ai deux garçons et deux filles.", en: "I have two boys and two girls." },
            { fr: "Je n’ai pas d’enfants.", en: "I do not have children." },
            // Professions
            { fr: "vendeur / vendeuse", en: "salesperson" },
            { fr: "musicien / musicienne", en: "musician" },
            { fr: "psychologue / psychologue", en: "psychologist" },
            { fr: "technicien / technicienne", en: "technician" },
            { fr: "professeur / professeure", en: "teacher" },
            { fr: "ingénieur / ingénieure", en: "engineer" },
            { fr: "serveur / serveuse", en: "waiter / waitress" },
            { fr: "comptable / comptable", en: "accountant" },
            { fr: "infirmier / infirmière", en: "nurse" },
            { fr: "bibliothécaire / bibliothécaire", en: "librarian" },
            { fr: "directeur / directrice", en: "manager / director" },
            { fr: "vétérinaire / vétérinaire", en: "veterinarian" },
            { fr: "étudiant / étudiante", en: "student" },
            { fr: "programmeur / programmeuse", en: "programmer" },
            { fr: "cuisinier / cuisinière", en: "cook / chef" },
            { fr: "architecte / architecte", en: "architect" },
            { fr: "caissier / caissière", en: "cashier" },
            { fr: "informaticien / informaticienne", en: "IT specialist" },
            { fr: "technicien juridique / technicienne juridique", en: "paralegal" },
            { fr: "avocat / avocate", en: "lawyer" },
            { fr: "violoniste / violoniste", en: "violinist" },
            // Countries (Les pays)
            { fr: "le Mexique", en: "Mexico" },
            { fr: "les États-Unis", en: "United States" },
            { fr: "la Russie", en: "Russia" },
            { fr: "la Tunisie", en: "Tunisia" },
            { fr: "le Brésil", en: "Brazil" },
            { fr: "la Syrie", en: "Syria" },
            { fr: "la France", en: "France" },
            { fr: "la Chine", en: "China" },
            { fr: "le Cameroun", en: "Cameroon" },
            { fr: "l’Égypte", en: "Egypt" },
            { fr: "le Maroc", en: "Morocco" },
            { fr: "l’Australie", en: "Australia" },
            { fr: "le Japon", en: "Japan" },
            { fr: "le Sénégal", en: "Senegal" },
            { fr: "la Belgique", en: "Belgium" },
            { fr: "le Portugal", en: "Portugal" },
            { fr: "les Philippines", en: "Philippines" },
            { fr: "la Nouvelle-Zélande", en: "New Zealand" },
            { fr: "l’Indonésie", en: "Indonesia" },
            { fr: "l’Italie", en: "Italy" },
            { fr: "le Pérou", en: "Peru" },
            { fr: "le Danemark", en: "Denmark" },
            { fr: "l’Inde", en: "India" },
            { fr: "l’Ukraine", en: "Ukraine" },
            { fr: "l’Allemagne", en: "Germany" },
            { fr: "Singapour", en: "Singapore" },
            { fr: "la Corée", en: "Korea" },
            { fr: "l’Algérie", en: "Algeria" },
            { fr: "la Turquie", en: "Turkey" },
            // Nationalities (Nationalités)
            { fr: "roumain / roumaine", en: "Romanian" },
            { fr: "canadien / canadienne", en: "Canadian" },
            { fr: "suisse / suisse", en: "Swiss" },
            { fr: "suédois / suédoise", en: "Swedish" },
            { fr: "portugais / portugaise", en: "Portuguese" },
            { fr: "grec / grecque", en: "Greek" },
            { fr: "belge / belge", en: "Belgian" },
            { fr: "indien / indienne", en: "Indian" },
            { fr: "vietnamien / vietnamienne", en: "Vietnamese" },
            { fr: "hongrois / hongroise", en: "Hungarian" },
            { fr: "français / française", en: "French" },
            { fr: "russe / russe", en: "Russian" },
            { fr: "indonésien / indonésienne", en: "Indonesian" },
            { fr: "afghan / afghane", en: "Afghan" },
            { fr: "iranien / iranienne", en: "Iranian" },
            { fr: "cubain / cubaine", en: "Cuban" },
            { fr: "américain / américaine", en: "American" },
            // Cities
            { fr: "J’habite à Montréal.", en: "I live in Montreal." },
            { fr: "J’habite à Québec.", en: "I live in Quebec City." },
            { fr: "J’habite à Vancouver.", en: "I live in Vancouver." },
            { fr: "J’habite à Saint-Hubert.", en: "I live in Saint-Hubert." },
            { fr: "J’habite à Laval.", en: "I live in Laval." },
            { fr: "J’habite à Chicoutimi.", en: "I live in Chicoutimi." },
            { fr: "J’habite à Toronto.", en: "I live in Toronto." },
            { fr: "J’habite à Boston.", en: "I live in Boston." },
            { fr: "J’habite à Calgary.", en: "I live in Calgary." }
        ],
        grammar: [
            {
                title: "Les Accents (French Accents)",
                explanation: "<p>French uses specific accents to change pronunciation:</p><ul><li><strong>accent aigu</strong> (é): Sounds like /e/.</li><li><strong>accent grave</strong> (è): Sounds like /ɛ/.</li><li><strong>tréma</strong> (ï): Separates the pronunciation of two vowels.</li><li><strong>cédille</strong> (ç): Forces 'c' to sound like /s/ before a/o/u instead of /k/.</li></ul>"
            },
            {
                title: "Exprimer l'origine : Venir de (Coming from)",
                explanation: "<p>To say 'I come from XX country', use <strong>Je viens de + Country</strong>. The preposition 'de' contracts depending on the article of the country:</p><ul><li>Masculine country (de + le = <strong>du</strong>): <em>Je viens du Pérou.</em> (I come from Peru)</li><li>Feminine country (de + la = <strong>de la</strong>): <em>Je viens de la France.</em> (I come from France)</li><li>Vowel prefix (de + l' = <strong>d'</strong>): <em>Je viens d'Allemagne.</em> (I come from Germany)</li><li>Plural country (de + les = <strong>des</strong>): <em>Je viens des États-Unis.</em> (I come from the US)</li></ul>"
            },
            {
                title: "Standard Introduction Structure",
                explanation: "<p>You can combine all information into a standard introduction:</p><ul><li>Je m'appelle [Name].</li><li>Je suis [Marital Status].</li><li>[Children status].</li><li>Je suis [Profession].</li><li>Je suis [Nationality].</li><li>J'habite à [City].</li><li>Je parle [Languages].</li></ul>"
            }
        ],
        dialogues: [
            {
                context: "Geneviève's Introduction",
                lines: [
                    { speaker: "Geneviève", fr: "Je m’appelle Geneviève. Je suis célibataire. Je n’ai pas d’enfants. Je suis violoniste. Je suis belge. J’habite à Calgary. Je parle français et anglais.", en: "My name is Geneviève. I am single. I have no children. I am a violinist. I am Belgian. I live in Calgary. I speak French and English.", align: "left" }
                ]
            },
            {
                context: "Andres's Introduction",
                lines: [
                    { speaker: "Andres", fr: "Je suis Andres. Je suis conjoint de fait. Je n’ai pas d’enfants. Je suis étudiant. Je suis cubain. J’habite à Québec. Je parle espagnol et français.", en: "I am Andres. I am in a common-law relationship. I have no children. I am a student. I am Cuban. I live in Quebec City. I speak Spanish and French.", align: "left" }
                ]
            },
            {
                context: "Martin's Introduction",
                lines: [
                    { speaker: "Martin", fr: "Mon nom est Martin. Je suis divorcé. J’ai deux garçons. Je suis ingénieur. Je suis américain. J’habite à Rimouski. Je parle anglais, français et allemand.", en: "My name is Martin. I am divorced. I have two boys. I am an engineer. I am American. I live in Rimouski. I speak English, French, and German.", align: "left" }
                ]
            },
            {
                context: "Informal Meeting",
                lines: [
                    { speaker: "André", fr: "Salut ! Je m’appelle André.", en: "Hi! My name is André.", align: "left" },
                    { speaker: "Marc-Antoine", fr: "Salut ! Moi, c’est Marc-Antoine. Enchanté !", en: "Hi! I'm Marc-Antoine. Nice to meet you!", align: "right" },
                    { speaker: "André", fr: "Moi aussi !", en: "Me too!", align: "left" }
                ]
            },
            {
                context: "Formal Meeting",
                lines: [
                    { speaker: "Valérie", fr: "Bonjour ! Mon nom est Valérie.", en: "Hello! My name is Valérie.", align: "left" },
                    { speaker: "Sébastien", fr: "Bonjour, madame. Je suis Sébastien. Ravi de vous rencontrer.", en: "Hello, ma'am. I am Sébastien. Nice to meet you.", align: "right" },
                    { speaker: "Valérie", fr: "De même.", en: "Likewise.", align: "left" }
                ]
            }
        ],
        culture: "<p>In Quebec, 'Allô' is used in person as a very common greeting, unlike in France where it is strictly used on the telephone.</p>"
    },
    {
        id: "2",
        title: "Nombres, Âge et Dates",
        theme: "Numbers, Age, and Dates",
        vocabulary: [
            { fr: "Vingt-sept (27)", en: "Twenty-seven" },
            { fr: "Cinq (5)", en: "Five" },
            { fr: "Trente-et-un (31)", en: "Thirty-one" }
        ],
        grammar: [
            {
                title: "Special Rules for Numbers (70 to 99)",
                explanation: "<p>French forms these numbers using mathematics:</p><ul><li>70-79 is 60+10. Example: 70 = soixante-dix, 78 = soixante-dix-huit.</li><li>80-89 is 4x20. Example: 80 = quatre-vingts, 82 = quatre-vingt-deux.</li><li>90-99 is 80+10. Example: 92 = quatre-vingt-douze.</li><li>The word <em>million</em> is countable, so '3 million' is <strong>trois millions</strong>.</li></ul>"
            },
            {
                title: "Expressing Birthdays",
                explanation: "<p>The standard format for birthdays is DD-MM-YYYY in speech, or YYYY-MM-DD internationally on forms.</p><p>For the first day of the month, always use <strong>1er</strong> (premier).</p>",
                examples: [
                    { fr: "Ma date de naissance, c’est le 12 décembre 1993.", en: "My date of birth is December 12, 1993." },
                    { fr: "Je suis né le 30 octobre 1982.", en: "I was born on October 30, 1982." }
                ]
            }
        ],
        dialogues: [],
        culture: "<p>Quebec relies heavily on standard French numbers (soixante-dix, quatre-vingts), completely ignoring 'septante' or 'nonante' which are used in countries like Switzerland or Belgium.</p>"
    },
    {
        id: "3",
        title: "Temps, Politesse et Horaire",
        theme: "Time, Politeness, and Schedule",
        vocabulary: [
            { fr: "Nom", en: "Last Name" },
            { fr: "Prénom", en: "First Name" },
            { fr: "Nationalité", en: "Nationality" },
            { fr: "Date de naissance", en: "Date of Birth" },
            { fr: "Profession", en: "Profession" },
            { fr: "Téléphone", en: "Telephone" },
            { fr: "Courriel", en: "Email" }
        ],
        grammar: [
            {
                title: "Telling Time",
                explanation: "<p>Use <strong>moins</strong> (minus) to say 'minutes to' the hour, and <strong>et</strong> (and) for adding halves and quarters.</p>",
                examples: [
                    { fr: "onze heures moins quart", en: "Quarter to eleven (10:45)" },
                    { fr: "une heure et quart", en: "Quarter past one (1:15)" },
                    { fr: "cinq heures et demie", en: "Half past five (5:30)" }
                ]
            },
            {
                title: "Tu vs Vous (Informal vs Formal)",
                explanation: "<p>When asking for information, use the formal <strong>vous</strong> with strangers, elders, or professionals. Use the informal <strong>tu</strong> with friends.</p>",
                examples: [
                    { fr: "As-tu l'heure? (Informal)", en: "Do you have the time?" },
                    { fr: "Avez-vous l'heure? (Formal)", en: "Do you have the time?" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Schedules",
                lines: [
                    { speaker: "A", fr: "Le cours de français est de 18 h à 21 h.", en: "The French class is from 18:00 to 21:00.", align: "left" },
                    { speaker: "B", fr: "La natation est de 7 h à 8 h.", en: "Swimming is from 7:00 to 8:00.", align: "right" },
                    { speaker: "A", fr: "Le restaurant est ouvert du mardi au samedi.", en: "The restaurant is open from Tuesday to Saturday.", align: "left" }
                ]
            },
            {
                context: "Filling Out a Form",
                lines: [
                    { speaker: "Form", fr: "Nom: Leblanc, Prénom: Anne-Marie. Nationalité: française. Date de naissance: 1976-05-19. Profession: avocate. Téléphone: 514 347-3475. Courriel: leblanc_am@gmail.com", en: "Last Name: Leblanc, First Name: Anne-Marie. Nationality: French. DOB: 1976-05-19. Profession: Lawyer. Phone: 514 347-3475. Email: leblanc_am@gmail.com", align: "left" }
                ]
            }
        ],
        culture: "<p>Quebec relies heavily on forms and paperwork for immigration and services; understanding 'Nom' (Last name) vs 'Prénom' (First name) is critical immediately upon arrival.</p>"
    },
    {
        id: "4",
        title: "Objets, Position et Appartenance",
        theme: "Objects, Location, and Ownership",
        vocabulary: [
            { fr: "Sur", en: "On" },
            { fr: "Sous", en: "Under" },
            { fr: "Derrière", en: "Behind" },
            { fr: "Dans", en: "In" },
            { fr: "Les crayons", en: "The pencils" },
            { fr: "La table", en: "The table" },
            { fr: "La lampe", en: "The lamp" },
            { fr: "Le lit", en: "The bed" },
            { fr: "Les clés", en: "The keys" },
            { fr: "Le parapluie", en: "The umbrella" },
            { fr: "La porte", en: "The door" },
            { fr: "Les souliers", en: "The shoes" },
            { fr: "La bouteille d'eau", en: "The water bottle" }
        ],
        grammar: [
            {
                title: "Il y a (There is / There are)",
                explanation: "<p><strong>Il y a</strong> indicates existence in a location. The negative is <strong>Il n'y a pas</strong>.</p>",
                examples: [
                    { fr: "Sur la table, il y a une lampe.", en: "On the table, there is a lamp." },
                    { fr: "Sur le lit, il n’y a rien.", en: "On the bed, there is nothing." }
                ]
            },
            {
                title: "Expressing Possession with 'de'",
                explanation: "<p>To indicate ownership, link the object to the owner with the preposition <strong>de</strong>.</p>",
                examples: [
                    { fr: "Voici la table de Jean-Martin.", en: "Here is Jean-Martin's table." },
                    { fr: "Voici le crayon de Geneviève.", en: "Here is Geneviève's pencil." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Locating Objects",
                lines: [
                    { speaker: "A", fr: "Les clés sont sur la table.", en: "The keys are on the table.", align: "left" },
                    { speaker: "B", fr: "Le parapluie est derrière la porte.", en: "The umbrella is behind the door.", align: "right" }
                ]
            },
            {
                context: "Identifying Ownership",
                lines: [
                    { speaker: "A", fr: "Voici les souliers de Philippe.", en: "Here are Philippe's shoes.", align: "left" },
                    { speaker: "B", fr: "Voici la bouteille d’eau de Philippe.", en: "Here is Philippe's water bottle.", align: "right" }
                ]
            }
        ],
        culture: "<p>Identifying the owner of winter gear (like shoes 'souliers' and boots) by saying 'ce sont les bottes de...' becomes a daily habit in Canadian winters at work or school entryways.</p>"
    },
    {
        id: "5",
        title: "Famille et Adjectifs Possessifs",
        theme: "Family and Possessive Adjectives",
        vocabulary: [
            { fr: "Les enfants", en: "The children" },
            { fr: "La famille", en: "The family" },
            { fr: "Le père", en: "The father" },
            { fr: "L'auto", en: "The car (Quebec)" },
            { fr: "Le parc de stationnement", en: "The parking lot" },
            { fr: "Le sac à main", en: "The handbag" }
        ],
        grammar: [
            {
                title: "Adjectifs Possessifs (Possessive Adjectives)",
                explanation: "<p>Possessive adjectives (My, Your, His, Her...) must <strong>agree with the noun being possessed</strong>, not the person who owns it.</p><ul><li>First Person: mon (masc/vowel), ma (fem), mes (plural)</li><li>Second Person: ton, ta, tes</li><li>Third Person: son, sa, ses</li></ul>",
                examples: [
                    { fr: "Mes enfants ont 7 ans et 3 ans.", en: "My children are 7 and 3 years old." },
                    { fr: "Ton auto est dans le parc de stationnement.", en: "Your car is in the parking lot." },
                    { fr: "Son père habite à Rimouski.", en: "His/Her father lives in Rimouski." },
                    { fr: "Ses crayons sont dans son sac à main.", en: "Her/His pencils are in her/his handbag." }
                ]
            },
            {
                title: "Formal Possessive (Votre)",
                explanation: "<p>When being polite to strangers or elders (using <em>vous</em>), you MUST use <strong>votre</strong> (singular) or <strong>vos</strong> (plural).</p>",
                examples: [
                    { fr: "Votre famille habite au Canada.", en: "Your family lives in Canada." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Formal Introductions",
                lines: [
                    { speaker: "Person A", fr: "Bonjour, monsieur Légaré.", en: "Hello, Mr. Légaré.", align: "left" },
                    { speaker: "Person B", fr: "Bonjour. Je m’appelle Anne-Sophie.", en: "Hello. My name is Anne-Sophie.", align: "right" },
                    { speaker: "Person A", fr: "Je suis heureux de vous rencontrer.", en: "I am happy to meet you.", align: "left" },
                    { speaker: "Person B", fr: "Moi aussi !", en: "Me too!", align: "right" }
                ]
            }
        ],
        culture: "<p>Showing respect via formal addressing (Vous / Votre) is a pillar of working life in Quebec. Failure to use 'votre' properly with a boss or an elder can be perceived as disrespectful.</p>"
    }
];
