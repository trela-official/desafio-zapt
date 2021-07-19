import { GetStaticProps } from 'next';

import WelcomeTemplate, { WelcomeTemplateProps } from 'templates/Welcome';
import UsersCommentsTemplate, {
  UsersCommentsTemplateProps,
} from 'templates/UsersComments';
import SocialCommentsTemplate, {
  SocialCommentsTemplateProps,
} from 'templates/SocialComments';

import { usersComments as usersCommentsMock } from 'components/UsersCommentsSlider/mock';
import { socialComments as socialCommentsMock } from 'components/SocialCommentsList/mock';

type HomePageProps = {
  welcomeSection: WelcomeTemplateProps;
  usersCommentsSection: UsersCommentsTemplateProps;
  socialCommentsSection: SocialCommentsTemplateProps;
};

const HomePage = ({
  welcomeSection,
  usersCommentsSection,
  socialCommentsSection,
}: HomePageProps) => {
  return (
    <>
      <WelcomeTemplate
        name={welcomeSection.name}
        whatsAppNumber={welcomeSection.whatsAppNumber}
      />

      <UsersCommentsTemplate comments={usersCommentsSection.comments} />

      <SocialCommentsTemplate comments={socialCommentsSection.comments} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => ({
  props: {
    welcomeSection: { name: 'Márcio', whatsAppNumber: '5511910898780' },
    usersCommentsSection: { comments: usersCommentsMock },
    socialCommentsSection: { comments: socialCommentsMock },
  },
});

export default HomePage;
