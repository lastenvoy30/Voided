import { FaCopy } from "react-icons/fa6";
import Leaderboard from "../../assets/Leaderboard.svg";
const HeroBanner = () => {
  return (
    <div className="relative w-full bg-[#0D0F14] overflow-hidden py-6 flex flex-col items-center justify-center text-center gap-4">
      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-800 opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative floating diamonds */}
      <div className="absolute top-8 left-16 text-white opacity-20 text-2xl rotate-45">
        ◆
      </div>
      <div className="absolute top-12 right-20 text-white opacity-20 text-xl rotate-12">
        ◆
      </div>
      <div className="absolute bottom-16 left-24 text-white opacity-10 text-lg rotate-45">
        ◆
      </div>
      <div className="absolute top-6 right-1/3 text-white opacity-10 text-sm">
        ✦
      </div>
      <div className="absolute bottom-10 right-1/4 text-white opacity-10 text-sm">
        ✦
      </div>

      <div className="absolute top-1/2 left-8 text-blue-400 opacity-15 text-3xl rotate-12">
        ◆
      </div>
      <div className="absolute top-4 left-1/3 text-white opacity-10 text-xs rotate-45">
        ◆
      </div>
      <div className="absolute bottom-4 left-1/3 text-blue-300 opacity-15 text-base rotate-6">
        ◆
      </div>
      <div className="absolute top-1/3 right-8 text-white opacity-10 text-2xl -rotate-12">
        ◆
      </div>
      <div className="absolute bottom-6 right-12 text-blue-400 opacity-15 text-lg rotate-45">
        ◆
      </div>
      <div className="absolute top-16 left-1/2 text-white opacity-10 text-xs">
        ✦
      </div>
      <div className="absolute bottom-12 left-12 text-white opacity-10 text-xs">
        ✦
      </div>
      <div className="absolute top-3 left-40 text-blue-300 opacity-10 text-sm rotate-45">
        ◆
      </div>
      <div className="absolute bottom-3 right-40 text-white opacity-10 text-sm -rotate-12">
        ◆
      </div>
      <div className="absolute top-1/2 right-1/3 text-blue-400 opacity-10 text-xs rotate-45">
        ✦
      </div>

      {/* Title */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-wide leading-none">
          <span className="text-blue-400">$8,000</span>
          <span className="text-white"> MONTHLY</span>
        </h1>
        <img
          src={Leaderboard}
          alt="Leaderboard"
          className="w-auto max-w-lg md:max-w-2xl"
          style={{ marginTop: "-140px", marginBottom: "-120px" }}
        />{" "}
      </div>

      {/* Badges row */}
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex items-center gap-2 bg-[#1a2035] hover:bg-[#1e2a45] border border-[#2a3a5c] text-white text-sm font-bold tracking-wider uppercase px-5 py-2 rounded-lg transition-all duration-200 hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] cursor-pointer">
          <span className="text-gray-400 font-bold">CODE:</span>
          <span className="text-white">VOIDED</span>
          <span className="text-white flex items-center">
            <FaCopy />
          </span>
        </div>

        <button className="flex items-center gap-2 bg-[#1a2035] hover:bg-[#1e2a45] border border-[#2a3a5c] text-white text-sm font-bold tracking-wider uppercase px-5 py-2 rounded-lg transition-all duration-200 hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]">
          <span className="text-green-400 font-black">
            <svg
              width="10"
              height="15"
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.92144 4.26079C1.91377 2.27828 3.1809 1.17834 5.50729 1.17065C7.18094 1.16451 7.48008 2.26138 7.48008 2.66003C7.48008 3.42354 6.40164 4.23314 6.40164 4.23314C6.40164 4.23314 6.46147 4.7086 7.38727 4.70476C8.31307 4.70092 9.2151 4.08873 9.20973 2.55711C9.20512 0.79735 7.36426 -0.00686888 5.54487 4.41774e-05C4.02309 0.00465288 -0.0137712 0.218958 3.53266e-05 4.23237C0.0138418 7.7972 6.73146 8.11136 6.73683 10.3934C6.74604 12.8722 3.9694 13.5396 3.02979 13.5396C2.09018 13.5396 1.7082 12.8737 1.70667 12.5081C1.69977 10.501 3.6948 9.94179 3.6948 9.94179C3.6948 9.792 3.57822 9.12451 2.80582 9.12758C0.815385 9.13142 0.0230461 10.8451 0.0284153 12.5181C0.0337845 13.9414 1.03782 14.8293 2.555 14.8232C5.4559 14.8124 8.7265 13.3952 8.71423 10.2483C8.70349 7.30484 1.92911 6.53595 1.92067 4.26002L1.92144 4.26079Z"
                fill="white"
              />
            </svg>
          </span>
          JOIN STAKE
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
