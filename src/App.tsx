import Welcome from "pages/WelcomeBanner";
import SocialComments from "pages/SocialComments";

import GlobalStyles from "styles/global";
import UserComments from "pages/UserComments";

function App() {
  return (
    <>
      <Welcome />
      <UserComments />
      <SocialComments />
      <GlobalStyles />
    </>
  );
}

export default App;
