/* eslint-disable react-hooks/exhaustive-deps */

import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SvgHomeAnim from '../assets/img/home_anim';
import { FlatButton } from '../components/Buttons';
import FooterHome from '../FooterHome';

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#000',
    backgroundColor: 'rgba(27, 217, 84, 1)',
    borderRadius: '50px',
    fontWeight: '800',
    padding: '20px',
    '&:hover': {
      backgroundColor: '#1aa74c',
      textDecoration: 'none',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Landing() {
  const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const CLIENT_ID = '0a1a53b7fecd4b7a94850fdf7ab68b3c';
  const REDIRECT_URI = 'http://localhost:3000/';
  const loginSpotify = () => {
    const state = generateRandomString(16);
    localStorage.setItem('spotify_auth_state', state);
    const scope = 'user-read-private user-read-email playlist-modify-private';
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += `&client_id=${encodeURIComponent(CLIENT_ID)}`;
    url += `&scope=${encodeURIComponent(scope)}`;
    url += `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    url += `&state=${encodeURIComponent(state)}`;
    window.location = url;
  };
  const classes = useStyles();
  const svgIcon = (
    <Icon>
      <img src="spot.svg" alt="Logonya Spotify" />
    </Icon>
  );

  return (
    <Router>
      <div className="login">
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <Grid fluid>
          <Row center="xs">
            <Col center="xs">
              <SvgHomeAnim width="400" height="400" />
            </Col>
            <Col center="xs">
              <img src="https://i.ibb.co/KF9fnhm/logo-ulteam.png" alt="Ul Team Logo" width="400" />
              <br />
              <div className="center">
                <a variant="contained" color={ColorButton.v} className={classes.margin} onClick={() => loginSpotify()}>
                  <span />
                  <span />
                  <span />
                  <span />
                  Login with Spotify
                </a>
              </div>
            </Col>
          </Row>
        </Grid>
        <FooterHome style={{ marginTop: '20px' }} />
      </div>
    </Router>
  );
}
