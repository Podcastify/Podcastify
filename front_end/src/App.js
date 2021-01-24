import { useEffect, useContext, useState, createContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MyLoveChannelPage from "./pages/MyLoveChannelPage";
import { UserContext } from './context/context';

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
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/myFav">
              <MyLoveChannelPage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
