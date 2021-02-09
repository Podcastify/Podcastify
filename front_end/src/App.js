import { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Playlist from "./pages/Playlist";
import Channel from "./pages/Channel";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Subscription from "./pages/Subscription";
// import UserManagement from "./pages/usermanagement";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext, PageStatusContext } from "./context/context";
import { getToken } from "./utils";
import { getMyInfo } from "./WebAPI/me";

const GlobalStyle = createGlobalStyle`
  body {
  }

  * {
    box-sizing: border-box;
    font-family: Helvetica;
  }

  body::after {
    content: "";
    background: #3E3A39;
    mix-blend-mode: screen;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -99;   
  }
  body::before {
    content: "";
    background: transparent linear-gradient(180deg, #F15A24AD 3%, #DC52219E 8%, #8E351566 28%, #511E0C3B 46%, #240E051A 63%, #0A040108 77%, #00000000 87%) 0% 0% no-repeat padding-box;
    mix-blend-mode: screen;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -98;   
  }
`;

function App() {
  const theme = {
    white: "#ffffff",
    white_opacity: "rgba(255, 255, 255, 0.5)",
    white_opacity_10: "rgba(255, 255, 255, 0.1)",
    grey_opacity: "rgba(157, 157, 157, 0.5)",
    orange: "#e9502e",
    orange_opacity: "rgba(233, 80, 46, 0.5)",
    hover_color: "#8fe2ff",
    click_color: "#0079f2",
  };
  const [userInfo, setUserInfo] = useState(null);
  const [userSubscription, setUserSubscription] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [userPlayedRecord, setUserPlayedRecord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (getToken()) {
      getMyInfo().then((response) => {
        if (response.ok) {
          setUserInfo(response.data);
        }
      });
    }
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
              {/* <Route path="/usermanagement">
                <UserManagement />
              </Route> */}
            </Switch>
          </Router>
        </ThemeProvider>
      </UserContext.Provider>
    </PageStatusContext.Provider>
  );
}

export default App;
