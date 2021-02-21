import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext, PageStatusContext } from "./context/context";
import GlobalStyle from "./constants/globalStyle";
import { theme } from "./constants/theme";
import { getAuthToken } from "./utils";
import { getMyInfo } from "./WebAPI/me";
import { getEpisodeInfo } from "./WebAPI/listenAPI";
import Playlist from "./pages/Playlist";
import Channel from "./pages/Channel";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Subscription from "./pages/Subscription";
import UserManagement from "./pages/UserManagement";
// import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [userSubscription, setUserSubscription] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [userPlayedRecord, setUserPlayedRecord] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getUser() {
      if (getAuthToken()) {
        const response = await getMyInfo()
        if (response.ok) {
          let { playlists, subscriptions, playedRecords, ...userInfo } = response.data;
          for (let i = 0; i < playlists.length; i++) {
            let { Episodes, ...rest } = playlists[i];
            Episodes = await Promise.all(Episodes.map(async ep => {
              const episodeInfo = await getEpisodeInfo(ep.id);
              return episodeInfo.data;
            }))
            playlists[i] = ({ Episodes, ...rest, playmode: false });
          }
            setUserInfo(userInfo);
            setUserPlaylists(playlists);
            setUserPlayedRecord(playedRecords);
            setUserSubscription(subscriptions);
          };
      }
    }
    getUser()
    /* 
      在這邊把會員的訂閱等資訊放入 state 中
      拿到的資料可以用 destructure 寫成下面這樣
      {playlists, subscription, playedRecord, ...userInfo}
      再分別填入 state 中。
      之後要修改把新的東西放進 setState() 中
    */
  }, []);

  const pageStatusContextValue = {
    isLoading,
    setIsLoading,
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
        {/* 如果要使用 Context 請用 hooks 裡面的 customhook，因為之後如果要加一些身份驗證之類的會直接加在 hook 中 */}
        {/* {console.log(userPlaylists)} */}
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
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
          </Router>
        </ThemeProvider>
      </UserContext.Provider>
    </PageStatusContext.Provider>
  );
}

export default App;
