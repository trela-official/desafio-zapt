import { Avatar } from 'components/Avatar'
import { Card } from 'components/Card'
import { Hbox, HboxItem, HboxSeparator, Separator } from 'components/Hbox'
import { Body, H4, H5 } from 'components/Typography'
import * as S from './user-opinion-card.component.style'

export interface UserOpinionCardProps {
  description: string
  avatarUrl: string
  name: string
  state: string
  city: string
  backgroundUrl: string
}

export const UserOpinionCard = (props: UserOpinionCardProps) => {
  const { description, avatarUrl, name, state, city, backgroundUrl } = props
  return (
    <Card noGutter src={backgroundUrl}>
      <S.SectionWrapper>
        <Body color="white" size="xlarge">
          <q>{description}</q>
        </Body>
        <Separator />
        <Hbox>
          <HboxItem vAlign="center" noGrow>
            <Avatar imageUrl={avatarUrl} />
          </HboxItem>
          <HboxSeparator />
          <HboxItem vAlign="center" noGrow>
            <H4 color="white">{name}</H4>
            <H5 color="white">
              {city} •{state}
            </H5>
          </HboxItem>
        </Hbox>
      </S.SectionWrapper>
    </Card>
  )
}
