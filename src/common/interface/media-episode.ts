import type { PictureSource } from "./picture-source";

export interface IMediaEpisode {
    thumbnail: Array<string | PictureSource>;
    seasonNo: number;
    episodeNo: number;
    title?: string;
    releaseDate: string;
    overview?: string;
}