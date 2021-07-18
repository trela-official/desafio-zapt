import { Row, Col } from 'components/Grid'
import { H2, Body, BodySecondary } from 'components/Typography'
import { Card } from 'components/Card'
import { Masonry } from 'components/Masonry'
import { Avatar } from 'components/Avatar'
import * as S from 'components/Hbox'
import { mockCardData } from './mock-card.data'

export const SocialComments = () => (
  <>
    <Row center="xs">
      <Col>
        <H2>O que estão falando nas redes sociais</H2>
      </Col>
    </Row>

    <Masonry>
      {mockCardData.map(({ id, description, avatar, name }) => (
        <Card key={id}>
          <Body color="primarymain">{description}</Body>
          <S.Separator />
          <S.Hbox>
            <S.HboxItem vAlign="center" noGrow>
              <Avatar borderColor="primarylight" imageUrl={avatar} />
            </S.HboxItem>
            <S.HboxSeparator />
            <S.HboxItem vAlign="center">
              <BodySecondary color="primaryxdark">{name}</BodySecondary>
            </S.HboxItem>
          </S.Hbox>
        </Card>
      ))}
    </Masonry>
  </>
)
