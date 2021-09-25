import Landing from "./pages/Landing";
import Playlist from "./pages/Playlist";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { setAccessToken } from "./data/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";

function App() {
  const dispatch = useDispatch();
  const user_access_token = useSelector((state) => state.user.access_token);

  const getHashParams = () => {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    dispatch(setAccessToken(hashParams.access_token));
  };

  useEffect(() => {
    getHashParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/create-playlist">
          {user_access_token ? <Playlist /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          {!user_access_token ? <Landing /> : <Redirect to="/create-playlist" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
