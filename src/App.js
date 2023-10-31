// import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./Styles/global";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { useTheme } from "./Context/ThemeContext";
// import ThemeSelector from "./Context/ThemeProvider";
// import { ThemeContextProvider } from "./Context/ThemeContext";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";

function App() {

  // const {theme} = useTheme()
  return (
    // <ThemeContextProvider>
    <>
      <ToastContainer/>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/user" element={<UserPage/>} />
      </Routes>

    </>
    // </ThemeContextProvider>    
  );
}

export default App;
