import { Story, Meta } from '@storybook/react'
import { Card } from 'components/Card'
import { H4 } from 'components/Typography'
import { Masonry } from './masonry.component'

export default {
  title: 'Masonry component',
  component: Masonry
} as Meta

export const MasonryStory: Story = () => (
  <Masonry>
    <Card>
      <H4>Masonry card</H4>
    </Card>
    <Card>
      <H4>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </H4>
    </Card>
    <Card>
      <H4>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </H4>
    </Card>
    <Card>
      <H4>
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </H4>
    </Card>
  </Masonry>
)
