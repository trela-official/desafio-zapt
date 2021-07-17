import Button from "components/Button";
import Quote from "components/Quote";
import BannerImage from "components/BannerImage";

import * as S from "./styles";

const Welcome = () => (
  <S.Wrapper>
    <Quote size="small" color="red" top="-20px" left="-20px" />

    <S.Content>
      <S.Presentation>
        <h1>Bem vindo Marcio,</h1>
        <p>
          Para você aproveitar nossas oportunidades primeiro você precisa estar
          dentro de um grupo, estamos aqui para lhe ajudar.
        </p>
      </S.Presentation>

      <S.ActionsWrapper>
        <p>O que você prefere?</p>
        <S.ButtonsWrapper>
          <Button size="medium">Criar um grupo</Button>
          <Button size="large">Entrar em um grupo</Button>
        </S.ButtonsWrapper>
      </S.ActionsWrapper>
    </S.Content>

    <BannerImage />

    <Quote size="medium" color="blue" bottom="-20px" right="-31px" />
  </S.Wrapper>
);

export default Welcome;
