import Typography from 'components/Typography'
import Button from 'components/Button'

import * as S from './styles'

export type TOption = {
  label: string
  action?: () => void
}

export type CtaProps = {
  title: string
  hasTwoOptions?: boolean
  firstOption: TOption
  secondOption?: TOption
}

const Cta = ({
  title,
  hasTwoOptions = false,
  firstOption,
  secondOption
}: CtaProps) => (
  <S.CtaWrapper>
    <S.LabelWrapper>
      <Typography as="p" weight="medium">
        {title}
      </Typography>
    </S.LabelWrapper>
    <S.OptionsButtonWrapper hasTwoOptions={hasTwoOptions}>
      <Button onClick={firstOption.action}>{firstOption.label}</Button>
      {hasTwoOptions && (
        <Button onClick={secondOption?.action}>{secondOption?.label}</Button>
      )}
    </S.OptionsButtonWrapper>
  </S.CtaWrapper>
)

export default Cta
