import UpperMenu from "./Component/UpperMenu";
import TypingBox from "./Component/TypingBox";
import { GlobalStyles } from "./Styles/global";

function App() {


  return (
    <div className="App">
      <GlobalStyles/>
      <UpperMenu/>
      <TypingBox/>
      Hello
    </div>
  );
}

export default App;
