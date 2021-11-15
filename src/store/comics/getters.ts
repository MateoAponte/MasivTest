import { GetterTree } from "vuex";

import { RootState } from "@/models/root/rootState";
import { ComicState } from "@/models/comics/comicState";
import ComicTypes from "@/constants/comics/types";

import moment from "moment";
import { ComicPreviewModel } from "@/models/comics/comicModel";

export const getters: GetterTree<ComicState, RootState> = {
	[ComicTypes.getters.GET_COMIC_DATE]: () => (payload: ComicPreviewModel) => {
		const comic_date = `${payload.day}/${payload.month}/${payload.year}`;
		return moment(comic_date, "MMMM Do YYYY");
	},
};
