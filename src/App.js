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
  name: "My Playlist",
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
    <div>
      <SearchResults trackList={tracks} addToPlaylist={addToPlaylist} />
      <Playlist
        playlist={list}
        removeFromPlaylist={removeFromPlaylist}
        changeName={changeName}
      />
      {console.log(list)}
    </div>
  );
}

export default App;
