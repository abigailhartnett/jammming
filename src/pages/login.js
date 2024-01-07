import Button from "../components/Button";
import { spotifyLogin } from "../SpotifyAuth";

function LoginPage() {
  function handleLogin() {
    spotifyLogin();
  }

  return (
    <div>
      <h1 className="heading-lg">Ready to build a playlist?</h1>
      <p className="body">This app will allow you to build a playlist of your favorite songs, then save it to your Spotify account.</p>
      <Button onClick={handleLogin} className="login-button">Login to Spotify</Button>
    </div>
  );
}

export default LoginPage;
