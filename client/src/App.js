import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import HomePokemones from "./components/ShowPokemones/HomePokemones/HomePokemones";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" Component={LandingPage} />
        <Route path="/home" Component={Home} />
        <Route exact path="/home/pokemones" Component={HomePokemones} />
        <Route exact path="/home/creation" /* Component={} */ />
        <Route exact path="/home/donation" /* Component={} */ />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
