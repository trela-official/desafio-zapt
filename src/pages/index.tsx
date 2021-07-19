import { GetStaticProps } from 'next';

import WelcomeTemplate, { WelcomeTemplateProps } from 'templates/Welcome';
import UsersCommentsTemplate, {
  UsersCommentsTemplateProps,
} from 'templates/UsersComments';
import SocialCommentsTemplate from 'templates/SocialComments';

import { usersComments as usersCommentsMock } from 'components/UsersCommentsSlider/mock';

type HomePageProps = {
  welcomeSection: WelcomeTemplateProps;
  usersCommentsSection: UsersCommentsTemplateProps;
};

const HomePage = ({ welcomeSection, usersCommentsSection }: HomePageProps) => {
  return (
    <>
      <WelcomeTemplate
        name={welcomeSection.name}
        whatsAppNumber={welcomeSection.whatsAppNumber}
      />

      <UsersCommentsTemplate comments={usersCommentsSection.comments} />

      <SocialCommentsTemplate />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => ({
  props: {
    welcomeSection: { name: 'Márcio', whatsAppNumber: '5511910898780' },
    usersCommentsSection: { comments: usersCommentsMock },
  },
});

export default HomePage;
