import { render, screen } from 'utils/test-utils';

import WelcomeTemplate from '.';

describe('<WelcomeTemplate />', () => {
  beforeEach(() => {
    render(<WelcomeTemplate />);
  });

  it('should render with correct heading', () => {
    expect(screen.getByRole('heading', { name: /bem-vindo, márcio!/i }));
  });

  it('should render with correct texts', () => {
    expect(
      screen.getByText(
        'Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar.'
      )
    ).toHaveStyle({ color: '#7b7b7b' });

    expect(screen.getByText('O que você prefere?')).toHaveStyle({
      color: '#000000',
      'font-weight': 500,
    });

    expect(
      screen.getByText(
        'Qualquer dúvida que você tiver é só nos chamar no nosso número de'
      )
    ).toBeInTheDocument();
  });

  it('should render with two buttons links', () => {
    expect(
      screen.getByRole('link', { name: /criar um grupo/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Entrar em um grupo/i })
    ).toBeInTheDocument();
  });

  it('should render with main image', () => {
    expect(
      screen.getByRole('img', { name: /grupo de amigos/i, hidden: true })
    ).toBeInTheDocument();
  });

  it('should render with WhatsApp link', () => {
    expect(screen.getByRole('link', { name: /WhatsApp\./i })).toHaveAttribute(
      'href',
      'https://wa.me/5511910898780'
    );
    expect(screen.getByRole('link', { name: /WhatsApp\./i })).toHaveAttribute(
      'target',
      '_blank'
    );
    expect(screen.getByRole('link', { name: /WhatsApp\./i })).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    );
  });
});
