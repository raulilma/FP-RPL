import './Login.css';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Icon from '@material-ui/core/Icon';
import SvgHomeAnim from './assets/img/home_anim';
import FooterHome from './FooterHome';
import { loginUrl } from './spotify';

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

function Login() {
  const classes = useStyles();
  const svgIcon = (
    <Icon>
      <img src="spot.svg" alt="Logonya Spotify" />
    </Icon>
  );
  return (
    <Router>
      <div className="login">
        <Grid fluid>
          <Row center="xs">
            <Col center="xs">
              <SvgHomeAnim width="400" height="400" />
            </Col>
            <Col center="xs">
              <img src="https://i.ibb.co/KF9fnhm/logo-ulteam.png" alt="Ul Team Logo" width="400" />
              <br />
              <a href={loginUrl}>
                <ColorButton variant="contained" color={ColorButton.v} className={classes.margin}>
                  Login with Spotify
                </ColorButton>
              </a>
            </Col>
          </Row>
        </Grid>
        <FooterHome />
      </div>
    </Router>
  );
}

export default Login;
