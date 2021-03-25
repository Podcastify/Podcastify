import styled from "styled-components";
import Icon from "./Images";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import { SidebarContainer } from "./ChannelSidebar";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { useState } from "react";
import useCurrentEpisode from "../hooks/useCurrentEpisode";
import { handlePlaylistPlayPauseBtn } from "../utils";
import PopUpForm from "../components/PopUpForm";

const SidebarWrapper = styled(SidebarContainer)`
  position: relative;
  width: 25vw;

  &::after {
    content: "";
    border-radius: 20px;
    background-image: linear-gradient(
      180deg,
      rgba(137, 255, 241, 0) 0%,
      rgba(62, 58, 57, 1) 100%
    );
    display: block;
    width: 91%;
    height: 30%;
    position: absolute;
    bottom: 0;
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

const SidebarTitle = styled.h3`
  font-size: 25px;
  margin: 2px 10px 20px 30px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props) => props.theme.white};

  &:hover {
    color: ${(props) => props.theme.white_opacity};
  }

  ${MEDIA_QUERY_XL} {
    font-size: 25px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 23px;
    margin: 2px 10px 10px 25px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 18px;
  }
`;

export const SideListContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 92%;

  &::-webkit-scrollbar {
    display: none;
  }

  ${MEDIA_QUERY_XL} {
    height: 91%;
  }

  ${MEDIA_QUERY_LG} {
    height: 92%;
  }
`;

const SidebarListWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 60px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.white_opacity_10};
  color: white;
  margin: 5px 2px;

  ${MEDIA_QUERY_XL} {
    padding: 10px 15px;
  }

  ${MEDIA_QUERY_LG} {
    padding: 10px 15px;
  }

  &:hover {
    background: rgba(233, 80, 46, 0.3);

    svg {
      display: block;
    }
  }

  &:active {
    background: rgba(233, 80, 46, 0.9);
  }
`;

const SidebarListLeft = styled.div`
  width: 70%;
  display: block;
  font-size: 23px;

  ${MEDIA_QUERY_XL} {
    font-size: 18px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 13px;
  }
`;

const SidebarListRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaylistPlayBtnControl = styled.div`
  svg {
    width: 35px;
    height: 35px;
    display: none;

    & circle {
      stroke: ${(props) => props.theme.white_opacity};
    }

    & path {
      fill: ${(props) => props.theme.white_opacity};
    }

    ${MEDIA_QUERY_XL} {
      width: 28px;
      height: 28px;
    }

    ${MEDIA_QUERY_LG} {
      width: 28px;
      height: 28px;
    }
  }
`;

const PlaylistPauseBtnControl = styled(PlaylistPlayBtnControl)``;

const SidebarListTitle = styled.div`
  text-decoration: none;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${MEDIA_QUERY_LG} {
    font-size: 16px;
  }
`;

const SidebarListContent = styled.div`
  text-decoration: none;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
      value: "新增",
      required: true,
    },
    title: "",
    errorMessage: "",
  },
];

function SidebarListPlayPauseBtn({ episodeInfo }) {
  const { userPlaylists } = useUser();
  const { currentEpisode, setCurrentEpisode } = useCurrentEpisode();

  const onClick = () => {
    handlePlaylistPlayPauseBtn(
      episodeInfo,
      userPlaylists,
      currentEpisode,
      setCurrentEpisode
    );
  };

  return (
    <SidebarListRight onClick={onClick}>
      {currentEpisode.id === episodeInfo.id ? (
        currentEpisode.playing ? (
          <PlaylistPauseBtnControl>
            <Icon.PodcastPauseBtn />
          </PlaylistPauseBtnControl>
        ) : (
          <PlaylistPlayBtnControl>
            <Icon.PodcastPlayBtn />
          </PlaylistPlayBtnControl>
        )
      ) : (
        <PlaylistPlayBtnControl>
          <Icon.PodcastPlayBtn />
        </PlaylistPlayBtnControl>
      )}
    </SidebarListRight>
  );
}

export default function Sidebar() {
  const [showForm, setShowForm] = useState(false);
  const { userPlaylists, userInfo } = useUser();

  const AddPlaylistForm = () => {
    setShowForm(true);
  };

  return (
    <SidebarWrapper>
      {userInfo ? (
        userPlaylists && userPlaylists.length > 0 ? (
          <Link to="/myplaylist">
            <SidebarTitle>{userPlaylists[0].name}</SidebarTitle>
          </Link>
        ) : (
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <SidebarTitle onClick={AddPlaylistForm}>新增播放清單</SidebarTitle>
          </Link>
        )
      ) : (
        <SidebarTitle>請先登入</SidebarTitle>
      )}
      <SideListContainer>
        {userInfo ? (
          userPlaylists && userPlaylists.length > 0 ? (
            userPlaylists[0].Episodes.map((episodeInfo) => (
              <SidebarListWrapper key={episodeInfo.id}>
                <SidebarListLeft>
                  {/* 是看看短路能不能讓 sidebar 正常顯示 */}
                  <SidebarListTitle>
                    {episodeInfo.title || episodeInfo.id}
                  </SidebarListTitle>
                  <SidebarListContent
                    dangerouslySetInnerHTML={
                      episodeInfo.description
                        ? {
                            __html: episodeInfo.podcast.title.replace(
                              /<[^>]+>/g,
                              ""
                            ),
                          }
                        : { __html: "沒東西" }
                    }
                  ></SidebarListContent>
                </SidebarListLeft>
                <SidebarListPlayPauseBtn episodeInfo={episodeInfo} />
              </SidebarListWrapper>
            ))
          ) : (
            <div></div>
          )
        ) : (
          ""
        )}
      </SideListContainer>
      {showForm && (
        <PopUpForm
          title="新增播放清單"
          formInputs={formInputs}
          setShowForm={setShowForm}
        />
      )}
    </SidebarWrapper>
  );
}
