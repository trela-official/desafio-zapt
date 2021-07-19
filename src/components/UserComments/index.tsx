import React from "react";
import * as S from "./styles";
import { Comments } from "./Comments";

import commentUserImg from "../../images/commentUserImg.png";

export const UserComments = () => {
  return (
    <S.UsercommentsContainer>
      <S.UserCommentsTitle>
        O que estão falando nas redes sociais
      </S.UserCommentsTitle>
      <S.CommentsContainer>
        <Comments userName="@ferri-gui" userImage={commentUserImg}>
          ”Não da para parar de comer.. esse final de semana pedi 20 pasteis da
          Ilma e acabaram TODOS em um só dia... O pessoal aqui de casa ficou
          viciado de um nível que terei que comprar toda semana... Assim não tem
          academia que secura rsrsrsrs Obrigado Zapt.”
        </Comments>
        <Comments userName="@LiciaR." userImage={commentUserImg}>
          ”Nunca tinha achado os produtos na Lush depois que ela saiu do
          Brasil.. só a Zapt para conseguir importalos a preço mais barato do
          que vendiam aqui! Muito obrigado, recomendo sempre a todos os amigos.”
        </Comments>
        <Comments userName="@gust" userImage={commentUserImg}>
          ”Achei uma promoção incrível de roupinha de bebê, foi o que salvou o
          enxoval do Pedro.”
        </Comments>
        <Comments userName="@paolaC" userImage={commentUserImg}>
          ”Estava precisando achar algum lugar que vendia produtos que vêem
          direto da fazenda... a Zapt salvou.. e ainda paquei um preço muito
          mais barato que supermecado 🙌”
        </Comments>
        <Comments userName="@shitz" userImage={commentUserImg}>
          ”Ontem chegou uma pizza que comprei na Zapt e me lembrou as que minha
          avó fazia... sensacional!”
        </Comments>
        <Comments userName="@Cookie" userImage={commentUserImg}>
          ”Meu dono finalmente conseguiu achar uma comida que eu gosto! Agora
          vou conseguir engordar e ser feliz.”
        </Comments>
      </S.CommentsContainer>
    </S.UsercommentsContainer>
  );
};
