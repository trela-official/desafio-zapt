import { Column } from "..";
import { Review } from "../../Review";

export function FirstColumn(){
  return(
     <Column>
          <Review review={'Não da para parar de comer.. esse final de semana pedi 20 pasteis da Ilma e acabaram TODOS em um só dia... O pessoal aqui de casa ficou viciado de um nível que terei que comprar toda semana... Assim não tem academia que secura rsrsrsrs Obrigado Zapt.'} 
          name={'ferri-gui'}
          imageSrc={'ferri-gui.png'}
          />

          <Review review={'Estava precisando achar algum lugar que vendia produtos que vêem direto da fazenda... a Zapt salvou.. e ainda paquei um preço muito mais barato que supermecado 🙌”'} 
          name={'paolaC'}
          imageSrc={'paolaC.png'}
          />

          <Review review={'Todos os vinhos da vinícula Bueno estão disponíveis no catalogo da Zapt a um preço incrivél... não percam essa oportunidade...'} 
          name={'Galvão'}
          imageSrc={'galvao.png'}
          />

        </Column>
  )
}