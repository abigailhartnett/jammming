import SpotifySearchAPI from "../spotifySearchAPI";

const SearchBar = ({ setTracks, setSearchQuery, searchQuery }) => {
  async function handleSearch(e) {
    e.preventDefault();
    await SpotifySearchAPI(searchQuery, setTracks);
  }

  return (
    <div className="search-bar" >
      <form className="search-input" onSubmit={handleSearch}>
        <input
          name="search"
          id="search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="body"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
