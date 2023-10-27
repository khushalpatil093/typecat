// import { ThemeProvider } from "styled-components";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import TypingBox from "./Component/TypingBox";
import { GlobalStyles } from "./Styles/global";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { useTheme } from "./Context/ThemeContext";
// import ThemeSelector from "./Context/ThemeProvider";
// import { ThemeContextProvider } from "./Context/ThemeContext";

function App() {

  // const {theme} = useTheme()
  return (
    // <ThemeContextProvider>
    <>
      <ToastContainer/>
      <div className="canvas">
        <GlobalStyles />
        <Header/>
        <TypingBox/>
        {/* <ThemeSelector/> */}
        <Footer/>
      </div>
    </>
    // </ThemeContextProvider>    
  );
}

export default App;
