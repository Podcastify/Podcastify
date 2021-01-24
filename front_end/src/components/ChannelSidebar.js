import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
} from "../constants/breakpoints";

const SidebarContainer = styled.div`
  width: 20vw;
  height: 59vh;
  padding: 18px 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 28px;
  position: fixed;
  top: 100px;
  margin: 0 10px;

  ${MEDIA_QUERY_SM} {
    display: none;
  }

  ${MEDIA_QUERY_XS} {
    width: 95%;
    border: none;
    padding: 5px 0;
    height: 75vh;
    top: 70px;
    /* display: none; */
  }
`;

const InfoCardWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${MEDIA_QUERY_MD} {
    width: 100%;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const InfoCardPhoto = styled.div`
  width: 190px;
  height: 190px;
  background: url(${DemoImage}) center / cover;
  text-decoration: none;

  ${MEDIA_QUERY_LG} {
    width: 190px;
    height: 190px;
  }

  ${MEDIA_QUERY_MD} {
    width: 150px;
    height: 150px;
  }

  ${MEDIA_QUERY_SM} {
    width: 120px;
    height: 120px;
  }
  ${MEDIA_QUERY_XS} {
    width: 210px;
    height: 210px;
  }
`;

const InfoCardBlock = styled.div`
  width: 190px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;

  ${MEDIA_QUERY_LG} {
    width: 190px;
  }

  ${MEDIA_QUERY_MD} {
    width: 150px;
  }

  ${MEDIA_QUERY_SM} {
    width: 130px;
    margin-top: 6px;
  }

  ${MEDIA_QUERY_XS} {
    margin-top: 15px;
    width: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const InfoCardButton = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  width: 100px;
  height: 2.5rem;
  font-size: 1rem;
  border: 2px solid #d0d0d0;
  color: #d0d0d0;
  text-decoration: none;
  background: rgba(255, 255, 255, 0);

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

  ${MEDIA_QUERY_SM} {
    width: 80px;
    margin-top: 0px;
  }

  ${MEDIA_QUERY_XS} {
    width: 80px;
    margin-top: 0px;
  }
`;

const InfoCardTitle = styled.h2`
  color: white;
  margin-top: 10px 0 15px 0;
  font-weight: bold;
  line-height: 1.19;
  letter-spacing: 0.6px;
  text-decoration: none;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${MEDIA_QUERY_LG} {
    width: 100px;
  }

  ${MEDIA_QUERY_MD} {
    width: 100px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 22px;
    width: 130px;
    margin-top: 6px;
  }

  ${MEDIA_QUERY_XS} {
    width: 100px;
    margin: 10px 0 10px 0;
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ${MEDIA_QUERY_LG} {
    width: 190px;
  }

  ${MEDIA_QUERY_MD} {
    width: 150px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_SM} {
    width: 120px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_XS} {
    width: 280px;
    margin-top: 10px;
    -webkit-line-clamp: 4;
  }
`;

export default function ChannelSidebar() {
  return (
    <SidebarContainer>
      <InfoCardWrapper>
        <InfoCardPhoto />
        <InfoCardBlock>
          <InfoCardTitle>社畜日記</InfoCardTitle>
          <InfoCardButton>訂閱</InfoCardButton>
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
