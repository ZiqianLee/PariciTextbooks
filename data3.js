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
                explanation: "<p>Used for completed past actions. Structure: <strong>Auxiliary verb (Avoir/Être) + Past Participle</strong>.</p>",
                examples: [
                    { fr: "J'ai travaillé toute la journée.", en: "I worked all day." },
                    { fr: "J'ai mangé de la poutine.", en: "I ate poutine." },
                    { fr: "Nous avons été faire du ski.", en: "We went skiing." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Weekend Recap",
                lines: [
                    { speaker: "A", fr: "Qu'est-ce que tu as fait ce week-end ?", en: "What did you do this weekend?", align: "left" },
                    { speaker: "B", fr: "J'ai été faire du ski avec des amis !", en: "I went skiing with friends!", align: "right" },
                    { speaker: "A", fr: "Wow, tu as eu du fun ?", en: "Wow, did you have fun?", align: "left" },
                    { speaker: "B", fr: "Ben oui ! Ça été le fun !", en: "Oh yes! It was fun!", align: "right" }
                ]
            }
        ],
        culture: "<p>Colloquial grammar slip: Quebeckers frequently say <em>J'ai été</em> (I was) instead of <em>Je suis allé</em> (I went) in everyday speech.</p>"
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
            { fr: "la caution", en: "the safety deposit" },
            { fr: "le bail", en: "the lease", note: "Leases in Quebec are almost always 1 year long." },
            { fr: "le propriétaire", en: "the landlord" },
            { fr: "le locataire", en: "the tenant" },
            { fr: "chercher un appartement", en: "to look for an apartment" },
            { fr: "visiter l'appartement", en: "to visit the apartment" },
            { fr: "signer le bail", en: "to sign the lease" },
            { fr: "payer le loyer", en: "to pay the rent" },
            { fr: "déménager", en: "to move out / move in" }
        ],
        grammar: [
            {
                title: "Avoir besoin de (I need...)",
                explanation: "<p>Used constantly to express needs. Requires combining <strong>avoir</strong> + <strong>besoin de</strong>.</p>",
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
                    { speaker: "Locataire", fr: "Quel est le loyer ?", en: "What is the rent?", align: "left" },
                    { speaker: "Propriétaire", fr: "1400 dollars par mois, le chauffage et l'eau sont inclus.", en: "1400 dollars a month, heating and water included.", align: "right" },
                    { speaker: "Locataire", fr: "C'est meublé ou non meublé ?", en: "Is it furnished or unfurnished?", align: "left" },
                    { speaker: "Propriétaire", fr: "Non meublé, mais il y a la cuisine équipée.", en: "Unfurnished, but the kitchen is equipped.", align: "right" }
                ]
            }
        ],
        culture: "<p><strong>Apartment Sizes:</strong> In Quebec, the bathroom counts as '½'. Therefore, a 3 ½ refers to a 1-bedroom apartment (living room, bedroom, kitchen, plus the half bathroom). Kijiji and Marketplace are the main ways to find apartments.</p>"
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
            { fr: "L'hiver", en: "Winter" },
            { fr: "L'été", en: "Summer" }
        ],
        grammar: [
            {
                title: "Describing Weather",
                explanation: "<p>The verb <em>Faire</em> (To do/make) is hijacked to describe weather states using the impersonal <em>Il</em>.</p>",
                examples: [
                    { fr: "On prévoit du soleil à Ottawa." , en: "Sun is forecasted in Ottawa." },
                    { fr: "On annonce de la neige à Québec.", en: "Snow is announced in Quebec City." },
                    { fr: "Il vente beaucoup.", en: "It is very windy." },
                    { fr: "En hiver, il fait très froid.", en: "In winter, it is very cold." }
                ]
            }
        ],
        dialogues: [],
        culture: "<p>Extreme winters mean you absolutely need to differentiate 'Il fait froid' (It's cold) from 'Il fait frette' (It is absolutely freezing). Complaining about the winter is practically a national pastime.</p>"
    },
    {
        id: "15",
        title: "Vêtements, Nourriture et Futur Proche",
        theme: "Clothes, Food, and Near Future",
        vocabulary: [
            { fr: "le parasol", en: "the umbrella (for sun)" },
            { fr: "le maillot de bain", en: "the swimsuit" },
            { fr: "le chapeau", en: "the hat" },
            { fr: "la crème solaire", en: "the sunscreen" },
            { fr: "les sandales", en: "the sandals" },
            { fr: "la jupe", en: "the skirt" },
            { fr: "le manteau", en: "the winter coat" },
            { fr: "les lunettes de soleil", en: "the sunglasses" },
            { fr: "le poulet", en: "chicken" },
            { fr: "le bœuf", en: "beef" },
            { fr: "les bleuets sauvages", en: "wild blueberries" }
        ],
        grammar: [
            {
                title: "Futur Proche (Near Future)",
                explanation: "<p>Used to describe things you are 'going to do'. Built instantly using <strong>Aller + Infinitive Verb</strong>.</p>",
                examples: [
                    { fr: "Bientôt, je vais aller au lit.", en: "Soon, I am going to go to bed." },
                    { fr: "Il va venter.", en: "It is going to be windy." },
                    { fr: "On va nager.", en: "We are going to swim." }
                ]
            }
        ],
        dialogues: [],
        culture: "<p>Summers in Quebec are extremely hot, leading to immediate changes from huge winter coats (manteaux) to swimsuits (maillots de bain). Wild blueberries from Lac-St-Jean are a beloved summer treat.</p>"
    }
];
