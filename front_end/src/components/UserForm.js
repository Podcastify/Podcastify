import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from './UserInput';
const StyledForm = styled.form`
  max-width: 522px;
  background: linear-gradient(#F15A24AD, black);;
  font-family: Helvetica;
`;

export default function UserForm() {

  return (
    <StyledForm>
      <h1>FORM</h1>
      <Input />
      <Input />
      <Input />
      <Input type="submit" />
      <Input type="button" />
    </StyledForm>
  )
}

