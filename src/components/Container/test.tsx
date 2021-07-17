import { render } from 'utils/test-utils'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = render(
      <Container>
        <span>Content</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule('max-width', '120rem')
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 120rem;
        margin-left: auto;
        margin-right: auto;
      }

      @media (max-width:1170px) {
        .c0 {
          padding-left: calc(2.4rem);
          padding-right: calc(2.4rem);
        }
      }

      @media (max-width:450px) {
        .c0 {
          padding-left: calc(2.4rem / 2);
          padding-right: calc(2.4rem / 2);
        }
      }

      <div
        class="c0"
      >
        <span>
          Content
        </span>
      </div>
    `)
  })
})
