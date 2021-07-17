import * as S from './styles'
import Semicircle from './Semicircle'

const Banner = () => (
  <>
    <S.Wrapper>
      <S.Content>
        <S.Title>Bem vindo Marcio,</S.Title>
        <S.Description>
          Para você aproveitar nossas oportunidades primeiro você precisa estar
          dentro de um grupo, estamos aqui para lhe ajudar.{' '}
        </S.Description>

        <S.ContentAction>
          <S.ActionQuestion>O que você prefere?</S.ActionQuestion>

          <S.ButtonWrapper>
            <S.ButtonAction>Criar um grupo</S.ButtonAction>
            <S.ButtonAction>Entrar em um grupo</S.ButtonAction>
          </S.ButtonWrapper>
        </S.ContentAction>
      </S.Content>

      <S.ImageWrapper>
        <S.SemicircleWrapper>
          <Semicircle />
        </S.SemicircleWrapper>
        <S.BannerImage src="../assets/banner-image.png" alt="" />
      </S.ImageWrapper>
    </S.Wrapper>

    <S.Footer>
      <span>
        Qualquer dúvida que você tiver é só nos chamar no nosso número de
        <S.Link href="http://" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </S.Link>
        .
      </span>
    </S.Footer>
  </>
)

export default Banner
