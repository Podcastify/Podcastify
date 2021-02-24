import Images from "../components/Images";
import { Main } from "../components/Main";
import styled from "styled-components";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
} from "../constants/breakpoints";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 88vh;
  padding: 0;

  ${MEDIA_QUERY_LG} {
    height: 87vh;
  }
`;

const ErrorControl = styled.div`
  svg {
    width: 175px;
    height: 175px;
  }

  ${MEDIA_QUERY_XL} {
    svg {
      width: 115px;
      height: 115px;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 95px;
      height: 95px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 85px;
      height: 85px;
    }
  }

  ${MEDIA_QUERY_SM} {
    svg {
      width: 75px;
      height: 75px;
    }
  }

  ${MEDIA_QUERY_XS} {
    svg {
      width: 75px;
      height: 75px;
    }
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.white};
  font-size: 59px;
  line-height: 1.2;
  letter-spacing: 6px;
  margin-top: 50px;

  ${MEDIA_QUERY_XL} {
    font-size: 40px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 30px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 30px;
    margin-top: 25px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 25px;
    margin-top: 20px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 22px;
    margin-top: 20px;
  }
`;

const FirstLine = styled.div``;
const SecondLine = styled.div``;

export default function Error() {
  return (
    <Container>
      <Wrapper>
        <ErrorControl>
          <Images.Error />
        </ErrorControl>
        <Text>
          <FirstLine>歐噢！好像出現某些錯誤</FirstLine>
          <SecondLine>請嘗試重新整理頁面</SecondLine>
        </Text>
      </Wrapper>
    </Container>
  );
}
