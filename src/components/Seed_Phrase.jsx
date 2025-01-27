import React from "react";
import { generateMnemonic } from "bip39";

// Generate a 12-word mnemonic
const generate = async () => {
  const mnemonic = generateMnemonic();
  return mnemonic;
};
console.log("Generated Mnemonic:", generate);

export default function Seed_Phrase() {
  return (
    <div>
      <h2>Seed Phrase</h2>
      <p>{generate}</p>
    </div>
  );
}
