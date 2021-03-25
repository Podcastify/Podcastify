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
import { changeUserProfile } from "../WebAPI/users";
import {
  MEDIA_QUERY_XXL,
  MEDIA_QUERY_XL,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_XS,
} from "../constants/breakpoints";

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

const ManagementForm = styled(UserForm)`
  margin-top: 5px;
`;

const PageTitle = styled.h1`
  color: #ffffff;
  font-weight: normal;
  ${MEDIA_QUERY_XXL} {
    font-size: 52px;
  }
  ${MEDIA_QUERY_XL} {
    font-size: 36px;
  }
  ${MEDIA_QUERY_LG} {
    font-size: 30px;
  }
  ${MEDIA_QUERY_MD} {
    font-size: 30px;
  }
  ${MEDIA_QUERY_SM} {
    font-size: 30px;
  }
  ${MEDIA_QUERY_XS} {
    fontsize: 22px;
  }
`;

const TitleContainer = styled(SectionContainer)`
  padding: 0;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  ${MEDIA_QUERY_XXL} {
  }
  ${MEDIA_QUERY_XL} {
  }
  ${MEDIA_QUERY_LG} {
  }
  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    align-items: start;
  }
  ${MEDIA_QUERY_SM} {
    flex-direction: column;
    align-items: start;
  }
  ${MEDIA_QUERY_XS} {
    flex-direction: column;
    align-items: start;
  }
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
  ${MEDIA_QUERY_MD} {
  }
  ${MEDIA_QUERY_SM} {
  }
  ${MEDIA_QUERY_XS} {
    & ~ & {
      margin-top: 5px;
    }
  }
`;

export default function UserManagement() {
  const { userInfo } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const handleManagementBtnClick = (e) => {
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
          required: true,
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
            display: isEditing ? "" : "none",
          },
          required: true,
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
            display: isEditing ? "" : "none",
          },
          required: true,
        },
        title: !isEditing ? "" : "確認新密碼",
      },
    ];
    return preparedInputs;
  }, [isEditing, userInfo]);

  const { inputs, setInputs, handlers } = useInputs(formInputs);

  const handleChangeBtnClick = async (e) => {
    if (inputs[3].attributes.value !== inputs[2].attributes.value) {
      const newInputs = [
        ...inputs,
        { ...inputs[2], errorMessage: "兩次密碼不符" },
        { ...inputs[3], errorMessage: "兩次密碼不符" },
      ];
      setInputs(newInputs);
      return alert("密碼不符");
    }
    const filters = ["oldPassword", "newPassword"];
    const updateInformation = {};
    inputs.forEach((input) => {
      for (const filter of filters) {
        if (filter === input.attributes.name) {
          updateInformation[filter] = input.attributes.value;
        }
      }
    });
    const { oldPassword: password, newPassword } = updateInformation;
    if (!password || !newPassword) return alert("請輸入所有欄位");
    let result;
    try {
      result = await changeUserProfile(password, newPassword);
    } catch (err) {}
    if (result.ok) {
      alert("profile updated");
      setIsEditing(false);
    } else {
      alert("something went wrong");
    }
  };

  return (
    <Container>
      <Main>
        <Div>
          <SectionContainer>
            <TitleContainer>
              <PageTitle>會員資料</PageTitle>
              <ManageButton key="management" onClick={handleManagementBtnClick}>
                管理我的帳戶
              </ManageButton>
              {isEditing && (
                <ManageButton key="change" onClick={handleChangeBtnClick}>
                  確認變更資料
                </ManageButton>
              )}
            </TitleContainer>
            <ManagementForm
              id="profileForm"
              inputs={inputs}
              handlers={handlers}
            />
          </SectionContainer>
        </Div>
      </Main>
    </Container>
  );
}
