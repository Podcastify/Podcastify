import { useState, useEffect } from "react";
import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";
import { ReactComponent as DeleteButton } from "../images/Delete_button.svg";
import Sidebar from "../components/Sidebar";
import { Main, Div } from "../components/Main";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import useUser from "../hooks/useUser";

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

  ${MEDIA_QUERY_XS} {
    justify-content: space-between;
  }
`;

const ChannelTitle = styled.h1`
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
    font-size: 19px;
    padding: 0;
  }
`;

const ChannelButton = styled.div`
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 45px;
  border: 2px solid ${(props) => props.theme.white_opacity};
  color: ${(props) => props.theme.white};
  border-radius: 3px;
  margin-left: 25px;
  letter-spacing: normal;

  ${MEDIA_QUERY_XL} {
    width: 150px;
    height: 45px;
    font-size: 15px;
  }

  ${MEDIA_QUERY_XS} {
    width: 115px;
    height: 35px;
    font-size: 8px;
  }
`;

const ChannelItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 30px 40px 30px;

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
  width: 24vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  margin-bottom: 50px;

  ${MEDIA_QUERY_XL} {
    width: 26vh;
    margin-bottom: 40px;
  }

  ${MEDIA_QUERY_LG} {
    width: 24vh;
    margin-bottom: 30px;
  }

  ${MEDIA_QUERY_MD} {
    width: 22vh;
    margin-bottom: 20px;
  }

  ${MEDIA_QUERY_SM} {
    margin-bottom: 0;
  }

  ${MEDIA_QUERY_XS} {
    width: 18vh;
    height: 28vh;
    margin: 0 0 10px 0;
    padding: 0 10px;
  }
`;

const InfoCardPhoto = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${MEDIA_QUERY_XS} {
      border-radius: 50%;
    }
  }
`;

const InfoCardTitle = styled.h2`
  font-size: 32px;
  width: 100%;
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
    font-size: 22px;
  }
`;

const DeleteIcon = styled.div`
  position: absolute;
  top: -25px;
  left: -25px;

  ${MEDIA_QUERY_XL} {
    top: -13px;
    left: -13px;
  }

  ${MEDIA_QUERY_LG} {
    top: -12px;
    left: -12px;
  }

  ${MEDIA_QUERY_MD} {
    top: -15px;
    left: -15px;
  }

  ${MEDIA_QUERY_SM} {
    top: -10px;
    left: -10px;
  }

  ${MEDIA_QUERY_XS} {
    top: -28px;
    left: -28px;
  }

  svg {
    width: 50px;
    height: 50px;

    ${MEDIA_QUERY_XL} {
      width: 40px;
      height: 40px;
    }

    ${MEDIA_QUERY_LG} {
      width: 38px;
      height: 38px;
    }

    ${MEDIA_QUERY_MD} {
      width: 30px;
      height: 30px;
    }

    ${MEDIA_QUERY_SM} {
      width: 28px;
      height: 28px;
    }

    ${MEDIA_QUERY_XS} {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: absolute;
      top: 25px;
      left: 25px;
    }
  }
`;

export default function Subcription() {
  const { userSubscription } = useUser();
  console.log(userSubscription);
  return (
    <Container>
      <MainWrapper>
        <Div>
          <Sidebar />
          <ChannelContainer>
            <ChannelWrapper>
              <ChannelTitleBlock>
                <ChannelTitle># 訂閱中的頻道</ChannelTitle>
                <ChannelButton>管理我的頻道</ChannelButton>
              </ChannelTitleBlock>
              <ChannelItemWrapper>
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
              </ChannelItemWrapper>
            </ChannelWrapper>
          </ChannelContainer>
        </Div>
      </MainWrapper>
    </Container>
  );
}
