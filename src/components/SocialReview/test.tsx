import { render, screen } from 'utils/test-utils'

import SocialReview from '.'

import mock from './mock'

describe('<SocialReview />', () => {
  it('should render correctly', () => {
    render(<SocialReview {...mock} />)

    expect(screen.getByText(mock.feedback)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /@ferri-gui/i })).toBeInTheDocument()
    expect(screen.getByText(/@ferri-gui/i)).toBeInTheDocument()
  })
})
