//TODO caret styling

import { useState, useEffect } from 'react';
import styled from 'styled-components';
const StyledInputContainer = styled.div`
  & ~ & :{
    margin-top: 10px
  }
`

const StyledInput = styled.input`
  width: 100%;
  height: 72px;
  box-sizing: border-box;
  border: 3px solid #FFFFFF;
  border-radius: 14px;
  padding-left: 28px;
  color: #FFFFFF;
  font-size: 30px;
  line-height: 1.2;
  opacity: 0.5;
  background: rgba(0, 0, 0, 0);
  transition: all 0.5s;
  &:hover {
    opacity: 1;
    background: #9D9D9D;
  }
  ${({ type }) =>
    (type === "button" || type === 'submit')
    && `&:hover {
      opacity: 1;
      background: #0079F2;
      border-color: #0079F2;
    }`
  }
  &:focus {
    background: rgba(0, 0, 0, 0.5);
    caret-color: white;
  }
`

const FormInputErrorMessage = styled.div`
  height: 28px;
  color: #e9502e;
  font-size: 20px;
  text-align: left;
`

export default function Input(props) {
  return (
    <StyledInputContainer>
      <h3>帳號</h3>
      <StyledInput
        {...props}
        placeholder="帳 號"
        pattern="/[a-zA-Z0-9]/g"
      />
      <FormInputErrorMessage>錯誤訊息</FormInputErrorMessage>
    </StyledInputContainer>
  )
}