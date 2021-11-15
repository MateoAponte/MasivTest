export default {
	PATH: "@modules/comic",
	actions: {
		FETCH_COMICS: "@actions/fetchComics",
		UPDATE_PREVIEW_COMIC: "@actions/updatePreviewComic",
		UPDATE_COMICS_ARRAY: "@actions/updateComicsArray",
		UPDATE_COMIC_NUMBER: "@actions/updateComicNumber",
	},
	mutations: {
		SET_PREVIEW_COMIC: "@mutation/setPreviewComic",
		SET_COMICS_ARRAY: "@mutation/setComicsArray",
		SET_COMIC_NUMBER: "@mutation/setComicNumber",
	},
	getters: {
		GET_COMIC_DATE: "@getters/getComicDate",
	},
};
