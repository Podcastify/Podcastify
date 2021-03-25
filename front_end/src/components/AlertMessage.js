import React from "react";
import Images from "./Images";
import styled from "styled-components";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import useAlertMessage from "../hooks/useAlertMessage";

const ErrorContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.pop_up};
  border-radius: 20px;
  z-index: 15;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 40px;

  ${MEDIA_QUERY_XL} {
    width: 35vw;
  }

  ${MEDIA_QUERY_LG} {
    width: 35vw;
  }

  ${MEDIA_QUERY_MD} {
    width: 50vw;
  }

  ${MEDIA_QUERY_SM} {
    width: 80vw;
  }

  ${MEDIA_QUERY_XS} {
    width: 80vw;
  }
`;

const CloseBtnControl = styled.div`
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 18px;

  svg {
    width: 46px;
    height: 46px;
  }

  ${MEDIA_QUERY_XL} {
    svg {
      width: 36px;
      height: 36px;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 30px;
      height: 30px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 26px;
      height: 26px;
    }
  }

  ${MEDIA_QUERY_SM} {
    svg {
      width: 26px;
      height: 26px;
    }
  }

  ${MEDIA_QUERY_XS} {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const ErrorControl = styled.div`
  margin-bottom: 10px;
  svg {
    width: 84px;
    height: 84px;

    & circle {
      stroke: ${(props) => props.theme.orange};
    }

    & line {
      stroke: ${(props) => props.theme.orange};
    }
  }

  ${MEDIA_QUERY_XL} {
    svg {
      width: 78px;
      height: 78px;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 50px;
      height: 50px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 60px;
      height: 60px;
    }
  }

  ${MEDIA_QUERY_SM} {
    svg {
      width: 50px;
      height: 50px;
    }
  }

  ${MEDIA_QUERY_XS} {
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const ErrorBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.white};
  font-size: 32px;
  line-height: 1.5;
  letter-spacing: 2px;
  padding: 15px;

  ${MEDIA_QUERY_XL} {
    font-size: 24px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 22px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 22px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 22px;
    margin-top: 15px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 18px;
    margin-top: 15px;
  }
`;

export default function AlertMessage({ text }) {
  const { setAlert } = useAlertMessage();

  const handleClosedButton = () => {
    setAlert(false);
  };

  return (
    <ErrorContainer>
      <CloseBtnControl onClick={handleClosedButton}>
        <Images.Error />
      </CloseBtnControl>
      <ErrorBlock>
        <ErrorControl>
          <Images.Error />
        </ErrorControl>
        {!text ? (
          <>
            <div>連線錯誤</div>
            <div>請稍後重新再試一次</div>
          </>
        ) : (
          <>
            <div>{text}</div>
          </>
        )}
      </ErrorBlock>
    </ErrorContainer>
  );
}
