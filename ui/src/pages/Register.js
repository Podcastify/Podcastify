//TODO Register page layout
import styled from "styled-components";
import UserForm from "../components/UserForm";
import Images from "../components/Images";
import { useHistory } from "react-router-dom";
import { login, register } from "../WebAPI/users";
import useInputs from "../hooks/useInputs";
import useUser from "../hooks/useUser";
import Input from "../components/UserInput";
import { setInitialUserContext } from "../utils";
import useAlertMessage from "../hooks/useAlertMessage";
import usePageStatus from "../hooks/usePageStatus";
import AlertMessage from "../components/AlertMessage";

const RegisterPageWrapper = styled.div`
  max-width: 1920px;
  height: 100vh;
  padding: 25px 30px;
`;

const StyledLogo = styled(Images.PodcastifyLogo)`
  cursor: pointer;
`;

const RegisterForm = styled(UserForm)`
  margin: auto auto;
  height: auto;
  width: 100%;
`;

const FormArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const LoginBtn = styled(Input)`
  width: 100%;
`;

const formInputs = [
  {
    attributes: {
      type: "text",
      name: "username",
      id: "username",
      placeholder: "帳號",
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
      type: "password",
      name: "password_double_check",
      id: "password_double_check",
      placeholder: "再次輸入密碼",
      required: true,
      value: "",
    },
    title: "",
    errorMessage: "",
  },
  {
    attributes: {
      type: "submit",
      name: "submit",
      id: "submit",
      required: true,
      value: "確認註冊",
    },
    title: "",
    errorMessage: "",
  },
];

const loginBtnAttributes = {
  attributes: {
    type: "button",
    name: "toLogin",
    id: "toLogin",
    value: "前往登入",
  },
  title: "已經是會員了？",
  errorMessage: "",
};

export default function Register() {
  const {
    setUserInfo,
    setUserPlayedRecord,
    setUserPlaylists,
    setUserSubscription,
  } = useUser();
  const history = useHistory();
  const { alert, setAlert, alertText, setAlertText } = useAlertMessage();
  const { setIsLoading } = usePageStatus();

  const handleLoginBtn = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const filters = ["username", "password", "password_double_check"];
    const registerInformation = {};
    inputs.forEach((input) => {
      for (const filter of filters) {
        if (filter === input.attributes.name) {
          registerInformation[filter] = input.attributes.value;
        }
      }
    });

    if (
      registerInformation.password !== registerInformation.password_double_check
    ) {
      setAlertText("兩次密碼不符，請重新確認");
      setAlert(true);
      return;
    }

    const { username, password } = registerInformation;
    let result;
    try {
      result = await register(username, password);
    } catch (err) {
      setAlertText(String(err));
      setAlert(true);
      return;
    }

    if (result.ok) {
      const result = await login(username, password);
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

    if (result.error === "username must be unique") {
      setAlertText("此帳號已被註冊，請更換帳號");
      setAlert(true);
      return;
    }

    setAlertText(result.error || result.errorMessage);
    setAlert(true);
    return;
  };

  const { inputs, handlers } = useInputs(formInputs);
  const { inputs: loginBtnInput, handlers: loginBtnHandlers } = useInputs(
    loginBtnAttributes
  );

  return (
    <RegisterPageWrapper>
      {alert && <AlertMessage text={alertText} />}
      <StyledLogo />
      <FormArea>
        <RegisterForm
          formTitle={"會員註冊"}
          inputs={inputs}
          handlers={handlers}
          onSubmit={handleRegister}
        />
        <BtnContainer>
          <LoginBtn
            {...loginBtnInput}
            handlers={loginBtnHandlers}
            onClick={handleLoginBtn}
          />
        </BtnContainer>
      </FormArea>
    </RegisterPageWrapper>
  );
}
