import * as S from './styles';

import Contact from '../Contact';
import Image from 'next/image';
import Link from 'next/link';
import dropBlue from '../../public/images/drop-blue.svg';
import dropPersimmon from '../../public/images/drop-persimmon.svg';
import imageWelcome from '../../public/images/welcome.png';

function Welcome({ name }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.DropImg top left>
          <Image src={dropPersimmon} width={62} height={62} alt="Imagem de uma gota na cor caqui" />
        </S.DropImg>
        <S.WelcomeUser>
          <S.Texts>
            <S.Title>Bem vindo {name},</S.Title>
            <S.Description>
              Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui
              para lhe ajudar.
            </S.Description>
          </S.Texts>
          <S.Choose>
            <S.Description>O que você prefere?</S.Description>
            <S.Links>
              <Link href="/">
                <a title="Criar um grupo">Criar um grupo</a>
              </Link>
              <Link href="/">
                <a title="Entrar em um grupo">Entrar em um grupo</a>
              </Link>
            </S.Links>
          </S.Choose>
        </S.WelcomeUser>
        <S.BackgroundImg>
          <Image
            src={imageWelcome}
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            alt="Três amigas sorrindo, feliz por estarem juntas"
            title="Junte seus amigos pra comprar com desconto."
          />
        </S.BackgroundImg>
        <S.DropImg bottom right>
          <Image src={dropBlue} width={100} height={100} alt="Imagem de uma gota na cor azul" />
        </S.DropImg>
      </S.Container>
      <Contact />
    </S.Wrapper>
  );
}

export default Welcome;
