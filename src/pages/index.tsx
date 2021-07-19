import { GetStaticProps } from 'next';

import WelcomeTemplate, { WelcomeTemplateProps } from 'templates/Welcome';
import UsersCommentsTemplate from 'templates/UsersComments';
import SocialCommentsTemplate from 'templates/SocialComments';

type HomePageProps = {
  welcomeSection: WelcomeTemplateProps;
};

const HomePage = ({ welcomeSection }: HomePageProps) => {
  return (
    <>
      <WelcomeTemplate
        name={welcomeSection.name}
        whatsAppNumber={welcomeSection.whatsAppNumber}
      />

      <UsersCommentsTemplate />
      <SocialCommentsTemplate />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => ({
  props: {
    welcomeSection: { name: 'Márcio', whatsAppNumber: '5511910898780' },
  },
});

export default HomePage;
