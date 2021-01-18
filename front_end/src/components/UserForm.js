import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./UserInput";
import useInputs from "../hooks/useInputs";
const StyledForm = styled.form`
  max-width: 522px;
  font-family: Helvetica;
`;

const StyledFormTitle = styled.h1`
  height: 83px;
  font-size: 59px;
  line-height: 1.2;
  letter-spacing: 5px;
  color: #ffffff;
  font-weight: normal;
`;

export default function UserForm({ formTitle, className, formInputs }) {

  const { inputs, handlers } = useInputs(formInputs);

  return (
    <StyledForm className={className}>
      <StyledFormTitle>{formTitle}</StyledFormTitle>
      {inputs.map((input) => (
        <Input {...input} handlers={handlers} key={input.attributes.name} />
      ))}
    </StyledForm>
  );
}
