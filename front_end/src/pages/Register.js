//TODO Register page layout
import { useEffect, useState } from "react";
import styled from "styled-components";
import UserForm from "../components/UserForm";
import Images from "../components/Images";
import { useHistory } from "react-router-dom";
import { login, register } from "../WebAPI/users";
import useInputs from "../hooks/useInputs";
import useUser from "../hooks/useUser";
import Input from "../components/UserInput";
import { getAuthToken } from "../utils";
import { setInitialUserContext } from "../utils";

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
`;

const LoginBtn = styled(Input)``;

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
      alert("兩次密碼不符，請重新確認");
      return;
    }
    const { username, password } = registerInformation;
    let result;
    try {
      result = await register(username, password);
    } catch (err) {}

    if (result.ok) {
      const result = await login(username, password);
      window.localStorage.removeItem("podcastifyToken");
      window.localStorage.setItem("podcastifyToken", result.token);
      setInitialUserContext(
        setUserInfo,
        setUserPlaylists,
        setUserPlayedRecord,
        setUserSubscription
      );
      history.push("/");
    } else {
      alert(result.errorMessage || result.error);
      return;
    }
  };

  const { inputs, handlers } = useInputs(formInputs);
  const { inputs: loginBtnInput, handlers: loginBtnHandlers } = useInputs(
    loginBtnAttributes
  );

  return (
    <RegisterPageWrapper>
      <StyledLogo />
      {/* <FormArea> */}
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
      {/* </FormArea> */}
    </RegisterPageWrapper>
  );
}
