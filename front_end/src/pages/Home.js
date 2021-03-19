import React, { useState, useEffect } from "react";
import InfoCard from "../components/InfoCard";
import Sidebar from "../components/Sidebar";
import { Main, Div } from "../components/Main";
import styled from "styled-components";
import { MEDIA_QUERY_XS } from "../constants/breakpoints";
import usePageStatus from "../hooks/usePageStatus";
import {
  getMightLovePodcasts,
  getHotPodcastsInTaiwan,
} from "../WebAPI/listenAPI";
import useUser from "../hooks/useUser";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled(Main)`
  ${MEDIA_QUERY_XS} {
    left: unset;
    width: 95%;
    height: 74vh;
    padding-left: 0px;
  }
`;

export default function Home() {
  const { userInfo } = useUser;
  const { setIsLoading } = usePageStatus();
  const [currentHotPodcasts, setCurrentHotPodcasts] = useState([]);
  const [hotPodcastsInTaiwan, setHotPodcastsInTaiwan] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getMightLovePodcasts().then((response) => {
      let hotPodcastsByGenres = response.data.podcasts;
      setCurrentHotPodcasts(hotPodcastsByGenres);
    });
    getHotPodcastsInTaiwan().then((res) => {
      let hotPodcastsInTaiwan = res.data.podcasts;
      setHotPodcastsInTaiwan(hotPodcastsInTaiwan);
      setIsLoading(false);
    });
  }, [setIsLoading]);

  return (
    <Container>
      <MainWrapper>
        <Div>
          <Sidebar />
          <InfoCard
            currentHotPodcasts={currentHotPodcasts}
            hotPodactsInTaiwan={hotPodcastsInTaiwan}
          />
        </Div>
      </MainWrapper>
    </Container>
  );
}
