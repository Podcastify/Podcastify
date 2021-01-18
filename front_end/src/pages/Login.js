import { useEffect, useState } from "react";
import styled from "styled-components";
import UserForm from "../components/UserForm";
import Images from "../components/Images";
import coverImg from "../images/loginPageCover.jpg"

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

const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const CoverImage = styled.div`
  height: 100vh;
  width: 57%;  
  background-image: url(${coverImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const FormArea = styled.div`
  width: 43%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
    {
      attributes: {
        type: "button",
        name: "toRegister",
        id: "toRegister",
        required: true,
        value: "註冊會員",
      },
      title: "還不是會員嗎？",
      errorMessage: "",
    },
  ];
  return (
    <LoginPageWrapper>
      <MainContainer>
        <CoverImage></CoverImage>
        <FormArea>
          <StyledLogo />
          <LoginForm formTitle={"會員登入"} formInputs={formInputs} />
        </FormArea>
      </MainContainer>
    </LoginPageWrapper>
  );
}
