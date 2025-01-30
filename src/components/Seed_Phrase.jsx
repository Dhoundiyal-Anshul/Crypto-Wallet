import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { mnemonicAtom, seedAtom } from "../atoms";

export default function Seed_Phrase() {
  const navigate = useNavigate();
  const [generate, setGenerate] = useRecoilState(mnemonicAtom);
  const [seed, setSeed] = useRecoilState(seedAtom);
  const generateFunction = useCallback(() => {
    const generatedMnemonic = generateMnemonic();

    const seed = mnemonicToSeedSync(generatedMnemonic);
    // const seedHex = seed.toString("hex"); // Convert to hex
    setGenerate(generatedMnemonic);
    // change seed value in it's atom
    setSeed(seed);
    console.log(seed.toString("hex"));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={generateFunction}>Seed Phrase</button>
      <p>{generate}</p>
      <div
        onClick={() => {
          if (generate) navigate("/Chain");
        }}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
}
