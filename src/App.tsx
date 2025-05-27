import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/tic-tac-toe-online/home";
import Game from "./pages/tic-tac-toe-online/game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
