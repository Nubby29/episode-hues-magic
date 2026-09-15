/**
 * Per-episode listings for the Re:Zero anime.
 * Titles, air dates and summaries sourced from public episode databases.
 * Preview links open a YouTube search scoped to the official promo uploads,
 * so no unofficial video is ever embedded.
 */
import type { ThemeKey } from "./theme-data";

export interface Episode {
  number: number;
  title: string;
  airdate?: string;
  summary?: string;
  /** Official Muse Asia video IDs for this episode (multiple when split into parts). */
  videoIds?: string[];
  /** YouTube search query for the official episode preview. */
  previewQuery: string;
}

export const episodesBySeason: Partial<Record<ThemeKey, Episode[]>> = {
  season1: [
    { number: 1, title: "The End of the Beginning and the Beginning of the End", airdate: "2016-04-03", summary: "In the series opening double episode, Natsuki Subaru is summoned to a alternate world on his way home one day. At first, he's enamored with this new fantasy world, but the cute girl summoned him? Nowhere to be found. He quickly learns that he doesn't have any", previewQuery: "Re:Zero Season 1 Episode 1 preview", videoIds: ["7F5rns5lX6g", "rXaybre0jXI"] },
    { number: 2, title: "Reunion with the Witch", airdate: "2016-04-11", summary: "After being attacked by someone the first time, sliced open by Elsa the second time, and stabbed in the back by punks the third time, Subaru should have been dead, but found himself back where he started in the same parallel world every time. He finally realiz", previewQuery: "Re:Zero Season 1 Episode 2 preview", videoIds: ["fU2cfFmjPL0"] },
    { number: 3, title: "Starting Life from Zero in Another World", airdate: "2016-04-18", summary: "Subaru attempts to buy the insignia from Felt and return it to Satella before Elsa arrives at the loot house... but Satella arrives before the negotiations are complete, and Elsa still attacks them.", previewQuery: "Re:Zero Season 1 Episode 3 preview", videoIds: ["qb8Inc6f92E"] },
    { number: 4, title: "The Happy Roswaal Mansion Family", airdate: "2016-04-25", summary: "After being badly wounded by Elsa, Subaru somehow survived and awoke in the mansion of Margrave Mathers, in the Kingdom of Lugunica.", previewQuery: "Re:Zero Season 1 Episode 4 preview", videoIds: ["n4I1MDCI6A4"] },
    { number: 5, title: "The Morning of Our Promise Is Still Distant", airdate: "2016-05-02", summary: "Subaru now lives and works in Roswaal's mansion, working with Ram and Rem, and finally getting Emilia to agree to a date with him. But the day of their promised date never comes as Subaru keeps going back to the day he first awoke in the mansion. He's confused", previewQuery: "Re:Zero Season 1 Episode 5 preview", videoIds: ["gmDWiKT27PA"] },
    { number: 6, title: "The Sound of Chains", airdate: "2016-05-09", summary: "Subaru's first day at the Roswaal mansion begins for the third time. The first time, he grew weak and died of unknown reasons in his sleep, and the second time, he was killed by an attacker. The sound of chains that he heard as he died the second time replays", previewQuery: "Re:Zero Season 1 Episode 6 preview", videoIds: ["j22SMlQZIag"] },
    { number: 7, title: "Natsuki Subaru's Restart", airdate: "2016-05-16", summary: "Rem knocks Subaru down and tortures him. She suspects that Subaru belongs to a faction against Emilia, and states that he has a smell of witch before killing him. Subaru is revived once again in the mansion, and meets Ram and Rem again, with fear. Emilia worri", previewQuery: "Re:Zero Season 1 Episode 7 preview", videoIds: ["4bMO1PkUQs8"] },
    { number: 8, title: "I Cried, Cried My Lungs Out, and Stopped Crying", airdate: "2016-05-23", summary: "Subaru awakens again after being killed, once again. Subaru becomes so intent and focused on getting past this route that he over exerts and exhausts himself, which leads him towards a potential new ending.", previewQuery: "Re:Zero Season 1 Episode 8 preview", videoIds: ["UzJ6CyTFIbE"] },
    { number: 9, title: "The Meaning of Courage", airdate: "2016-05-30", summary: "Subaru visits the village with Ram and Rem with the purpose of finding the the culprit. When the three return from the village, Roswaal leaves for the night, which did not happen in the previous timelines. Subaru sees Beatrice to confirm that he was cursed and", previewQuery: "Re:Zero Season 1 Episode 9 preview", videoIds: ["jzOISDuciuQ"] },
    { number: 10, title: "Fanatical Methods Like a Demon", airdate: "2016-06-06", summary: "Subaru awakens after his battle in the forest with the beasts. He learns from Beatrice that his curse has not been entirely removed. During the battle, the beasts continually cursed him over and over and it is too complicated to remove. After learning this,", previewQuery: "Re:Zero Season 1 Episode 10 preview", videoIds: ["9lNsBOSni1U"] },
    { number: 11, title: "Rem", airdate: "2016-06-13", summary: "In the past, Ram and Rem lived in a demon village where the birth of twins is considered taboo. Ram was a prodigy, while Rem struggled with life. One day, Ram had her horn cut off and Rem had been blaming herself since then. Back in the present, Rem regains he", previewQuery: "Re:Zero Season 1 Episode 11 preview", videoIds: ["PrKKYAS-vPw"] },
    { number: 12, title: "Return to the Capital", airdate: "2016-06-20", summary: "At the order of the council of elders that manages Lugunica in the king's absence, Wilhelm and Felix visit Roswaal's mansion as emissaries. Emilia is required in the imperial capital right away, so Subaru asks her to take him along. Emilia tells him this won't", previewQuery: "Re:Zero Season 1 Episode 12 preview", videoIds: ["VbByrxZxRe8"] },
    { number: 13, title: "Self-Proclaimed Knight Natsuki Subaru", airdate: "2016-06-27", summary: "As Emilia joins Priscilla, Crusch, and Anastasia in a meeting of the royal selection participants, Reinhard enters the hall with Felt. According to a new prophecy seen on the Dragon Stone, there are five priestesses with the potential to be the kingdom's next", previewQuery: "Re:Zero Season 1 Episode 13 preview", videoIds: ["jxXBClt_t5s"] },
    { number: 14, title: "The Sickness Called Despair", airdate: "2016-07-04", summary: "\"I just wanted to protect her. That feeling wasn't a lie. Where did I go wrong?\" Rejected by the one who meant more to him than anything, Subaru is still unable to recognize that he may have done something irreversible. He then finds out that some disturbing m", previewQuery: "Re:Zero Season 1 Episode 14 preview", videoIds: ["gA8CVE21gQc"] },
    { number: 15, title: "The Outside of Madness", airdate: "2016-07-11", summary: "Upon returning to Roswaal's mansion, Subaru is greeted by an unbelievable sight and wails that this was not what he wanted to happen. Stricken with despair, everything before Subaru starts to go white as, finally, he hears a voice: \"You were too late.\"", previewQuery: "Re:Zero Season 1 Episode 15 preview", videoIds: ["G2Uz1tUCYhA"] },
    { number: 16, title: "The Greed of a Pig", airdate: "2016-07-18", summary: "Subaru wakes up in front of the appa shop once again. Feeling boxed in on all sides due to his own lack of power to change the situation, he seeks the help of others. First, he seeks the help of Crush, who flatly declines any further involvement passed her con", previewQuery: "Re:Zero Season 1 Episode 16 preview", videoIds: ["d-XacRgxKDs"] },
    { number: 17, title: "Disgrace in the Extreme", airdate: "2016-07-25", summary: "A mysterious figure appears before Subaru and his traveling companions. As the looming beast attacks with a deafening bellow amidst the darkness and fog, Rem determines that it will be too difficult to escape...", previewQuery: "Re:Zero Season 1 Episode 17 preview", videoIds: ["1H8vPX0wGWY"] },
    { number: 18, title: "From Zero", airdate: "2016-08-01", summary: "Subaru laments that he could not do anything or save anyone, and has no options left. Exhausted, he suddenly takes off running at full speed as if he's made a decision...", previewQuery: "Re:Zero Season 1 Episode 18 preview", videoIds: ["t3_Y2lXOco8"] },
    { number: 19, title: "Battle Against the White Whale", airdate: "2016-08-08", summary: "To save Emilia, Subaru approaches Crusch to negotiate the formation of an alliance. His terms are a bit difficult for Crusch to believe, but she can see that Subaru isn't lying.", previewQuery: "Re:Zero Season 1 Episode 19 preview", videoIds: ["VX_chxGZLB8"] },
    { number: 20, title: "Wilhelm van Astrea", airdate: "2016-08-15", summary: "Subaru has devoted everything he had, and done all he could do. His passion has captured Crusch's heart, as well as Anastasia's cooperation, and they all enter into the battle against the White Whale together.", previewQuery: "Re:Zero Season 1 Episode 20 preview", videoIds: ["iMwLryrMGos"] },
    { number: 21, title: "A Wager That Defies Despair", airdate: "2016-08-22", summary: "Subaru and Rem are at a loss for words. The battle against the White Whale, which seemed to be going in their favor through attrition, suddenly took on completely different proportions. With their tactical superiority and advantage quickly dwindling, the combi", previewQuery: "Re:Zero Season 1 Episode 21 preview", videoIds: ["uQwCb6Pj07Y"] },
    { number: 22, title: "A Flash of Sloth", airdate: "2016-08-29", summary: "With the battle against the White Whale now over, the mercenary force setting up the blockade of the road comes back, Julius at the lead. His arrival gives rise to mixed feelings for Subaru, but after Julius sincerely thanks him for ridding the world of the mo", previewQuery: "Re:Zero Season 1 Episode 22 preview", videoIds: ["qrD3Rbbi54M"] },
    { number: 23, title: "Nefarious Sloth", airdate: "2016-09-05", summary: "The group is making its way in the Mathers domain when suddenly everyone but Subaru disappears and a strange, suffocating atmosphere seeps through the forest. He quickly figures out it is nothing but an illusion, and with help from Julius on the other side, di", previewQuery: "Re:Zero Season 1 Episode 23 preview", videoIds: ["WJVIBXJXHOE"] },
    { number: 24, title: "The Self-Proclaimed Knight and the Greatest Knight", airdate: "2016-09-12", summary: "Subaru devises a new plan to correct the mistake of the blank letter sent to the manor, encourage the evacuation of the villagers and move Emilia away from her current location. With these preparations complete, he enacts the second part of his plan designed t", previewQuery: "Re:Zero Season 1 Episode 24 preview", videoIds: ["KNZlDgtTqOc"] },
    { number: 25, title: "That's All This Story Is About", airdate: "2016-09-19", summary: "Emilia is hurriedly ushered to the capital along with the villagers under the orders of a mysterious benefactor while escorted by a rag-tag group of individuals from various and opposing factions. She has but one question on her mind: who could this man be and", previewQuery: "Re:Zero Season 1 Episode 25 preview", videoIds: ["vOp0BvXA5Uo"] },
  ],
  season2: [
    { number: 1, title: "Each One's Promise", airdate: "2020-07-08", summary: "The episode takes place right after Petelguse was defeated. Gluttony and Greed show up and Rem is now forgotten by everyone but Subaru.", previewQuery: "Re:Zero Season 2 Episode 1 preview" },
    { number: 2, title: "Episode 2", previewQuery: "Re:Zero Season 2 Episode 2 preview" },
    { number: 3, title: "Episode 3", previewQuery: "Re:Zero Season 2 Episode 3 preview" },
    { number: 4, title: "Episode 4", previewQuery: "Re:Zero Season 2 Episode 4 preview" },
    { number: 5, title: "Episode 5", previewQuery: "Re:Zero Season 2 Episode 5 preview" },
    { number: 6, title: "Episode 6", previewQuery: "Re:Zero Season 2 Episode 6 preview" },
    { number: 7, title: "Episode 7", previewQuery: "Re:Zero Season 2 Episode 7 preview" },
    { number: 8, title: "Episode 8", previewQuery: "Re:Zero Season 2 Episode 8 preview" },
    { number: 9, title: "Episode 9", previewQuery: "Re:Zero Season 2 Episode 9 preview" },
    { number: 10, title: "Episode 10", previewQuery: "Re:Zero Season 2 Episode 10 preview" },
    { number: 11, title: "Episode 11", previewQuery: "Re:Zero Season 2 Episode 11 preview" },
    { number: 12, title: "Episode 12", previewQuery: "Re:Zero Season 2 Episode 12 preview" },
    { number: 13, title: "Episode 13", previewQuery: "Re:Zero Season 2 Episode 13 preview" },
    { number: 14, title: "Episode 14", previewQuery: "Re:Zero Season 2 Episode 14 preview" },
    { number: 15, title: "Episode 15", previewQuery: "Re:Zero Season 2 Episode 15 preview" },
    { number: 16, title: "Episode 16", previewQuery: "Re:Zero Season 2 Episode 16 preview" },
    { number: 17, title: "Episode 17", previewQuery: "Re:Zero Season 2 Episode 17 preview" },
    { number: 18, title: "Episode 18", previewQuery: "Re:Zero Season 2 Episode 18 preview" },
    { number: 19, title: "Episode 19", previewQuery: "Re:Zero Season 2 Episode 19 preview" },
    { number: 20, title: "Episode 20", previewQuery: "Re:Zero Season 2 Episode 20 preview" },
    { number: 21, title: "Episode 21", previewQuery: "Re:Zero Season 2 Episode 21 preview" },
    { number: 22, title: "Episode 22", previewQuery: "Re:Zero Season 2 Episode 22 preview" },
    { number: 23, title: "Episode 23", previewQuery: "Re:Zero Season 2 Episode 23 preview" },
    { number: 24, title: "Episode 24", previewQuery: "Re:Zero Season 2 Episode 24 preview" },
    { number: 25, title: "Episode 25", previewQuery: "Re:Zero Season 2 Episode 25 preview" },
  ],
  season3: [
    { number: 1, title: "Theatrical Malice", airdate: "2024-10-02", summary: "A year has passed since the battle at the Sanctuary, and Subaru has been spending fulfilling days united with Emilia's camp. However, his peaceful everyday life ends with the arrival of a single letter.", previewQuery: "Re:Zero Season 3 Episode 1 preview" },
    { number: 2, title: "A Showdown of Fire and Ice", airdate: "2024-10-09", summary: "Subaru desperately tries to fend off the attack from Sin Archbishop Sirius. But then, other Archbishops appear...", previewQuery: "Re:Zero Season 3 Episode 2 preview" },
    { number: 3, title: "Gorgeous Tiger", airdate: "2024-10-16", summary: "After the incident in the main square, Priestella has fallen into chaos and Emilia has been kidnapped. Now it's up to Subaru and the others to rescue Emilia and the city.", previewQuery: "Re:Zero Season 3 Episode 3 preview" },
    { number: 4, title: "Operation: Take Back the Government Office", airdate: "2024-10-23", summary: "Subaru and his comrades find themselves in a dire situation after the city was taken over by the Sin Archbishops. Now, they are devising a plan to first reclaim the city hall...", previewQuery: "Re:Zero Season 3 Episode 4 preview" },
    { number: 5, title: "A Dark Torrent", airdate: "2024-10-30", summary: "The attack on the city hall enters its second phase. Subaru and Crusch breach the interior, but there they are awaited by Capella, who has some sneaky tricks up her sleeve...", previewQuery: "Re:Zero Season 3 Episode 5 preview" },
    { number: 6, title: "Conditions of the Knight", airdate: "2024-11-06", summary: "Bishop Regulus of the Seven Deadly Sins wants to force Emilia to marry him, even though he already has hundreds of wives. While he is having the wedding hall prepared, Subaru and the others are planning to rescue Emilia and reclaim the city...", previewQuery: "Re:Zero Season 3 Episode 6 preview" },
    { number: 7, title: "The Newest of Heroes and the Most Ancient of Heroes", airdate: "2024-11-13", summary: "Through a Witch's Cultist's conference mirror, Emilia tells Al where the Sin Archbishops are and asks him to protect Beatrice. Al relays Emilia's message to Subaru, and the gang begins to devise a strategy to win back the control towers.", previewQuery: "Re:Zero Season 3 Episode 7 preview" },
    { number: 8, title: "The One I'll Love Someday", airdate: "2024-11-20", summary: "Subaru and the others hold a meeting in the city hall to develop a strategy against the four Sin Archbishops. However, Emilia is slowly running out of time...", previewQuery: "Re:Zero Season 3 Episode 8 preview" },
    { number: 9, title: "City Scramble", airdate: "2025-02-05", summary: "While the others deal with the other Archbishops, Subaru puts his plan to stop Regulus into action.", previewQuery: "Re:Zero Season 3 Episode 9 preview" },
    { number: 10, title: "The Plan to Conquer Greed", airdate: "2025-02-12", summary: "Subaru thinks long and hard about how Regulus's Authority should work...", previewQuery: "Re:Zero Season 3 Episode 10 preview" },
    { number: 11, title: "Liliana Masquerade", airdate: "2025-02-19", summary: "Liliana gives the performance of her lifetime to help Priscilla defeat the Sin Archbishop of Lust.", previewQuery: "Re:Zero Season 3 Episode 11 preview" },
    { number: 12, title: "Regulus Corneas", airdate: "2025-02-26", summary: "Emilia seeks the aid of Regulus's wives in dethroning the little king once and for all.", previewQuery: "Re:Zero Season 3 Episode 12 preview" },
    { number: 13, title: "The Warrior's Commendation", airdate: "2025-03-05", summary: "Capella uses Al's admiration for Priscilla against him, and Garfiel fights the legendary \"Eight-Arms\" Kurgan.", previewQuery: "Re:Zero Season 3 Episode 13 preview" },
    { number: 14, title: "Theresia van Astrea", airdate: "2025-03-12", summary: "Wilhelm finds himself face to face with his beloved wife who died years ago.", previewQuery: "Re:Zero Season 3 Episode 14 preview" },
    { number: 15, title: "A Hideous Dinner Party", airdate: "2025-03-19", summary: "While battling Lye Batenkaitos, Otto discovers the secret to the Sin Archbishop's power.", previewQuery: "Re:Zero Season 3 Episode 15 preview" },
    { number: 16, title: "The Result of the Battle for Pristella", airdate: "2025-03-26", summary: "Otto and Beatrice battle Gluttony, the last of the Sin Archbishops terrorizing Priestella.", previewQuery: "Re:Zero Season 3 Episode 16 preview" },
  ],
};
