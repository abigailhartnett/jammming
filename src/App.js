import "./App.css";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { spotifyLogin, useDesctructuredParams } from "./SpotifyAuth.js";
// import SpotifyAPI from "./spotifyAPI.js";

let playlist = {
  name: "My Playlist",
  tracks: [],
};

let savedPlaylist = {
  name: "",
  tracks: [],
};

function App() {
  //save spotifyAuth data to local storage before running API calls
  useDesctructuredParams();

  const [tracks, setTracks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState(playlist);
  const [savedList, setSavedList] = useState(savedPlaylist);

  function handleLogin() {
    spotifyLogin();
  }

  // function handleSearch() {
  //   SpotifyAPI(searchQuery);
  // }

  function addToPlaylist(track) {
    if (!list.tracks.includes(track)) {
      setList((prev) => ({ name: prev.name, tracks: [track, ...prev.tracks] }));
    }
  }

  function removeFromPlaylist(track) {
    if (list.tracks.includes(track)) {
      list.tracks.splice(list.tracks.indexOf(track), 1);
      setList((prev) => ({
        name: prev.name,
        tracks: list.tracks,
      }));
    }
  }

  function changeName(newName) {
    setList((prev) => ({
      name: newName,
      tracks: prev.tracks,
    }));
  }

  function savePlaylist() {
    const uris = list.tracks.map((track) => track.uri);
    setSavedList((prev) => ({ name: list.name, tracks: uris }));
    console.log(savedList);
    setList((prev) => ({ name: "", tracks: [] }));
    console.log(playlist);
  }

  return (
    <div>
      <Button onClick={handleLogin}>Login to Spotify</Button>
      <SearchBar
        setTracks={setTracks}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        tracks={tracks}
      />
      <div className="playlist-container">
        <SearchResults trackList={tracks} addToPlaylist={addToPlaylist} />
        <Playlist
          playlist={list}
          removeFromPlaylist={removeFromPlaylist}
          changeName={changeName}
          savePlaylist={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
