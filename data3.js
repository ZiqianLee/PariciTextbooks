const episodes3 = [
    {
        id: "11",
        title: "Activités Passées",
        theme: "Past Activities (Passé Composé)",
        vocabulary: [
            // Time words for the past
            { fr: "hier", en: "yesterday" },
            { fr: "avant-hier", en: "the day before yesterday" },
            { fr: "hier soir", en: "last night" },
            { fr: "ce matin", en: "this morning" },
            { fr: "ce week-end", en: "this weekend" },
            { fr: "la semaine dernière", en: "last week" },
            { fr: "le mois dernier", en: "last month" },
            { fr: "l'année dernière", en: "last year" },
            { fr: "il y a 3 jours", en: "3 days ago" },
            { fr: "il y a une semaine", en: "a week ago" },
            { fr: "il y a un mois", en: "a month ago" },
            // Past activity phrases
            { fr: "j'ai travaillé", en: "I worked" },
            { fr: "j'ai étudié", en: "I studied" },
            { fr: "j'ai mangé", en: "I ate" },
            { fr: "j'ai bu", en: "I drank" },
            { fr: "j'ai dormi", en: "I slept" },
            { fr: "j'ai parlé", en: "I spoke" },
            { fr: "j'ai regardé la télé", en: "I watched TV" },
            { fr: "j'ai lu un livre", en: "I read a book" },
            { fr: "j'ai écrit un email", en: "I wrote an email" },
            { fr: "j'ai fait le ménage", en: "I did the housework" },
            { fr: "j'ai fait les courses", en: "I went shopping" },
            { fr: "j'ai été au cinéma", en: "I went to the movies" },
            { fr: "j'ai été au restaurant", en: "I went to the restaurant" },
            { fr: "j'ai été faire du ski", en: "I went skiing" },
            { fr: "j'ai été faire du camping", en: "I went camping" },
            { fr: "j'ai joué au hockey", en: "I played hockey" },
            { fr: "j'ai visité le Vieux-Montréal", en: "I visited Old Montreal" },
            { fr: "j'ai rencontré des amis", en: "I met some friends" },
            // Quebec slang for past
            { fr: "J'ai eu du fun.", en: "I had fun. (Standard: Je me suis amusé.)" },
            { fr: "Ça été le fun.", en: "It was fun. (Standard: C'était amusant.)" },
            { fr: "Hier, j'ai ben aimé.", en: "Yesterday, I really liked it. (Standard: j'ai beaucoup aimé.)" },
            { fr: "Pis, après ça...", en: "Then, after that... (Standard: Et, après ça...)" }
        ],
        grammar: [
            {
                title: "Passé Composé (The Past Tense)",
                explanation: "<p>The <em>passé composé</em> is used to describe completed past actions — what you did yesterday, last week, etc. It is the most important past tense at the A1 level.</p><p><strong>Structure: Auxiliary verb (Avoir or Être) + Past Participle</strong></p><p>Most verbs use <strong>avoir</strong> as the auxiliary. A small number of movement/state-change verbs use <strong>être</strong>.</p>",
                examples: [
                    { fr: "Qu'est-ce que tu as fait hier ?", en: "What did you do yesterday?" },
                    { fr: "J'ai travaillé toute la journée.", en: "I worked all day." },
                    { fr: "Hier, j'ai mangé de la poutine pour la première fois.", en: "Yesterday, I ate poutine for the first time." },
                    { fr: "J'ai rencontré mon chum au parc hier soir.", en: "I met my boyfriend at the park last night." },
                    { fr: "Ce matin, j'ai fait les courses au dépanneur.", en: "This morning, I went shopping at the corner store." }
                ]
            },
            {
                title: "Conjugating with Avoir",
                explanation: "<p>The auxiliary <strong>avoir</strong> is conjugated in the present tense, followed by the past participle:</p><ul><li>j'ai + past participle</li><li>tu as + past participle</li><li>il/elle a + past participle</li><li>nous avons + past participle</li><li>vous avez + past participle</li><li>ils/elles ont + past participle</li></ul>",
                examples: [
                    { fr: "J'ai parlé français.", en: "I spoke French." },
                    { fr: "Tu as mangé ?", en: "Did you eat?" },
                    { fr: "Nous avons été faire du ski à Mont-Tremblant.", en: "We went skiing at Mont-Tremblant." }
                ]
            },
            {
                title: "Regular Past Participles",
                explanation: "<p>For most verbs, the past participle is formed by adding <strong>-é</strong> to the stem:</p><ul><li>parler → parlé</li><li>manger → mangé</li><li>travailler → travaillé</li><li>étudier → étudié</li><li>regarder → regardé</li></ul>",
                examples: []
            },
            {
                title: "Irregular Past Participles",
                explanation: "<p>Some common verbs have irregular past participles that must be memorized:</p><ul><li>faire → <strong>fait</strong></li><li>avoir → <strong>eu</strong></li><li>être → <strong>été</strong></li><li>prendre → <strong>pris</strong></li><li>boire → <strong>bu</strong></li><li>lire → <strong>lu</strong></li><li>écrire → <strong>écrit</strong></li></ul>",
                examples: []
            },
            {
                title: "Verbs that Use Être",
                explanation: "<p>About 16 verbs of <strong>movement or state change</strong> use <strong>être</strong> as the auxiliary instead of avoir. The past participle must agree with the subject's gender:</p><ul><li>aller → allé (Je suis allé / Je suis all<strong>ée</strong>)</li><li>venir → venu</li><li>sortir → sorti</li><li>entrer → entré</li><li>arriver → arrivé</li><li>partir → parti</li><li>monter → monté</li><li>descendre → descendu</li><li>rester → resté</li><li>retourner → retourné</li></ul><p><strong>Tip:</strong> If the verb means 'go, come, leave, arrive, stay' — use être. Everything else uses avoir.</p>",
                examples: [
                    { fr: "Je suis allé au cinéma. (male speaker)", en: "I went to the movies." },
                    { fr: "Je suis allée au cinéma. (female speaker)", en: "I went to the movies." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Weekend Recap with a Colleague",
                lines: [
                    { speaker: "A", fr: "Salut ! Qu'est-ce que tu as fait ce week-end ?", en: "Hi! What did you do this weekend?", align: "left" },
                    { speaker: "B", fr: "Oh, j'ai été faire du ski avec des amis !", en: "Oh, I went skiing with some friends!", align: "right" },
                    { speaker: "A", fr: "Wow, c'est super ! Il a fait beau ?", en: "Wow, that's great! Was the weather nice?", align: "left" },
                    { speaker: "B", fr: "Oui, il a fait super beau, c'était pas trop froid.", en: "Yes, the weather was super nice, it wasn't too cold.", align: "right" },
                    { speaker: "A", fr: "Tu as eu du fun ?", en: "Did you have fun?", align: "left" },
                    { speaker: "B", fr: "Ben oui ! Ça été le fun ! On a mangé de la poutine au restaurant sur la montagne.", en: "Oh yes! It was fun! We ate poutine at the restaurant on the mountain.", align: "right" },
                    { speaker: "A", fr: "Oh, parfait ! Moi, ce week-end, j'ai été au camping avec ma blonde.", en: "Oh, perfect! Me, this weekend, I went camping with my girlfriend.", align: "left" },
                    { speaker: "B", fr: "Oh, c'est cool aussi ! Tu as aimé ?", en: "Oh, that's cool too! Did you like it?", align: "right" },
                    { speaker: "A", fr: "Oui, on a fait du feu, on a bu de la bière, c'était ben bon.", en: "Yes, we made a fire, drank some beer, it was really good.", align: "left" },
                    { speaker: "B", fr: "Wow, ça a l'air super !", en: "Wow, sounds great!", align: "right" }
                ]
            },
            {
                context: "What Did You Do Yesterday?",
                lines: [
                    { speaker: "A", fr: "Salut ! Tu as été au travail hier ?", en: "Hi! Did you go to work yesterday?", align: "left" },
                    { speaker: "B", fr: "Non, j'étais malade, j'ai resté chez moi.", en: "No, I was sick, I stayed home.", align: "right" },
                    { speaker: "A", fr: "Oh non, tu vas mieux maintenant ?", en: "Oh no, are you better now?", align: "left" },
                    { speaker: "B", fr: "Oui, ça va mieux, j'ai dormi toute la journée.", en: "Yes, better, I slept all day.", align: "right" },
                    { speaker: "A", fr: "Parfait, tu as mangé quelque chose ?", en: "Perfect, did you eat anything?", align: "left" },
                    { speaker: "B", fr: "Oui, j'ai mangé de la soupe aux pois, c'était bon.", en: "Yes, I ate pea soup, it was good.", align: "right" },
                    { speaker: "A", fr: "D'accord, si tu as besoin de quelque chose, n'hésite pas.", en: "Okay, if you need anything, don't hesitate.", align: "left" },
                    { speaker: "B", fr: "Merci, t'es ben gentil !", en: "Thanks, you are very nice!", align: "right" }
                ]
            }
        ],
        culture: "<p>Colloquial grammar: Quebeckers frequently say <em>J'ai été</em> instead of <em>Je suis allé</em> (I went) in everyday speech. They also say <em>J'ai resté</em> instead of <em>Je suis resté</em>. You'll also hear <em>J'ai eu du fun</em> (I had fun) and <em>Ça été le fun</em> (It was fun) constantly.</p>"
    },
    {
        id: "13",
        title: "Logement et Appartement",
        theme: "Housing and Renting",
        vocabulary: [
            { fr: "le logement", en: "the dwelling / housing" },
            { fr: "l'appartement", en: "the apartment" },
            { fr: "la maison", en: "the house" },
            { fr: "la chambre", en: "the bedroom" },
            { fr: "le salon", en: "the living room" },
            { fr: "la cuisine", en: "the kitchen" },
            { fr: "la salle de bain", en: "the bathroom" },
            { fr: "la toilette", en: "the toilet" },
            { fr: "le balcon", en: "the balcony" },
            { fr: "le sous-sol", en: "the basement", note: "Basement apartments are very common and cheap in Quebec" },
            { fr: "le stationnement", en: "the parking space" },
            { fr: "la buanderie", en: "the laundry room" },
            { fr: "le chauffage", en: "the heating", note: "Vital in Quebec winters! Often included in rent." },
            { fr: "l'air climatisé", en: "the air conditioning" },
            { fr: "le wifi", en: "WiFi" },
            { fr: "l'électricité", en: "electricity" },
            { fr: "l'eau", en: "water" },
            { fr: "meublé", en: "furnished" },
            { fr: "non meublé", en: "unfurnished", note: "Most Quebec apartments are completely unfurnished." },
            { fr: "les animaux acceptés", en: "pets allowed" },
            { fr: "le loyer", en: "the rent" },
            { fr: "par mois", en: "per month" },
            { fr: "la caution", en: "the safety deposit", note: "Usually one month's rent, returned when you move out." },
            { fr: "le bail", en: "the lease", note: "Leases in Quebec are almost always 1 year long." },
            { fr: "le propriétaire", en: "the landlord" },
            { fr: "le locataire", en: "the tenant" },
            { fr: "chercher un appartement", en: "to look for an apartment" },
            { fr: "visiter l'appartement", en: "to visit the apartment" },
            { fr: "signer le bail", en: "to sign the lease" },
            { fr: "payer le loyer", en: "to pay the rent" },
            { fr: "déménager", en: "to move out / move in" },
            // Common expressions for apartment hunting
            { fr: "Je cherche un appartement.", en: "I am looking for an apartment." },
            { fr: "Je cherche une chambre.", en: "I am looking for a room." },
            { fr: "Quel est le loyer ?", en: "What is the rent?" },
            { fr: "Est-ce que le chauffage est inclus ?", en: "Is heating included?" },
            { fr: "Est-ce que le stationnement est inclus ?", en: "Is parking included?" },
            { fr: "Est-ce que les animaux sont acceptés ?", en: "Are pets allowed?" },
            { fr: "C'est meublé ou non meublé ?", en: "Is it furnished or unfurnished?" },
            { fr: "C'est combien la caution ?", en: "How much is the deposit?" },
            { fr: "Le bail est pour combien de temps ?", en: "How long is the lease?" },
            { fr: "C'est trop cher pour moi.", en: "It is too expensive for me." },
            { fr: "Ça m'intéresse, je veux visiter.", en: "I'm interested, I want to visit." }
        ],
        grammar: [
            {
                title: "Avoir besoin de (I need...)",
                explanation: "<p>Used constantly to express needs. Structure: <strong>avoir besoin de</strong> + noun or verb.</p><p><strong>Elision rule:</strong> If the next word starts with a vowel, <em>de</em> becomes <em>d'</em>:</p><ul><li><em>J'ai besoin <strong>d'</strong>un appartement.</em> (NOT: de un)</li><li><em>J'ai besoin <strong>d'</strong>aide.</em> (I need help.)</li></ul><p>If the next word starts with a consonant, keep <em>de</em>:</p><ul><li><em>J'ai besoin <strong>de</strong> temps.</em> (I need time.)</li><li><em>J'ai besoin <strong>de</strong> toi.</em> (I need you.)</li></ul>",
                examples: [
                    { fr: "J'ai besoin d'un appartement.", en: "I need an apartment." },
                    { fr: "J'ai besoin de trouver un logement.", en: "I need to find housing." },
                    { fr: "J'ai besoin d'un stationnement.", en: "I need parking." },
                    { fr: "J'ai besoin d'aide.", en: "I need help." },
                    { fr: "J'ai besoin de temps.", en: "I need time." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Calling about an Ad on Kijiji",
                lines: [
                    { speaker: "Locataire", fr: "Bonjour, je vous appelle pour l'appartement sur Kijiji.", en: "Hello, calling about the apartment on Kijiji.", align: "left" },
                    { speaker: "Propriétaire", fr: "Bonjour, oui, l'appartement est toujours disponible.", en: "Hello, yes, the apartment is still available.", align: "right" },
                    { speaker: "Locataire", fr: "Parfait ! Quel est le loyer ?", en: "Perfect! What is the rent?", align: "left" },
                    { speaker: "Propriétaire", fr: "C'est 1400 dollars par mois, le chauffage et l'eau sont inclus.", en: "It's 1400 dollars a month, heating and water included.", align: "right" },
                    { speaker: "Locataire", fr: "D'accord, est-ce que c'est meublé ?", en: "Okay, is it furnished?", align: "left" },
                    { speaker: "Propriétaire", fr: "Non, c'est non meublé, mais il y a la cuisine équipée.", en: "No, unfurnished, but the kitchen is equipped.", align: "right" },
                    { speaker: "Locataire", fr: "D'accord, est-ce qu'il y a un stationnement ?", en: "Okay, is there parking?", align: "left" },
                    { speaker: "Propriétaire", fr: "Oui, le stationnement est inclus dans le prix.", en: "Yes, parking is included in the price.", align: "right" },
                    { speaker: "Locataire", fr: "Parfait, est-ce que je peux visiter l'appartement demain ?", en: "Perfect, can I visit the apartment tomorrow?", align: "left" },
                    { speaker: "Propriétaire", fr: "Oui, bien sûr, on se rencontre à 14h ?", en: "Yes, of course, shall we meet at 2 PM?", align: "right" },
                    { speaker: "Locataire", fr: "D'accord, ça marche ! Merci beaucoup.", en: "Okay, that works! Thank you.", align: "left" }
                ]
            },
            {
                context: "Friends Discussing Apartment Hunting",
                lines: [
                    { speaker: "A", fr: "Salut ! Tu as trouvé un appartement ?", en: "Hi! Did you find an apartment?", align: "left" },
                    { speaker: "B", fr: "Non, pas encore, c'est ben dur de trouver quelque chose de pas cher.", en: "No, not yet, it's really hard to find something cheap.", align: "right" },
                    { speaker: "A", fr: "Oh oui, le marché de l'appartement à Montréal est trop cher.", en: "Oh yes, the apartment market in Montreal is too expensive.", align: "left" },
                    { speaker: "B", fr: "Je cherche un 3 et demi, avec un stationnement, pas plus de 1500.", en: "I'm looking for a 3 and a half, with parking, no more than 1500.", align: "right" },
                    { speaker: "A", fr: "Oh, c'est possible, tu as regardé sur Kijiji ?", en: "Oh, it's possible, did you look on Kijiji?", align: "left" },
                    { speaker: "B", fr: "Oui, j'ai regardé, mais il y a beaucoup d'arnaques.", en: "Yes, I looked, but there are a lot of scams.", align: "right" },
                    { speaker: "A", fr: "Oh oui, fais attention, ne donne pas d'argent à quelqu'un que tu ne connais pas.", en: "Oh yes, be careful, don't give money to someone you don't know.", align: "left" },
                    { speaker: "B", fr: "Oui, je sais, c'est pour ça que je suis prudent.", en: "Yes, I know, that's why I'm careful.", align: "right" },
                    { speaker: "A", fr: "D'accord, si je vois quelque chose, je te dis.", en: "Okay, if I see something, I'll tell you.", align: "left" },
                    { speaker: "B", fr: "Merci, t'es ben gentil !", en: "Thanks, you're so nice!", align: "right" }
                ]
            }
        ],
        culture: "<p><strong>Apartment Sizes:</strong> In Quebec, the bathroom counts as '½'. Therefore, a 3 ½ refers to a 1-bedroom apartment (living room, bedroom, kitchen, plus the half bathroom). A 4 ½ is a 2-bedroom, and a 5 ½ is a 3-bedroom. Kijiji and Facebook Marketplace are the main ways to find apartments. <strong>Beware of scams!</strong></p>"
    },
    {
        id: "14",
        title: "La Météo",
        theme: "Weather",
        vocabulary: [
            { fr: "du soleil", en: "sunny skies" },
            { fr: "de la neige", en: "snow" },
            { fr: "du vent", en: "wind" },
            { fr: "de la pluie", en: "rain" },
            { fr: "du nuage", en: "clouds" },
            { fr: "du froid", en: "cold" },
            { fr: "de la chaleur", en: "heat" },
            { fr: "du brouillard", en: "fog" },
            { fr: "l'hiver", en: "winter" },
            { fr: "le printemps", en: "spring" },
            { fr: "l'été", en: "summer" },
            { fr: "l'automne", en: "fall / autumn" },
            { fr: "Il fait beau.", en: "The weather is nice." },
            { fr: "Il fait chaud.", en: "It is hot." },
            { fr: "Il fait froid.", en: "It is cold." },
            { fr: "Il fait frette.", en: "It is freezing. (Quebec slang for très froid)" },
            { fr: "Il neige.", en: "It is snowing." },
            { fr: "Il pleut.", en: "It is raining." },
            { fr: "Il vente.", en: "It is windy." }
        ],
        grammar: [
            {
                title: "Describing Weather with 'Il fait' and 'On prévoit'",
                explanation: "<p>French uses the impersonal <strong>Il</strong> (it) to describe weather. There are several structures:</p><ul><li><strong>Il fait + adjective</strong>: Il fait froid. (It is cold.) / Il fait chaud. (It is hot.) / Il fait beau. (It's nice weather.)</li><li><strong>Il + weather verb</strong>: Il neige. (It is snowing.) / Il pleut. (It is raining.) / Il vente. (It is windy.)</li><li><strong>On prévoit + weather noun</strong>: On prévoit du soleil. (Sun is forecasted.) / On annonce de la neige. (Snow is announced.)</li></ul>",
                examples: [
                    { fr: "On prévoit du soleil à Ottawa aujourd'hui.", en: "Sun is forecasted in Ottawa today." },
                    { fr: "On annonce de la neige à Québec demain.", en: "Snow is announced in Quebec City tomorrow." },
                    { fr: "Il vente beaucoup à Chicoutimi cette semaine.", en: "It is very windy in Chicoutimi this week." },
                    { fr: "En hiver, il fait très froid au Québec, il neige beaucoup.", en: "In winter, it is very cold in Quebec, it snows a lot." },
                    { fr: "En été, il fait chaud, on va à la plage.", en: "In summer, it is hot, we go to the beach." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Discussing the Weather",
                lines: [
                    { speaker: "A", fr: "Fait-tu beau aujourd'hui ?", en: "Is the weather nice today?", align: "left" },
                    { speaker: "B", fr: "Oui, on prévoit du soleil toute la journée !", en: "Yes, sun is forecasted all day!", align: "right" },
                    { speaker: "A", fr: "Parfait, on va aller au parc ?", en: "Perfect, shall we go to the park?", align: "left" },
                    { speaker: "B", fr: "Oui, ça marche ! Mais demain, on annonce de la pluie.", en: "Yes, that works! But tomorrow, rain is announced.", align: "right" },
                    { speaker: "A", fr: "Oh non, l'hiver arrive bientôt...", en: "Oh no, winter is coming soon...", align: "left" },
                    { speaker: "B", fr: "Oui, il va faire frette ! Il faut acheter un bon manteau.", en: "Yes, it's going to be freezing! We need to buy a good coat.", align: "right" }
                ]
            }
        ],
        culture: "<p>Extreme winters mean you absolutely need to differentiate <em>'Il fait froid'</em> (It's cold) from <em>'Il fait frette'</em> (It is absolutely freezing — Quebec slang). Complaining about the winter is practically a national pastime. Weather is always the go-to small talk topic in Quebec.</p>"
    },
    {
        id: "15",
        title: "Vêtements, Nourriture et Futur Proche",
        theme: "Clothes, Food, and Near Future",
        vocabulary: [
            // Clothing & travel items
            { fr: "le parasol", en: "the sun umbrella" },
            { fr: "le maillot de bain", en: "the swimsuit" },
            { fr: "le chapeau", en: "the hat" },
            { fr: "la crème solaire", en: "the sunscreen" },
            { fr: "les sandales", en: "the sandals" },
            { fr: "la jupe", en: "the skirt" },
            { fr: "le manteau", en: "the winter coat" },
            { fr: "les lunettes de soleil", en: "the sunglasses" },
            { fr: "l'itinéraire", en: "the itinerary / route" },
            // Food vocabulary
            { fr: "du poulet", en: "chicken" },
            { fr: "une fraise", en: "a strawberry" },
            { fr: "des œufs", en: "eggs" },
            { fr: "un concombre", en: "a cucumber" },
            { fr: "du fromage", en: "cheese" },
            { fr: "une carotte", en: "a carrot" },
            { fr: "des bleuets", en: "blueberries", note: "Quebec's signature fruit!" },
            { fr: "du pain", en: "bread" },
            { fr: "de la laitue", en: "lettuce" },
            { fr: "du riz", en: "rice" },
            { fr: "du poisson", en: "fish" },
            { fr: "du sel", en: "salt" },
            { fr: "de la betterave", en: "beet" },
            { fr: "des raisins", en: "grapes" },
            { fr: "du bœuf", en: "beef" },
            { fr: "un poivron", en: "a bell pepper" },
            { fr: "du tofu", en: "tofu" },
            { fr: "des pâtes", en: "pasta" },
            { fr: "de l'huile", en: "oil" },
            { fr: "du poivre", en: "pepper" },
            // Meal parts
            { fr: "l'entrée", en: "the appetizer / starter" },
            { fr: "la soupe", en: "the soup" },
            { fr: "la salade", en: "the salad" },
            { fr: "le plat principal", en: "the main course" },
            { fr: "le dessert", en: "the dessert" },
            // Expressing taste
            { fr: "C'est super bon !", en: "This is so good!" },
            { fr: "C'est délicieux !", en: "This is delicious!" },
            { fr: "C'est succulent !", en: "This is succulent / tasty!" },
            { fr: "Miam !", en: "Yum! (Onomatopoeia)" },
            { fr: "Que c'est savoureux !", en: "How flavorful!" },
            { fr: "C'est écoeurant !", en: "This is AMAZING! (Quebec slang — can also mean disgusting depending on context)" }
        ],
        grammar: [
            {
                title: "Futur Proche (Near Future)",
                explanation: "<p>The <em>futur proche</em> is used to describe things that are <strong>about to happen</strong> or that you <strong>are going to do</strong>. It works exactly like English 'be going to'.</p><p><strong>Structure: Aller (conjugated) + Infinitive Verb</strong></p><ul><li>je <strong>vais</strong> + infinitive</li><li>tu <strong>vas</strong> + infinitive</li><li>il/elle <strong>va</strong> + infinitive</li><li>nous <strong>allons</strong> + infinitive</li><li>vous <strong>allez</strong> + infinitive</li><li>ils/elles <strong>vont</strong> + infinitive</li></ul>",
                examples: [
                    { fr: "Maintenant, je prends un bain. Bientôt, je vais aller au lit.", en: "Now I'm taking a bath. Soon, I am going to go to bed." },
                    { fr: "Aujourd'hui, il fait soleil et il fait chaud. Demain, il va venter très fort et il va pleuvoir.", en: "Today, it's sunny and hot. Tomorrow, it is going to be very windy and it's going to rain." },
                    { fr: "On va aller à la plage ce week-end. On va nager dans le lac.", en: "We are going to go to the beach this weekend. We are going to swim in the lake." }
                ]
            },
            {
                title: "Quantities: Partitives vs Specific Amounts",
                explanation: "<p>When expressing <strong>uncertain/general quantities</strong> ('some'), use the partitive articles: <strong>du / de la / des / de l'</strong>.</p><p>When expressing <strong>specific/measured quantities</strong>, use the measurement + <strong>de</strong>.</p>",
                examples: [
                    { fr: "du lait", en: "some milk (unspecified amount)" },
                    { fr: "deux litres de lait", en: "two liters of milk (specific amount)" },
                    { fr: "une tranche de pain", en: "a slice of bread" },
                    { fr: "de l'eau", en: "some water" }
                ]
            }
        ],
        dialogues: [
            {
                context: "Talking About Food Preferences",
                lines: [
                    { speaker: "A", fr: "J'adore la poutine, c'est le plat québécois préféré !", en: "I love poutine, it's my favorite Quebecois dish!", align: "left" },
                    { speaker: "B", fr: "Les bleuets sauvages du Québec sont super bons !", en: "Quebec's wild blueberries are so good!", align: "right" },
                    { speaker: "A", fr: "Je préfère le poulet au bœuf.", en: "I prefer chicken to beef.", align: "left" },
                    { speaker: "B", fr: "Miam ! C'est écoeurant !", en: "Yum! That's amazing!", align: "right" }
                ]
            },
            {
                context: "Making Plans for the Weekend",
                lines: [
                    { speaker: "A", fr: "Qu'est-ce qu'on va faire ce week-end ?", en: "What are we going to do this weekend?", align: "left" },
                    { speaker: "B", fr: "On va aller à la plage, il va faire beau !", en: "We are going to go to the beach, it's going to be nice!", align: "right" },
                    { speaker: "A", fr: "Parfait ! Je vais apporter les sandales et la crème solaire.", en: "Perfect! I am going to bring the sandals and sunscreen.", align: "left" },
                    { speaker: "B", fr: "Moi, je vais préparer le lunch — du poulet, de la salade, et des bleuets.", en: "Me, I am going to prepare the lunch — chicken, salad, and blueberries.", align: "right" },
                    { speaker: "A", fr: "C'est super ! On va nager dans le lac ?", en: "That's great! Are we going to swim in the lake?", align: "left" },
                    { speaker: "B", fr: "Oui, bien sûr ! J'ai hâte !", en: "Yes, of course! I can't wait!", align: "right" }
                ]
            }
        ],
        culture: "<p>Summers in Quebec are extremely hot, leading to immediate switches from huge winter coats (<em>manteaux</em>) to swimsuits (<em>maillots de bain</em>). Wild blueberries (<em>bleuets sauvages</em>) from the Lac-Saint-Jean region are a beloved summer delicacy, often picked by hand. The expression <em>'C'est écoeurant!'</em> is a classic Quebec slang that means 'It's amazing!' when said positively about food, but can also mean 'disgusting' in other contexts — tone of voice is everything!</p>"
    }
];
