import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import { messages, defaultLocale } from "@/languaje/index";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faChevronCircleLeft,
	faChevronCircleRight,
	faTrash,
	faTimes,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronCircleLeft, faChevronCircleRight, faTrash, faTimes, faHeart);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import "@/assets/scss/main.scss";

Vue.use(VueI18n);

const i18n = new VueI18n({
	messages,
	locale: defaultLocale,
	fallbackLocale: defaultLocale,
});

Vue.config.productionTip = false;

new Vue({
	i18n,
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
