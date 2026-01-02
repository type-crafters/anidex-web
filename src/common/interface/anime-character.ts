import type { Language } from "$common/enum";
import type { ITalent } from "./talent";

export interface IAnimeCharacter {
    animeId: string;
    characterName: string;
    role: string;
    actors: Record<Language, ITalent>;
}