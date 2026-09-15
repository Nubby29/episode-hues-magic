export interface NovelChapterMeta {
  id: string;
  arcId: string;
  chapterNumber: number;
  title: string;
  subtitle?: string;
  hasLocalContent?: boolean;
  externalUrl?: string;
}

export interface ArcMeta {
  id: string;
  arcNumber: number;
  title: string;
  japaneseTitle?: string;
  volumes: string;
  webRange: string;
  animeStatus: string;
  animeTag: "Adapted in S1" | "Adapted in S2" | "Adapted in S3" | "Starts after S3" | "Web Novel Only";
  summary: string;
  keyThemes: string[];
  totalChapters: number;
  chapters: NovelChapterMeta[];
}

export interface IfRouteMeta {
  id: string;
  name: string;
  sin: string;
  divergence: string;
  divergencePoint: string;
  tagline: string;
  synopsis: string;
  hasLocalContent: boolean;
  contentFile?: string;
  originalUrl: string;
  accentColor: string;
  warningNote?: string;
}

export const CANON_ARCS: ArcMeta[] = [
  {
    id: "arc-1",
    arcNumber: 1,
    title: "A Day in the Capital",
    volumes: "Light novel Vol. 1",
    webRange: "Chapters 1–22 + Interlude",
    animeStatus: "Season 1 (Episodes 1–3)",
    animeTag: "Adapted in S1",
    summary:
      "Natsuki Subaru is summoned into the Kingdom of Lugunica. Armed only with Return by Death, he faces the bowel hunter Elsa Granhiert in a dingy loot house to reclaim a stolen royal insignia.",
    keyThemes: ["First loops", "Loot house siege", "Meeting Emilia", "Return by Death awakens"],
    totalChapters: 23,
    chapters: [
      { id: "arc-1-chapter-1", arcId: "arc-1", chapterNumber: 1, title: "Chapter 1: The Wasteful 10 Yen Coin", subtitle: "Unusable Ridged 10", hasLocalContent: true },
      { id: "arc-1-chapter-2", arcId: "arc-1", chapterNumber: 2, title: "Chapter 2: \"Do not Get Carried Away,\" Said God", subtitle: "Don’t get carried away, said God", hasLocalContent: true },
      { id: "arc-1-chapter-3", arcId: "arc-1", chapterNumber: 3, title: "Chapter 3: First Encounter with Magic", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-3-first-encounter-with-magic/" },
      { id: "arc-1-chapter-4", arcId: "arc-1", chapterNumber: 4, title: "Chapter 4: Compensation For a Lap Pillow", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-4-compensation-for-a-lap-pillow/" },
      { id: "arc-1-chapter-5", arcId: "arc-1", chapterNumber: 5, title: "Chapter 5: Your Name", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-5-your-name/" },
      { id: "arc-1-chapter-6", arcId: "arc-1", chapterNumber: 6, title: "Chapter 6: The End of the Beginning", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-6-the-end-of-the-beginning/" },
      { id: "arc-1-chapter-7", arcId: "arc-1", chapterNumber: 7, title: "Chapter 7: An Incomprehensible Reunion", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-7-an-incomprehensible-reunion/" },
      { id: "arc-1-chapter-8", arcId: "arc-1", chapterNumber: 8, title: "Chapter 8: The Taste of Bitter Alcohol", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-8-the-taste-of-bitter-alcohol/" },
      { id: "arc-1-chapter-9", arcId: "arc-1", chapterNumber: 9, title: "Chapter 9: Trump Card", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-9-trump-card/" },
      { id: "arc-1-chapter-10", arcId: "arc-1", chapterNumber: 10, title: "Chapter 10: The Consequence for Loose Lips", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-10-the-consequence-for-loose-lips/" },
      { id: "arc-1-chapter-11", arcId: "arc-1", chapterNumber: 11, title: "Chapter 11: A Struggle too Late", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-11-a-struggle-too-late/" },
      { id: "arc-1-chapter-12", arcId: "arc-1", chapterNumber: 12, title: "Chapter 12: Reunion with the Witch", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-12-reunion-with-the-witch/" },
      { id: "arc-1-chapter-13", arcId: "arc-1", chapterNumber: 13, title: "Chapter 13: Ending and Beginning", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-13-ending-and-beginning/" },
      { id: "arc-1-chapter-14", arcId: "arc-1", chapterNumber: 14, title: "Chapter 14: Fourth Time's a Charm", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-14-fourth-times-a-charm/" },
      { id: "arc-1-chapter-15", arcId: "arc-1", chapterNumber: 15, title: "Chapter 15: Because He is the Sword Saint", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-15-because-he-is-the-sword-saint/" },
      { id: "arc-1-chapter-16", arcId: "arc-1", chapterNumber: 16, title: "Chapter 16: Negotiation In The Slums", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-16-negotiation-in-the-slums/" },
      { id: "arc-1-chapter-17", arcId: "arc-1", chapterNumber: 17, title: "Chapter 17: Negotiation In The Loot House", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-17-negotiation-in-the-loot-house/" },
      { id: "arc-1-chapter-18", arcId: "arc-1", chapterNumber: 18, title: "Chapter 18: Battle in the Loot House", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-18-battle-in-the-loot-house/" },
      { id: "arc-1-chapter-19", arcId: "arc-1", chapterNumber: 19, title: "Chapter 19: A Spirit Art User's Battle", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-19-a-spirit-arts-users-battle/" },
      { id: "arc-1-chapter-20", arcId: "arc-1", chapterNumber: 20, title: "Chapter 20: The Gang's All Here", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-20-the-gangs-all-here/" },
      { id: "arc-1-chapter-21", arcId: "arc-1", chapterNumber: 21, title: "Chapter 21: The Power of the Sword Saint", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-21-the-power-of-the-sword-saint/" },
      { id: "arc-1-chapter-22", arcId: "arc-1", chapterNumber: 22, title: "Chapter 22: Life Starting in Another World from Zero", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-chapter-22-starting-life-in-another-world-from-zero/" },
      { id: "arc-1-interlude", arcId: "arc-1", chapterNumber: 23, title: "Interlude: The Moon is Watching", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2021/05/19/arc-1-interlude-the-moon-is-watching/" },
    ],
  },
  {
    id: "arc-2",
    arcNumber: 2,
    title: "A Week at the Mansion",
    volumes: "Light novel Vol. 2–3",
    webRange: "Chapters 35–102",
    animeStatus: "Season 1 (Episodes 4–11)",
    animeTag: "Adapted in S1",
    summary:
      "Subaru awakens in the lavish Roswaal Manor. As guest and worker alongside the demon twins Rem and Ram, he is struck by an unseen curse that restarts his week over and over.",
    keyThemes: ["Mansion curse", "Demon twins", "Earning Rem's trust", "The beastmaster mabeasts"],
    totalChapters: 49,
    chapters: [
      { id: "arc-2-chapter-1", arcId: "arc-2", chapterNumber: 1, title: "Chapter 1: The Unfamiliar Ceiling, The Endless Hallway", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-1" },
      { id: "arc-2-chapter-2", arcId: "arc-2", chapterNumber: 2, title: "Chapter 2: The Keeper of the Forbidden Library and the Twin Maids", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-2" },
      { id: "arc-2-chapter-3", arcId: "arc-2", chapterNumber: 3, title: "Chapter 3: I Can't Be a Bride", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-3" },
      { id: "arc-2-chapter-4", arcId: "arc-2", chapterNumber: 4, title: "Chapter 4: Boot Camp in Another World", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-4" },
      { id: "arc-2-chapter-5", arcId: "arc-2", chapterNumber: 5, title: "Chapter 5: Awareness of Emotions", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-5" },
      { id: "arc-2-chapter-6", arcId: "arc-2", chapterNumber: 6, title: "Chapter 6: The Return of the Lord", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-6" },
      { id: "arc-2-chapter-7", arcId: "arc-2", chapterNumber: 7, title: "Chapter 7: The Harmonious Get-Together at Roswaal Manor", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-7" },
      { id: "arc-2-chapter-8", arcId: "arc-2", chapterNumber: 8, title: "Chapter 8: The Situation of the Country and That Girl’s Circumstances", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-8" },
      { id: "arc-2-chapter-9", arcId: "arc-2", chapterNumber: 9, title: "Chapter 9: The Fruits of Dying Thrice", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-9" },
      { id: "arc-2-chapter-10", arcId: "arc-2", chapterNumber: 10, title: "Chapter 10: A Two-Faced Negotiation", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-10" },
      { id: "arc-2-chapter-11", arcId: "arc-2", chapterNumber: 11, title: "Chapter 11: The Harmonious Post-Meal Get-Together", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-11" },
      { id: "arc-2-chapter-12", arcId: "arc-2", chapterNumber: 12, title: "Chapter 12: The Compatible Yet Incompatible Duo", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-12" },
      { id: "arc-2-chapter-13", arcId: "arc-2", chapterNumber: 13, title: "Chapter 13: The Promised Morning is Far Away", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-13" },
      { id: "arc-2-chapter-14", arcId: "arc-2", chapterNumber: 14, title: "Chapter 14: Declaration of Rebellion", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-14" },
      { id: "arc-2-chapter-15", arcId: "arc-2", chapterNumber: 15, title: "Chapter 15: The Second Misjudgment and a Betrayal of Expectations", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-15" },
      { id: "arc-2-chapter-16", arcId: "arc-2", chapterNumber: 16, title: "Chapter 16: The Confusion of the Second Loop", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-16" },
      { id: "arc-2-chapter-17", arcId: "arc-2", chapterNumber: 17, title: "Chapter 17: The Sound of Chains", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-17" },
      { id: "arc-2-chapter-18", arcId: "arc-2", chapterNumber: 18, title: "Chapter 18: The Third Reunion", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-18" },
      { id: "arc-2-chapter-19", arcId: "arc-2", chapterNumber: 19, title: "Chapter 19: The Results of Reading and Writing", hasLocalContent: true, externalUrl: "https://eminenttranslations.com/reader/rezero-starting-life-in-another-world-wn/volume-2/chapter-19" },
      { id: "arc-2-chapter-20", arcId: "arc-2", chapterNumber: 20, title: "Chapter 20: Alone and Helpless at Twilight", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-20" },
      { id: "arc-2-chapter-21", arcId: "arc-2", chapterNumber: 21, title: "Chapter 21: Demonic Tag at Twilight", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-21" },
      { id: "arc-2-chapter-22", arcId: "arc-2", chapterNumber: 22, title: "Chapter 22: Beyond Words", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-22" },
      { id: "arc-2-chapter-23", arcId: "arc-2", chapterNumber: 23, title: "Chapter 23: A Temporary Contract", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-23" },
      { id: "arc-2-chapter-24", arcId: "arc-2", chapterNumber: 24, title: "Chapter 24: The Morning He Yearned For", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-24" },
      { id: "arc-2-chapter-25", arcId: "arc-2", chapterNumber: 25, title: "Chapter 25: The Voice of Deep Resentment doesn’t Vanish", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-25" },
      { id: "arc-2-chapter-26", arcId: "arc-2", chapterNumber: 26, title: "Chapter 26: The Third Choice", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-26" },
      { id: "arc-2-chapter-27", arcId: "arc-2", chapterNumber: 27, title: "Chapter 27: The Fangs to Stay Alive", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-27" },
      { id: "arc-2-chapter-28", arcId: "arc-2", chapterNumber: 28, title: "Chapter 28: Preparedness and Confession", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-28" },
      { id: "arc-2-chapter-29", arcId: "arc-2", chapterNumber: 29, title: "Chapter 29: Natsuki Subaru’s Restart", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-29" },
      { id: "arc-2-chapter-30", arcId: "arc-2", chapterNumber: 30, title: "Chapter 30: The Clown, Natsuki Subaru", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-30" },
      { id: "arc-2-chapter-31", arcId: "arc-2", chapterNumber: 31, title: "Chapter 31: The Clown's Lament", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-31" },
      { id: "arc-2-chapter-32", arcId: "arc-2", chapterNumber: 32, title: "Chapter 32: I Cried and Screamed and Will Cry No More", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-32" },
      { id: "arc-2-chapter-33", arcId: "arc-2", chapterNumber: 33, title: "Chapter 33: A Glimpse of Light and the Shadow of Foreboding", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-33" },
      { id: "arc-2-chapter-34", arcId: "arc-2", chapterNumber: 34, title: "Chapter 34: The Witch, the Spirit, and the Magician", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-34" },
      { id: "arc-2-chapter-35", arcId: "arc-2", chapterNumber: 35, title: "Chapter 35: A Promise to go Shopping", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-35" },
      { id: "arc-2-chapter-36", arcId: "arc-2", chapterNumber: 36, title: "Chapter 36: Fast Forward in the Village", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-36" },
      { id: "arc-2-chapter-37", arcId: "arc-2", chapterNumber: 37, title: "Chapter 37: The Curse Arts User’s Identity", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-37" },
      { id: "arc-2-chapter-38", arcId: "arc-2", chapterNumber: 38, title: "Chapter 38: The Meaning of Courage", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-38" },
      { id: "arc-2-chapter-39", arcId: "arc-2", chapterNumber: 39, title: "Chapter 39: An All-Nighter Pledge", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-39" },
      { id: "arc-2-chapter-40", arcId: "arc-2", chapterNumber: 40, title: "Chapter 40: The Witchbeast’s Fangs", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-40" },
      { id: "arc-2-chapter-41", arcId: "arc-2", chapterNumber: 41, title: "Chapter 41: Demon", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-41" },
      { id: "arc-2-chapter-42", arcId: "arc-2", chapterNumber: 42, title: "Chapter 42: Steamed Potatoes", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-42" },
      { id: "arc-2-chapter-43", arcId: "arc-2", chapterNumber: 43, title: "Chapter 43: The Conditions for Survival", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-43" },
      { id: "arc-2-chapter-44", arcId: "arc-2", chapterNumber: 44, title: "Chapter 44: The Usage of Despair", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-44" },
      { id: "arc-2-chapter-45", arcId: "arc-2", chapterNumber: 45, title: "Chapter 45: The Effect of Her Lingering Scent", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-45" },
      { id: "arc-2-chapter-46", arcId: "arc-2", chapterNumber: 46, title: "Chapter 46: A Demonical Flash", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-46" },
      { id: "arc-2-chapter-47", arcId: "arc-2", chapterNumber: 47, title: "Chapter 47: Rem", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-47" },
      { id: "arc-2-chapter-48", arcId: "arc-2", chapterNumber: 48, title: "Chapter 48: All In", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-48" },
      { id: "arc-2-chapter-49", arcId: "arc-2", chapterNumber: 49, title: "Chapter 49: A Tale for the Future", hasLocalContent: true, externalUrl: "https://pandemoniumtranslations.com/reader/rezero-starting-life-in-another-world/arc-2/chapter-49" },
    ],
  },
  {
    id: "arc-3",
    arcNumber: 3,
    title: "Truth of Zero",
    volumes: "Light novel Vol. 4–9",
    webRange: "Chapters 103–305",
    animeStatus: "Season 1 (Episodes 12–25)",
    animeTag: "Adapted in S1",
    summary:
      "The Royal Selection convenes in the capital. Shattered by pride and abandonment, Subaru hits his lowest abyss, makes his legendary confession with Rem from zero, hunts the White Whale, and confronts Petelgeuse Romanee-Conti.",
    keyThemes: ["Royal Selection", "From Zero", "White Whale conquest", "Sloth Archbishop confrontation"],
    totalChapters: 16
    chapters: [
      { id: "arc-3-chapter-1", arcId: "arc-3", chapterNumber: 1, title: "Chapter 1: Quiet Early Morning", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/05/31/vol-3-ch-1-quiet-early-morning/" },
      { id: "arc-3-chapter-2", arcId: "arc-3", chapterNumber: 2, title: "Chapter 2: A Servant’s Tea-Time Conversation", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/06/01/vol-3-ch-2-a-servants-tea-time-conversation/" },
      { id: "arc-3-chapter-3", arcId: "arc-3", chapterNumber: 3, title: "Chapter 3: Planning a Trip to the Capital", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/06/06/vol-3-ch-3-planning-a-trip-to-the-capital/" },
      { id: "arc-3-chapter-4", arcId: "arc-3", chapterNumber: 4, title: "Chapter 4: A Trip’s Departure, Many Difficulties Lay Ahead", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/06/09/vol-3-ch-4-a-trips-departure-many-difficulties-lay-ahead/" },
      { id: "arc-3-chapter-5", arcId: "arc-3", chapterNumber: 5, title: "Chapter 5: Time to Fulfill a Promise", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/06/14/vol-3-ch-5-time-to-fulfill-a-promise/" },
      { id: "arc-3-chapter-6", arcId: "arc-3", chapterNumber: 6, title: "Chapter 6: A Dangerous Pair", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/06/23/vol-3-ch-6-a-dangerous-pair/" },
      { id: "arc-3-chapter-7", arcId: "arc-3", chapterNumber: 7, title: "Chapter 7: Orange-Colored Girl", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/06/30/vol-3-ch-7-orange-colored-girl/" },
      { id: "arc-3-chapter-8", arcId: "arc-3", chapterNumber: 8, title: "Chapter 8: The Result of Gambling", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/07/14/vol-3-ch-8-the-result-of-gambling/" },
      { id: "arc-3-chapter-9", arcId: "arc-3", chapterNumber: 9, title: "Chapter 9: Divine Protection and Reunion and Promise", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/07/14/vol-3-ch-9-divine-protection-and-reunion-and-promise/" },
      { id: "arc-3-chapter-10", arcId: "arc-3", chapterNumber: 10, title: "Chapter 10: Confluence and Farewell", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/08/12/vol-3-ch-10-confluence-and-farewell/" },
      { id: "arc-3-chapter-11", arcId: "arc-3", chapterNumber: 11, title: "Chapter 11: Three Heads are Better Than One, for Sinister Schemes", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/08/12/vol-3-ch-11-three-heads-are-better-than-one-for-sinister-schemes/" },
      { id: "arc-3-chapter-12", arcId: "arc-3", chapterNumber: 12, title: "Chapter 12: Secret Castle Infiltration and Its Results", hasLocalContent: true, externalUrl: "https://kagurojp.wordpress.com/2016/08/21/vol-3-ch-12-secret-castle-infiltration-and-the-results/" },
      { id: "arc-3-chapter-13", arcId: "arc-3", chapterNumber: 13, title: "Chapter 13: Same Hometown", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/2025/06/25/arc-3-chapter-13-same-hometown/" },
      { id: "arc-3-chapter-14", arcId: "arc-3", chapterNumber: 14, title: "Interlude I: The Dragon Carriage", subtitle: "Post-Anime Interlude I", hasLocalContent: true, externalUrl: "https://witchculttranslation.com/table-of-content/" },
      { id: "arc-3-chapter-15", arcId: "arc-3", chapterNumber: 15, title: "Interlude II: Let’s Eat", subtitle: "Post-Anime Interlude II", hasLocalContent: true, externalUrl: "https://translationchicken.com/2016/09/12/rezero-arc-3-interlude-ii-lets-eat-12/" },
      { id: "arc-3-chapter-16", arcId: "arc-3", chapterNumber: 16, title: "Interlude III: To Each Their Oath", subtitle: "Post-Anime Interlude III", hasLocalContent: true, externalUrl: "https://translationchicken.com/2016/09/17/rezero-arc-3-interlude-iii-to-each-their-oaths16/" },
    ],
  },
  {
    id: "arc-4",
    arcNumber: 4,
    title: "The Everlasting Contract",
    volumes: "Light novel Vol. 10–15",
    webRange: "Chapters 306–470",
    animeStatus: "Season 2 (Parts 1 & 2)",
    animeTag: "Adapted in S2",
    summary:
      "Rem is erased by Gluttony. Escorting the villagers to the Sanctuary barrier, Subaru encounters Echidna, the Tea Parties of the Witches of Sin, the Great Rabbit, and the past of Emilia, Beatrice, and Roswaal.",
    keyThemes: ["Witches of Sin", "The Sanctuary Trials", "Choose Me", "Garfiel & Ryuzu"],
    totalChapters: 165,
    chapters: [],
  },
  {
    id: "arc-5",
    arcNumber: 5,
    title: "Stars of the Water Gate",
    volumes: "Light novel Vol. 16–20",
    webRange: "Chapters 471–592",
    animeStatus: "Season 3 (Gekitotsu-hen)",
    animeTag: "Adapted in S3",
    summary:
      "The five Royal Selection camps assemble in the water city of Pristella, only for the Witch Cult to launch a coordinated invasion led by Regulus Corneas, Capella, Sirius, and Ley Batenkaitos.",
    keyThemes: ["Pristella under siege", "Sin Archbishops war", "Subaru's broadcast rally", "Sword Saint lineage"],
    totalChapters: 122,
    chapters: [],
  },
  {
    id: "arc-6",
    arcNumber: 6,
    title: "Corridor of Memories",
    volumes: "Light novel Vol. 21–26",
    webRange: "Chapters 593–724",
    animeStatus: "Starts immediately after Season 3",
    animeTag: "Starts after S3",
    summary:
      "To restore the victims of Gluttony, Subaru, Emilia, Beatrice, Ram, Anastasia, and Julius journey into the treacherous Augria Sand Dunes to conquer the Pleiades Watchtower and speak with the legendary Sage.",
    keyThemes: ["Augria Sand Dunes", "Pleiades Watchtower", "Taygeta Library", "Subaru's lost memories", "Shaula"],
    totalChapters: 90,
    chapters: [
      { id: "arc-6-chapter-1", arcId: "arc-6", chapterNumber: 1, title: "Chapter 1: The Departure to the Dunes", subtitle: "Setting forth to the Sand Dunes", externalUrl: "https://witchculttranslation.com/2019/08/26/arc-6-chapter-1/" },
      { id: "arc-6-chapter-2", arcId: "arc-6", chapterNumber: 2, title: "Chapter 2: Sand Cloud and Scorpion Beast", subtitle: "The boundary of the world", externalUrl: "https://witchculttranslation.com/2019/08/26/arc-6-chapter-2/" },
      { id: "arc-6-chapter-3", arcId: "arc-6", chapterNumber: 3, title: "Chapter 3: The Great Miasma Sandsea", subtitle: "Wandering in the dunes", externalUrl: "https://witchculttranslation.com/2019/08/26/arc-6-chapter-3/" },
      { id: "arc-6-chapter-10", arcId: "arc-6", chapterNumber: 10, title: "Chapter 10: \"As if a Flash\"", subtitle: "Light of the Watchtower", externalUrl: "https://witchculttranslation.com/2019/08/26/arc-6-chapter-10-as-if-a-flash/" },
      { id: "arc-6-chapter-55", arcId: "arc-6", chapterNumber: 55, title: "Chapter 55: You Who Awaits the Snowmelt", subtitle: "A warm reunion", externalUrl: "https://witchculttranslation.com/2020/05/02/arc-6-chapter-55-you-who-awaits-the-snowmelt/" },
    ],
  },
  {
    id: "arc-7",
    arcNumber: 7,
    title: "The Land of the Wolf",
    volumes: "Light novel Vol. 27–33",
    webRange: "Chapters 725–850",
    animeStatus: "Web Novel / Light Novel",
    animeTag: "Web Novel Only",
    summary:
      "Separated by a shadowy teleportation trap, Subaru and Rem awaken deep in the militaristic southern Vollachian Empire, embroiled in an imperial civil war led by Emperor Vincent Vollachia.",
    keyThemes: ["Vollachian Empire", "Awakened Rem", "Vincent Volakia", "Child transformation loop"],
    totalChapters: 110,
    chapters: [],
  },
  {
    id: "arc-8",
    arcNumber: 8,
    title: "Vincent Vollachia",
    volumes: "Light novel Vol. 34–38",
    webRange: "Chapters 851–930",
    animeStatus: "Web Novel / Light Novel",
    animeTag: "Web Novel Only",
    summary:
      "The climax of the Vollachian Civil War. The Great Calamity strikes the Imperial Capital Lupgana with the resurrection of ancient heroes under the Sphinx's dark sorcery.",
    keyThemes: ["Siege of Lupgana", "The Great Calamity", "Sphinx resurrection", "Imperial generals"],
    totalChapters: 80,
    chapters: [],
  },
  {
    id: "arc-9",
    arcNumber: 9,
    title: "The Golden Lion and the Witch",
    volumes: "Light novel ongoing",
    webRange: "Chapters 931+",
    animeStatus: "Ongoing in Web Novel",
    animeTag: "Web Novel Only",
    summary:
      "The aftermath of the Vollachian War and the reckoning with ancient pacts as the story turns back toward Lugunica and Gusteko.",
    keyThemes: ["Repercussions of Empire", "Witch Cult movements", "The Holy Kingdom of Gusteko"],
    totalChapters: 55,
    chapters: [],
  },
  {
    id: "arc-10",
    arcNumber: 10,
    title: "The Climax of Fates",
    volumes: "Web Novel active serialization",
    webRange: "Current Chapters",
    animeStatus: "Active Web Novel Serialization",
    animeTag: "Web Novel Only",
    summary:
      "The latest arc written by Tappei Nagatsuki on Shousetsuka ni Narou, bringing the journey closer to the ultimate mysteries of the Sage, the Dragon, and the Satella seal.",
    keyThemes: ["Final mysteries", "Dragon Blood", "Witch of Envy", "The End of the Odyssey"],
    totalChapters: 30,
    chapters: [],
  },
];

export const IF_ROUTES: IfRouteMeta[] = [
  {
    id: "oboreru",
    name: "Oboreru IF",
    sin: "Wrath",
    divergence: "Arc 2 — The Mansion Loop",
    divergencePoint:
      "Subaru doesn't throw himself off the cliff to save Rem. Instead, he loses trust in everyone and establishes the underground syndication Pleiades.",
    tagline: "The Purge King whose eyes perceive only black and white.",
    synopsis:
      "In this timeline, Subaru becomes an underground underworld tyrant known as the Purge King. Consumed by paranoia and wrath, he sees the world entirely in monochrome, evaluating everyone through a ruthless coin-toss system. Only Ram and a few select confidants remain near him in a gilded cage.",
    hasLocalContent: true,
    contentFile: "if-oboreru.json",
    originalUrl: "https://witchculttranslation.com/2018/08/23/rezero-if-oboreru/",
    accentColor: "#ef4444",
    warningNote: "Contains psychological trauma, paranoia, and dark syndicate themes.",
  },
  {
    id: "kasaneru",
    name: "Kasaneru IF",
    sin: "Greed",
    divergence: "Arc 4 — The Sanctuary Tea Party",
    divergencePoint:
      "Subaru accepts Echidna's contract at the Witch's Tea Party instead of rejecting her offer.",
    tagline: "Over 100 million deaths in pursuit of the mathematically ideal future.",
    synopsis:
      "Subaru accepts the contract with Echidna, using Return by Death without hesitation for minor conveniences—checking weather, testing minor conversational outcomes, and endlessly optimizing every interaction. While everyone survives, Subaru's humanity is completely hollowed out as a laboratory tool for the Witch of Greed.",
    hasLocalContent: true,
    contentFile: "if-kasaneru.json",
    originalUrl: "https://witchculttranslation.com/2019/02/11/kasaneru-if-re-repeating-life-in-another-world-from-zero/",
    accentColor: "#10b981",
    warningNote: "Features extreme self-destructive looping and emotional detachment.",
  },
  {
    id: "tsugihagu",
    name: "Tsugihagu IF",
    sin: "Gluttony",
    divergence: "Arc 6 — Pleiades Watchtower",
    divergencePoint:
      "Subaru loses his memories in the Taygeta Library and discovers he can read the Books of the Dead of those he kills.",
    tagline: "Stitching together a lost self from the murdered pages of his friends.",
    synopsis:
      "Awakening with no recollection of who 'Natsuki Subaru' was, he discovers that the Books of the Dead hold memories of deceased individuals. Convinced the only way to reconstruct his identity is to read the memories of everyone who knew him, he murders his allies in cold blood inside the tower.",
    hasLocalContent: true,
    contentFile: "if-tsugihagu.json",
    originalUrl: "https://witchculttranslation.com/2019/04/05/tsugihagu-if-re-patching-together-a-life-in-another-world-from-zero/",
    accentColor: "#8b5cf6",
    warningNote: "Major spoilers for Arc 6 mechanics and dark psychological horror.",
  },
  {
    id: "azamuku",
    name: "Azamuku IF",
    sin: "Deceit / Vollachia",
    divergence: "Arc 7 — The Imperial Struggles",
    divergencePoint:
      "Subaru takes a radically deceptive path during the conflict in the Vollachian Empire.",
    tagline: "Re: Deceiving Life in Another World from Zero.",
    synopsis:
      "The newest official IF story released by Tappei Nagatsuki. Explores what happens when Subaru discards honesty during the brutal imperial war games in Vollachia, donning layers of falsehood to survive the brutal survival of the fittest ethos.",
    hasLocalContent: true,
    contentFile: "if-azamuku.json",
    originalUrl: "https://witchculttranslation.com/2026/08/13/azamuku-if-re-deceiving-life-in-another-world-from-zero/",
    accentColor: "#f59e0b",
    warningNote: "Takes place during the Vollachian Empire timeline (Arc 7/8).",
  },
  {
    id: "ayamatsu",
    name: "Ayamatsu IF",
    sin: "Pride",
    divergence: "Arc 1 — The Capital Loot House",
    divergencePoint:
      "Subaru never cries for help or meets Reinhard in the alley. He loops 87 times against Elsa alone.",
    tagline: "The Sin Archbishop of Pride who burns Lugunica to crown Emilia.",
    synopsis:
      "Refusing to call for help, Subaru dies dozens of times until he discovers the darkness of the Witch Cult. Partnering with Meili and Elsa, he rises to become the shadowy Sin Archbishop of Pride, eradicating the other Archbishops and burning the royal capital to ashes so Emilia can be queen.",
    hasLocalContent: false,
    originalUrl: "https://witchculttranslation.com/",
    accentColor: "#ec4899",
  },
  {
    id: "rem-if",
    name: "Rem IF (Sloth)",
    sin: "Sloth",
    divergence: "Arc 3 — From Zero",
    divergencePoint:
      "Rem accepts Subaru's proposal to run away together to the western city of Kararagi.",
    tagline: "A peaceful, tender domestic life away from the bloodstained throne.",
    synopsis:
      "Instead of turning Subaru down with her historic 'From Zero' speech, Rem agrees to flee Lugunica. They settle in the Japanese-style country of Kararagi, marry, and raise their two children, Rigel and Spica, living a gentle life untainted by Witch Cult massacres.",
    hasLocalContent: false,
    originalUrl: "https://witchculttranslation.com/",
    accentColor: "#06b6d4",
  },
];
