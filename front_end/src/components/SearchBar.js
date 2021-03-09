import Images from "./Images";
import styled from "styled-components";
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
} from "../constants/breakpoints";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import useUser from "../hooks/useUser";

const SearchBox = styled.div`
  width: calc(100% / 12 * 7.5);
  height: 100%;
  position: relative;
  margin-right: 12px;

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

  ${MEDIA_QUERY_XXL} {
    width: calc(100% / 12 * 3.5);
  }
`;

const SearchInput = styled.input`
  display: flex;
  border-radius: 50px;
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  padding: 2px 2px 2px 8px;
  font-size: 15px;
  background-color: ${(props) => props.theme.white_opacity};
  border: 1px solid ${(props) => props.theme.white};
  outline: none;
  caret-color: ${(props) => props.theme.white};
  color: #333333;
  letter-spacing: 1px;

  &::placeholder {
    color: ${(props) => props.theme.white};
    font-size: 15px;
    padding: 4px;
  }

  &::-ms-clear {
    display: none;
  }

  ${MEDIA_QUERY_XL} {
    height: 45px;
    font-size: 20px;
    padding-left: 20px;
    border: 2px solid ${(props) => props.theme.white};

    &::placeholder {
      font-size: 20px;
    }
  }

  ${MEDIA_QUERY_XXL} {
    height: 57px;
    font-size: 20px;
    padding-left: 20px;
    border: 2px solid ${(props) => props.theme.white};

    &::placeholder {
      font-size: 20px;
    }
  }
`;

const MagnifierControl = styled.div`
  cursor: pointer;
  display: flex;
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(-5%, -50%);
  padding: 5px 10px;

  svg {
    width: 20px;
    height: 20px;
  }

  ${MEDIA_QUERY_XL} {
    transform: translate(-25%, -50%);
    svg {
      width: 22px;
      height: 22px;
    }
  }

  ${MEDIA_QUERY_XXL} {
    transform: translate(-25%, -50%);
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default function SearchBar() {
  const history = useHistory();
  const [value, setValue] = useState("");
  const { userInfo } = useUser();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const searchPodcast = (keyword) => {
    history.push(`/search/${keyword}`);
    setValue("");
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter" && value !== "") {
      searchPodcast(value);
    }
  };

  const handleButtonSubmit = () => {
    if (value !== "") {
      searchPodcast(value);
    }
  };

  return (
    <SearchBox>
      {userInfo ? (
        <SearchInput
          value={value}
          type="text"
          placeholder="Search"
          onChange={handleInputChange}
          onKeyPress={handleEnterKeyPressed}
        />
      ) : (
        <SearchInput placeholder="Search" value={value} readOnly />
      )}
      <MagnifierControl onClick={handleButtonSubmit}>
        <Images.Magnifier />
      </MagnifierControl>
    </SearchBox>
  );
}
