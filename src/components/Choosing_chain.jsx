import { useNavigate } from "react-router-dom";

export default function Choosing_chain() {
  const navigate = useNavigate();
  return (
    <div className="grid-align-center">
      <button
        onClick={() => {
          navigate("/Choose/Bitcoin");
        }}
      >
        Bitcoin
      </button>
      <button
        onClick={() => {
          navigate("/Choose/Solana");
        }}
      >
        Solana
      </button>
      <button
        onClick={() => {
          navigate("/Choose/Ethereum");
        }}
      >
        Ethereum
      </button>{" "}
    </div>
  );
}
