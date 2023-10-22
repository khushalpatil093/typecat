import TypingBox from "./Component/TypingBox";
import { GlobalStyles } from "./Styles/global";

function App() {


  return (
    <div className="canvas">
      <GlobalStyles />
      <div>Header</div>
      <TypingBox/>
      <div>footer</div>
    </div>
  );
}

export default App;
