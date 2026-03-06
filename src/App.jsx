import Navbar from "./components/layout/Navbar";
import CountdownTimer from "./components/leaderboard/CountdownTimer";
import HeroBanner from "./components/leaderboard/HeroBanner";
import LeaderboardTable from "./components/leaderboard/LeaderboardTable";
import Podium from "./components/leaderboard/Podium";

function App() {
  return (
    <div className="min-h-screen bg-[#0D0F14]">
      <Navbar />
      <HeroBanner />
      <Podium />
      <CountdownTimer />
      <LeaderboardTable />

    </div>
  );
}

export default App;