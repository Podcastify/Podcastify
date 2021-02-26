import { useState, useEffect } from "react";
import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";
import { Main, Div } from "../components/Main";
import Sidebar from "../components/Sidebar";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getSearchPodcast, getSearchEpisode } from "../WebAPI/listenAPI";
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

const SearchPageContainer = styled.section`
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

const InvalidKeyword = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  font-size: 30px;
  line-height: 2;
  letter-spacing: 2px;

  ${MEDIA_QUERY_XL} {
    font-size: 28px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 25px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 23px;
    margin-top: 10px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 18px;
    margin-top: 15px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 18px;
    margin-top: 15px;
  }
`;

const FirstLine = styled.div``;
const SecondLine = styled.div``;

const SearchItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0;

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

const SearchItem = styled.div`
  width: 28vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  margin-bottom: 50px;

  ${MEDIA_QUERY_XL} {
    width: 26vh;
    margin-left: 5px;
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

const InfoCardPhoto = styled(Link)`
  width: 300px;
  max-width: 100%;
  height: 280px;
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

const InfoCardTitle = styled(Link)`
  width: 90%;
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
    width: 80%;
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

function SearchList({ data }) {
  return (
    <SearchItem>
      <InfoCardPhoto to={`/channel/${data.id}`}>
        <img
          src={data.image}
          alt={`The Podcast titled: ${data.title_original}`}
        />
      </InfoCardPhoto>
      <InfoCardTitle to={`/channel/${data.id}`}>
        {data.title_original}
      </InfoCardTitle>
    </SearchItem>
  );
}

export default function Search() {
  const { userInfo } = useUser();
  const [searchPodcast, setSearchPodcast] = useState([]);
  const [searchEpisode, setSearchEpisode] = useState([]);
  const [keywordInvalid, setKeywordInvalid] = useState(false);
  const { keyword } = useParams();

  useEffect(() => {
    getSearchPodcast(keyword).then((podcast) => {
      let data = podcast.data.results;
      if (data.length) {
        // console.log(podcast);
        setKeywordInvalid(false);
        setSearchPodcast(data);
      } else {
        setSearchPodcast("");
        setKeywordInvalid(true);
      }
    });
    // getSearchEpisode(keyword).then((podcast) => {
    //   let data = podcast.data.results;
    //   if (data.length) {
    //     setKeywordInvalid(false);
    //     setSearchEpisode(data);
    //   } else {
    //     setSearchPodcast("");
    //     setKeywordInvalid(true);
    //   }
    // });
  }, [keyword]);

  return (
    <Container>
      <MainWrapper>
        <Div>
          <Sidebar />
          <SearchPageContainer>
            <SearchPageWrapper>
              <SearchPageTitle>
                # 搜尋有關“<PodcastName>{keyword}</PodcastName>”的頻道
              </SearchPageTitle>
              <SearchItemWrapper>
                {userInfo &&
                  searchPodcast &&
                  searchPodcast.map((data) => (
                    <SearchList key={data.id} data={data} />
                  ))}
                {/* {userInfo &&
                  searchEpisode &&
                  searchEpisode.map((data) => (
                    <SearchList key={data.id} data={data} />
                  ))} */}
                {keywordInvalid && (
                  <InvalidKeyword>
                    <FirstLine>找不到您要的資料</FirstLine>
                    <SecondLine>請再輸入一次關鍵字</SecondLine>
                  </InvalidKeyword>
                )}
              </SearchItemWrapper>
            </SearchPageWrapper>
          </SearchPageContainer>
        </Div>
      </MainWrapper>
    </Container>
  );
}
