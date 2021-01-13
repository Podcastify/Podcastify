import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import styled, { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    primary_color: "lightblue",
    primary_color_grey: "darkgray",
    primary_color_orange: "#e9502e",
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <MusicPlayer />
    </ThemeProvider>
  );
}

export default App;
