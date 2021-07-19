import { render, screen } from 'utils/test-utils'

import CommentCard from '.'

import mock from './mock'

describe('<CommentCard />', () => {
  it('should render correctly', () => {
    render(<CommentCard {...mock} />)

    expect(screen.getByRole('img', { name: /card mock/i })).toBeInTheDocument()
    expect(screen.getByText(mock.feedback)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /patricia godoy/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/são paulo • são paulo/i)).toBeInTheDocument()
  })
})
