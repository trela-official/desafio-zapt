import React from 'react';

import {
  Heading,
  Button,
  Typography,
  WelcomeImage,
  Container,
} from 'components';

import dropBlue from '../../assets/drop_blue.svg';
import dropRed from '../../assets/drop_red.svg';

import * as Styled from './styles';

const Welcome = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <Styled.CardWrapper>
          <Styled.DropRed>
            <Styled.Image src={dropRed} alt="drop red" />
          </Styled.DropRed>
          <Styled.Content>
            <Styled.ContentText>
              <Heading text="Bem vindo Marcio," />
              <Typography color="darkgray" size="medium">
                Para você aproveitar nossas oportunidades primeiro você precisa
                estar dentro de um grupo, estamos aqui para lhe ajudar.
              </Typography>
            </Styled.ContentText>
            <Styled.ContentLinks>
              <Typography color="black" size="medium" bold="500">
                O que você prefere ?
              </Typography>
              <Styled.ButtonsWrapper>
                <Button label="Criar um grupo" />
                <Button label="Entrar em um grupo" />
              </Styled.ButtonsWrapper>
            </Styled.ContentLinks>
          </Styled.Content>
          <Styled.ImageWrapper>
            <WelcomeImage />
          </Styled.ImageWrapper>
          <Styled.DropBlue>
            <Styled.Image src={dropBlue} alt="drop blue" />
          </Styled.DropBlue>
        </Styled.CardWrapper>

        <Typography color="darkgray" size="small">
          Qualquer dúvida que você tiver é só nos chamar no nosso número de
          <span> WhatsApp.</span>
        </Typography>
      </Styled.Wrapper>
    </Container>
  );
};

export default Welcome;
