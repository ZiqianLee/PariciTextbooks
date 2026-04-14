const episodesData = [
    {
        id: "1",
        title: "Salutations et Présentations",
        theme: "Greetings and Introductions",
        vocabulary: [
            { fr: "Bonjour", en: "Hello / Good morning" },
            { fr: "Salut", en: "Hi / Bye (informal)" },
            { fr: "Comment ça va ?", en: "How are you?" },
            { fr: "Allô", en: "Hello", note: "Used both on the phone and as a general greeting in Quebec." },
            { fr: "Bienvenue", en: "Welcome" },
            { fr: "À la prochaine", en: "See you next time" },
            { fr: "Je m'appelle...", en: "My name is..." }
        ],
        grammar: [
            {
                title: "Les pronoms sujets (Subject Pronouns)",
                explanation: "<p>In French, the subject pronouns identify who is speaking, spoken to, or spoken about. Note the distinction between <strong>tu</strong> (informal singular) and <strong>vous</strong> (formal singular or plural).</p>",
                examples: [
                    { fr: "Je", en: "I" },
                    { fr: "Tu", en: "You (informal)" },
                    { fr: "Il / Elle / On", en: "He / She / We (informal)" },
                    { fr: "Nous", en: "We (formal/written)" },
                    { fr: "Vous", en: "You (formal/plural)" },
                    { fr: "Ils / Elles", en: "They (masculine / feminine)" }
                ]
            },
            {
                title: "Le verbe S'APPELER (To be called)",
                explanation: "<p>Used to introduce oneself. It is a reflexive verb.</p>",
                examples: [
                    { fr: "Je m'appelle", en: "My name is" },
                    { fr: "Tu t'appelles", en: "Your name is" },
                    { fr: "Il/Elle s'appelle", en: "His/Her name is" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Rencontre informelle (Informal meeting at a café)",
                lines: [
                    { speaker: "Marie", fr: "Allô ! Comment ça va ?", en: "Hi! How are you?", align: "left" },
                    { speaker: "Luc", fr: "Salut Marie ! Ça va bien, et toi ?", en: "Hi Marie! It's going well, and you?", align: "right" },
                    { speaker: "Marie", fr: "Super bien ! Je te présente mon ami, Paul.", en: "Super good! I present my friend, Paul.", align: "left" },
                    { speaker: "Paul", fr: "Salut Luc, enchanté.", en: "Hi Luc, nice to meet you.", align: "left" },
                    { speaker: "Luc", fr: "Enchanté Paul. Bienvenue à Montréal !", en: "Nice to meet you Paul. Welcome to Montreal!", align: "right" }
                ]
            }
        ],
        culture: "<p><strong>La bise vs. Le câlin :</strong> In Quebec, people often greet close friends and family with a single light hug (un câlin) or sometimes a kiss on each cheek (la bise), though less systematically than in France.</p><p>You will frequently hear <em>Allô</em> used in person instead of <em>Bonjour</em> or <em>Salut</em>. This is a very common Quebecism.</p>"
    },
    {
        id: "2",
        title: "Les Nombres et L'âge",
        theme: "Numbers and Age",
        vocabulary: [
            { fr: "Un, deux, trois", en: "One, two, three" },
            { fr: "Quatre, cinq, six", en: "Four, five, six" },
            { fr: "Sept, huit, neuf, dix", en: "Seven, eight, nine, ten" },
            { fr: "Quel âge as-tu ?", en: "How old are you? (informal)" },
            { fr: "J'ai vingt ans", en: "I am twenty years old" },
            { fr: "L'année", en: "The year" },
            { fr: "Le mois", en: "The month" }
        ],
        grammar: [
            {
                title: "Le verbe AVOIR (To have)",
                explanation: "<p>Unlike in English where we say 'I am 20', in French we say 'I have 20 years'. The verb <strong>avoir</strong> is essential.</p>",
                examples: [
                    { fr: "J'ai", en: "I have" },
                    { fr: "Tu as", en: "You have" },
                    { fr: "Il/Elle/On a", en: "He/She/We has" },
                    { fr: "Nous avons", en: "We have" },
                    { fr: "Vous avez", en: "You have" },
                    { fr: "Ils/Elles ont", en: "They have" }
                ]
            }
        ],
        dialogues: [
            {
                context: "À la clinique (At the clinic reception)",
                lines: [
                    { speaker: "Réceptionniste", fr: "Bonjour. Quel est votre nom ?", en: "Hello. What is your name?", align: "left" },
                    { speaker: "Client", fr: "Je m'appelle Sophie Tremblay.", en: "My name is Sophie Tremblay.", align: "right" },
                    { speaker: "Réceptionniste", fr: "Quel âge avez-vous, Madame Tremblay ?", en: "How old are you, Mrs. Tremblay?", align: "left" },
                    { speaker: "Client", fr: "J'ai trente-deux ans.", en: "I am thirty-two years old.", align: "right" }
                ]
            }
        ],
        culture: "<p>In Quebec, the number 70 is 'soixante-dix', 80 is 'quatre-vingts', and 90 is 'quatre-vingt-dix', exactly like in standard European French. Unlike Switzerland or Belgium, Quebeckers do not use 'septante' or 'nonante'.</p>"
    },
    {
        id: "3",
        title: "Professions et Nationalités",
        theme: "Professions and Nationalities",
        vocabulary: [
            { fr: "Étudiant / Étudiante", en: "Student (m/f)" },
            { fr: "Professeur", en: "Teacher / Professor" },
            { fr: "Médecin", en: "Doctor" },
            { fr: "Infirmier / Infirmière", en: "Nurse (m/f)" },
            { fr: "Québécois / Québécoise", en: "Quebecer (m/f)" },
            { fr: "Canadien / Canadienne", en: "Canadian (m/f)" },
            { fr: "Français / Française", en: "French (m/f)" }
        ],
        grammar: [
            {
                title: "Le verbe ÊTRE (To be) & Masculin/Féminin",
                explanation: "<p>The verb <strong>être</strong> is used for professions and nationalities. Note that adjectives denoting nationality or profession change based on gender.</p>",
                examples: [
                    { fr: "Je suis", en: "I am" },
                    { fr: "Tu es", en: "You are" },
                    { fr: "Il est / Elle est", en: "He is / She is" },
                    { fr: "Je suis étudiant (masc.)", en: "I am a student" },
                    { fr: "Je suis étudiante (fém.)", en: "I am a student" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Dans un cours de francisation (In a French integration class)",
                lines: [
                    { speaker: "Prof", fr: "Bonjour tout le monde ! Je m'appelle Denis, je suis professeur.", en: "Hello everyone! My name is Denis, I am a teacher.", align: "left" },
                    { speaker: "Anna", fr: "Bonjour. Moi, c'est Anna. Je suis étudiante.", en: "Hello. Me, I'm Anna. I'm a student.", align: "right" },
                    { speaker: "Prof", fr: "Quelle est ta nationalité, Anna ?", en: "What is your nationality, Anna?", align: "left" },
                    { speaker: "Anna", fr: "Je suis brésilienne.", en: "I am Brazilian.", align: "right" }
                ]
            }
        ],
        culture: "<p>Francisation classes are subsidized courses provided by the Government of Quebec to help new immigrants learn French and integrate into the society.</p>"
    },
    {
        id: "4",
        title: "L'Heure et Les Jours",
        theme: "Time and Days of the week",
        vocabulary: [
            { fr: "Lundi, Mardi, Mercredi", en: "Monday, Tuesday, Wednesday" },
            { fr: "Jeudi, Vendredi", en: "Thursday, Friday" },
            { fr: "Samedi, Dimanche", en: "Saturday, Sunday" },
            { fr: "Quelle heure est-il ?", en: "What time is it?" },
            { fr: "Il est midi", en: "It is noon" },
            { fr: "Aujourd'hui", en: "Today" },
            { fr: "Demain", en: "Tomorrow" }
        ],
        grammar: [
            {
                title: "Demander et dire l'heure",
                explanation: "<p>In Quebec, people often use the 12-hour clock in speech (using matin, après-midi, soir) but the 24-hour clock is common in written contexts like schedules.</p>",
                examples: [
                    { fr: "Il est trois heures.", en: "It is three o'clock." },
                    { fr: "Il est trois heures et quart.", en: "It is a quarter past three." },
                    { fr: "Il est trois heures et demie.", en: "It is half past three." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Prendre un rendez-vous (Making an appointment)",
                lines: [
                    { speaker: "Marc", fr: "On se voit quel jour ?", en: "What day are we seeing each other?", align: "left" },
                    { speaker: "Julie", fr: "Jeudi. À quelle heure ?", en: "Thursday. At what time?", align: "right" },
                    { speaker: "Marc", fr: "À midi et demi, ça te va ?", en: "At twelve thirty, does that work for you?", align: "left" },
                    { speaker: "Julie", fr: "Parfait, à jeudi !", en: "Perfect, see you Thursday!", align: "right" }
                ]
            }
        ],
        culture: "<p>A common Quebecism when talking about schedules is saying <strong>'ça te va ?'</strong> or <strong>'ça a d'l'allure'</strong> (makes sense/looks good).</p>"
    },
    {
        id: "5",
        title: "La Famille",
        theme: "Family and Relationships",
        vocabulary: [
            { fr: "Le père / La mère", en: "Father / Mother" },
            { fr: "Le frère / La soeur", en: "Brother / Sister" },
            { fr: "L'enfant", en: "The child" },
            { fr: "Le chum", en: "The boyfriend (Quebec colloquial)" },
            { fr: "La blonde", en: "The girlfriend (Quebec colloquial)" },
            { fr: "Le mari / La femme", en: "Husband / Wife" }
        ],
        grammar: [
            {
                title: "Les adjectifs possessifs (Possessive Adjectives)",
                explanation: "<p>They agree in gender and number with the noun they possess, NOT the gender of the owner.</p>",
                examples: [
                    { fr: "Mon frère", en: "My brother (masculine)" },
                    { fr: "Ma soeur", en: "My sister (feminine)" },
                    { fr: "Mes enfants", en: "My children (plural)" },
                    { fr: "Ton / Ta / Tes", en: "Your (singular)" },
                    { fr: "Son / Sa / Ses", en: "His / Her / Its" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Montrer une photo (Showing a photo)",
                lines: [
                    { speaker: "Céline", fr: "C'est qui sur la photo ?", en: "Who is that in the photo?", align: "left" },
                    { speaker: "David", fr: "C'est mon chum, Simon. Et ça, c'est ma petite soeur.", en: "That's my boyfriend, Simon. And that is my little sister.", align: "right" },
                    { speaker: "Céline", fr: "Elle est mignonne ! Quel âge a-t-elle ?", en: "She is cute! How old is she?", align: "left" },
                    { speaker: "David", fr: "Elle a dix ans.", en: "She is ten years old.", align: "right" }
                ]
            }
        ],
        culture: "<p><strong>Chum et Blonde :</strong> These are the standard, everyday terms used in Quebec to refer to a boyfriend ('mon chum') and girlfriend ('ma blonde'), regardless of the person's actual hair color!</p>"
    },
    { id: "6", title: "Les Goûts et Préférences", theme: "Tastes and Preferences", vocabulary: [{ fr: "Aimer", en: "To like/love" }, { fr: "Détester", en: "To hate" }, { fr: "Préférer", en: "To prefer" }, { fr: "C'est l'fun", en: "It's fun (Quebecism)" }, { fr: "C'est plate", en: "It's boring (Quebecism)" }], grammar: [{ title: "Aimer + infinitif", explanation: "<p>Use 'aimer' followed by an infinitive verb to express what you like to do.</p>", examples: [{ fr: "J'aime manger", en: "I like to eat" }, { fr: "Je n'aime pas chanter", en: "I don't like to sing" }] }], dialogues: [], culture: "<p>'C'est l'fun' (It's fun) and 'C'est plate' (It's boring) are incredibly common in spoken Quebec French.</p>"},
    { id: "7", title: "La Nourriture et le Café", theme: "Food and Café Culture", vocabulary: [{ fr: "Le dépanneur", en: "Convenience store (Quebec)" }, { fr: "Le breuvage", en: "Beverage / Drink" }, { fr: "Le déjeuner", en: "Breakfast (Quebec)" }, { fr: "Le dîner", en: "Lunch (Quebec)" }, { fr: "Le souper", en: "Dinner (Quebec)" }], grammar: [{ title: "Les articles partitifs", explanation: "<p>Use du, de la, de l' to say 'some' when talking about food and drinks.</p>", examples: [{ fr: "Je bois du café", en: "I drink some coffee" }, { fr: "Il mange de la soupe", en: "He eats some soup" }] }], dialogues: [], culture: "<p>Quebec uses different meal names than France. Morning = Déjeuner. Noon = Dîner. Evening = Souper. A 'dépanneur' is the local corner store where you can buy beer, wine, snacks, and milk.</p>"},
    { id: "8", title: "Les Lieux et la Ville", theme: "Places and the City", vocabulary: [{ fr: "La rue", en: "The street" }, { fr: "Le trottoir", en: "The sidewalk" }, { fr: "Le métro", en: "The subway" }, { fr: "Le char", en: "The car (Quebec informal)" }, { fr: "L'épicerie", en: "The grocery store" }], grammar: [{ title: "Prépositions de lieu: À et Chez", explanation: "<p>'À' is used for public places and cities. 'Chez' is used for someone's home or a professional's office.</p>", examples: [{ fr: "Je vais à Montréal", en: "I am going to Montreal" }, { fr: "Je vais chez le médecin", en: "I am going to the doctor" }] }], dialogues: [], culture: "<p>In Quebec, a car is informally called 'un char' rather than 'une voiture' (though 'voiture' is understood and used formally).</p>" },
    { id: "9", title: "L'Activités Quotidiennes", theme: "Daily Routine", vocabulary: [{ fr: "Se réveiller", en: "To wake up" }, { fr: "Se lever", en: "To get up" }, { fr: "Se brosser les dents", en: "To brush one's teeth" }, { fr: "Prendre une marche", en: "To take a walk (Quebecism)" }], grammar: [{ title: "Les verbes pronominaux", explanation: "<p>Reflexive verbs use a reflexive pronoun (me, te, se, nous, vous) matching the subject.</p>", examples: [{ fr: "Je me lève", en: "I get up" }, { fr: "Tu te laves", en: "You wash yourself" }] }], dialogues: [], culture: "<p>Taking a walk is translated directly from English in Quebec: 'prendre une marche', whereas in France they say 'faire une promenade'.</p>" },
    { id: "10", title: "Le Magasinage et Vêtements", theme: "Shopping and Clothes", vocabulary: [{ fr: "Magasiner", en: "To shop (Quebecism)" }, { fr: "Les bas", en: "Socks (Quebec)" }, { fr: "Les souliers", en: "Shoes (Quebec)" }, { fr: "Le chandail", en: "Sweater / Shirt" }, { fr: "Les rabais", en: "Discounts / Sales" }], grammar: [{ title: "Les adjectifs démonstratifs", explanation: "<p>Used to point out specific items: this or that.</p>", examples: [{ fr: "Ce chandail", en: "This sweater" }, { fr: "Cette chemise", en: "This shirt" }, { fr: "Ces souliers", en: "These shoes" }] }], dialogues: [], culture: "<p>Shopping is called 'magasiner' in Quebec (from le magasin). In France, they use 'faire les courses' or 'faire du shopping'. Also, 'les bas' is used for socks instead of 'les chaussettes'.</p>" },
    { id: "11", title: "L'Habitation", theme: "Housing and Rooms", vocabulary: [{ fr: "Un appartement", en: "An apartment" }, { fr: "Une chambre", en: "A bedroom" }, { fr: "Le salon", en: "The living room" }, { fr: "Le prix", en: "The price" }, { fr: "Louer", en: "To rent" }], grammar: [{ title: "Il y a", explanation: "<p>'Il y a' means 'there is' or 'there are'.</p>", examples: [{ fr: "Il y a deux chambres.", en: "There are two bedrooms." }] }], dialogues: [], culture: "<p>July 1st is historically 'Moving Day' (Jour du déménagement) in Quebec, where roughly 100,000 households move on the exact same day.</p>" },
    { id: "12", title: "Le Temps et la Météo", theme: "Weather and Seasons", vocabulary: [{ fr: "La neige", en: "Snow" }, { fr: "Il fait froid", en: "It is cold" }, { fr: "Il fait frette", en: "It is freezing cold (Quebecism)" }, { fr: "L'hiver", en: "Winter" }, { fr: "L'été", en: "Summer" }], grammar: [{ title: "Faire pour la météo", explanation: "<p>We use the verb 'Faire' (to make/do) to describe the weather.</p>", examples: [{ fr: "Il fait beau", en: "The weather is nice" }, { fr: "Il fait mauvais", en: "The weather is bad" }] }], dialogues: [], culture: "<p>When the cold is intensely biting during winter, Quebeckers will famously declare 'Il fait frette!' instead of just saying 'Il fait froid'.</p>" },
    { id: "13", title: "Les Sorties et Loisirs", theme: "Outings and Leisure", vocabulary: [{ fr: "La fin de semaine", en: "The weekend (Quebecism)" }, { fr: "Le cinéma", en: "The movie theater" }, { fr: "Regarder un film", en: "To watch a movie" }, { fr: "Jouer au hockey", en: "To play hockey" }], grammar: [{ title: "Aller + infinitif (Futur Proche)", explanation: "<p>The near future is formed by conjugating ALLER (to go) and adding an infinitive.</p>", examples: [{ fr: "Je vais manger", en: "I am going to eat" }, { fr: "Nous allons sortir", en: "We are going to go out" }] }], dialogues: [], culture: "<p>Quebec completely avoids the anglicism 'le weekend' used in France, preferring the literal translation 'la fin de semaine'.</p>" },
    { id: "14", title: "Le Corps et la Santé", theme: "Body and Health", vocabulary: [{ fr: "La tête", en: "Head" }, { fr: "Le bras", en: "Arm" }, { fr: "La jambe", en: "Leg" }, { fr: "Malade", en: "Sick" }, { fr: "Avoir mal à", en: "To have an ache in..." }], grammar: [{ title: "Avoir mal à + article + partie du corps", explanation: "<p>To express pain in a body part. 'À + le' becomes 'au', 'à + les' becomes 'aux'.</p>", examples: [{ fr: "J'ai mal au dos", en: "My back hurts" }, { fr: "Elle a mal à la tête", en: "She has a headache" }] }], dialogues: [], culture: "<p>To express that one is very tired or broken down, a Quebecker might say 'Je suis raqué' (My muscles are extremely sore after exertion).</p>" },
    { id: "15", title: "Décrire une Personne", theme: "Describing People", vocabulary: [{ fr: "Grand / Grande", en: "Tall" }, { fr: "Petit / Petite", en: "Short" }, { fr: "Les cheveux", en: "Hair" }, { fr: "Les yeux", en: "Eyes" }, { fr: "Fin / Fine", en: "Nice / Sweet (Quebecism)" }], grammar: [{ title: "L'accord des adjectifs (suite)", explanation: "<p>Adjectives must match the noun they modify in gender (masc/fem) and number (singular/plural).</p>", examples: [{ fr: "Il est petit.", en: "He is short." }, { fr: "Elles sont petites.", en: "They are short." }] }], dialogues: [], culture: "<p>In Quebec, if someone is very kind and pleasant, you describe them as 'fin' or 'fine', e.g., 'C'est un gars bien fin.' (He's a very nice guy).</p>" }
];
