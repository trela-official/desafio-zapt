import styled from "styled-components";

import { IItem } from "../../../models/item.model";

export const ItemContainer = styled.div<IItem>`
  width: 600px;
  height: 360px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.backgroundImg});
  margin: 5px;
  border-radius: 8px;
  color: #fff;
`;

export const HandleContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

export const UserText = styled.p`
  width: 80%;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-right: 16px;
`;

export const UserProfile = styled.div``;

export const UserName = styled.p``;

export const UserLocation = styled.span`
  font-size: 12px;
`;
