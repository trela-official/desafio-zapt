import { render, screen } from 'utils/test-utils'

import Section from '.'

describe('<Section />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Section title="Section Title">
        <p>Content</p>
      </Section>
    )

    expect(
      screen.getByRole('heading', { name: /section title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/content/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
