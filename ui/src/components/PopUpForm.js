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
import { renamePlaylist } from "../WebAPI/me";
import useUser from "../hooks/useUser";
import {
  Background,
  Container,
  CloseBtnControl,
} from "../components/PopUpMessage";
import usePageStatus from "../hooks/usePageStatus";
import useAlertMessage from "../hooks/useAlertMessage";
import { addPlaylist, getAllMyPlaylists } from "../WebAPI/me";

const CoverPage = styled(Background)``;
const FormContainer = styled(Container)`
  width: 400px;
  height: 420px;

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

const CloseBtn = styled(CloseBtnControl)``;

const Form = styled(UserForm)`
  height: auto;
  margin: 0 auto;
  background: ${(props) => props.theme.pop_up};
`;

export default function CoverPageForm({ title, formInputs, setShowForm }) {
  const { inputs, handlers } = useInputs(formInputs);
  const { setUserPlaylists, userPlaylists } = useUser();
  const { isLoading, setIsLoading } = usePageStatus();
  const { setAlert, setAlertText } = useAlertMessage();

  const handleCloseBtnClick = (e) => {
    setShowForm(false);
  };

  const handleRenamePlaylist = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

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
      setIsLoading(false);
      setAlertText(String(err));
      setAlert(true);
      return;
    }

    if (!result.ok) {
      setIsLoading(false);
      setAlertText(result.errorMessage);
      setAlert(true);
      return;
    }

    const [playlist, ...rest] = userPlaylists;
    setUserPlaylists([
      {
        ...playlist,
        name,
        ...rest,
      },
    ]);
    setIsLoading(false);
    setShowForm(false);
    setAlert(false);
  };

  const handleAddPlaylist = async (e) => {
    e.preventDefault();

    if (isLoading) return;
    setIsLoading(true);

    const filters = ["name"];
    const playlistInformation = {};
    inputs.forEach((input) => {
      for (const filter of filters) {
        if (filter === input.attributes.name) {
          playlistInformation[filter] = input.attributes.value;
        }
      }
    });

    let response;
    try {
      response = await addPlaylist(playlistInformation.name);
    } catch (err) {
      setIsLoading(false);
      setAlertText(String(err));
      setAlert(true);
      return;
    }

    if (!response.ok) {
      setIsLoading(false);
      setAlertText(response.errorMessage);
      setAlert(true);
      return;
    }

    let myPlaylists;
    try {
      myPlaylists = await getAllMyPlaylists();
    } catch (err) {
      setIsLoading(false);
      setAlertText(String(err));
      setAlert(true);
      return;
    }

    if (!myPlaylists.ok) {
      setIsLoading(false);
      setAlertText(myPlaylists.errorMessage);
      setAlert(true);
      return;
    }

    myPlaylists = myPlaylists.data.map((playlist) => ({ ...playlist }));
    setUserPlaylists(myPlaylists);
    setShowForm(false);
    setAlert(false);
    setIsLoading(false);
  };

  return (
    <CoverPage>
      <FormContainer>
        <Headline>
          <Title>{title}</Title>
          <CloseBtn onClick={handleCloseBtnClick}>
            <Icon.Error />
          </CloseBtn>
        </Headline>
        {title === "編輯播放清單名稱" && (
          <Form
            inputs={inputs}
            handlers={handlers}
            onSubmit={handleRenamePlaylist}
          />
        )}
        {title === "新增播放清單" && (
          <Form
            inputs={inputs}
            handlers={handlers}
            onSubmit={handleAddPlaylist}
          />
        )}
      </FormContainer>
    </CoverPage>
  );
}
