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
                context: "Ordering at a Restaurant (Local Quebeckers)",
                lines: [
                    { speaker: "Customer", fr: "Salut ! On a réservé une table pour deux, au nom de Tremblay.", en: "Hi! We reserved a table for two, under the name Tremblay.", align: "left" },
                    { speaker: "Host", fr: "Bonjour ! Oui, la table est prête, suivez-moi, s'il vous plaît.", en: "Hello! Yes, the table is ready, follow me, please.", align: "right" },
                    { speaker: "Customer", fr: "Merci.", en: "Thank you.", align: "left" },
                    { speaker: "Host", fr: "Voici le menu, vous avez le temps de regarder.", en: "Here is the menu, take your time to look.", align: "right" },
                    { speaker: "Waiter", fr: "Vous êtes prêt à commander ?", en: "Are you ready to order?", align: "right" },
                    { speaker: "Customer A", fr: "Oui, pour moi, je vais prendre une poutine, avec du fromage en grains.", en: "Yes, for me, I will take a poutine, with cheese curds.", align: "left" },
                    { speaker: "Waiter", fr: "Parfait, et pour vous, madame ?", en: "Perfect, and for you, ma'am?", align: "right" },
                    { speaker: "Customer B", fr: "Moi, je vais prendre la salade du chef, et un verre de bière locale.", en: "Me, I will take the chef's salad, and a glass of local beer.", align: "left" },
                    { speaker: "Waiter", fr: "Parfait, ça sera prêt dans 15 minutes.", en: "Perfect, it will be ready in 15 minutes.", align: "right" },
                    { speaker: "Customer", fr: "L'addition, s'il vous plaît.", en: "The bill, please.", align: "left" },
                    { speaker: "Waiter", fr: "Voici la facture, ça fait 35 dollars.", en: "Here is the bill, that makes 35 dollars.", align: "right" },
                    { speaker: "Customer", fr: "Voilà, je paie par carte.", en: "Here you go, I am paying by card.", align: "left" },
                    { speaker: "Waiter", fr: "Merci ! Bonne soirée !", en: "Thank you! Have a good evening!", align: "right" }
                ]
            },
            {
                context: "Eating Poutine for the First Time",
                lines: [
                    { speaker: "A", fr: "Salut ! Tu as déjà mangé de la poutine ?", en: "Hi! Have you ever eaten poutine?", align: "left" },
                    { speaker: "B", fr: "Non, c'est la première fois, c'est quoi ça ?", en: "No, it's the first time, what is it?", align: "right" },
                    { speaker: "A", fr: "Oh, c'est le plat québécois ! C'est des frites, du fromage en grains, pis de la sauce.", en: "Oh, it's the Quebecois dish! It's fries, cheese curds, and some sauce.", align: "left" },
                    { speaker: "B", fr: "Oh, ça a l'air bon !", en: "Oh, that looks good!", align: "right" },
                    { speaker: "A", fr: "Oui, c'est super bon ! Tu vas aimer.", en: "Yes, it is super good! You are going to like it.", align: "left" },
                    { speaker: "B", fr: "D'accord, je vais prendre ça, alors.", en: "Okay, I will take that, then.", align: "right" }
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
                context: "Talking About Illness with a Friend",
                lines: [
                    { speaker: "A", fr: "Salut ! Tu as l'air malade, ça va ?", en: "Hi! You look sick, are you okay?", align: "left" },
                    { speaker: "B", fr: "Non, ça va pas. J'ai mal à la tête, pis j'ai de la fièvre.", en: "No, not okay. My head hurts, and I have a fever.", align: "right" },
                    { speaker: "A", fr: "Oh non, tu as un rhume ?", en: "Oh no, do you have a cold?", align: "left" },
                    { speaker: "B", fr: "Oui, je pense. J'ai de la toux aussi.", en: "Yes, I think so. I also have a cough.", align: "right" },
                    { speaker: "A", fr: "Tu devrais rester chez toi, ne pas aller travailler.", en: "You should stay home, and not go to work.", align: "left" },
                    { speaker: "B", fr: "Oui, je vais prendre un jour de congé.", en: "Yes, I am going to take a day off.", align: "right" },
                    { speaker: "A", fr: "Tu as besoin de quelque chose ? Je peux t'acheter des médicaments ?", en: "Do you need anything? Can I buy you meds?", align: "left" },
                    { speaker: "B", fr: "Oh oui, ça serait gentil ! Je veux du Tylenol pour la fièvre.", en: "Oh yes, that would be nice! I want Tylenol for the fever.", align: "right" },
                    { speaker: "A", fr: "D'accord, je vais passer au dépanneur en revenant du travail.", en: "Okay, I will stop at the corner store coming back from work.", align: "left" },
                    { speaker: "B", fr: "Merci beaucoup, t'es ben gentil !", en: "Thank you so much, you are very kind!", align: "right" }
                ]
            },
            {
                context: "Doctor's Appointment",
                lines: [
                    { speaker: "Doc", fr: "Bonjour, monsieur, qu'est-ce que vous avez ?", en: "Hello sir, what is wrong with you?", align: "left" },
                    { speaker: "Patient", fr: "Bonjour, docteur. J'ai mal à la gorge depuis 2 jours, pis j'ai de la fièvre.", en: "Hello doctor. My throat hurts for 2 days, and I have a fever.", align: "right" },
                    { speaker: "Doc", fr: "D'accord, ouvrez la bouche, s'il vous plaît...", en: "Okay, open your mouth, please...", align: "left" },
                    { speaker: "Doc", fr: "Ok, c'est un rhume, rien de grave. Vous devez rester chez vous 3 jours, prendre des médicaments.", en: "Ok, it's a cold, nothing serious. You must stay home for 3 days, take meds.", align: "left" },
                    { speaker: "Patient", fr: "D'accord, est-ce que je peux travailler ?", en: "Okay, can I work?", align: "right" },
                    { speaker: "Doc", fr: "Non, il faut rester chez vous, pour ne pas contaminer les autres.", en: "No, you must stay home, so as not to infect others.", align: "left" },
                    { speaker: "Doc", fr: "Voici l'ordonnance pour les médicaments, et votre congé de maladie.", en: "Here is the prescription for meds, and your sick note.", align: "left" },
                    { speaker: "Patient", fr: "Merci beaucoup.", en: "Thank you very much.", align: "right" }
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
                context: "Lost Tourist Looking for the Subway",
                lines: [
                    { speaker: "Tourist", fr: "Pardon, madame, je me suis perdu. Comment aller à la station de métro Berri-UQAM ?", en: "Excuse me, ma'am, I am lost. How do I get to Berri-UQAM subway station?", align: "left" },
                    { speaker: "Local", fr: "Oh, c'est facile ! Allez tout droit, jusqu'au feu de circulation.", en: "Oh, it's easy! Go straight ahead, until the traffic light.", align: "right" },
                    { speaker: "Tourist", fr: "D'accord...", en: "Okay...", align: "left" },
                    { speaker: "Local", fr: "Pis, au feu, tu tournes à droite, pis tu continues 2 minutes, c'est là.", en: "Then, at the light, you turn right, then you continue for 2 minutes, it's there.", align: "right" },
                    { speaker: "Tourist", fr: "C'est loin ?", en: "Is it far?", align: "left" },
                    { speaker: "Local", fr: "Non, c'est 5 minutes à pied, tu ne peux pas le rater.", en: "No, it's 5 minutes walking, you can't miss it.", align: "right" },
                    { speaker: "Tourist", fr: "Oh, merci beaucoup !", en: "Oh, thank you very much!", align: "left" },
                    { speaker: "Local", fr: "Bienvenue !", en: "You're welcome!", align: "right" }
                ]
            },
            {
                context: "Looking for Sainte-Catherine Street",
                lines: [
                    { speaker: "A", fr: "Pardon, monsieur, où est la Rue Sainte-Catherine ?", en: "Excuse me, sir, where is Sainte-Catherine Street?", align: "left" },
                    { speaker: "B", fr: "Oh, c'est en bas de la rue, tu descends tout droit.", en: "Oh, it's down the street, you go straight down.", align: "right" },
                    { speaker: "A", fr: "D'accord, il y a des magasins de vêtements là-bas ?", en: "Okay, are there clothing stores there?", align: "left" },
                    { speaker: "B", fr: "Oui, c'est la rue de shopping, il y a plein de magasins.", en: "Yes, it is the shopping street, there are plenty of stores.", align: "right" },
                    { speaker: "A", fr: "Parfait, c'est loin ?", en: "Perfect, is it far?", align: "left" },
                    { speaker: "B", fr: "Non, c'est 3 minutes à pied, c'est tout proche.", en: "No, it's 3 minutes walking, it's right near.", align: "right" },
                    { speaker: "A", fr: "Merci beaucoup !", en: "Thank you very much!", align: "left" },
                    { speaker: "B", fr: "Bienvenue !", en: "You're welcome!", align: "right" }
                ]
            }
        ],
        culture: "<p>Montreal's metro system is famously extensive and heavily used to avoid winter weather. Locals very commonly mix formal grammar 'Allez' with informal hooks like 'pis tu tournes'.</p>"
    }
];
