import TrackList from "./TrackList";

function Playlist({ playlist, removeFromPlaylist, changeName }) {
  function changeHandler(event) {
    changeName(event.target.value);
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
    </div>
  );
}

export default Playlist;
