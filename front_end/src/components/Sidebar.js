import styled from "styled-components";
import Icon from "./Images";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
} from "../constants/breakpoints";

const SidebarContainer = styled.div`
  width: 20vw;
  height: 59vh;
  padding: 18px 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 100px;
  margin: 0 10px;

  ${MEDIA_QUERY_LG} {
    max-width: 30%;
  }

  ${MEDIA_QUERY_MD} {
    display: none;
  }

  ${MEDIA_QUERY_SM} {
    display: none;
  }
  ${MEDIA_QUERY_XS} {
    width: 95%;
    border: none;
    padding: 5px 0;
    height: 75vh;
    display: none;
  }
`;

const SidebarTitleWrapper = styled.div`
  display: flex;
`;

const SidebarTitle = styled.h3`
  font-size: 20px;
  margin: 4px 10px;
  font-weight: 500;
  color: #ffffff;

  &:hover {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const SideListContainer = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SidebarListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  max-width: 40vh;
  min-height: 60px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  margin: 5px 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: rgba(233, 80, 46, 0.3);
  }

  &:active {
    background: rgba(233, 80, 46, 0.9);
  }
`;

const SidebarListLeft = styled.div`
  display: block;
`;

const SidebarListRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 35px;
    height: 35px;

    & circle {
      stroke: ${(props) => props.theme.primary_color_grey};
    }

    & path {
      fill: ${(props) => props.theme.primary_color_grey};
    }
  }
`;

const SidebarListTitle = styled.div`
  width: 10vw;
  font-size: 18px;
  text-decoration: none;
  overflow: hidden;
  line-height: 1.5;
`;

const SidebarListContent = styled.div`
  font-size: 18px;
  text-decoration: none;
  overflow: hidden;
  line-height: 1.5;
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarTitleWrapper>
        <SidebarTitle>我的播放清單</SidebarTitle>
      </SidebarTitleWrapper>
      <SideListContainer>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <Icon.PlaylistPlayButton />
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <Icon.PlaylistPlayButton />
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <Icon.PlaylistPlayButton />
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <Icon.PlaylistPlayButton />
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <Icon.PlaylistPlayButton />
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <Icon.PlaylistPlayButton />
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
        <SidebarListWrapper>
          <SidebarListLeft>
            <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
            <SidebarListContent>社畜日記</SidebarListContent>
          </SidebarListLeft>
          <SidebarListRight>
            <Icon.PlaylistPlayButton />
            {/* <Icon.PlaylistPauseButton /> */}
          </SidebarListRight>
        </SidebarListWrapper>
      </SideListContainer>
    </SidebarContainer>
  );
}
