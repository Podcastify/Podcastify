import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Register from './pages/Register';

const GlobalStyle = createGlobalStyle`
  body {
    background: #3E3A39;
  }
  body::after {
    content: "";
    
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
    z-index: -99;   
  }
`

function App() {
  const theme = {
    primary_color: "#ffffff",
    primary_color_grey: "darkgray",
    primary_color_orange: "#e9502e",
    hover_color: "#8fe2ff",
    click_color: "#0079f2",
  };

  return (
    <div>
      <GlobalStyle />
      <Register />
    </div>
  );
}

export default App;
