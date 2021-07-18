import HomeTemplate from 'templates/pages/Home'

export default function Home() {
  return (
    <HomeTemplate
      user={{
        name: 'Alan Gabriel',
        gender: 'male'
      }}
    />
  )
}
