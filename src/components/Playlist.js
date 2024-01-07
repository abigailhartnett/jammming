import TrackList from "./TrackList";
import Button from "./Button";
import { savePlaylistToSpotify } from "../spotifySavePlaylistAPI";

function Playlist({ playlist, removeFromPlaylist, changeName }) {
  function changeHandler(event) {
    changeName(event.target.value);
  }

  function clickHandlerSave() {
    savePlaylistToSpotify(playlist);
  }

  return (
    <div>
     <h2 className="track-list-heading">
        <input
          type="text"
          name="playlistName"
          id="playlistName"
          value={playlist.name}
          onChange={changeHandler}
          className="heading-lg"
          style={{ width: "100%", padding: "0"}}
        />
      </h2>
      <div className="track-list-container">
        <TrackList
          tracks={playlist.tracks}
          removeFromPlaylist={removeFromPlaylist}
        />
      </div>
      <div style={{ padding: "1rem 0" }}>
        <Button onClick={clickHandlerSave}>Save Playlist</Button>
      </div>
    </div>
  );
}

export default Playlist;
