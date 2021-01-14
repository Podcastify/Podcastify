import React from "react";
import styled from "styled-components";

const BtnContainer = styled.button`
  cursor: pointer;
  font-size: 17px;
  border: 3px solid #d0d0d0;
  color: #d0d0d0;
  padding: 6px 10px;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    border: hidden;
    color: #ffffff;
    background: #8fe2ff;
    border: 3px solid #8fe2ff;
  }

  &:active {
    border: hidden;
    color: #ffffff;
    background: #0079f2;
    border: 3px solid #0079f2;
  }
`;

const ButtonName = styled.div`
  text-align: center;
  margin: 0 10px;
`;

const BtnLogInContainer = styled.div`
  cursor: pointer;
  width: 100px;
  font-size: 17px;
  border: 3px solid #d0d0d0;
  border-radius: 14px;
  color: #d0d0d0;
  padding: 8px 6px;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    border: hidden;
    color: #ffffff;
    background: #8fe2ff;
    border: 3px solid #8fe2ff;
  }

  &:active {
    border: hidden;
    color: #ffffff;
    background: #0079f2;
    border: 3px solid #0079f2;
  }
`;

const BtnLogIn = styled(ButtonName)`
  letter-spacing: 6px;
  text-align: center;
`;

export default function ButtonGroup() {
  return (
    <>
      <BtnContainer>
        <ButtonName>管理我的帳戶</ButtonName>
      </BtnContainer>
      <div>------</div>
      <BtnLogInContainer>
        <BtnLogIn>登入</BtnLogIn>
      </BtnLogInContainer>
    </>
  );
}
