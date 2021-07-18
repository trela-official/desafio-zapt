import WelcomeTemplate from 'templates/Welcome';
import UsersCommentsTemplate from 'templates/UsersComments';
import SocialCommentsTemplate from 'templates/SocialComments';

export default function HomePage() {
  return (
    <>
      <WelcomeTemplate />
      <UsersCommentsTemplate />
      <SocialCommentsTemplate />
    </>
  );
}
