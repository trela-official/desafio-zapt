import styled from "styled-components";

export const WelcomeContainer = styled.div`
  width: 100%;
  height: 590px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 80%;
  display: flex;
`;

export const SVGred = styled.svg`
  left: 30px;
  bottom: 20px;
  position: relative;
  width: 62px;
  height: 62px;
`;

export const SVGBlue = styled.svg`
  right: 50px;
  top: 210px;
  position: relative;
  width: 100px;
  height: 100px;
`;

export const InfoContainer = styled.div`
  width: 60%;
  padding: 50px 50px;
`;

export const WelcomeTitle = styled.h1`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const WelcomeText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #7b7b7b;
  margin-bottom: 24px;
`;

export const WelcomeSubtitle = styled.h4`
  margin-bottom: 12px;
`;

export const ImageContainer = styled.div`
  width: 40%;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    border-radius: 0px 4px 4px 0px;
  }
`;
