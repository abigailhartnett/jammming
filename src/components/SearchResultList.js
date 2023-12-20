import React from "react";
import { useState } from React;

const [tracks, setTracks] = useState(trackList);

let searchResults = [
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

function SearchResults({}) {
  return searchResults;
}

export default SearchResults;
