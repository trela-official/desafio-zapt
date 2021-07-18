import WelcomeTemplate from 'templates/Welcome';
import UsersCommentsTemplate from 'templates/UsersComments';

export default function HomePage() {
  return (
    <>
      <WelcomeTemplate />
      <UsersCommentsTemplate />
    </>
  );
}
