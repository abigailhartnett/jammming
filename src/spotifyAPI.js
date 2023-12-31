async function SpotifyAPI(searchQuery, setTracks, tracks) {
  // Future note: Handle cases where "access_token" is undefined or falsy
  try {
    const accessToken = localStorage.getItem("accessToken");

    // Get request using search to get the data
    const searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    console.log(searchQuery);

    //eslint-disable-next-line no-unused-vars
    const _trackList = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchQuery + "&type=track",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.tracks && data.tracks.items && data.tracks.items.length > 0) {
          // Use returned data to setTracks to an array of objects containing only the data I want
          const tracksData = data.tracks.items.map((track) => {
            return {
              id: track.id,
              name: track.name,
              album: track.album.name,
              artist: track.artists.map((artist) => artist.name).join(", "),
              uri: track.uri,
            };
          });
          setTracks(tracksData);
        } else {
          console.log("No tracks found");
        }
      })
      .catch((error) => {
        console.error(
          "Track data call - Error fetching data from Spotify:".error
        );
      });
  } catch (error) {
    console.error("API call - Error fetching data from Spotify:".error);
  }
}

export default SpotifyAPI;
