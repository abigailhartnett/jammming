import Button from "./Button";
function Track({ track, addToPlaylist, removeFromPlaylist }) {
  function clickHandlerAdd(event) {
    addToPlaylist(track);
  }

  function clickHandlerRemove(event) {
    removeFromPlaylist(track);
  }

  return (
    <div key={track.id}>
      <p>{track.name}</p>
      <p>{track.artist}</p>
      <p>{track.album}</p>
      {addToPlaylist ? (
        <Button onClick={clickHandlerAdd}>+</Button>
      ) : (
        <Button onClick={clickHandlerRemove}>-</Button>
      )}
    </div>
  );
}

export default Track;
