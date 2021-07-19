import { screen } from '@testing-library/react'
import renderWithTheme from 'utils/tests/test-util'

import SectionSocialComments from '.'

describe('<SectionSocialComments />', () => {
  it('should render the button correctly', () => {
    const { container } = renderWithTheme(<SectionSocialComments />)

    const heading = screen.getByRole('heading', {
      name: /O que estão falando nas redes sociais/i
    })

    expect(heading).toBeInTheDocument()

    expect(screen.getByTestId('wraper-social-cards')).toHaveStyle({
      'column-count': 3
    })

    expect(screen.getByTestId('wraper-social-cards')).toHaveStyleRule(
      'column-count',
      '2',
      {
        media: '(max-width: 768px)'
      }
    )

    expect(screen.getByTestId('wraper-social-cards')).toHaveStyleRule(
      'column-count',
      '1',
      {
        media: '(max-width: 450px)'
      }
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
