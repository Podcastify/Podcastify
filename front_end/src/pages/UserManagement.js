import { useContext, useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { Main, Div } from "../components/Main";
import { UserContext } from "../context/context";
import UserForm from "../components/UserForm";
import useInputs from "../hooks/useInputs";
import {
  BtnContainer,
  BtnLogInContainer,
  BtnLogIn,
  ButtonName,
} from "../components/ButtonGroup";
import {} from "../WebAPI/users"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled(Container)`
  padding: 0 5%;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: unset;
  align-items: stretch;
`;

const PageTitle = styled.h1`
  color: #ffffff;
  font-size: 4rem;
  font-weight: normal;
`;

const TitleContainer = styled(SectionContainer)`
  padding: 0;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
`;

const ManageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 160px;
  height: 45px;
  border: 1px solid ${(props) => props.theme.primary_color_grey};
  border-radius: 3px;
  color: ${(props) => props.theme.primary_color};
  margin-left: 25px;
  font-size: 15px;
  padding: 10px 10px;

  &:hover {
    border-color: transparent;
    background-color: ${(props) => props.theme.hover_color};
  }

  &:active {
    border-color: transparent;
    background-color: ${(props) => props.theme.click_color};
  }
`;

const ChangeBtn = styled(ManageButton)`
`

export default function UserManagement() {
  const { userInfo } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false)
  console.log(1);
  const handleManagementBtnClick = (e) => {
    console.log(formInputs);
    setIsEditing(!isEditing);
  };

  const formInputs = useMemo(() => {
    const preparedInputs = [
      {
        attributes: {
          type: "text",
          readOnly: true,
          name: "username",
          value: userInfo ? userInfo.username : "TEST",
        },
        title: "帳號",
      },
      {
        attributes: {
          type: "password",
          name: "oldPassword",
          value: "",
          placeholder: isEditing ? "舊密碼" : "********",
          readOnly: !isEditing,
        },
        title: isEditing ? "請輸入舊密碼" : "密碼",
      },
      {
        attributes: {
          type: "password",
          name: "newPassword",
          value: "",
          placeholder: "您的新密碼",
          style: {
            display: isEditing ? "" : "none"
          },
        },
        title: !isEditing ? "" : "請輸入新密碼",
      },
      {
        attributes: {
          type: "password",
          name: "newPassword2",
          value: "",
          placeholder: "請再輸入一次新密碼",
          style: {
            display: isEditing ? "" : "none"
          },
        },
        title: !isEditing ? "" : "確認新密碼",
      },
    ];
    return preparedInputs
  }, [isEditing, userInfo])

  const { inputs, handlers } = useInputs(formInputs)
  
  const handleChangeBtnClick = e => {
    
  }

  return (
    <Container>
      <Main>
        <Div>
          <SectionContainer>
            <TitleContainer>
              <PageTitle>會員資料</PageTitle>
              <ManageButton onClick={handleManagementBtnClick}>
                管理我的帳戶
              </ManageButton>
              <ChangeBtn onClick={handleChangeBtnClick}>確認變更資料</ChangeBtn>
            </TitleContainer>
            <UserForm
              inputs={inputs}
              handlers={handlers}
            />
          </SectionContainer>
        </Div>
      </Main>
    </Container>
  );
}
