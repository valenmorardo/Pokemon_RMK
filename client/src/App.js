import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import HomePokemones from "./components/ShowPokemones/HomePokemones/HomePokemones";
import PokemonDetail from "./components/ShowPokemones/PokemonDetail/PokemonDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/home" Component={Home} />
        <Route path="/home/pokemon/:id" Component={PokemonDetail} />
        <Route exact path="/" Component={LandingPage} />
        <Route exact path="/home/pokemones" Component={HomePokemones} />
        <Route exact path="/home/creation" /* Component={} */ />
        <Route exact path="/home/donation" /* Component={} */ />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
