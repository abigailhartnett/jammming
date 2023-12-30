import "./App.css";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import { spotifyLogin, useDesctructuredParams } from "./SpotifyAuth.js";
import SpotifyAPI from "./spotifyAPI.js";

let trackList = [
  {
    id: "1",
    name: "Shoulda Said No",
    artist: "Taylor Swift",
    album: "Taylor Swift Album 1",
    uri: "/tracks/1",
  },
  {
    id: "2",
    name: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep Where Do We Go",
    uri: "/tracks/2",
  },
  {
    id: "3",
    name: "One Thing",
    artist: "Jonathan Groff and Jessie Shelton",
    album: "36 Questions",
    uri: "/tracks/3",
  },
];

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

  //create ability to save albums in an array
  const [albums, setAlbums] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [tracks, setTracks] = useState(trackList);
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
        setAlbums={setAlbums}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        albums={albums}
      />
      <div className="playlist-container">
        <SearchResults trackList={albums} addToPlaylist={addToPlaylist} />
        <Playlist
          playlist={list}
          removeFromPlaylist={removeFromPlaylist}
          changeName={changeName}
          savePlaylist={savePlaylist}
        />
      </div>
      {useEffect(() => {
        console.log(albums);
      }, [albums])}
    </div>
  );
}

export default App;
