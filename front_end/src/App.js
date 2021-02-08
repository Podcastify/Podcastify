import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import Playlist from "./pages/Playlist";
import Channel from "./pages/Channel";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Subscription from "./pages/Subscription";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext, PageStatusContext } from "./context/context";
import GlobalStyle from "./constants/globalStyle";
import { theme } from "./constants/theme";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [userSubscription, setUserSubscription] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [userPlayedRecord, setUserPlayedRecord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    /* 
      在這邊把會員的訂閱等資訊放入 state 中
      拿到的資料可以用 destructure 寫成下面這樣
      {playlists, subscription, playedRecord, ...userInfo}
      再分別填入 state 中。
      之後要修改把新的東西放進 setState() 中
    */
    console.log(userInfo)
  }, [userInfo]);

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
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/mysubscription">
                <Subscription />
              </Route>
              <Route path="/myplaylist">
                <Playlist />
              </Route>
                <Route path="/channel">
                <Channel />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </UserContext.Provider>
    </PageStatusContext.Provider>
  );
}

export default App;
