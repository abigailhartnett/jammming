async function SpotifyAPI(searchQuery, setAlbums, albums) {
  // Future note: Handle cases where "access_token" is undefined or falsy
  const accessToken = localStorage.getItem("accessToken");
  const CLIENT_ID = "efabbdc785874423992878f942b0916d";
  const CLIENT_SECRET = "2cef9e0db446469b8bb61e9a2cc62b55";

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
      return data.artists.items[0].id;
    });

  // Get request with Artist ID, grab all albums from artist
  const returnedAlbums = await fetch(
    "https://api.spotify.com/v1/artists/" +
      artistID +
      "/albums" +
      "?include_groups=album&market=US&limit=50",
    searchParameters
  )
    .then((response) => response.json())
    .then((data) => {
      setAlbums(data.items);
    });

  // Display those albums to the user
}

export default SpotifyAPI;
