import Piggy from "../../assets/Piggy.svg"
const mockTop3 = [
  { rank: 2, username: "USER", prize: 250, wager: 2000 },
  { rank: 1, username: "USER", prize: 250, wager: 2000 },
  { rank: 3, username: "USER", prize: 250, wager: 2000 },
];

const rankConfig = {
  1: {
    label: "1ST",
    badgeBg: "#F59E0B",
    borderColor: "#c8922a",
    glowColor: "rgba(245,158,11,0.4)",
    prizeTagBg: "#92670a",
    outerW: 260,
    outerH: 300,
    avatarSize: "text-6xl",
    order: "order-2",
    marginBottom: "mb-0",
  },
  2: {
    label: "2ND",
    badgeBg: "#b87040",
    borderColor: "#7a4a2a",
    glowColor: "rgba(184,112,64,0.3)",
    prizeTagBg: "#7a3a1a",
    outerW: 220,
    outerH: 260,
    avatarSize: "text-5xl",
    order: "order-1",
    marginBottom: "mb-4",
  },
  3: {
    label: "3RD",
    badgeBg: "#6B7280",
    borderColor: "#4a5260",
    glowColor: "rgba(107,114,128,0.25)",
    prizeTagBg: "#374151",
    outerW: 220,
    outerH: 260,
    avatarSize: "text-5xl",
    order: "order-3",
    marginBottom: "mb-4",
  },
};

const HexCard = ({ player }) => {
  const config = rankConfig[player.rank];
  const borderThickness = 2;
  const innerW = config.outerW - borderThickness * 2;
  const innerH = config.outerH - borderThickness * 2;

  return (
    <div className={`flex flex-col items-center ${config.order} ${config.marginBottom}`}>
      {/* Rank Badge */}
      <div
        className="text-white text-xs font-black px-4 py-1 rounded-full tracking-widest uppercase mb-2 z-20 relative"
        style={{ background: config.badgeBg, boxShadow: `0 0 10px ${config.glowColor}` }}
      >
        {config.label}
      </div>

      {/* Big Hex Container */}
      <div className="relative flex items-center justify-center"
        style={{ width: config.outerW, height: config.outerH }}>

        {/* Outer hex border */}
        <div
          className="absolute"
          style={{
            width: config.outerW,
            height: config.outerH,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            background: config.borderColor,
            boxShadow: `0 0 30px ${config.glowColor}`,
          }}
        />

        {/* Inner hex dark bg */}
        <div
          className="absolute"
          style={{
            width: innerW,
            height: innerH,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            background: "linear-gradient(160deg, #1c2133 0%, #0e1220 100%)",
          }}
        />

        {/* Card content inside hex */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 px-4"
          style={{ width: innerW * 0.75 }}>

          {/* Avatar circle */}
          <div className="rounded-full overflow-hidden border-2 border-blue-500"
            style={{
              width: player.rank === 1 ? 90 : 72,
              height: player.rank === 1 ? 90 : 72,
              boxShadow: "0 0 16px rgba(59,130,246,0.5)",
            }}>
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
              <span className={config.avatarSize}>
              <img src={Piggy} alt="" />
              </span>
            </div>
          </div>

          {/* Username */}
          <p className="text-white font-black tracking-widest uppercase text-sm text-center">
            {player.username}
          </p>

          {/* Prize tag */}
          <div
            className="text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider text-center"
            style={{ background: config.prizeTagBg }}
          >
            PRIZE: {player.prize}.00$
          </div>

          {/* Wager */}
          <div className="flex flex-col items-center mt-1">
            <span className="text-gray-500 text-xs tracking-widest uppercase">Wager</span>
            <span className="text-white font-black text-lg">{player.wager}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Podium = () => {
  return (
    <div className="w-full flex flex-col items-center py-6">
      <div className="flex items-end justify-center gap-4 md:gap-8">
        {mockTop3.map((player) => (
          <HexCard key={player.rank} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Podium;