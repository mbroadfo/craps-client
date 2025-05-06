import BetZone from "../components/BetZone";

export default function GameTable() {
  return (
    <div className="min-h-screen bg-green-800 p-4 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Craps Table</h1>

      <div className="grid grid-cols-3 gap-4 w-full max-w-5xl">
        <BetZone label="Pass Line" />
        <BetZone label="Field" />
        <BetZone label="Don't Pass" />
        <BetZone label="Come" />
        <BetZone label="Place Bets" />
        <BetZone label="Big 6 / Big 8" />
      </div>
    </div>
  );
}
