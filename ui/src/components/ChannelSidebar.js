import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import {
  addSubsciption,
  getMySubsciption,
  deleteSubsciption,
} from "../WebAPI/me";
import { getAllPodcastsInfo } from "../WebAPI/listenAPI";
import { useParams } from "react-router-dom";
import PopUpMessage from "./PopUpMessage";
import useUser from "../hooks/useUser";
import useAlertMessage from "../hooks/useAlertMessage";

export const SidebarContainer = styled.aside`
  width: 22vw;
  height: 72vh;
  padding: 18px 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 28px;

  ${MEDIA_QUERY_XL} {
    height: 70vh;
  }

  ${MEDIA_QUERY_LG} {
    height: 69vh;
    padding: 14px 18px;
  }

  ${MEDIA_QUERY_MD} {
    width: 25%;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
    height: 300%;
    border: none;
    padding: 5px 0;
  }

  ${MEDIA_QUERY_XS} {
    width: 100%;
    height: 300%;
    border: none;
    padding: 5px 0;
    margin-bottom: 20px;
  }
`;

const InfoCardWrapper = styled.div`
  padding: 20px 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;

  ${MEDIA_QUERY_XL} {
    padding: 10px 0;
  }

  ${MEDIA_QUERY_LG} {
    padding: 10px 0;
  }

  ${MEDIA_QUERY_MD} {
    width: 100%;
    padding: 10px 0;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow-y: unset;
  }

  ${MEDIA_QUERY_XS} {
    padding: 0;
    overflow-y: unset;
  }
`;

const InfoCardPhoto = styled.div`
  margin: 20px 20px 10px 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoCardContent = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;

  ${MEDIA_QUERY_XS} {
    padding-left: 0;
  }
`;

const InfoCardBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;

  ${MEDIA_QUERY_SM} {
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  ${MEDIA_QUERY_XS} {
    margin: 23px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const InfoCardTitle = styled.h2`
  width: 100%;
  color: ${(props) => props.theme.white};
  margin: 20px 0px 40px 0px;
  font-weight: bold;
  font-size: 32px;
  line-height: 1.19;
  letter-spacing: 0.6px;
  text-decoration: none;
  width: 100%;
  word-break: break-word;

  ${MEDIA_QUERY_XL} {
    width: 80%;
    font-size: 24px;
    margin: 20px 0px 30px 0px;
  }

  ${MEDIA_QUERY_LG} {
    width: 80%;
    font-size: 20px;
    margin: 15px 0px 25px 0px;
  }

  ${MEDIA_QUERY_MD} {
    width: 80%;
    font-size: 22px;
    margin: 10px 0px 25px 0px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 22px;
    width: 180px;
    margin: 0;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 25px;
    width: 180px;
    margin: 0;
  }
`;

const UnsubscriptionBtn = styled.button`
  cursor: pointer;
  width: 130px;
  height: 60px;
  font-size: 25px;
  border: 2px solid ${(props) => props.theme.grey_opacity};
  color: ${(props) => props.theme.white};
  text-decoration: none;
  background: transparent;

  &:focus {
    outline: none;
  }

  ${MEDIA_QUERY_XL} {
    width: 120px;
    height: 50px;
    font-size: 20px;
  }

  ${MEDIA_QUERY_LG} {
    width: 90px;
    height: 45px;
    font-size: 17px;
  }

  ${MEDIA_QUERY_MD} {
    width: 90px;
    height: 50px;
    font-size: 17px;
  }

  ${MEDIA_QUERY_SM} {
    width: 80px;
    height: 34px;
    font-size: 15px;
  }

  ${MEDIA_QUERY_XS} {
    width: 80px;
    height: 34px;
    font-size: 15px;
  }
`;

const SubscriptionBtn = styled(UnsubscriptionBtn)`
  outline: none;
  border: hidden;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.click_color};
  border: 3px solid ${(props) => props.theme.click_color};
`;

const InfoCardText = styled.div`
  width: 100%;
  margin-top: 24px;
  color: ${(props) => props.theme.white};
  font-size: 25px;
  letter-spacing: 0.3px;
  line-height: 1.6;
  word-break: break-word;

  ${MEDIA_QUERY_XL} {
    font-size: 20px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_MD} {
    margin-top: 10px;
    font-size: 17px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 17px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 15px;
    margin: 0;
  }
`;

export default function ChannelSidebar({ podcastInfo }) {
  const { userInfo, setUserSubscription } = useUser();
  const { podcastId } = useParams();
  const [subscription, setSubscription] = useState(false);
  const [popUpText, setPopUpText] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const { setAlert, setAlertText } = useAlertMessage();

  const handleSubscriptionBtnClick = async () => {
    if (!userInfo) {
      setAlertText("登入後即可訂閱");
      setAlert(true);
      return;
    }
    setShowPopUp(!showPopUp);

    if (!subscription) {
      await addSubsciption(podcastId);
      setSubscription(true);
      setShowPopUp(true);
      setPopUpText("已新增至您的頻道清單");
    }
    if (subscription) {
      await deleteSubsciption(podcastId);
      setSubscription(false);
      setShowPopUp(true);
      setPopUpText("已從您的頻道清單移除");
    }

    const { data: newSubscriptionIds } = await getMySubsciption();
    const newPodcastData = await getAllPodcastsInfo(newSubscriptionIds);
    setUserSubscription(newPodcastData);
  };

  useEffect(() => {
    if (!userInfo) return;

    getMySubsciption()
      .then((response) => {
        let data = response.data;
        const SubscribedId = data.find((item) => item.id === podcastId);
        if (SubscribedId) {
          setSubscription(true);
        } else {
          setSubscription(false);
        }
      })
      .catch((err) => {
        setAlertText(String(err));
        setAlert(true);
        return;
      });
  }, [podcastId, setAlertText, setAlert, userInfo]);

  return (
    <>
      {showPopUp && (
        <PopUpMessage
          text={popUpText}
          button={false}
          setShowPopUp={setShowPopUp}
        />
      )}
      <SidebarContainer>
        <InfoCardWrapper>
          {podcastInfo ? (
            <InfoCardPhoto>
              <img
                src={podcastInfo.image}
                alt={`The Podcast titled: ${podcastInfo.title}`}
              />
            </InfoCardPhoto>
          ) : (
            <InfoCardPhoto>
              <img src={DemoImage} alt="" />
            </InfoCardPhoto>
          )}
          <InfoCardContent>
            <InfoCardBlock>
              <InfoCardTitle>
                {podcastInfo ? podcastInfo.title : "社畜日記"}
              </InfoCardTitle>
              <div onClick={handleSubscriptionBtnClick}>
                {userInfo && subscription ? (
                  <SubscriptionBtn>訂閱中</SubscriptionBtn>
                ) : (
                  <UnsubscriptionBtn>訂閱</UnsubscriptionBtn>
                )}
              </div>
            </InfoCardBlock>
            {podcastInfo && (
              <InfoCardText
                dangerouslySetInnerHTML={{
                  __html: podcastInfo.description.replace(/<[^>]+>/g, ""),
                }}
              ></InfoCardText>
            )}
          </InfoCardContent>
        </InfoCardWrapper>
      </SidebarContainer>
    </>
  );
}
