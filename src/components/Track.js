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
      <div className="track-titles">
        <p className="heading-sm track-titles">{track.name}</p>
        <p className="body-xs track-titles">{track.artist}</p>
      </div>
      <div className="track-titles">
        <p className="body-xs track-titles">{track.album}</p>
      </div>
      <div style={{justifySelf: "end"}}>
        {addToPlaylist ? (
          <Button onClick={clickHandlerAdd} className="add-button">Add</Button>
        ) : (
          <Button onClick={clickHandlerRemove} className="add-button">Remove</Button>
        )}
      </div>
    </div>
  );
}

export default Track;
