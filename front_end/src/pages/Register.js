//TODO Register page layout
import { useEffect, useState } from "react";
import styled from "styled-components";
import UserForm from "../components/UserForm";
import Images from "../components/Images";

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
`;

export default function Register() {
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
        id: "password_doucle_check",
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
  return (
    <RegisterPageWrapper>
      <StyledLogo />
      <RegisterForm formTitle={"會員註冊"} formInputs={formInputs}/>
    </RegisterPageWrapper>
  );
}
