import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
} from "../constants/breakpoints";
import Carousel from "react-elastic-carousel";
import "../constants/InfoCard.css";

const PodcastInfoContainer = styled.div`
  width: 70%;
  margin-left: 25%;
  margin-bottom: 200px;
  position: relative;
  display: block;
  top: 90px;
  left: 30px;

  ${MEDIA_QUERY_MD} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    left: 0px;
    margin-left: 0;
  }

  ${MEDIA_QUERY_SM} {
    padding: 0 10px;
    margin-bottom: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    left: 0px;
    margin-left: 0;
  }

  ${MEDIA_QUERY_XS} {
    padding: 0 10px;
    margin-bottom: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    left: 0px;
    margin-left: 0;
    /* display: none; */
  }
`;

const PodcastInfoWrapper = styled.div`
  & + & {
    margin-top: 50px;

    ${MEDIA_QUERY_SM} {
      margin-top: 20px;
    }
  }
`;

const PodcastInfoTitle = styled.div`
  font-size: 40px;
  padding: 10px;
  line-height: 1.2;
  letter-spacing: normal;
  font-weight: bold;
  color: white;

  ${MEDIA_QUERY_SM} {
    font-size: 28px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 26px;
  }
`;

const InfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const InfoCardPhoto = styled.div`
  width: 180px;
  height: 180px;
  background: url(${DemoImage}) center / cover;
  text-decoration: none;

  ${MEDIA_QUERY_SM} {
    width: 200px;
    height: 190px;
  }
`;

const InfoCardTitle = styled.h2`
  color: white;
  margin: 10px 0 15px 0;
  font-weight: bold;
  line-height: 1.19;
  letter-spacing: 0.6px;
  text-decoration: none;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const InfoCardContent = styled.div`
  margin-top: 24px;
  width: 180px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  letter-spacing: 0.3px;
  line-height: 1.6;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4; //行數
  -webkit-box-orient: vertical;

  ${MEDIA_QUERY_SM} {
    margin-top: 10px;
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 368, itemsToShow: 2, pagination: false },
  { width: 550, itemsToShow: 3, pagination: false },
  { width: 768, itemsToShow: 4, pagination: false },
];

export default function InfoCard() {
  return (
    <PodcastInfoContainer>
      <PodcastInfoWrapper>
        <PodcastInfoTitle># You Might Also Like</PodcastInfoTitle>
        <Carousel
          focusOnSelect={false}
          itemsToScroll={1}
          breakPoints={breakPoints}
          itemPadding={[0, 5]}
          className="InfoCard"
        >
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
        </Carousel>
      </PodcastInfoWrapper>
      <PodcastInfoWrapper>
        <PodcastInfoTitle># Hot Podcast!</PodcastInfoTitle>
        <Carousel
          itemsToScroll={2}
          breakPoints={breakPoints}
          itemPadding={[0, 5]}
          className="InfoCard"
        >
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
        </Carousel>
      </PodcastInfoWrapper>
      <PodcastInfoWrapper>
        <PodcastInfoTitle># 最近播放單元</PodcastInfoTitle>
        <Carousel
          itemsToScroll={2}
          breakPoints={breakPoints}
          itemPadding={[0, 5]}
          className="InfoCard"
        >
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
          <InfoCardWrapper>
            <InfoCardPhoto />
            <InfoCardTitle>社畜日記</InfoCardTitle>
            <InfoCardContent>
              用隨性的對話包裝知識， 用認真的口吻胡說八道。
              我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
              用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
            </InfoCardContent>
          </InfoCardWrapper>
        </Carousel>
      </PodcastInfoWrapper>
    </PodcastInfoContainer>
  );
}
