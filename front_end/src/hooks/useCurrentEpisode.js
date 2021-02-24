import { useContext } from "react";
import { CurrentEpisodeContext } from "../context/context";

export default function useCurrentEpisode() {
  const { currentEpisode, setCurrentEpisode } = useContext(
    CurrentEpisodeContext
  );
  return {
    currentEpisode,
    setCurrentEpisode,
  };
}
