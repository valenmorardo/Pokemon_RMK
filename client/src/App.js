import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <h1>hola</h1>

      <Routes>
        <Route exact path="/" Component={LandingPage}/>
      </Routes>
      
    </BrowserRouter>
  );
  
}

export default App;
