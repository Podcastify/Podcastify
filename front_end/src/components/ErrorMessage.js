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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(55, 55, 55, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333333;
  border-radius: 30px;

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

const ErrorControl = styled.div`
  cursor: pointer;
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

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.white};
  font-size: 30px;
  line-height: 2;
  letter-spacing: 2px;
  margin-top: 50px;

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

export default function ErrorMessage() {
  return (
    <ErrorContainer>
      <ErrorWrapper>
        <ErrorControl>
          <Images.Error />
        </ErrorControl>
        <Text>
          <FirstLine>查無資料</FirstLine>
          <SecondLine>請再輸入其他關鍵字</SecondLine>
        </Text>
      </ErrorWrapper>
    </ErrorContainer>
  );
}
