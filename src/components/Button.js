function Button({ addToPlaylist, track }) {
  function clickHandler(event) {
    addToPlaylist(track);
  }

  return <button onClick={clickHandler}>+</button>;
}

export default Button;
