import styled from "styled-components";
import Icon from "../Images";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XXL,
} from "../../constants/breakpoints";
import useUser from "../../hooks/useUser";
import useCurrentEpisode from "../../hooks/useCurrentEpisode";
import { useEffect, memo } from "react";
import useAlertMessage from "../../hooks/useAlertMessage";

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${MEDIA_QUERY_SM} {
    margin-top: 15px;
    width: 40%;
  }

  ${MEDIA_QUERY_XS} {
    margin-top: 15px;
    width: 40%;
  }
`;

const PrevControl = styled.div`
  svg {
    width: 18px;
    height: 14px;
  }

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  & rect {
    :active {
      fill: #da937a;
    }
  }

  ${MEDIA_QUERY_SM} {
    svg {
      width: 20px;
      height: 16px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 22px;
      height: 18px;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 19px;
      height: 19px;
    }
  }

  ${MEDIA_QUERY_XXL} {
    svg {
      width: 21px;
      height: 21px;
    }
  }
`;

const PlayPauseControl = styled.div`
  ${MEDIA_QUERY_MD} {
    margin: 0 8px;
  }

  ${MEDIA_QUERY_SM} {
    margin: 0 12px;
  }

  ${MEDIA_QUERY_XS} {
    margin: 0 12px;
  }
`;

const PlayControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  & rect {
    :active {
      fill: #da937a;
    }
  }

  svg {
    width: 60px;
    height: 60px;
  }

  ${MEDIA_QUERY_XS} {
    svg {
      width: 53px;
      height: 53px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 75px;
      height: 75px;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 57px;
      height: 57px;
    }
  }

  ${MEDIA_QUERY_XXL} {
    svg {
      width: 90px;
      height: 90px;
    }
  }
`;

const PauseControl = styled(PlayControl)``;
const NextControl = styled(PrevControl)`
  margin-right: 30px;
`;

function PlayerControl({ handleSong, audioRef }) {
  const { userInfo } = useUser();
  const { currentEpisode, setCurrentEpisode } = useCurrentEpisode();
  const { setAlert, setAlertText } = useAlertMessage();

  const handlePlayPauseBtn = () => {
    // 如果非會員
    if (!userInfo) {
      setAlertText("登入後即可播放");
      setAlert(true);
      return;
    }

    // 如果沒有播放內容
    if (!currentEpisode.id) return;

    const { playing, ...rest } = currentEpisode;
    setCurrentEpisode({
      playing: !playing,
      ...rest,
    });
  };

  useEffect(() => {
    if (currentEpisode.playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, currentEpisode]);

  return (
    <Control>
      <PrevControl onClick={() => handleSong("last")}>
        <Icon.PreviousBtn />
      </PrevControl>
      <PlayPauseControl onClick={handlePlayPauseBtn}>
        {currentEpisode.playing ? (
          <PauseControl>
            <Icon.PauseBtn />
          </PauseControl>
        ) : (
          <PlayControl>
            <Icon.PlayBtn />
          </PlayControl>
        )}
      </PlayPauseControl>
      <NextControl onClick={() => handleSong("next")}>
        <Icon.NextBtn />
      </NextControl>
    </Control>
  );
}

const MemoControl = memo(PlayerControl);
export default MemoControl;
