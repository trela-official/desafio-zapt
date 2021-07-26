import { Container } from 'components/Container'
import Wellcome from 'components/Wellcome'

import WellcomeMock from 'components/Wellcome/mock'

export default function Home() {
  return (
    <Container>
      <Wellcome {...WellcomeMock} />
    </Container>
  )
}
