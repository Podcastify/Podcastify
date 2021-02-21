import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./UserInput";
import useInputs from "../hooks/useInputs";

const StyledForm = styled.form`
  max-width: 32.7rem;
  font-family: Helvetica;
  overflow-y: scroll;
  height: fill-available;
  // 在 chrome, Safari 上隱藏 scrollbar
  &::-webkit-scrollbar {
    display: none;
  }

  // 在 IE, Edge 上隱藏 scrollbar
  -ms-overflow-style: none;
`;

const StyledFormTitle = styled.h1`
  ${({ formTitle }) => formTitle && "height: 5rem;"}
  font-size: 3.75rem;
  line-height: 1.2;
  letter-spacing: 5px;
  color: #ffffff;
  font-weight: normal;
`;

export default function UserForm({
  formTitle,
  className,
  inputs,
  handlers,
  onSubmit,
}) {
  // const { inputs, handlers } = useInputs(formInputs);

  return (
    <StyledForm className={className} onSubmit={onSubmit} method="post">
      <StyledFormTitle>{formTitle}</StyledFormTitle>
      {inputs.map((input) => (
        <Input {...input} handlers={handlers} key={input.attributes.name} />
      ))}
    </StyledForm>
  );
}
