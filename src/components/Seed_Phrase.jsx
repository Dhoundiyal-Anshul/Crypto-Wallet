import React from "react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { generateMnemonic, mnemonicToSeedSync } from "bip39";

export default function Seed_Phrase() {
  const navigate = useNavigate();
  const [generate, setGenerate] = useState("");
  const generateFunction = useCallback(() => {
    const generatedMnemonic = generateMnemonic();
    const seed = mnemonicToSeedSync(generatedMnemonic);
    setGenerate(generatedMnemonic);
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
