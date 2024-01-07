import "./App.css";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { useDesctructuredParams } from "./SpotifyAuth.js";
import LoginPage from "./pages/login.js";

let playlist = {
  name: "My playlist",
  tracks: [],
};

function App() {
  //save spotifyAuth data to local storage before running API calls
  useDesctructuredParams();

  //handle login authentication
  let url = window.location;
  let isAuthenticated = true;

  function login(url) {
    url.hash ? (isAuthenticated = true) : (isAuthenticated = false);
  }

  login(url);

  //handle app functionality

  const [tracks, setTracks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [list, setList] = useState(playlist);

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

  return (
    <>
      {isAuthenticated ? (
        <div className="container">
          <SearchBar
            setTracks={setTracks}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            tracks={tracks}
            style={{ gridColumn: "1 / span 2" }}
          />
          <div>
            <SearchResults trackList={tracks} addToPlaylist={addToPlaylist} />
          </div>
          <div>
            <Playlist
              playlist={list}
              removeFromPlaylist={removeFromPlaylist}
              changeName={changeName}
              tracks={tracks}
            />
          </div>
          <div className="footer body-xs">
              <p>Created by Abigail Hartnett. <a href="https://abigailhartnett.com">Visit my website</a> to see more of my work.</p>
            </div>
        </div>
  
      ) : (
        <div className="login-container">
          <LoginPage />
        </div>
      )}
    </>
  );
}

export default App;
