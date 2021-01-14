import { useEffect, useState } from "react";
import styled from "styled-components";
import UserForm from "../components/UserForm";
import Images from "../components/Images";

const LoginPageWrapper = styled.div`
  max-width: 1920px;
  height: 100vh;
  padding: 25px 30px;
`;

const StyledLogo = styled(Images.PodcastifyLogo)`
  cursor: pointer;
`;

const LoginForm = styled(UserForm)`
  margin: auto auto;
`;

export default function Login() {
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
  return (
    <LoginPageWrapper>
      <StyledLogo />
      <LoginForm formTitle={"會員登入"} formInputs={formInputs}/>
    </LoginPageWrapper>
  );
}
