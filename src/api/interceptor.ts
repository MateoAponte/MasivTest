import axios from "axios";

export const AxiosInteceptor = axios.create({
	headers: {
		"x-apikey": process.env.VUE_APP_X_API_KEY,
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
});
