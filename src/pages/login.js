import Button from "../components/Button";
import { spotifyLogin } from "../SpotifyAuth";

function LoginPage() {
  function handleLogin() {
    spotifyLogin();
  }

  return (
    <div>
      <h1 className="heading-lg">Login to Spotify</h1>
      <Button onClick={handleLogin}>Login to Spotify</Button>
    </div>
  );
}

export default LoginPage;
