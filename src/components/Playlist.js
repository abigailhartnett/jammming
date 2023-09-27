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
    <div>
      <input
        type="text"
        name="playlistName"
        id="playlistName"
        value={playlist.name}
        onChange={changeHandler}
      />
      <TrackList
        tracks={playlist.tracks}
        removeFromPlaylist={removeFromPlaylist}
      />
      <Button onClick={clickHandlerSave}>Save Playlist</Button>
    </div>
  );
}

export default Playlist;
