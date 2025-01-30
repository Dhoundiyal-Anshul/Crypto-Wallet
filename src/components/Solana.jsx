import React from "react";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { useRecoilValue } from "recoil";
import { seedAtom } from "../atoms";
export default function Solana() {
  const seedarray = useRecoilValue(seedAtom);
  const seed = seedarray.toString("hex");

  for (let i = 0; i < 4; i++) {
    const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
    const derivedSeed = derivePath(path, seed).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
  }

  return (
    <div>
      <h1>Solana</h1>
      <h2>{seed}</h2>
    </div>
  );
}
