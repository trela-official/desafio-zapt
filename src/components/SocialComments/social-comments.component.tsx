import { H2, Header } from 'components/Typography'
import { mockCardData, SocialCommentsCard } from 'components/SocialCommentsCard'

import { Masonry } from 'components/Masonry'

export const SocialComments = () => (
  <article>
    <Header hAlign="center">
      <H2>O que estão falando nas redes sociais</H2>
    </Header>

    <Masonry>
      {mockCardData.map((props) => (
        <SocialCommentsCard key={props.id} {...props} />
      ))}
    </Masonry>
  </article>
)
