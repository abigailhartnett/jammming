function SearchBar() {
  return (
    <form>
      <label for="search" id="search">
        Find your favorite songs
      </label>
      <input type="text" name="search" id="search" />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchBar;
