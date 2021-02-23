import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DemoImage from "../images/avatar.jpg";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import { addSubsciption, getMySubsciption } from "../WebAPI/me";
import { useParams } from "react-router-dom";

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
  }

  ${MEDIA_QUERY_MD} {
    width: 25%;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
    height: 100%;
    border: none;
    padding: 5px 0;
  }

  ${MEDIA_QUERY_XS} {
    width: 100%;
    border: none;
    padding: 5px 0;
    height: 100%;
    margin-bottom: 20px;
  }
`;

const InfoCardWrapper = styled.div`
  padding: 20px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;

  // 在 chrome, Safari 上隱藏 scrollbar
  &::-webkit-scrollbar {
    display: none;
  }

  // 在 IE, Edge 上隱藏 scrollbar
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
  width: 300px;
  max-width: 100%;
  height: 260px;
  text-decoration: none;

  img {
    width: 100%;
    object-fit: cover;
  }

  ${MEDIA_QUERY_XL} {
    width: 200px;
    max-width: 100%;
    height: 200px;
  }

  ${MEDIA_QUERY_LG} {
    width: 190px;
    max-width: 100%;
    height: 190px;
  }

  ${MEDIA_QUERY_MD} {
    width: 150px;
    max-width: 100%;
    height: 150px;
  }

  ${MEDIA_QUERY_SM} {
    width: 200px;
    height: 180px;
  }

  ${MEDIA_QUERY_XS} {
    width: 235px;
    height: 200px;
  }
`;

const InfoCardContent = styled.div`
  width: 89%;
  height: 60%;

  ${MEDIA_QUERY_MD} {
    width: 98%;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
    height: 100%;
  }

  ${MEDIA_QUERY_XS} {
    width: 100%;
    height: 100%;
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
  width: 90%;
  color: ${(props) => props.theme.white};
  margin: 10px 0px 60px 0px;
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
    font-size: 22px;
    margin: 20px 0px 30px 0px;
  }

  ${MEDIA_QUERY_MD} {
    width: 80%;
    font-size: 20px;
    margin: 20px 0px 40px 0px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 25px;
    width: 180px;
    margin: 10px 0 10px 0;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 25px;
    width: 180px;
    margin: 10px 0 10px 0;
  }
`;

const UnsubscriptionBtn = styled.button`
  cursor: pointer;
  width: 140px;
  height: 60px;
  font-size: 26.5px;
  border: 2px solid ${(props) => props.theme.grey_opacity};
  color: ${(props) => props.theme.white};
  text-decoration: none;
  background: transparent;

  &:focus {
    outline: none;
  }

  /* &:hover {
    border: hidden;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.hover_color};
    border: 3px solid ${(props) => props.theme.hover_color};
  } */

  ${MEDIA_QUERY_XL} {
    width: 120px;
    height: 50px;
    font-size: 22px;
  }

  ${MEDIA_QUERY_LG} {
    width: 90px;
    height: 45px;
    font-size: 18px;
  }

  ${MEDIA_QUERY_MD} {
    width: 90px;
    height: 50px;
    font-size: 18px;
  }

  ${MEDIA_QUERY_SM} {
    /* width: 80px;
    margin-top: 0px; */
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

  /* &:hover {
    outline: none;
    border: hidden;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.click_color};
    border: 3px solid ${(props) => props.theme.click_color};
  } */
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
    font-size: 16px;
  }

  ${MEDIA_QUERY_MD} {
    margin-top: 10px;
    font-size: 18px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 18px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 15px;
    margin: 0;
    color: ${(props) => props.theme.white};
  }
`;

export default function ChannelSidebar({ podcastInfo }) {
  const { podcastId } = useParams();
  const [subscription, setSubscription] = useState(false);

  const handleSubscribeClick = (e) => {
    e.preventDefault();
    if (!subscription) {
      addSubsciption(podcastId).then((response) => {
        if (response.ok) {
          setSubscription(true);
        }
        return;
      });
    }
  };

  useEffect(() => {
    getMySubsciption().then((response) => {
      let data = response.data;
      console.log(data);
      const SubscribedID = data.find((item) => item.id === podcastId);
      if (SubscribedID) {
        setSubscription(true);
      } else {
        return setSubscription(false);
      }
    });
  }, [podcastId]);

  return (
    <SidebarContainer>
      <InfoCardWrapper>
        {podcastInfo.image ? (
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
            <InfoCardTitle>{podcastInfo.title}</InfoCardTitle>
            <div onClick={handleSubscribeClick}>
              {subscription ? (
                <SubscriptionBtn>訂閱中</SubscriptionBtn>
              ) : (
                <UnsubscriptionBtn>訂閱</UnsubscriptionBtn>
              )}
            </div>
          </InfoCardBlock>
          {podcastInfo.description && (
            <InfoCardText
              dangerouslySetInnerHTML={{
                __html: podcastInfo.description.replace(/<[^>]+>/g, ""),
              }}
            ></InfoCardText>
          )}
        </InfoCardContent>
      </InfoCardWrapper>
    </SidebarContainer>
  );
}
