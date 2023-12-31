import SpotifyAPI from "../spotifyAPI";

const SearchBar = ({ setTracks, setSearchQuery, searchQuery }) => {
  async function handleSearch() {
    await SpotifyAPI(searchQuery, setTracks);
  }

  return (
    <div className="search-bar">
      <input
        name="search"
        id="search"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={() => handleSearch(searchQuery)}>Search</button>
    </div>
  );
};

export default SearchBar;
