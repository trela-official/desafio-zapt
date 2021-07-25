import { render, screen } from '@testing-library/react'

import Title from '.'

describe('<Title />', () => {
  it('should render the heading', () => {
    const { container } = render(<Title />)

    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
