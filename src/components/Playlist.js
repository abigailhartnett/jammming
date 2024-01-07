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
    <>
     <h2>
        <input
          type="text"
          name="playlistName"
          id="playlistName"
          value={playlist.name}
          onChange={changeHandler}
          className="heading-lg track-list-heading"
        />
      </h2>
      <div className="track-list-container">
        <TrackList
          tracks={playlist.tracks}
          removeFromPlaylist={removeFromPlaylist}
        />
       </div>
       <div style={{ padding: "2rem 2rem 1rem 2rem" }}>
       <Button onClick={clickHandlerSave}>Save Playlist</Button>
      </div>
    </>
  );
}

export default Playlist;
