import * as S from './styles'
import Semicircle from './Semicircle'

export type BannerProps = {
  title: string
  contactNumber: string
}

const Banner = ({ title, contactNumber }: BannerProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Description>
        Para você aproveitar nossas oportunidades primeiro você precisa estar
        dentro de um grupo, estamos aqui para lhe ajudar.
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
      <S.BannerImage
        src="../assets/banner-image.png"
        alt="Mulheres reunidas sorrindo"
      />
    </S.ImageWrapper>

    <S.Footer>
      <span>
        Qualquer dúvida que você tiver é só nos chamar no nosso número de
        <S.Link
          href={`https://api.whatsapp.com/send?phone=55${contactNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </S.Link>
        .
      </span>
    </S.Footer>
  </S.Wrapper>
)

export default Banner
