import useCountdown from "../../hooks/useCountdown.jsx";

const TimeBox = ({ value, label }) => (
  <div
    className="relative flex items-center justify-center"
    style={{ width: 80, height: 88 }}
  >
    {/* Outer hex border */}
    <div
      className="absolute inset-0"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: "#2a6af5",
        filter: "blur(1px)",
      }}
    />
    {/* Inner hex dark bg */}
    <div
      className="absolute"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: "linear-gradient(160deg, #1c2133 0%, #0e1220 100%)",
        inset: "2px",
        boxShadow: "0 0 20px rgba(42,106,245,0.4)",
      }}
    />
    {/* Text */}
    <span className="relative z-10 text-white font-black text-xl tracking-wider">
      {String(value).padStart(2, "0")}
      {label}
    </span>
  </div>
);
const CountdownTimer = () => {
  const { days, hours, minutes, seconds } = useCountdown("2026-04-01T00:00:00");

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <p className="text-white font-bold tracking-widest uppercase text-sm">
        Leaderboard Ends In
      </p>
      <div className="flex items-center gap-4">
        <TimeBox value={days} label="D" />
        <TimeBox value={hours} label="H" />
        <TimeBox value={minutes} label="M" />
        <TimeBox value={seconds} label="S" />
      </div>
    </div>
  );
};

export default CountdownTimer;
