import { render, screen } from 'utils/test-utils'

import SubtitleWithLink from '.'

describe('<SubtitleWithLink />', () => {
  it('should render with label and link with label', () => {
    render(
      <SubtitleWithLink
        text="Test"
        link={{ label: 'Link', href: 'https://www.google.com/' }}
      />
    )

    expect(screen.getByText('Test')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Link' })).toBeInTheDocument()

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.google.com/'
    )
  })

  it('should render with the right link', () => {
    render(
      <SubtitleWithLink
        text="Test"
        link={{ label: 'Link', href: 'https://www.google.com/' }}
      />
    )

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.google.com/'
    )
  })

  it('should render with link styled', () => {
    render(
      <SubtitleWithLink
        text="Test"
        link={{ label: 'Link', href: 'https://www.google.com/' }}
      />
    )

    expect(screen.getByRole('link')).toHaveStyle({
      'font-weight': 500,
      color: '#334BC8',
      'text-decoration': 'underline',
      'text-underline-position': 'under'
    })
  })
})
