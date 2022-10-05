 const clientID= "9ab9ecb6425544d4a7c929211bdb1f44"
 const authEndpoint = "https://accounts.spotify.com/authorize?";
 const redirectURL = "http://localhost:3000";
 const scopes = ["user-library-read", "playlist-read-private"];

 export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
 