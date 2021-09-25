export const authEndpoint = 'https://accounts.spotify.com/authorize';

const REDIRECT_URI = 'http://localhost:3000/';
const CLIENT_ID = '0a1a53b7fecd4b7a94850fdf7ab68b3c';

const SCOPES = ['user-read-currently-playing', 'user-read-recently-played', 'user-read-playback-state', 'user-top-read', 'user-modify-playback-state'];
const RESPONSE_TYPE = 'token';
const SHOW_DIALOG = true;

export const getTokenFromUrl = () => window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item) => {
    const parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {});

export const loginUrl = `${authEndpoint}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join('%20')}&response_type=${RESPONSE_TYPE}&show_dialog=${SHOW_DIALOG}`;
