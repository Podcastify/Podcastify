import { useContext } from "react";
import styled from "styled-components";
import { Main, Div } from "../components/Main"
import { UserContext } from "../context/context";
import UserForm from "../components/UserForm"
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
          <UserForm
            formTitle={"會員資料管理"}
            formInputs={formInputs}
          />
        </Div>
      </Main>
      <MusicPlayer />
    </Container>
  )
}