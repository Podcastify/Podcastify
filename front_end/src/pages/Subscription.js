import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";
import { ReactComponent as DeleteButton } from "../images/Delete_button.svg";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MusicPlayer from "../components/MusicPlayer";
import { Main, Div } from "../components/Main";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import { AlertMessageContext } from "../context/context";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled(Main)`
  ${MEDIA_QUERY_SM} {
    left: unset;
    width: 90%;
    height: 74vh;
    padding-left: 0px;
  }

  ${MEDIA_QUERY_XS} {
    left: unset;
    width: 95%;
    height: 74vh;
    padding-left: 0px;
  }
`;

const ChannelContainer = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  height: fill-available;
  margin: 10px 40px;

  ${MEDIA_QUERY_XL} {
    width: 73%;
  }

  ${MEDIA_QUERY_LG} {
    width: 70%;
  }

  ${MEDIA_QUERY_MD} {
    width: 100%;
    margin: 0;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
    margin: 0;
  }

  ${MEDIA_QUERY_XS} {
    width: 100%;
    margin: 0;
    padding: 0 10px;
  }
`;

const ChannelWrapper = styled.div`
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
`;

const ChannelTitleBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ChannelTitle = styled.div`
  font-size: 40px;
  padding: 10px;
  line-height: 1.2;
  letter-spacing: normal;
  font-weight: bold;
  color: ${(props) => props.theme.white};

  ${MEDIA_QUERY_SM} {
    font-size: 30px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 22px;
  }
`;

const ChannelButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 160px;
  height: 45px;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 3px;
  color: ${(props) => props.theme.white};
  margin-left: 25px;
  font-size: 15px;
  padding: 10px 32px;
  letter-spacing: normal;

  &:hover {
    border-color: transparent;
    background-color: ${(props) => props.theme.hover_color};
  }

  &:active {
    border-color: transparent;
    background-color: ${(props) => props.theme.click_color};
  }
`;

const SearchItemWrapper = styled.div`
  width: 98%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0;
  flex-grow: 1;

  ${MEDIA_QUERY_XL} {
    width: 100%;
  }

  ${MEDIA_QUERY_MD} {
    margin: 40px 20px;
  }

  ${MEDIA_QUERY_SM} {
    justify-content: space-around;
  }

  ${MEDIA_QUERY_XS} {
    justify-content: space-around;
    margin: 10px 0;
  }
`;

const InfoCardItem = styled.div`
  /* width: 25vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: fl;
  margin-right: 40px;
  margin-bottom: 50px;

  ${MEDIA_QUERY_XL} {
    /* width: 25vh; */
    margin-right: 40px;
    margin-bottom: 40px;
  }

  ${MEDIA_QUERY_LG} {
    width: 24vh;
    margin-left: 5px;
    margin-bottom: 30px;
  }

  ${MEDIA_QUERY_MD} {
    width: 22vh;
    margin-left: 5px;
    margin-bottom: 20px;
  }

  ${MEDIA_QUERY_SM} {
    margin-left: 5px;
    margin-bottom: 0;
  }

  ${MEDIA_QUERY_XS} {
    width: 20vh;
    height: 25vh;
    margin-right: 0px;
    margin-bottom: 0;
    padding: 0 10px;
  }
`;

const InfoCardPhoto = styled.div`
  width: 240px;
  max-width: 100%;
  height: 220px;
  text-decoration: none;

  ${MEDIA_QUERY_XL} {
    width: 200px;
    max-width: 100%;
    height: 180px;
  }

  ${MEDIA_QUERY_LG} {
    width: 180px;
    max-width: 100%;
    height: 180px;
  }

  ${MEDIA_QUERY_MD} {
    width: 160px;
    max-width: 100%;
    height: 160px;
  }

  ${MEDIA_QUERY_SM} {
    width: 160px;
    height: 160px;
  }

  ${MEDIA_QUERY_XS} {
    width: 130px;
    height: 130px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;

    ${MEDIA_QUERY_XS} {
      border-radius: 50%;
    }
  }
`;

const InfoCardTitle = styled.h2`
  width: 80%;
  color: ${(props) => props.theme.white};
  margin: 20px 0 15px 0;
  font-weight: bold;
  letter-spacing: 0.6px;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.5em;

  ${MEDIA_QUERY_XL} {
    width: 75%;
  }

  ${MEDIA_QUERY_LG} {
    width: 80%;
  }

  ${MEDIA_QUERY_MD} {
    width: 80%;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 25px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 22px;
  }
`;

const DeleteIcon = styled.div`
  position: absolute;
  top: -25px;
  left: -25px;

  svg {
    width: 50px;
    height: 50px;

    ${MEDIA_QUERY_XS} {
      border-radius: 50%;
      position: absolute;
      top: 15px;
      left: 15px;
    }
  }
`;

export default function Subcription() {
  return (
    <Container>
      <Navbar />
      <MainWrapper>
        <Div>
          <Sidebar />
          <ChannelContainer>
            <ChannelWrapper>
              <ChannelTitleBlock>
                <ChannelTitle># 訂閱中的頻道</ChannelTitle>
                <ChannelButton>管理我的頻道</ChannelButton>
              </ChannelTitleBlock>
              <SearchItemWrapper>
                <InfoCardItem>
                  <InfoCardPhoto>
                    <img src={DemoImage} alt="" />
                    <DeleteIcon>
                      <DeleteButton />
                    </DeleteIcon>
                  </InfoCardPhoto>
                  <InfoCardTitle>頻道名稱</InfoCardTitle>
                </InfoCardItem>
                <InfoCardItem>
                  <InfoCardPhoto>
                    <img src={DemoImage} alt="" />
                    <DeleteIcon>
                      <DeleteButton />
                    </DeleteIcon>
                  </InfoCardPhoto>
                  <InfoCardTitle>頻道名稱</InfoCardTitle>
                </InfoCardItem>
                <InfoCardItem>
                  <InfoCardPhoto>
                    <img src={DemoImage} alt="" />
                    <DeleteIcon>
                      <DeleteButton />
                    </DeleteIcon>
                  </InfoCardPhoto>
                  <InfoCardTitle>頻道名稱</InfoCardTitle>
                </InfoCardItem>
                <InfoCardItem>
                  <InfoCardPhoto>
                    <img src={DemoImage} alt="" />
                    <DeleteIcon>
                      <DeleteButton />
                    </DeleteIcon>
                  </InfoCardPhoto>
                  <InfoCardTitle>頻道名稱</InfoCardTitle>
                </InfoCardItem>
                <InfoCardItem>
                  <InfoCardPhoto>
                    <img src={DemoImage} alt="" />
                    <DeleteIcon>
                      <DeleteButton />
                    </DeleteIcon>
                  </InfoCardPhoto>
                  <InfoCardTitle>頻道名稱</InfoCardTitle>
                </InfoCardItem>
                <InfoCardItem>
                  <InfoCardPhoto>
                    <img src={DemoImage} alt="" />
                    <DeleteIcon>
                      <DeleteButton />
                    </DeleteIcon>
                  </InfoCardPhoto>
                  <InfoCardTitle>頻道名稱</InfoCardTitle>
                </InfoCardItem>
                <InfoCardItem>
                  <InfoCardPhoto>
                    <img src={DemoImage} alt="" />
                    <DeleteIcon>
                      <DeleteButton />
                    </DeleteIcon>
                  </InfoCardPhoto>
                  <InfoCardTitle>頻道名稱</InfoCardTitle>
                </InfoCardItem>
                <InfoCardItem>
                  <InfoCardPhoto>
                    <img src={DemoImage} alt="" />
                    <DeleteIcon>
                      <DeleteButton />
                    </DeleteIcon>
                  </InfoCardPhoto>
                  <InfoCardTitle>頻道名稱</InfoCardTitle>
                </InfoCardItem>
              </SearchItemWrapper>
            </ChannelWrapper>
          </ChannelContainer>
        </Div>
      </MainWrapper>
      <MusicPlayer />
    </Container>
  );
}
