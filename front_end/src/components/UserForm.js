import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./UserInput";
import useInputs from "../hooks/useInputs";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
} from "../constants/breakpoints";

const StyledForm = styled.form`
  max-width: 32.7rem;
  overflow-y: scroll;
  height: fill-available;
  // 在 chrome, Safari 上隱藏 scrollbar
  &::-webkit-scrollbar {
    display: none;
  }

  // 在 IE, Edge 上隱藏 scrollbar
  -ms-overflow-style: none;
  ${MEDIA_QUERY_MD} {
    width: 100%;
  }

  ${MEDIA_QUERY_SM} {
    width: 100%;
  }

  ${MEDIA_QUERY_XS} {
    width: 100%;
    margin: 0;
  }
`;

const StyledFormTitle = styled.h1`
  ${({ formTitle }) => formTitle && "height: 5rem;"}
  font-size: 52px;
  line-height: 1.2;
  letter-spacing: 5px;
  color: ${(props) => props.theme.white};
  font-weight: normal;
  ${MEDIA_QUERY_MD} {
    font-size: 30px
  }

  ${MEDIA_QUERY_SM} {
    font-size: 28px
  }

  ${MEDIA_QUERY_XS} {
    font-size: 22px
  }
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
