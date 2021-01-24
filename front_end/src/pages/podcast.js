import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";
import ChannelSidebar from "../components/ChannelSidebar";
import styled from "styled-components";

const Container = styled.div``;
const Main = styled.main``;
const PlayList = styled.section``;
const TitleHeader = styled.div``;
const EpisodeTitleHeader = styled.div``;
const EpisodeDescriptionHeader = styled.div``;
const ChannelNameHeader = styled.div``;
const Body = styled.details``;
const EpisodeTitle = styled.div``;
const EpisodeDescription = styled.div``;
const ChannelName = styled.div``;
const EpisodeDetails = styled.div``;

export default function Podcast() {
  return (
    <Container>
      <Navbar />
      <Main>
        <ChannelSidebar />
        <PlayList>
          <TitleHeader>
            <EpisodeTitleHeader></EpisodeTitleHeader>
            <EpisodeDescriptionHeader></EpisodeDescriptionHeader>
            <ChannelNameHeader></ChannelNameHeader>
          </TitleHeader>
          <Body>
            <summary>
              <EpisodeTitle></EpisodeTitle>
              <EpisodeDescription></EpisodeDescription>
              <ChannelName></ChannelName>
            </summary>
            <EpisodeDetails></EpisodeDetails>
          </Body>
        </PlayList>
      </Main>
      <MusicPlayer />
    </Container>
  );
}
