import { useHistory } from "react-router-dom";
import styled from "styled-components";
import UserForm from "../components/UserForm";
import Images from "../components/Images";
import coverImg from "../images/loginPageCover.jpg";
import {
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_XS,
} from "../constants/breakpoints";
import { login } from "../WebAPI/users";
import useInputs from "../hooks/useInputs";
import useUser from "../hooks/useUser";
import Input from "../components/UserInput";
import { setInitialUserContext } from "../utils";
import useAlertMessage from "../hooks/useAlertMessage";
import usePageStatus from "../hooks/usePageStatus";
import AlertMessage from "../components/AlertMessage";

const LoginPageWrapper = styled.div`
  max-width: 1920px;
  height: 100vh;
  box-sizing: border-box;
`;

const StyledLogo = styled(Images.PodcastifyLogo)`
  cursor: pointer;
  height: 75px;
`;

const LoginForm = styled(UserForm)`
  width: 100%;
`;

const BtnContainer = styled.div`
  max-width: 32.7rem;
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const CoverImage = styled.div`
  display: none;
  ${MEDIA_QUERY_MD} {
    display: block;
  }

  ${MEDIA_QUERY_LG} {
    display: block;
  }

  ${MEDIA_QUERY_XL} {
    display: block;
  }

  ${MEDIA_QUERY_XXL} {
    display: block;
  }

  height: 100vh;
  width: 100%;
  background-image: url(${coverImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FormArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${MEDIA_QUERY_XS} {
    margin: auto 65px;
  }
  ${MEDIA_QUERY_SM} {
    margin: auto 65px;
  }
  ${MEDIA_QUERY_MD} {
    margin: auto 65px;
  }
  ${MEDIA_QUERY_LG} {
    margin: auto 65px;
  }
`;

const RegisterBtn = styled(Input)`
  width: 100%;
`;

const formInputs = [
  {
    attributes: {
      type: "text",
      name: "username",
      id: "username",
      placeholder: "帳號",
      pattern: "[A-Za-z0-9_]*",
      required: true,
      value: "",
    },
    title: "",
    errorMessage: "",
  },
  {
    attributes: {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "密碼",
      required: true,
      value: "",
    },
    title: "",
    errorMessage: "",
  },
  {
    attributes: {
      type: "submit",
      name: "login",
      id: "login",
      required: true,
      value: "登入",
    },
    title: "",
    errorMessage: "",
  },
];

const registerBtnAttributes = {
  attributes: {
    type: "button",
    name: "toRegister",
    id: "toRegister",
    required: true,
    value: "註冊會員",
  },
  title: "還不是會員嗎？",
  errorMessage: "",
};

export default function Login() {
  const {
    setUserInfo,
    setUserPlayedRecord,
    setUserPlaylists,
    setUserSubscription,
  } = useUser();
  const history = useHistory();
  const { alert, setAlert, alertText, setAlertText } = useAlertMessage();
  const { setIsLoading } = usePageStatus();

  const handleToRegisterBtn = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const filters = ["username", "password"];
    const loginInformation = {};
    inputs.forEach((input) => {
      for (const filter of filters) {
        if (filter === input.attributes.name) {
          loginInformation[filter] = input.attributes.value;
        }
      }
    });
    let result;
    const { username, password } = loginInformation;
    try {
      result = await login(username, password);
    } catch (err) {
      setAlertText(String(err));
      setAlert(true);
      return;
    }

    if (result.ok) {
      window.localStorage.removeItem("podcastifyToken");
      window.localStorage.setItem("podcastifyToken", result.token);
      setInitialUserContext(
        setUserInfo,
        setUserPlaylists,
        setUserPlayedRecord,
        setUserSubscription,
        setAlert,
        setIsLoading
      );
      history.push("/");
      return;
    }
    window.localStorage.removeItem("podcastifyToken");

    if (
      result.errorMessage ===
      "Invalid inputs, please check your username or password again."
    ) {
      setAlertText("帳號或密碼有誤，請重新輸入一次");
      setAlert(true);
      return;
    }

    setAlertText(result.errorMessage);
    setAlert(true);
    return;
  };

  const { inputs, handlers } = useInputs(formInputs);

  const { inputs: registerBtnInput, handlers: registerBtnHandlers } = useInputs(
    registerBtnAttributes
  );

  return (
    <LoginPageWrapper>
      {alert && <AlertMessage text={alertText} />}
      <MainContainer>
        <CoverImage></CoverImage>
        <FormArea>
          <StyledLogo />
          <LoginForm
            formTitle={"會員登入"}
            inputs={inputs}
            handlers={handlers}
            onSubmit={handleLogin}
          />
          <BtnContainer>
            <RegisterBtn
              {...registerBtnInput}
              handlers={registerBtnHandlers}
              onClick={handleToRegisterBtn}
            />
          </BtnContainer>
        </FormArea>
      </MainContainer>
    </LoginPageWrapper>
  );
}
