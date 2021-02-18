import React, { useState } from "react";
import Images from "./Images";
import styled from "styled-components";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";

const ErrorContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: 35vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333333;
  border-radius: 30px;
  z-index: 10;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;

  ${MEDIA_QUERY_XL} {
    height: 38vh;
  }

  ${MEDIA_QUERY_LG} {
    height: 36vh;
  }

  ${MEDIA_QUERY_MD} {
    height: 30vh;
  }

  ${MEDIA_QUERY_SM} {
    height: 26vh;
    padding: 0 5px;
  }

  ${MEDIA_QUERY_XS} {
    height: 30vh;
    width: 60vw;
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
      width: 68px;
      height: 68px;
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
  font-size: 30px;
  line-height: 2;
  letter-spacing: 2px;

  ${MEDIA_QUERY_XL} {
    font-size: 28px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 25px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 23px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 18px;
    margin-top: 15px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 18px;
    margin-top: 15px;
  }
`;

const FirstLine = styled.div``;
const SecondLine = styled.div``;

export default function AlertMessage() {
  const [showAlert, setShowAlert] = useState(true);

  const handleClosedButton = () => {
    setShowAlert(false);
  };

  return (
    showAlert && (
      <ErrorContainer>
        <CloseBtnControl onClick={handleClosedButton}>
          <Images.Error />
        </CloseBtnControl>
        <ErrorBlock>
          <ErrorControl>
            <Images.Error />
          </ErrorControl>
          <FirstLine>連線錯誤</FirstLine>
          <SecondLine>請稍後重新再試一次</SecondLine>
        </ErrorBlock>
      </ErrorContainer>
    )
  );
}
