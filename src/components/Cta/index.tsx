import Typography from 'components/Typography'
import Button from 'components/Button'

import * as S from './styles'

export type CtaProps = {
  title: string
  hasTwoOptions?: boolean
  firstOptionLabel: string
  secondOptionLabel?: string
}

const Cta = ({
  title,
  hasTwoOptions = false,
  firstOptionLabel,
  secondOptionLabel
}: CtaProps) => (
  <S.CtaWrapper>
    <S.LabelWrapper>
      <Typography as="p" weight="medium">
        {title}
      </Typography>
    </S.LabelWrapper>
    <S.OptionsButtonWrapper hasTwoOptions={hasTwoOptions}>
      <Button>{firstOptionLabel}</Button>
      {hasTwoOptions && <Button>{secondOptionLabel}</Button>}
    </S.OptionsButtonWrapper>
  </S.CtaWrapper>
)

export default Cta
