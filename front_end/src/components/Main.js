import styled from "styled-components";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
} from "../constants/breakpoints";

export const Main = styled.main`
  display: flex;
  align-items: center;
  position: absolute;
  top: 12%;
  left: 0;
  width: 100%;
  height: 75vh;
  padding-left: 13.5px;

  ${MEDIA_QUERY_XS} {
    left: unset;
    width: 82%;
    height: 74vh;
    padding: 0;
  }

  ${MEDIA_QUERY_SM} {
    left: unset;
    width: 82%;
    height: 74vh;
    padding: 0;
  }

  ${MEDIA_QUERY_MD} {
    top: 10%;
    height: 77vh;
  }

  ${MEDIA_QUERY_LG} {
    top: 13%;
    height: 70vh;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  // 在 chrome, Safari 上隱藏 scrollbar
  &::-webkit-scrollbar {
    display: none;
  }

  // 在 IE, Edge 上隱藏 scrollbar
  -ms-overflow-style: none;

  ${MEDIA_QUERY_XS} {
    flex-direction: column;
  }

  ${MEDIA_QUERY_SM} {
    flex-direction: column;
  }

  ${MEDIA_QUERY_MD} {
    overflow-y: unset;
  }

  ${MEDIA_QUERY_LG} {
    overflow-y: unset;
  }

  ${MEDIA_QUERY_XL} {
    overflow-y: unset;
  }

  ${MEDIA_QUERY_XXL} {
    overflow-y: unset;
  }
`;
