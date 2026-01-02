import type { IReleaseSeason } from "./release-season";

export interface IAnime {
    id: string;
    title: string;
    overview: string;
    rating: string;
    season: IReleaseSeason;
}