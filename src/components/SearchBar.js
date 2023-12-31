import SpotifyAPI from "../spotifyAPI";

const SearchBar = ({ setTracks, setSearchQuery, searchQuery }) => {
  async function handleSearch(e) {
    e.preventDefault();
    await SpotifyAPI(searchQuery, setTracks);
  }

  return (
    <div>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          name="search"
          id="search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
