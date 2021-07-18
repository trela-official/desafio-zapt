const heroTitle = 'Bem vindo Marcio,'
const heroSubtitle =
  'Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar.'
const ctaTitle = 'O que você prefere?'
const firstOptionLabel = 'Entrar em um grupo'
const secondOptionLabel = 'Criar um grupo'

export default {
  heroTitle,
  ctaTitle,
  heroSubtitle,
  firstOption: {
    label: firstOptionLabel,
    action: () => console.log('first option action')
  },
  secondOption: {
    label: secondOptionLabel,
    action: () => console.log('second option action')
  }
}
