import styled from "styled-components";

export const CommentsContainer = styled.div`
  width: 335px;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #2196f3;
  border-radius: 4px;
  padding: 24px 16px;
  margin: 10px 20px;
`;

export const CommentText = styled.p`
  color: #011fbb;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const userProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const userImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #334bc8;
  margin-right: 16px;
`;

export const userName = styled.p`
  color: #000;
`;
