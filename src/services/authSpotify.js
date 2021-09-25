const CLIENT_ID = '0a1a53b7fecd4b7a94850fdf7ab68b3c';
const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URI = 'http://localhost:3000/';
const SCOPE = ['playlist-modify-private', 'user-read-email'];

export const loginAuthorizeSpotify = () => {
  window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
};

export const getAccessTokenFromURL = (hash) => {
  const stringAfterHastag = hash.substring(1);
  const paramInUrl = stringAfterHastag.split('&');
  const paramSplitUp = paramInUrl.reduce((acc, currentValue) => {
    const [key, value] = currentValue.split('=');
    acc[key] = value;
    return acc;
  }, {});
  return paramSplitUp;
};
