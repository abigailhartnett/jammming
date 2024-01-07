import TrackList from "./TrackList";

function SearchResults({ trackList, addToPlaylist }) {
  return (
    <div>
      <h2 className="track-list-heading heading-md ">Search results</h2>
      <div className="track-list-container">
      <TrackList tracks={trackList} addToPlaylist={addToPlaylist} />
      </div>
    </div>
  );
}

export default SearchResults;
