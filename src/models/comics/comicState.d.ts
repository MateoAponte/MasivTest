import { ComicPreviewModel } from "./comicModel";

export interface ComicState {
	preview_comic: ComicPreviewModel;
	comics_array: Array<ComicPreviewModel>;
}
