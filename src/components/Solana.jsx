import { generateMnemonic } from "bip39";
// Generate a 12-word mnemonic
const mnemonic = generateMnemonic();
console.log("Generated Mnemonic:", mnemonic);
export default function Solana() {
  return (
    <>
      <h1>{mnemonic}</h1>
    </>
  );
}
