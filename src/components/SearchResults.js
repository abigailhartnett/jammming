import TrackList from "./TrackList";

function SearchResults({ trackList, addToPlaylist }) {
  return (
    <div>
      <TrackList tracks={trackList} addToPlaylist={addToPlaylist} />
    </div>
  );
}

export default SearchResults;
