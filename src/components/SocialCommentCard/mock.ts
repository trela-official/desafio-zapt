import { SocialCommentCardProps } from '.';

type Comment = Pick<
  SocialCommentCardProps,
  'comment' | 'authorAvatarUrl' | 'authorNickname'
>;

export const socialComment1: Comment = {
  comment: [
    'Não da para parar de comer.. esse final de semana pedi 20 pasteis da Ilma',
    'e acabaram TODOS em um só dia... O pessoal aqui de casa ficou viciado de',
    'um nível que terei que comprar toda semana... Assim não tem academia que',
    'secura rsrsrsrs Obrigado Zapt.',
  ].join(' '),
  authorAvatarUrl: 'https://i.imgur.com/PZbgtl8.png',
  authorNickname: '@ferri-gui',
};
