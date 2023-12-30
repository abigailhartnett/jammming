# Jammming

🚧 In progress 🚧

Goal: create an app that connects to Spotify's API, enabling you to create a custom playlist and save it to your Spotify account.

Current state:
✅ App basic structure created
✅ Spotify Auth connected
✅ Initial Spotify API initiated

Currently, the API is returning albums, not tracks. (I just wanted to get the API _working_ before optimizing it to show the specific data I'm looking for.) Currently, this process is very fragile. Small tweaks often break the app. I need to add checks to ensure the API calls are running at the proper time to ensure the correct data is populated before it's being used in the app.

Additionally:
- I will modify the API call to allow users to search for tracks (I'd love to add the ability to search for albums as well, however this will require more thought into how exactly the experience between this app and the usage on Spotify)
- The tracklist will display more data (song title, album name, cover, etc.)
- User will be able to save a new playlist to their Spotify account
- I will update styling to improve UI

