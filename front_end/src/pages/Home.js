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
import { getRecords } from "../WebAPI/me";
import useUser from "../hooks/useUser";
import useAlertMessage from "../hooks/useAlertMessage";
import { getPlayRecordDetail } from "../utils";

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
  const { userInfo, userPlayedRecord, setUserPlayedRecord } = useUser();
  const { setAlert, setAlertText } = useAlertMessage();
  const [currentHotPodcasts, setCurrentHotPodcasts] = useState([]);
  const [hotPodcastsInTaiwan, setHotPodcastsInTaiwan] = useState([]);
  const { setIsLoading } = usePageStatus();

  useEffect(() => {
    setIsLoading(true);

    // You Might Also Like
    getMightLovePodcasts()
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);
          setAlertText(response.errorMessage);
          setAlert(true);
          return;
        }

        setCurrentHotPodcasts(response.data.podcasts);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setAlertText(String(err));
        setAlert(true);
      });

    // Hot Podcast
    getHotPodcastsInTaiwan()
      .then((res) => {
        if (!res.ok) {
          setIsLoading(false);
          setAlertText(res.errorMessage);
          setAlert(true);
          return;
        }

        setHotPodcastsInTaiwan(res.data.podcasts);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setAlertText(String(err));
        setAlert(true);
      });

    if (!userInfo) {
      return;
    }
    setUserPlayedRecord(userPlayedRecord);
  }, [
    setIsLoading,
    setAlert,
    setAlertText,
    setUserPlayedRecord,
    userPlayedRecord,
  ]);

  return (
    <Container>
      <MainWrapper>
        <Div>
          <Sidebar />
          <InfoCard
            currentHotPodcasts={currentHotPodcasts}
            hotPodactsInTaiwan={hotPodcastsInTaiwan}
            userPlayedRecord={userPlayedRecord}
            userInfo={userInfo}
          />
        </Div>
      </MainWrapper>
    </Container>
  );
}
