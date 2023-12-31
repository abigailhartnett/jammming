async function SpotifyAPI(searchQuery, setAlbums, albums) {
  // Future note: Handle cases where "access_token" is undefined or falsy
  try {
    const accessToken = localStorage.getItem("accessToken");

    // Get request using search to get the Aritist ID
    const searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchQuery + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.artists) {
          if (data.artists.items) {
            // console.log(data.artists.items[0]);
            return data.artists.items[0].id;
          }
        }
      })
      .catch((error) => {
        console.error("Call 1 - Error fetching data from Spotify:".error);
      });

    // Get request with Artist ID, grab all albums from artist

    //eslint-disable-next-line no-unused-vars
    const _returnAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setAlbums(data.items);
        }
      })
      .catch((error) => {
        console.error("Call 2 - Error fetching data from Spotify:", error);
      });

    // Display those albums to the user
  } catch (error) {
    console.error("Call 3 - Error fetching data from Spotify:".error);
  }
}

export default SpotifyAPI;
