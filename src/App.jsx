import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bitcoin from "./components/Bitcoin";
import Ethereum from "./components/Ethereum";
import Solana from "./components/Solana";
import Landing from "./components/Landing/Landing";
import Choosing_chain from "./components/Choosing_chain";
function App() {
  return (
    <div>
      <div>{/* <h1>TOP BAR</h1> */}</div>
      <BrowserRouter>
        <Routes>
          <Route path="/Choose" element={<Choosing_chain />} />
          <Route path="/" element={<Landing />} />
          <Route path="/Choose/Bitcoin" element={<Bitcoin />} />
          <Route path="/Choose/Solana" element={<Solana />} />
          <Route path="/Choose/Ethereum" element={<Ethereum />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
