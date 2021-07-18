import { Avatar } from 'components/Avatar'
import { Card } from 'components/Card'
import { Carousel } from 'components/Carousel'
import { Hbox, HboxItem } from 'components/Hbox'
import { H2, Body, Header } from 'components/Typography'

export const UserComments = () => {
  return (
    <article>
      <Header hAlign="center">
        <H2>O que as pessoas estão achando</H2>
      </Header>

      <Carousel>
        <Card noGutter src="/img/female-card.png">
          <Body color="white" size="xlarge">
            <q>
              Não consigo mais viver sem os produtos do Sítio, a diferença do
              que eu comprava antes e agora é abissal
            </q>
          </Body>
          <Hbox>
            <HboxItem>
              <Avatar imageUrl="https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80" />
            </HboxItem>
            <HboxItem></HboxItem>
          </Hbox>
        </Card>
      </Carousel>
    </article>
  )
}
