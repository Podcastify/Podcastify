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
const Source = styled.source``;

const Progress = styled.div`
  width: calc(100% / 12 * 5);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA_QUERY_XL} {
    padding: 0 10px;
  }

  ${MEDIA_QUERY_LG} {
    padding: 0 10px;
  }

  ${MEDIA_QUERY_MD} {
    padding: 0 10px;
    width: calc(100% / 12 * 4);
  }

  ${MEDIA_QUERY_SM} {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    width: calc(100% / 12 * 11.3);
  }

  ${MEDIA_QUERY_XS} {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    width: calc(100% / 12 * 11.3);
  }
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

  ${MEDIA_QUERY_LG} {
    margin: 2px 10px;
  }

  ${MEDIA_QUERY_SM} {
    height: 5px;
    margin: 0;
  }

  ${MEDIA_QUERY_XS} {
    height: 5px;
    margin: 0;
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
    display: none;
  }

  ${MEDIA_QUERY_SM} {
    display: none;
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

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${MEDIA_QUERY_SM} {
    margin-top: 15px;
  }

  ${MEDIA_QUERY_XS} {
    margin-top: 15px;
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

const PauseControl = styled(PlayControl)`
  display: none;
`;

const NextControl = styled(PrevControl)`
  margin-right: 30px;
`;

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
    display: none;
  }

  ${MEDIA_QUERY_MD} {
    display: none;
  }

  ${MEDIA_QUERY_LG} {
    margin: 0px 45px 0px 0px;
    padding: 0;
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
