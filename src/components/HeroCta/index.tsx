import HeroTitle from 'components/HeroTitle'
import Cta from 'components/Cta'

import * as S from './styles'

const title = 'Bem vindo Marcio,'
const subtitle =
  'Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar.'

const HeroCta = () => (
  <>
    <S.TitleWrapper>
      <HeroTitle title={title} subtitle={subtitle} />
    </S.TitleWrapper>
    <Cta
      hasTwoOptions
      title="O que você prefere?"
      firstOptionLabel="Criar um grupo"
      secondOptionLabel="Entrar em um grupo"
    />
  </>
)

export default HeroCta
