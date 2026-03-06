// src/components/layout/Footer.jsx
import logo from "../../assets/Voided.svg";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="w-full mt-12 border-t border-[#1E2433]"
      style={{ background: "#0e1118" }}
    >
      <div className="max-w-5xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
        
        {/* Logo + copyright */}
        <div className="flex flex-col gap-3">
          <img src={logo} alt="Voided" className="h-8 w-auto" />
          <p className="text-gray-600 text-xs mt-2">© 2025 Voided.gg</p>
          <p className="text-gray-600 text-xs">All Rights Reserved</p>
        </div>

        {/* Pages */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-sm font-black tracking-widest uppercase mb-1">Pages</p>
          <a href="#" className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors">Leaderboard</a>
          <a href="#" className="text-gray-500 text-sm font-medium hover:text-white transition-colors">Bonuses</a>
          <a href="#" className="text-gray-500 text-sm font-medium hover:text-white transition-colors flex items-center gap-1">
            Stream
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-sm font-black tracking-widest uppercase mb-1">Socials</p>
          <a href="#" className="text-gray-500 text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
            <FaXTwitter size={14} style={{ color: 'white' }} /> Twitter
          </a>
          <a href="#" className="text-gray-500 text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
            <FaDiscord size={14} style={{ color: 'white' }} /> Discord
          </a>
          <a href="#" className="text-gray-500 text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
            <FaXTwitter size={14} style={{ color: 'white' }} /> Twitter (Prizes)
          </a>
        </div>

        {/* Partners */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-sm font-black tracking-widest uppercase mb-1">Partners</p>
          <a href="#" className="text-gray-500 text-sm font-medium hover:text-white transition-colors flex items-center gap-1">
            Stake.com
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;