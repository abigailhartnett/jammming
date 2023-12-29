import { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`,
        {}
      );

      if (!response.ok) {
        throw new Error("Spotify API request failed.");
      }

      const data = await response.json();
      setSearchResults(data.tracks.items);
    } catch (error) {
      console.error(`Spotify API request failed`);
    }
  };

  return (
    <div className="search-bar">
      <input
        name="search"
        id="search"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
