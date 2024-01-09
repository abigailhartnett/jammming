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
        <span style={{ color: "#ffffff", fontSize: "1rem" }} className="icon"><i class="fa-solid fa-pencil"></i></span>
        <input
          type="text"
          name="playlistName"
          id="playlistName"
          value={playlist.name}
          onChange={changeHandler}
          className="heading-md"
          style={{ width: "100%", padding: "0 0.5rem"}}
        />
      </h2>
      <div className="track-list-container">
        <TrackList
          tracks={playlist.tracks}
          removeFromPlaylist={removeFromPlaylist}
        />
      </div>
      <div className="button-padding">
        <Button onClick={clickHandlerSave} className="save-playlist-button">Save Playlist</Button>
      </div>
    </div>
  );
}

export default Playlist;
