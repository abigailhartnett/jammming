async function SpotifySearchAPI(searchQuery, setTracks) {
  const accessToken = localStorage.getItem("accessToken");
  const apiURL = "https://api.spotify.com/v1/search?q="

  const request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };

  try {
    const response = await fetch(apiURL + searchQuery + "&type=track", request)
      
    if (response.ok) {
      const data = await response.json();
      if (data.tracks && data.tracks.items && data.tracks.items.length > 0) {
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
    }
  } catch (error) {
    console.error("API call - Error fetching data from Spotify:".error);
  }
}

export default SpotifySearchAPI;
