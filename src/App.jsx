import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
const Seed_Phrase = lazy(() => import("./components/Seed_Phrase"));
const Bitcoin = lazy(() => import("./components/Bitcoin"));
const Ethereum = lazy(() => import("./components/Ethereum"));
const Solana = lazy(() => import("./components/Solana"));
const Landing = lazy(() => import("./components/Landing/Landing"));
const Choosing_chain = lazy(() => import("./components/Choosing_chain"));

function App() {
  return (
    <div>
      <div className="flex items-center justify-center h-16 mt-50">
        <h1>world's simplest wallet</h1>
      </div>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route
              path="/Home"
              element={
                <Suspense>
                  <Seed_Phrase />
                </Suspense>
              }
            />
            <Route
              path="/Chain"
              element={
                <Suspense>
                  <Choosing_chain />
                </Suspense>
              }
            />
            <Route
              path="/"
              element={
                <Suspense>
                  <Landing />
                </Suspense>
              }
            />
            <Route
              path="/Bitcoin"
              element={
                <Suspense>
                  <Bitcoin />
                </Suspense>
              }
            />
            <Route
              path="/Solana"
              element={
                <Suspense>
                  <Solana />
                </Suspense>
              }
            />
            <Route
              path="/Ethereum"
              element={
                <Suspense>
                  <Ethereum />
                </Suspense>
              }
            />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}
export default App;
