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
import Carousel from "react-elastic-carousel";
import "../constants/InfoCard.css";
import { Link } from "react-router-dom";

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
`;

const PodcastInfoTitle = styled.h1`
  width: 100%;
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
    font-size: 25px;
  }
`;

const InfoCardWrapper = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 30px 0 15px 0;
`;

const InfoCardPhoto = styled.div`
  position: relative;
  width: 100%;

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
  }
`;

const InfoCardTitle = styled.h2`
  width: 100%;
  font-size: 32px;
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
    margin: 20px 0 10px 0;
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
    font-size: 25px;
    margin: 10px 0 15px 0;
  }
`;

const InfoCardContent = styled.p`
  margin-top: 15px;
  width: 100%;
  color: ${(props) => props.theme.white_opacity};
  font-size: 25px;
  letter-spacing: 0.3px;
  line-height: 1.6;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  ${MEDIA_QUERY_XL} {
    font-size: 20px;
    margin-top: 10px;
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

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
  { width: 400, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 450, itemsToShow: 3, itemsToScroll: 3, pagination: false },
  { width: 500, itemsToShow: 4, itemsToScroll: 4, pagination: false },
];

export default function InfoCard({
  currentHotPodcasts,
  hotPodactsInTaiwan,
  userPlayedRecord,
}) {
  return (
    <PodcastInfoContainer>
      <Div>
        <PodcastInfoWrapper>
          <PodcastInfoTitle># You Might Also Like</PodcastInfoTitle>
          <Carousel
            breakPoints={breakPoints}
            itemPadding={[0, 10]}
            className="InfoCard"
          >
            {currentHotPodcasts
              ? currentHotPodcasts.map((data) => (
                  <InfoCardWrapper to={`/channel/${data.id}`} key={data.id}>
                    <InfoCardPhoto>
                      <img
                        src={data.image}
                        alt={`The Podcast titled: ${data.title}`}
                      />
                    </InfoCardPhoto>
                    <InfoCardTitle>{data.title}</InfoCardTitle>
                    {currentHotPodcasts && (
                      <InfoCardContent
                        dangerouslySetInnerHTML={{
                          __html: data.description.replace(/<[^>]+>/g, ""),
                        }}
                      ></InfoCardContent>
                    )}
                  </InfoCardWrapper>
                ))
              : ""}
          </Carousel>
        </PodcastInfoWrapper>
        <PodcastInfoWrapper>
          <PodcastInfoTitle># Hot Podcast！</PodcastInfoTitle>
          <Carousel
            breakPoints={breakPoints}
            itemPadding={[0, 10]}
            className="InfoCard"
          >
            {hotPodactsInTaiwan
              ? hotPodactsInTaiwan.map((data) => (
                  <InfoCardWrapper to={`/channel/${data.id}`} key={data.id}>
                    <InfoCardPhoto>
                      <img
                        src={data.image}
                        alt={`The Podcast titled: ${data.title}`}
                      />
                    </InfoCardPhoto>
                    <InfoCardTitle>{data.title}</InfoCardTitle>
                    {hotPodactsInTaiwan && (
                      <InfoCardContent
                        dangerouslySetInnerHTML={{
                          __html: data.description.replace(/<[^>]+>/g, ""),
                        }}
                      ></InfoCardContent>
                    )}
                  </InfoCardWrapper>
                ))
              : ""}
          </Carousel>
        </PodcastInfoWrapper>
        {userPlayedRecord.length > 3 ? (
          <PodcastInfoWrapper>
            <PodcastInfoTitle># 最近播放單元</PodcastInfoTitle>

            <Carousel
              breakPoints={breakPoints}
              itemPadding={[0, 10]}
              className="InfoCard"
            >
              {userPlayedRecord
                ? userPlayedRecord.map((data) => (
                    <InfoCardWrapper
                      to={`/channel/${data.episode.podcast.id}`}
                      key={data.episode.id}
                    >
                      <InfoCardPhoto>
                        <img
                          src={data.episode.image}
                          alt={`The Podcast titled: ${data.episode.title}`}
                        />
                      </InfoCardPhoto>
                      <InfoCardTitle>{data.episode.title}</InfoCardTitle>
                      {userPlayedRecord.length > 0 && (
                        <InfoCardContent
                          dangerouslySetInnerHTML={{
                            __html: data.episode.description.replace(
                              /<[^>]+>/g,
                              ""
                            ),
                          }}
                        ></InfoCardContent>
                      )}
                    </InfoCardWrapper>
                  ))
                : ""}
            </Carousel>
          </PodcastInfoWrapper>
        ) : (
          ""
        )}
      </Div>
    </PodcastInfoContainer>
  );
}
