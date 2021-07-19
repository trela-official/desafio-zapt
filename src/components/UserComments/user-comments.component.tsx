import { Carousel } from 'components/Carousel'

import { H2, Header } from 'components/Typography'
import { UserOpinionCard, mockOpinionCard } from 'components/UserOpinionCard'

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
