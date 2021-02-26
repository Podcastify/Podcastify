import Images from "./Images";
import styled from "styled-components";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
} from "../constants/breakpoints";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../context/context";
import { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import useCurrentEpisode from "../hooks/useCurrentEpisode";

const NavigationBar = styled.div``;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 13vh;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const PodcastifyLogoControl = styled(Link)`
  display: flex;
  margin: 6px 8px 6px 10px;

  svg {
    width: 100px;
    height: 65px;
  }

  ${MEDIA_QUERY_SM} {
    margin: 10px 14px;
    svg {
      width: 130px;
      height: 40px;
    }
  }

  ${MEDIA_QUERY_MD} {
    margin: 10px 15px;
    svg {
      width: 140px;
      height: 45px;
    }
  }

  ${MEDIA_QUERY_LG} {
    margin: 10px 18px;
    svg {
      width: 150px;
      height: 50px;
    }
  }

  ${MEDIA_QUERY_XL} {
    margin: 15px 20px;
    svg {
      width: 200px;
      height: 60px;
    }
  }

  ${MEDIA_QUERY_XXL} {
    margin: 20px;
    svg {
      width: 280px;
      height: 70px;
    }
  }
`;

const ListenApiLogoControl = styled.div`
  ${MEDIA_QUERY_XS} {
    display: none;
  }

  svg {
    width: 100px;
    height: 40px;
  }

  ${MEDIA_QUERY_SM} {
    svg {
      width: 130px;
      height: 50px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 160px;
      height: 60px;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 200px;
      height: 70px;
    }
  }

  ${MEDIA_QUERY_XL} {
    svg {
      width: 250px;
      height: 75px;
    }
  }

  ${MEDIA_QUERY_XXL} {
    svg {
      width: 300px;
      height: 80px;
    }
  }
`;

const AvatarControl = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;

  svg {
    width: 42px;
    height: 42px;
  }

  & rect {
    :hover {
      fill: ${(props) => props.theme.hover_color};
    }

    :active {
      fill: ${(props) => props.theme.click_color};
    }
  }

  ${MEDIA_QUERY_SM} {
    svg {
      width: 40px;
      height: 40px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 45px;
      height: 45px;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 50px;
      height: 50px;
    }
  }

  ${MEDIA_QUERY_XL} {
    margin-right: 15px;
    svg {
      width: 65px;
      height: 65px;
    }
  }

  ${MEDIA_QUERY_XXL} {
    margin-right: 15px;
    svg {
      width: 78.5px;
      height: 78.5px;
    }
  }
`;

const ListControl = styled.div`
  justify-content: flex-end;
  position: absolute;
  top: 90px;
  right: -10px;

  ${MEDIA_QUERY_XL} {
    top: 80px;
    right: -5px;
  }

  ${MEDIA_QUERY_LG} {
    top: 60px;
    right: -5px;
  }

  ${MEDIA_QUERY_MD} {
    top: 55px;
    right: -5px;
  }

  ${MEDIA_QUERY_SM} {
    top: 45px;
    right: -5px;
  }

  ${MEDIA_QUERY_XS} {
    top: 47px;
    right: -5px;
  }

  ${(props) => (props.$isShow ? "display: flex" : "display: none")}
`;

const Lists = styled.ul`
  padding: 0;
  margin-right: 4px;
  position: relative;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background-color: #333333;
  width: 100px;
  z-index: 3;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-bottom-color: #333333;
    border-top: 0;
    border-right: 0;
    margin-left: 20px;
    margin-top: -13px;
  }

  ${MEDIA_QUERY_XS} {
    margin-right: 6px;
    width: 130px;
    font-size: 15px;
    border-radius: 10px;

    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 18px solid transparent;
      border-bottom-color: #333333;
      border-top: 0;
      border-right: 0;
      margin-left: 20px;
      margin-top: -16px;
    }
  }

  ${MEDIA_QUERY_SM} {
    margin-right: 6px;
    width: 120px;
    font-size: 17px;
    border-radius: 10px;

    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 18px solid transparent;
      border-bottom-color: #333333;
      border-top: 0;
      border-right: 0;
      margin-left: 20px;
      margin-top: -16px;
    }
  }

  ${MEDIA_QUERY_MD} {
    margin-right: 8px;
    width: 130px;
    font-size: 17px;
    border-radius: 10px;

    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-bottom-color: #333333;
      border-top: 0;
      border-right: 0;
      margin-left: 30px;
      margin-top: -18px;
    }
  }

  ${MEDIA_QUERY_LG} {
    margin-right: 12px;
    width: 150px;
    font-size: 17px;
    border-radius: 10px;

    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 22px solid transparent;
      border-bottom-color: #333333;
      border-top: 0;
      border-right: 0;
      margin-left: 30px;
      margin-top: -20px;
    }
  }

  ${MEDIA_QUERY_XL} {
    margin-right: 12px;
    width: 150px;
    font-size: 20px;
    border-radius: 10px;

    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 22px solid transparent;
      border-bottom-color: #333333;
      border-top: 0;
      border-right: 0;
      margin-left: 30px;
      margin-top: -22px;
    }
  }

  ${MEDIA_QUERY_XXL} {
    margin-right: 15px;
    width: 210px;
    font-size: 25px;
    border-radius: 15px;

    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 30px solid transparent;
      border-bottom-color: #333333;
      border-top: 0;
      border-right: 0;
      margin-left: 30px;
      margin-top: -28px;
    }
  }
`;

const ListTitle = styled.div`
  list-style: none;
  text-align: center;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.white};

  &:first-child {
    margin-top: 8px;
  }

  &:last-child {
    margin-bottom: 8px;
  }

  &:hover {
    background-color: ${(props) => props.theme.click_color};
    cursor: pointer;
  }

  ${MEDIA_QUERY_XXL} {
    padding: 15px;

    &:first-child {
      margin-top: 15px;
    }

    &:last-child {
      margin-bottom: 15px;
    }
  }
`;

const ListItem = styled(Link)`
  list-style: none;
  text-align: center;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.white};

  &:first-child {
    margin-top: 8px;
  }

  &:last-child {
    margin-bottom: 8px;
  }

  &:hover {
    background-color: ${(props) => props.theme.click_color};
    cursor: pointer;
  }

  ${MEDIA_QUERY_XXL} {
    padding: 15px;

    &:first-child {
      margin-top: 15px;
    }

    &:last-child {
      margin-bottom: 15px;
    }
  }
`;

export default function Navbar() {
  const [isShowList, setIsShowList] = useState(false);
  const {
    userInfo,
    setUserInfo,
    setUserSubscription,
    setUserPlaylists,
    setUserPlayedRecord,
  } = useContext(UserContext);
  const { setCurrentEpisode } = useCurrentEpisode();
  const history = useHistory();
  const location = useLocation();

  const handleToggleList = () => {
    setIsShowList(!isShowList);
  };

  const handleLogout = () => {
    localStorage.removeItem("podcastifyToken");
    setUserInfo(null);
    setUserSubscription([]);
    setUserPlayedRecord([]);
    setUserPlaylists([]);
    setCurrentEpisode({});
    if (location.pathname !== "/") {
      history.push("/");
    }
  };

  // 如果在註冊頁面或是登入頁面不顯示 navbar
  if (location.pathname === "/register" || location.pathname === "/login") {
    return null;
  }

  return (
    <NavigationBar>
      <Nav>
        <LeftSection>
          <PodcastifyLogoControl to="/">
            <Images.PodcastifyLogo />
          </PodcastifyLogoControl>
          <SearchBar />
          <ListenApiLogoControl>
            <Images.ListenApiLogo />
          </ListenApiLogoControl>
        </LeftSection>
        <AvatarControl onClick={handleToggleList}>
          <Images.Avatar />
          <ListControl $isShow={isShowList}>
            <Lists>
              {userInfo ? (
                <ListTitle>{userInfo.username} 您好</ListTitle>
              ) : (
                <ListTitle>訪客您好</ListTitle>
              )}
              {userInfo ? (
                <ListItem to="/usermanagement">會員資料管理</ListItem>
              ) : (
                <ListItem to="/login">登入</ListItem>
              )}
              {userInfo ? (
                <ListItem to="/mysubscription">訂閱中的頻道</ListItem>
              ) : (
                <ListItem to="/register">註冊</ListItem>
              )}
              {userInfo && (
                <ListItem to="/" onClick={handleLogout}>
                  登出
                </ListItem>
              )}
            </Lists>
          </ListControl>
        </AvatarControl>
      </Nav>
    </NavigationBar>
  );
}
