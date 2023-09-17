import "./App.css";
import TrackList from "./components/TrackList";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
import { useState } from "react";

let trackList = [
  {
    id: "1",
    name: "Shoulda Said No",
    artist: "Taylor Swift",
    album: "Taylor Swift Album 1",
  },
  {
    id: "2",
    name: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep Where Do We Go",
  },
  {
    id: "3",
    name: "One Thing",
    artist: "Jonathan Groff and Jessie Shelton",
    album: "36 Questions",
  },
];

let playlist = {
  name: "Abigail's Repeat-Ones",
  tracks: [],
};

function App() {
  const [tracks, setTracks] = useState(trackList);
  const [list, setList] = useState(playlist);

  function addToPlaylist(track) {
    if (!list.tracks.includes(track)) {
      setList((prev) => ({ name: prev.name, tracks: [track, ...prev.tracks] }));
    }
  }

  return (
    <>
      <SearchResults trackList={tracks} addToPlaylist={addToPlaylist} />
      <Playlist playlist={list} />
    </>
  );
}

export default App;
