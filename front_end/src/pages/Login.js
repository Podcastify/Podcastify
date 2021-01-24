import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import UserForm from "../components/UserForm";
import Images from "../components/Images";
import coverImg from "../images/loginPageCover.jpg";
import { login } from "../webAPI/users";
import useInputs from "../hooks/useInputs";
import { UserContext } from "../context/context";
import { useHistory } from 'react-router-dom';

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
  const { user, setUser } = useContext(UserContext);
  const history = useHistory()

  const handleToRegisterBtn = e => {
    e.preventDefault();
    history.push('/register');
  }

  const handleLogin = async e => {
    e.preventDefault();
    const filters = ['username', 'password'];
    const loginInformation = {};
    inputs.forEach(input => {
      for (const filter of filters) {
        if (filter === input.attributes.name) {
          loginInformation[filter] = input.attributes.value
        }
      }
    })
    let result
    try {
      result = await login(loginInformation);
    } catch (err) {
      console.log(err)
    }
    if (result.ok) {
      window.localStorage.removeItem('podcastifyToken');
      window.localStorage.setItem('podcastifyToken', result.token)
      history.push('/');
    } else {
      window.localStorage.removeItem('podcastifyToken');
      alert(result.errorMessage);
      return;
    }
  }
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
    {
      attributes: {
        type: "button",
        name: "toRegister",
        id: "toRegister",
        required: true,
        value: "註冊會員",
        onClick: handleToRegisterBtn
      },
      title: "還不是會員嗎？",
      errorMessage: "",
    },
  ];

  const { inputs, handlers } = useInputs(formInputs);

  return (
    <LoginPageWrapper>
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
        </FormArea>
      </MainContainer>
    </LoginPageWrapper>
  );
}
