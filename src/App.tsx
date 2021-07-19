import { Column } from "./components/Columns";
import { Main } from "./components/Main";
import { Review } from "./components/Review";
import { Title } from "./components/Title";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <Title/>
      <Main>
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
      </Main>
      <GlobalStyles/>
    </>
  )
}

export default App;
