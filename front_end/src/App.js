import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MyLoveChannelPage from "./pages/MyLoveChannelPage";
import { UserContext } from "./context/context";

const GlobalStyle = createGlobalStyle`
  body {
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
    primary_color: "#ffffff",
    primary_color_grey: "darkgray",
    primary_color_orange: "#e9502e",
    hover_color: "#8fe2ff",
    click_color: "#0079f2",
  };
  const [userInfo, setUserInfo] = useState(null);
  const [userSubscription, setUserSubscription] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState(null);
  const [userPlayedRecord, setUserPlayedRecord] = useState(null);

  useEffect(() => {
    /* 
      在這邊把會員的訂閱等資訊放入 state 中
      拿到的資料可以用 destructure 寫成下面這樣
      {playlists, subscription, playedRecord, ...userInfo}
      再分別填入 state 中。
      之後要修改把新的東西放進 setState() 中
    */
  }, [])

  const userContextValue = {
    userInfo,
    userSubscription,
    userPlaylists,
    userPlayedRecord,
    setUserInfo,
    setUserSubscription,
    setUserPlaylists,
    setUserPlayedRecord
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContext.Provider value={userContextValue}>
        {/* <Login /> */}
        {/* <HomePage /> */}
        {/* <SearchPage /> */}
        <MyLoveChannelPage />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
