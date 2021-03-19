import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  UserContext,
  PageStatusContext,
  AlertMessageContext,
  CurrentEpisodeContext,
} from "./context/context";
import GlobalStyle from "./constants/globalStyle";
import { theme } from "./constants/theme";
import { getAuthToken } from "./utils";
import Playlist from "./pages/Playlist";
import Channel from "./pages/Channel";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer/Player";
import Subscription from "./pages/Subscription";
import UserManagement from "./pages/UserManagement";
import { setInitialUserContext } from "./utils";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [userSubscription, setUserSubscription] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [userPlayedRecord, setUserPlayedRecord] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState(null);

  useEffect(() => {
    function getUser() {
      if (getAuthToken()) {
        setInitialUserContext(
          setUserInfo,
          setUserPlaylists,
          setUserPlayedRecord,
          setUserSubscription,
          setAlert,
          setIsLoading
        );
      }
    }
    getUser();
  }, []);

  const AlertMessageContextValue = {
    alert,
    setAlert,
    alertText,
    setAlertText,
  };

  const pageStatusContextValue = {
    isLoading,
    setIsLoading,
  };

  const currentEpisodeContextValue = {
    currentEpisode,
    setCurrentEpisode,
  };

  const userContextValue = {
    userInfo,
    userSubscription,
    userPlaylists,
    userPlayedRecord,
    setUserInfo,
    setUserSubscription,
    setUserPlaylists,
    setUserPlayedRecord,
  };

  return (
    <PageStatusContext.Provider value={pageStatusContextValue}>
      <UserContext.Provider value={userContextValue}>
        <AlertMessageContext.Provider value={AlertMessageContextValue}>
          <CurrentEpisodeContext.Provider value={currentEpisodeContextValue}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Router>
                <Navbar />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/search/:keyword">
                    <Search />
                  </Route>
                  <Route path="/mysubscription">
                    <Subscription />
                  </Route>
                  <Route path="/myplaylist">
                    <Playlist />
                  </Route>
                  <Route path="/channel/:podcastId">
                    <Channel />
                  </Route>
                  <Route path="/usermanagement">
                    <UserManagement />
                  </Route>
                </Switch>
                <MusicPlayer />
              </Router>
            </ThemeProvider>
          </CurrentEpisodeContext.Provider>
        </AlertMessageContext.Provider>
      </UserContext.Provider>
    </PageStatusContext.Provider>
  );
}

export default App;
