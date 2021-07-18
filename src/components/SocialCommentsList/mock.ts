import { SocialCommentCardProps } from 'components/SocialCommentCard';
import { socialComment1 } from 'components/SocialCommentCard/mock';

type Comment = Pick<
  SocialCommentCardProps,
  'comment' | 'authorAvatarUrl' | 'authorNickname'
>;

const socialComment2: Comment = {
  comment: [
    'Estava precisando achar algum lugar que vendia produtos que vêem direto',
    'da fazenda... a Zapt salvou.. e ainda paguei um preço muito mais barato',
    'que supermercado 🙌',
  ].join(' '),
  authorAvatarUrl: 'https://i.imgur.com/sAqUvAK.png',
  authorNickname: '@paolaC',
};

const socialComment3: Comment = {
  comment: [
    'Todos os vinhos da vinícola Bueno estão disponíveis no catalogo da Zapt',
    'a um preço incrível... não percam essa oportunidade..',
  ].join(' '),
  authorAvatarUrl: 'https://i.imgur.com/JexPKUr.png',
  authorNickname: '@Galvão',
};

const socialComment4: Comment = {
  comment: [
    'Nunca tinha achado os produtos na Lush depois que ela saiu do Brasil..',
    'só a Zapt para conseguir importa-los a preço mais barato do que vendiam',
    'aqui! Muito obrigado, recomendo sempre a todos os amigos.',
  ].join(' '),
  authorAvatarUrl: 'https://i.imgur.com/Wic5pEq.png',
  authorNickname: '@LiciaR.',
};

const socialComment5: Comment = {
  comment: [
    'Ontem chegou uma pizza que comprei na Zapt e me lembrou as que minha avó',
    'fazia... sensacional!',
  ].join(' '),
  authorAvatarUrl: 'https://i.imgur.com/d7nmJXH.png',
  authorNickname: '@shitz.',
};

const socialComment6: Comment = {
  comment: [
    'Nossa cada dia tem uma oferta mais legal do que a outra.. Além de',
    'produtos de qualidade o precox é imbatível',
  ].join(' '),
  authorAvatarUrl: 'https://i.imgur.com/MwLM6cO.png',
  authorNickname: '@rafael.',
};

const socialComment7: Comment = {
  comment: [
    'Achei uma promoção incrível de roupinha de bebê, foi o que salvou o',
    'enxoval do Pedro.',
  ].join(' '),
  authorAvatarUrl: 'https://i.imgur.com/HhVwef9.png',
  authorNickname: '@gust',
};

const socialComment8: Comment = {
  comment: [
    'Meu dono finalmente conseguiu achar uma comida que eu gosto! Agora vou',
    'conseguir engordar e ser feliz.',
  ].join(' '),
  authorAvatarUrl: 'https://i.imgur.com/7i58YWc.png',
  authorNickname: '@Cookie',
};

const socialComment9: Comment = {
  comment: [
    'Não conhecia a Zapt.. um amigo meu indicou... falou para eu dar uma',
    'olhada nos preços das cervejas artesanais.. incrível.',
  ].join(' '),
  authorAvatarUrl: 'https://i.imgur.com/PZbgtl8.png',
  authorNickname: '@duque',
};

export const socialComments = [
  socialComment1,
  socialComment2,
  socialComment3,
  socialComment4,
  socialComment5,
  socialComment6,
  socialComment7,
  socialComment8,
  socialComment9,
];
