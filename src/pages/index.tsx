import SocialComments from 'components/SocialComments'
import UsersComments from 'components/UsersComments'
import Welcome from 'components/Welcome'

import SocialCommentsData from 'utils/social-comments.json'
import UserCommentsData from 'utils/users-comments.json'

export default function Home() {
  return (
    <>
      <Welcome />
      <UsersComments comments={UserCommentsData} />
      <SocialComments comments={SocialCommentsData} />
    </>
  )
}
