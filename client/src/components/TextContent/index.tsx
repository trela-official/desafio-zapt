import * as S from './styles'

export type TextContentProps = {
  children: string
}
const TextContent = ({children}: TextContentProps) => (
  <S.Wrapper>
    {children}
  </S.Wrapper>
)

export default TextContent
