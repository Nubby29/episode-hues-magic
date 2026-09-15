import type { ThemeKey } from "./theme-data";

export interface SourceLink {
  label: string;
  url: string;
  free?: boolean;
}

export interface AnimeEntry {
  key: ThemeKey;
  title: string;
  format: string;
  episodes: string;
  aired: string;
  arcs: string[];
  synopsis: string;
  watchNote: string;
  /** Official YouTube video ID (Crunchyroll / Kadokawa), embedded lazily. */
  trailerId?: string;
  /** Official Muse Asia full-film video ID. */
  fullVideoId?: string;
  links: SourceLink[];
}

export const animeEntries: AnimeEntry[] = [
  {
    key: "season1",
    title: "Re:Zero − Starting Life in Another World",
    format: "TV series",
    episodes: "25 episodes",
    aired: "April – September 2016",
    arcs: ["Arc 1: A Day in the Capital", "Arc 2: A Week at the Mansion", "Arc 3: Truth of Zero"],
    synopsis:
      "Natsuki Subaru is pulled out of a convenience-store night and into a kingdom of dragons, spirits and witches. Death is not an ending for him — it is a checkpoint, and the price of every loop is paid in memory and grief.",
    watchNote: "Start here. The Director's Cut recaps Arc 1–2 in 13 hour-long episodes.",
    trailerId: "65BiDF9YdGg",
    links: [
      { label: "Watch on Crunchyroll", url: "https://www.crunchyroll.com/series/GRGG9798R", free: true },
    ],
  },
  {
    key: "season2",
    title: "Re:Zero Season 2",
    format: "TV series (split cour)",
    episodes: "25 episodes",
    aired: "July 2020 – March 2021",
    arcs: ["Arc 4: The Everlasting Contract"],
    synopsis:
      "Trapped inside a barrier-bound Sanctuary, Subaru is forced to negotiate with Echidna, the Witch of Greed, while Emilia faces trials built from her own buried past and the mansion burns behind him.",
    watchNote: "Watch Memory Snow and Frozen Bond before Season 2.",
    trailerId: "LjOPj-wdHx4",
    links: [
      { label: "Watch on Crunchyroll", url: "https://www.crunchyroll.com/series/GRGG9798R", free: true },
    ],
  },
  {
    key: "season3",
    title: "Re:Zero Season 3",
    format: "TV series",
    episodes: "16 episodes",
    aired: "October 2024 – 2025",
    arcs: ["Arc 5: Stars of the Water Gate"],
    synopsis:
      "The water city of Priestella becomes a battlefield as three Sin Archbishops converge on it at once. Every camp of the Royal Selection is dragged into the same night, and Subaru has to fight as a strategist rather than a survivor.",
    watchNote: "The largest ensemble battle in the series so far.",
    trailerId: "lXs3yIc_2CU",
    links: [
      { label: "Watch on Crunchyroll", url: "https://www.crunchyroll.com/series/GRGG9798R", free: true },
    ],
  },
  {
    key: "memory-snow",
    title: "Re:Zero — Memory Snow",
    format: "OVA film",
    episodes: "1 film (~60 min)",
    aired: "October 2018",
    arcs: ["Side story, set after Arc 3"],
    synopsis:
      "A warm, comedic breather in a snowbound village: a botched investigation, a village of suspicious children, and a night of quiet gratitude between Subaru and the people he saved.",
    watchNote: "Optional in plot terms, essential in tone.",
    fullVideoId: "szvKTRxLMxk",
    links: [
      { label: "Watch on Crunchyroll", url: "https://www.crunchyroll.com/series/GRGG9798R", free: true },
    ],
  },
  {
    key: "frozen-bond",
    title: "Re:Zero — The Frozen Bond",
    format: "OVA film",
    episodes: "1 film (~60 min)",
    aired: "November 2019",
    arcs: ["Prequel side story"],
    synopsis:
      "Emilia's story before Subaru: a half-elf girl waking in a frozen forest, and the contract with a cat-shaped spirit named Puck that gave her a name to hold on to.",
    watchNote: "Best watched right before Season 2.",
    fullVideoId: "hOvCHC-w3tQ",
    links: [
      { label: "Watch on Crunchyroll", url: "https://www.crunchyroll.com/series/GRGG9798R", free: true },
    ],
  },
];

export interface NovelEntry {
  arc: string;
  title: string;
  volumes: string;
  summary: string;
  webNote: string;
}

export const novelArcs: NovelEntry[] = [
  {
    arc: "Arc 1",
    title: "A Day in the Capital",
    volumes: "Light novel vol. 1",
    summary: "One street, one stolen insignia, one loop that keeps ending in a warehouse.",
    webNote: "Web novel chapters 1–34.",
  },
  {
    arc: "Arc 2",
    title: "A Week at the Mansion",
    volumes: "Light novel vol. 2–3",
    summary: "Roswaal's mansion, twin maids, and a week that refuses to reach its eighth day.",
    webNote: "Web novel chapters 35–102.",
  },
  {
    arc: "Arc 3",
    title: "Truth of Zero",
    volumes: "Light novel vol. 4–9",
    summary: "The Royal Selection begins, the White Whale is hunted, and Subaru is broken and rebuilt.",
    webNote: "Web novel chapters 103–305. The arc most expanded in the light novel edition.",
  },
  {
    arc: "Arc 4",
    title: "The Everlasting Contract",
    volumes: "Light novel vol. 10–15",
    summary: "Sanctuary, the Witch of Greed's tea party, and four trials of memory.",
    webNote: "Web novel chapters 306–470.",
  },
  {
    arc: "Arc 5",
    title: "Stars of the Water Gate",
    volumes: "Light novel vol. 16–20",
    summary: "Priestella under siege; a city-wide war against Lust, Greed and Gluttony.",
    webNote: "Web novel chapters 471–592.",
  },
  {
    arc: "Arc 6",
    title: "The Memory Snow Tower",
    volumes: "Light novel vol. 21–26",
    summary: "The Pleiades Watchtower, a sea of sand, and the cost of asking for erased memories back.",
    webNote: "Web novel chapters 593–724. Not yet animated.",
  },
  {
    arc: "Arc 7",
    title: "The Vollachia Imperial Arc",
    volumes: "Light novel vol. 27–",
    summary: "Subaru wakes in the Vollachian Empire, small, alone and hunted.",
    webNote: "Ongoing in the web novel.",
  },
];

/** The original web serial, published free in Japanese. */
export const WEB_NOVEL_URL = "https://ncode.syosetu.com/n2267be/";
/** Community English translation of the free web novel. */
export const WEB_NOVEL_EN_URL = "https://witchculttranslation.com/";
/** Official English light novel publisher. */
export const LIGHT_NOVEL_URL =
  "https://yenpress.com/series/rezero-starting-life-in-another-world-light-novel";
/** Official English manga publisher. */
export const MANGA_URL =
  "https://yenpress.com/series/rezero-starting-life-in-another-world-manga";

export interface MangaEntry {
  title: string;
  chapters: string;
  artist: string;
  covers: string;
  note: string;
}

export const mangaEntries: MangaEntry[] = [
  {
    title: "Chapter 1: A Day in the Capital",
    chapters: "2 volumes",
    artist: "Art by Daichi Matsuse",
    covers: "Arc 1",
    note: "A tight, faithful adaptation — the cleanest entry point for readers.",
  },
  {
    title: "Chapter 2: A Week at the Mansion",
    chapters: "5 volumes",
    artist: "Art by Makoto Fugetsu",
    covers: "Arc 2",
    note: "Leans into horror framing; the loop reveals land harder in panels.",
  },
  {
    title: "Chapter 3: Truth of Zero",
    chapters: "11 volumes",
    artist: "Art by Daichi Matsuse",
    covers: "Arc 3",
    note: "The longest and most complete manga adaptation to date.",
  },
  {
    title: "Chapter 4: The Sanctuary and the Witch of Greed",
    chapters: "Ongoing",
    artist: "Art by Yu Aikawa",
    covers: "Arc 4",
    note: "Currently serialising the Sanctuary arc.",
  },
  {
    title: "Official Anthology & Spin-offs",
    chapters: "Various",
    artist: "Multiple artists",
    covers: "Side stories",
    note: "Comedy shorts, Ex novel adaptations and the Daily Life of the Sword Devil.",
  },
];

export type WikiKind = "character" | "lore";

export interface WikiEntry {
  slug: string;
  name: string;
  kind: WikiKind;
  tag: string;
  short: string;
  body: string[];
  facts: { label: string; value: string }[];
  related: string[];
}

export const wikiEntries: WikiEntry[] = [
  {
    slug: "subaru-natsuki",
    name: "Subaru Natsuki",
    kind: "character",
    tag: "Protagonist",
    short: "An ordinary boy whose only power is dying and starting again.",
    body: [
      "Summoned from modern Japan with nothing but stubbornness, Subaru carries the authority of Return by Death: when he dies, time rewinds to a checkpoint only he remembers.",
      "He cannot speak of the power — an unseen hand closes around his heart when he tries. The result is a hero who hoards trauma in silence and calls it strategy.",
      "His growth across the arcs is less about strength than about learning to ask for help, and to value the people around him as more than pieces on a board.",
    ],
    facts: [
      { label: "Origin", value: "Modern Japan" },
      { label: "Authority", value: "Return by Death" },
      { label: "Camp", value: "Emilia camp, knight" },
    ],
    related: ["emilia", "rem", "beatrice", "return-by-death"],
  },
  {
    slug: "emilia",
    name: "Emilia",
    kind: "character",
    tag: "Royal candidate",
    short: "A silver-haired half-elf who wants to be liked more than she wants a throne.",
    body: [
      "Feared for resembling the Witch of Envy, Emilia grew up in the frozen Elior Forest under a spirit's care and woke into a world that had already decided to hate her.",
      "She enters the Royal Selection promising a kingdom where nobody is excluded — a naive vow she refuses to soften.",
      "Her ice magic is enormous but unfinished, and the Sanctuary trials force her to confront the childhood she sealed away.",
    ],
    facts: [
      { label: "Race", value: "Half-elf" },
      { label: "Contract", value: "Puck, the Great Spirit" },
      { label: "Element", value: "Ice, with vast reserves" },
    ],
    related: ["puck", "subaru-natsuki", "royal-selection", "witch-of-envy"],
  },
  {
    slug: "rem",
    name: "Rem",
    kind: "character",
    tag: "Mansion maid",
    short: "The blue-haired twin who loves fiercely once she chooses to.",
    body: [
      "An oni maid at Roswaal's mansion, Rem hides devastating strength and a lifetime of comparison to her sister behind flat politeness.",
      "Her arc turns on being seen as herself rather than as a replacement, and her confession scene is the emotional spine of Arc 3.",
      "Gluttony's authority later erases her from the world's memory, leaving her sleeping and unremembered by nearly everyone.",
    ],
    facts: [
      { label: "Race", value: "Oni (single horn)" },
      { label: "Weapon", value: "Morning star" },
      { label: "Status", value: "Erased from memory after Arc 3" },
    ],
    related: ["ram", "subaru-natsuki", "sin-archbishops"],
  },
  {
    slug: "ram",
    name: "Ram",
    kind: "character",
    tag: "Mansion maid",
    short: "Sharp-tongued, hornless, and quietly the more fragile twin.",
    body: [
      "Ram serves Roswaal with unnerving loyalty and treats Subaru as a barbarian to be corrected.",
      "Her lost horn cost her most of her mana and her memory of the village she came from, and her clairvoyance keeps her tethered to Rem.",
      "Beneath the insults sits grief she never names aloud.",
    ],
    facts: [
      { label: "Race", value: "Oni (horn lost)" },
      { label: "Ability", value: "Clairvoyance, wind magic" },
      { label: "Serves", value: "Roswaal L Mathers" },
    ],
    related: ["rem", "roswaal", "sanctuary"],
  },
  {
    slug: "beatrice",
    name: "Beatrice",
    kind: "character",
    tag: "Librarian spirit",
    short: "A four-hundred-year-old spirit waiting in a forbidden library for one person.",
    body: [
      "Beatrice guards the mansion's archive of forbidden books and speaks in the clipped cadence of someone who has been alone far too long.",
      "Created by Echidna, she was told to wait for 'that person' — a promise that has hollowed out four centuries.",
      "Her contract with Subaru in Arc 4 is one of the series' most earned turns, granting him access to her spatial magic.",
    ],
    facts: [
      { label: "Type", value: "Artificial spirit" },
      { label: "Magic", value: "Yin, Murak, spatial gates" },
      { label: "Made by", value: "Echidna" },
    ],
    related: ["echidna", "subaru-natsuki", "roswaal"],
  },
  {
    slug: "puck",
    name: "Puck",
    kind: "character",
    tag: "Great Spirit",
    short: "A palm-sized cat with the temper of a father and the power of a calamity.",
    body: [
      "Puck contracted with Emilia in the frozen forest, naming her and raising her.",
      "His playful form conceals the Beast of the End; when Emilia dies, the world pays.",
      "The Frozen Bond film is largely his story as much as hers.",
    ],
    facts: [
      { label: "Type", value: "Great Spirit of fire" },
      { label: "Contract", value: "Emilia" },
      { label: "Alias", value: "Beast of the End" },
    ],
    related: ["emilia", "frozen-forest"],
  },
  {
    slug: "roswaal",
    name: "Roswaal L Mathers",
    kind: "character",
    tag: "Margrave",
    short: "A clownish court mage playing a four-hundred-year-old game.",
    body: [
      "Roswaal sponsors Emilia's candidacy, funds the mansion, and lies about nearly everything with a drawl.",
      "His obsession with Echidna's Gospel drives the Sanctuary arc's cruelty, including his willingness to let the mansion burn on schedule.",
      "He is the series' clearest study of devotion turned into pathology.",
    ],
    facts: [
      { label: "Role", value: "Margrave of Lugunica" },
      { label: "Magic", value: "All six elements" },
      { label: "Goal", value: "Fulfil Echidna's Gospel" },
    ],
    related: ["echidna", "sanctuary", "gospel"],
  },
  {
    slug: "echidna",
    name: "Echidna",
    kind: "character",
    tag: "Witch of Greed",
    short: "A dead witch who hosts tea parties inside a dream.",
    body: [
      "Echidna's soul persists within the Sanctuary, offering Subaru knowledge, sympathy and a contract — each one a hook.",
      "She wants to know everything, including him, and treats affection and vivisection as neighbouring impulses.",
      "Her tea parties reframe the entire Sanctuary arc as a negotiation Subaru is losing.",
    ],
    facts: [
      { label: "Title", value: "Witch of Greed" },
      { label: "Domain", value: "The Sanctuary's dream space" },
      { label: "Created", value: "Beatrice, the trials" },
    ],
    related: ["beatrice", "sanctuary", "witch-of-envy", "roswaal"],
  },
  {
    slug: "reinhard",
    name: "Reinhard van Astrea",
    kind: "character",
    tag: "Sword Saint",
    short: "The kingdom's strongest man, and its politest.",
    body: [
      "Reinhard carries so many divine protections that he functions as a walking answer to almost any threat — which is exactly why the plot keeps him elsewhere.",
      "He serves Felt as her knight in the Royal Selection while bearing his family's fractured legacy.",
    ],
    facts: [
      { label: "Title", value: "Sword Saint" },
      { label: "Knight of", value: "Felt" },
      { label: "Family", value: "House Astrea" },
    ],
    related: ["felt", "divine-protection", "royal-selection"],
  },
  {
    slug: "felt",
    name: "Felt",
    kind: "character",
    tag: "Royal candidate",
    short: "A slum thief with the blood of the old royal line.",
    body: [
      "Felt steals Emilia's insignia in the first loop and never stops resenting the destiny that follows.",
      "She wants the slums levelled and rebuilt, and takes the throne only to keep others from it.",
    ],
    facts: [
      { label: "Origin", value: "Capital slums" },
      { label: "Knight", value: "Reinhard van Astrea" },
      { label: "Guardian", value: "Rom" },
    ],
    related: ["reinhard", "royal-selection"],
  },
  {
    slug: "julius",
    name: "Julius Juukulius",
    kind: "character",
    tag: "Finest Knight",
    short: "A spirit knight whose courtesy Subaru first mistakes for cruelty.",
    body: [
      "Julius serves Anastasia and fights alongside six quasi-spirits.",
      "His duel with Subaru is a humiliation that becomes a friendship, and Gluttony later erases his name from everyone but Subaru.",
    ],
    facts: [
      { label: "Title", value: "Finest of Knights" },
      { label: "Serves", value: "Anastasia Hoshin" },
      { label: "Fights with", value: "Six quasi-spirits" },
    ],
    related: ["subaru-natsuki", "royal-selection", "sin-archbishops"],
  },
  {
    slug: "garfiel",
    name: "Garfiel Tinsel",
    kind: "character",
    tag: "Sanctuary guardian",
    short: "A half-beast boy guarding a cage he calls a home.",
    body: [
      "Garfiel keeps the Sanctuary's residents inside the barrier out of a fear he cannot articulate.",
      "His confrontation with Subaru is a mirror match of two people terrified of losing what little they have.",
    ],
    facts: [
      { label: "Race", value: "Half-beast" },
      { label: "Role", value: "Guardian of the Sanctuary" },
      { label: "Ability", value: "Tiger transformation" },
    ],
    related: ["sanctuary", "subaru-natsuki"],
  },
  {
    slug: "return-by-death",
    name: "Return by Death",
    kind: "lore",
    tag: "Authority",
    short: "Subaru's checkpoint: death rewinds time, memory stays.",
    body: [
      "Granted by the Witch of Envy, Return by Death resets the world to an unpredictable save point when Subaru dies. Only he retains the loop.",
      "Speaking of it invites a crushing invisible grip, and the world grows subtly hostile toward anyone who learns.",
      "Because the checkpoint moves, every loop is a gamble on how much progress will survive.",
    ],
    facts: [
      { label: "Source", value: "Satella, Witch of Envy" },
      { label: "Cost", value: "Full memory of every death" },
      { label: "Restriction", value: "Cannot be spoken of" },
    ],
    related: ["subaru-natsuki", "witch-of-envy", "witchs-scent"],
  },
  {
    slug: "royal-selection",
    name: "The Royal Selection",
    kind: "lore",
    tag: "Politics",
    short: "Five candidates, one dragon-bound throne.",
    body: [
      "With the royal family dead of plague, Lugunica's Sages choose five candidates bearing dragon blood insignias: Emilia, Felt, Crusch, Priscilla and Anastasia.",
      "Each candidate proposes a different future for the kingdom, from Crusch's break with the dragon pact to Anastasia's merchant pragmatism.",
      "The Selection frames the political layer behind Arcs 3 and 5.",
    ],
    facts: [
      { label: "Candidates", value: "Five" },
      { label: "Overseen by", value: "The Council of Wise Men" },
      { label: "Bound to", value: "The Dragon Volcanica's pact" },
    ],
    related: ["emilia", "felt", "volcanica", "priestella"],
  },
  {
    slug: "witch-of-envy",
    name: "Satella, Witch of Envy",
    kind: "lore",
    tag: "Witch",
    short: "The half-elf who devoured half the world and still says she loves you.",
    body: [
      "Sealed rather than killed four hundred years ago, the Witch of Envy is the reason silver-haired half-elves are hunted on sight.",
      "Her voice reaches Subaru in the dark, insisting on love with a devotion indistinguishable from consumption.",
      "She is the source of Return by Death and the shadow behind the Witch Cult's obsession.",
    ],
    facts: [
      { label: "Sin", value: "Envy" },
      { label: "Sealed", value: "~400 years ago" },
      { label: "Legacy", value: "Half-elf persecution" },
    ],
    related: ["return-by-death", "emilia", "sin-archbishops", "echidna"],
  },
  {
    slug: "sin-archbishops",
    name: "The Witch Cult & Sin Archbishops",
    kind: "lore",
    tag: "Antagonists",
    short: "Seven sins, each held by someone who believes they are the loving one.",
    body: [
      "The Witch Cult worships the Witch of Envy and is led by Archbishops carrying Witch Factors: Sloth, Greed, Gluttony, Lust, Wrath, Pride.",
      "Each holds an authority that warps reality according to a personal, monstrous logic — Petelgeuse's Unseen Hands, Regulus' invulnerability, Gluttony's name-eating.",
      "Priestella's siege is the first time three of them act in concert.",
    ],
    facts: [
      { label: "Number", value: "Seven sins" },
      { label: "Power source", value: "Witch Factors" },
      { label: "Peak threat", value: "Arc 5, Priestella" },
    ],
    related: ["witch-of-envy", "priestella", "rem", "julius"],
  },
  {
    slug: "sanctuary",
    name: "The Sanctuary",
    kind: "lore",
    tag: "Location",
    short: "A refuge for mixed-bloods that is also a prison with trials.",
    body: [
      "Built by Echidna, the Sanctuary shelters those of mixed blood behind a barrier only a qualified person can dissolve.",
      "Liberation requires passing three trials of memory, resolve and future — tests designed by a witch who enjoys watching.",
      "Its fog, graveyard and greenhouse define Season 2's atmosphere.",
    ],
    facts: [
      { label: "Built by", value: "Echidna" },
      { label: "Guardian", value: "Garfiel Tinsel" },
      { label: "Trials", value: "Past, present, future" },
    ],
    related: ["echidna", "garfiel", "roswaal", "gospel"],
  },
  {
    slug: "gospel",
    name: "The Gospel",
    kind: "lore",
    tag: "Artefact",
    short: "A book that writes tomorrow for whoever it has chosen.",
    body: [
      "Witch Cult Gospels record their holder's ideal future, updating as events shift.",
      "Roswaal's copy went blank, and his attempt to force reality back into its pages drives Arc 4's cruelty.",
    ],
    facts: [
      { label: "Origin", value: "Witch Cult" },
      { label: "Function", value: "Predicts the holder's path" },
      { label: "Key holder", value: "Roswaal L Mathers" },
    ],
    related: ["roswaal", "sanctuary", "sin-archbishops"],
  },
  {
    slug: "divine-protection",
    name: "Divine Protections",
    kind: "lore",
    tag: "System",
    short: "Innate blessings that decide who is exceptional before they are born.",
    body: [
      "Divine Protections are granted by the world itself: the Sword Saint's blessing, protections of wind reading, of the flock, of resistance.",
      "They explain the gulf between ordinary people and figures like Reinhard — and why Subaru's only edge is repetition.",
    ],
    facts: [
      { label: "Granted by", value: "The world" },
      { label: "Notable", value: "Sword Saint's protection" },
      { label: "Inheritable", value: "Sometimes, by bloodline" },
    ],
    related: ["reinhard", "subaru-natsuki"],
  },
  {
    slug: "priestella",
    name: "Priestella",
    kind: "lore",
    tag: "Location",
    short: "The water gate city where every camp collides.",
    body: [
      "Priestella is a canal city built on the ruins of the Witch's homeland, home to the Church of the Divine Dragon and Anastasia's trade interests.",
      "Season 3 turns it into a chessboard: three Archbishops, five camps, and a fight for the city's control tower.",
    ],
    facts: [
      { label: "Also called", value: "The Water Gate City" },
      { label: "Season", value: "Arc 5 / Season 3" },
      { label: "Landmark", value: "The control tower" },
    ],
    related: ["sin-archbishops", "royal-selection", "witch-of-envy"],
  },
  {
    slug: "frozen-forest",
    name: "Elior Forest",
    kind: "lore",
    tag: "Location",
    short: "A forest frozen for a century around a sleeping girl.",
    body: [
      "Elior Forest was sealed in ice for a hundred years, preserving Emilia and the elves within it.",
      "The Frozen Bond film returns to it, and its thaw is one of the series' quietest catastrophes.",
    ],
    facts: [
      { label: "Frozen for", value: "About 100 years" },
      { label: "Home of", value: "Emilia and the forest elves" },
      { label: "Featured in", value: "The Frozen Bond" },
    ],
    related: ["emilia", "puck"],
  },
  {
    slug: "volcanica",
    name: "The Dragon Volcanica",
    kind: "lore",
    tag: "Pact",
    short: "The dragon whose promise keeps Lugunica standing.",
    body: [
      "Volcanica's pact with Lugunica guarantees protection, rain and the dragon blood the Royal Selection depends on.",
      "Crusch's platform — ending reliance on the dragon — makes the pact a live political question.",
    ],
    facts: [
      { label: "Type", value: "Divine Dragon" },
      { label: "Pact with", value: "The Kingdom of Lugunica" },
      { label: "Provides", value: "Protection and dragon blood" },
    ],
    related: ["royal-selection", "priestella"],
  },
  {
    slug: "witchs-scent",
    name: "The Witch's Scent",
    kind: "lore",
    tag: "Curse",
    short: "The mark every loop leaves on Subaru's body.",
    body: [
      "Each use of Return by Death deepens a miasma only witches, mabeasts and cultists can smell.",
      "It draws the Witch Cult to him and makes him legible to exactly the wrong people.",
    ],
    facts: [
      { label: "Caused by", value: "Return by Death" },
      { label: "Detected by", value: "Witches, cultists, mabeasts" },
      { label: "Effect", value: "Attracts danger" },
    ],
    related: ["return-by-death", "sin-archbishops", "subaru-natsuki"],
  },
];

export const wikiMap = Object.fromEntries(wikiEntries.map((e) => [e.slug, e]));
