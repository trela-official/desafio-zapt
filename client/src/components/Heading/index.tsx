import theme from 'styles/theme'
import * as S from './styles'

export type HeadingProps = {
  color?: string
  size?: keyof typeof theme.font.sizes
  fontWeight?: 300 | 400 | 500
  lineHeight?: number | string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

const Heading = ({
  color = '#000000',
  size = 'normal',
  fontWeight = 500,
  lineHeight = 1.5,
  level = 1,
  children
}: HeadingProps) => (
  <S.Wrapper
    level={level}
    color={color}
    size={size}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
  >
    {children}
  </S.Wrapper>
)

export default Heading
