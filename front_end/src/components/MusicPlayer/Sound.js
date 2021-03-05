import styled from "styled-components";
import { useState, useEffect, memo } from "react";
import Icon from "../Images";
import { Slider, ProgressCurrent, ProgressBar } from "./Progress";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XXL,
} from "../../constants/breakpoints";

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

const SoundSlider = styled(Slider)`
  width: 100%;
`;
const SoundBarCurrent = styled(ProgressCurrent)``;
const SoundBar = styled(ProgressBar)``;
const SoundIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

const MuteControl = styled(SoundOnControl)``;

function SoundControl({ audioRef }) {
  const [isMute, setIsMute] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [SoundBarWidth, setSoundBarWidth] = useState(50);

  const handleVolume = (e) => {
    // 設定音量
    const currentVolume = e.target.value / 100;
    setVolume(currentVolume);
    audioRef.current.volume = currentVolume;

    // 設定進度條寬度
    setSoundBarWidth(currentVolume * 100);
  };

  const handleSoundIcon = () => {
    setIsMute(!isMute);
  };

  useEffect(() => {
    audioRef.current.volume = volume;

    if (isMute) {
      audioRef.current.volume = 0;
    }

    if (!isMute) {
      audioRef.current.volume = volume;
    }
  }, [isMute, audioRef, volume]);

  return (
    <Sound>
      <SoundSlider>
        <SoundBarCurrent
          style={{
            width: `${SoundBarWidth}%`,
          }}
        />
        <SoundBar type="range" onChange={handleVolume} />
      </SoundSlider>
      <SoundIcon onClick={handleSoundIcon}>
        {isMute ? (
          <MuteControl>
            <Icon.Mute />
          </MuteControl>
        ) : (
          <SoundOnControl>
            <Icon.SoundOn />
          </SoundOnControl>
        )}
      </SoundIcon>
    </Sound>
  );
}

const MemoSound = memo(SoundControl);
export default MemoSound;
