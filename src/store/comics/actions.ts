import { ActionTree } from "vuex";
import ComicApi from "@/api/comics/commicApi";

import { ComicState } from "@/models/comics/comicState";
import { RootState } from "@/models/root/rootState";

import ComicTypes from "@/constants/comics/types";

export const actions: ActionTree<ComicState, RootState> = {
	[ComicTypes.actions.FETCH_COMICS]() {
		ComicApi.getComicData(0);
	},
};
