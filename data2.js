const episodes2 = [
    {
        id: "6",
        title: "Loisirs et Présent Continu",
        theme: "Hobbies and Present Continuous",
        vocabulary: [
            // Daily Activities
            { fr: "travailler", en: "to work" },
            { fr: "étudier", en: "to study" },
            { fr: "manger", en: "to eat" },
            { fr: "boire", en: "to drink" },
            { fr: "dormir", en: "to sleep" },
            { fr: "parler", en: "to speak" },
            { fr: "écouter", en: "to listen" },
            { fr: "regarder", en: "to look at / to watch" },
            { fr: "lire", en: "to read" },
            { fr: "écrire", en: "to write" },
            { fr: "cuisiner", en: "to cook" },
            { fr: "nettoyer", en: "to clean" },
            { fr: "faire le ménage", en: "to do household chores" },
            { fr: "faire la lessive", en: "to do the laundry" },
            { fr: "faire la vaisselle", en: "to do the dishes" },
            { fr: "faire les courses", en: "to go grocery shopping" },
            { fr: "aller au travail", en: "to go to work" },
            { fr: "aller à l'école", en: "to go to school" },
            { fr: "rentrer chez moi", en: "to go home" },
            // Hobbies & Leisure
            { fr: "faire du ski", en: "to ski", note: "The most popular winter activity in Quebec!" },
            { fr: "faire de la raquette", en: "to go snowshoeing", note: "A typical winter activity of walking in deep snow." },
            { fr: "faire de la pêche", en: "to go fishing" },
            { fr: "faire du camping", en: "to go camping" },
            { fr: "faire de la randonnée", en: "to go hiking" },
            { fr: "aller au cinéma", en: "to go to the movies" },
            { fr: "aller au restaurant", en: "to go to a restaurant" },
            { fr: "aller au musée", en: "to go to the museum" },
            { fr: "aller au parc", en: "to go to the park" },
            { fr: "aller à la plage", en: "to go to the beach" },
            { fr: "jouer au soccer", en: "to play soccer" },
            { fr: "jouer au hockey", en: "to play hockey", note: "The national sport of Quebec. Everyone loves it!" },
            { fr: "jouer au tennis", en: "to play tennis" },
            { fr: "Ça me tente", en: "I feel like doing it (Quebec)" },
            { fr: "Ça marche !", en: "That works! / Deal!" },
            { fr: "J'ai hâte !", en: "I can't wait!" }
        ],
        grammar: [
            {
                title: "Présent Continu (Present Continuous)",
                explanation: "<p>Used to describe an action occurring right at this moment. Structure: <strong>être en train de + infinitive verb</strong>.</p>",
                examples: [
                    { fr: "Je suis en train de cuisiner.", en: "I am cooking." },
                    { fr: "Ils sont en train de jouer au hockey.", en: "They are playing hockey." },
                    { fr: "Je suis en train de lire un livre sur le Québec.", en: "I am reading a book about Quebec." },
                    { fr: "Ma blonde est en train de faire la lessive.", en: "My girlfriend is doing the laundry." }
                ]
            },
            {
                title: "Expressing Preferences",
                explanation: "<p>Useful verbs for hobbies: <em>adorer</em> (to love), <em>détester</em> (to hate), <em>préférer</em> (to prefer).</p>",
                examples: [
                    { fr: "J'adore faire du ski.", en: "I love skiing." },
                    { fr: "Je déteste faire le ménage.", en: "I hate doing chores." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Weekend Plans",
                lines: [
                    { speaker: "A", fr: "Qu'est-ce que tu es en train de faire ?", en: "What are you doing (right now)?", align: "left" },
                    { speaker: "B", fr: "Rien de spécial, je suis en train de regarder la télé.", en: "Nothing special, I am watching TV.", align: "right" }
                ]
            }
        ],
        culture: "<p>In colloquial Quebecois, you might sometimes hear people drop 'en train de' and use the present participle: <em>Je suis mangeant</em>. This is not standard French but exists in the countryside.</p>"
    },
    {
        id: "7",
        title: "Les Adjectifs et Leurs Accords",
        theme: "Adjectives and Agreements",
        vocabulary: [
            // Character Adjectives
            { fr: "gentil / gentille", en: "nice / kind" },
            { fr: "sympathique / sympa", en: "friendly / nice" },
            { fr: "drôle", en: "funny / humorous" },
            { fr: "intelligent / intelligente", en: "smart / intelligent" },
            { fr: "patient / patiente", en: "patient" },
            { fr: "généreux / généreuse", en: "generous" },
            { fr: "timide", en: "shy" },
            { fr: "extraverti / extravertie", en: "extroverted / outgoing" },
            { fr: "introverti / introvertie", en: "introverted" },
            { fr: "calme", en: "calm / quiet" },
            { fr: "dynamique", en: "dynamic / energetic" },
            { fr: "sérieux / sérieuse", en: "serious" },
            { fr: "ennuyeux / ennuyeuse", en: "boring" },
            { fr: "occupé / occupée", en: "busy" },
            { fr: "fatigué / fatiguée", en: "tired" },
            { fr: "content / contente", en: "happy" },
            { fr: "triste", en: "sad" },
            { fr: "en colère", en: "angry" },
            { fr: "stressé / stressée", en: "stressed" },
            // Appearance Adjectives
            { fr: "grand / grande", en: "tall" },
            { fr: "petit / petite", en: "short / small" },
            { fr: "mince", en: "thin / slim" },
            { fr: "gros / grosse", en: "fat" },
            { fr: "beau / belle", en: "beautiful / handsome" },
            { fr: "laid / laide", en: "ugly" },
            { fr: "vieux / vieille", en: "old" },
            { fr: "jeune", en: "young" },
            { fr: "brun / brune", en: "brown-haired" },
            { fr: "blond / blonde", en: "blonde-haired" },
            { fr: "noir / noire", en: "black-haired" },
            { fr: "roux / rousse", en: "red-haired" },
            // Degree adverbs
            { fr: "ben", en: "very (Quebec slang for très)" },
            { fr: "trop", en: "too much / very" },
            { fr: "super", en: "super / very" }
        ],
        grammar: [
            {
                title: "Adjective Gender Agreements",
                explanation: "<p>In French, adjectives must agree with the noun they modify. By default, add an <strong>-e</strong> for feminine and an <strong>-s</strong> for plural.</p>",
                examples: [
                    { fr: "gentil → gentille", en: "Male nice vs Female nice" },
                    { fr: "beau → belle", en: "Irregular: handsome vs beautiful" },
                    { fr: "vieux → vieille", en: "Irregular: old" }
                ]
            },
            {
                title: "Adjective Placement",
                explanation: "<p>Most adjectives go AFTER the noun. But short, common adjectives go BEFORE the noun (beau, bon, grand, petit, jeune, vieux).</p>",
                examples: [
                    { fr: "Un beau garçon", en: "A handsome boy" },
                    { fr: "Une petite fille", en: "A little girl" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Introducing a Friend",
                lines: [
                    { speaker: "A", fr: "Je te présente, c'est mon ami, Jean.", en: "I present you, this is my friend, Jean.", align: "left" },
                    { speaker: "B", fr: "Salut Jean ! Enchantée ! Je m'appelle Marie.", en: "Hi Jean! Nice to meet you! My name is Marie.", align: "right" },
                    { speaker: "A", fr: "Jean est super sympa, il est ben drôle.", en: "Jean is super nice, he is very funny.", align: "left" }
                ]
            }
        ],
        culture: "<p>The word <strong>'Ben'</strong> (slang for 'Bien') is a fundamental part of spoken Quebecois. Used extensively as an intensifier: <em>Il est ben drôle !</em> (He is super funny!) or <em>C'est ben bon !</em> (It is really good!)</p>"
    },
    {
        id: "8",
        title: "Restaurant et L'Impératif",
        theme: "Restaurant and the Imperative Mood",
        vocabulary: [
            { fr: "Le menu", en: "The menu" },
            { fr: "La poutine", en: "Poutine" },
            { fr: "Le fromage en grains", en: "Cheese curds" },
            { fr: "Les frites", en: "Fries" },
            { fr: "La sauce", en: "Gravy / Sauce" },
            { fr: "Un steak frites, moyen", en: "A steak and fries, medium rare" },
            { fr: "La salade du chef", en: "Chef's salad" },
            { fr: "Un café noir", en: "A black coffee" },
            { fr: "La bière locale", en: "Local beer" },
            { fr: "La facture", en: "The bill (Quebec)" },
            { fr: "L'addition", en: "The bill (France)" },
            { fr: "Le serveur / La serveuse", en: "The waiter / The waitress" },
            { fr: "Commander", en: "To order" },
            { fr: "Payer par carte", en: "To pay by card" }
        ],
        grammar: [
            {
                title: "L'Impératif (The Imperative Mood)",
                explanation: "<p>Used to give orders, requests, or directions. Formed using the present tense of tu, nous, or vous, but omitting the subject pronoun.</p>",
                examples: [
                    { fr: "Écoutez le serveur.", en: "Listen to the waiter. (Vous form)" },
                    { fr: "Prends ce menu.", en: "Take this menu. (Tu form)" },
                    { fr: "Allons-y.", en: "Let's go. (Nous form)" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Ordering Food",
                lines: [
                    { speaker: "Waiter", fr: "Vous êtes prêt à commander ?", en: "Are you ready to order?", align: "left" },
                    { speaker: "Customer", fr: "Oui, pour moi, je vais prendre une poutine, avec du fromage en grains.", en: "Yes, for me, I will take a poutine, with cheese curds.", align: "right" }
                ]
            }
        ],
        culture: "<p>A true Quebec Poutine relies exclusively on <em>'fromage en grains'</em> (fresh cheese curds that squeak when you bite them). Quebeckers tip generously (15% is the cultural minimum at sit-down restaurants).</p>"
    },
    {
        id: "9",
        title: "Le Corps et La Santé",
        theme: "The Body and Health",
        vocabulary: [
            { fr: "La tête", en: "Head" },
            { fr: "Le ventre", en: "Stomach" },
            { fr: "Le bras", en: "Arm" },
            { fr: "Le dos", en: "Back" },
            { fr: "La main", en: "Hand" },
            { fr: "La gorge", en: "Throat" },
            { fr: "Les dents", en: "Teeth" },
            { fr: "Les yeux", en: "Eyes" },
            { fr: "Les pieds", en: "Feet" },
            { fr: "La toux", en: "Cough" },
            { fr: "Un rhume", en: "A cold" },
            { fr: "La fièvre", en: "Fever" },
            { fr: "Allergique", en: "Allergic" },
            { fr: "L'ordonnance", en: "Prescription" },
            { fr: "Le congé de maladie", en: "Sick leave" },
            { fr: "Le dépanneur", en: "Corner store / Convenience store" },
            { fr: "Le médecin de famille", en: "Family doctor" }
        ],
        grammar: [
            {
                title: "Avoir mal à (To have pain)",
                explanation: "<p>Use <strong>avoir mal à</strong> + body part. Contractions apply:</p><ul><li>à + le = <strong>au</strong> (au ventre, au dos)</li><li>à + la = <strong>à la</strong> (à la tête, à la gorge)</li><li>à + les = <strong>aux</strong> (aux dents, aux yeux)</li></ul>",
                examples: [
                    { fr: "J'ai mal à la tête, je pense que j'ai de la fièvre.", en: "I have a headache, I think I have a fever." },
                    { fr: "J'ai mal au ventre, j'ai mangé trop de poutine.", en: "My stomach hurts, I ate too much poutine." },
                    { fr: "Je suis allergique aux arachides.", en: "I am allergic to peanuts." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Doctor's Appointment",
                lines: [
                    { speaker: "Doc", fr: "Qu'est-ce que vous avez ?", en: "What's wrong?", align: "left" },
                    { speaker: "Patient", fr: "J'ai mal à la gorge depuis 2 jours.", en: "My throat hurts for 2 days.", align: "right" },
                    { speaker: "Doc", fr: "C'est un rhume... Voici l'ordonnance pour les médicaments, et votre congé de maladie.", en: "It's a cold... Here is the prescription for meds, and your sick note.", align: "left" }
                ]
            }
        ],
        culture: "<p>In Quebec, the public health system is entirely covered mathematically by the RAMQ card. If you just need Tylenol, you can walk straight to a <strong>dépanneur</strong>, but strict prescriptions require a Pharmacie.</p>"
    },
    {
        id: "10",
        title: "Directions et Orientation",
        theme: "Directions and Orientation",
        vocabulary: [
            { fr: "à gauche", en: "left" },
            { fr: "à droite", en: "right" },
            { fr: "tout droit", en: "straight ahead" },
            { fr: "en face de", en: "in front of" },
            { fr: "à côté de", en: "next to" },
            { fr: "près de", en: "near to" },
            { fr: "loin de", en: "far from" },
            { fr: "au coin de", en: "at the corner of" },
            { fr: "au bout de", en: "at the end of" },
            { fr: "avant", en: "before" },
            { fr: "après", en: "after" },
            { fr: "en haut", en: "up" },
            { fr: "en bas", en: "down" },
            { fr: "la rue", en: "the street" },
            { fr: "l'avenue", en: "the avenue" },
            { fr: "le boulevard", en: "the boulevard" },
            { fr: "le carrefour", en: "the intersection" },
            { fr: "le feu de circulation", en: "the traffic light" },
            { fr: "le panneau", en: "the street sign" },
            { fr: "le métro", en: "the subway" },
            { fr: "la station de métro", en: "the subway station" },
            { fr: "l'arrêt d'autobus", en: "the bus stop" },
            { fr: "le parc", en: "the park" },
            { fr: "le musée", en: "the museum" },
            { fr: "l'hôpital", en: "the hospital" },
            { fr: "la gare", en: "the train station" },
            { fr: "l'aéroport", en: "the airport" },
            { fr: "le Vieux-Montréal", en: "Old Montreal" },
            { fr: "la Rue Saint-Laurent", en: "Saint-Laurent Street" },
            { fr: "la Rue Sainte-Catherine", en: "Sainte-Catherine Street" }
        ],
        grammar: [
            {
                title: "Commanding Directions",
                explanation: "<p>Always use the polite <em>Vous</em> imperative form when giving directions to people on the street.</p>",
                examples: [
                    { fr: "Tournez à gauche.", en: "Turn left. (Vous form)" },
                    { fr: "Prenez la première rue à droite.", en: "Take the first street on the right." },
                    { fr: "Descendez tout droit.", en: "Go straight down." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Lost Tourist",
                lines: [
                    { speaker: "Tourist", fr: "Pardon, je me suis perdu. Comment aller à la station Berri-UQAM ?", en: "Excuse me, I'm lost. How do I get to Berri-UQAM station?", align: "left" },
                    { speaker: "Local", fr: "Allez tout droit, jusqu'au feu de circulation. Pis, tu tournes à droite.", en: "Go straight, up to the traffic light. Then, you turn right.", align: "right" },
                    { speaker: "Tourist", fr: "C'est loin ?", en: "Is it far?", align: "left" },
                    { speaker: "Local", fr: "Non, c'est 5 minutes à pied, tu ne peux pas le rater.", en: "No, it's 5 minutes walking, you can't miss it.", align: "right" }
                ]
            }
        ],
        culture: "<p>Montreal's metro system is famously extensive and heavily used to avoid winter weather. Locals very commonly mix formal grammar 'Allez' with informal hooks like 'pis tu tournes'.</p>"
    }
];
