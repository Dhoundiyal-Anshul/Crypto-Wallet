import { useNavigate } from "react-router-dom";

export default function Choosing_chain() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative flex justify-center p-5 ">
        <h1>Choose a chain</h1>
      </div>
      <div className=" flex justify-center p-10 gap-14">
        <button
          onClick={() => {
            navigate("/Bitcoin");
          }}
        >
          Bitcoin
        </button>
        <button
          onClick={() => {
            navigate("/Solana");
          }}
        >
          Solana
        </button>
        <button
          onClick={() => {
            navigate("/Ethereum");
          }}
        >
          Ethereum
        </button>{" "}
      </div>
    </div>
  );
}
