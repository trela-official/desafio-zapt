import Home, { HomeTemplateProps } from 'templates/Home'

import { socialCommentsMock } from 'templates/Home/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    revalidate: 1,
    props: {
      comments: socialCommentsMock
    }
  }
}
