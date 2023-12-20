function SearchBar() {
  return (
    <form className="search-bar">
      <label for="search" id="search" className="heading-md">
        Find your favorite songs
      </label>
      <div>
        <input type="text" name="search" id="search" />
        <input type="submit" value="Search" />
      </div>
    </form>
  );
}

export default SearchBar;
