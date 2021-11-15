import axios from "axios";

export class ComicApi {
	getComicData(query: number) {
		return axios.get(`${process.env.VUE_APP_ENDPOINT_COMICS}/${query}/info.0.json`);
	}
}

export default new ComicApi();
