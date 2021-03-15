import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
} from "../../constants/breakpoints";
import Loading from "../../components/Loading";
import usePageStatus from "../../hooks/usePageStatus";
import useUser from "../../hooks/useUser";

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
    width: 100%;
  }

  ${MEDIA_QUERY_XS} {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    width: 100%;
  }
`;

export const Slider = styled.div`
  position: relative;
  margin: 5px 10px;
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

  // 播放條背景
  &::before {
    content: "";
    background-color: ${(props) => props.theme.white_opacity};
    width: 100%;
    height: 7px;
    position: absolute;
    border-radius: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`;

// 目前播放進度
export const ProgressCurrent = styled.div`
  background-color: ${(props) => props.theme.orange};
  position: absolute;
  height: 7.5px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50px;
  z-index: 1;
  user-select: none;
  pointer-events: none;

  ${MEDIA_QUERY_XXL} {
    height: 9.5px;
  }
`;

export const ProgressBar = styled.input`
  height: 15px;
  appearance: none;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  background: none;
  border-radius: 50px;
  z-index: 3;

  // 控制圓桿
  &::-webkit-slider-thumb {
    border: 3px solid ${(props) => props.theme.white};
    border-radius: 50%;
    padding: 3px;
    width: 15px;
    height: 15px;
    appearance: none;
    background-color: ${(props) => props.theme.orange};
    z-index: 3;
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

export default function ProgressControl({
  percentage,
  onChange,
  duration,
  currentTime,
}) {
  const [position, setPosition] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const { isLoading, setIsLoading } = usePageStatus();
  const { userInfo } = useUser();
  const rangeRef = useRef();

  useEffect(() => {
    setIsLoading(true);

    // 如果非會員或沒有播放內容，不須有 loading 畫面
    if (!userInfo || !duration) {
      setIsLoading(false);
    }

    // 設定控制圓杆位置
    setPosition(percentage);

    // 設定進度條寬度
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const currentProgressBar = (rangeWidth / 100) * percentage;
    setProgressBarWidth(currentProgressBar);

    if (currentProgressBar === 0 || currentProgressBar) {
      setIsLoading(false);
    }
  }, [percentage, setIsLoading, userInfo, duration]);

  // 轉換秒數
  const secondsToStandardTime = (seconds) => {
    if (!seconds) return "00:00";

    // 取得小時
    let duration = seconds;
    let hours = Math.floor(duration / 3600);

    // 取得分鐘
    duration = duration % 3600;
    let mins = Math.floor(duration / 60);

    // 取得秒數
    duration = duration % 60;
    let secs = Math.floor(duration);

    if (secs < 10) {
      secs = `0${secs}`;
    }

    if (mins < 10) {
      mins = `0${mins}`;
    }

    if (hours > 0) {
      return `${hours}:${mins}:${secs}`;
    } else if (mins === 0) {
      return `00:${secs}`;
    } else {
      return `${mins}:${secs}`;
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <Progress>
        <Slider>
          <ProgressCurrent
            style={{
              width: `${progressBarWidth}px`,
            }}
          />
          <ProgressBar
            type="range"
            onChange={onChange}
            ref={rangeRef}
            value={position}
            step="0.01"
          />
        </Slider>
        <Timing>
          <StartTime>{secondsToStandardTime(currentTime)}</StartTime>
          <DurationTime>{secondsToStandardTime(duration)}</DurationTime>
        </Timing>
      </Progress>
    </>
  );
}
