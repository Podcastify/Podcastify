import styled from "styled-components";
import DemoImage from "../images/avatar.jpg";

const InfoCardWrapper = styled.section`
  margin: 0 10px;
  width: 15%;
  border: 1px solid #9d9d9d;
`;

const InfoCardPhoto = styled.div`
  width: 100%;
  padding-bottom: 85%;
  background: url(${DemoImage}) center / cover;
  text-decoration: none;
`;

const InfoCardTitle = styled.h2`
  margin: 10px 0 15px 0;
  font-weight: bold;
  line-height: 1.19;
  letter-spacing: 0.6px;
  text-decoration: none;
  width: 100%; // 可改為指定寬度
  overflow: hidden; // 超出範圍的部分隱藏
  white-space: nowrap; // 不自動斷行
  text-overflow: ellipsis; // 出現省略號
`;

const InfoCardContent = styled.div`
  margin-top: 24px;
  color: #3b3b3b;
  font-size: 18px;
  letter-spacing: 0.3px;
  line-height: 1.3;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4; //行數
  -webkit-box-orient: vertical;
`;

export default function InfoCard() {
  return (
    <InfoCardWrapper>
      <InfoCardPhoto />
      <InfoCardTitle>社畜日記</InfoCardTitle>
      <InfoCardContent>
        用隨性的對話包裝知識， 用認真的口吻胡說八道。
        我們閒聊也談正經事，讓生硬的國際大事變得鬆軟。用隨性的對話包裝知識，
        用認真的口吻胡說八道。 我們閒聊也談正經事，讓生硬的國際大事變得鬆軟...
      </InfoCardContent>
    </InfoCardWrapper>
  );
}
