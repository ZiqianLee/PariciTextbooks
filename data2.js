const episodes2 = [
    {
        id: "6",
        title: "Loisirs et Présent Continu",
        theme: "Hobbies and Present Continuous",
        vocabulary: [
            { fr: "Cuisiner", en: "To cook" },
            { fr: "Faire du ski", en: "To ski" },
            { fr: "Faire du camping", en: "To go camping" },
            { fr: "Jouer au hockey", en: "To play hockey" },
            { fr: "Faire le ménage", en: "To do house chores" },
            { fr: "Faire la lessive", en: "To do the laundry" },
            { fr: "Regarder la télé", en: "To watch TV" },
            { fr: "Prendre un café", en: "To grab a coffee" },
            { fr: "Sortir", en: "To go out" },
            { fr: "Le week-end / La fin de semaine", en: "The weekend" },
            { fr: "Ça me tente", en: "I am tempted / I feel like doing it (Quebec)" },
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
                    { fr: "Je déteste faire le ménage.", en: "I hate doing chores." },
                    { fr: "Je préfère aller au cinéma que rester chez moi.", en: "I prefer going to the movies rather than staying home." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Weekend Plans",
                lines: [
                    { speaker: "A", fr: "Qu'est-ce que tu es en train de faire ?", en: "What are you doing (right now)?", align: "left" },
                    { speaker: "B", fr: "Rien de spécial, je suis en train de regarder la télé.", en: "Nothing special, I am watching TV.", align: "right" },
                    { speaker: "A", fr: "Tu veux sortir ? Ça me tente d'aller faire du ski à Mont-Tremblant.", en: "Want to go out? I feel like skiing at Mont-Tremblant.", align: "left" },
                    { speaker: "B", fr: "Wow, ça marche ! On apporte de la poutine pour le lunch ?", en: "Wow, that works! Do we bring poutine for lunch?", align: "right" },
                    { speaker: "A", fr: "Oui, bien sûr ! C'est obligatoire !", en: "Yes, of course! It's mandatory!", align: "left" }
                ]
            },
            {
                context: "Busy with Chores",
                lines: [
                    { speaker: "A", fr: "Tu es occupé ?", en: "Are you busy?", align: "left" },
                    { speaker: "B", fr: "Oui, je suis en train de faire la vaisselle.", en: "Yes, I am washing the dishes.", align: "right" },
                    { speaker: "A", fr: "Après ça, tu veux aller prendre un café ?", en: "After that, do you want to grab a coffee?", align: "left" },
                    { speaker: "B", fr: "Oui, ça marche ! Je finis dans 10 minutes.", en: "Yes, that works! I finish in 10 minutes.", align: "right" }
                ]
            }
        ],
        culture: "<p>The expression <strong>'Ça me tente'</strong> is deeply rooted in Quebec culture. Instead of saying 'Je veux' (I want), Quebeckers prefer saying 'It tempts me'.</p>"
    },
    {
        id: "7",
        title: "Les Adjectifs et Leurs Accords",
        theme: "Adjectives and Agreements",
        vocabulary: [
            { fr: "Gentil / Gentille", en: "Nice / Kind" },
            { fr: "Intelligent / Intelligente", en: "Smart" },
            { fr: "Généreux / Généreuse", en: "Generous" },
            { fr: "Occupé / Occupée", en: "Busy" },
            { fr: "Beau / Belle", en: "Handsome / Beautiful" },
            { fr: "Vieux / Vieille", en: "Old" },
            { fr: "Nouveau / Nouvelle", en: "New" },
            { fr: "Sympathique (Sympa)", en: "Nice (Unchanging)" },
            { fr: "Timide", en: "Shy (Unchanging)" },
            { fr: "Calme", en: "Calm (Unchanging)" },
            { fr: "Drôle", en: "Funny (Unchanging)" },
            { fr: "Triste", en: "Sad (Unchanging)" },
            { fr: "Fatigué(e)", en: "Tired" },
            { fr: "Content(e)", en: "Happy" },
            { fr: "Patient(e)", en: "Patient" },
            { fr: "En colère", en: "Angry" },
            { fr: "Stressant(e)", en: "Stressful" },
            { fr: "Ben", en: "Very (Quebec colloquial)" }
        ],
        grammar: [
            {
                title: "Adjective Gender Agreements",
                explanation: "<p>In French, adjectives must agree with the noun they modify. By default, add an <strong>-e</strong> for feminine and an <strong>-s</strong> for plural.</p><ul><li>gentil → gentille</li><li>intelligent → intelligente</li><li>généreux → généreuse</li></ul><p>Adjectives ending in -e natively (like <em>timide</em> or <em>drôle</em>) do not change for feminine.</p>",
                examples: []
            },
            {
                title: "Adjective Placement",
                explanation: "<p>Most adjectives go AFTER the noun (e.g., <em>une femme intelligente</em>). But short, common adjectives go BEFORE the noun (beau, bon, grand, petit, jeune, vieux).</p>",
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
            },
            {
                context: "Gossiping about Coworkers",
                lines: [
                    { speaker: "A", fr: "Tu connais le nouveau comptable ?", en: "Do you know the new accountant?", align: "left" },
                    { speaker: "B", fr: "Oui, il est ben gentil, il est très patient.", en: "Yes, he's very nice, he is very patient.", align: "right" },
                    { speaker: "A", fr: "C'est bon, parce que l'ancien était trop stressant. Il était toujours en colère.", en: "That's good, because the old one was too stressful. He was always angry.", align: "left" }
                ]
            }
        ],
        culture: "<p>The word <strong>'Ben'</strong> (slang for 'Bien') is a fundamental part of spoken Quebecois. Used extensively as an intensifier: <em>Il est ben drôle !</em> (He is super funny!)</p>"
    },
    {
        id: "8",
        title: "Restaurant et L'Impératif",
        theme: "Restaurant and the Imperative Mood",
        vocabulary: [
            { fr: "Le menu", en: "The menu" },
            { fr: "La poutine", en: "Poutine" },
            { fr: "Le fromage en grains", en: "Cheese curds" },
            { fr: "Un steak frites, moyen", en: "A steak and fries, medium rare" },
            { fr: "La salade du chef", en: "Chef's salad" },
            { fr: "Un café noir", en: "A black coffee" },
            { fr: "La bière locale", en: "Local beer" },
            { fr: "La facture", en: "The bill (Quebec)" },
            { fr: "L'addition", en: "The bill (France)" },
            { fr: "Commander", en: "To order" },
            { fr: "Payer par carte", en: "To pay by card" }
        ],
        grammar: [
            {
                title: "L'Impératif (The Imperative Mood)",
                explanation: "<p>Used to give orders, requests, or directions. Formed using the present tense of tu, nous, or vous, but omitting the subject pronoun.</p><ul><li><strong>Tu form (Informal):</strong> <em>Prends</em> ce menu. (Take this menu.)</li><li><strong>Vous form (Formal):</strong> <em>Donnez</em>-moi un verre d'eau. (Give me a water glass.)</li><li><strong>Nous form (Let's):</strong> <em>Allons</em>-y ! (Let's go!)</li></ul>",
                examples: [
                    { fr: "Écoutez le serveur.", en: "Listen to the waiter." },
                    { fr: "Sois gentil.", en: "Be nice. (Irregular imperative of Être)" },
                    { fr: "Viens ici ! (Spoken Quebec)", en: "Come here!" },
                    { fr: "Fais pas ça ! (Spoken Quebec)", en: "Don't do that!" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Ordering Food",
                lines: [
                    { speaker: "Waiter", fr: "Vous êtes prêt à commander ?", en: "Are you ready to order?", align: "left" },
                    { speaker: "Customer", fr: "Oui, pour moi, je vais prendre une poutine, avec du fromage en grains.", en: "Yes, for me, I will take a poutine, with cheese curds.", align: "right" },
                    { speaker: "Waiter", fr: "Parfait, et pour vous, madame ?", en: "Perfect, and for you, ma'am?", align: "left" },
                    { speaker: "Wife", fr: "Moi, je vais prendre la salade du chef, et un verre de bière locale.", en: "Me, I'll take the chef's salad, and a glass of local beer.", align: "right" }
                ]
            },
            {
                context: "Paying the Bill",
                lines: [
                    { speaker: "Customer", fr: "L'addition, s'il vous plaît.", en: "The bill, please.", align: "right" },
                    { speaker: "Waiter", fr: "Voici la facture, ça fait 35 dollars.", en: "Here is the bill, it comes to 35 dollars. (Notice waitstaff prefers 'facture')", align: "left" },
                    { speaker: "Customer", fr: "Voilà, je paie par carte.", en: "Here, I'm paying by card.", align: "right" }
                ]
            }
        ],
        culture: "<p>A true Quebec Poutine relies exclusively on <em>'fromage en grains'</em> (fresh cheese curds that squeak when you bite them). Asking for grated cheese on a poutine is a massive culinary taboo.</p>"
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
                context: "Feeling Sick",
                lines: [
                    { speaker: "A", fr: "Salut ! Tu as l'air malade, ça va ?", en: "Hi! You look sick, are you okay?", align: "left" },
                    { speaker: "B", fr: "Non, ça va pas. J'ai mal à la tête, pis j'ai de la fièvre.", en: "No, not okay. I have a headache, and I have a fever.", align: "right" },
                    { speaker: "A", fr: "Tu as besoin de quelque chose ? Je veux t'acheter des médicaments ?", en: "Do you need anything? Like me to buy you medicine?", align: "left" },
                    { speaker: "B", fr: "Oui, ça serait gentil ! Je veux du Tylenol.", en: "Yes, that would be nice! I want Tylenol.", align: "right" }
                ]
            },
            {
                context: "Doctor's Appointment",
                lines: [
                    { speaker: "Doc", fr: "Qu'est-ce que vous avez ?", en: "What's wrong?", align: "left" },
                    { speaker: "Patient", fr: "J'ai mal à la gorge depuis 2 jours.", en: "My throat hurts for 2 days.", align: "right" },
                    { speaker: "Doc", fr: "C'est un rhume... Voici l'ordonnance pour les médicaments, et votre congé de maladie.", en: "It's a cold... Here is the prescription for meds, and your sick note.", align: "left" }
                ]
            }
        ],
        culture: "<p>When discussing pharmacies, the <strong>dépanneur</strong> usually sells basic Tylenol/Advil for fevers, but serious prescriptions require a true <em>pharmacie</em> (like Jean-Coutu or Pharmaprix).</p>"
    },
    {
        id: "10",
        title: "Directions et Orientation",
        theme: "Directions and Orientation",
        vocabulary: [
            { fr: "Tournez à gauche", en: "Turn left" },
            { fr: "Tournez à droite", en: "Turn right" },
            { fr: "Allez tout droit", en: "Go straight" },
            { fr: "La rue", en: "The street" },
            { fr: "Le feu de circulation", en: "The traffic light" },
            { fr: "En face de", en: "In front of" },
            { fr: "À pied", en: "On foot" },
            { fr: "Je me suis perdu(e)", en: "I got lost" },
            { fr: "La station de métro", en: "The subway station" }
        ],
        grammar: [
            {
                title: "Commanding Directions",
                explanation: "<p>Always use the polite <em>Vous</em> imperative form when giving directions to people on the street.</p>",
                examples: [
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
            },
            {
                context: "Sainte-Catherine Street",
                lines: [
                    { speaker: "Tourist", fr: "Où est la Rue Sainte-Catherine ?", en: "Where is Sainte-Catherine street?", align: "left" },
                    { speaker: "Local", fr: "C'est la rue de shopping. C'est 3 minutes à pied, c'est tout proche.", en: "It's the shopping street. It's a 3-minute walk, very close.", align: "right" }
                ]
            }
        ],
        culture: "<p>Montrealers mix Formal and Informal constantly. A local might start a sentence with formal 'Allez tout droit' (You go straight) and casually finish with 'pis tu tournes' (then you turn) in the same breath!</p>"
    }
];
