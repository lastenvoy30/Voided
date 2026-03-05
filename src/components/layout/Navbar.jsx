import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import Voided from "../../assets/Voided.svg";

const Navbar = () => {
  const [active, setActive] = useState("leaderboard");

  const navItems = [
    { key: "leaderboard", label: "Leaderboard", icon: <FaTrophy /> },
    { key: "bonus", label: "Bonus", icon: <FaGift /> },
    {
      key: "stream",
      label: "Stream",
      icon: (
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H4.56V3.03981H6.08019V1.52019H7.60038V0H12.1604V4.56H10.6402V6.08019H9.12V7.59981H10.6402V9.12H12.1604V13.68H7.60038V12.1598H6.08019V10.6402H4.56V13.68H0V0Z"
            fill="#717370"
          />
        </svg>
      ),
      
    },
  ];

  return (
    <nav className="w-full bg-[#0D0F14] border-b border-[#1E2433] px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <img src={Voided} alt="Voided" className="h-10 w-auto" />
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
              <svg
                className="w-3 h-3 opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            )}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-2 bg-[#1a2035] hover:bg-[#1e2a45] border border-[#2a3a5c] text-white text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-lg transition-all duration-200 hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]">
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
    </nav>
  );
};

export default Navbar;
