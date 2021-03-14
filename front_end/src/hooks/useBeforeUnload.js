import { useEffect } from "react";
import { addRecord } from "../utils";

export default function useBeforeUnload(audio, currentEpisode) {
  useEffect(() => {
    const handleBeforeunload = (e) => {
      // 如果目前沒有播放內容
      if (!currentEpisode.id) return;

      e.preventDefault();
      addRecord(audio, currentEpisode);
    };

    window.addEventListener("beforeunload", handleBeforeunload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeunload);
    };
  }, [audio, currentEpisode]);
}
