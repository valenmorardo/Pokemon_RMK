import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <h1>hola</h1>

      <Routes>
        <Route exact path="/" />
      </Routes>
      
    </BrowserRouter>
  );
  
}

export default App;
