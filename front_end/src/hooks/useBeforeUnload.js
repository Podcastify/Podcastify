import { useEffect } from "react";
import { addRecords } from "../WebAPI/me";

export default function useBeforeUnload(audio, currentEpisode) {
  useEffect(() => {
    const handleBeforeunload = (e) => {
      // 如果目前沒有播放內容
      if (!currentEpisode.id) return;

      e.preventDefault();
      const currentTime = audio.current.currentTime.toFixed(2);
      addRecords(currentEpisode.id, currentTime);
    };

    window.addEventListener("beforeunload", handleBeforeunload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeunload);
    };
  }, [audio, currentEpisode]);
}
