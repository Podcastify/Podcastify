import Images from "./Images";
import styled from "styled-components";
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
} from "../constants/breakpoints";

const NavigationBar = styled.div``;
const Nav = styled.nav`
  background: rgba(241, 90, 36, 0.68);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const PodcastifyLogoControl = styled.div`
  display: flex;
  margin: 0.3rem 0.5rem;

  svg {
    width: 4rem;
    height: 1.8rem;
  }

  ${MEDIA_QUERY_MD} {
    margin-right: 0.8rem;
    svg {
      width: 5rem;
    }
  }

  ${MEDIA_QUERY_LG} {
    margin-right: 1rem;
    margin-left: 1rem;
    svg {
      width: 6rem;
    }
  }
`;

const SearchBox = styled.div`
  width: calc(100% / 12 * 5);
  height: 100%;
  position: relative;
  margin-right: 0.8rem;

  ${MEDIA_QUERY_MD} {
    width: calc(100% / 12 * 4);
  }

  ${MEDIA_QUERY_LG} {
    width: calc(100% / 12 * 3);
    margin-right: 1.2rem;
  }
`;

const SearchInput = styled.input`
  display: flex;
  border-radius: 50px;
  box-sizing: border-box;
  width: 100%;
  padding: 0.1rem 0.1rem 0.1rem 0.4rem;
  font-size: 0.6rem;
  background-color: ${(props) => props.theme.primary_color_grey};
  border: 1px solid ${(props) => props.theme.primary_color};
  outline: none;
  caret-color: ${(props) => props.theme.primary_color};

  &::placeholder {
    color: ${(props) => props.theme.primary_color};
    font-size: 0.3rem;
    font-family: Helvetica;
    padding: 0.2rem;
  }
`;

const MagnifierControl = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.25rem 0.5rem;

  svg {
    width: 0.5rem;
    height: 0.5rem;
  }
`;

const ListenApiLogoControl = styled.div`
  ${MEDIA_QUERY_SM} {
    display: none;
  }

  svg {
    width: 5rem;
    height: 2rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0.4rem;
`;

const MySubscribtionBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.primary_color_grey};
  border-radius: 3px;
  color: ${(props) => props.theme.primary_color};
  width: 3rem;
  padding: 0.1rem;
  margin-right: 0.4rem;
  font-size: 0.08rem;

  &:hover {
    border-color: transparent;
    background-color: ${(props) => props.theme.hover_color};
  }

  &:active {
    border-color: transparent;
    background-color: ${(props) => props.theme.click_color};
  }

  ${MEDIA_QUERY_MD} {
    width: 3rem;
    margin-right: 0.5rem;
  }

  ${MEDIA_QUERY_LG} {
    width: 6rem;
    margin-right: 0.8rem;
  }
`;

const AvatarControl = styled.div`
  cursor: pointer;

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }

  & rect {
    :hover {
      fill: ${(props) => props.theme.hover_color};
    }

    :active {
      fill: ${(props) => props.theme.click_color};
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const ListControl = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// 會員管理對話框
const Lists = styled.ul`
  padding: 0;
  margin-right: 0.2rem;
  position: relative;
  border-radius: 0.3rem;
  color: ${(props) => props.theme.primary_color};
  background-color: ${(props) => props.theme.primary_color_grey};
  width: 100px;
  font-size: 0.1rem;
  z-index: 3;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 0.8rem solid transparent;
    border-bottom-color: ${(props) => props.theme.primary_color_grey};
    border-top: 0;
    border-right: 0;
    margin-left: 1rem;
    margin-top: -13px;
  }
`;

const ListItem = styled.li`
  list-style: none;
  text-align: center;
  padding: 0.4rem;

  &:first-child {
    margin-top: 0.4rem;
  }

  &:last-child {
    margin-bottom: 0.4rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.click_color};
    cursor: pointer;
  }
`;

export default function Navbar() {
  return (
    <NavigationBar>
      <Nav>
        <LeftSection>
          <PodcastifyLogoControl>
            <Images.PodcastifyLogo />
          </PodcastifyLogoControl>
          <SearchBox>
            <SearchInput type="search" placeholder="Search" />
            <MagnifierControl>
              <Images.Magnifier />
            </MagnifierControl>
          </SearchBox>
          <ListenApiLogoControl>
            <Images.ListenApiLogo />
          </ListenApiLogoControl>
        </LeftSection>
        <RightSection>
          <MySubscribtionBtn>我的訂閱</MySubscribtionBtn>
          <AvatarControl>
            <Images.Avatar />
          </AvatarControl>
        </RightSection>
      </Nav>
      <ListControl>
        <Lists>
          <ListItem>會員您好</ListItem>
          <ListItem>會員資料管理</ListItem>
          <ListItem>登出</ListItem>
        </Lists>
      </ListControl>
    </NavigationBar>
  );
}
