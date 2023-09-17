import Button from "./Button";
function Track({ track, addToPlaylist }) {
  return (
    <div key={track.id}>
      <p>{track.name}</p>
      <p>{track.artist}</p>
      <p>{track.album}</p>
      <Button addToPlaylist={addToPlaylist} track={track} />
    </div>
  );
}

export default Track;
