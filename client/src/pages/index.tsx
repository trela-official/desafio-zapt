import Container from 'components/Container'
import Title from 'components/Title'
import TextContent from 'components/TextContent'


export default function Home() {
  return (
    <Container>
      <Title size={'xxlarge'} level={1}>Seja bem-vindo Marcio </Title>
      <TextContent>
          Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar.
      </TextContent>
      <Title size={'small'} fontWeight={'bold'} level={6}>O que você prefere?</Title>
    </Container>
  ) 
}
