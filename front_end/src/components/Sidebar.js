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
import useInputs from "../hooks/useInputs";
import { addPlaylist, getAllMyPlaylists } from "../WebAPI/me";
import { useState } from "react";
import UserForm from "../components/UserForm";
import useCurrentEpisode from "../hooks/useCurrentEpisode";
import { handlePlaylistPlayPauseBtn } from "../utils";

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

  ${MEDIA_QUERY_LG} {
    position: relative;
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
    margin: 2px 10px 10px 25px;
  }
`;

export const SideListContainer = styled.div`
  overflow-y: scroll;
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

const CoverPage = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.7);
`;

const AddPlaylistForm = styled(UserForm)`
  height: auto;
  margin: 0 auto;
  background: #333333;
`;

const FormContainer = styled(SideListContainer)`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 20px 20px 0 rgba(33, 25, 24, 0.2);
  background-color: #333333;
`;

const CloseBtnControl = styled.div`
  svg {
    width: 40px;
    height: 40px;
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

function CoverPageForm({ showForm, setShowForm }) {
  const { setUserPlaylists } = useUser();
  const { inputs, handlers } = useInputs(formInputs);
  const handleAddPlaylist = async (e) => {
    e.preventDefault();
    const filters = ["name"];
    const playlistInformation = {};
    inputs.forEach((input) => {
      for (const filter of filters) {
        if (filter === input.attributes.name) {
          playlistInformation[filter] = input.attributes.value;
        }
      }
    });
    await addPlaylist(playlistInformation.name);
    let myPlaylists = await getAllMyPlaylists();
    myPlaylists = myPlaylists.data.map((playlist) => ({ ...playlist }));
    setUserPlaylists(myPlaylists);
    setShowForm(false);
  };

  return (
    <CoverPage>
      <FormContainer>
        <CloseBtnControl onClick={() => setShowForm(false)}>
          <Icon.Error />
        </CloseBtnControl>
        <AddPlaylistForm
          inputs={inputs}
          handlers={handlers}
          onSubmit={handleAddPlaylist}
        />
      </FormContainer>
    </CoverPage>
  );
}

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
            <SidebarTitle
              onClick={() => {
                setShowForm(true);
              }}
            >
              新增播放清單
            </SidebarTitle>
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
        <CoverPageForm showForm={showForm} setShowForm={setShowForm} />
      )}
    </SidebarWrapper>
  );
}
