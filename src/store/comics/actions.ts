import { ActionTree } from "vuex";
import ComicApi from "@/api/comics/commicApi";

import { ComicState } from "@/models/comics/comicState";
import { RootState } from "@/models/root/rootState";

import ComicTypes from "@/constants/comics/types";
import { ComicPreviewModel } from "@/models/comics/comicModel";

export const actions: ActionTree<ComicState, RootState> = {
	[ComicTypes.actions.FETCH_COMICS]({ dispatch }, payload: number) {
		ComicApi.getComicData(payload)
			.then((res) => dispatch(ComicTypes.actions.UPDATE_COMICS_ARRAY, res))
			.catch((err) => console.error("Se ha producido un error: " + err));
		dispatch(ComicTypes.actions.UPDATE_COMICS_ARRAY, 0);
	},
	[ComicTypes.actions.UPDATE_COMICS_ARRAY]({ commit }, payload: ComicPreviewModel) {
		commit(ComicTypes.mutations.SET_PREVIEW_COMIC, payload);
	},
};
