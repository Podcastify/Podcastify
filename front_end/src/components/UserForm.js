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

export default function UserForm({ formTitle, className }) {
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
