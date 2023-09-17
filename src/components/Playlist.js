import TrackList from "./TrackList";

function Playlist({ playlist }) {
  return (
    <div>
      <h1>{playlist.name}</h1>
      <TrackList tracks={playlist.tracks} />
    </div>
  );
}

export default Playlist;
