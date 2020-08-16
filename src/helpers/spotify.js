export const authEndPoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "fe6d050286164a0dbd25e17b9692128a";
const redirectUri = "http://localhost:3000/";

// Permissions for users
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// getting all param values from spotify response like accessToken,tokenType,expires in (will also try this react-router)
export const getTokenFromResponse = () => {
    return window.location.hash  // gets url part which starts from # -- our login response uri is like: localhost:300/#accessToken=<token>
        .substring(1)
        .split("&") 
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;   
        }, {});
};

// %20 ascii for space
export const loginURL= `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; 