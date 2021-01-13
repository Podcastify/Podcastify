import styled from "styled-components";

const SidebarContainer = styled.div`
  max-width: 30%;
  height: 65%;
  padding: 18px 20px;
  border: 3px solid #000000;
  /* 原本色碼為 #ffffff 白色測試看不出來換黑色 */
  border-radius: 28px;
  display: flex;
  flex-direction: column;
`;

const SidebarTitle = styled.h3`
  margin: 4px 10px;
  font-weight: 500;
  color: #000000;
  /* 原本色碼為 #ffffff 白色測試看不出來換黑色 */
`;

const SideListContainer = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SidebarListWrapper = styled.div`
  min-width: 260px;
  min-height: 60px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #000000;
  color: white;
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SidebarListTitle = styled.div`
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
  <SidebarContainer>
    <SidebarTitle>我的播放清單</SidebarTitle>
    <SideListContainer>
      <SidebarListWrapper>
        <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
        <SidebarListContent>社畜日記</SidebarListContent>
      </SidebarListWrapper>
      <SidebarListWrapper>
        <SidebarListTitle>EP1. 職場甘苦談</SidebarListTitle>
        <SidebarListContent>社畜日記</SidebarListContent>
      </SidebarListWrapper>
    </SideListContainer>
  </SidebarContainer>;
}
