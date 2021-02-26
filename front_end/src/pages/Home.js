import InfoCard from "../components/InfoCard";
import Sidebar from "../components/Sidebar";
import { Main, Div } from "../components/Main";
import styled from "styled-components";
import { MEDIA_QUERY_XS } from "../constants/breakpoints";
import Loading from "../components/Loading";
import AlertMessage from "../components/AlertMessage";

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
  return (
    <Container>
      {/* <Loading /> */}
      <MainWrapper>
        <Div>
          {/* <Sidebar /> */}
          <AlertMessage />
          <InfoCard />
        </Div>
      </MainWrapper>
    </Container>
  );
}
