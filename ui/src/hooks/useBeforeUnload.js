import { useEffect } from "react";
import { addRecord } from "../utils";

export default function useBeforeUnload(audio, currentEpisodeId) {
  useEffect(() => {
    const handleBeforeunload = (e) => {
      // 如果目前沒有播放內容
      if (!currentEpisodeId) return;

      e.preventDefault();
      addRecord(audio, currentEpisodeId);
    };

    window.addEventListener("beforeunload", handleBeforeunload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeunload);
    };
  }, [audio, currentEpisodeId]);
}
