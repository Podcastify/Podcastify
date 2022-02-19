import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as DeleteButton } from "../images/Delete_button.svg";
import Sidebar from "../components/Sidebar";
import { Main, Div } from "../components/Main";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import { deleteSubsciption } from "../WebAPI/me";
import usePageStatus from "../hooks/usePageStatus";
import useAlertMessage from "../hooks/useAlertMessage";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled(Main)`
  ${MEDIA_QUERY_SM} {
    left: unset;
    width: 90%;
    height: 74vh;
    padding-left: 0px;
  }

  ${MEDIA_QUERY_XS} {
    left: unset;
    width: 95%;
    height: 74vh;
    padding-left: 0px;
  }
`;

const ChannelContainer = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  height: fill-available;
  margin: 10px 40px;

  ${MEDIA_QUERY_XL} {
    width: 73%;
  }

  ${MEDIA_QUERY_LG} {
    width: 70%;
  }

  ${MEDIA_QUERY_MD} {
    width: 100%;
    margin: 0;
  }
`;

const ChannelWrapper = styled.div`
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
`;

const ChannelTitleBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${MEDIA_QUERY_XS} {
    justify-content: space-between;
  }
`;

const ChannelTitle = styled.h1`
  font-size: 42px;
  padding: 10px;
  line-height: 1.2;
  letter-spacing: normal;
  font-weight: bold;
  margin: 0;
  color: ${(props) => props.theme.white};

  ${MEDIA_QUERY_XL} {
    font-size: 36px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 30px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 28px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 19px;
    padding: 0;
  }
`;

const ChannelBtn = styled.div`
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 45px;
  border: 2px solid ${(props) => props.theme.white_opacity};
  color: ${(props) => props.theme.white};
  border-radius: 3px;
  margin-left: 25px;
  letter-spacing: normal;

  ${MEDIA_QUERY_XL} {
    width: 150px;
    height: 45px;
    font-size: 15px;
  }

  ${MEDIA_QUERY_XS} {
    width: 115px;
    height: 35px;
    font-size: 8px;
  }
`;

const DeletedChannelBtn = styled(ChannelBtn)`
  outline: none;
  border: hidden;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.click_color};
  border: 3px solid ${(props) => props.theme.click_color};
`;

const ChannelItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 30px 40px 30px;

  ${MEDIA_QUERY_MD} {
    margin: 40px 20px;
  }

  ${MEDIA_QUERY_SM} {
    justify-content: space-around;
  }

  ${MEDIA_QUERY_XS} {
    justify-content: space-around;
    margin: 10px 0;
  }
`;

const InfoCardItem = styled.div`
  width: 24vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  margin-bottom: 50px;

  ${MEDIA_QUERY_XL} {
    width: 26vh;
    margin-bottom: 40px;
  }

  ${MEDIA_QUERY_LG} {
    width: 24vh;
    margin-bottom: 30px;
  }

  ${MEDIA_QUERY_MD} {
    width: 22vh;
    margin-bottom: 20px;
  }

  ${MEDIA_QUERY_SM} {
    margin-bottom: 0;
  }

  ${MEDIA_QUERY_XS} {
    width: 18vh;
    height: 28vh;
    margin: 0 0 10px 0;
    padding: 0 10px;
  }
`;

const InfoCardPhoto = styled(Link)`
  position: relative;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      background: rgba(0, 0, 0, 0.2);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${MEDIA_QUERY_XS} {
      border-radius: 50%;
    }
  }
`;

const InfoCardTitle = styled(Link)`
  font-size: 32px;
  width: 100%;
  color: ${(props) => props.theme.white};
  margin: 20px 0 15px 0;
  font-weight: bold;
  letter-spacing: 0.6px;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${MEDIA_QUERY_XL} {
    font-size: 24px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 20px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 22px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 22px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 22px;
  }
`;

const DeleteIcon = styled.div`
  position: absolute;
  top: -25px;
  left: -25px;
  z-index: 10;

  ${MEDIA_QUERY_XL} {
    top: -13px;
    left: -13px;
  }

  ${MEDIA_QUERY_LG} {
    top: -12px;
    left: -12px;
  }

  ${MEDIA_QUERY_MD} {
    top: -15px;
    left: -15px;
  }

  ${MEDIA_QUERY_SM} {
    top: -10px;
    left: -10px;
  }

  ${MEDIA_QUERY_XS} {
    top: -22px;
    left: -22px;
  }

  svg {
    width: 50px;
    height: 50px;

    &:hover {
      cursor: pointer;
      rect {
        fill: ${(props) => props.theme.orange};
      }
    }

    ${MEDIA_QUERY_XL} {
      width: 40px;
      height: 40px;
    }

    ${MEDIA_QUERY_LG} {
      width: 38px;
      height: 38px;
    }

    ${MEDIA_QUERY_MD} {
      width: 30px;
      height: 30px;
    }

    ${MEDIA_QUERY_SM} {
      width: 28px;
      height: 28px;
    }

    ${MEDIA_QUERY_XS} {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: absolute;
      top: 25px;
      left: 25px;
    }
  }
`;

function PodcastList({ podcastInfo, showDeletedBtn }) {
  const { setAlert, setAlertText } = useAlertMessage();
  const { userSubscription, setUserSubscription } = useUser();
  const { isLoading, setIsLoading } = usePageStatus();

  const deletePodcast = async () => {
    if (isLoading) return;
    setIsLoading(true);

    let result;
    try {
      result = await deleteSubsciption(podcastInfo.id);
    } catch (err) {
      setIsLoading(false);
      setAlertText(String(err));
      setAlert(true);
      return;
    }

    if (!result.ok) {
      setIsLoading(false);
      setAlertText(result.errorMessage);
      setAlert(true);
      return;
    }

    const newSubscription = userSubscription.filter(
      (data) => data.id !== podcastInfo.id
    );

    setUserSubscription(newSubscription);
    setIsLoading(false);
  };

  const handleDeleteBtnClick = (e) => {
    e.preventDefault();
    deletePodcast();
  };

  return (
    <InfoCardItem>
      <InfoCardPhoto to={`/channel/${podcastInfo.id}`}>
        <DeleteIcon onClick={handleDeleteBtnClick}>
          {showDeletedBtn ? <DeleteButton /> : ""}
        </DeleteIcon>
        <img src={podcastInfo.image} alt={podcastInfo.title} />
      </InfoCardPhoto>
      <InfoCardTitle to={`/channel/${podcastInfo.id}`}>
        {podcastInfo.title}
      </InfoCardTitle>
    </InfoCardItem>
  );
}

export default function Subcription() {
  const { userInfo, userSubscription } = useUser();
  const [showDeletedBtn, setShowDeletedBtn] = useState(false);
  const { setAlert, setAlertText } = useAlertMessage();

  const handleShowDeletedBtn = (e) => {
    e.preventDefault();
    setShowDeletedBtn(!showDeletedBtn);
  };

  const handleBtnClick = () => {
    if (!userInfo) {
      setAlertText("請先登入");
      setAlert(true);
      return;
    }

    if (userSubscription.length === 0) {
      setAlertText("您目前沒有訂閱任何頻道");
      setAlert(true);
      return;
    }
  };

  return (
    <Container>
      <MainWrapper>
        <Div>
          <Sidebar />
          <ChannelContainer>
            <ChannelWrapper>
              <ChannelTitleBlock onClick={handleShowDeletedBtn}>
                <ChannelTitle># 訂閱中的頻道</ChannelTitle>
                {userSubscription.length > 0 && showDeletedBtn ? (
                  <DeletedChannelBtn>管理我的頻道</DeletedChannelBtn>
                ) : (
                  <ChannelBtn onClick={handleBtnClick}>管理我的頻道</ChannelBtn>
                )}
              </ChannelTitleBlock>

              <ChannelItemWrapper>
                {userSubscription.length > 0
                  ? userSubscription.map((podcastInfo) => (
                      <PodcastList
                        key={podcastInfo.id}
                        podcastInfo={podcastInfo}
                        showDeletedBtn={showDeletedBtn}
                      />
                    ))
                  : ""}
              </ChannelItemWrapper>
            </ChannelWrapper>
          </ChannelContainer>
        </Div>
      </MainWrapper>
    </Container>
  );
}
