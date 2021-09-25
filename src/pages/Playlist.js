import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FormAddPlaylist from '../components/FormAddPlaylist';
import ListTracks from '../components/ListTracks';
import Track from '../components/Track';
import FooterHome from '../FooterHome';

export default function Playlist() {
  const [result, setResult] = useState(null);
  const [search, setSearch] = useState('');
  const [user, setUser] = useState({});
  const [tracksSelected, setTracksSelected] = useState([]);
  const [playlistForm, setPlaylistForm] = useState({
    title: '',
    description: '',
  });
  const user_access_token = useSelector((state) => state.user.access_token);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_access_token !== '']);

  const getUser = () => {
    fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: `Bearer ${user_access_token}` },
    })
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      });
  };

  const getSearchResult = () => {
    fetch(`https://api.spotify.com/v1/search?q=${search}&type=track`, {
      headers: { Authorization: `Bearer ${user_access_token}` },
    })
      .then((response) => response.json())
      .then((response) => setResult(response.tracks));
  };

  const createPlaylist = () => fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user_access_token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: playlistForm.title,
      description: playlistForm.description,
      public: false,
    }),
  })
    .then((response) => response.json())
    .catch((err) => alert(err));

  const addTrackToPlaylist = (playlistID) => {
    fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user_access_token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        uris: tracksSelected,
      }),
    })
      .then((response) => response.json())
      .catch((err) => alert(err));
  };

  const onDeselect = (trackURI) => {
    const newTracksSelected = tracksSelected.filter((track) => track !== trackURI);
    setTracksSelected([...newTracksSelected]);
  };

  const onSelect = (trackURI) => {
    setTracksSelected([...tracksSelected, trackURI]);
  };

  const handleOnChange = (input) => {
    const { name, value } = input.target;
    setPlaylistForm({ ...playlistForm, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const playlist = await createPlaylist();
    addTrackToPlaylist(playlist.id);
    alert('Playlist created');
    clearState();
  };

  const clearState = () => {
    setTracksSelected([]);
    setPlaylistForm({
      title: '',
      description: '',
    });
  };

  return (
    <div className="wrapper">
      <header>
        <div className="overlay">
          <img src="https://i.ibb.co/KF9fnhm/logo-ulteam.png" alt="Ul Team Logo" width="300" />
          <h3>Spotify Playlist API Web App</h3>
          <p style={{ marginTop: '10px' }}>Submitted for Final Praktikum LBE RPL</p>
          <br />
        </div>
      </header>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Playlist Search</h1>

      <Grid fluid>
        <Row center="xs">
          <Col center="xs">
            <form className="form">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="input-text"
                type="text"
                name="search"
                placeholder="Cari Lagu"
              />
            </form>
          </Col>
          <Col center="xs">
            <form className="form">
              <a id="button" className="search-button bn3" onClick={() => getSearchResult()}>
                Search
              </a>
            </form>
          </Col>
        </Row>
      </Grid>
      <center>
        <h2>Create your playlist</h2>
        <div className="header-wrapper">
          <FormAddPlaylist data={playlistForm} handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} />
          <ListTracks tracksSelected={tracksSelected} />
        </div>
      </center>
      {result ? (
        <>
          <h3 style={{ textAlign: 'center' }}>
            Showing
            {result.items.length}
            {' '}
            tracks
          </h3>
          {result.items.map((track, i) => (
            <Track
              key={i}
              height={track.album.images[0].height}
              imgUrl={track.album.images[0].url}
              title={track.name}
              artistName={track.artists[0].name}
              albumName={track.album.name}
              onSelected={() => onSelect(track.uri)}
              selected={tracksSelected.some((trackURI) => trackURI === track.uri)}
              onDeselected={() => onDeselect(track.uri)}
            />
          ))}
        </>
      ) : (
        <h3 style={{ textAlign: 'center' }}>No Tracks Show</h3>
      )}
      <FooterHome />
      <ul className="grafikkotak">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
}
