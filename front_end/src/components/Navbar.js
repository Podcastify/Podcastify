import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import Images from "./Images";
import styled from "styled-components";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import { UserContext } from "../context/context";
import { useEffect } from "react/cjs/react.development";

const NavigationBar = styled.div``;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  // 以下為新增，Navbar 固定在最上方
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;

  ${MEDIA_QUERY_SM} {
    height: 70px;
  }

  ${MEDIA_QUERY_MD} {
    height: 80px;
  }

  ${MEDIA_QUERY_LG} {
    height: 90px;
  }

  ${MEDIA_QUERY_XL} {
    height: 110px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const PodcastifyLogoControl = styled.div`
  display: flex;
  margin: 6px 10px;

  svg {
    width: 100px;
    height: 40px;
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
    margin: 20px;
    svg {
      width: 280px;
      height: 70px;
    }
  }
`;

const SearchBox = styled.div`
  width: calc(100% / 12 * 5);
  height: 100%;
  position: relative;
  margin-right: 16px;

  ${MEDIA_QUERY_SM} {
    width: calc(100% / 12 * 4);
  }

  ${MEDIA_QUERY_MD} {
    width: calc(100% / 12 * 3);
    margin-right: 24px;
  }

  ${MEDIA_QUERY_LG} {
    width: calc(100% / 12 * 3);
  }

  ${MEDIA_QUERY_XL} {
    width: calc(100% / 12 * 3.5);
  }
`;

const SearchInput = styled.input`
  display: flex;
  border-radius: 50px;
  box-sizing: border-box;
  width: 100%;
  padding: 2px 2px 2px 8px;
  font-size: 12px;
  background-color: ${(props) => props.theme.primary_color_grey};
  border: 1px solid ${(props) => props.theme.primary_color};
  outline: none;
  caret-color: ${(props) => props.theme.primary_color};

  &::placeholder {
    color: ${(props) => props.theme.primary_color};
    font-size: 12px;
    font-family: Helvetica;
    padding: 4px;
  }

  ${MEDIA_QUERY_SM} {
    height: 20px;
  }

  ${MEDIA_QUERY_MD} {
    height: 30px;
  }

  ${MEDIA_QUERY_LG} {
    height: 35px;
  }

  ${MEDIA_QUERY_XL} {
    height: 57px;
    font-size: 20px;
    padding-left: 20px;
    border: 2px solid ${(props) => props.theme.primary_color};

    &::placeholder {
      font-size: 20px;
    }
  }
`;

const MagnifierControl = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(-5%, -50%);
  padding: 5px 10px;

  svg {
    width: 10px;
    height: 10px;
  }

  ${MEDIA_QUERY_XL} {
    transform: translate(-25%, -50%);
    svg {
      width: 24px;
      height: 24px;
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
      width: 300px;
      height: 80px;
    }
  }
`;

const AvatarControl = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;

  svg {
    width: 35px;
    height: 35px;
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
      width: 78.5px;
      height: 78.5px;
    }
  }
`;

// 會員管理對話框，可註解
const ListControl = styled.div`
  display: ${({ isShow }) => isShow ? 'flex;' : 'none;'};
  position: fixed;
  top: 10%;
  justify-content: flex-end;
  z-index: 10;
`;

// 會員管理對話框，可註解
const Lists = styled.ul`
  padding: 0;
  margin-right: 4px;
  position: relative;
  border-radius: 6px;
  color: ${(props) => props.theme.primary_color};
  background-color: ${(props) => props.theme.primary_color_grey};
  width: 100px;
  font-size: 15px;
  z-index: 3;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    border-bottom-color: ${(props) => props.theme.primary_color_grey};
    border-top: 0;
    border-right: 0;
    margin-left: 20px;
    margin-top: -13px;
  }

  ${MEDIA_QUERY_SM} {
    margin-right: 6px;
    width: 120px;
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
      border-bottom-color: ${(props) => props.theme.primary_color_grey};
      border-top: 0;
      border-right: 0;
      margin-left: 20px;
      margin-top: -16px;
    }
  }

  ${MEDIA_QUERY_MD} {
    margin-right: 8px;
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
      border: 20px solid transparent;
      border-bottom-color: ${(props) => props.theme.primary_color_grey};
      border-top: 0;
      border-right: 0;
      margin-left: 30px;
      margin-top: -18px;
    }
  }

  ${MEDIA_QUERY_LG} {
    margin-right: 12px;
    width: 150px;
    font-size: 15px;
    border-radius: 10px;

    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 22px solid transparent;
      border-bottom-color: ${(props) => props.theme.primary_color_grey};
      border-top: 0;
      border-right: 0;
      margin-left: 30px;
      margin-top: -20px;
    }
  }

  ${MEDIA_QUERY_XL} {
    margin-right: 15px;
    width: 210px;
    font-size: 26px;
    border-radius: 15px;

    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 30px solid transparent;
      border-bottom-color: ${(props) => props.theme.primary_color_grey};
      border-top: 0;
      border-right: 0;
      margin-left: 30px;
      margin-top: -28px;
    }
  }
`;

// 會員管理對話框，可註解
const ListItem = styled.li`
  list-style: none;
  text-align: center;
  padding: 8px;

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

  ${MEDIA_QUERY_XL} {
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

  const { user, setUser } = useContext(UserContext);

  const [listItems, setListItems] = useState([
    {
      title: '訪客您好'
    },
    {
      title: '登入',
      attributes: {
        to: '/login'
      },
    },
    {
      title: '註冊',
      attributes: {
        to: '/register'
      }
    }
  ]);

  useEffect(() => {
    let items
    if (user) {
      items = [
        {
          title: `${user.username} 您好`,
        },
        {
          title: '會員資料管理'
        },
        {
          title: '訂閱中的頻道'
        },
        {
          title: '登出',
          attributes: {
            onClick: () => {
              window.localStorage.removeItem('podcastifyToken');
              setUser(null)
            }
          }
        }
      ]
    } else {
      items = [
        {
          title: '訪客您好'
        },
        {
          title: '登入',
          attributes: {
            to: '/login'
          },
        },
        {
          title: '註冊',
          attributes: {
            to: '/register'
          }
        }
      ]
    }
    setListItems(items)
  }, [user])

  const toggleList = () => {
    setIsShowList(!isShowList);
  }

  return (
    <NavigationBar>
      <Nav>
        <LeftSection>
          <PodcastifyLogoControl>
            <Images.PodcastifyLogo />
          </PodcastifyLogoControl>
          <SearchBox>
            <SearchInput
              type="search"
              placeholder="Search"
              inputMode="search"
            />
            <MagnifierControl>
              <Images.Magnifier />
            </MagnifierControl>
          </SearchBox>
          <ListenApiLogoControl>
            <Images.ListenApiLogo />
          </ListenApiLogoControl>
        </LeftSection>
        <AvatarControl onClick={toggleList} >
          <Images.Avatar />
          <ListControl isShow={isShowList}>
            <Lists>
              {listItems.map(el =>
                <Link {...el.attributes}><ListItem>{el.title}</ListItem></Link>
              )}
            </Lists>
          </ListControl>
        </AvatarControl>
      </Nav>
    </NavigationBar>
  );
}
