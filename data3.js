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
            // Quebec slang past expressions
            { fr: "J'ai eu du fun.", en: "I had fun. (Standard: Je me suis amusé.)" },
            { fr: "Ça été le fun.", en: "It was fun. (Standard: C'était amusant.)" },
            { fr: "Hier, j'ai ben aimé.", en: "Yesterday, I really liked it. (Standard: j'ai beaucoup aimé.)" },
            { fr: "Pis, après ça...", en: "Then, after that... (Standard: Et, après ça...)" },
            { fr: "pas trop frette", en: "not too freezing (Quebec slang for pas trop froid)" }
        ],
        grammar: [
            {
                title: "Passé Composé — Form and Use",
                explanation: "<p>The <em>passé composé</em> is the main past tense at the A1 level. It describes <strong>completed past actions</strong>: what you did yesterday, last week, etc.</p><p><strong>Structure: Auxiliary (Avoir or Être) + Past Participle</strong></p><p>Most verbs use <strong>avoir</strong>. About 16 movement/state-change verbs use <strong>être</strong>.</p>",
                examples: [
                    { fr: "Qu'est-ce que tu as fait hier ?", en: "What did you do yesterday?" },
                    { fr: "J'ai travaillé toute la journée.", en: "I worked all day." },
                    { fr: "Hier, j'ai mangé de la poutine pour la première fois.", en: "Yesterday, I ate poutine for the first time." },
                    { fr: "J'ai rencontré mon chum au parc hier soir.", en: "I met my boyfriend at the park last night." },
                    { fr: "Ce matin, j'ai fait les courses au dépanneur.", en: "This morning, I went shopping at the corner store." }
                ]
            },
            {
                title: "Auxiliary Avoir — Conjugation in Passé Composé",
                explanation: "<p>Conjugate <strong>avoir</strong> in the present, then add the past participle:</p><ul><li>j'<strong>ai</strong> + past participle</li><li>tu <strong>as</strong> + past participle</li><li>il/elle <strong>a</strong> + past participle</li><li>nous <strong>avons</strong> + past participle</li><li>vous <strong>avez</strong> + past participle</li><li>ils/elles <strong>ont</strong> + past participle</li></ul>",
                examples: [
                    { fr: "J'ai parlé français.", en: "I spoke French." },
                    { fr: "Tu as mangé ?", en: "Did you eat?" },
                    { fr: "Nous avons été faire du ski à Mont-Tremblant.", en: "We went skiing at Mont-Tremblant." }
                ]
            },
            {
                title: "Regular Past Participles (-er verbs → -é)",
                explanation: "<p>For regular <strong>-er</strong> verbs, remove <em>-er</em> and add <strong>-é</strong>:</p><ul><li>parler → <strong>parlé</strong></li><li>manger → <strong>mangé</strong></li><li>travailler → <strong>travaillé</strong></li><li>étudier → <strong>étudié</strong></li><li>regarder → <strong>regardé</strong></li><li>écouter → <strong>écouté</strong></li></ul>",
                examples: []
            },
            {
                title: "Irregular Past Participles",
                explanation: "<p>These high-frequency verbs have irregular past participles that you must memorize:</p><table style='width:100%;border-collapse:collapse;margin-top:1rem;font-size:0.9em;'><tr style='background:rgba(255,255,255,0.15);'><th style='padding:0.5rem;border:1px solid rgba(255,255,255,0.2);'>Verb</th><th style='padding:0.5rem;border:1px solid rgba(255,255,255,0.2);'>Past Participle</th><th style='padding:0.5rem;border:1px solid rgba(255,255,255,0.2);'>Meaning</th></tr><tr><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>faire</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>fait</td><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>done / made</td></tr><tr style='background:rgba(255,255,255,0.05);'><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>avoir</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>eu</td><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>had</td></tr><tr><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>être</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>été</td><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>been</td></tr><tr style='background:rgba(255,255,255,0.05);'><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>prendre</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>pris</td><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>taken</td></tr><tr><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>boire</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>bu</td><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>drunk</td></tr><tr style='background:rgba(255,255,255,0.05);'><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>lire</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>lu</td><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>read</td></tr><tr><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>écrire</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>écrit</td><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>written</td></tr><tr style='background:rgba(255,255,255,0.05);'><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>voir</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>vu</td><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>seen</td></tr><tr><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>vouloir</td><td style='padding:0.5rem;text-align:center;border:1px solid rgba(255,255,255,0.1);'>voulu</td><td style='padding:0.5rem;border:1px solid rgba(255,255,255,0.1);'>wanted</td></tr></table>",
                examples: []
            },
            {
                title: "Verbs That Use Être (Movement and State Change)",
                explanation: "<p>About 16 verbs use <strong>être</strong> as the auxiliary. These are mostly verbs of <em>movement or state change</em>. A useful memory trick: <strong>Dr & Mrs Vandertramp</strong>.</p><p>When using être, the past participle must <strong>agree with the subject's gender and number</strong>:</p><ul><li>Je suis allé. (male speaker)</li><li>Je suis allée. (female speaker)</li><li>Ils sont allés. (male/mixed group)</li><li>Elles sont allées. (female group)</li></ul><p>Common être verbs: <em>aller, venir, partir, arriver, entrer, sortir, monter, descendre, rester, retourner, naître, mourir</em></p>",
                examples: [
                    { fr: "Je suis allé au cinéma. (male)", en: "I went to the movies." },
                    { fr: "Je suis allée au cinéma. (female)", en: "I went to the movies." },
                    { fr: "Elle est arrivée à 19h.", en: "She arrived at 7 PM." },
                    { fr: "Ils sont partis tôt.", en: "They left early." }
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
                    { speaker: "B", fr: "Oui, il a fait super beau, pas trop frette.", en: "Yes, the weather was super nice, not too freezing.", align: "right" },
                    { speaker: "A", fr: "Tu as eu du fun ?", en: "Did you have fun?", align: "left" },
                    { speaker: "B", fr: "Ben oui ! Ça été le fun ! On a mangé de la poutine au restaurant sur la montagne.", en: "Oh yes! It was fun! We ate poutine at the restaurant on the mountain.", align: "right" },
                    { speaker: "A", fr: "Moi, ce week-end, j'ai été au camping avec ma blonde.", en: "Me, this weekend, I went camping with my girlfriend.", align: "left" },
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
        culture: "<p>Colloquial Quebec grammar: Quebeckers frequently say <em>J'ai été</em> instead of <em>Je suis allé</em> (I went), and <em>J'ai resté</em> instead of <em>Je suis resté</em> (I stayed). These are technically incorrect but extremely common in everyday speech. You will also hear <em>Ça été le fun</em> and <em>J'ai eu du fun</em> everywhere.</p>"
    },
    {
        id: "12",
        title: "Le Travail et Les Habitudes Quotidiennes",
        theme: "Work and Daily Routines",
        vocabulary: [
            // Work vocabulary
            { fr: "le travail", en: "work / job" },
            { fr: "le bureau", en: "the office" },
            { fr: "la réunion", en: "the meeting" },
            { fr: "le patron / la patronne", en: "the boss (m/f)" },
            { fr: "le collègue / la collègue", en: "the colleague (m/f)" },
            { fr: "l'horaire", en: "the schedule" },
            { fr: "le temps plein", en: "full-time" },
            { fr: "le temps partiel", en: "part-time" },
            { fr: "le salaire", en: "the salary" },
            { fr: "les vacances", en: "vacation / holidays" },
            { fr: "un jour de congé", en: "a day off" },
            { fr: "travailler de 9h à 17h", en: "to work from 9 to 5" },
            { fr: "commencer à 8h", en: "to start at 8" },
            { fr: "finir à 16h", en: "to finish at 4 PM" },
            { fr: "prendre une pause", en: "to take a break" },
            { fr: "le dîner", en: "lunch (Quebec usage)", note: "In Quebec, 'dîner' = lunch, 'souper' = dinner. The opposite of France!" },
            { fr: "le souper", en: "dinner (Quebec usage)" },
            { fr: "le déjeuner", en: "breakfast (Quebec usage)" },
            // Daily routine verbs
            { fr: "se lever", en: "to get up" },
            { fr: "se laver", en: "to wash up" },
            { fr: "se brosser les dents", en: "to brush one's teeth" },
            { fr: "s'habiller", en: "to get dressed" },
            { fr: "déjeuner", en: "to have breakfast" },
            { fr: "prendre l'autobus", en: "to take the bus" },
            { fr: "prendre le métro", en: "to take the subway" },
            { fr: "arriver au bureau", en: "to arrive at the office" },
            { fr: "rentrer à la maison", en: "to go home" },
            { fr: "se coucher", en: "to go to bed" },
            // Frequency adverbs
            { fr: "toujours", en: "always" },
            { fr: "souvent", en: "often" },
            { fr: "parfois / des fois", en: "sometimes" },
            { fr: "rarement", en: "rarely" },
            { fr: "jamais", en: "never" },
            { fr: "tous les jours", en: "every day" },
            { fr: "chaque semaine", en: "every week" },
            { fr: "le matin", en: "in the morning" },
            { fr: "l'après-midi", en: "in the afternoon" },
            { fr: "le soir", en: "in the evening" }
        ],
        grammar: [
            {
                title: "Reflexive Verbs (Verbes Pronominaux) — Daily Routines",
                explanation: "<p>Many daily routine verbs are <strong>reflexive</strong> — the action is done to yourself. They use a reflexive pronoun (<em>me, te, se, nous, vous, se</em>) before the verb:</p><ul><li>je <strong>me</strong> lève (I get up)</li><li>tu <strong>te</strong> lèves (you get up)</li><li>il/elle <strong>se</strong> lève (he/she gets up)</li><li>nous <strong>nous</strong> levons (we get up)</li><li>vous <strong>vous</strong> levez (you get up — formal)</li><li>ils/elles <strong>se</strong> lèvent (they get up)</li></ul><p><strong>Common reflexive verbs for daily routines:</strong></p><ul><li><em>se lever</em> — to get up</li><li><em>se laver</em> — to wash up</li><li><em>se brosser les dents</em> — to brush teeth</li><li><em>s'habiller</em> — to get dressed</li><li><em>se coucher</em> — to go to bed</li></ul>",
                examples: [
                    { fr: "Je me lève à 7h tous les jours.", en: "I get up at 7 every day." },
                    { fr: "Elle se couche toujours à 22h.", en: "She always goes to bed at 10 PM." },
                    { fr: "On se lève tôt le lundi.", en: "We get up early on Mondays." },
                    { fr: "Tu te brosses les dents après le déjeuner ?", en: "Do you brush your teeth after breakfast?" }
                ]
            },
            {
                title: "Expressing Frequency",
                explanation: "<p>Use frequency adverbs to say how often you do things. They typically come <strong>after the verb</strong>:</p><ul><li><strong>toujours</strong> — always (Je mange toujours au bureau.)</li><li><strong>souvent</strong> — often (Je prends souvent le métro.)</li><li><strong>parfois / des fois</strong> — sometimes (Je mange parfois à la maison.)</li><li><strong>rarement</strong> — rarely (Je prends rarement le taxi.)</li><li><strong>jamais</strong> — never (Je ne mange jamais de fast food.)</li></ul><p><strong>Note on negatives:</strong> <em>jamais</em> requires <em>ne...jamais</em>: Je <em>ne</em> mange <em>jamais</em> de fast food.</p>",
                examples: [
                    { fr: "Je prends toujours le métro le matin.", en: "I always take the subway in the morning." },
                    { fr: "Je mange souvent au restaurant avec mes collègues.", en: "I often eat at the restaurant with my colleagues." },
                    { fr: "Je ne prends jamais le taxi, c'est trop cher.", en: "I never take a taxi, it's too expensive." },
                    { fr: "Des fois, je reste au bureau jusqu'à 19h.", en: "Sometimes, I stay at the office until 7 PM." }
                ]
            },
            {
                title: "Describing Your Work Schedule",
                explanation: "<p>To talk about your work schedule, use these structures:</p><ul><li><strong>Je travaille de... à...</strong> (I work from... to...)</li><li><strong>Je commence à...</strong> (I start at...)</li><li><strong>Je finis à...</strong> (I finish at...)</li><li><strong>Je travaille à temps plein / partiel.</strong> (I work full/part time.)</li></ul>",
                examples: [
                    { fr: "Je travaille de 9h à 17h, du lundi au vendredi.", en: "I work from 9 to 5, Monday to Friday." },
                    { fr: "Je commence à 8h30 et je finis à 16h30.", en: "I start at 8:30 and finish at 4:30." },
                    { fr: "Je travaille à temps partiel, 3 jours par semaine.", en: "I work part-time, 3 days a week." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Talking About Your Daily Routine",
                lines: [
                    { speaker: "A", fr: "Tu travailles à quelle heure ?", en: "What hours do you work?", align: "left" },
                    { speaker: "B", fr: "Je travaille de 9h à 17h, du lundi au vendredi.", en: "I work from 9 to 5, Monday to Friday.", align: "right" },
                    { speaker: "A", fr: "Tu prends le métro pour aller au bureau ?", en: "Do you take the subway to go to the office?", align: "left" },
                    { speaker: "B", fr: "Oui, je prends toujours le métro orange, c'est rapide.", en: "Yes, I always take the orange line, it's fast.", align: "right" },
                    { speaker: "A", fr: "Et tu dînes au bureau ou tu rentres à la maison ?", en: "And do you have lunch at the office or do you go home?", align: "left" },
                    { speaker: "B", fr: "Des fois je mange au bureau, des fois je vais au restaurant avec mes collègues.", en: "Sometimes I eat at the office, sometimes I go to the restaurant with my colleagues.", align: "right" }
                ]
            },
            {
                context: "Morning Routine",
                lines: [
                    { speaker: "A", fr: "Tu te lèves à quelle heure ?", en: "What time do you get up?", align: "left" },
                    { speaker: "B", fr: "Je me lève à 6h30, parce que je commence à 8h.", en: "I get up at 6:30, because I start at 8.", align: "right" },
                    { speaker: "A", fr: "Oh, c'est tôt ! Tu prends le temps de déjeuner ?", en: "Oh, that's early! Do you have time for breakfast?", align: "left" },
                    { speaker: "B", fr: "Oui, j'mange toujours — un café et des rôties.", en: "Yes, I always eat — a coffee and some toast.", align: "right" },
                    { speaker: "A", fr: "Et tu te couches à quelle heure ?", en: "And what time do you go to bed?", align: "left" },
                    { speaker: "B", fr: "Vers 22h, sinon je suis trop fatigué le lendemain.", en: "Around 10 PM, otherwise I am too tired the next day.", align: "right" }
                ]
            }
        ],
        culture: "<p><strong>Quebec Meal Names (Very Different from France!):</strong><br>In Quebec: <em>déjeuner</em> = breakfast, <em>dîner</em> = lunch, <em>souper</em> = dinner.<br>In France: <em>petit-déjeuner</em> = breakfast, <em>déjeuner</em> = lunch, <em>dîner</em> = dinner.<br>This is one of the most famous traps for Standard French speakers visiting Quebec! If a Quebecker invites you for <em>dîner</em>, they mean lunch, not dinner.</p>"
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
            { fr: "Je cherche un appartement.", en: "I am looking for an apartment." },
            { fr: "Quel est le loyer ?", en: "What is the rent?" },
            { fr: "Est-ce que le chauffage est inclus ?", en: "Is heating included?" },
            { fr: "Est-ce que le stationnement est inclus ?", en: "Is parking included?" },
            { fr: "Est-ce que les animaux sont acceptés ?", en: "Are pets allowed?" },
            { fr: "C'est meublé ou non meublé ?", en: "Is it furnished or unfurnished?" },
            { fr: "C'est combien la caution ?", en: "How much is the deposit?" },
            { fr: "C'est trop cher pour moi.", en: "It is too expensive for me." },
            { fr: "Ça m'intéresse, je veux visiter.", en: "I'm interested, I want to visit." }
        ],
        grammar: [
            {
                title: "Avoir besoin de (I need...)",
                explanation: "<p>Used constantly to express needs. Structure: <strong>avoir besoin de</strong> + noun or verb.</p><p><strong>Elision rule:</strong> If the next word starts with a vowel, <em>de</em> becomes <em>d'</em>:</p><ul><li>J'ai besoin <strong>d'</strong>un appartement. (NOT: de un)</li><li>J'ai besoin <strong>d'</strong>aide. (I need help.)</li></ul><p>If the next word starts with a consonant, keep <em>de</em>:</p><ul><li>J'ai besoin <strong>de</strong> temps. (I need time.)</li><li>J'ai besoin <strong>de</strong> toi. (I need you.)</li></ul>",
                examples: [
                    { fr: "J'ai besoin d'un appartement.", en: "I need an apartment." },
                    { fr: "J'ai besoin de trouver un logement.", en: "I need to find housing." },
                    { fr: "J'ai besoin d'un stationnement.", en: "I need parking." },
                    { fr: "J'ai besoin d'aide pour signer le bail.", en: "I need help to sign the lease." }
                ]
            },
            {
                title: "Asking Questions with 'Est-ce que'",
                explanation: "<p><strong>Est-ce que</strong> is the most natural way to form yes/no questions in Quebec French. Simply place it at the beginning of any statement:</p><ul><li>Le chauffage est inclus. → <strong>Est-ce que</strong> le chauffage est inclus ?</li><li>Il y a un stationnement. → <strong>Est-ce que</strong> il y a un stationnement ?</li><li>Les animaux sont acceptés. → <strong>Est-ce que</strong> les animaux sont acceptés ?</li></ul><p>Before a vowel, <em>que</em> becomes <em>qu'</em>: Est-ce <em>qu'</em>il y a un stationnement ?</p>",
                examples: [
                    { fr: "Est-ce que le chauffage est inclus ?", en: "Is heating included?" },
                    { fr: "Est-ce qu'il y a un stationnement ?", en: "Is there parking?" },
                    { fr: "Est-ce que je peux visiter l'appartement demain ?", en: "Can I visit the apartment tomorrow?" }
                ]
            },
            {
                title: "C'est vs Il y a",
                explanation: "<p>Two frequently confused constructions:</p><ul><li><strong>C'est</strong> — 'It is' — used to identify or describe: <em>C'est un 3½.</em> (It is a 3½.)</li><li><strong>Il y a</strong> — 'There is/are' — used to indicate existence: <em>Il y a une buanderie.</em> (There is a laundry room.)</li></ul>",
                examples: [
                    { fr: "C'est un appartement non meublé.", en: "It is an unfurnished apartment." },
                    { fr: "Il y a un balcon et un stationnement.", en: "There is a balcony and parking." },
                    { fr: "C'est 1400 dollars par mois.", en: "It is 1400 dollars per month." }
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
                    { speaker: "B", fr: "Oui, je sais. D'accord, si je vois quelque chose, je te dis.", en: "Yes, I know. Okay, if I see something, I'll tell you.", align: "right" }
                ]
            }
        ],
        culture: "<p><strong>Quebec Apartment Sizes (The ½ System):</strong> In Quebec, the bathroom counts as '½'. So:<br>• 3½ = 1-bedroom (kitchen + living room + bedroom + bathroom)<br>• 4½ = 2-bedroom<br>• 5½ = 3-bedroom<br>Moving day in Quebec is traditionally <strong>July 1st</strong> — the national moving day when thousands of leases expire at once, making it one of the most chaotic days of the year in Montreal!</p>"
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
            { fr: "de la glace", en: "ice" },
            { fr: "une tempête de neige", en: "a snowstorm / blizzard" },
            { fr: "une averse", en: "a downpour / rainstorm" },
            { fr: "l'hiver", en: "winter" },
            { fr: "le printemps", en: "spring" },
            { fr: "l'été", en: "summer" },
            { fr: "l'automne", en: "fall / autumn" },
            { fr: "Il fait beau.", en: "The weather is nice." },
            { fr: "Il fait chaud.", en: "It is hot." },
            { fr: "Il fait froid.", en: "It is cold." },
            { fr: "Il fait frette.", en: "It is freezing cold. (Quebec slang)", note: "Essential Quebec vocabulary — used constantly in winter!" },
            { fr: "Il fait -20.", en: "It is -20 degrees." },
            { fr: "Il neige.", en: "It is snowing." },
            { fr: "Il pleut.", en: "It is raining." },
            { fr: "Il vente.", en: "It is windy." },
            { fr: "On prévoit du soleil.", en: "Sun is forecasted." },
            { fr: "On annonce de la neige.", en: "Snow is announced." },
            { fr: "Le temps est nuageux.", en: "The weather is cloudy." },
            { fr: "Le verglas", en: "black ice", note: "Very dangerous in Quebec winters — roads and sidewalks freeze." },
            { fr: "pelleter la neige", en: "to shovel snow", note: "A daily winter chore for Quebec homeowners." },
            { fr: "le manteau d'hiver", en: "the winter coat" },
            { fr: "les bottes de neige", en: "snow boots" },
            { fr: "les mitaines", en: "mittens (Quebec word)", note: "In France: 'moufles'. In Quebec: 'mitaines'." }
        ],
        grammar: [
            {
                title: "Describing Weather — Il fait, Il y a, Il + verb",
                explanation: "<p>There are three main patterns for talking about weather in French, all using the impersonal <strong>il</strong>:</p><p><strong>1. Il fait + adjective</strong> (state of weather):</p><ul><li>Il fait beau. (Nice weather.)</li><li>Il fait chaud. (Hot.)</li><li>Il fait froid. / Il fait frette. (Cold. / Freezing.)</li></ul><p><strong>2. Il + weather verb</strong> (an action):</p><ul><li>Il neige. (It snows.)</li><li>Il pleut. (It rains.)</li><li>Il vente. (It is windy.)</li></ul><p><strong>3. Il y a + noun</strong> (existence of a weather phenomenon):</p><ul><li>Il y a du soleil. (There is sun.)</li><li>Il y a du vent. (There is wind.)</li><li>Il y a de la neige. (There is snow.)</li></ul>",
                examples: [
                    { fr: "On prévoit du soleil à Ottawa aujourd'hui.", en: "Sun is forecasted in Ottawa today." },
                    { fr: "On annonce de la neige à Québec demain.", en: "Snow is announced in Quebec City tomorrow." },
                    { fr: "Il vente beaucoup à Chicoutimi cette semaine.", en: "It is very windy in Chicoutimi this week." },
                    { fr: "En hiver, il fait très froid au Québec, il neige beaucoup.", en: "In winter, it is very cold in Quebec, it snows a lot." },
                    { fr: "En été, il fait chaud, on va à la plage.", en: "In summer, it is hot, we go to the beach." }
                ]
            },
            {
                title: "Seasons and Climate — When Things Happen",
                explanation: "<p>Use <strong>en</strong> before most seasons, but <strong>au</strong> before <em>printemps</em>:</p><ul><li><em>en</em> hiver (in winter)</li><li><em>en</em> été (in summer)</li><li><em>en</em> automne (in fall)</li><li><em>au</em> printemps (in spring)</li></ul><p><strong>Quebec seasons summary:</strong></p><ul><li>Hiver (Dec–Mar): -5°C to -30°C, lots of snow</li><li>Printemps (Apr–May): melting, muddy, very rainy</li><li>Été (Jun–Sep): hot and humid, up to 35°C</li><li>Automne (Oct–Nov): cool, spectacular leaves</li></ul>",
                examples: [
                    { fr: "En hiver, il fait frette et il y a beaucoup de neige.", en: "In winter, it's freezing and there's a lot of snow." },
                    { fr: "En été, il fait très chaud et humide.", en: "In summer, it is very hot and humid." },
                    { fr: "Au printemps, il pleut beaucoup.", en: "In spring, it rains a lot." },
                    { fr: "En automne, les feuilles sont rouges et oranges.", en: "In fall, the leaves are red and orange." }
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
                    { speaker: "B", fr: "Oui, ça marche ! Mais demain, on annonce de la pluie.", en: "Yes, deal! But tomorrow, rain is announced.", align: "right" },
                    { speaker: "A", fr: "Oh non... et après-demain ?", en: "Oh no... and the day after tomorrow?", align: "left" },
                    { speaker: "B", fr: "Après-demain, il va faire frette ! Il faut sortir les manteaux d'hiver.", en: "The day after, it's going to be freezing! We need to get out the winter coats.", align: "right" }
                ]
            },
            {
                context: "Complaining About the Winter",
                lines: [
                    { speaker: "A", fr: "Câline, il fait frette aujourd'hui !", en: "Wow, it's freezing today!", align: "left" },
                    { speaker: "B", fr: "Oui, c'est -25 avec le facteur vent.", en: "Yes, it's -25 with the wind chill.", align: "right" },
                    { speaker: "A", fr: "J'en peux plus de l'hiver. Quand est-ce que le printemps arrive ?", en: "I can't take winter anymore. When does spring arrive?", align: "left" },
                    { speaker: "B", fr: "Haha, encore 3 mois ! Mais en attendant, on peut faire du ski !", en: "Haha, 3 more months! But in the meantime, we can go skiing!", align: "right" },
                    { speaker: "A", fr: "Bonne idée ! Allons-y ce week-end.", en: "Good idea! Let's go this weekend.", align: "left" },
                    { speaker: "B", fr: "Parfait ! J'ai hâte !", en: "Perfect! I can't wait!", align: "right" }
                ]
            }
        ],
        culture: "<p>Quebec winters are extreme — temperatures regularly drop to -20°C or colder, and <em>le facteur vent</em> (wind chill) can make it feel like -35°C. Yet Quebeckers have a saying: <em>'Il n'y a pas de mauvais temps, juste des mauvais vêtements'</em> (There's no bad weather, just bad clothing). Complaining about winter is practically a cultural tradition, but Quebeckers still embrace outdoor winter activities like skiing, skating, and the world-famous <strong>Carnaval de Québec</strong>.</p>"
    },
    {
        id: "15",
        title: "Vêtements, Nourriture et Futur Proche",
        theme: "Clothes, Food, and Near Future",
        vocabulary: [
            // Clothing
            { fr: "le parasol", en: "the sun umbrella" },
            { fr: "le maillot de bain", en: "the swimsuit" },
            { fr: "le chapeau", en: "the hat" },
            { fr: "la crème solaire", en: "the sunscreen" },
            { fr: "les sandales", en: "the sandals" },
            { fr: "la jupe", en: "the skirt" },
            { fr: "le manteau", en: "the winter coat" },
            { fr: "les lunettes de soleil", en: "the sunglasses" },
            { fr: "les bottes", en: "the boots" },
            { fr: "le chandail", en: "the sweater (Quebec word)", note: "In France: 'pull'. In Quebec: 'chandail'." },
            { fr: "le t-shirt", en: "the t-shirt" },
            { fr: "le pantalon", en: "the pants / trousers" },
            { fr: "les souliers", en: "the shoes (Quebec word)", note: "In France: 'chaussures'. In Quebec: 'souliers'." },
            { fr: "l'itinéraire", en: "the itinerary / route" },
            // Food vocabulary
            { fr: "du poulet", en: "chicken" },
            { fr: "une fraise", en: "a strawberry" },
            { fr: "des œufs", en: "eggs" },
            { fr: "un concombre", en: "a cucumber" },
            { fr: "du fromage", en: "cheese" },
            { fr: "une carotte", en: "a carrot" },
            { fr: "des bleuets", en: "blueberries", note: "Quebec's signature fruit — from the Lac-Saint-Jean region!" },
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
            // Meal structure
            { fr: "l'entrée", en: "the appetizer / starter" },
            { fr: "la soupe", en: "the soup" },
            { fr: "la salade", en: "the salad" },
            { fr: "le plat principal", en: "the main course" },
            { fr: "le dessert", en: "the dessert" },
            // Taste expressions
            { fr: "C'est super bon !", en: "This is so good!" },
            { fr: "C'est délicieux !", en: "This is delicious!" },
            { fr: "C'est succulent !", en: "This is succulent!" },
            { fr: "Miam !", en: "Yum!" },
            { fr: "Que c'est savoureux !", en: "How flavorful!" },
            { fr: "C'est écoeurant !", en: "This is AMAZING! (Quebec slang)", note: "Positive when talking about food. 'C'est écoeurant bon!' = It's disgustingly good!" }
        ],
        grammar: [
            {
                title: "Futur Proche (Near Future) — Aller + Infinitive",
                explanation: "<p>The <em>futur proche</em> expresses things you <strong>are going to do</strong> — very close to English 'be going to'. It is by far the most common future tense at the A1 level.</p><p><strong>Structure: Aller (conjugated) + Infinitive Verb</strong></p><ul><li>je <strong>vais</strong> manger (I am going to eat)</li><li>tu <strong>vas</strong> partir (you are going to leave)</li><li>il/elle <strong>va</strong> pleuvoir (it is going to rain)</li><li>nous <strong>allons</strong> faire (we are going to do)</li><li>vous <strong>allez</strong> voir (you are going to see)</li><li>ils/elles <strong>vont</strong> venir (they are going to come)</li></ul><p><strong>Negative form:</strong> ne + aller + pas + infinitive: Je <em>ne vais pas</em> manger. (I am not going to eat.)</p>",
                examples: [
                    { fr: "Maintenant, je prends un bain. Bientôt, je vais aller au lit.", en: "Now I'm taking a bath. Soon, I am going to go to bed." },
                    { fr: "Aujourd'hui, il fait soleil. Demain, il va venter très fort et il va pleuvoir.", en: "Today it's sunny. Tomorrow, it is going to be very windy and rainy." },
                    { fr: "On va aller à la plage ce week-end. On va nager dans le lac.", en: "We are going to go to the beach this weekend. We are going to swim in the lake." },
                    { fr: "Je ne vais pas manger de fast food cette semaine.", en: "I am not going to eat fast food this week." }
                ]
            },
            {
                title: "Quantities — Partitive Articles (du, de la, des, de l')",
                explanation: "<p>Use <strong>partitive articles</strong> to express an unspecified quantity of something — 'some':</p><ul><li><strong>du</strong> + masculine singular: du pain, du bœuf, du fromage</li><li><strong>de la</strong> + feminine singular: de la laitue, de la pluie</li><li><strong>de l'</strong> + vowel start: de l'eau, de l'huile</li><li><strong>des</strong> + plural: des bleuets, des œufs, des pâtes</li></ul><p><strong>After a negative verb</strong>, all partitive articles become simply <strong>de</strong> (or <strong>d'</strong>):</p><ul><li>Je mange du pain. → Je ne mange <strong>pas de</strong> pain.</li><li>Il y a des bleuets. → Il n'y a <strong>pas de</strong> bleuets.</li></ul>",
                examples: [
                    { fr: "du lait", en: "some milk" },
                    { fr: "de la laitue", en: "some lettuce" },
                    { fr: "des bleuets", en: "some blueberries" },
                    { fr: "Je mange du poulet ce soir.", en: "I am eating chicken tonight." },
                    { fr: "Je ne mange pas de viande.", en: "I don't eat meat." }
                ]
            },
            {
                title: "Specific Quantities",
                explanation: "<p>For measured / specific amounts, use the quantity expression + <strong>de</strong> (NOT du/de la/des):</p><ul><li>deux litres <strong>de</strong> lait</li><li>une tranche <strong>de</strong> pain</li><li>un kilo <strong>de</strong> bœuf</li><li>un verre <strong>d'</strong>eau</li><li>une boite <strong>de</strong> pâtes</li></ul>",
                examples: [
                    { fr: "deux litres de lait", en: "two liters of milk" },
                    { fr: "une tranche de pain", en: "a slice of bread" },
                    { fr: "un kilo de carottes", en: "a kilo of carrots" },
                    { fr: "Je vais acheter un kilo de bleuets au marché.", en: "I am going to buy a kilo of blueberries at the market." }
                ]
            }
        ],
        dialogues: [
            {
                context: "Talking About Food Preferences",
                lines: [
                    { speaker: "A", fr: "J'adore la poutine, c'est le plat québécois préféré !", en: "I love poutine, it's my favourite Quebecois dish!", align: "left" },
                    { speaker: "B", fr: "Les bleuets sauvages du Québec sont super bons !", en: "Quebec's wild blueberries are so good!", align: "right" },
                    { speaker: "A", fr: "Je préfère le poulet au bœuf, c'est plus léger.", en: "I prefer chicken to beef, it's lighter.", align: "left" },
                    { speaker: "B", fr: "Miam ! C'est écoeurant bon, la nourriture québécoise !", en: "Yum! Quebec food is disgustingly good!", align: "right" }
                ]
            },
            {
                context: "Planning a Beach Weekend",
                lines: [
                    { speaker: "A", fr: "Qu'est-ce qu'on va faire ce week-end ?", en: "What are we going to do this weekend?", align: "left" },
                    { speaker: "B", fr: "On va aller à la plage, il va faire beau !", en: "We are going to go to the beach, it's going to be nice!", align: "right" },
                    { speaker: "A", fr: "Parfait ! Je vais apporter les sandales et la crème solaire.", en: "Perfect! I am going to bring the sandals and sunscreen.", align: "left" },
                    { speaker: "B", fr: "Moi, je vais préparer le lunch — du poulet, de la salade, et des bleuets.", en: "Me, I am going to prepare the lunch — chicken, salad, and blueberries.", align: "right" },
                    { speaker: "A", fr: "C'est super ! On va nager dans le lac ?", en: "That's great! Are we going to swim in the lake?", align: "left" },
                    { speaker: "B", fr: "Oui, bien sûr ! Et le soir, on va faire un feu sur la plage.", en: "Yes, of course! And in the evening, we are going to make a fire on the beach.", align: "right" },
                    { speaker: "A", fr: "J'ai tellement hâte !", en: "I can't wait so much!", align: "left" }
                ]
            }
        ],
        culture: "<p>Summers in Quebec are surprisingly hot and humid, leading to an immediate switch from huge winter coats to swimsuits. Wild blueberries (<em>bleuets sauvages</em>) from the Lac-Saint-Jean region are a beloved cultural symbol — Quebeckers are very proud of them. Note the Quebec clothing vocabulary: <em>souliers</em> instead of chaussures (shoes), <em>chandail</em> instead of pull (sweater), and <em>mitaines</em> instead of moufles (mittens).</p>"
    }
];
