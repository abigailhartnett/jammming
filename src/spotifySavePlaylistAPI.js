export async function savePlaylistToSpotify() {
    const userID = localStorage.getItem("userID");
    const apiURL = `https://api.spotify.com/v1/users/${userID}/playlists`;
    
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    
    const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken
        },
        body: JSON.stringify({
            name: 'My New Playlist 3',
            description: 'A description for the playlist',
        }),
    };

    try {
        const response = await fetch(apiURL, request);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("Save Playlist API failed: ", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error saving playlist to SpotifY: ", error.message);
    }
    }
    
    
