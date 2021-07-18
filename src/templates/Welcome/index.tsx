import Container from 'components/Container';
import Heading from 'components/Heading';
import WelcomeImage from 'components/WelcomeImage';
import MediaMatch from 'components/MediaMatch';
import Link from 'components/Link';

import * as S from './styles';

const WelcomeTemplate = () => (
  <Container as="section" id="welcome">
    <S.MainContentContainer>
      <S.TopTeardrop size="small" color="secondary" />
      <S.BottomTeardrop />

      <S.InfoContentContainer>
        <Heading>Bem-vindo, Márcio!</Heading>

        <S.Text>
          Para você aproveitar nossas oportunidades primeiro você precisa estar
          dentro de um grupo, estamos aqui para lhe ajudar.
        </S.Text>

        <S.BoldText>O que você prefere?</S.BoldText>

        <S.ActionsContainer>
          <S.ActionButton>Criar um grupo</S.ActionButton>
          <S.ActionButton>Entrar em um grupo</S.ActionButton>
        </S.ActionsContainer>
      </S.InfoContentContainer>

      <MediaMatch greaterThan="large">
        <WelcomeImage />
      </MediaMatch>
    </S.MainContentContainer>

    <S.FooterContent>
      <S.Text>
        <small>
          Qualquer dúvida que você tiver é só nos chamar no nosso número
          de&nbsp;
          <Link href="https://wa.me/5511910898780" isExternal>
            WhatsApp.
          </Link>
        </small>
      </S.Text>
    </S.FooterContent>
  </Container>
);

export default WelcomeTemplate;
