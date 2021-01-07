import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from './UserInput';
const StyledForm = styled.form`
  max-width: 522px;
  background: linear-gradient(#F15A24AD, black);;
  font-family: Helvetica;
`;

const StyledFormTitle = styled.h1`
  height: 83px;
  font-size: 59px;
  line-height: 1.2;
  letter-spacing: 5px;
  color: #ffffff;
  font-weight: normal;
`

export default function UserForm() {

  return (
    <StyledForm>
      <StyledFormTitle>FORM</StyledFormTitle>
      <Input />
      <Input />
      <Input />
      <Input type="submit" />
      <Input type="button" />
    </StyledForm>
  )
}

