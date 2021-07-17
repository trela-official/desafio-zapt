import Typography from 'components/Typography'

import * as S from './styles'

type SubtitleWithLinkProps = {
  text: string
  link: {
    label: string
    href: string
  }
}

const SubtitleWithLink = ({ text, link }: SubtitleWithLinkProps) => (
  <S.Wrapper>
    <Typography as="p" size="small" color="gray">
      {text} <a href={link.href}>{link.label}</a>
    </Typography>
  </S.Wrapper>
)

export default SubtitleWithLink
