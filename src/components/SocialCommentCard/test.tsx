import { render, screen } from 'utils/test-utils'

import comment from './mock'
import SocialCommentCard from '.'

describe('<SocialCommentCard />', () => {
  it('should render the heading', () => {
    render(<SocialCommentCard comment={comment} />)

    expect(screen.getByText('@ferri-gui')).toBeInTheDocument()
  })
})
