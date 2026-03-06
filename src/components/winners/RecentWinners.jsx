import Piggy from "../../assets/Piggy.svg";
import { FaTrophy } from "react-icons/fa";

const mockWinners = [
  { month: "JAN 2025", winner: "MR. PIGGY", prizePool: 3000 },
  { month: "JAN 2025", winner: "MR. PIGGY", prizePool: 3000 },
  { month: "JAN 2025", winner: "MR. PIGGY", prizePool: 3000 },
];

const WinnerCard = ({ winner }) => (
  <div
    className="relative flex flex-col items-center rounded-xl border border-[#1E3a5c] cursor-pointer transition-all duration-200 hover:border-blue-400 hover:shadow-[0_0_24px_rgba(59,130,246,0.25)] overflow-hidden"
    style={{
      background:
        "linear-gradient(135deg, #0f1923 0%, #1a2535 50%, #0f1923 100%)",
      minWidth: 240,
      width: 240,
    }}
  >
    {/* Month badge */}
    <div className="absolute top-3 left-3 bg-[#1a2f4a] border border-[#2a4a6c] text-white text-xs font-black px-3 py-1 rounded-md tracking-widest z-10">
      {winner.month}
    </div>

    {/* Avatar */}
    <div
      className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden mt-10 mb-2"
      style={{
        boxShadow:
          "0 0 30px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.15)",
      }}
    >
      <img src={Piggy} alt="" className="w-full h-full object-cover" />
    </div>

    {/* Winner name */}
    <p className="text-blue-400 font-black tracking-widest uppercase text-xl mb-1">
      {winner.winner}
    </p>

    {/* Winner label */}
    <div className="flex items-center gap-1 text-white text-xs font-bold tracking-widest uppercase mb-4">
      <FaTrophy size={12} style={{ color: "white" }} /> WINNER
    </div>

    {/* Prize pool box */}
    <div className="w-full">
      <div
        className="mx-4 mb-0 py-3 rounded-t-lg text-center"
        style={{
          background: "#0f1923",
          border: "1px solid #1e3a5c",
          borderBottom: "none",
        }}
      >
        <span className="text-white font-black text-2xl">
          <span className="text-blue-400">$</span>
          {winner.prizePool.toLocaleString()}
        </span>
      </div>
      <div
        className="mx-4 mb-4 py-2 rounded-b-lg text-center text-xs font-black tracking-widest uppercase text-white"
        style={{ background: "linear-gradient(90deg, #1d4ed8, #3b82f6)" }}
      >
        TOTAL PRIZE POOL
      </div>
    </div>
  </div>
);

const RecentWinners = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 px-4">
      {/* Heading */}
      <h2 className="font-display text-4xl md:text-5xl font-black font-bold tracking-wide text-center mb-2">
        <span className="text-white">RECENT </span>
        <span className="text-blue-400">WINNERS</span>
      </h2>
      <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-8">
        Click the cards below to see the full list of winners
      </p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {mockWinners.map((winner, index) => (
          <WinnerCard key={index} winner={winner} />
        ))}
      </div>
    </div>
  );
};

export default RecentWinners;
