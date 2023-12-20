import "./App.css";
import TrackList from "./components/TrackList";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";

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
  const [tracks, setTracks] = useState(trackList);
  const [list, setList] = useState(playlist);
  const [savedList, setSavedList] = useState(savedPlaylist);

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

  function requestSpotifyAuth() {
    const client_id = "efabbdc785874423992878f942b0916d";
    const redirect_uri = "http://localhost:3000";
    const scope = [
      "playlist-modify-private",
      "playlist-modify-public",
      //"change-playlist-details",
    ];

    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

    window.location = url;
  }

  function getAccessToken(hash) {
    const params = hash.substring(1).split("&");
    const token = params.reduce((accumulator, currentValue) => {
      const [key, value] = currentValue.split("=");
      accumulator[key] = value;
      return accumulator;
    }, {});
    window.setTimeout(function () {
      window.location.href =
        window.location.href.split("?")[0] ||
        window.location.href.split("#")[0];
    }, 3600000);
    return token;
  }

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getAccessToken(
        window.location.hash
      );

      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });

  return (
    <div>
      <Button onClick={requestSpotifyAuth}>Login to Spotify</Button>
      <SearchBar />
      <div className="playlist-container">
        <SearchResults trackList={tracks} addToPlaylist={addToPlaylist} />
        <Playlist
          playlist={list}
          removeFromPlaylist={removeFromPlaylist}
          changeName={changeName}
          savePlaylist={savePlaylist}
        />
      </div>
      {console.log(list)}
    </div>
  );
}

export default App;
