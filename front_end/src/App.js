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

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [userSubscription, setUserSubscription] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [userPlayedRecord, setUserPlayedRecord] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [Alert, setAlert] = useState(false);

  useEffect(() => {
    async function getUser() {
      if (getAuthToken()) {
        const response = await getMyInfo();
        if (response.ok) {
          let {
            playlists,
            subscriptions,
            playedRecords,
            ...userInfo
          } = response.data;

          for (let i = 0; i < playlists.length; i++) {
            let { Episodes, ...rest } = playlists[i];
            Episodes = await Promise.all(
              Episodes.map(async (ep) => {
                const episodeInfo = await getEpisodeInfo(ep.id);
                return episodeInfo.data;
              })
            );
            playlists[i] = { Episodes, ...rest };
          }

          // 取前三筆播放紀錄
          let lastThreePlayedRecords = [];
          if (playedRecords.length > 3) {
            for (let i = 0; i < 3; i++) {
              lastThreePlayedRecords[i] = playedRecords[i];
            }
          } else {
            for (let i = 0; i < playedRecords.length; i++) {
              lastThreePlayedRecords[i] = playedRecords[i];
            }
          }

          // 拿到播放紀錄的單集詳細資料
          let playedRecordsDetails = await Promise.all(
            lastThreePlayedRecords.map(async (ep) => {
              if (ep.episodeId.length !== 32 || ep.progress === 0) return;
              const episodeInfo = await getEpisodeInfo(ep.episodeId);
              return episodeInfo.data;
            })
          );

          // 播放紀錄資料重整
          let record = [];
          for (let i = 0; i < playedRecordsDetails.length; i++) {
            record[i] = {
              episode: playedRecordsDetails[i],
              progress: lastThreePlayedRecords[i].progress,
            };
          }

          setUserInfo(userInfo);
          setUserPlaylists(playlists);
          setUserPlayedRecord(record);
          setUserSubscription(subscriptions);
        }
      }
    }
    //getUser();
    /* 
      在這邊把會員的訂閱等資訊放入 state 中
      拿到的資料可以用 destructure 寫成下面這樣
      {playlists, subscription, playedRecord, ...userInfo}
      再分別填入 state 中。
      之後要修改把新的東西放進 setState() 中
    */
  }, []);

  const AlertMessageContextValue = {
    Alert,
    setAlert,
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
            {/* 如果要使用 Context 請用 hooks 裡面的 customhook，因為之後如果要加一些身份驗證之類的會直接加在 hook 中 */}
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
          </CurrentEpisodeContext.Provider>
        </AlertMessageContext.Provider>
      </UserContext.Provider>
    </PageStatusContext.Provider>
  );
}

export default App;
