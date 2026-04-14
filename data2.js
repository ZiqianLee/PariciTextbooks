const episodes2 = [
    {
        id: "6",
        title: "Loisirs et Présent Continu",
        theme: "Hobbies and Present Continuous",
        vocabulary: [
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
            { fr: "jouer au golf", en: "to play golf" },
            { fr: "jouer aux jeux vidéo", en: "to play video games" },
            { fr: "regarder la télé", en: "to watch TV" },
            { fr: "écouter de la musique", en: "to listen to music" },
            { fr: "lire un livre", en: "to read a book" },
            { fr: "voyager", en: "to travel" },
            { fr: "danser", en: "to dance" },
            { fr: "chanter", en: "to sing" },
            { fr: "J'aime...", en: "I like..." },
            { fr: "J'adore...", en: "I love..." },
            { fr: "Je déteste...", en: "I hate..." },
            { fr: "Je préfère...", en: "I prefer..." },
            { fr: "Ça me tente...", en: "I feel like... / I'm interested in... (Quebec slang)" },
            { fr: "J'ai envie de...", en: "I want to..." },
            { fr: "Ça marche !", en: "That works! / Deal!" },
            { fr: "J'ai hâte !", en: "I can't wait!" },
            { fr: "mon char", en: "my car (Quebec slang for ma voiture)" }
        ],
        grammar: [
            {
                title: "Présent Continu (Present Continuous)",
                explanation: "<p>Used to describe an action <strong>happening right now</strong>. Structure: <strong>être en train de + infinitive verb</strong>.</p><p>All forms:</p><ul><li>je <strong>suis</strong> en train de...</li><li>tu <strong>es</strong> en train de...</li><li>il/elle <strong>est</strong> en train de...</li><li>nous <strong>sommes</strong> en train de...</li><li>vous <strong>êtes</strong> en train de...</li><li>ils/elles <strong>sont</strong> en train de...</li></ul><p><strong>When to use it:</strong></p><ul><li>Describing what someone is doing at this exact moment: <em>Je suis en train de manger.</em> (I am eating.)</li><li>Describing something happening over a recent period: <em>Je suis en train d'étudier le français.</em> (I am studying French.)</li></ul><p><strong>Contrast with Present Simple:</strong> The present simple describes habits, while the présent continu describes ongoing actions right now.</p><ul><li>Je mange à 12h. (I eat at noon — a habit.)</li><li>Je suis en train de manger. (I am eating — right now.)</li></ul>",
                examples: [
                    { fr: "Je suis en train de cuisiner.", en: "I am cooking." },
                    { fr: "Qu'est-ce que tu es en train de faire ?", en: "What are you doing right now?" },
                    { fr: "Ils sont en train de jouer au hockey.", en: "They are playing hockey." },
                    { fr: "Je suis en train de lire un livre sur le Québec.", en: "I am reading a book about Quebec." },
                    { fr: "Ma blonde est en train de faire la lessive.", en: "My girlfriend is doing the laundry." }
                ]
            },
            {
                title: "Expressing Preferences (Aimer, Adorer, Détester, Préférer)",
                explanation: "<p>These verbs express how much you like or dislike an activity, from strongest to weakest:</p><ul><li><strong>adorer</strong> — to love (strongest positive)</li><li><strong>aimer beaucoup</strong> — to like a lot</li><li><strong>aimer</strong> — to like</li><li><strong>aimer bien</strong> — to like (softer)</li><li><strong>préférer</strong> — to prefer</li><li><strong>ne pas aimer</strong> — to not like</li><li><strong>détester</strong> — to hate (strongest negative)</li></ul><p>Follow these verbs with an infinitive to talk about activities:</p>",
                examples: [
                    { fr: "J'adore faire du ski, c'est mon activité préférée en hiver.", en: "I love skiing, it's my favourite winter activity." },
                    { fr: "Je déteste faire le ménage, c'est trop ennuyeux.", en: "I hate housework, it's too boring." },
                    { fr: "Je préfère aller au cinéma que rester chez moi.", en: "I prefer going to the movies rather than staying home." },
                    { fr: "Ça me tente de faire du camping ce week-end.", en: "I feel like going camping this weekend." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Weekend Plans — Going Skiing",
                lines: [
                    { speaker: "A", fr: "Salut ! Qu'est-ce que tu es en train de faire ?", en: "Hi! What are you doing right now?", align: "left" },
                    { speaker: "B", fr: "Rien de spécial, je suis en train de regarder la télé.", en: "Nothing special, I am watching TV.", align: "right" },
                    { speaker: "A", fr: "Oh, tu veux sortir ? Ça me tente d'aller faire du ski à Mont-Tremblant ce week-end.", en: "Oh, you wanna go out? I feel like going skiing at Mont-Tremblant this weekend.", align: "left" },
                    { speaker: "B", fr: "Oh wow, ça marche ! J'adore le ski !", en: "Oh wow, deal! I love skiing!", align: "right" },
                    { speaker: "A", fr: "Parfait ! On part samedi matin, on prend mon char.", en: "Perfect! We leave Saturday morning, we'll take my car.", align: "left" },
                    { speaker: "B", fr: "D'accord, et on apporte de la poutine pour le lunch ?", en: "Okay, and we bring poutine for lunch?", align: "right" },
                    { speaker: "A", fr: "Oui, bien sûr ! C'est obligatoire !", en: "Yes, of course! It's mandatory!", align: "left" },
                    { speaker: "B", fr: "Haha, parfait ! J'ai hâte !", en: "Haha, perfect! I can't wait!", align: "right" }
                ]
            },
            {
                context: "Busy Afternoon",
                lines: [
                    { speaker: "A", fr: "Salut ! Tu es occupé ?", en: "Hi! Are you busy?", align: "left" },
                    { speaker: "B", fr: "Oui, je suis en train de faire la vaisselle, j'ai eu des amis hier soir.", en: "Yes, I am doing the dishes, I had friends over last night.", align: "right" },
                    { speaker: "A", fr: "Oh, d'accord, après ça, tu veux aller prendre un café ?", en: "Oh, okay, after that, do you want to go get a coffee?", align: "left" },
                    { speaker: "B", fr: "Oui, ça marche ! Je finis dans 10 minutes.", en: "Yes, deal! I'll be done in 10 minutes.", align: "right" },
                    { speaker: "A", fr: "Parfait, on se rencontre au café sur Saint-Laurent ?", en: "Perfect, shall we meet at the café on Saint-Laurent?", align: "left" },
                    { speaker: "B", fr: "D'accord, à tout à l'heure !", en: "Okay, see you soon!", align: "right" }
                ]
            }
        ],
        culture: "<p>In colloquial Quebecois, you might sometimes hear people drop 'en train de' and say <em>Je suis mangeant</em>. This is not standard French. Also note the highly Quebec-specific vocabulary: <em>mon char</em> for my car, <em>Ça me tente</em> for 'I feel like it', and <em>Ça marche</em> for 'Deal!' or 'That works!'</p>"
    },
    {
        id: "7",
        title: "Les Adjectifs et Leurs Accords",
        theme: "Adjectives and Agreements",
        vocabulary: [
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
            { fr: "ben", en: "very (Quebec slang for très)", note: "Il est ben gentil = He is very nice." },
            { fr: "trop", en: "too / so very" },
            { fr: "super", en: "super / very" }
        ],
        grammar: [
            {
                title: "Adjective Gender Agreements",
                explanation: "<p>In French, adjectives must <strong>agree</strong> with the gender (masculine/feminine) and number (singular/plural) of the noun they describe.</p><p><strong>Basic rule:</strong> Add <strong>-e</strong> for feminine. Add <strong>-s</strong> for plural.</p><ul><li>un garçon intelligent → une fille intelligent<strong>e</strong></li><li>des garçons intelligent<strong>s</strong> → des filles intelligent<strong>es</strong></li></ul><p><strong>Special/Irregular changes:</strong></p><ul><li><strong>-eux → -euse:</strong> généreux → généreuse, sérieux → sérieuse</li><li><strong>-er → -ère:</strong> premier → première</li><li><strong>Irregular:</strong> beau → belle, vieux → vieille, nouveau → nouvelle</li></ul><p><strong>Adjectives that never change</strong> (same for all genders): sympathique, timide, calme, drôle, triste, dynamique</p>",
                examples: [
                    { fr: "gentil → gentille", en: "kind (m) → kind (f)" },
                    { fr: "intelligent → intelligente", en: "smart (m) → smart (f)" },
                    { fr: "généreux → généreuse", en: "generous (m) → generous (f)" },
                    { fr: "beau → belle", en: "handsome → beautiful (irregular)" },
                    { fr: "vieux → vieille", en: "old (m) → old (f) (irregular)" },
                    { fr: "Mon chum est très gentil, il est toujours prêt à aider.", en: "My boyfriend is very kind, he's always ready to help." },
                    { fr: "Ma blonde est intelligente, elle parle 3 langues.", en: "My girlfriend is smart, she speaks 3 languages." },
                    { fr: "Il est ben drôle, il fait toujours rire tout le monde.", en: "He is very funny, he always makes everyone laugh." }
                ]
            },
            {
                title: "Plural Adjectives",
                explanation: "<p>To make an adjective plural, add <strong>-s</strong> (or -es for feminine plural):</p><ul><li>gentil → gentil<strong>s</strong> (masculine plural)</li><li>gentille → gentille<strong>s</strong> (feminine plural)</li><li>sympathique → sympathique<strong>s</strong> (all genders plural)</li></ul>",
                examples: [
                    { fr: "Ils sont sympathiques.", en: "They are friendly." },
                    { fr: "Elles sont intelligentes.", en: "They (f) are smart." }
                ]
            },
            {
                title: "Adjective Placement (Before or After the Noun?)",
                explanation: "<p>Most adjectives go <strong>AFTER</strong> the noun. However, a small group of very common, short adjectives usually go <strong>BEFORE</strong> the noun. A helpful trick is the acronym <strong>BAGS</strong>:</p><ul><li><strong>B</strong>eauty: beau/belle, joli</li><li><strong>A</strong>ge: jeune, vieux/vieille, nouveau/nouvelle</li><li><strong>G</strong>oodness: bon/bonne, mauvais</li><li><strong>S</strong>ize: grand, petit, gros</li></ul>",
                examples: [
                    { fr: "un beau garçon", en: "a handsome boy (beau comes before)" },
                    { fr: "une petite fille", en: "a little girl (petit comes before)" },
                    { fr: "un homme intelligent", en: "an intelligent man (intelligent comes after)" },
                    { fr: "Je suis content, j'ai reçu mon RAMQ aujourd'hui !", en: "I am happy, I received my RAMQ card today!" },
                    { fr: "Le nouveau professeur est super sympa.", en: "The new teacher is super nice." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Introducing a New Friend",
                lines: [
                    { speaker: "A", fr: "Salut ! Je te présente, c'est mon ami, Jean.", en: "Hi! I introduce you, this is my friend, Jean.", align: "left" },
                    { speaker: "B", fr: "Salut Jean ! Enchantée ! Je m'appelle Marie.", en: "Hi Jean! Pleased to meet you! My name is Marie.", align: "right" },
                    { speaker: "A", fr: "Jean est super sympa, il est ben drôle, tu vas l'aimer.", en: "Jean is super nice, he is very funny, you'll like him.", align: "left" },
                    { speaker: "B", fr: "Oh, c'est cool ! Tu es d'où, Jean ?", en: "Oh, that's cool! Where are you from, Jean?", align: "right" },
                    { speaker: "Jean", fr: "Je suis de Québec, mais j'habite à Montréal depuis 1 an.", en: "I'm from Quebec City, but I've lived in Montreal for 1 year.", align: "left" },
                    { speaker: "B", fr: "Bienvenue ! Si tu as besoin de quoi que ce soit, n'hésite pas !", en: "Welcome! If you need anything at all, don't hesitate!", align: "right" }
                ]
            },
            {
                context: "Describing a Colleague",
                lines: [
                    { speaker: "A", fr: "Tu connais le nouveau comptable ?", en: "Do you know the new accountant?", align: "left" },
                    { speaker: "B", fr: "Oui, il est ben gentil, il est très patient.", en: "Yes, he's very nice, he's very patient.", align: "right" },
                    { speaker: "A", fr: "Ah, c'est bon, parce que l'ancien était trop stressant.", en: "Ah, that's good, because the previous one was too stressful.", align: "left" },
                    { speaker: "B", fr: "Oui, c'est vrai ! L'ancien était toujours en colère.", en: "Yes, that's true! The previous one was always angry.", align: "right" },
                    { speaker: "A", fr: "Mais le nouveau est super, il est toujours content.", en: "But the new one is great, he's always happy.", align: "left" }
                ]
            }
        ],
        culture: "<p>The word <strong>'Ben'</strong> (slang for 'Bien') is a fundamental part of spoken Quebecois. Used extensively as an intensifier: <em>Il est ben drôle !</em> (He is very funny!) or <em>C'est ben bon !</em> (It is really good!) Also note: <em>mon chum</em> = my boyfriend, <em>ma blonde</em> = my girlfriend — very common Quebec expressions.</p>"
    },
    {
        id: "8",
        title: "Restaurant et L'Impératif",
        theme: "Restaurant and the Imperative Mood",
        vocabulary: [
            { fr: "le restaurant", en: "the restaurant" },
            { fr: "le menu / la carte", en: "the menu" },
            { fr: "le serveur", en: "the male waiter" },
            { fr: "la serveuse", en: "the female waitress" },
            { fr: "la table", en: "the table" },
            { fr: "l'assiette", en: "the plate" },
            { fr: "le verre", en: "the glass" },
            { fr: "la fourchette", en: "the fork" },
            { fr: "le couteau", en: "the knife" },
            { fr: "la cuillère", en: "the spoon" },
            { fr: "la serviette", en: "the napkin" },
            { fr: "la facture", en: "the bill (Quebec term)" },
            { fr: "l'addition", en: "the bill (France term)" },
            { fr: "le pourboire", en: "the tip", note: "15% is the cultural minimum in Quebec restaurants!" },
            { fr: "réserver une table", en: "to reserve / book a table" },
            { fr: "commander", en: "to order" },
            { fr: "payer", en: "to pay" },
            { fr: "l'entrée", en: "the appetizer / starter" },
            { fr: "la soupe", en: "the soup" },
            { fr: "la salade", en: "the salad" },
            { fr: "le plat principal", en: "the main course" },
            { fr: "le steak frites", en: "steak and fries" },
            { fr: "le poulet rôti", en: "roast chicken" },
            { fr: "le poisson", en: "fish" },
            { fr: "les pâtes", en: "pasta" },
            { fr: "la poutine", en: "poutine (fries + cheese curds + gravy)" },
            { fr: "le fromage en grains", en: "cheese curds", note: "Must squeak when you bite! That's how you know it's fresh." },
            { fr: "la tourtière", en: "meat pie (traditional Quebec dish)" },
            { fr: "le dessert", en: "dessert" },
            { fr: "la crème glacée", en: "ice cream" },
            { fr: "le café", en: "coffee" },
            { fr: "le thé", en: "tea" },
            { fr: "la bière", en: "beer" },
            { fr: "le vin", en: "wine" },
            { fr: "Je vais prendre...", en: "I will take... (most common Quebec way to order)" },
            { fr: "Pour moi, ce sera...", en: "For me, it will be... (formal)" },
            { fr: "Avez-vous des menus en anglais ?", en: "Do you have menus in English?" },
            { fr: "Qu'est-ce que vous recommandez ?", en: "What do you recommend?" },
            { fr: "L'addition, s'il vous plaît.", en: "The bill, please." },
            { fr: "Je paie par carte.", en: "I am paying by card." },
            { fr: "Je paie en cash.", en: "I am paying in cash." }
        ],
        grammar: [
            {
                title: "L'Impératif (The Imperative Mood)",
                explanation: "<p>The imperative is used to give <strong>commands, instructions, or requests</strong>. It has three forms: <strong>tu</strong> (informal), <strong>vous</strong> (formal/plural), <strong>nous</strong> (let's).</p><p><strong>How to form it:</strong> Take the present tense conjugation and drop the subject pronoun. For <em>-er</em> verbs in the <em>tu</em> form, also drop the final <em>-s</em>: <em>tu parles → Parle !</em></p>",
                examples: [
                    { fr: "Prends ce menu. (tu)", en: "Take this menu. (informal)" },
                    { fr: "Donnez-moi la facture, s'il vous plaît. (vous)", en: "Give me the bill, please. (formal)" },
                    { fr: "Allons-y ! (nous)", en: "Let's go!" },
                    { fr: "Écoutez le serveur, il va expliquer le menu.", en: "Listen to the waiter, he will explain the menu." },
                    { fr: "Sois gentil avec le nouveau serveur, c'est son premier jour.", en: "Be nice with the new waiter, it's his first day." }
                ]
            },
            {
                title: "Imperative Conjugation Table",
                explanation: "<p>Common verbs in the imperative. Remember: for <em>-er</em> verbs, the <em>tu</em> form drops the final <em>-s</em>!</p><table style='width:100%;border-collapse:collapse;margin-top:1rem;font-size:0.9em;'><tr style='background:rgba(255,255,255,0.15);'><th style='padding:0.5rem;text-align:left;border:1px solid rgba(255,255,255,0.2);'>Verb</th><th style='padding:0.5rem;border:1px solid rgba(255,255,255,0.2);'>tu (informal)</th><th style='padding:0.5rem;border:1px solid rgba(255,255,255,0.2);'>vous (formal)</th><th style='padding:0.5rem;border:1px solid rgba(255,255,255,0.2);'>nous (let's)</th><th style='padding:0.5rem;border:1px solid rgba(255,255,255,0.2);'>Meaning</th></tr><tr><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>donner</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>donne !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>donnez !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>donnons !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>give</td></tr><tr style='background:rgba(255,255,255,0.05);'><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>parler</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>parle !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>parlez !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>parlons !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>speak</td></tr><tr><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>prendre</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>prends !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>prenez !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>prenons !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>take/order</td></tr><tr style='background:rgba(255,255,255,0.05);'><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>faire</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>fais !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>faites !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>faisons !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>do/make</td></tr><tr><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>aller</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>va !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>allez !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>allons !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>go</td></tr><tr style='background:rgba(255,255,255,0.05);'><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>être</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>sois !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>soyez !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>soyons !</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>be</td></tr></table>",
                examples: [
                    { fr: "Viens ici !", en: "Come here!" },
                    { fr: "Fais pas ça !", en: "Don't do that!" },
                    { fr: "Allons-y !", en: "Let's go!" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Ordering at a Restaurant (Local Quebeckers)",
                lines: [
                    { speaker: "Customer", fr: "Salut ! On a réservé une table pour deux, au nom de Tremblay.", en: "Hi! We reserved a table for two, under the name Tremblay.", align: "left" },
                    { speaker: "Host", fr: "Bonjour ! Oui, la table est prête, suivez-moi, s'il vous plaît.", en: "Hello! Yes, the table is ready, follow me, please.", align: "right" },
                    { speaker: "Host", fr: "Voici le menu, vous avez le temps de regarder.", en: "Here is the menu, take your time to look.", align: "right" },
                    { speaker: "Waiter", fr: "Vous êtes prêt à commander ?", en: "Are you ready to order?", align: "right" },
                    { speaker: "Customer A", fr: "Oui, pour moi, je vais prendre une poutine, avec du fromage en grains.", en: "Yes, for me, I will take a poutine, with cheese curds.", align: "left" },
                    { speaker: "Waiter", fr: "Parfait, et pour vous, madame ?", en: "Perfect, and for you, ma'am?", align: "right" },
                    { speaker: "Customer B", fr: "Moi, je vais prendre la salade du chef, et un verre de bière locale.", en: "Me, I will take the chef's salad, and a glass of local beer.", align: "left" },
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
                    { speaker: "B", fr: "D'accord, je vais prendre ça, alors.", en: "Okay, I will take that, then.", align: "right" },
                    { speaker: "A", fr: "Parfait, et on prend une bière avec ça ?", en: "Perfect, and shall we get a beer with that?", align: "left" },
                    { speaker: "B", fr: "Oui, ça marche !", en: "Yes, deal!", align: "right" }
                ]
            }
        ],
        culture: "<p>A true Quebec Poutine relies exclusively on <em>'fromage en grains'</em> (fresh cheese curds that squeak when you bite them). Quebeckers always tip at least 15% at sit-down restaurants — this is a firm cultural expectation. In Quebec, the bill is called <em>la facture</em>, not <em>l'addition</em> like in France.</p>"
    },
    {
        id: "9",
        title: "Le Corps et La Santé",
        theme: "The Body and Health",
        vocabulary: [
            { fr: "la tête", en: "head" },
            { fr: "le front", en: "forehead" },
            { fr: "les yeux", en: "eyes" },
            { fr: "le nez", en: "nose" },
            { fr: "la bouche", en: "mouth" },
            { fr: "les dents", en: "teeth" },
            { fr: "la langue", en: "tongue" },
            { fr: "les oreilles", en: "ears" },
            { fr: "le cou", en: "neck" },
            { fr: "l'épaule", en: "shoulder" },
            { fr: "le bras", en: "arm" },
            { fr: "le coude", en: "elbow" },
            { fr: "la main", en: "hand" },
            { fr: "le doigt", en: "finger" },
            { fr: "le poignet", en: "wrist" },
            { fr: "la poitrine", en: "chest" },
            { fr: "le dos", en: "back" },
            { fr: "le ventre", en: "stomach / belly" },
            { fr: "la hanche", en: "hip" },
            { fr: "la jambe", en: "leg" },
            { fr: "le genou", en: "knee" },
            { fr: "la cheville", en: "ankle" },
            { fr: "le pied", en: "foot" },
            { fr: "l'orteil", en: "toe" },
            { fr: "malade", en: "sick" },
            { fr: "en santé", en: "healthy" },
            { fr: "avoir mal à...", en: "to have pain in... / to hurt" },
            { fr: "avoir de la fièvre", en: "to have a fever" },
            { fr: "avoir de la toux", en: "to have a cough" },
            { fr: "avoir un rhume", en: "to have a cold" },
            { fr: "avoir la grippe", en: "to have the flu" },
            { fr: "avoir des nausées", en: "to feel nauseous" },
            { fr: "être allergique à...", en: "to be allergic to..." },
            { fr: "prendre des médicaments", en: "to take medication" },
            { fr: "rester chez soi", en: "to stay home" },
            { fr: "aller voir le docteur", en: "to go see the doctor" },
            { fr: "la clinique", en: "the clinic" },
            { fr: "le rendez-vous", en: "the appointment" },
            { fr: "la RAMQ", en: "Quebec public health insurance", note: "All Quebec residents can apply — doctor visits are free!" },
            { fr: "la carte d'assurance maladie", en: "the health insurance card" },
            { fr: "le médecin de famille", en: "the family doctor" },
            { fr: "la clinique sans rendez-vous", en: "the walk-in clinic", note: "No appointment needed — go here if your family doctor is unavailable." },
            { fr: "l'ordonnance", en: "the prescription" },
            { fr: "le congé de maladie", en: "the sick note / sick leave" },
            { fr: "le dépanneur", en: "the corner store / convenience store" }
        ],
        grammar: [
            {
                title: "Avoir mal à (To have pain in...)",
                explanation: "<p>Use <strong>avoir mal à</strong> + body part to say a part of your body hurts. The preposition <em>à</em> contracts with the definite article:</p><ul><li><em>à</em> + <strong>le</strong> = <strong>au</strong> → J'ai mal <em>au</em> ventre. (Stomach hurts.)</li><li><em>à</em> + <strong>la</strong> = <strong>à la</strong> → J'ai mal <em>à la</em> tête. (Head hurts.)</li><li><em>à</em> + <strong>l'</strong> = <strong>à l'</strong> → J'ai mal <em>à l'</em>épaule. (Shoulder hurts.)</li><li><em>à</em> + <strong>les</strong> = <strong>aux</strong> → J'ai mal <em>aux</em> dents. (Teeth hurt.)</li></ul><p><strong>Common mistake:</strong> Never say 'avoir mal à le ventre' — you MUST contract to 'au'.</p>",
                examples: [
                    { fr: "J'ai mal à la tête, je pense que j'ai de la fièvre.", en: "I have a headache, I think I have a fever." },
                    { fr: "J'ai mal au ventre, j'ai mangé trop de poutine hier.", en: "My stomach hurts, I ate too much poutine yesterday." },
                    { fr: "J'ai mal à la gorge depuis 2 jours.", en: "My throat has been hurting for 2 days." },
                    { fr: "J'ai mal aux dents, je dois aller chez le dentiste.", en: "My teeth hurt, I need to go to the dentist." },
                    { fr: "Je suis allergique aux arachides, il faut faire attention.", en: "I am allergic to peanuts, be careful." }
                ]
            },
            {
                title: "Expressing Health States with Avoir and Être",
                explanation: "<p>Two main verbs to describe health:</p><ul><li><strong>avoir + de la/du/des</strong> + illness noun: J'ai de la fièvre. / J'ai un rhume. / J'ai de la toux.</li><li><strong>être + adjective</strong>: Je suis malade. / Je suis en santé. / Je suis fatigué(e).</li></ul>",
                examples: [
                    { fr: "J'ai un rhume, j'ai de la toux depuis 3 jours.", en: "I have a cold, I've had a cough for 3 days." },
                    { fr: "J'ai pris rendez-vous avec mon médecin de famille pour demain.", en: "I made an appointment with my family doctor for tomorrow." }
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
        culture: "<p>In Quebec, the public health system (RAMQ) covers all medical appointments — you pay nothing at the doctor with your <em>carte d'assurance maladie</em>. If your family doctor is unavailable, go to a <em>clinique sans rendez-vous</em> (walk-in clinic). For minor ailments like a headache, a <em>dépanneur</em> (corner store) sells basic medicine like Tylenol.</p>"
    },
    {
        id: "10",
        title: "Directions et Orientation",
        theme: "Directions and Orientation",
        vocabulary: [
            { fr: "à gauche", en: "left" },
            { fr: "à droite", en: "right" },
            { fr: "tout droit", en: "straight ahead" },
            { fr: "en face de", en: "in front of / across from" },
            { fr: "à côté de", en: "next to" },
            { fr: "près de", en: "near to" },
            { fr: "loin de", en: "far from" },
            { fr: "au coin de", en: "at the corner of" },
            { fr: "au bout de", en: "at the end of" },
            { fr: "avant", en: "before" },
            { fr: "après", en: "after" },
            { fr: "en haut", en: "up / upstairs" },
            { fr: "en bas", en: "down / downstairs" },
            { fr: "la rue", en: "the street" },
            { fr: "l'avenue", en: "the avenue" },
            { fr: "le boulevard", en: "the boulevard" },
            { fr: "le carrefour", en: "the intersection" },
            { fr: "le feu de circulation", en: "the traffic light" },
            { fr: "le panneau", en: "the street sign" },
            { fr: "le métro", en: "the subway", note: "Montreal's metro has no cell signal underground — this surprises many newcomers!" },
            { fr: "la station de métro", en: "the subway station" },
            { fr: "l'arrêt d'autobus", en: "the bus stop" },
            { fr: "le parc", en: "the park" },
            { fr: "le musée", en: "the museum" },
            { fr: "l'hôpital", en: "the hospital" },
            { fr: "la gare", en: "the train station" },
            { fr: "l'aéroport", en: "the airport" },
            { fr: "le Vieux-Montréal", en: "Old Montreal" },
            { fr: "la Rue Saint-Laurent", en: "Saint-Laurent Street", note: "Divides the city between East and West." },
            { fr: "la Rue Sainte-Catherine", en: "Sainte-Catherine Street", note: "Montreal's main shopping street." },
            { fr: "Pardon, madame/monsieur, où est... ?", en: "Excuse me ma'am/sir, where is...?" },
            { fr: "Comment aller à... ?", en: "How do I get to...?" },
            { fr: "C'est loin ?", en: "Is it far?" },
            { fr: "C'est proche ?", en: "Is it nearby?" },
            { fr: "C'est combien de minutes à pied ?", en: "How many minutes on foot?" },
            { fr: "Je me suis perdu(e).", en: "I am lost." },
            { fr: "Tu ne peux pas le rater.", en: "You can't miss it." }
        ],
        grammar: [
            {
                title: "Asking for Directions",
                explanation: "<p>Common questions to use when you are lost:</p><ul><li><em>Pardon, madame/monsieur, où est... ?</em> (Excuse me, where is...?)</li><li><em>Comment aller à... ?</em> (How do I get to...?)</li><li><em>C'est loin ?</em> (Is it far?)</li><li><em>C'est proche ?</em> (Is it nearby?)</li><li><em>C'est combien de minutes à pied ?</em> (How many minutes on foot?)</li><li><em>Je me suis perdu(e).</em> (I am lost.)</li><li><em>Pouvez-vous m'aider ?</em> (Can you help me? — formal)</li><li><em>Est-ce qu'il y a un métro près d'ici ?</em> (Is there a subway near here?)</li></ul>",
                examples: [
                    { fr: "Pardon, madame, où est la station de métro ?", en: "Excuse me ma'am, where is the subway station?" },
                    { fr: "Je me suis perdu. Comment aller au Vieux-Montréal ?", en: "I am lost. How do I get to Old Montreal?" },
                    { fr: "C'est combien de minutes à pied ?", en: "How many minutes is it on foot?" }
                ]
            },
            {
                title: "Giving Directions with L'Impératif",
                explanation: "<p>When giving directions to a stranger, use the formal <strong>vous</strong> imperative. With friends, use the <strong>tu</strong> form. Key direction verbs:</p><ul><li><strong>Tournez / Tourne</strong> à gauche / à droite. (Turn left/right.)</li><li><strong>Allez / Va</strong> tout droit. (Go straight ahead.)</li><li><strong>Prenez / Prends</strong> la première / deuxième rue. (Take the first/second street.)</li><li><strong>Continuez / Continue</strong> jusqu'au feu. (Continue to the traffic light.)</li><li><strong>Descendez / Descends</strong> tout droit. (Go straight down.)</li></ul><p><strong>Note:</strong> In Quebec, people very naturally mix formal and informal mid-conversation!</p>",
                examples: [
                    { fr: "Allez tout droit, jusqu'au feu de circulation.", en: "Go straight ahead, up to the traffic light." },
                    { fr: "Prenez la première rue à droite.", en: "Take the first street on the right." },
                    { fr: "C'est en face du parc, tu ne peux pas le rater.", en: "It's across from the park, you can't miss it." },
                    { fr: "C'est 10 minutes à pied, c'est pas loin.", en: "It's 10 minutes walking, it's not far." },
                    { fr: "Pour aller au Vieux-Montréal, tu prends le métro orange, jusqu'à la station Champs-de-Mars.", en: "To go to Old Montreal, take the orange line to Champs-de-Mars station." }
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
        culture: "<p>Montreal's metro system (STM) is famous for having <strong>no cell phone signal underground</strong> — this shocks many newcomers! The city is divided along the Rue Saint-Laurent (Saint-Laurent Street): addresses to the East (Est) and West (Ouest) are both counted from this street. The metro has 4 coloured lines: orange, green, blue, and yellow.</p>"
    }
];
