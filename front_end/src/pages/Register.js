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
  return (
    <RegisterPageWrapper>
      <StyledLogo />
      <RegisterForm formTitle={"會員註冊"} />
    </RegisterPageWrapper>
  );
}
