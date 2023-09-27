import TrackList from "./TrackList";

function SearchResults({ trackList, addToPlaylist }) {
  return (
    <div>
      <h2>Search</h2>
      <TrackList tracks={trackList} addToPlaylist={addToPlaylist} />
    </div>
  );
}

export default SearchResults;
