import styled from "styled-components";
import Icon from "./Images";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";
import UserForm from "../components/UserForm";
import useInputs from "../hooks/useInputs";
import { SideListContainer } from "./Sidebar";
import { renamePlaylist } from "../WebAPI/me";
import useUser from "../hooks/useUser";

const CoverPage = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.7);
`;

const FormContainer = styled(SideListContainer)`
  width: 400px;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.pop_up};

  ${MEDIA_QUERY_XL} {
    width: 350px;
    height: 360px;
  }

  ${MEDIA_QUERY_LG} {
    width: 300px;
    height: 310px;
  }

  ${MEDIA_QUERY_MD} {
    width: 300px;
    height: 310px;
  }

  ${MEDIA_QUERY_SM} {
    width: 300px;
    height: 310px;
  }

  ${MEDIA_QUERY_XS} {
    width: 250px;
    height: 260px;
    padding: 20px;
  }
`;

const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  color: ${(props) => props.theme.white};
  font-size: 30px;

  ${MEDIA_QUERY_XL} {
    font-size: 24px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 22px;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 22px;
  }

  ${MEDIA_QUERY_SM} {
    font-size: 22px;
  }

  ${MEDIA_QUERY_XS} {
    font-size: 20px;
  }
`;

const CloseBtnControl = styled.div`
  svg {
    width: 40px;
    height: 40px;
  }
  cursor: pointer;

  // 設計稿上未點擊時 opactity 就是 1，沒有做 hover 樣式
  /* &:hover {
    g {
      opacity: 1;
    }
  } */

  ${MEDIA_QUERY_XL} {
    svg {
      width: 34px;
      height: 34px;
    }
  }

  ${MEDIA_QUERY_LG} {
    svg {
      width: 26px;
      height: 26px;
    }
  }

  ${MEDIA_QUERY_MD} {
    svg {
      width: 26px;
      height: 26px;
    }
  }

  ${MEDIA_QUERY_SM} {
    svg {
      width: 26px;
      height: 26px;
    }
  }

  ${MEDIA_QUERY_XS} {
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

const Form = styled(UserForm)`
  height: auto;
  margin: 0 auto;
  background: ${(props) => props.theme.pop_up};
`;

export default function CoverPageForm({ title, formInputs, setShowEditForm }) {
  const { inputs, handlers } = useInputs(formInputs);
  const { setUserPlaylists, userPlaylists } = useUser();

  const handleCloseBtnClick = (e) => {
    setShowEditForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const filters = ["name"];
    const editInformation = {};
    inputs.forEach((input) => {
      for (const filter of filters) {
        if (filter === input.attributes.name) {
          editInformation[filter] = input.attributes.value;
        }
      }
    });
    let result;
    const { name } = editInformation;
    try {
      result = await renamePlaylist(userPlaylists[0].id, name);
    } catch (err) {
      console.log(err);
    }
    if (result.ok) {
      const [playlist, ...rest] = userPlaylists;
      setUserPlaylists([
        {
          ...playlist,
          name,
        },
      ]);
      setShowEditForm(false);
    }
  };

  return (
    <CoverPage>
      <FormContainer>
        <Headline>
          <Title>{title}</Title>
          <CloseBtnControl onClick={handleCloseBtnClick}>
            <Icon.Error />
          </CloseBtnControl>
        </Headline>
        <Form inputs={inputs} handlers={handlers} onSubmit={handleSubmit} />
      </FormContainer>
    </CoverPage>
  );
}
