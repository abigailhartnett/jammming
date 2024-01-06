export async function savePlaylistToSpotify(playlist) {
    
    const userID = localStorage.getItem("userID");
    const apiURL = `https://api.spotify.com/v1/users/${userID}/playlists`;
    const accessToken = localStorage.getItem("accessToken");
    
    const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken
        },
        body: JSON.stringify({
            name: playlist.name,
        }),
    };

    try {
        const response = await fetch(apiURL, request);
        if (response.ok) {
            const data = await response.json();
            const playlistID = data.id;
            localStorage.setItem("playlistID", playlistID);
            
        } else {
            console.error("Save Playlist API failed: ", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error saving playlist to Spotify: ", error.message);
    }
    if (playlist.tracks) {
        saveTracksToSpotifyPlaylist(playlist.tracks)
    } else {
        console.log("whoops! no tracks")
    }
};

export async function saveTracksToSpotifyPlaylist(tracks) {
    const playlistID = localStorage.getItem("playlistID");
    const accessToken = localStorage.getItem("accessToken");
    const apiURL = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`
    const trackUris = tracks.map(track => track.uri);

    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken
        },
        body: JSON.stringify({
            uris: trackUris,
        })
    };

    try {
        const response = await fetch(apiURL, request);
        if (!response.ok) {
            console.error("Push tracks to playlist API falied: ", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error pushing tracks to Spotify playlist: ", error.message);
    }
}
