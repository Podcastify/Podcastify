import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";
import { ReactComponent as DeleteButton } from "../images/Delete_button.svg";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MusicPlayer from "../components/MusicPlayer/Player";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
} from "../constants/breakpoints";

const PlaylistContainer = styled.main`
  width: 72%;
  margin-left: 28%;
  margin-bottom: 200px;
  position: relative;
  display: block;
  top: 90px;
  left: 30px;

  ${MEDIA_QUERY_MD} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 0px;
    margin-left: 0;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 0px;
    margin-left: 0;
  }

  ${MEDIA_QUERY_XS} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 0px;
    margin-left: 0;
    padding: 0 10px;
    margin-bottom: 90px;
  }
`;

const SearchPageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ManageChannelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 160px;
  height: 45px;
  border: 1px solid ${(props) => props.theme.primary_color_grey};
  border-radius: 3px;
  color: ${(props) => props.theme.primary_color};
  margin-left: 25px;
  font-size: 15px;
  padding: 10px 32px;

  &:hover {
    border-color: transparent;
    background-color: ${(props) => props.theme.hover_color};
  }

  &:active {
    border-color: transparent;
    background-color: ${(props) => props.theme.click_color};
  }
`;

const SearchPageTitle = styled.div`
  font-size: 40px;
  padding: 5px 0;
  line-height: 1.2;
  letter-spacing: normal;
  font-weight: bold;
  color: white;

  ${MEDIA_QUERY_MD} {
    font-size: 33px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 30px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 22px;
  }
`;

const SearchItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0;

  ${MEDIA_QUERY_MD} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  ${MEDIA_QUERY_SM} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  ${MEDIA_QUERY_XS} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const SearchItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  margin-bottom: 50px;

  ${MEDIA_QUERY_SM} {
    margin-left: 30px;
  }

  ${MEDIA_QUERY_XS} {
    margin-right: 30px;
  }
`;

const InfoCardPhoto = styled.div`
  width: 190px;
  height: 190px;
  background: url(${DemoImage}) center / cover;
  text-decoration: none;
  position: relative;

  ${MEDIA_QUERY_SM} {
    width: 160px;
    height: 160px;
  }

  ${MEDIA_QUERY_XS} {
    width: 130px;
    height: 130px;
    border-radius: 50%;
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

const InfoCardTitle = styled.h2`
  color: white;
  margin: 10px 0 15px 0;
  font-weight: bold;
  line-height: 1.19;
  letter-spacing: 0.6px;
  text-decoration: none;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${MEDIA_QUERY_MD} {
    font-size: 20px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 18px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 20px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
`;

export default function Subcription() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <PlaylistContainer>
        <SearchPageBlock>
          <SearchPageTitle># 訂閱中的頻道</SearchPageTitle>
          <ManageChannelButton>管理我的頻道</ManageChannelButton>
        </SearchPageBlock>
        <SearchItemWrapper>
          <SearchItem>
            <InfoCardPhoto>
              <DeleteIcon>
                <DeleteButton />
              </DeleteIcon>
            </InfoCardPhoto>
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto>
              <DeleteIcon>
                <DeleteButton />
              </DeleteIcon>
            </InfoCardPhoto>
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto>
              <DeleteIcon>
                <DeleteButton />
              </DeleteIcon>
            </InfoCardPhoto>
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto>
              <DeleteIcon>
                <DeleteButton />
              </DeleteIcon>
            </InfoCardPhoto>
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto>
              <DeleteIcon>
                <DeleteButton />
              </DeleteIcon>
            </InfoCardPhoto>
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto>
              <DeleteIcon>
                <DeleteButton />
              </DeleteIcon>
            </InfoCardPhoto>
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto>
              <DeleteIcon>
                <DeleteButton />
              </DeleteIcon>
            </InfoCardPhoto>
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto>
              <DeleteIcon>
                <DeleteButton />
              </DeleteIcon>
            </InfoCardPhoto>
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
        </SearchItemWrapper>
      </PlaylistContainer>
      <MusicPlayer />
    </>
  );
}
