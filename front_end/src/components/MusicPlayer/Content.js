import styled from "styled-components";
import { memo } from "react";
import { Link } from "react-router-dom";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
} from "../../constants/breakpoints";

const Content = styled.div`
  width: calc(100% / 12 * 1.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${MEDIA_QUERY_XXL} {
    width: calc(100% / 12 * 1.8);
  }

  ${MEDIA_QUERY_MD} {
    width: calc(100% / 12 * 2.5);
    line-height: 1.2;
  }

  ${MEDIA_QUERY_SM} {
    width: calc(100% / 12 * 5);
    margin: 18px 40px 0 0;
    line-height: 1.2;
  }

  ${MEDIA_QUERY_XS} {
    width: calc(100% / 12 * 4.5);
    margin: 18px 40px 0 0;
    line-height: 1.2;
  }
`;

const EpisodeName = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.white};
  font-size: 15px;
  margin-bottom: 5px;

  ${MEDIA_QUERY_SM} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_XL} {
    font-size: 20px;
  }

  ${MEDIA_QUERY_XXL} {
    font-size: 25px;
  }
`;

const ChannelName = styled(Link)`
  color: ${(props) => props.theme.white_opacity};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;

  ${MEDIA_QUERY_SM} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 17px;
  }

  ${MEDIA_QUERY_XL} {
    font-size: 20px;
  }

  ${MEDIA_QUERY_XXL} {
    font-size: 25px;
  }
`;

function ContentControl({ currentEpisode }) {
  return (
    <Content>
      <EpisodeName>{currentEpisode.title}</EpisodeName>
      <ChannelName to={`/channel/${currentEpisode.channelId}`}>
        {currentEpisode.channelTitle}
      </ChannelName>
    </Content>
  );
}

const MemoContent = memo(ContentControl);
export default MemoContent;
