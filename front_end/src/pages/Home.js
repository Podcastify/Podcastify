import InfoCard from "../components/InfoCard";
import Sidebar from "../components/Sidebar";
import { Main, Div } from "../components/Main";
import styled from "styled-components";
import { MEDIA_QUERY_XS } from "../constants/breakpoints";
import Loading from "../components/Loading";
import AlertMessage from "../components/AlertMessage";
import PopUpForm from "../components/PopUpForm";

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

const formInputs = [
  {
    attributes: {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "播放清單名稱",
      value: "",
      required: true,
    },
    title: "",
    errorMessage: "",
  },
  {
    attributes: {
      type: "submit",
      name: "add",
      id: "add",
      value: "編輯",
      required: true,
    },
    title: "",
    errorMessage: "",
  },
];

export default function Home() {
  return (
    <Container>
      {/* <Loading /> */}
      <MainWrapper>
        <Div>
          <Sidebar />
          {/* <PopUpForm title="編輯播放清單名稱" formInputs={formInputs} /> */}
          <InfoCard />
        </Div>
      </MainWrapper>
    </Container>
  );
}
