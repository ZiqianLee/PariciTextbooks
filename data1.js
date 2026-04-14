const episodes1 = [
    {
        id: "1",
        title: "Identité et Informations Personnelles",
        theme: "Identity and Personal Info",
        vocabulary: [
            // Greetings
            { fr: "Allô !", en: "Hello! (informal, also used on the phone)", note: "Very Quebec — in France, 'Allô' is only for the phone." },
            { fr: "Salut !", en: "Hi! (informal, between friends)" },
            { fr: "Bonjour !", en: "Hello! (universal — formal and informal)" },
            { fr: "Bye !", en: "Bye! (informal)" },
            { fr: "À bientôt !", en: "See you soon!" },
            { fr: "Au revoir !", en: "Goodbye! (universal)" },
            { fr: "Bonne journée", en: "Have a good day" },
            { fr: "Bonne soirée", en: "Have a good evening" },
            { fr: "À demain", en: "See you tomorrow" },
            // Marital status
            { fr: "Je suis célibataire.", en: "I am single." },
            { fr: "Je suis marié(e).", en: "I am married. (-e added for feminine)" },
            { fr: "Je suis divorcé(e).", en: "I am divorced. (-e added for feminine)" },
            { fr: "Je suis séparé(e).", en: "I am separated." },
            { fr: "Je suis conjoint(e) de fait.", en: "I am in a common-law relationship.", note: "The standard family model in Quebec — more common than marriage." },
            { fr: "J'ai un garçon.", en: "I have a son." },
            { fr: "J'ai une fille.", en: "I have a daughter." },
            { fr: "J'ai deux garçons et deux filles.", en: "I have two sons and two daughters." },
            { fr: "Je n'ai pas d'enfants.", en: "I have no children." },
            // Professions — masculine and feminine forms
            { fr: "vendeur / vendeuse", en: "salesperson (m/f)" },
            { fr: "musicien / musicienne", en: "musician (m/f)" },
            { fr: "psychologue", en: "psychologist (same for m/f)" },
            { fr: "technicien / technicienne", en: "technician (m/f)" },
            { fr: "professeur / professeure", en: "teacher / professor (m/f)" },
            { fr: "ingénieur / ingénieure", en: "engineer (m/f)" },
            { fr: "serveur / serveuse", en: "waiter / waitress (m/f)" },
            { fr: "comptable", en: "accountant (same for m/f)" },
            { fr: "infirmier / infirmière", en: "nurse (m/f)" },
            { fr: "directeur / directrice", en: "director / manager (m/f)" },
            { fr: "étudiant / étudiante", en: "student (m/f)" },
            { fr: "programmeur / programmeuse", en: "programmer (m/f)" },
            { fr: "cuisinier / cuisinière", en: "cook / chef (m/f)" },
            { fr: "caissier / caissière", en: "cashier (m/f)" },
            { fr: "avocat / avocate", en: "lawyer (m/f)" },
            { fr: "violoniste", en: "violinist (same for m/f)" },
            { fr: "médecin / femme médecin", en: "doctor (m/f)" },
            { fr: "coiffeur / coiffeuse", en: "hairdresser (m/f)" },
            { fr: "journaliste", en: "journalist (same for m/f)" },
            { fr: "architecte", en: "architect (same for m/f)" },
            // Countries
            { fr: "le Mexique", en: "Mexico", note: "Nationality: mexicain / mexicaine" },
            { fr: "les États-Unis", en: "United States", note: "Nationality: américain / américaine" },
            { fr: "la Russie", en: "Russia", note: "Nationality: russe" },
            { fr: "la Tunisie", en: "Tunisia", note: "Nationality: tunisien / tunisienne" },
            { fr: "le Brésil", en: "Brazil", note: "Nationality: brésilien / brésilienne" },
            { fr: "la Syrie", en: "Syria", note: "Nationality: syrien / syrienne" },
            { fr: "la France", en: "France", note: "Nationality: français / française" },
            { fr: "la Chine", en: "China", note: "Nationality: chinois / chinoise" },
            { fr: "le Cameroun", en: "Cameroon", note: "Nationality: camerounais / camerounaise" },
            { fr: "l'Égypte", en: "Egypt", note: "Nationality: égyptien / égyptienne" },
            { fr: "le Maroc", en: "Morocco", note: "Nationality: marocain / marocaine" },
            { fr: "l'Australie", en: "Australia", note: "Nationality: australien / australienne" },
            { fr: "le Japon", en: "Japan", note: "Nationality: japonais / japonaise" },
            { fr: "le Sénégal", en: "Senegal", note: "Nationality: sénégalais / sénégalaise" },
            { fr: "la Belgique", en: "Belgium", note: "Nationality: belge (same for m/f)" },
            { fr: "le Portugal", en: "Portugal", note: "Nationality: portugais / portugaise" },
            { fr: "les Philippines", en: "Philippines", note: "Nationality: philippin / philippine" },
            { fr: "l'Italie", en: "Italy", note: "Nationality: italien / italienne" },
            { fr: "le Pérou", en: "Peru", note: "Nationality: péruvien / péruvienne" },
            { fr: "l'Inde", en: "India", note: "Nationality: indien / indienne" },
            { fr: "l'Ukraine", en: "Ukraine", note: "Nationality: ukrainien / ukrainienne" },
            { fr: "l'Allemagne", en: "Germany", note: "Nationality: allemand / allemande" },
            { fr: "Singapour", en: "Singapore", note: "Nationality: singapourien / singapourienne" },
            { fr: "la Corée", en: "Korea", note: "Nationality: coréen / coréenne" },
            { fr: "l'Algérie", en: "Algeria", note: "Nationality: algérien / algérienne" },
            { fr: "la Turquie", en: "Turkey", note: "Nationality: turc / turque" },
            { fr: "Cuba", en: "Cuba", note: "Nationality: cubain / cubaine" },
            { fr: "le Canada", en: "Canada", note: "Nationality: canadien / canadienne" },
            // Cities in Quebec
            { fr: "J'habite à Montréal.", en: "I live in Montreal." },
            { fr: "J'habite à Québec.", en: "I live in Quebec City." },
            { fr: "J'habite à Laval.", en: "I live in Laval." },
            { fr: "J'habite à Chicoutimi.", en: "I live in Chicoutimi." },
            { fr: "J'habite à Rimouski.", en: "I live in Rimouski." },
            // French alphabet special characters
            { fr: "accent aigu: é", en: "acute accent — pronounced /e/ (café)" },
            { fr: "accent grave: è", en: "grave accent — pronounced /ɛ/ (père)" },
            { fr: "tréma: ï", en: "diaeresis — two vowels pronounced separately (naïf)" },
            { fr: "cédille: ç", en: "cedilla — makes 'c' sound like /s/ before a/o/u (français)" }
        ],
        grammar: [
            {
                title: "Venir de (To come from) — Expressing Origin",
                explanation: "<p>To say where you come from, use <strong>Je viens de</strong> + country. The preposition <em>de</em> contracts with the definite article depending on the gender and number of the country:</p><ul><li>Masculine country (le): <em>de + le = <strong>du</strong></em> → Je viens <strong>du</strong> Pérou.</li><li>Feminine country (la): <em>de + la = <strong>de la</strong></em> → Je viens <strong>de la</strong> France.</li><li>Vowel-starting country (l'): <em>de + l' = <strong>d'</strong></em> → Je viens <strong>d'</strong>Allemagne.</li><li>Plural country (les): <em>de + les = <strong>des</strong></em> → Je viens <strong>des</strong> États-Unis.</li></ul><p>Most countries ending in <em>-e</em> are feminine. All others are generally masculine.</p>",
                examples: [
                    { fr: "Je viens du Pérou.", en: "I come from Peru." },
                    { fr: "Je viens de la France.", en: "I come from France." },
                    { fr: "Je viens d'Allemagne.", en: "I come from Germany." },
                    { fr: "Je viens des États-Unis.", en: "I come from the United States." },
                    { fr: "Je viens du Maroc.", en: "I come from Morocco." },
                    { fr: "Elle vient de la Chine.", en: "She comes from China." }
                ]
            },
            {
                title: "Professions — Gender Agreement",
                explanation: "<p>In French, profession nouns change based on the speaker's gender. The most common patterns are:</p><ul><li>Add <strong>-e</strong> for feminine: avocat → avocat<strong>e</strong>, étudiant → étudiant<strong>e</strong></li><li><strong>-eur → -euse</strong>: vendeur → vend<strong>euse</strong>, programmeur → programm<strong>euse</strong></li><li><strong>-ien → -ienne</strong>: musicien → musici<strong>enne</strong>, technicien → technici<strong>enne</strong></li><li><strong>-teur → -trice</strong>: directeur → direc<strong>trice</strong></li><li><strong>Same form</strong> for both genders: psychologue, comptable, journaliste, architecte, violoniste</li></ul>",
                examples: [
                    { fr: "Je suis ingénieur. / Je suis ingénieure.", en: "I am an engineer. (male / female)" },
                    { fr: "Il est serveur. / Elle est serveuse.", en: "He is a waiter. / She is a waitress." },
                    { fr: "Je suis étudiant. / Je suis étudiante.", en: "I am a student. (male / female)" }
                ]
            },
            {
                title: "Standard Self-Introduction Structure",
                explanation: "<p>A complete self-introduction integrates all personal information:<br><em>Je m'appelle [Name]. Je suis [Marital Status]. [Children]. Je suis [Profession]. Je suis [Nationality]. J'habite à [City]. Je parle [Languages].</em></p>",
                examples: [
                    { fr: "Je m'appelle Geneviève. Je suis célibataire. Je n'ai pas d'enfants. Je suis violoniste. Je suis belge. J'habite à Calgary. Je parle français et anglais.", en: "My name is Geneviève. I am single. I have no children. I am a violinist. I am Belgian. I live in Calgary. I speak French and English." },
                    { fr: "Mon nom est Martin. Je suis divorcé. J'ai deux garçons. Je suis ingénieur. Je suis américain. J'habite à Rimouski. Je parle anglais, français et allemand.", en: "My name is Martin. I am divorced. I have two sons. I am an engineer. I am American. I live in Rimouski. I speak English, French and German." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Meeting Someone — Informal (Tu)",
                lines: [
                    { speaker: "André", fr: "Salut ! Je m'appelle André.", en: "Hi! My name is André.", align: "left" },
                    { speaker: "Marc-Antoine", fr: "Salut ! Moi, c'est Marc-Antoine. Enchanté !", en: "Hi! I am Marc-Antoine. Nice to meet you!", align: "right" },
                    { speaker: "André", fr: "Moi aussi !", en: "Me too!", align: "left" }
                ]
            },
            {
                context: "Meeting Someone — Formal (Vous)",
                lines: [
                    { speaker: "Valérie", fr: "Bonjour ! Mon nom est Valérie.", en: "Hello! My name is Valérie.", align: "left" },
                    { speaker: "Sébastien", fr: "Bonjour, madame. Je suis Sébastien. Ravi de vous rencontrer.", en: "Hello, ma'am. I am Sébastien. Delighted to meet you.", align: "right" },
                    { speaker: "Valérie", fr: "De même.", en: "Likewise.", align: "left" }
                ]
            },
            {
                context: "Geneviève's Full Introduction",
                lines: [
                    { speaker: "Geneviève", fr: "Je m'appelle Geneviève. Je suis célibataire. Je n'ai pas d'enfants. Je suis violoniste. Je suis belge. J'habite à Calgary. Je parle français et anglais.", en: "My name is Geneviève. I am single. I have no children. I am a violinist. I am Belgian. I live in Calgary. I speak French and English.", align: "left" }
                ]
            }
        ],
        culture: "<p><strong>Common-Law Unions:</strong> In Quebec, legal marriage is much rarer than in the rest of North America. Being <em>conjoints de fait</em> (common-law partners) is the standard family model and is fully culturally and legally recognized. Also note: in Quebec, people say <strong>Allô</strong> to greet each other on the street — something that only France uses for phone calls!</p>"
    },
    {
        id: "2",
        title: "Nombres, Âge et Dates",
        theme: "Numbers, Age and Dates",
        vocabulary: [
            { fr: "zéro", en: "0 — zero" },
            { fr: "un / une", en: "1 — one" },
            { fr: "deux", en: "2 — two" },
            { fr: "trois", en: "3 — three" },
            { fr: "quatre", en: "4 — four" },
            { fr: "cinq", en: "5 — five" },
            { fr: "six", en: "6 — six" },
            { fr: "sept", en: "7 — seven" },
            { fr: "huit", en: "8 — eight" },
            { fr: "neuf", en: "9 — nine" },
            { fr: "dix", en: "10 — ten" },
            { fr: "onze", en: "11 — eleven" },
            { fr: "douze", en: "12 — twelve" },
            { fr: "treize", en: "13 — thirteen" },
            { fr: "quatorze", en: "14 — fourteen" },
            { fr: "quinze", en: "15 — fifteen" },
            { fr: "seize", en: "16 — sixteen" },
            { fr: "dix-sept", en: "17 — seventeen" },
            { fr: "dix-huit", en: "18 — eighteen" },
            { fr: "dix-neuf", en: "19 — nineteen" },
            { fr: "vingt", en: "20 — twenty" },
            { fr: "vingt et un", en: "21 — twenty-one" },
            { fr: "trente", en: "30 — thirty" },
            { fr: "quarante", en: "40 — forty" },
            { fr: "cinquante", en: "50 — fifty" },
            { fr: "soixante", en: "60 — sixty" },
            { fr: "soixante-dix", en: "70 — seventy (literally: sixty-ten)" },
            { fr: "soixante-dix-huit", en: "78 — seventy-eight" },
            { fr: "quatre-vingts", en: "80 — eighty (literally: four-twenties)" },
            { fr: "quatre-vingt-deux", en: "82 — eighty-two" },
            { fr: "quatre-vingt-douze", en: "92 — ninety-two" },
            { fr: "cent", en: "100 — one hundred" },
            { fr: "cinq-cent-quatre-vingt-huit", en: "588 — five hundred eighty-eight" },
            { fr: "trois-mille-cinq-cents", en: "3,500 — three thousand five hundred" },
            { fr: "deux-cent-mille", en: "200,000 — two hundred thousand" },
            { fr: "trois millions", en: "3,000,000 — three million" },
            // Months
            { fr: "janvier", en: "January" },
            { fr: "février", en: "February" },
            { fr: "mars", en: "March" },
            { fr: "avril", en: "April" },
            { fr: "mai", en: "May" },
            { fr: "juin", en: "June" },
            { fr: "juillet", en: "July" },
            { fr: "août", en: "August" },
            { fr: "septembre", en: "September" },
            { fr: "octobre", en: "October" },
            { fr: "novembre", en: "November" },
            { fr: "décembre", en: "December" },
            // Understanding expressions
            { fr: "Pardon ?", en: "Excuse me? / What? (Formal)" },
            { fr: "Quoi ?", en: "What? (Informal)" },
            { fr: "Je ne comprends pas.", en: "I don't understand." },
            { fr: "Pouvez-vous répéter ?", en: "Can you repeat? (Formal)" },
            { fr: "Peux-tu répéter ?", en: "Can you repeat? (Informal)" },
            { fr: "Plus lentement, s'il vous plaît.", en: "Slower, please." },
            { fr: "J'ai compris.", en: "I understood." },
            { fr: "Je n'ai pas compris.", en: "I did not understand." }
        ],
        grammar: [
            {
                title: "French Number System — Special Rules",
                explanation: "<p>French numbers require some unique arithmetic that surprises English speakers:</p><ul><li><strong>70–79</strong> = 60 + 10 to 19: soixante-dix (70), soixante-et-onze (71), soixante-dix-huit (78)</li><li><strong>80–89</strong> = 4 × 20: quatre-vingts (80), quatre-vingt-un (81), quatre-vingt-huit (88)</li><li><strong>90–99</strong> = 80 + 10 to 19: quatre-vingt-dix (90), quatre-vingt-douze (92)</li><li><strong>Note:</strong> 'million' is a countable noun, so 3 million = <em>trois millions</em> (with an 's').</li></ul><p><strong>Tip:</strong> Switzerland and Belgium use simpler versions: <em>septante</em> (70), <em>huitante</em> (80), <em>nonante</em> (90) — but Quebec uses the standard French system.</p>",
                examples: [
                    { fr: "27 : vingt-sept", en: "twenty-seven" },
                    { fr: "31 : trente et un", en: "thirty-one" },
                    { fr: "78 : soixante-dix-huit", en: "seventy-eight" },
                    { fr: "80 : quatre-vingts", en: "eighty" },
                    { fr: "92 : quatre-vingt-douze", en: "ninety-two" }
                ]
            },
            {
                title: "Expressing Age with Avoir",
                explanation: "<p>In French, age is expressed using the verb <strong>avoir</strong> (to have), NOT être (to be). You literally say 'I have X years':</p><ul><li>J'ai 20 ans. (I am 20 years old.)</li><li>Tu as quel âge ? (How old are you? — informal)</li><li>Quel âge avez-vous ? (How old are you? — formal)</li></ul>",
                examples: [
                    { fr: "J'ai 36 ans.", en: "I am 36 years old." },
                    { fr: "Tu as quel âge ?", en: "How old are you? (informal)" },
                    { fr: "Mon fils a 7 ans.", en: "My son is 7 years old." }
                ]
            },
            {
                title: "Expressing Dates and Birthdays",
                explanation: "<p>The standard format is <strong>Day Month Year</strong>. The international YYYY-MM-DD format is common in written Quebec French.</p><ul><li>For 'the 1st', use <strong>1er</strong> (premier). For all other days, use the regular cardinal number.</li><li>Months are never capitalized in French.</li></ul>",
                examples: [
                    { fr: "Ma date de naissance, c'est le 12 décembre 1993.", en: "My date of birth is December 12, 1993." },
                    { fr: "Je suis né le 30 octobre 1982.", en: "I was born on October 30, 1982." },
                    { fr: "Mon anniversaire, c'est le 1er janvier.", en: "My birthday is January 1st." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Asking Someone's Age Informally",
                lines: [
                    { speaker: "A", fr: "Tu as quel âge ?", en: "How old are you?", align: "left" },
                    { speaker: "B", fr: "J'ai 28 ans. Et toi ?", en: "I am 28. And you?", align: "right" },
                    { speaker: "A", fr: "Moi, j'ai 32 ans.", en: "Me, I am 32.", align: "left" }
                ]
            },
            {
                context: "Asking for a Repetition / Clarification",
                lines: [
                    { speaker: "A", fr: "Mon numéro de téléphone, c'est le 514-392-4785.", en: "My phone number is 514-392-4785.", align: "left" },
                    { speaker: "B", fr: "Pardon ? Pouvez-vous répéter, plus lentement ?", en: "Excuse me? Can you repeat, more slowly?", align: "right" },
                    { speaker: "A", fr: "Oui, bien sûr ! 5 - 1 - 4 - 3 - 9 - 2 - 4 - 7 - 8 - 5.", en: "Yes, of course! 5 - 1 - 4 - 3 - 9 - 2 - 4 - 7 - 8 - 5.", align: "left" },
                    { speaker: "B", fr: "Merci, j'ai bien compris.", en: "Thank you, I understood well.", align: "right" }
                ]
            }
        ],
        culture: "<p>Phone numbers in Quebec are given in groups of 3 and 4 digits, e.g. 514 347-3475. The 514 and 438 area codes are for Montreal. 418 and 581 are for Quebec City.</p>"
    },
    {
        id: "3",
        title: "Heure, Politesse et Horaire",
        theme: "Time, Politeness and Schedule",
        vocabulary: [
            // Time expressions
            { fr: "Il est midi.", en: "It is noon (12 PM)." },
            { fr: "Il est minuit.", en: "It is midnight (12 AM)." },
            { fr: "Il est onze heures moins quart.", en: "It is 10:45 (quarter to 11)." },
            { fr: "Il est sept heures moins dix.", en: "It is 6:50 (ten to 7)." },
            { fr: "Il est dix heures trente.", en: "It is 10:30." },
            { fr: "Il est six heures et cinq.", en: "It is 6:05." },
            { fr: "Il est quatre heures.", en: "It is 4:00." },
            { fr: "Il est huit heures moins vingt-cinq.", en: "It is 7:35 (twenty-five to 8)." },
            { fr: "Il est neuf heures vingt.", en: "It is 9:20." },
            { fr: "Il est une heure et quart.", en: "It is 1:15 (quarter past 1)." },
            { fr: "Il est deux heures quarante.", en: "It is 2:40." },
            { fr: "Il est une heure moins cinq.", en: "It is 12:55 (five to 1)." },
            { fr: "Il est cinq heures et demie.", en: "It is 5:30 (half past 5)." },
            // Asking the time
            { fr: "Pardon, madame, avez-vous l'heure ?", en: "Excuse me ma'am, do you have the time? (Formal)" },
            { fr: "Excusez-moi, il est quelle heure ?", en: "Excuse me, what time is it? (Standard)" },
            { fr: "Pardon, quelle heure est-il ?", en: "Pardon, what time is it? (Standard)" },
            { fr: "As-tu l'heure ?", en: "Do you have the time? (Informal)" },
            { fr: "Je ne sais pas, désolé.", en: "I don't know, sorry." },
            { fr: "Je n'ai pas l'heure.", en: "I don't have the time / I don't have a watch." },
            // Thanking and responding
            { fr: "Merci !", en: "Thank you!" },
            { fr: "Merci infiniment.", en: "Thank you very much (infinitely)." },
            { fr: "Je vous remercie beaucoup !", en: "I thank you very much!" },
            { fr: "De rien !", en: "You're welcome!" },
            { fr: "Bienvenue !", en: "You're welcome! (Very common Quebec usage)", note: "In Quebec, 'Bienvenue' is used as 'You're welcome', not just 'Welcome here'." },
            { fr: "Pas de problème !", en: "No problem!" },
            { fr: "Ça me fait plaisir !", en: "It's my pleasure!" },
            { fr: "Il n'y a pas de quoi.", en: "Don't mention it." },
            // Days
            { fr: "lundi", en: "Monday" },
            { fr: "mardi", en: "Tuesday" },
            { fr: "mercredi", en: "Wednesday" },
            { fr: "jeudi", en: "Thursday" },
            { fr: "vendredi", en: "Friday" },
            { fr: "samedi", en: "Saturday" },
            { fr: "dimanche", en: "Sunday" },
            // Common abbreviations
            { fr: "tél. (téléphone)", en: "phone" },
            { fr: "app. (appartement)", en: "apartment" },
            { fr: "boul. (boulevard)", en: "boulevard" },
            { fr: "av. (avenue)", en: "avenue" },
            { fr: "no (numéro)", en: "number" },
            { fr: "NAS (numéro d'assurance sociale)", en: "SIN — Social Insurance Number" }
        ],
        grammar: [
            {
                title: "Telling the Time in French",
                explanation: "<p>Use <strong>Il est + hour + minutes</strong> to tell the time.</p><p><strong>Minutes past the hour</strong> — add directly or use <em>et</em>:</p><ul><li>et quart = quarter past (15 min)</li><li>et demie = half past (30 min)</li><li>Il est deux heures vingt. = It is 2:20.</li></ul><p><strong>Minutes before the next hour</strong> — use <em>moins</em> (minus):</p><ul><li>moins le quart = quarter to (−15 min)</li><li>Il est trois heures moins dix. = It is 2:50.</li></ul><p><strong>Special cases:</strong> midi (noon), minuit (midnight).</p><p>Quebec also commonly uses 24-hour clock (18h = 6 PM) in schedules and signs.</p>",
                examples: [
                    { fr: "Il est cinq heures et demie.", en: "It is 5:30 (half past 5)." },
                    { fr: "Il est onze heures moins quart.", en: "It is 10:45 (quarter to 11)." },
                    { fr: "Le cours de français est de 18h à 21h.", en: "The French class is from 6 PM to 9 PM." },
                    { fr: "La natation est de 7h à 8h.", en: "Swimming is from 7 AM to 8 AM." },
                    { fr: "Le restaurant est ouvert du mardi au samedi.", en: "The restaurant is open from Tuesday to Saturday." }
                ]
            },
            {
                title: "Formal vs Informal (Vous vs Tu) — A Critical Quebec Rule",
                explanation: "<p>This distinction is essential in Quebec. When talking to strangers, elders, teachers, or in professional settings, use <strong>vous</strong>. With friends, family, and children, use <strong>tu</strong>.</p><ul><li><strong>Informal:</strong> As-tu l'heure? / Tu t'appelles comment?</li><li><strong>Formal:</strong> Avez-vous l'heure? / Comment vous appelez-vous?</li></ul><p><strong>Quebec nuance:</strong> Quebeckers switch to <em>tu</em> much faster than the French — in many casual work environments, tu is standard even with your boss after just a few weeks.</p>",
                examples: [
                    { fr: "As-tu l'heure ? (informal)", en: "Do you have the time?" },
                    { fr: "Avez-vous l'heure ? (formal)", en: "Do you have the time?" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Asking Someone for the Time",
                lines: [
                    { speaker: "A", fr: "Excusez-moi, il est quelle heure ?", en: "Excuse me, what time is it?", align: "left" },
                    { speaker: "B", fr: "Il est deux heures et demie.", en: "It is 2:30.", align: "right" },
                    { speaker: "A", fr: "Merci beaucoup !", en: "Thank you very much!", align: "left" },
                    { speaker: "B", fr: "Bienvenue !", en: "You're welcome!", align: "right" }
                ]
            },
            {
                context: "Filling out a Personal Information Form",
                lines: [
                    { speaker: "Form", fr: "Nom: Leblanc, Prénom: Anne-Marie", en: "Last name: Leblanc, First name: Anne-Marie", align: "left" },
                    { speaker: "Form", fr: "Nationalité: française, Date de naissance: 1976-05-19", en: "Nationality: French, DOB: 1976-05-19", align: "left" },
                    { speaker: "Form", fr: "Profession: avocate", en: "Profession: Lawyer (f)", align: "left" },
                    { speaker: "Form", fr: "Tél: 514 347-3475, Courriel: leblanc_am@gmail.com", en: "Phone: 514 347-3475, Email: leblanc_am@gmail.com", align: "left" }
                ]
            }
        ],
        culture: "<p><strong>Bienvenue!</strong> This word is used constantly in Quebec to mean 'You're welcome' — quite different from France where it only means 'Welcome to this place'. When a cashier thanks you and you say 'Bienvenue!' back, that's perfectly natural Quebec French.</p>"
    },
    {
        id: "4",
        title: "Objets, Lieux et Appartenance",
        theme: "Objects, Places and Belonging",
        vocabulary: [
            // Colors
            { fr: "noir / noire", en: "black" },
            { fr: "vert / verte", en: "green" },
            { fr: "orange", en: "orange (invariable)" },
            { fr: "bleu / bleue", en: "blue" },
            { fr: "brun / brune", en: "brown" },
            { fr: "rouge", en: "red" },
            { fr: "gris / grise", en: "gray" },
            { fr: "jaune", en: "yellow" },
            { fr: "blanc / blanche", en: "white" },
            { fr: "rose", en: "pink (invariable)" },
            { fr: "violet / violette", en: "purple" },
            // Classroom instructions
            { fr: "Prenez votre cahier à la page 22.", en: "Take your notebook to page 22." },
            { fr: "Assoyez-vous.", en: "Sit down. (Quebec form — standard: Asseyez-vous)" },
            { fr: "Fermez la fenêtre.", en: "Close the window." },
            { fr: "Éteignez votre téléphone cellulaire.", en: "Turn off your cell phone." },
            { fr: "Ouvrez la porte.", en: "Open the door." },
            { fr: "Écoutez le dialogue.", en: "Listen to the dialogue." },
            { fr: "Lisez le texte.", en: "Read the text." },
            { fr: "Écrivez votre nom.", en: "Write your name." },
            // Daily objects
            { fr: "un crayon", en: "a pencil" },
            { fr: "un stylo", en: "a pen" },
            { fr: "un ordinateur", en: "a computer" },
            { fr: "un livre", en: "a book" },
            { fr: "un cahier", en: "a notebook" },
            { fr: "une boite à lunch", en: "a lunch box" },
            { fr: "un manteau", en: "a coat" },
            { fr: "une armoire", en: "a wardrobe / closet" },
            { fr: "un sac", en: "a bag" },
            { fr: "un lit", en: "a bed" },
            { fr: "une table", en: "a table" },
            { fr: "une chaise", en: "a chair" },
            { fr: "une étagère", en: "a shelf" },
            { fr: "une poubelle", en: "a trash can" },
            { fr: "un bac à recyclage", en: "a recycling bin" },
            { fr: "des clés", en: "keys" },
            { fr: "un parapluie", en: "an umbrella" },
            { fr: "des lunettes", en: "glasses / spectacles" },
            { fr: "un cellulaire", en: "a cell phone (Quebec term)", note: "In France it's 'portable'. In Quebec: 'cellulaire'." },
            // Prepositions of place
            { fr: "sur", en: "on top of" },
            { fr: "dans", en: "inside / in" },
            { fr: "sous", en: "under / below" },
            { fr: "derrière", en: "behind" },
            { fr: "devant", en: "in front of" },
            { fr: "entre", en: "between" },
            { fr: "à côté de", en: "next to" },
            { fr: "en face de", en: "across from / facing" }
        ],
        grammar: [
            {
                title: "Il y a (There is / There are)",
                explanation: "<p><strong>Il y a</strong> is a fixed, impersonal expression meaning 'there is' or 'there are'. Its negative form is <strong>Il n'y a pas de</strong>.</p><ul><li>Il y a + singular noun: Il y a une lampe. (There is a lamp.)</li><li>Il y a + plural noun: Il y a des livres. (There are some books.)</li><li>Negative: Il n'y a pas de + noun: Il n'y a pas de table. (There is no table.)</li></ul>",
                examples: [
                    { fr: "Sur la table, il y a une lampe.", en: "On the table, there is a lamp." },
                    { fr: "Sur le lit, il n'y a rien.", en: "On the bed, there is nothing." },
                    { fr: "Dans le sac, il y a des clés et un crayon.", en: "In the bag, there are keys and a pencil." },
                    { fr: "Il n'y a pas de chaise dans la cuisine.", en: "There is no chair in the kitchen." }
                ]
            },
            {
                title: "Articles — Un, Une, Des, Le, La, Les",
                explanation: "<p>French articles must agree with the gender and number of the noun:</p><p><strong>Indefinite articles</strong> (a / some):</p><ul><li><strong>un</strong> + masculine singular: un crayon, un livre</li><li><strong>une</strong> + feminine singular: une table, une chaise</li><li><strong>des</strong> + plural (any gender): des livres, des tables</li></ul><p><strong>Definite articles</strong> (the):</p><ul><li><strong>le</strong> + masculine singular: le crayon, le lit</li><li><strong>la</strong> + feminine singular: la table, la chaise</li><li><strong>l'</strong> + vowel start: l'armoire, l'ordinateur</li><li><strong>les</strong> + plural: les livres, les clés</li></ul>",
                examples: [
                    { fr: "Voici un livre. → Voici le livre.", en: "Here is a book. → Here is the book." },
                    { fr: "Voici une chaise. → Voici la chaise.", en: "Here is a chair. → Here is the chair." }
                ]
            },
            {
                title: "Expressing Possession with 'de'",
                explanation: "<p>To say something belongs to someone, use <strong>de</strong> (of). Note: there is no apostrophe-s ('s) in French!</p><p>Also note the contractions: <em>de + le = <strong>du</strong></em> and <em>de + les = <strong>des</strong></em>.</p>",
                examples: [
                    { fr: "Voici la table de Jean-Martin.", en: "Here is Jean-Martin's table." },
                    { fr: "Voici le crayon de Geneviève.", en: "Here is Geneviève's pencil." },
                    { fr: "Voici les souliers de Philippe.", en: "Here are Philippe's shoes." },
                    { fr: "Voici la bouteille d'eau de Philippe.", en: "Here is Philippe's water bottle." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Describing Object Locations",
                lines: [
                    { speaker: "A", fr: "Dans le dessin A, les crayons sont sur la table.", en: "In drawing A, the pencils are on the table.", align: "left" },
                    { speaker: "B", fr: "Dans le dessin B, les crayons sont sous la table.", en: "In drawing B, the pencils are under the table.", align: "right" },
                    { speaker: "A", fr: "Les clés sont sur la table.", en: "The keys are on the table.", align: "left" },
                    { speaker: "B", fr: "Le parapluie est derrière la porte.", en: "The umbrella is behind the door.", align: "right" }
                ]
            },
            {
                context: "Classroom Instructions",
                lines: [
                    { speaker: "Prof", fr: "Bonjour tout le monde ! Assoyez-vous.", en: "Hello everyone! Sit down.", align: "left" },
                    { speaker: "Prof", fr: "Éteignez votre téléphone cellulaire, s'il vous plaît.", en: "Please turn off your cell phone.", align: "left" },
                    { speaker: "Prof", fr: "Prenez votre cahier à la page 22.", en: "Take your notebook to page 22.", align: "left" },
                    { speaker: "Élève", fr: "Excusez-moi, c'est quelle page ?", en: "Excuse me, which page is it?", align: "right" },
                    { speaker: "Prof", fr: "La page vingt-deux, s'il vous plaît.", en: "Page twenty-two, please.", align: "left" }
                ]
            }
        ],
        culture: "<p>The word <strong>'cellulaire'</strong> is the standard term for a cell phone in Quebec, whereas 'portable' means a laptop. In France, 'portable' refers to a cell phone — this is one of the most commonly confusing differences between French and Quebec French.</p>"
    },
    {
        id: "5",
        title: "Famille et Adjectifs Possessifs",
        theme: "Family and Possessive Adjectives",
        vocabulary: [
            { fr: "le grand-père", en: "the grandfather" },
            { fr: "la grand-mère", en: "the grandmother" },
            { fr: "les grands-parents", en: "the grandparents" },
            { fr: "le père", en: "the father" },
            { fr: "la mère", en: "the mother" },
            { fr: "l'oncle", en: "the uncle" },
            { fr: "la tante", en: "the aunt" },
            { fr: "le frère", en: "the brother" },
            { fr: "la sœur", en: "the sister" },
            { fr: "le cousin", en: "the cousin (male)" },
            { fr: "la cousine", en: "the cousin (female)" },
            { fr: "le fils", en: "the son" },
            { fr: "la fille", en: "the daughter" },
            { fr: "le neveu", en: "the nephew" },
            { fr: "la nièce", en: "the niece" },
            { fr: "le petit-enfant", en: "the grandchild" },
            { fr: "les petits-enfants", en: "the grandchildren" },
            { fr: "le beau-père", en: "the stepfather / father-in-law" },
            { fr: "la belle-mère", en: "the stepmother / mother-in-law" },
            { fr: "le beau-fils", en: "the stepson / son-in-law" },
            { fr: "la belle-fille", en: "the stepdaughter / daughter-in-law" },
            { fr: "le beau-frère", en: "the brother-in-law" },
            { fr: "la belle-sœur", en: "the sister-in-law" },
            { fr: "le conjoint / la conjointe", en: "the partner / spouse" },
            { fr: "mon chum", en: "my boyfriend (Quebec slang)" },
            { fr: "ma blonde", en: "my girlfriend (Quebec slang)" },
            // Meeting expressions
            { fr: "Je suis enchanté(e) de te connaitre.", en: "I am delighted to know you. (Informal)" },
            { fr: "Je suis heureux/heureuse de vous rencontrer.", en: "I am happy to meet you. (Formal)" },
            { fr: "Moi aussi !", en: "Me too!" },
            { fr: "Ça me fait plaisir !", en: "It's my pleasure!" }
        ],
        grammar: [
            {
                title: "Possessive Adjectives (My, Your, His/Her...)",
                explanation: "<p>In French, possessive adjectives <strong>agree with the gender and number of the object owned</strong> — NOT the owner. This is a key difference from English!</p><p><strong>1st person singular (My):</strong></p><ul><li><em>mon</em> + masculine singular: mon père, mon fils</li><li><em>ma</em> + feminine singular: ma mère, ma sœur</li><li><em>mes</em> + any plural: mes enfants, mes parents</li></ul><p><strong>2nd person informal (Your — tu):</strong></p><ul><li><em>ton</em>, <em>ta</em>, <em>tes</em></li></ul><p><strong>2nd person formal (Your — vous):</strong></p><ul><li><em>votre</em> (singular), <em>vos</em> (plural)</li></ul><p><strong>3rd person (His / Her — il/elle):</strong></p><ul><li><em>son</em>, <em>sa</em>, <em>ses</em></li></ul><p><strong>Important:</strong> Before a feminine noun starting with a vowel, use <em>mon/ton/son</em> instead of ma/ta/sa: <em>mon amie</em> (my female friend).</p>",
                examples: [
                    { fr: "Mes enfants ont 7 ans et 3 ans.", en: "My children are 7 and 3 years old." },
                    { fr: "Ton auto est dans le parc de stationnement.", en: "Your car is in the parking lot." },
                    { fr: "Votre famille habite au Canada.", en: "Your family lives in Canada." },
                    { fr: "Son père habite à Rimouski.", en: "His/Her father lives in Rimouski." },
                    { fr: "Ses crayons sont dans son sac à main.", en: "Her pencils are in her handbag." },
                    { fr: "Mon amie s'appelle Sarah.", en: "My (female) friend's name is Sarah. (mon, not ma — vowel rule)" }
                ]
            },
            {
                title: "Possessive Adjective Table",
                explanation: "<table style='width:100%;border-collapse:collapse;margin-top:1rem;font-size:0.9em;'><tr style='background:rgba(255,255,255,0.15);'><th style='padding:0.5rem;border:1px solid rgba(255,255,255,0.2);'>Person</th><th style='padding:0.5rem;border:1px solid rgba(255,255,255,0.2);'>Masc. Singular</th><th style='padding:0.5rem;border:1px solid rgba(255,255,255,0.2);'>Fem. Singular</th><th style='padding:0.5rem;border:1px solid rgba(255,255,255,0.2);'>Plural</th></tr><tr><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>My (je)</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>mon</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>ma</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>mes</td></tr><tr style='background:rgba(255,255,255,0.05);'><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>Your (tu)</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>ton</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>ta</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>tes</td></tr><tr><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>Your (vous)</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>votre</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>votre</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>vos</td></tr><tr style='background:rgba(255,255,255,0.05);'><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>His/Her (il/elle)</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>son</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>sa</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>ses</td></tr><tr><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>Our (nous)</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>notre</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>notre</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>nos</td></tr><tr style='background:rgba(255,255,255,0.05);'><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>Their (ils/elles)</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>leur</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>leur</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>leurs</td></tr></table>",
                examples: []
            }
        ],
        dialogues: [
            {
                context: "Introducing Family Members",
                lines: [
                    { speaker: "Anne-Sophie", fr: "Bonjour, monsieur Légaré.", en: "Hello, Mr. Légaré.", align: "left" },
                    { speaker: "Mr. Légaré", fr: "Bonjour. Je m'appelle Anne-Sophie.", en: "Hello. My name is Anne-Sophie.", align: "right" },
                    { speaker: "Anne-Sophie", fr: "Je suis heureux de vous rencontrer.", en: "I am happy to meet you.", align: "left" },
                    { speaker: "Mr. Légaré", fr: "Moi aussi !", en: "Me too!", align: "right" }
                ]
            },
            {
                context: "Talking About Your Family",
                lines: [
                    { speaker: "A", fr: "Tu as des frères et sœurs ?", en: "Do you have brothers and sisters?", align: "left" },
                    { speaker: "B", fr: "Oui, j'ai un frère et deux sœurs. Mon frère habite à Montréal.", en: "Yes, I have one brother and two sisters. My brother lives in Montreal.", align: "right" },
                    { speaker: "A", fr: "Et tes parents, ils habitent où ?", en: "And your parents, where do they live?", align: "left" },
                    { speaker: "B", fr: "Mes parents habitent à Québec. Mon père est ingénieur et ma mère est infirmière.", en: "My parents live in Quebec City. My father is an engineer and my mother is a nurse.", align: "right" },
                    { speaker: "A", fr: "C'est une belle famille !", en: "That's a beautiful family!", align: "left" }
                ]
            }
        ],
        culture: "<p>Quebec has unique family slang: <strong>mon chum</strong> = my boyfriend, <strong>ma blonde</strong> = my girlfriend (regardless of hair color!). These are universally understood across Quebec and are the standard informal terms. Also note that Quebec families are commonly multi-cultural, with many members coming from different countries.</p>"
    }
];
