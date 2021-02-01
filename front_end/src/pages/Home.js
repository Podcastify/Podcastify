import InfoCard from "../components/InfoCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MusicPlayer from "../components/MusicPlayer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <InfoCard />
      <MusicPlayer />
    </>
  );
}
