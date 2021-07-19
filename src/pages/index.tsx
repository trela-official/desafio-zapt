import { SocialComments } from 'components/SocialComments'
import { Main } from 'components/Main'
import { UserComments } from 'components/UserComments'
import { Separator } from 'components/Hbox'

export default function Home() {
  return (
    <Main>
      <SocialComments />
      <Separator />
      <UserComments />
    </Main>
  )
}
