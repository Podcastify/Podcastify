import styled from "styled-components";
import Icon from "./Images";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "../constants/breakpoints";

const Container = styled.div`
  height: 100%;
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 10vh;
  margin: 15px 5px;
  border-radius: 50px;
  border: solid 3px ${(props) => props.theme.primary_color_grey};

  ${MEDIA_QUERY_MD} {
    margin: 19px 5px;
  }

  ${MEDIA_QUERY_LG} {
    margin: 24px 5px;
  }
`;

const PlaylistControl = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px 0px 20px;

  & path {
    fill: ${(props) => props.theme.primary_color};
  }

  svg {
    width: 15px;
    height: 15px;
  }

  ${MEDIA_QUERY_MD} {
    margin: 0px 10px 0px 25px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  ${MEDIA_QUERY_LG} {
    margin: 0px 10px 0px 30px;

    svg {
      width: 23px;
      height: 23px;
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

  ${MEDIA_QUERY_LG} {
    width: calc(100% / 12 * 1.8);
  }
`;

const EpisodeName = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.primary_color};
  font-size: 10px;
  margin-bottom: 5px;

  ${MEDIA_QUERY_MD} {
    font-size: 12px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 13px;
  }
`;

const ChannelName = styled(EpisodeName)`
  color: ${(props) => props.theme.primary_color_grey};
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

  ${MEDIA_QUERY_MD} {
    svg {
      width: 16px;
      height: 16px;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 18px;
      height: 18px;
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

  svg {
    width: 55px;
    height: 55px;
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 60px;
      height: 60px;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 70px;
      height: 70px;
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
  background-color: ${(props) => props.theme.primary_color_grey};
  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const ProgressCurrent = styled.div`
  background-color: ${(props) => props.theme.primary_color_orange};
  position: absolute;
  height: 7.5px;
  width: 20px;
  left: 0%;
  top: 0%;
  border-radius: 50px;
  z-index: 3;
`;

const ProgressBarCircle = styled.div`
  position: absolute;
  border: 3px solid ${(props) => props.theme.primary_color};
  border-radius: 50%;
  padding: 2px;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.primary_color_orange};
  z-index: 3;
`;

const Timing = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  font-family: Helvetica;
  color: ${(props) => props.theme.primary_color_grey};

  ${MEDIA_QUERY_MD} {
    font-size: 12px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 14px;
  }
`;

const StartTime = styled.div``;
const DurationTime = styled.div``;

const Sound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 15px 0px 0px;
  padding: 10px 5px;
  width: calc(100% / 12 * 1.2);

  ${MEDIA_QUERY_MD} {
    margin: 0px 20px 0px 0px;
  }

  ${MEDIA_QUERY_LG} {
    margin: 0px 25px 0px 0px;
  }
`;

const SoundBar = styled(ProgressBar)`
  width: 100%;
`;
const SoundBarCurrent = styled(ProgressCurrent)``;
const SoundBarCircle = styled(ProgressBarCircle)``;
const SoundIcon = styled.div``;

const SoundOnControl = styled.div`
  height: 12px;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 12px;
    height: 12px;
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
