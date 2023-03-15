import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import HomePokemones from "./components/ShowPokemones/HomePokemones/HomePokemones";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" Component={LandingPage} />
        <Route exact path="/home/pokemones" Component={HomePokemones} />
        <Route exact path="/home/creation" /* Component={} */ />
        <Route exact path="/home/donation" /* Component={} */ />
        <Route exact path='/home/pokemon/:id' /* component={} */ />
        <Route path="/home" Component={Home} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
