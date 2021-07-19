import { Column } from "..";
import { Review } from "../../Review";

export function ThirdColumn(){
  return(
    <Column>
        <Review review={'Achei uma promoção incrível de roupinha de bebê, foi o que salvou o enxoval do Pedro.'}
        name={'gust'}
        imageSrc={'gust.png'}
        />

        <Review review={'Meu dono finalmente conseguiu achar uma comida que eu gosto! Agora vou conseguir engordar e ser feliz.'}
        name={'cookie'}
        imageSrc={'cookie.png'}
        />

        <Review review={'Não conhecia a Zapt.. um amigo meu indicou... falou para eu dar uma olhada nos preços das cervejas artesanais.. incrível.'}
        name={'duque'}
        imageSrc={'duque.png'}
        />
      </Column>
  )
}