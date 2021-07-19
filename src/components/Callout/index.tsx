import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type CallOutProps = {
  title?: string
  subtitle?: string
  children?: React.ReactNode
  image?: string
  imageDirection?: 'left' | 'right'
  imageText?: string
  details?: boolean
}

const Callout = ({
  title,
  subtitle,
  children,
  image,
  imageDirection = 'right',
  imageText,
  details = false
}: CallOutProps) => (
  <S.Wrapper imageDirection={imageDirection}>
    <S.ContentWrapper>
      {!!title && <S.Title>{title}</S.Title>}
      {!!subtitle && <S.SubTitle>{subtitle}</S.SubTitle>}
      {!!children && <S.Content>{children}</S.Content>}
    </S.ContentWrapper>

    <MediaMatch greaterThan="medium">
      <S.ImageWrapper>
        <S.Image src={image} alt={imageText} aria-label="Callout Image" />
      </S.ImageWrapper>
    </MediaMatch>

    {!!details && (
      <S.Details>
        <S.ShapePrimary
          src="/img/layout/float-primary.svg"
          aria-label="Shape Primary"
        />
        <MediaMatch greaterThan="medium">
          <S.ShapeCircle aria-label="Shape Circle" />
          <S.ShapeSemiCircle
            src="/img/layout/semi-circle.svg"
            aria-label="Shape Semi Circle"
          />
        </MediaMatch>
        <S.ShapeSecondary
          src="/img/layout/float-secondary.svg"
          aria-label="Shape Secondary"
        />
      </S.Details>
    )}
  </S.Wrapper>
)

export default Callout
