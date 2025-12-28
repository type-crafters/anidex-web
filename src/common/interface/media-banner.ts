import type { IMediaGenre } from "./media-genre";
import type { PictureSource } from "./picture-source";

export interface IMediaBanner {
    picture: Array<string | PictureSource>;
    title: string;
    genres: IMediaGenre[];
    overview: string;
}