import Track from "./Track";

function TrackList({ tracks, addToPlaylist, removeFromPlaylist }) {
  return (
    <div>
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            addToPlaylist={addToPlaylist}
            removeFromPlaylist={removeFromPlaylist}
          />
        );
      })}
    </div>
  );
}

export default TrackList;
