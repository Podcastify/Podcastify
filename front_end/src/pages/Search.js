import { useState, useEffect } from "react";
import styled from "styled-components";
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
import { getSearchPodcast } from "../WebAPI/listenAPI";
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
    width: 100%;
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
`;

const SearchPageWrapper = styled.div`
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
`;

const SearchPageTitle = styled.h1`
  width: 100%;
  font-size: 42px;
  line-height: 1.2;
  letter-spacing: normal;
  font-weight: bold;
  margin: 10px 0;
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
    font-size: 22px;
  }
`;

const PodcastName = styled.span`
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
    margin: 20px 0;
  }
`;

const SearchItem = styled.div`
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
    width: 20vh;
    height: 28vh;
    margin: 0;
    padding: 0 10px;
  }
`;

const InfoCardPhoto = styled(Link)`
  position: relative;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      background: rgba(0, 0, 0, 0.2);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
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

const InfoCardTitle = styled(Link)`
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
  const { keyword } = useParams();

  useEffect(() => {
    getSearchPodcast(keyword).then((podcast) => {
      let data = podcast.data.results;
      if (data.length) {
        setSearchPodcast(data);
      } else {
        setSearchPodcast("");
      }
    });
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
                {userInfo && searchPodcast ? (
                  searchPodcast.map((data) => (
                    <SearchList key={data.id} data={data} />
                  ))
                ) : (
                  <InvalidKeyword>
                    <div>找不到您要的資料</div>
                    <div>請再輸入一次關鍵字</div>
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
