import TrackList from "./TrackList";
import Button from "./Button";

function Playlist({ playlist, removeFromPlaylist, changeName, savePlaylist }) {
  function changeHandler(event) {
    changeName(event.target.value);
  }

  function clickHandlerSave(event) {
    savePlaylist();
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
