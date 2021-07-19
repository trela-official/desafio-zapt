import { Separator, Hbox, HboxItem, HboxSeparator } from 'components/Hbox'
import { Body, H4 } from 'components/Typography'
import { Card } from 'components/Card'
import { Avatar } from 'components/Avatar'

interface SocialCommentsCardProps {
  description: string
  avatarUrl: string
  name: string
}

export const SocialCommentsCard = ({
  description,
  avatarUrl,
  name
}: SocialCommentsCardProps) => (
  <Card>
    <Body color="primarymain">
      <q>{description}</q>
    </Body>
    <Separator />
    <Hbox>
      <HboxItem vAlign="center" noGrow>
        <Avatar borderColor="primarylight" imageUrl={avatarUrl} />
      </HboxItem>
      <HboxSeparator />
      <HboxItem vAlign="center">
        <H4 color="primaryxdark">{name}</H4>
      </HboxItem>
    </Hbox>
  </Card>
)
