import { ComicState } from "@/models/comics/comicState";
import { ComicPreviewModel } from "@/models/comics/comicModel";

export const state: ComicState = {
	preview_comic: {} as ComicPreviewModel,
	comics_array: [] as Array<ComicPreviewModel>,
	comic_number: 0,
};
