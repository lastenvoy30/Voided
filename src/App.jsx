import Navbar from "./components/layout/Navbar";
import HeroBanner from "./components/leaderboard/HeroBanner";
import Podium from "./components/leaderboard/Podium";

function App() {
  return (
    <div className="min-h-screen bg-[#0D0F14]">
      <Navbar />
      <HeroBanner />
      <Podium />
    </div>
  );
}

export default App;