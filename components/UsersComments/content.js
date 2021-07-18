import guilhermeBg from '../../public/images/uploads/guilherme-bellotti.jpg';
import guilhermeProfile from '../../public/images/profiles/profile-guilherme-bellotti.png';
import marcinhoBg from '../../public/images/uploads/marcinho-ribeiro.jpg';
import marcinhoProfile from '../../public/images/profiles/profile-marcinho-ribeiro.png';
import patriciaBg from '../../public/images/uploads/patricia-godoy.jpg';
import patriciaProfile from '../../public/images/profiles/profile-patricia-godoy.png';
import willianBg from '../../public/images/uploads/willian-justen.jpg';
import willianProfile from '../../public/images/profiles/profile-willian-justen.png';

const apiCarousel = [
  {
    name: 'Patricia Godoy',
    imageProfile: patriciaProfile,
    altImgProfile: 'Mulher segurando uma bandeira enrolada nas costas olhando para o alto',
    state: 'São Paulo',
    city: 'São Paulo',
    testimony:
      'Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal',
    imageBg: patriciaBg,
    altImgBg: 'Mulher de meia idade na cozinha cortando alguns legumes'
  },
  {
    name: 'Marcinho Ribeiro',
    imageProfile: marcinhoProfile,
    altImgProfile: 'Mulher segurando uma bandeira enrolada nas costas olhando para o alto',
    state: 'Minas Gerais',
    city: 'Belo Horizonte',
    testimony: 'Depois que você começa a usar produtos de qualidade é bem difícil voltar atrás...',
    imageBg: marcinhoBg,
    altImgBg: 'Mulher de meia idade na cozinha cortando alguns legumes'
  },
  {
    name: 'Guilherme Bellotti',
    imageProfile: guilhermeProfile,
    altImgProfile: 'Garoto elegante e bonito sendo beijado pela sua noiva linda e maravilhosa',
    state: 'São Paulo',
    city: 'Votuporanga',
    testimony: 'Comprar em grupo é viciante, pois os descontos são altíssimos! Recomendo a todos',
    imageBg: guilhermeBg,
    altImgBg: 'Panela rústica com vários tipos de comida'
  },
  {
    name: 'Willian Justen',
    imageProfile: willianProfile,
    altImgProfile: 'Professor genial e fora da caixa vestindo Harry Potter casa de Grifinória',
    state: 'Rio de Janeiro',
    city: 'Petrópolis',
    testimony: 'Com tantos descontos comprando em grupo, consegui comprar uma fazenda na Itália',
    imageBg: willianBg,
    altImgBg: 'Garoto griforniano tecnológico voltado para química'
  }
];

export default apiCarousel;
