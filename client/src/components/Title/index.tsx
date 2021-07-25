import theme from 'styles/theme'
import * as S from './styles'

export type TitleStylesProps = {
  children?: React.ReactNode
  color?: keyof typeof theme.colors; 
  size?: keyof typeof theme.font.sizes;
  fontWeight?: keyof typeof theme.font;
  lineHeight?: keyof typeof theme.spacings;
  level?: 1 | 2 | 3 | 4 | 5 | 6 
} 

const Title = ({
  children, 
  color,
  size,
  fontWeight,
  lineHeight,
  level}: TitleStylesProps) => (
  <S.Title 
  color={color}
  size={size}
  fontWeight={fontWeight}
  lineHeight={lineHeight}
  level={level}>{children}</S.Title>   
)

export default Title
