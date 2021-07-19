import { render, screen } from 'utils/test-utils'

import userComment from './mock'
import SlideCard from '.'

describe('<SlideCard />', () => {
  it('should render the heading', () => {
    render(<SlideCard userComment={userComment} />)

    expect(screen.getByText('Patricia Godoy')).toBeInTheDocument()
  })
})
