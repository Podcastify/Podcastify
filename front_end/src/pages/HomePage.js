import InfoCard from "../components/InfoCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MusicPlayer from "../components/MusicPlayer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <InfoCard />
      <MusicPlayer />
    </>
  );
}
