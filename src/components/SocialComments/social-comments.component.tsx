import { H2, Body, H4, Header } from 'components/Typography'
import { Card } from 'components/Card'
import { Masonry } from 'components/Masonry'
import { Avatar } from 'components/Avatar'
import * as S from 'components/Hbox'
import { mockCardData } from './mock-card.data'

export const SocialComments = () => (
  <article>
    <Header hAlign="center">
      <H2>O que estão falando nas redes sociais</H2>
    </Header>

    <Masonry>
      {mockCardData.map(({ id, description, avatarUrl, name }) => (
        <Card key={id}>
          <Body color="primarymain">
            <q>{description}</q>
          </Body>
          <S.Separator />
          <S.Hbox>
            <S.HboxItem vAlign="center" noGrow>
              <Avatar borderColor="primarylight" imageUrl={avatarUrl} />
            </S.HboxItem>
            <S.HboxSeparator />
            <S.HboxItem vAlign="center">
              <H4 color="primaryxdark">{name}</H4>
            </S.HboxItem>
          </S.Hbox>
        </Card>
      ))}
    </Masonry>
  </article>
)
