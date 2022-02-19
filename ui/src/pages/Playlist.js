import Sidebar from "../components/Sidebar";
import { Main, Div } from "../components/Main";
import Images from "../components/Images";
import PlaylistImage from "../images/My_Playlist_2x.png";
import styled from "styled-components";
import { useCallback, useState, useEffect } from "react";
import useUser from "../hooks/useUser";
import useCurrentEpisode from "../hooks/useCurrentEpisode";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
} from "../constants/breakpoints";
import { deleteEpisodeFromPlaylist } from "../WebAPI/me";
import { handlePlaylistPlayPauseBtn } from "../utils";
import PopUpForm from "../components/PopUpForm";
import PopUpMessage from "../components/PopUpMessage";
import usePageStatus from "../hooks/usePageStatus";
import useAlertMessage from "../hooks/useAlertMessage";
import { BtnContainer } from "../components/ButtonGroup";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaylistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fill-available;
  width: 75%;
  height: 72vh;
  margin: 0 40px;

  ${MEDIA_QUERY_XL} {
    height: 70vh;
  }

  ${MEDIA_QUERY_LG} {
    height: 69vh;
  }

  ${MEDIA_QUERY_MD} {
    width: 100%;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
  }

  ${MEDIA_QUERY_XS} {
    width: 100%;
  }
`;
const PlaylistHeader = styled.div`
  display: flex;

  ${MEDIA_QUERY_SM} {
    flex-direction: column;
    align-items: center;
  }

  ${MEDIA_QUERY_XS} {
    flex-direction: column;
    align-items: center;
  }
`;
const Photo = styled.div`
  width: 300px;
  height: 260px;
  background: url(${PlaylistImage}) center / cover;
  text-decoration: none;

  ${MEDIA_QUERY_XL} {
    width: 230px;
    height: 200px;
  }

  ${MEDIA_QUERY_LG} {
    width: 160px;
    height: 140px;
  }

  ${MEDIA_QUERY_MD} {
    width: 180px;
    height: 160px;
  }

  ${MEDIA_QUERY_SM} {
    width: 230px;
    height: 200px;
  }

  ${MEDIA_QUERY_XS} {
    width: 230px;
    height: 200px;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 32px;

  ${MEDIA_QUERY_SM} {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 23px 0 28px 0;
  }

  ${MEDIA_QUERY_XS} {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 0;
    margin: 23px 0 28.5px 0;
  }
`;
const TitleText = styled.div`
  color: ${(props) => props.theme.white};
  line-height: 1.2;

  ${MEDIA_QUERY_SM} {
    margin-right: 30px;
  }

  ${MEDIA_QUERY_XS} {
    margin-right: 30px;
  }
`;
const PlaylistName = styled.div`
  font-size: 52px;
  word-break: break-word;

  ${MEDIA_QUERY_XL} {
    font-size: 36px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 30px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 30px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 25px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 25px;
  }
`;
const Subtitle = styled.div`
  font-size: 26px;
  line-height: 20px;
  word-break: break-word;

  ${MEDIA_QUERY_XL} {
    font-size: 18px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 15px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 14px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 15px;
  }
`;
const Buttons = styled.div`
  margin-top: 40px;
  display: flex;

  ${MEDIA_QUERY_XL} {
    margin-top: 30px;
  }

  ${MEDIA_QUERY_LG} {
    margin-top: 20px;
  }

  ${MEDIA_QUERY_MD} {
    margin-top: 20px;
  }

  ${MEDIA_QUERY_SM} {
    margin-top: 0;
  }

  ${MEDIA_QUERY_XS} {
    margin-top: 0;
  }
`;
const PlaylistPlayBtnControl = styled.div`
  svg {
    width: 55px;
    height: 55px;
  }
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    g {
      opacity: 1;
    }
  }

  ${MEDIA_QUERY_XL} {
    svg {
      width: 40px;
      height: 40px;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 30px;
      height: 30px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 40px;
      height: 40px;
    }
  }

  ${MEDIA_QUERY_SM} {
    svg {
      width: 45px;
      height: 45px;
    }
    margin-right: 16px;
  }

  ${MEDIA_QUERY_XS} {
    svg {
      width: 45px;
      height: 45px;
    }
    margin-right: 16px;
  }
`;
const RenamePlaylistBtnControl = styled(PlaylistPlayBtnControl)`
  &:hover {
    circle {
      opacity: 1;
    }
  }

  ${MEDIA_QUERY_SM} {
    margin-right: 0;
  }

  ${MEDIA_QUERY_XS} {
    margin-right: 0;
  }
`;

const PlayList = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.white};

  ${MEDIA_QUERY_MD} {
    height: 70vh;
    margin-top: 30px;
  }

  ${MEDIA_QUERY_LG} {
    border: none;

    height: 70vh;
  }

  ${MEDIA_QUERY_XL} {
    border: none;
    height: 70vh;
  }

  ${MEDIA_QUERY_XXL} {
    border: none;
    height: 72vh;
  }
`;

const TitleHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.white};
  font-size: 30px;
  margin: 20px 0 0 107.5px;
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
    margin: 0 0 0 58.5px;
    font-size: 18px;
  }

  ${MEDIA_QUERY_XL} {
    font-size: 24px;
    margin-left: 88.5px;
  }
`;

const EpisodeTitleHeader = styled.div`
  width: 300px;
  margin-right: 20px;

  ${MEDIA_QUERY_XL} {
    width: 190px;
  }

  ${MEDIA_QUERY_LG} {
    width: 150px;
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
    width: 100px;
  }

  ${MEDIA_QUERY_XL} {
    width: 160px;
    margin-left: 0;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 70%;
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
    height: 88%;
  }

  ${MEDIA_QUERY_LG} {
    height: 56%;
  }

  ${MEDIA_QUERY_XL} {
    height: 63%;
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

  ${MEDIA_QUERY_MD} {
    &:first-child {
      margin-top: 20px;
    }
  }
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
    background-color: rgba(256, 256, 256, 0.1);
    ${(props) =>
      props.open &&
      `
      background: none;
    `}
    padding: 13.5px 25px;
  }

  ${MEDIA_QUERY_SM} {
    background-color: rgba(256, 256, 256, 0.1);
    ${(props) =>
      props.open &&
      `
    background: none;
  `}
  }

  ${MEDIA_QUERY_XS} {
    background-color: rgba(256, 256, 256, 0.1);
    ${(props) =>
      props.open &&
      `
    background: none;
  `}
  }
`;

const PlayPauseBtnControl = styled.div``;

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
    height: 45px;
    svg {
      display: block;
      width: 45px;
      height: 45px;
    }
  }

  ${MEDIA_QUERY_XS} {
    height: 45px;
    svg {
      display: block;
      width: 45px;
      height: 45px;
    }
  }
`;

const PauseBtnControl = styled(PlayBtnControl)``;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 107.5px;
  font-size: 25px;
  letter-spacing: 0.5px;
  line-height: 1.2;
  color: ${(props) => props.theme.white};
  width: 90%;
  min-height: 58px;

  ${MEDIA_QUERY_XL} {
    left: 88.5px;
    font-size: 20px;
  }

  ${MEDIA_QUERY_LG} {
    left: 58.5px;
    font-size: 17px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: unset;
    margin-left: 25px;
  }

  ${MEDIA_QUERY_XS}, ${MEDIA_QUERY_SM} {
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
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${MEDIA_QUERY_MD} {
    width: 93%;
  }

  ${MEDIA_QUERY_LG} {
    width: 150px;
    margin: 0 20px 0 0;
  }

  ${MEDIA_QUERY_XL} {
    width: 190px;
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
    width: 100px;
  }

  ${MEDIA_QUERY_XL} {
    width: 160px;
    margin-left: 0;
  }
`;

const DeleteBtnControl = styled.div`
  position: absolute;
  right: 20px;

  svg {
    display: none;
    width: 25px;
    height: 25px;
  }
`;

const RemindBlock = styled.div`
  color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  ${MEDIA_QUERY_SM} {
    margin-top: 17px;
  }

  ${MEDIA_QUERY_XS} {
    margin-top: 15px;
  }
`;

const RemindText = styled.div`
  font-size: 25px;
  letter-spacing: 1.3px;
  line-height: 25px;

  ${MEDIA_QUERY_XL} {
    font-size: 20px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 15px;
  }
`;

const AddPlaylist = styled(BtnContainer)`
  border-radius: 10px;
  border: 1.5px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  background-color: unset;
  margin-top: 15px;
  padding: 10px;
  outline: none;

  &:hover {
    border: 1.5px solid ${(props) => props.theme.hover_color};
  }

  &:active {
    border: 1.5px solid ${(props) => props.theme.click_color};
  }

  ${MEDIA_QUERY_XXL} {
    margin-top: 30px;
    padding: 20px;
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

function EpisodeInfoDetails({
  episodeInfo,
  setShowPopUp,
  setPopUpText,
  setBtnUsage,
  confirmed,
  setConfirmed,
}) {
  const { userPlaylists, setUserPlaylists } = useUser();
  const { currentEpisode, setCurrentEpisode } = useCurrentEpisode();
  const { isLoading, setIsLoading } = usePageStatus();
  const { setAlert, setAlertText } = useAlertMessage();
  const [deleteEpisodeId, setDeleteEpisodeId] = useState(null);

  const deleteEpisode = useCallback(
    async (episodeId) => {
      if (isLoading) return;
      setIsLoading(true);

      let response;
      try {
        response = await deleteEpisodeFromPlaylist(
          userPlaylists[0].id,
          episodeId
        );
      } catch (err) {
        setIsLoading(false);
        setAlertText(String(err));
        setAlert(true);
        return;
      }

      if (!response.ok) {
        setIsLoading(false);
        setAlertText(response.errorMessage);
        setAlert(true);
        return;
      }

      const newPlaylist = userPlaylists.map((playlist) => {
        let { Episodes, ...rest } = playlist;
        Episodes = Episodes.filter((ep) => ep.id !== episodeId);
        return { Episodes, ...rest };
      });

      setUserPlaylists(newPlaylist);
      setConfirmed(false);
      setIsLoading(false);
    },
    [
      userPlaylists,
      setUserPlaylists,
      setIsLoading,
      isLoading,
      setAlert,
      setAlertText,
      setConfirmed,
    ]
  );

  const handleDeleteIconClick = async (e) => {
    e.preventDefault();
    setDeleteEpisodeId(episodeInfo.id);
    setPopUpText("確定將此單元從播放清單中刪除嗎？");
    setBtnUsage("deleteEpisode");
    setShowPopUp(true);
  };

  useEffect(() => {
    if (!confirmed || !deleteEpisodeId) return;

    deleteEpisode(deleteEpisodeId);
    setDeleteEpisodeId(null);
    setConfirmed(false);
  }, [confirmed, deleteEpisode, setConfirmed, deleteEpisodeId]);

  const handlePlayPauseBtn = () => {
    handlePlaylistPlayPauseBtn(
      episodeInfo,
      userPlaylists,
      currentEpisode,
      setCurrentEpisode
    );
  };

  return (
    <Details>
      <Summary>
        <PlayPauseBtnControl onClick={handlePlayPauseBtn}>
          {currentEpisode.id === episodeInfo.id ? (
            currentEpisode.playing ? (
              <PauseBtnControl>
                <Images.PodcastPauseBtn />
              </PauseBtnControl>
            ) : (
              <PlayBtnControl>
                <Images.PodcastPlayBtn />
              </PlayBtnControl>
            )
          ) : (
            <PlayBtnControl>
              <Images.PodcastPlayBtn />
            </PlayBtnControl>
          )}
        </PlayPauseBtnControl>
        <Text>
          <EpisodeTitle>{episodeInfo.title}</EpisodeTitle>
          <EpisodeDescription
            dangerouslySetInnerHTML={
              episodeInfo.description
                ? { __html: episodeInfo.description.replace(/<[^>]+>/g, "") }
                : { __html: "沒東西" }
            }
          ></EpisodeDescription>
          <ChannelName>
            {episodeInfo.podcast ? episodeInfo.podcast.title : "社畜日記"}
          </ChannelName>
        </Text>
        <DeleteBtnControl onClick={handleDeleteIconClick}>
          <Images.DeleteBtn />
        </DeleteBtnControl>
      </Summary>
    </Details>
  );
}

export default function Playlist() {
  const { userPlaylists, userInfo } = useUser();
  const { setCurrentEpisode } = useCurrentEpisode();
  const [showForm, setShowForm] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpText, setPopUpText] = useState(null);
  const [btnUsage, setBtnUsage] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [formTitle, setFormTitle] = useState(null);
  const { setAlert, setAlertText } = useAlertMessage();

  const handlePlayWholePlaylist = () => {
    // 非會員
    if (!userInfo) {
      setAlertText("登入後即可播放");
      setAlert(true);
      return;
    }

    // 如果播放清單是空的
    if (userPlaylists.length === 0) {
      setBtnUsage(null);
      setPopUpText("請先新增播放清單");
      setShowPopUp(true);
      return;
    }

    const episode = userPlaylists[0].Episodes[0];
    setCurrentEpisode({
      id: episode.id,
      src: episode.audio,
      title: episode.title,
      channelTitle: episode.podcast.title,
      channelId: episode.podcast.id,
      order: 0,
      playmode: "continued",
      playing: true,
    });
  };

  const handleRenameBtnClick = () => {
    // 非會員
    if (!userInfo) {
      setAlertText("登入後即可播放");
      setAlert(true);
      return;
    }

    // 如果播放清單是空的
    if (userPlaylists.length === 0) {
      setBtnUsage(null);
      setPopUpText("請先新增播放清單");
      setShowPopUp(true);
      return;
    }
    setFormTitle("編輯播放清單名稱");
    setShowForm(true);
  };

  const handleAddPlaylistBtn = () => {
    setFormTitle("新增播放清單");
    setShowForm(true);
  };

  return (
    <Container>
      {showPopUp && (
        <PopUpMessage
          text={popUpText}
          button={btnUsage}
          setShowPopUp={setShowPopUp}
          setConfirmed={setConfirmed}
        />
      )}
      <Main>
        <Div>
          <Sidebar />
          <PlaylistWrapper>
            <PlaylistHeader>
              <Photo />
              <TitleWrapper>
                <TitleText>
                  <PlaylistName>我的播放清單</PlaylistName>
                  <Subtitle>
                    {!userInfo
                      ? ""
                      : userPlaylists && userPlaylists.length > 0
                      ? userPlaylists[0].name
                      : "播放列表"}
                    ，共{" "}
                    {!userInfo
                      ? ""
                      : userPlaylists && userPlaylists.length > 0
                      ? userPlaylists[0].Episodes.length
                      : 0}{" "}
                    部單元
                  </Subtitle>
                </TitleText>
                <Buttons>
                  <PlaylistPlayBtnControl onClick={handlePlayWholePlaylist}>
                    <Images.PodcastPlayBtn />
                  </PlaylistPlayBtnControl>
                  <RenamePlaylistBtnControl onClick={handleRenameBtnClick}>
                    <Images.RenamePlaylistBtn />
                  </RenamePlaylistBtnControl>
                </Buttons>
              </TitleWrapper>
            </PlaylistHeader>
            <PlayList>
              <TitleHeader>
                <EpisodeTitleHeader>單元名稱</EpisodeTitleHeader>
                <EpisodeDescriptionHeader>單元描述</EpisodeDescriptionHeader>
                <ChannelNameHeader>頻道名稱</ChannelNameHeader>
              </TitleHeader>
              <Body>
                {userPlaylists && userPlaylists.length === 0 ? (
                  <RemindBlock>
                    <RemindText>尚無播放清單，請先新增播放清單</RemindText>
                    <AddPlaylist onClick={handleAddPlaylistBtn}>
                      新增播放清單
                    </AddPlaylist>
                  </RemindBlock>
                ) : userPlaylists && userPlaylists[0].Episodes.length > 0 ? (
                  userPlaylists[0].Episodes.map((episodeInfo) => (
                    <EpisodeInfoDetails
                      key={episodeInfo.id}
                      episodeInfo={episodeInfo}
                      setShowPopUp={setShowPopUp}
                      setPopUpText={setPopUpText}
                      setBtnUsage={setBtnUsage}
                      confirmed={confirmed}
                      setConfirmed={setConfirmed}
                    />
                  ))
                ) : userPlaylists && userPlaylists[0].Episodes.length === 0 ? (
                  <RemindBlock>
                    <RemindText>
                      {userPlaylists[0].name} 為空，請至頻道頁面將單元新增進{" "}
                      {userPlaylists[0].name}
                    </RemindText>
                  </RemindBlock>
                ) : (
                  ""
                )}
              </Body>
            </PlayList>
          </PlaylistWrapper>
        </Div>
      </Main>
      {showForm && (
        <PopUpForm
          title={formTitle}
          formInputs={formInputs}
          setShowForm={setShowForm}
        />
      )}
    </Container>
  );
}
