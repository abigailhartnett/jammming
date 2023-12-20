import TrackList from "./TrackList";

function SearchResults({ trackList, addToPlaylist }) {
  return (
    <div className="trackList">
      <h2 className="heading-lg">Search</h2>
      <TrackList tracks={trackList} addToPlaylist={addToPlaylist} />
    </div>
  );
}

export default SearchResults;
