import Button from "../components/Button";
import { spotifyLogin } from "../SpotifyAuth";

function LoginPage() {
  function handleLogin() {
    spotifyLogin();
  }

  return (
    <>
      <h1>Login to Spotify</h1>
      <Button onClick={handleLogin}>Login to Spotify</Button>
    </>
  );
}

export default LoginPage;
