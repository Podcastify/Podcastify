import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MusicPlayer from "../components/MusicPlayer";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
} from "../constants/breakpoints";

const SearchPageContainer = styled.div`
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

const PodcastName = styled.span`
  font-size: 40px;
  padding: 10px;
  line-height: 1.2;
  letter-spacing: normal;
  font-weight: bold;
  color: white;

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
    margin-right: 5px;
  }
`;

const InfoCardPhoto = styled.div`
  width: 190px;
  height: 190px;
  background: url(${DemoImage}) center / cover;
  text-decoration: none;

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

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SearchPageContainer>
        <SearchPageTitle>
          # 搜尋有關“<PodcastName>ＸＸＸＸＸ</PodcastName>”的頻道
        </SearchPageTitle>
        <SearchItemWrapper>
          <SearchItem>
            <InfoCardPhoto />
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto />
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto />
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto />
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto />
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto />
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto />
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
          <SearchItem>
            <InfoCardPhoto />
            <InfoCardTitle>頻道名稱</InfoCardTitle>
          </SearchItem>
        </SearchItemWrapper>
      </SearchPageContainer>
      <MusicPlayer />
    </>
  );
}
