import Images from "./Images";
import styled from "styled-components";
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
} from "../constants/breakpoints";

const Nav = styled.nav`
  background: rgba(241, 90, 36, 0.68);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100% / 12);
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
    margin: 0.9rem 1rem;
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
  padding: 0.1rem;
  font-size: 0.6rem;
  background-color: ${(props) => props.theme.primary_color_grey};
  border: 1px solid ${(props) => props.theme.primary_color};

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
  text-align: center;
  border: 1px solid ${(props) => props.theme.primary_color_grey};
  color: ${(props) => props.theme.primary_color};
  width: 3rem;
  padding: 0.1rem;
  margin-right: 0.2rem;
  font-size: 0.08rem;
`;
const AvatarControl = styled.div`
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <LeftSection>
        <PodcastifyLogoControl>
          <Images.PodcastifyLogo />
        </PodcastifyLogoControl>
        <SearchBox>
          <SearchInput tyoe="search" placeholder="Search" />
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
  );
}
