import { Column } from "..";
import { Review } from "../../Review";

export function SecondColumn(){
  return(
    <Column>
          <Review review={'Nunca tinha achado os produtos na Lush depois que ela saiu do Brasil.. só a Zapt para conseguir importalos a preço mais barato do que vendiam aqui! Muito obrigado, recomendo sempre a todos os amigos.'}
          name={'LiciaR.'}
          imageSrc={'liciaR.png'}
         />

          <Review review={'Ontem chegou uma pizza que comprei na Zapt e me lembrou as que minha avó fazia... sensacional!'}
          name={'shitz'}
          imageSrc={'shitz.png'}
          />

          <Review review={'Nossa cada dia tem uma oferta mais legal do que a outra.. Além de produtos de qualidade o préco é imbatível”'}
          name={'rafael'}
          imageSrc={'rafael.png'}
          />
      </Column>
  )
}