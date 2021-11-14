import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

import { RootState } from "@/models/root/rootState";
import { ComicState } from "@/models/comics/comicState";

import { Module } from "vuex";

export const ComicStore: Module<ComicState, RootState> = {
	state,
	actions,
	mutations,
	getters,
};
