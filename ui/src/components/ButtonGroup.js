import styled from "styled-components";

export const BtnContainer = styled.button`
  cursor: pointer;
  font-size: 17px;
  border: 3px solid ${(props) => props.theme.grey};
  color: ${(props) => props.theme.grey};
  padding: 6px 10px;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    border: hidden;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.hover_color};
    border: 3px solid ${(props) => props.theme.hover_color};
  }

  &:active {
    border: hidden;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.click_color};
    border: 3px solid ${(props) => props.theme.click_color};
  }
`;

export const ButtonName = styled.div`
  text-align: center;
  margin: 0 10px;
`;

export const BtnLogInContainer = styled.div`
  cursor: pointer;
  width: 100px;
  font-size: 17px;
  border: 3px solid ${(props) => props.theme.grey};
  border-radius: 14px;
  color: ${(props) => props.theme.grey};
  padding: 8px 6px;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    border: hidden;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.hover_color};
    border: 3px solid ${(props) => props.theme.hover_color};
  }

  &:active {
    border: hidden;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.click_color};
    border: 3px solid ${(props) => props.theme.click_color};
  }
`;

export const BtnLogIn = styled(ButtonName)`
  letter-spacing: 6px;
  text-align: center;
`;
