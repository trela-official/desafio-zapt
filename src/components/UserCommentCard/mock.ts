import { userInfo } from 'components/UserInfo/mock';

import { UserCommentCardProps } from '.';

export const userComment: UserCommentCardProps = {
  imageBackgroundUrl: 'https://i.imgur.com/ci2Eulu.png',
  imageBackgroundAlt: 'Senhora cortante legumes',
  comment:
    'Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal',
  user: userInfo,
};

export const anotherUserComment: UserCommentCardProps = {
  imageBackgroundUrl: 'https://i.imgur.com/brAYg9C.png',
  imageBackgroundAlt: 'Homem e mulher lavando alimentos',
  comment:
    'Depois que você começa a usar produtos de qualidade é bem difícil voltar atrás...',
  user: {
    avatarUrl: 'https://i.imgur.com/jn8VYLl.png',
    name: 'Marcinho Ribeiro',
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
};
