import { render, screen } from 'utils/test-utils'

import Cta from '.'

describe('<Cta />', () => {
  it('should render the CTA with one button by default, one button label and title', () => {
    render(<Cta firstOptionLabel="First Label" title="Title" />)

    expect(screen.getAllByRole('button')).toHaveLength(1)
    expect(
      screen.getByRole('button', { name: /First Label/i })
    ).toBeInTheDocument()

    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('should render the CTA with two buttons, two button labels and title', () => {
    render(
      <Cta
        title="Title"
        hasTwoOptions
        firstOptionLabel="First Label"
        secondOptionLabel="Second Label"
      />
    )

    expect(screen.getAllByRole('button')).toHaveLength(2)
    expect(
      screen.getByRole('button', { name: /First Label/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Second Label/i })
    ).toBeInTheDocument()

    expect(screen.getByText('Title')).toBeInTheDocument()
  })
})
