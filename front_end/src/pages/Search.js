import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";
import { Main, Div } from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MusicPlayer from "../components/MusicPlayer";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import {
  getSearchInfo,
  getPodcastInfo,
  getEpisodeInfo,
} from "../WebAPI/listenAPI";
import { UserContext } from "../context/context";

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

const SearchPageContainer = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  height: fill-available;
  margin: 10px 40px;

  ${MEDIA_QUERY_XL} {
    width: 73%;
  }

  ${MEDIA_QUERY_MD} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 0px;
    margin: 0;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 0px;
    margin: 0;
  }

  ${MEDIA_QUERY_XS} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 0px;
    margin: 0;
    padding: 0 10px;
    margin-bottom: 90px;
  }
`;

const SearchPageWrapper = styled.div`
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
`;

const SearchPageTitle = styled.div`
  width: 100%;
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
  width: 100%;
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
    margin-left: 5px;
    margin-bottom: 0;
  }

  ${MEDIA_QUERY_XS} {
    margin-right: 5px;
    margin-bottom: 0;
  }
`;

const InfoCardPhoto = styled.div`
  width: 300px;
  max-width: 100%;
  height: 260px;
  text-decoration: none;

  ${MEDIA_QUERY_XL} {
    width: 200px;
    max-width: 100%;
    height: 200px;
  }

  ${MEDIA_QUERY_MD} {
    width: 180px;
    max-width: 100%;
    height: 180px;
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
    object-fit: cover;

    ${MEDIA_QUERY_XS} {
      border-radius: 50%;
    }
  }
`;

const InfoCardTitle = styled.h2`
  width: 90%;
  color: ${(props) => props.theme.white};
  margin: 20px 0 15px 0;
  font-weight: bold;
  letter-spacing: 0.6px;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${MEDIA_QUERY_SM} {
    font-size: 25px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 22px;
  }
`;

function SearchList({ podcast }) {
  return (
    <SearchItem>
      <InfoCardPhoto>
        <img src={podcast.image} alt="" />
      </InfoCardPhoto>
      <InfoCardTitle>{podcast.title_original}</InfoCardTitle>
    </SearchItem>
  );
}

export default function Search() {
  const { userInfo } = useContext(UserContext);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    getSearchInfo().then((data) => {
      setSearchList(data);
      console.log("data", data);
    });
  }, []);

  return (
    <Container>
      <Navbar />
      <MainWrapper>
        <Div>
          <Sidebar />
          <SearchPageContainer>
            <SearchPageWrapper>
              <SearchPageTitle>
                # 搜尋有關“<PodcastName>XXXXX</PodcastName>”的頻道
              </SearchPageTitle>
              <SearchItemWrapper>
                {searchList.map((data) => (
                  <SearchList podcast={data} />
                ))}
              </SearchItemWrapper>
            </SearchPageWrapper>
          </SearchPageContainer>
        </Div>
      </MainWrapper>
      <MusicPlayer />
    </Container>
  );
}
