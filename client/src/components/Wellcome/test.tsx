import { render, screen } from '@testing-library/react'

import Wellcomme from '.'

describe('<Wellcomme />', () => {
  it('should render the heading', () => {
    const { container } = render(<Wellcomme />)

    expect(screen.getByRole('heading', { name: /Wellcomme/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
