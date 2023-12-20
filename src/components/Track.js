import Button from "./Button";
function Track({ track, addToPlaylist, removeFromPlaylist }) {
  function clickHandlerAdd(event) {
    addToPlaylist(track);
  }

  function clickHandlerRemove(event) {
    removeFromPlaylist(track);
  }

  return (
    <div key={track.id} className="track">
      <div>
        <p className="heading-md">{track.name}</p>
        <p>{track.artist}</p>
        <p>{track.album}</p>
      </div>
      <div className="playlist-button">
        {addToPlaylist ? (
          <Button onClick={clickHandlerAdd}>+</Button>
        ) : (
          <Button onClick={clickHandlerRemove}>-</Button>
        )}
      </div>
    </div>
  );
}

export default Track;
