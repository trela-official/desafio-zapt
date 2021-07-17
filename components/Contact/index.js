import * as S from './styles';

function Contact() {
  const numberWhatsApp = "5511984098171"
  const messageWhatsApp = "Olá, gostaria de tirar algumas dúvidas. Meu nome é "
  return (
    <S.Container>
      <S.Description>
      Qualquer dúvida que você tiver é só nos chamar no nosso número de <a href={`https://wa.me/${numberWhatsApp}?&text=${messageWhatsApp}`} target="_blank" rel="noopener noreferrer" title="WhatsApp">WhatsApp</a>.
      </S.Description>
    </S.Container>
  );
};

export default Contact;
