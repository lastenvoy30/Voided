import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";



const Navbar = () => {
  const [active, setActive] = useState("leaderboard");

  const navItems = [
    { key: "leaderboard", label: "Leaderboard", icon: <FaTrophy />
 },
    { key: "bonus", label: "Bonus", icon: <FaGift />
 },
    { key: "stream", label: "Stream", icon: null, external: true },
  ];

  return (
    <nav className="w-full bg-[#0D0F14] border-b border-[#1E2433] px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <span className="text-white font-black text-xl tracking-tight font-display">
          VOIDED
          <span className="text-yellow-400 text-xs align-super">✦</span>
        </span>
      </div>

      <div className="flex items-center gap-8">
        {navItems.map(({ key, label, icon, external }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={[
              "flex items-center gap-1.5 text-sm font-semibold tracking-widest uppercase",
              "transition-all duration-200 px-1 pb-1 border-b-2",
              active === key
                ? "text-white border-white"
                : "text-gray-400 hover:text-white border-transparent",
            ].join(" ")}
          >
            {label}
            {icon && <span className="text-xs">{icon}</span>}
            {external && (
              <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-2 bg-[#1a2035] hover:bg-[#1e2a45] border border-[#2a3a5c] text-white text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-lg transition-all duration-200 hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]">
        <span className="text-green-400 font-black">$</span>
        JOIN STAKE
      </button>
    </nav>
  );
};

export default Navbar;