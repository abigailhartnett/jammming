import Track from "./Track";

function TrackList({ tracks, addToPlaylist }) {
  return (
    <div>
      {tracks.map((track) => {
        return <Track track={track} addToPlaylist={addToPlaylist} />;
      })}
    </div>
  );
}

export default TrackList;
