import * as S from './styles'

export type TFontWeight = 'light' | 'regular' | 'medium'

export type TFontSize =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'huge'

export type TFontColor =
  | 'primary'
  | 'secondary'
  | 'lightGray'
  | 'gray'
  | 'lightBlue'
  | 'neutralBlue'
  | 'darkBlue'
  | 'black'
  | 'white'

export type TypographyProps = {
  children: React.ReactNode
  as?: React.ElementType
  weight?: TFontWeight
  size?: TFontSize
  color?: TFontColor
}

const Typography = ({
  children,
  as = 'h1',
  color = 'black',
  size = 'medium',
  weight = 'regular'
}: TypographyProps) => (
  <S.Typography as={as} color={color} size={size} weight={weight}>
    {children}
  </S.Typography>
)

export default Typography
