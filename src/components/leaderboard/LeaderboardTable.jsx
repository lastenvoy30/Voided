import { FaUserCircle } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";
import Piggy from "../../assets/Piggy.svg";
import { FaDollarSign } from "react-icons/fa";

const mockData = [
  { rank: 4, username: "USER", wager: 52856.95, prize: 250 },
  { rank: 4, username: "USER", wager: 52856.95, prize: 250 },
  { rank: 4, username: "USER", wager: 52856.95, prize: 250 },
  { rank: 4, username: "USER", wager: 52856.95, prize: 250 },
  { rank: 4, username: "USER", wager: 52856.95, prize: 250 },
];

const getRankLabel = (rank) => {
  if (rank === 4) return "4TH";
  if (rank === 5) return "5TH";
  if (rank === 6) return "6TH";
  if (rank === 7) return "7TH";
  if (rank === 8) return "8TH";
  return `${rank}TH`;
};

const LeaderboardRow = ({ player, index }) => (
  <div
    className="grid items-center px-8 py-5 rounded-xl border border-[#1E2433] transition-all duration-200 hover:border-blue-500 hover:shadow-[0_0_16px_rgba(59,130,246,0.2)] cursor-pointer"
    style={{
      gridTemplateColumns: "120px 1fr 1fr 130px",
      background: index % 2 === 0 ? "#161A23" : "#12151e",
      boxShadow:
        "0 0 20px rgba(59,130,246,0.07), inset 0 0 30px rgba(59,130,246,0.03)",
    }}
  >
    {/* Rank */}
    <div>
      <span
        className="bg-[#1a2035] border border-[#2a3a5c] text-white text-sm font-black px-4 py-1.5 rounded-md tracking-widest"
        style={{ boxShadow: "0 0 8px rgba(59,130,246,0.2)" }}
      >
        {getRankLabel(player.rank)}
      </span>
    </div>

    {/* User */}
    <div className="flex items-center gap-3">
      <div
        className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center overflow-hidden"
        style={{ boxShadow: "0 0 8px rgba(245,158,11,0.4)" }}
      >
        <img src={Piggy} alt="" className="w-full h-full object-cover" />
      </div>
      <span className="text-white font-bold tracking-wider uppercase text-base">
        {player.username}
      </span>
    </div>

    {/* Wager */}
    <div className="flex items-center gap-2">
      <span className="text-white font-bold text-base">
        {player.wager.toLocaleString()}$
      </span>
    </div>

    {/* Prize */}
    <div className="flex items-center gap-2 justify-end">
      <div
        className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"
        style={{ boxShadow: "0 0 6px rgba(59,130,246,0.6)" }}
      >
        <FaDollarSign style={{ color: "black", fontSize: "11px" }} />
      </div>
      <span className="text-white font-bold text-base">{player.prize}.00</span>
    </div>
  </div>
);

const LeaderboardTable = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
<div
  className="grid px-8 py-3 mb-3"
  style={{ gridTemplateColumns: "120px 1fr 1fr 130px" }}
>
  <span className="text-white text-sm font-black tracking-widest uppercase flex items-center gap-2">
    # Place
  </span>
  <span className="text-white text-sm font-black tracking-widest uppercase flex items-center gap-2">
    <FaUserCircle size={16} style={{ color: 'white' }} /> User
  </span>
  <span className="text-white text-sm font-black tracking-widest uppercase flex items-center gap-2">
    <AiFillDollarCircle size={16} style={{ color: 'white' }} /> Wager
  </span>
  <span className="text-white text-sm font-black tracking-widest uppercase flex items-center justify-end gap-2">
    <FaTrophy size={16} style={{ color: 'white' }} /> Prize
  </span>
</div>

      {/* Rows */}
      <div className="flex flex-col gap-2">
        {mockData.map((player, index) => (
          <LeaderboardRow key={index} player={player} index={index} />
        ))}
      </div>
    </div>
  );
};

export default LeaderboardTable;
