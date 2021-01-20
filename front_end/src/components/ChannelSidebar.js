import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
} from "../constants/breakpoints";

const SidebarContainer = styled.div`
  box-sizing: border-box;
  width: 20vw;
  height: 70vh;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 28px;
  padding: 20px;
  position: fixed;
  top: 100px;
  margin: 0 20px;

  ${MEDIA_QUERY_MD} {
    width: 30vh;
  }

  ${MEDIA_QUERY_SM} {
    width: 95%;
    height: 58vh;
    margin: 0;
    padding: 0;
    top: 80px;
    border: none;
  }
`;

const InfoCardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  width: 100%;

  ${MEDIA_QUERY_MD} {
    width: 70%;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const InfoCardPhoto = styled.div`
  width: 27vh;
  height: 26vh;
  background: url(${DemoImage}) center / cover;
  text-decoration: none;

  ${MEDIA_QUERY_LG} {
    width: 27vh;
    height: 25vh;
  }

  ${MEDIA_QUERY_MD} {
    width: 18vh;
    height: 18vh;
  }

  ${MEDIA_QUERY_SM} {
    width: 230px;
    height: 200px;
  }
`;

const InfoCardBlock = styled.div`
  display: block;

  ${MEDIA_QUERY_SM} {
    margin-top: 6px;
    width: 75vw;
    display: flex;
    justify-content: space-between;
  }
`;

const InfoCardButtonContainer = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  width: 5rem;
  height: 2.5rem;
  font-size: 1rem;
  border: 2px solid #d0d0d0;
  color: #d0d0d0;
  text-decoration: none;
  background: rgba(255, 255, 255, 0);
  margin-top: 10px;

  &:focus {
    outline: none;
  }

  &:hover {
    border: hidden;
    color: #ffffff;
    background: #8fe2ff;
    border: 3px solid #8fe2ff;
  }

  &:active {
    border: hidden;
    color: #ffffff;
    background: #0079f2;
    border: 3px solid #0079f2;
  }
`;

const InfoCardButtonName = styled.div`
  text-align: center;
  margin: 0 10px;
`;

const InfoCardTitle = styled.h2`
  color: white;
  font-weight: bold;
  line-height: 1.19;
  letter-spacing: 0.6px;
  text-decoration: none;
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${MEDIA_QUERY_MD} {
    width: 20vh;
  }
`;

const InfoCardContent = styled.div`
  margin-top: 24px;
  width: 190px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  letter-spacing: 0.3px;
  line-height: 1.6;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  ${MEDIA_QUERY_MD} {
    width: 20vh;
  }

  ${MEDIA_QUERY_SM} {
    margin-top: 10px;
  }

  ${MEDIA_QUERY_SM} {
    margin-top: 6px;
    width: 75vw;
  }
`;

export default function InfoCard() {
  return (
    <SidebarContainer>
      <InfoCardWrapper>
        <InfoCardPhoto />
        <InfoCardBlock>
          <InfoCardTitle>社畜日記</InfoCardTitle>
          <InfoCardButtonContainer>
            <InfoCardButtonName>訂閱</InfoCardButtonName>
          </InfoCardButtonContainer>
        </InfoCardBlock>
        <InfoCardContent>
          用隨性的對話包裝知識， 用認真的口吻胡說八道。
          我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
          用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
        </InfoCardContent>
      </InfoCardWrapper>
    </SidebarContainer>
  );
}
