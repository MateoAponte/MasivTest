import Vue from "vue";
import Vuex from "vuex";

import { StoreOptions } from "vuex";
import { ComicStore } from "@/store/comics/index";

import { RootState } from "@/models/root/rootState";

import ComicTypes from "@/constants/comics/types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
	modules: {
		[ComicTypes.PATH]: ComicStore,
	},
};
export default new Vuex.Store<RootState>(store);
