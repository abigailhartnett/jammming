import { useEffect } from "react";

const CLIENT_ID = "efabbdc785874423992878f942b0916d";
// const REDIRECT_URI = "http://localhost:3000";
const REDIRECT_URI = "https://abigailhartnett-codecademy-jammming.netlify.app"
const SCOPES = [
  "playlist-modify-private",
  "playlist-modify-public",
  "user-read-private",
  "user-read-email",
];
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const SPACE_DELIMITER = "%20";
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

let loginURL = `
${AUTH_ENDPOINT}
?client_id=${CLIENT_ID}
&redirect_uri=${REDIRECT_URI}
&scope=${SCOPES_URL_PARAM}
&response_type=${RESPONSE_TYPE}
&show_dialog=true`;

// Future changes: refactor this--use an anchor tag instead

export function spotifyLogin() {
  window.location.href = loginURL;
}

export function getParamsFromSpotifyAuth(hash) {
  const stringAfterHash = hash.substring(1);
  const urlParams = stringAfterHash.split("&");
  const params = urlParams.reduce((acc, curr) => {
    const [key, value] = curr.split("=");
    acc[key] = value;
    return acc;
  }, {});
  return params;
}

export function useDesctructuredParams() {
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getParamsFromSpotifyAuth(
        window.location.hash
      );

      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);

      getUserID();
    }
  }, []);  
}

export async function getUserID() {
  const apiURL = "https://api.spotify.com/v1/me";
  const accessToken = localStorage.getItem("accessToken");
  const request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  }

  try {
    const response = await fetch(apiURL, request);

    if (response.ok) {
      const data = await response.json()
      const userID = data.id;
      localStorage.setItem("userID", userID);
    } else {
      console.error("User ID API request failed:", response.status, response.statusText);
    } 
    } catch (error) {
      console.error("Error getting user ID: ", error.message);
  }
}
