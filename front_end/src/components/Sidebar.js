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

const SidebarWrapper = styled(SidebarContainer)`
  position: relative;

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

  ${MEDIA_QUERY_XL} {
    position: relative;

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
      bottom: 0px;
    }
  }

  ${MEDIA_QUERY_LG} {
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
  font-size: 26px;
  margin: 2px 10px 20px 30px;
  font-weight: 500;
  color: ${(props) => props.theme.white};

  ${MEDIA_QUERY_LG} {
    font-size: 21px;
    margin: 2px 10px 10px 25px;
  }
`;

const SideListContainer = styled.div`
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

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
  display: block;
  font-size: 25px;

  ${MEDIA_QUERY_XL} {
    font-size: 20px;
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

const SidebarListTitle = styled.div`
  text-decoration: none;
  overflow: hidden;
  line-height: 1.5;

  ${MEDIA_QUERY_LG} {
    font-size: 16px;
  }
`;

const SidebarListContent = styled.div`
  text-decoration: none;
  overflow: hidden;
  line-height: 1.5;
`;

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Link to="/myplaylist"><SidebarTitle>我的播放清單</SidebarTitle></Link>
      <SideListContainer>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <PlaylistPlayBtnControl>
              <Icon.PlaylistPlayButton />
            </PlaylistPlayBtnControl>
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <PlaylistPlayBtnControl>
              <Icon.PlaylistPlayButton />
            </PlaylistPlayBtnControl>
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <PlaylistPlayBtnControl>
              <Icon.PlaylistPlayButton />
            </PlaylistPlayBtnControl>
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <PlaylistPlayBtnControl>
              <Icon.PlaylistPlayButton />
            </PlaylistPlayBtnControl>
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <PlaylistPlayBtnControl>
              <Icon.PlaylistPlayButton />
            </PlaylistPlayBtnControl>
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <PlaylistPlayBtnControl>
              <Icon.PlaylistPlayButton />
            </PlaylistPlayBtnControl>
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <PlaylistPlayBtnControl>
              <Icon.PlaylistPlayButton />
            </PlaylistPlayBtnControl>
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <PlaylistPlayBtnControl>
              <Icon.PlaylistPlayButton />
            </PlaylistPlayBtnControl>
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <PlaylistPlayBtnControl>
              <Icon.PlaylistPlayButton />
            </PlaylistPlayBtnControl>
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <PlaylistPlayBtnControl>
              <Icon.PlaylistPlayButton />
            </PlaylistPlayBtnControl>
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
      </SideListContainer>
    </SidebarWrapper>
  );
}
