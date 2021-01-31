import styled from "styled-components";
import Icon from "./Images";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
} from "../constants/breakpoints";

const Container = styled.div`
  // 以下為新增，MusicPlayer 固定在下方，並加上背景
  background-color: rgba(62, 58, 57, 1);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 3;
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 15px 5px;
  border-radius: 50px;
  height: 12vh;
  border: solid 3px ${(props) => props.theme.white_opacity};

  ${MEDIA_QUERY_LG} {
    margin: 10px 5px;
    height: 13vh;
  }

  ${MEDIA_QUERY_XXL} {
    margin: 24px 5px;
  }
`;

const PlaylistControl = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px 0px 20px;
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
    width: 15px;
    height: 15px;
  }

  ${MEDIA_QUERY_SM} {
    margin: 0px 10px 0px 25px;

    svg {
      width: 18px;
      height: 18px;
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

  ${MEDIA_QUERY_XXL} {
    margin: 0px 10px 0px 58px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const Audio = styled.audio``;
const Source = styled.source``;

const Context = styled.div`
  width: calc(100% / 12 * 1.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${MEDIA_QUERY_XXL} {
    width: calc(100% / 12 * 1.8);
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

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrevControl = styled.div`
  svg {
    width: 12px;
    height: 12px;
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
      width: 15px;
      height: 15px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 17px;
      height: 17px;
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
  margin: 0 3px;
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
      width: 55px;
      height: 55px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 75px;
      height: 75px;
    }
  }

  ${MEDIA_QUERY_XXL} {
    svg {
      width: 90px;
      height: 90px;
    }
  }
`;

const PauseControl = styled(PlayControl)`
  display: none;
`;

const NextControl = styled(PrevControl)``;
const Progress = styled.div`
  width: calc(100% / 12 * 5);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProgressBar = styled.div`
  height: 7px;
  margin: 5px 10px;
  position: relative;
  background-color: ${(props) => props.theme.white_opacity};
  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }

  ${MEDIA_QUERY_XXL} {
    height: 9px;
  }
`;

const ProgressCurrent = styled.div`
  background-color: ${(props) => props.theme.orange};
  position: absolute;
  height: 7.5px;
  width: 20px;
  left: 0%;
  top: 0%;
  border-radius: 50px;
  z-index: 3;

  ${MEDIA_QUERY_XXL} {
    height: 9.5px;
  }
`;

const ProgressBarCircle = styled.div`
  position: absolute;
  border: 3px solid ${(props) => props.theme.white};
  border-radius: 50%;
  padding: 2px;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.orange};
  z-index: 3;

  ${MEDIA_QUERY_XXL} {
    padding: 4px;
  }
`;

const Timing = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 2px;
  color: ${(props) => props.theme.white_opacity};

  ${MEDIA_QUERY_XS} {
    font-size: 10px;
    margin-top: 2px;
  }

  ${MEDIA_QUERY_SM} {
    margin-top: 3px;
  }

  ${MEDIA_QUERY_MD} {
    margin-top: 5px;
  }

  ${MEDIA_QUERY_LG} {
    margin-top: 6px;
  }

  ${MEDIA_QUERY_XXL} {
    font-size: 18px;
    margin-top: 7px;
  }
`;

const StartTime = styled.time``;
const DurationTime = styled.time``;

const Sound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 70px 0px 0px;
  padding: 10px 5px;
  width: calc(100% / 12 * 1.2);

  ${MEDIA_QUERY_XS} {
    display: none;
  }

  ${MEDIA_QUERY_SM} {
    margin: 0px 20px 0px 0px;
  }

  ${MEDIA_QUERY_MD} {
    margin: 0px 30px 0px 0px;
  }

  ${MEDIA_QUERY_LG} {
    margin: 0px 45px 0px 0px;
  }
`;

const SoundBar = styled(ProgressBar)`
  width: 100%;
`;
const SoundBarCurrent = styled(ProgressCurrent)``;
const SoundBarCircle = styled(ProgressBarCircle)``;
const SoundIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SoundOnControl = styled.div`
  height: 12px;
  margin: 2px;

  svg {
    width: 18px;
    height: 18px;
  }

  ${MEDIA_QUERY_SM} {
    margin: 4px;
  }

  ${MEDIA_QUERY_MD} {
    margin: 5px;
  }

  ${MEDIA_QUERY_LG} {
    margin: 6px;
  }

  ${MEDIA_QUERY_XXL} {
    margin: 7px;
  }
`;

const MuteControl = styled(SoundOnControl)`
  display: none;
`;

export default function MusicPlayer() {
  const src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  return (
    <Container>
      <Player>
        <PlaylistControl>
          <Icon.PlaylistBtn />
        </PlaylistControl>
        <Audio>
          <Source src={src} type="audio/mp3" />
        </Audio>
        <Context>
          <EpisodeName>S2 EP35//咖啡廳，你你你你你你你你</EpisodeName>
          <ChannelName>
            喂！今天聊什麼？Hey!喂！今天聊什麼？Hey!喂！今天聊什麼？Hey!喂！今天聊什麼？Hey!
          </ChannelName>
        </Context>
        <Control>
          <PrevControl>
            <Icon.PreviousBtn />
          </PrevControl>
          <PlayPauseControl>
            <PlayControl>
              <Icon.PlayBtn />
            </PlayControl>
            <PauseControl>
              <Icon.PauseBtn />
            </PauseControl>
          </PlayPauseControl>
          <NextControl>
            <Icon.NextBtn />
          </NextControl>
        </Control>
        <Progress>
          <ProgressBar>
            <ProgressCurrent />
            <ProgressBarCircle />
          </ProgressBar>
          <Timing>
            <StartTime>00:00</StartTime>
            <DurationTime>07:01</DurationTime>
          </Timing>
        </Progress>
        <Sound>
          <SoundBar>
            <SoundBarCurrent />
            <SoundBarCircle />
          </SoundBar>
          <SoundIcon>
            <SoundOnControl>
              <Icon.SoundOn />
            </SoundOnControl>
            <MuteControl>
              <Icon.Mute />
            </MuteControl>
          </SoundIcon>
        </Sound>
      </Player>
    </Container>
  );
}
