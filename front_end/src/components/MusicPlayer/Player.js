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
import Control from "./PlayerControl";
import Sound from "./Sound";
import useBeforeUnload from "../../hooks/useBeforeUnload";
import useMusicPlayer from "../../hooks/useMusicPlayer";

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

const PlaylistControl = styled.div`
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

const Content = styled.div`
  width: calc(100% / 12 * 1.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${MEDIA_QUERY_XXL} {
    width: calc(100% / 12 * 1.8);
  }

  ${MEDIA_QUERY_MD} {
    width: calc(100% / 12 * 2.5);
    line-height: 1.2;
  }

  ${MEDIA_QUERY_SM} {
    width: calc(100% / 12 * 5);
    margin: 18px 40px 0 0;
    line-height: 1.2;
  }

  ${MEDIA_QUERY_XS} {
    width: calc(100% / 12 * 4.5);
    margin: 18px 40px 0 0;
    line-height: 1.2;
  }
`;

const EpisodeName = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.white};
  font-size: 15px;
  margin-bottom: 5px;

  ${MEDIA_QUERY_SM} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_XL} {
    font-size: 20px;
  }

  ${MEDIA_QUERY_XXL} {
    font-size: 25px;
  }
`;

const ChannelName = styled(EpisodeName)`
  color: ${(props) => props.theme.white_opacity};
  margin: 0;
`;

export default function MusicPlayer() {
  const src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  const {
    audioEl,
    getCurrentTime,
    onLoadData,
    percentage,
    onChange,
    duration,
    currentTime,
    currentEpisode,
    isPlaying,
    setIsPlaying,
  } = useMusicPlayer();
  useBeforeUnload(audioEl, currentEpisode);

  return (
    <Container>
      <Player>
        <PlaylistControl>
          <Icon.PlaylistBtn />
        </PlaylistControl>
        <Audio
          src={src}
          type="audio/mpeg"
          ref={audioEl}
          onTimeUpdate={getCurrentTime}
          onLoadedData={onLoadData}
          preload="auto"
        />
        <Progress
          percentage={percentage}
          onChange={onChange}
          duration={duration}
          currentTime={currentTime}
        />
        {currentEpisode.src && (
          <Content>
            <EpisodeName>{currentEpisode.title}</EpisodeName>
            <ChannelName>{currentEpisode.channelTitle}</ChannelName>
          </Content>
        )}
        <Control
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentEpisode={currentEpisode}
        />
        <Sound audioEl={audioEl} />
      </Player>
    </Container>
  );
}
