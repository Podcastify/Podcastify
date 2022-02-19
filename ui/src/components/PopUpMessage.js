import Images from "./Images";
import styled from "styled-components";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import { BtnContainer } from "./ButtonGroup";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(55, 55, 55, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Container = styled.div`
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
  z-index: 10;
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

export const CloseBtnControl = styled.div`
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

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  font-size: 25px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  width: 100%;
  margin-top: 30px;

  ${MEDIA_QUERY_XL} {
    font-size: 20px;
    margin-top: 20px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 17px;
    margin-top: 20px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 17px;
    margin-top: 20px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 17px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 15px;
    margin-top: 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

const ConfirmBtn = styled(BtnContainer)`
  background-color: unset;
  width: 100%;
  border-radius: 10px;
  font-size: 25px;

  ${MEDIA_QUERY_XL} {
    font-size: 20px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 15px;
  }
`;

const CancelBtn = styled(ConfirmBtn)`
  margin-top: 15px;
`;

export default function PopUpMessage({
  text,
  button,
  setShowPopUp,
  setConfirmed,
  setConfirmedAddPlaylist,
}) {
  const handleClosedBtn = () => {
    setShowPopUp(false);
  };

  const handleConfirmDeleteBtn = () => {
    setConfirmed(true);
    setShowPopUp(false);
  };

  const handleCancelDeleteBtn = () => {
    setConfirmed(false);
    setShowPopUp(false);
  };

  const handleConfirmAddBtn = () => {
    setConfirmedAddPlaylist(true);
    setShowPopUp(false);
  };

  const handleCancelAddBtn = () => {
    setConfirmedAddPlaylist(false);
    setShowPopUp(false);
  };

  return (
    <Background>
      <Container>
        <CloseBtnControl onClick={handleClosedBtn}>
          <Images.Error />
        </CloseBtnControl>
        <TextWrapper>
          <div>{text}</div>
        </TextWrapper>
        {button === "deleteEpisode" && (
          <Buttons>
            <ConfirmBtn onClick={handleConfirmDeleteBtn}>確定</ConfirmBtn>
            <CancelBtn onClick={handleCancelDeleteBtn}>取消</CancelBtn>
          </Buttons>
        )}
        {button === "addPlaylist" && (
          <Buttons>
            <ConfirmBtn onClick={handleConfirmAddBtn}>確定</ConfirmBtn>
            <CancelBtn onClick={handleCancelAddBtn}>取消</CancelBtn>
          </Buttons>
        )}
      </Container>
    </Background>
  );
}
