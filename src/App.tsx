import { FirstColumn } from "./components/Columns/FirstColumn";
import { SecondColumn } from "./components/Columns/SecondColumn";
import { ThirdColumn } from "./components/Columns/ThidColumn";
import { Main } from "./components/Main";
import { Title } from "./components/Title";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <Title/>
      <Main>
        <FirstColumn/>
        <SecondColumn />
        <ThirdColumn/>
      </Main>
      <GlobalStyles/>
    </>
  )
}

export default App;
