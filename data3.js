const episodes3 = [
    {
        id: "11",
        title: "Activités Passées",
        theme: "Past Activities (Passé Composé)",
        vocabulary: [
            { fr: "Hier", en: "Yesterday" },
            { fr: "Ce matin", en: "This morning" },
            { fr: "La semaine dernière", en: "Last week" },
            { fr: "Le week-end / La fin de semaine", en: "The weekend" },
            { fr: "Malade", en: "Sick" },
            { fr: "La soupe aux pois", en: "Pea soup" },
            { fr: "Dormir", en: "To sleep" },
            { fr: "Rencontrer", en: "To meet" }
        ],
        grammar: [
            {
                title: "Passé Composé (The Past Tense)",
                explanation: "<p>Used for completed past actions. Structure: <strong>Auxiliary verb (Avoir/Être) + Past Participle</strong>.</p><p>For AVOIR verbs:</p><ul><li>J'ai + parlé (I spoke)</li><li>Tu as + mangé (You ate)</li><li>Il a + regardé (He watched)</li></ul><p>For ÊTRE verbs (Movement verbs like: aller, venir, sortir, arriver, partir):</p><ul><li>Je suis allé(e)</li><li>Il est sorti</li></ul>",
                examples: [
                    { fr: "J'ai travaillé toute la journée.", en: "I worked all day." },
                    { fr: "J'ai mangé de la poutine pour la première fois.", en: "I ate poutine for the first time." },
                    { fr: "Nous avons été faire du ski.", en: "We went skiing." },
                    { fr: "J'ai rencontré mon chum hier soir.", en: "I met my boyfriend last night." }
                ]
            },
            {
                title: "Irregular Past Participles",
                explanation: "<p>Some common verbs have irregular participles:</p><ul><li>faire → fait</li><li>avoir → eu</li><li>être → été</li><li>prendre → pris</li><li>boire → bu</li><li>lire → lu</li></ul>",
                examples: []
            }
        ],
        dialogues: [
            {
                context: "Weekend Recap",
                lines: [
                    { speaker: "A", fr: "Qu'est-ce que tu as fait ce week-end ?", en: "What did you do this weekend?", align: "left" },
                    { speaker: "B", fr: "J'ai été faire du ski avec des amis !", en: "I went skiing with friends!", align: "right" },
                    { speaker: "A", fr: "Wow, tu as eu du fun ?", en: "Wow, did you have fun?", align: "left" },
                    { speaker: "B", fr: "Ben oui ! Ça été le fun ! On a mangé de la poutine.", en: "Oh yes! It was fun! We ate poutine.", align: "right" }
                ]
            },
            {
                context: "Being Sick",
                lines: [
                    { speaker: "A", fr: "Tu as été au travail hier ?", en: "Did you go to work yesterday?", align: "left" },
                    { speaker: "B", fr: "Non, j'étais malade, j'ai resté chez moi.", en: "No, I was sick, I stayed home.", align: "right" },
                    { speaker: "A", fr: "Tu as mangé quelque chose ?", en: "Did you eat anything?", align: "left" },
                    { speaker: "B", fr: "Oui, j'ai mangé de la soupe aux pois.", en: "Yes, I ate pea soup.", align: "right" }
                ]
            }
        ],
        culture: "<p>Colloquial grammar slip: Quebeckers frequently say <em>J'ai été</em> (I was) instead of <em>Je suis allé</em> (I went) in everyday speech. Additionally, <em>J'ai resté chez moi</em> is often heard, even though standard French takes 'Être' (Je suis resté).</p>"
    },
    {
        id: "13",
        title: "Logement et Appartement",
        theme: "Housing and Renting",
        vocabulary: [
            { fr: "L'appartement", en: "The apartment" },
            { fr: "Le loyer", en: "The rent" },
            { fr: "Le stationnement", en: "The parking spot" },
            { fr: "Le chauffage", en: "The heating" },
            { fr: "La caution", en: "The security deposit" },
            { fr: "Le bail", en: "The lease" },
            { fr: "Non meublé", en: "Unfurnished" },
            { fr: "Meublé", en: "Furnished" },
            { fr: "Le supplément", en: "Additional fee" },
            { fr: "Un logement", en: "Housing / Accomodation" },
            { fr: "Un 3 et demi (3 ½)", en: "A 1-bedroom apartment" }
        ],
        grammar: [
            {
                title: "Avoir besoin de (I need...)",
                explanation: "<p>Used constantly to express needs. Requires combining <strong>avoir</strong> + <strong>besoin de</strong>.</p><ul><li>If followed by a vowel: <em>d'</em> (d'aide, d'un appartement).</li><li>If followed by a consonant: <em>de</em> (de temps, de toi).</li></ul>",
                examples: [
                    { fr: "J'ai besoin d'un appartement.", en: "I need an apartment." },
                    { fr: "J'ai besoin de trouver un logement.", en: "I need to find housing." },
                    { fr: "J'ai besoin d'un stationnement.", en: "I need parking." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Calling about an Ad on Kijiji",
                lines: [
                    { speaker: "Locataire", fr: "Bonjour, je vous appelle pour l'appartement sur Kijiji.", en: "Hello, calling about the apartment on Kijiji.", align: "left" },
                    { speaker: "Propriétaire", fr: "Oui, l'appartement est toujours disponible.", en: "Yes, the apartment is still available.", align: "right" },
                    { speaker: "Locataire", fr: "Parfait ! Quel est le loyer ?", en: "Perfect! What is the rent?", align: "left" },
                    { speaker: "Propriétaire", fr: "1400 dollars par mois, le chauffage et l'eau sont inclus.", en: "1400 dollars a month, heating and water included.", align: "right" },
                    { speaker: "Locataire", fr: "Est-ce que c'est meublé ?", en: "Is it furnished?", align: "left" },
                    { speaker: "Propriétaire", fr: "Non, mais il y a la cuisine équipée.", en: "No, but it has an equipped kitchen.", align: "right" }
                ]
            },
            {
                context: "Finding a Place",
                lines: [
                    { speaker: "A", fr: "Tu as trouvé un appartement ?", en: "Did you find an apartment?", align: "left" },
                    { speaker: "B", fr: "Non, c'est ben dur de trouver quelque chose de pas cher.", en: "No, it's very hard to find something cheap.", align: "right" },
                    { speaker: "A", fr: "Je cherche un 3 et demi, avec un stationnement, pas plus de 1500.", en: "I'm looking for a 3 ½, with parking, no more than 1500.", align: "left" }
                ]
            }
        ],
        culture: "<p><strong>Apartment Sizes:</strong> In Quebec, the bathroom counts as '½'. Therefore, a 3 ½ refers to a 1-bedroom apartment (living room, bedroom, kitchen, plus the half bathroom).</p>"
    },
    {
        id: "14",
        title: "La Météo",
        theme: "Weather",
        vocabulary: [
            { fr: "Le soleil", en: "The sun" },
            { fr: "La neige", en: "The snow" },
            { fr: "La plage", en: "The beach" },
            { fr: "L'hiver", en: "Winter" },
            { fr: "L'été", en: "Summer" }
        ],
        grammar: [
            {
                title: "Describing Weather",
                explanation: "<p>The verb <em>Faire</em> (To do/make) is hijacked to describe weather states using the impersonal <em>Il</em>.</p>",
                examples: [
                    { fr: "On prévoit du soleil à Ottawa aujourd’hui.", en: "Sun is forecasted in Ottawa today." },
                    { fr: "On annonce de la neige à Québec.", en: "Snow is announced in Quebec City." },
                    { fr: "Il vente beaucoup.", en: "It is very windy." },
                    { fr: "En hiver, il fait très froid.", en: "In winter, it is very cold." },
                    { fr: "En été, il fait chaud.", en: "In summer, it is hot." }
                ]
            }
        ],
        dialogues: [],
        culture: "<p>Weather is highly unpredictable. Extreme winters mean weather conversation is virtually required as small talk anywhere you go in Canada.</p>"
    },
    {
        id: "15",
        title: "Futur Proche et Projets",
        theme: "Future Tense and Projects",
        vocabulary: [
            { fr: "Le lit", en: "The bed" },
            { fr: "Le bain", en: "The bath" },
            { fr: "Le lac", en: "The lake" },
            { fr: "Le poulet", en: "Chicken" },
            { fr: "Le bœuf", en: "Beef" },
            { fr: "Les bleuets sauvages", en: "Wild blueberries" }
        ],
        grammar: [
            {
                title: "Futur Proche (Near Future)",
                explanation: "<p>Used to describe things you are 'going to do'. Built instantly using <strong>Aller + Infinitive Verb</strong>.</p><ul><li>Je vais</li><li>Tu vas</li><li>Il va</li><li>Nous allons</li><li>Vous allez</li><li>Ils vont</li></ul>",
                examples: [
                    { fr: "Bientôt, je vais aller au lit.", en: "Soon, I am going to go to bed." },
                    { fr: "Il va venter très fort et il va pleuvoir.", en: "It's going to be very windy and it's going to rain." },
                    { fr: "On va nager dans le lac.", en: "We are going to swim in the lake." }
                ]
            },
            {
                title: "Partitives (Quantities)",
                explanation: "<p>Uncertain quantities ('some') use <em>de + article</em> (du, de la, des). Specific numerical quantities use defined measurements.</p>",
                examples: [
                    { fr: "du lait", en: "some milk" },
                    { fr: "deux litres de lait", en: "two liters of milk" },
                    { fr: "une tranche de pain", en: "a slice of bread" }
                ]
            }
        ],
        dialogues: [],
        culture: "<p>Quebec wild blueberries (Bleuets sauvages du Québec) from the Lac-Saint-Jean region are a defining cultural food staple, frequently picked in the summer.</p>"
    }
];
