const SpotifyAPI = () => {
    return(
    
        function requestSpotifyAuth() {
        const client_id = "efabbdc785874423992878f942b0916d";
        const redirect_uri = "http://localhost:3000";
        const scope = [
          "playlist-modify-private",
          "playlist-modify-public",
          "user-read-private",
          "user-read-email",
          //"change-playlist-details",
        ];
      
        let url = "https://accounts.spotify.com/authorize";
        url += "?response_type=token";
        url += "&client_id=" + encodeURIComponent(client_id);
        url += "&scope=" + encodeURIComponent(scope);
        url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
      
        window.location = url;
      }
      
      function getAccessToken(hash) {
        const params = hash.substring(1).split("&");
        const token = params.reduce((accumulator, currentValue) => {
          const [key, value] = currentValue.split("=");
          accumulator[key] = value;
          return accumulator;
        }, {});
        window.setTimeout(function () {
          window.location.href =
            window.location.href.split("?")[0] || window.location.href.split("#")[0];
        }, 3600000);
        return token;
      }
    );
}

export default SpotifyAPI;


