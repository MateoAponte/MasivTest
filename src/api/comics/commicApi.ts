import axios from "axios";

export class ComicApi {
	getComicData(query: number) {
		return axios.get(`${process.env.VUE_APP_ENDPOINT_COMICS}/${query}`);
	}
}

export default new ComicApi();
