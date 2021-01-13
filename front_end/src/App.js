import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    primary_color: "#ffffff",
    primary_color_grey: "darkgray",
    primary_color_orange: "#e9502e",
    hover_color: "#8fe2ff",
    click_color: "#0079f2",
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <MusicPlayer />
    </ThemeProvider>
  );
}

export default App;
