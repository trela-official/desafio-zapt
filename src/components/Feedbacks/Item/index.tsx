import React, { Children } from "react";
import * as S from "./styles";

import { IItem } from "../../../models/item.model";

export const Item: React.FC<IItem> = ({
  children,
  userName,
  userImage,
  userLocation,
  backgroundImg,
}) => (
  <S.ItemContainer
    userName={userName}
    userImage={userImage}
    backgroundImg={backgroundImg}
  >
    <S.HandleContent>
      <S.UserText>{children}</S.UserText>
      <S.UserInfo>
        <S.UserImage src={userImage} />
        <S.UserProfile>
          <S.UserName>{userName}</S.UserName>
          <S.UserLocation>{userLocation}</S.UserLocation>
        </S.UserProfile>
      </S.UserInfo>
    </S.HandleContent>
  </S.ItemContainer>
);
