import TrackList from "./TrackList";

function SearchResults({ trackList, addToPlaylist }) {
  return (
    <>
      <h2 className="heading-lg track-list-heading">Search</h2>
      <div className="track-list-container" >
      <TrackList tracks={trackList} addToPlaylist={addToPlaylist} />
      </div>
    </>
  );
}

export default SearchResults;
