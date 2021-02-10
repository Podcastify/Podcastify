import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_LG,
} from "../constants/breakpoints";
import Carousel from "react-elastic-carousel";
import "../constants/InfoCard.css";

const PodcastInfoContainer = styled.section`
  width: 75%;
  display: flex;
  flex-direction: column;
  height: fill-available;
  margin: 10px 30px;

  ${MEDIA_QUERY_MD} {
    width: 100%;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
  }

  ${MEDIA_QUERY_XS} {
    width: 100%;
    margin: 0;
  }
`;

const Div = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
`;

const PodcastInfoWrapper = styled.div`
  width: 100%;

  & + & {
    margin-top: 50px;
  }

  ${MEDIA_QUERY_XS} {
    & + & {
      margin: 10px;
    }
  }
`;

const PodcastInfoTitle = styled.div`
  width: 100%;
  font-size: 40px;
  padding: 10px;
  line-height: 1.2;
  letter-spacing: normal;
  font-weight: bold;
  color: ${(props) => props.theme.white};

  ${MEDIA_QUERY_SM} {
    font-size: 35px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 25px;
  }
`;

const InfoCardWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 30px 0 15px 0;

  ${MEDIA_QUERY_XS} {
    font-size: 25px;
  }
`;

const InfoCardPhoto = styled.div`
  width: 260px;
  max-width: 100%;
  height: 220px;
  text-decoration: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${MEDIA_QUERY_XL} {
    width: 200px;
    max-width: 100%;
    height: 180px;
  }

  ${MEDIA_QUERY_LG} {
    width: 190px;
    max-width: 100%;
    height: 170px;
  }

  ${MEDIA_QUERY_MD} {
    width: 170px;
    max-width: 100%;
    height: 150px;
  }

  ${MEDIA_QUERY_SM} {
    width: 210px;
    max-width: 100%;
    height: 190px;
  }

  ${MEDIA_QUERY_XS} {
    width: 210px;
    max-width: 100%;
    height: 190px;
  }
`;

const InfoCardTitle = styled.h2`
  width: 90%;
  color: ${(props) => props.theme.white};
  margin: 20px 0 15px 0;
  font-weight: bold;
  letter-spacing: 0.6px;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${MEDIA_QUERY_SM} {
    font-size: 25px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 22px;
    margin: 10px 0 15px 0;
  }
`;

const InfoCardContent = styled.div`
  margin-top: 15px;
  width: 95%;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  letter-spacing: 0.3px;
  line-height: 1.6;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  ${MEDIA_QUERY_XL} {
    font-size: 18px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 16px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 15px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 20px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 16px;
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 380, itemsToShow: 2, pagination: false },
  { width: 570, itemsToShow: 3, pagination: false },
  { width: 850, itemsToShow: 4, pagination: false },
];

export default function InfoCard() {
  return (
    <PodcastInfoContainer>
      <Div>
        <PodcastInfoWrapper>
          <PodcastInfoTitle># You Might Also Like</PodcastInfoTitle>
          <Carousel
            itemsToScroll={1}
            breakPoints={breakPoints}
            itemPadding={[0, 10]}
            className="InfoCard"
          >
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
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
          <PodcastInfoTitle># Hot Podcast！</PodcastInfoTitle>
          <Carousel
            itemsToScroll={1}
            breakPoints={breakPoints}
            itemPadding={[0, 10]}
            className="InfoCard"
          >
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
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
            itemsToScroll={1}
            breakPoints={breakPoints}
            itemPadding={[0, 10]}
            className="InfoCard"
          >
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
            <InfoCardWrapper>
              <InfoCardPhoto>
                <img src={DemoImage} alt="" />
              </InfoCardPhoto>
              <InfoCardTitle>社畜日記</InfoCardTitle>
              <InfoCardContent>
                用隨性的對話包裝知識， 用認真的口吻胡說八道。
                我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...用隨性的對話包裝知識，
                用認真的口吻胡說八道。我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
              </InfoCardContent>
            </InfoCardWrapper>
          </Carousel>
        </PodcastInfoWrapper>
      </Div>
    </PodcastInfoContainer>
  );
}
