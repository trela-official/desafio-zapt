import { Carousel } from 'components/Carousel'

import { H2, Header } from 'components/Typography'
import { UserOpinionCard } from 'components/UserOpinionCard'
import { mockOpinionCard } from 'components/UserOpinionCard/mock-opinion-card.data'

export const UserComments = () => (
  <article>
    <Header hAlign="center">
      <H2>O que as pessoas estão achando</H2>
    </Header>

    <Carousel>
      {mockOpinionCard.map((props) => (
        <UserOpinionCard key={props.id} {...props} />
      ))}
    </Carousel>
  </article>
)
