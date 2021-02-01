import { ThemeProvider, createGlobalStyle } from "styled-components";
import Playlist from "./pages/Playlist";
// import Channel from "./pages/Channel";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import HomePage from "./pages/HomePage";
// import SearchPage from "./pages/SearchPage";
// import MyLoveChannelPage from "./pages/MyLoveChannelPage";

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Playlist />
      {/* <HomePage /> */}
      {/* <Login /> */}
      {/* <SearchPage /> */}
      {/* <MyLoveChannelPage /> */}
    </ThemeProvider>
  );
}

export default App;
