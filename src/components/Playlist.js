import TrackList from "./TrackList";
import Button from "./Button";
import { savePlaylistToSpotify } from "../spotifySavePlaylistAPI";

function Playlist({ playlist, removeFromPlaylist, changeName,  }) {
  function changeHandler(event) {
    changeName(event.target.value);
  }

  function clickHandlerSave() {
    savePlaylistToSpotify();
  }

  return (
    <div className="trackList">
      <h2>
        <input
          type="text"
          name="playlistName"
          id="playlistName"
          value={playlist.name}
          onChange={changeHandler}
          className="heading-lg"
        />
      </h2>

      <TrackList
        tracks={playlist.tracks}
        removeFromPlaylist={removeFromPlaylist}
      />
      <Button onClick={clickHandlerSave}>Save Playlist</Button>
    </div>
  );
}

export default Playlist;
