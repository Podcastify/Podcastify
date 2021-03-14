import styled from "styled-components";
import {
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_XXL,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_XS,
} from "../constants/breakpoints";

const StyledInputContainer = styled.div`
  & ~ & {
    margin-top: 18px;
  }
  ${({ id }) => id === "login" && `margin-top: 70px !important;`}
`;

const StyledInput = styled.input`
  width: 100%;
  height: 72px;
  padding-left: 18px;
  box-sizing: border-box;
  border: 3px solid #ffffff;
  border-radius: 14px;
  color: #ffffff;
  font-size: 30px;
  line-height: 1.2;
  opacity: 0.5;
  background: rgba(0, 0, 0, 0);
  transition: all 0.5s;
  ${({ type }) =>
    (type === "button" || type === "submit") &&
    `&:hover {
      opacity: 1;
      background: #0079F2;
      border-color: #0079F2;
      cursor: pointer;
    }`}

  ${({ readOnly }) =>
    !readOnly
      ? `  &:focus {
    background: #9d9d9d;
    opacity: 1;
    caret-color: white;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    color: #bbbbbb;
  }
  &:hover {
    opacity: 0.5;
    background: rgb(65, 47, 42);
  }`
      : `
    border: none;
    &:focus {
      outline: none;
    }
  `}

  ${MEDIA_QUERY_MD} {
    height: 57px;
    font-size: 21px;
  }

  ${MEDIA_QUERY_SM} {
    height: 45px;
    font-size: 17px;
  }

  ${MEDIA_QUERY_XS} {
    height: 37px;
    font-size: 15px;
  }

`;

const StyledInputTitle = styled.h3`
  margin: 0px 0px 20px 5px;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: 3px;
  color: #ffffff;
  font-weight: normal;
  ${MEDIA_QUERY_XS} {
    font-size: 22px
  }

  ${MEDIA_QUERY_SM} {
    font-size: 22px
  }

  ${MEDIA_QUERY_MD} {
    font-size: 22px
  }
`;

const FormInputErrorMessage = styled.div`
  height: 28px;
  margin-top: 5px;
  color: #e9502e;
  font-size: 20px;
  text-align: left;
`;

export default function Input({
  className,
  title,
  attributes,
  handlers,
  errorMessage,
  onClick,
}) {
  const { handleChange, handleValidationCheck } = handlers;

  const handleInputChange = (e) => {
    handleChange(attributes.name, e.target.value);
  };

  const handleValidation = (e) => {
    handleValidationCheck(attributes.name, e.target.validationMessage);
  };
  return (
    <StyledInputContainer id={attributes.id} className={className}>
      <StyledInputTitle>{title}</StyledInputTitle>
      <StyledInput
        {...attributes}
        onInvalid={handleValidation}
        onChange={handleInputChange}
        // onBlur={handleValidation}
        onClick={
          onClick
            ? onClick
            : () => {
                return;
              }
        }
      />
      <FormInputErrorMessage>{errorMessage}</FormInputErrorMessage>
    </StyledInputContainer>
  );
}
