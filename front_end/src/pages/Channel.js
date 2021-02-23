import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";
import ChannelSidebar from "../components/ChannelSidebar";
import { Main, Div } from "../components/Main";
import Images from "../components/Images";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
} from "../constants/breakpoints";
import { getPodcastInfo } from "../WebAPI/listenAPI";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayList = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.white};
  overflow-y: scroll;

  // 在 chrome, Safari 上隱藏 scrollbar
  &::-webkit-scrollbar {
    display: none;
  }

  // 在 IE, Edge 上隱藏 scrollbar
  -ms-overflow-style: none;

  ${MEDIA_QUERY_XS} {
    overflow-y: unset;
  }

  ${MEDIA_QUERY_SM} {
    overflow-y: unset;
  }

  ${MEDIA_QUERY_MD} {
    border: none;
    margin: 30px;
    width: 65%;
    height: 70vh;
  }

  ${MEDIA_QUERY_LG} {
    border: none;
    margin: 0 30px;
    width: 72%;
    height: 70vh;
  }

  ${MEDIA_QUERY_XL} {
    border: none;
    margin: 0 53px;
    width: 75%;
    height: 70vh;
  }

  ${MEDIA_QUERY_XXL} {
    border: none;
    margin: 0 53px;
    height: 72vh;
    width: 75%;
  }
`;

const TitleHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.white};
  font-size: 30px;
  margin-left: 107.5px;
  padding: 14px 0;
  line-height: 1.2;
  letter-spacing: 3px;

  ${MEDIA_QUERY_XS} {
    display: none;
  }

  ${MEDIA_QUERY_SM} {
    display: none;
  }

  ${MEDIA_QUERY_MD} {
    display: none;
  }

  ${MEDIA_QUERY_LG} {
    margin-left: 68.5px;
    font-size: 18px;
    padding: 7px 0 10px 0;
  }

  ${MEDIA_QUERY_XL} {
    font-size: 24px;
  }
`;

const EpisodeTitleHeader = styled.div`
  width: 300px;
  margin-right: 20px;

  ${MEDIA_QUERY_XL} {
    width: 220px;
  }

  ${MEDIA_QUERY_LG} {
    width: 170px;
  }
`;

const EpisodeDescriptionHeader = styled.div`
  width: 450px;
  margin-right: 80px;

  ${MEDIA_QUERY_XL} {
    width: 350px;
    margin-right: 40px;
  }

  ${MEDIA_QUERY_LG} {
    width: 250px;
    margin-right: 20px;
  }
`;

const ChannelNameHeader = styled(EpisodeTitleHeader)`
  ${MEDIA_QUERY_LG} {
    width: 120px;
  }

  ${MEDIA_QUERY_XL} {
    width: 170px;
    margin-left: 0;
  }
`;

const Body = styled.div`
  width: 100%;
  border-top: 3px solid ${(props) => props.theme.white_opacity};
  overflow-y: scroll;

  // 在 chrome, Safari 上隱藏 scrollbar
  &::-webkit-scrollbar {
    display: none;
  }

  // 在 IE, Edge 上隱藏 scrollbar
  -ms-overflow-style: none;

  ${MEDIA_QUERY_XS} {
    overflow-y: unset;
  }

  ${MEDIA_QUERY_SM} {
    overflow-y: unset;
  }

  ${MEDIA_QUERY_MD} {
    border: none;
  }
`;

const Details = styled.details`
  width: 100%;

  &:first-child {
    margin-top: 11.5px;
  }

  ${(props) =>
    props.open &&
    `
    background-color: ${props.theme.orange};
    border-radius: 10px;
    `}
`;

const Summary = styled.summary`
  // 隱藏 summary 的三角形
  &::-webkit-details-marker {
    display: none;
  }

  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 3.5px 0px;
  padding: 13.5px 10px;
  border-radius: 12px;
  outline: none;
  ${(props) =>
    props.open &&
    `
    background: none;
  `}

  &:active {
    background-color: ${(props) => props.theme.orange};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.orange_opacity};

    svg {
      display: block;
    }
  }

  ${MEDIA_QUERY_XL} {
    padding: 7px 10px;
  }

  ${MEDIA_QUERY_LG} {
    padding: 7px 10px;
  }

  ${MEDIA_QUERY_MD} {
    background-color: ${(props) => props.theme.white_opacity_10};
    ${(props) =>
      props.open &&
      `
    background: none;
  `}
  }

  ${MEDIA_QUERY_SM} {
    background-color: ${(props) => props.theme.white_opacity_10};
    ${(props) =>
      props.open &&
      `
    background: none;
  `}
  }

  ${MEDIA_QUERY_XS} {
    background-color: ${(props) => props.theme.white_opacity_10};
    ${(props) =>
      props.open &&
      `
    background: none;
  `}
  }
`;

const PlayBtnControl = styled.div`
  height: 55px;
  cursor: pointer;

  svg {
    display: none;
    width: 55px;
    height: 55px;
  }

  ${MEDIA_QUERY_LG} {
    height: 35px;

    svg {
      width: 35px;
      height: 35px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      display: block;
    }
  }

  ${MEDIA_QUERY_SM} {
    svg {
      display: block;
    }
  }

  ${MEDIA_QUERY_XS} {
    svg {
      display: block;
    }
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 107.5px;
  font-size: 26px;
  letter-spacing: 0.5px;
  line-height: 1.2;
  /* margin-left: 13.5px; */
  color: ${(props) => props.theme.white};
  width: 90%;
  min-height: 58px;

  ${MEDIA_QUERY_XL} {
    font-size: 20px;
  }

  ${MEDIA_QUERY_LG} {
    left: 68.5px;
    font-size: 16px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: unset;
    margin-left: 13.5px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: unset;
    margin-left: 13.5px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: unset;
    margin-left: 13.5px;
  }

  ${MEDIA_QUERY_XS} {
    width: 80%;
  }
`;

const EpisodeTitle = styled.div`
  width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${MEDIA_QUERY_LG} {
    width: 170px;
    margin: 0 20px 0 0;
  }

  ${MEDIA_QUERY_XL} {
    width: 220px;
    margin: 0 20px 0 0;
  }

  ${MEDIA_QUERY_XXL} {
    width: 300px;
    margin: 0 20px 0 0;
  }
`;

const EpisodeDescription = styled.div`
  display: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${MEDIA_QUERY_LG} {
    display: block;
    margin-right: 20px;
    width: 250px;
  }

  ${MEDIA_QUERY_XL} {
    display: block;
    width: 350px;
    margin-right: 40px;
  }

  ${MEDIA_QUERY_XXL} {
    display: block;
    width: 450px;
    margin-right: 80px;
  }
`;

const ChannelName = styled(EpisodeTitle)`
  ${MEDIA_QUERY_LG} {
    width: 120px;
  }

  ${MEDIA_QUERY_XL} {
    width: 170px;
    margin-left: 0;
  }
`;

const AddToPlayListControl = styled.div`
  position: absolute;
  right: 20px;

  svg {
    display: none;
    width: 25px;
    height: 25px;
  }

  ${MEDIA_QUERY_MD} {
    display: none;
  }

  ${MEDIA_QUERY_SM} {
    display: none;
  }

  ${MEDIA_QUERY_XS} {
    display: none;
  }
`;

const DetailsBlock = styled.div`
  padding: 8px 30px;
  background-color: ${(props) => props.theme.orange};
  position: relative;
  border-radius: 10px;

  ${MEDIA_QUERY_SM} {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 95%;
      border-top: 2px solid ${(props) => props.theme.white};
    }
  }

  ${MEDIA_QUERY_XS} {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 95%;
      border-top: 2px solid ${(props) => props.theme.white};
    }
  }
`;

const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.5px;
`;

const DetailsEpisodeName = styled.div`
  color: ${(props) => props.theme.white};
  font-weight: bold;
  line-height: 1.2;

  ${MEDIA_QUERY_LG} {
    font-size: 20px;
  }

  ${MEDIA_QUERY_XL} {
    font-size: 22px;
  }

  ${MEDIA_QUERY_XXL} {
    font-size: 32px;
  }
`;

const DetailsDurationTime = styled.div`
  color: ${(props) => props.theme.white_opacity};

  ${MEDIA_QUERY_LG} {
    font-size: 16px;
  }

  ${MEDIA_QUERY_XL} {
    font-size: 20px;
  }

  ${MEDIA_QUERY_XXL} {
    font-size: 25px;
  }
`;

const EpisodeDetails = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.5px;
  word-break: break-word;
  white-space: pre-line;
  margin: 15px 0;

  ${MEDIA_QUERY_LG} {
    font-size: 16px;
  }

  ${MEDIA_QUERY_XXL} {
    font-size: 25px;
    line-height: 1.4;
  }
`;

const AddToPlayList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7.5px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.22);
  cursor: pointer;

  ${MEDIA_QUERY_LG} {
    display: none;
  }

  ${MEDIA_QUERY_XL} {
    display: none;
  }

  ${MEDIA_QUERY_XXL} {
    display: none;
  }
`;

const AddControl = styled.div`
  height: 18.5px;
  svg {
    width: 18.5px;
    height: 18.5px;
  }

  margin-right: 9px;
`;

const AddText = styled.div`
  color: ${(props) => props.theme.white};
`;

const CollapseControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;

  svg {
    width: 28px;
    height: 28px;
  }

  ${MEDIA_QUERY_MD}, ${MEDIA_QUERY_LG}, ${MEDIA_QUERY_XXL} {
    margin: 12px 0 10px 0;
  }

  ${MEDIA_QUERY_LG} {
    margin: 12px 0 10px 0;
    svg {
      width: 25px;
      height: 25px;
    }
  }

  ${MEDIA_QUERY_XL} {
    margin: 12px 0 10px 0;
  }

  ${MEDIA_QUERY_XXL} {
    margin: 12px 0 10px 0;
  }
`;

export default function Channel() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const { podcastId } = useParams();
  const [podcastInfo, setPodcastInfo] = useState([]);

  useEffect(() => {
    getPodcastInfo(podcastId).then((response) => {
      console.log(response);
      setPodcastInfo(response.data);
    });
  }, [podcastId]);

  return (
    <Container>
      <Navbar />
      <Main>
        <Div>
          <ChannelSidebar podcastInfo={podcastInfo} />
          <PlayList>
            <TitleHeader>
              <EpisodeTitleHeader>單元名稱</EpisodeTitleHeader>
              <EpisodeDescriptionHeader>單元描述</EpisodeDescriptionHeader>
              <ChannelNameHeader>頻道名稱</ChannelNameHeader>
            </TitleHeader>
            <Body>
              <Details open={isOpen} onClick={onToggle}>
                <Summary open={isOpen}>
                  <PlayBtnControl>
                    <Images.PodcastPlayBtn />
                  </PlayBtnControl>
                  <Text>
                    <EpisodeTitle>EP.1 職場甘苦談</EpisodeTitle>
                    <EpisodeDescription>
                      夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    </EpisodeDescription>
                    <ChannelName>社畜日記</ChannelName>
                  </Text>
                  <AddToPlayListControl>
                    <Images.AddToPlayListBtn />
                  </AddToPlayListControl>
                </Summary>
                <DetailsBlock>
                  <DetailsHeader>
                    <DetailsEpisodeName>EP.1 職場甘苦談</DetailsEpisodeName>
                    <DetailsDurationTime>26 分鐘</DetailsDurationTime>
                  </DetailsHeader>
                  <EpisodeDetails>
                    夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    <br />
                    ★☆【新東陽】強打新品-市面上唯一的【麻婆豆腐罐頭】
                    <br />
                    ☆★方便即食、微辣風味～同時吃的到豆腐及豬肉！
                  </EpisodeDetails>
                  <AddToPlayList>
                    <AddControl>
                      <Images.AddToPlayListBtn />
                    </AddControl>
                    <AddText>加入播放清單</AddText>
                  </AddToPlayList>
                  <CollapseControl onClick={onToggle}>
                    <Images.CollapseBtn />
                  </CollapseControl>
                </DetailsBlock>
              </Details>
              <Details>
                <Summary>
                  <PlayBtnControl>
                    <Images.PodcastPlayBtn />
                  </PlayBtnControl>
                  <Text>
                    <EpisodeTitle>EP.1 職場甘苦談222222ssssssss</EpisodeTitle>
                    <EpisodeDescription>
                      30歲上班族的心底牢騷大噴發！
                    </EpisodeDescription>
                    <ChannelName>社畜日記sssssssssssssssssss</ChannelName>
                  </Text>
                  <AddToPlayListControl>
                    <Images.AddToPlayListBtn />
                  </AddToPlayListControl>
                </Summary>
                <DetailsBlock>
                  <DetailsHeader>
                    <DetailsEpisodeName>EP.1 職場甘苦談</DetailsEpisodeName>
                    <DetailsDurationTime>26 分鐘</DetailsDurationTime>
                  </DetailsHeader>
                  <EpisodeDetails>
                    夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    <br />
                    ★☆【新東陽】強打新品-市面上唯一的【麻婆豆腐罐頭】
                    <br />
                    ☆★方便即食、微辣風味～同時吃的到豆腐及豬肉！
                  </EpisodeDetails>
                  <AddToPlayList>
                    <AddControl>
                      <Images.AddToPlayListBtn />
                    </AddControl>
                    <AddText>加入播放清單</AddText>
                  </AddToPlayList>
                  <CollapseControl>
                    <Images.CollapseBtn />
                  </CollapseControl>
                </DetailsBlock>
              </Details>
              <Details>
                <Summary>
                  <PlayBtnControl>
                    <Images.PodcastPlayBtn />
                  </PlayBtnControl>
                  <Text>
                    <EpisodeTitle>EP.1 職場甘苦談222222ssssssss</EpisodeTitle>
                    <EpisodeDescription>
                      30歲上班族的心底牢騷大噴發！
                    </EpisodeDescription>
                    <ChannelName>社畜日記sssssssssssssssssss</ChannelName>
                  </Text>
                  <AddToPlayListControl>
                    <Images.AddToPlayListBtn />
                  </AddToPlayListControl>
                </Summary>
                <DetailsBlock>
                  <DetailsHeader>
                    <DetailsEpisodeName>EP.1 職場甘苦談</DetailsEpisodeName>
                    <DetailsDurationTime>26 分鐘</DetailsDurationTime>
                  </DetailsHeader>
                  <EpisodeDetails>
                    夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    <br />
                    ★☆【新東陽】強打新品-市面上唯一的【麻婆豆腐罐頭】
                    <br />
                    ☆★方便即食、微辣風味～同時吃的到豆腐及豬肉！
                  </EpisodeDetails>
                  <AddToPlayList>
                    <AddControl>
                      <Images.AddToPlayListBtn />
                    </AddControl>
                    <AddText>加入播放清單</AddText>
                  </AddToPlayList>
                  <CollapseControl>
                    <Images.CollapseBtn />
                  </CollapseControl>
                </DetailsBlock>
              </Details>
              <Details>
                <Summary>
                  <PlayBtnControl>
                    <Images.PodcastPlayBtn />
                  </PlayBtnControl>
                  <Text>
                    <EpisodeTitle>EP.1 職場甘苦談222222ssssssss</EpisodeTitle>
                    <EpisodeDescription>
                      30歲上班族的心底牢騷大噴發！
                    </EpisodeDescription>
                    <ChannelName>社畜日記sssssssssssssssssss</ChannelName>
                  </Text>
                  <AddToPlayListControl>
                    <Images.AddToPlayListBtn />
                  </AddToPlayListControl>
                </Summary>
                <DetailsBlock>
                  <DetailsHeader>
                    <DetailsEpisodeName>EP.1 職場甘苦談</DetailsEpisodeName>
                    <DetailsDurationTime>26 分鐘</DetailsDurationTime>
                  </DetailsHeader>
                  <EpisodeDetails>
                    夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    <br />
                    ★☆【新東陽】強打新品-市面上唯一的【麻婆豆腐罐頭】
                    <br />
                    ☆★方便即食、微辣風味～同時吃的到豆腐及豬肉！
                  </EpisodeDetails>
                  <AddToPlayList>
                    <AddControl>
                      <Images.AddToPlayListBtn />
                    </AddControl>
                    <AddText>加入播放清單</AddText>
                  </AddToPlayList>
                  <CollapseControl>
                    <Images.CollapseBtn />
                  </CollapseControl>
                </DetailsBlock>
              </Details>
              <Details>
                <Summary>
                  <PlayBtnControl>
                    <Images.PodcastPlayBtn />
                  </PlayBtnControl>
                  <Text>
                    <EpisodeTitle>EP.1 職場甘苦談222222ssssssss</EpisodeTitle>
                    <EpisodeDescription>
                      30歲上班族的心底牢騷大噴發！
                    </EpisodeDescription>
                    <ChannelName>社畜日記sssssssssssssssssss</ChannelName>
                  </Text>
                  <AddToPlayListControl>
                    <Images.AddToPlayListBtn />
                  </AddToPlayListControl>
                </Summary>
                <DetailsBlock>
                  <DetailsHeader>
                    <DetailsEpisodeName>EP.1 職場甘苦談</DetailsEpisodeName>
                    <DetailsDurationTime>26 分鐘</DetailsDurationTime>
                  </DetailsHeader>
                  <EpisodeDetails>
                    夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    <br />
                    ★☆【新東陽】強打新品-市面上唯一的【麻婆豆腐罐頭】
                    <br />
                    ☆★方便即食、微辣風味～同時吃的到豆腐及豬肉！
                  </EpisodeDetails>
                  <AddToPlayList>
                    <AddControl>
                      <Images.AddToPlayListBtn />
                    </AddControl>
                    <AddText>加入播放清單</AddText>
                  </AddToPlayList>
                  <CollapseControl>
                    <Images.CollapseBtn />
                  </CollapseControl>
                </DetailsBlock>
              </Details>
              <Details>
                <Summary>
                  <PlayBtnControl>
                    <Images.PodcastPlayBtn />
                  </PlayBtnControl>
                  <Text>
                    <EpisodeTitle>EP.1 職場甘苦談222222ssssssss</EpisodeTitle>
                    <EpisodeDescription>
                      30歲上班族的心底牢騷大噴發！
                    </EpisodeDescription>
                    <ChannelName>社畜日記sssssssssssssssssss</ChannelName>
                  </Text>
                  <AddToPlayListControl>
                    <Images.AddToPlayListBtn />
                  </AddToPlayListControl>
                </Summary>
                <DetailsBlock>
                  <DetailsHeader>
                    <DetailsEpisodeName>EP.1 職場甘苦談</DetailsEpisodeName>
                    <DetailsDurationTime>26 分鐘</DetailsDurationTime>
                  </DetailsHeader>
                  <EpisodeDetails>
                    夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    <br />
                    ★☆【新東陽】強打新品-市面上唯一的【麻婆豆腐罐頭】
                    <br />
                    ☆★方便即食、微辣風味～同時吃的到豆腐及豬肉！
                  </EpisodeDetails>
                  <AddToPlayList>
                    <AddControl>
                      <Images.AddToPlayListBtn />
                    </AddControl>
                    <AddText>加入播放清單</AddText>
                  </AddToPlayList>
                  <CollapseControl>
                    <Images.CollapseBtn />
                  </CollapseControl>
                </DetailsBlock>
              </Details>
              <Details>
                <Summary>
                  <PlayBtnControl>
                    <Images.PodcastPlayBtn />
                  </PlayBtnControl>
                  <Text>
                    <EpisodeTitle>EP.1 職場甘苦談222222ssssssss</EpisodeTitle>
                    <EpisodeDescription>
                      30歲上班族的心底牢騷大噴發！
                    </EpisodeDescription>
                    <ChannelName>社畜日記sssssssssssssssssss</ChannelName>
                  </Text>
                  <AddToPlayListControl>
                    <Images.AddToPlayListBtn />
                  </AddToPlayListControl>
                </Summary>
                <DetailsBlock>
                  <DetailsHeader>
                    <DetailsEpisodeName>EP.1 職場甘苦談</DetailsEpisodeName>
                    <DetailsDurationTime>26 分鐘</DetailsDurationTime>
                  </DetailsHeader>
                  <EpisodeDetails>
                    夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    <br />
                    ★☆【新東陽】強打新品-市面上唯一的【麻婆豆腐罐頭】
                    <br />
                    ☆★方便即食、微辣風味～同時吃的到豆腐及豬肉！
                  </EpisodeDetails>
                  <AddToPlayList>
                    <AddControl>
                      <Images.AddToPlayListBtn />
                    </AddControl>
                    <AddText>加入播放清單</AddText>
                  </AddToPlayList>
                  <CollapseControl>
                    <Images.CollapseBtn />
                  </CollapseControl>
                </DetailsBlock>
              </Details>
              <Details>
                <Summary>
                  <PlayBtnControl>
                    <Images.PodcastPlayBtn />
                  </PlayBtnControl>
                  <Text>
                    <EpisodeTitle>EP.1 職場甘苦談222222ssssssss</EpisodeTitle>
                    <EpisodeDescription>
                      30歲上班族的心底牢騷大噴發！
                    </EpisodeDescription>
                    <ChannelName>社畜日記sssssssssssssssssss</ChannelName>
                  </Text>
                  <AddToPlayListControl>
                    <Images.AddToPlayListBtn />
                  </AddToPlayListControl>
                </Summary>
                <DetailsBlock>
                  <DetailsHeader>
                    <DetailsEpisodeName>EP.1 職場甘苦談</DetailsEpisodeName>
                    <DetailsDurationTime>26 分鐘</DetailsDurationTime>
                  </DetailsHeader>
                  <EpisodeDetails>
                    夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    <br />
                    ★☆【新東陽】強打新品-市面上唯一的【麻婆豆腐罐頭】
                    <br />
                    ☆★方便即食、微辣風味～同時吃的到豆腐及豬肉！
                  </EpisodeDetails>
                  <AddToPlayList>
                    <AddControl>
                      <Images.AddToPlayListBtn />
                    </AddControl>
                    <AddText>加入播放清單</AddText>
                  </AddToPlayList>
                  <CollapseControl>
                    <Images.CollapseBtn />
                  </CollapseControl>
                </DetailsBlock>
              </Details>
              <Details>
                <Summary>
                  <PlayBtnControl>
                    <Images.PodcastPlayBtn />
                  </PlayBtnControl>
                  <Text>
                    <EpisodeTitle>EP.1 職場甘苦談222222ssssssss</EpisodeTitle>
                    <EpisodeDescription>
                      30歲上班族的心底牢騷大噴發！
                    </EpisodeDescription>
                    <ChannelName>社畜日記sssssssssssssssssss</ChannelName>
                  </Text>
                  <AddToPlayListControl>
                    <Images.AddToPlayListBtn />
                  </AddToPlayListControl>
                </Summary>
                <DetailsBlock>
                  <DetailsHeader>
                    <DetailsEpisodeName>EP.1 職場甘苦談</DetailsEpisodeName>
                    <DetailsDurationTime>26 分鐘</DetailsDurationTime>
                  </DetailsHeader>
                  <EpisodeDetails>
                    夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    <br />
                    ★☆【新東陽】強打新品-市面上唯一的【麻婆豆腐罐頭】
                    <br />
                    ☆★方便即食、微辣風味～同時吃的到豆腐及豬肉！
                  </EpisodeDetails>
                  <AddToPlayList>
                    <AddControl>
                      <Images.AddToPlayListBtn />
                    </AddControl>
                    <AddText>加入播放清單</AddText>
                  </AddToPlayList>
                  <CollapseControl>
                    <Images.CollapseBtn />
                  </CollapseControl>
                </DetailsBlock>
              </Details>
              <Details>
                <Summary>
                  <PlayBtnControl>
                    <Images.PodcastPlayBtn />
                  </PlayBtnControl>
                  <Text>
                    <EpisodeTitle>EP.1 職場甘苦談222222ssssssss</EpisodeTitle>
                    <EpisodeDescription>
                      30歲上班族的心底牢騷大噴發！
                    </EpisodeDescription>
                    <ChannelName>社畜日記sssssssssssssssssss</ChannelName>
                  </Text>
                  <AddToPlayListControl>
                    <Images.AddToPlayListBtn />
                  </AddToPlayListControl>
                </Summary>
                <DetailsBlock>
                  <DetailsHeader>
                    <DetailsEpisodeName>EP.1 職場甘苦談</DetailsEpisodeName>
                    <DetailsDurationTime>26 分鐘</DetailsDurationTime>
                  </DetailsHeader>
                  <EpisodeDetails>
                    夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    <br />
                    ★☆【新東陽】強打新品-市面上唯一的【麻婆豆腐罐頭】
                    <br />
                    ☆★方便即食、微辣風味～同時吃的到豆腐及豬肉！
                  </EpisodeDetails>
                  <AddToPlayList>
                    <AddControl>
                      <Images.AddToPlayListBtn />
                    </AddControl>
                    <AddText>加入播放清單</AddText>
                  </AddToPlayList>
                  <CollapseControl>
                    <Images.CollapseBtn />
                  </CollapseControl>
                </DetailsBlock>
              </Details>
              <Details>
                <Summary>
                  <PlayBtnControl>
                    <Images.PodcastPlayBtn />
                  </PlayBtnControl>
                  <Text>
                    <EpisodeTitle>EP.1 職場甘苦談222222ssssssss</EpisodeTitle>
                    <EpisodeDescription>
                      30歲上班族的心底牢騷大噴發！
                    </EpisodeDescription>
                    <ChannelName>社畜日記sssssssssssssssssss</ChannelName>
                  </Text>
                  <AddToPlayListControl>
                    <Images.AddToPlayListBtn />
                  </AddToPlayListControl>
                </Summary>
                <DetailsBlock>
                  <DetailsHeader>
                    <DetailsEpisodeName>EP.1 職場甘苦談</DetailsEpisodeName>
                    <DetailsDurationTime>26 分鐘</DetailsDurationTime>
                  </DetailsHeader>
                  <EpisodeDetails>
                    夏子跟家權今天來百靈果跟我們聊聊神祕的樂團珂拉琪是怎麽開始的、爲什麽可以這麽厲害、還有未來的打算
                    <br />
                    ★☆【新東陽】強打新品-市面上唯一的【麻婆豆腐罐頭】
                    <br />
                    ☆★方便即食、微辣風味～同時吃的到豆腐及豬肉！
                  </EpisodeDetails>
                  <AddToPlayList>
                    <AddControl>
                      <Images.AddToPlayListBtn />
                    </AddControl>
                    <AddText>加入播放清單</AddText>
                  </AddToPlayList>
                  <CollapseControl>
                    <Images.CollapseBtn />
                  </CollapseControl>
                </DetailsBlock>
              </Details>
            </Body>
          </PlayList>
        </Div>
      </Main>
      <MusicPlayer />
    </Container>
  );
}
