import styled from "styled-components";
import { useState } from "react";
import Icon from "../Images";
import { ProgressBar, ProgressCurrent, ProgressBarCircle } from "./Progress";
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

const SoundBar = styled(ProgressBar)`
  width: 100%;
`;
const SoundBarCurrent = styled(ProgressCurrent)``;
const SoundBarCircle = styled(ProgressBarCircle)``;
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

export default function SoundControl() {
  const [isMute, setIsMute] = useState(false);
  const handleSoundIconChange = () => {
    setIsMute(!isMute);
  };

  return (
    <Sound>
      {/* <SoundBar>
        <SoundBarCurrent />
        <SoundBarCircle />
      </SoundBar> */}
      <SoundIcon onClick={handleSoundIconChange}>
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
