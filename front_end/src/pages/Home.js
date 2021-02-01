import InfoCard from "../components/InfoCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MusicPlayer from "../components/MusicPlayer";
import styled from "styled-components";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  position: absolute;
  top: 11%;
  left: 0;
  width: 100%;
  height: 73vh;
  padding-left: 13.5px;

  ${MEDIA_QUERY_XS} {
    top: 100px;
    left: unset;
    width: 82%;
    height: 70vh;
  }

  ${MEDIA_QUERY_SM} {
    top: 80px;
  }

  ${MEDIA_QUERY_MD} {
    top: 90px;
    height: 78vh;
  }

  ${MEDIA_QUERY_LG} {
    top: 12%;
  }

  ${MEDIA_QUERY_XL} {
    top: 12%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  // 在 chrome, Safari 上隱藏 scrollbar
  &::-webkit-scrollbar {
    display: none;
  }

  // 在 IE, Edge 上隱藏 scrollbar
  -ms-overflow-style: none;

  ${MEDIA_QUERY_XL} {
    overflow-y: unset;
  }

  ${MEDIA_QUERY_LG} {
    overflow-y: unset;
  }

  ${MEDIA_QUERY_MD} {
    overflow-y: unset;
  }

  ${MEDIA_QUERY_SM} {
    flex-direction: column;
  }

  ${MEDIA_QUERY_XS} {
    flex-direction: column;
  }
`;

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Main>
        <Div>
          <Sidebar />
          <InfoCard />
        </Div>
      </Main>
      <MusicPlayer />
    </Container>
  );
}
