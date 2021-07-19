import react from "react";
import * as S from "./styles";
import { Button } from "../Button";
import welcome from "../../images/welcome.jpg";

export const Welcome = () => {
  return (
    <S.WelcomeContainer>
      <S.ContentContainer>
        <S.HandleContent>
        <S.SVGred
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 31C0 13.8792 13.8792 0 31 0C48.1208 0 62 13.8792 62 31C62 48.1208 48.1208 62 31 62H0L0 31Z"
            fill="#FF5B58"
          />
        </S.SVGred>
        <S.InfoContainer>
          <S.WelcomeTitle>Bem vindo Marcio,</S.WelcomeTitle>
          <S.WelcomeText>
            Para você aproveitar nossas oportunidades primeiro você precisa
            estar dentro de um grupo, estamos aqui para lhe ajudar
          </S.WelcomeText>
          <S.WelcomeSubtitle>O que você prefere?</S.WelcomeSubtitle>
          <Button>Criar um grupo</Button>
          <Button>Entrar em um grupo</Button>
        </S.InfoContainer>
        <S.ImageContainer>
          <img src={welcome} alt="" />
        </S.ImageContainer>
        <S.SVGBlue
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100H0L0 50Z"
            fill="#334BC8"
          />
        </S.SVGBlue>
        </S.HandleContent>
        <S.BottomText>
          Qualquer dúvida que você tiver é só nos chamar no nosso número de{" "}
          <a href='#'>WhatsApp</a>.
        </S.BottomText>
      </S.ContentContainer>
    </S.WelcomeContainer>
  );
};
