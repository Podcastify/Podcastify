import styled from "styled-components";
import Icon from "../Images";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
} from "../../constants/breakpoints";
import Progress from "./Progress";
import Content from "./Content";
import Control from "./PlayerControl";
import Sound from "./Sound";
import AlertMessage from "../AlertMessage";
import useBeforeUnload from "../../hooks/useBeforeUnload";
import useMusicPlayer from "../../hooks/useMusicPlayer";
import useCurrentEpisode from "../../hooks/useCurrentEpisode";
import useAlertMessage from "../../hooks/useAlertMessage";
import useUser from "../../hooks/useUser";
import { Link, useLocation } from "react-router-dom";
import { memo } from "react";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 3;
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 9vh;
  margin: 15px 5px;
  border-radius: 50px;
  border: solid 3px ${(props) => props.theme.white_opacity};

  ${MEDIA_QUERY_XS} {
    border-radius: 0;
    border: none;
    margin: 15px 15px 0px 15px;
    align-items: center;
    height: 14vh;
    width: fill-available;
  }

  ${MEDIA_QUERY_SM} {
    border-radius: 0;
    border: none;
    margin: 15px 15px 0px 15px;
    align-items: center;
    height: 14vh;
    width: fill-available;
  }

  ${MEDIA_QUERY_LG} {
    margin: 10px 5px;
    height: 13vh;
  }

  ${MEDIA_QUERY_XL} {
    margin: 20px 5px;
    height: 10vh;
  }

  ${MEDIA_QUERY_XXL} {
    margin: 24px 5px;
    height: 10vh;
  }
`;

const PlaylistControl = styled(Link)`
  display: flex;
  align-items: center;
  margin: 18px 20px 0 0;
  cursor: pointer;

  &:hover {
    path {
      fill: ${(props) => props.theme.white_opacity};
    }
  }

  &:active {
    path {
      fill: ${(props) => props.theme.click_color};
    }
  }

  & path {
    fill: ${(props) => props.theme.white};
  }

  svg {
    width: 30px;
    height: 35px;
  }

  ${MEDIA_QUERY_SM} {
    margin: 0 24px 0 0;

    svg {
      width: 30px;
      height: 35px;
    }
  }

  ${MEDIA_QUERY_MD} {
    margin: 0px 10px 0px 30px;

    svg {
      width: 23px;
      height: 23px;
    }
  }

  ${MEDIA_QUERY_LG} {
    margin: 0px 10px 0px 40px;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  ${MEDIA_QUERY_XL} {
    margin: 0px 10px 0px 50px;

    svg {
      width: 35px;
      height: 35px;
    }
  }

  ${MEDIA_QUERY_XXL} {
    margin: 0px 10px 0px 58px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const Audio = styled.audio``;

function PlaylistBtn() {
  const { userInfo } = useUser();

  return (
    <>
      {userInfo ? (
        <PlaylistControl to="/myplaylist">
          <Icon.PlaylistBtn />
        </PlaylistControl>
      ) : (
        <PlaylistControl to="/">
          <Icon.PlaylistBtn />
        </PlaylistControl>
      )}
    </>
  );
}

const MemoPlaylistBtn = memo(PlaylistBtn);

export default function MusicPlayer() {
  const { currentEpisode } = useCurrentEpisode();
  const { alert, alertText } = useAlertMessage();
  const {
    audioRef,
    getCurrentTime,
    onLoadData,
    percentage,
    onChange,
    duration,
    currentTime,
    handleSong,
    handleEnd,
  } = useMusicPlayer();

  useBeforeUnload(audioRef, currentEpisode.id);

  // 如果在註冊頁面或是登入頁面不顯示
  const location = useLocation();
  if (location.pathname === "/register" || location.pathname === "/login") {
    return null;
  }

  return (
    <>
      {alert && <AlertMessage text={alertText} />}
      <Container>
        <Player>
          <MemoPlaylistBtn />
          <Audio
            src={currentEpisode.src}
            type="audio/mpeg"
            ref={audioRef}
            onTimeUpdate={getCurrentTime}
            onLoadedMetadata={onLoadData}
            preload="auto"
            onEnded={handleEnd}
          />
          <Progress
            percentage={percentage}
            onChange={onChange}
            duration={duration}
            currentTime={currentTime}
          />
          {currentEpisode.src && <Content currentEpisode={currentEpisode} />}
          <Control audioRef={audioRef} handleSong={handleSong} />
          <Sound audioRef={audioRef} />
        </Player>
      </Container>
    </>
  );
}
