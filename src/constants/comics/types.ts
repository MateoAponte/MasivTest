export default {
	PATH: "@modules/comic",
	actions: {
		FETCH_COMICS: "@actions/fetchComics",
		UPDATE_PREVIEW_COMIC: "@actions/updatePreviewComic",
		UPDATE_COMICS_ARRAY: "@actions/updateComicsArray",
	},
	mutations: {
		SET_PREVIEW_COMIC: "@mutation/setPreviewComic",
		SET_COMICS_ARRAY: "@mutation/setComicsArray",
	},
	getters: {},
};
