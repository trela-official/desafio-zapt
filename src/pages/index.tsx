import Home, { HomeTemplateProps } from 'templates/Home'

import { socialCommentsMock, userCommentsMock } from 'templates/Home/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    revalidate: 60,
    props: {
      socialComments: socialCommentsMock,
      userComments: userCommentsMock
    }
  }
}
