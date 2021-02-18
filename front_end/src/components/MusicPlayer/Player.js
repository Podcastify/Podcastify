import { useRef, useState, useEffect } from "react";
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

const Container = styled.div`
  // 以下為新增，MusicPlayer 固定在下方，並加上背景
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
    display: flex;
    justify-content: flex-start;
  }

  ${MEDIA_QUERY_SM} {
    border-radius: 0;
    border: none;
    margin: 15px 15px 0px 15px;
    align-items: center;
    height: 14vh;
    width: fill-available;
    display: flex;
    justify-content: flex-start;
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

const Context = styled.div`
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
    font-size: 16px;
    line-height: 1.2;
  }

  ${MEDIA_QUERY_SM} {
    width: calc(100% / 12 * 5);
    margin: 18px 40px 0 0;
    font-size: 15px;
    line-height: 1.2;
  }

  ${MEDIA_QUERY_XS} {
    width: calc(100% / 12 * 4.5);
    margin: 18px 40px 0 0;
    font-size: 15px;
    line-height: 1.2;
  }
`;

const EpisodeName = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.white};
  font-size: 14px;
  margin-bottom: 5px;

  ${MEDIA_QUERY_XS} {
    font-size: 10px;
  }

  ${MEDIA_QUERY_XXL} {
    font-size: 26px;
  }
`;

const ChannelName = styled(EpisodeName)`
  color: ${(props) => props.theme.white_opacity};
  margin: 0;
`;

export default function MusicPlayer() {
  const src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

  const onChange = (e) => {
    const audio = audioEl.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const getCurrentTime = (e) => {
    const Target = e.target;
    const time = Target.currentTime;
    const percent = ((time / Target.duration) * 100).toFixed(2);

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  const onLoadData = () => {
    setDuration(audioEl.current.duration.toFixed(2));
  };

  return (
    <Container>
      <Player>
        <PlaylistControl>
          <Icon.PlaylistBtn />
        </PlaylistControl>
        <Audio
          src={src}
          type="audio/mp3"
          ref={audioEl}
          onTimeUpdate={getCurrentTime}
          onLoadedData={onLoadData}
        />
        <Progress
          percentage={percentage}
          onChange={onChange}
          duration={duration}
          currentTime={currentTime}
        />
        <Context>
          <EpisodeName>S2 EP35//咖啡廳，你你你你你你你你</EpisodeName>
          <ChannelName>
            喂！今天聊什麼？Hey!喂！今天聊什麼？Hey!喂！今天聊什麼？Hey!喂！今天聊什麼？Hey!
          </ChannelName>
        </Context>
        <Control isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <Sound />
      </Player>
    </Container>
  );
}
