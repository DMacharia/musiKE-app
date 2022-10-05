import axios from "axios";

const clientID = "9ab9ecb6425544d4a7c929211bdb1f44";
const authEndpoint = "https://accounts.spotify.com/authorize?";
const redirectURL = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

//end point for getting data from spotify api
export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

//set the base url after which the specific path will be added
const apiClient = axios.create({
	baseURL: "https://api.spotify.com/v1/",
});

export function setClientToken(token) {
	apiClient.interceptors.request.use(async function (config) {
		config.headers.Authorization = "Bearer " + token;
		return config;
	});
}   

export default apiClient;
