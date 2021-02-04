import { useContext } from "react";
import styled from "styled-components";
import { Main, Div } from "../components/Main"
import { UserContext } from "../context/context";
import UserForm from "../components/UserForm"
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";
import { BtnContainer, BtnLogInContainer, BtnLogIn, ButtonName } from "../components/ButtonGroup"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled(Container)`
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: unset;
  align-items: stretch;
`

const PageTitle = styled.h1`
  color: #ffffff;
  font-size: 4rem;
  font-weight: normal;
`

const TitleContainer = styled(SectionContainer)`
  height:auto;
  flex-direction: row;
  align-items: center;
`

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
  padding: 10px 32px;

  &:hover {
    border-color: transparent;
    background-color: ${(props) => props.theme.hover_color};
  }

  &:active {
    border-color: transparent;
    background-color: ${(props) => props.theme.click_color};
  }
`;

export default function UserManagement() {

  const { userInfo } = useContext(UserContext);

  const formInputs = [
    {
      attributes: {
        type: "text",
        readOnly: true,
        name: "username",
        value: "TEST",
      },
      title: "帳號"
    },
    {
      attributes: {
        type: "password",
        name: "oldPassword",
        value: "",
        placeholder: "舊密碼"
      },
      title: "請輸入舊密碼"
    },
    {
      attributes: {
        type: "password",
        name: "newPassword",
        value: "",
        placeholder: "您的新密碼"
      },
      title: "請輸入新密碼"
    },
    {
      attributes: {
        type: "password",
        name: "newPassword2",
        value: "",
        placeholder: "請再輸入一次新密碼"
      },
      title: "確認新密碼"
    },
  ]

  return (
    <Container>
      <Navbar />
      <Main>
        <Div>
          <SectionContainer>
            <TitleContainer>
              <PageTitle>會員資料</PageTitle>
              <ManageButton>
                管理我的帳戶
              </ManageButton>
              <ManageButton>
                確認修改
            </ManageButton>
            </TitleContainer>
            <UserForm formInputs={formInputs}>
            </UserForm>
          </SectionContainer>
        </Div>
      </Main>
      <MusicPlayer />
    </Container>
  )
}