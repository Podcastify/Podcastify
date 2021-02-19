import styled from "styled-components";
import Icon from "../Images";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XXL,
} from "../../constants/breakpoints";

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

const PauseControl = styled(PlayControl)``;
const NextControl = styled(PrevControl)`
  margin-right: 30px;
`;

export default function PlayerControl({ isPlaying, setIsPlaying }) {
  const handlePlayPauseBtn = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Control>
      <PrevControl>
        <Icon.PreviousBtn />
      </PrevControl>
      <PlayPauseControl onClick={handlePlayPauseBtn}>
        {isPlaying ? (
          <PauseControl>
            <Icon.PauseBtn />
          </PauseControl>
        ) : (
          <PlayControl>
            <Icon.PlayBtn />
          </PlayControl>
        )}
      </PlayPauseControl>
      <NextControl>
        <Icon.NextBtn />
      </NextControl>
    </Control>
  );
}
