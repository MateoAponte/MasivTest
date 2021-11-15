import { MutationTree } from "vuex";

import ComicTypes from "@/constants/comics/types";
import { ComicState } from "@/models/comics/comicState";
import { ComicPreviewModel } from "@/models/comics/comicModel";

export const mutations: MutationTree<ComicState> = {
	[ComicTypes.mutations.SET_PREVIEW_COMIC](state, payload: ComicPreviewModel) {
		state.preview_comic = payload;
	},
	[ComicTypes.mutations.SET_COMIC_NUMBER](state, payload: number) {
		state.comic_number = payload;
	},
};
