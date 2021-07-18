import { SocialComments } from 'components/SocialComments'
import { Main } from 'components/Main'
import { UserComments } from 'components/UserComments'

export default function Home() {
  return (
    <Main>
      <UserComments />
      <SocialComments />
    </Main>
  )
}
