import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/coins" element={<Coins/>}  />
        <Route path="/coin/:id" element={<CoinDetails/>}  />
        <Route path="/exchanges" element={<Exchanges/>}  />
      </Routes>
    </Router>
  );
}

export default App;
