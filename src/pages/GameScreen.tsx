// src/pages/GameScreen.tsx
import TableLayout from "@/components/Table/TableLayout";

export default function GameScreen() {
  return (
    <div className="flex min-h-screen bg-[#14532d] text-white font-mono">
      {/* Left Sidebar */}
      <aside className="w-64 bg-green-950 p-4 border-r border-green-800">
        <h2 className="text-lg font-bold mb-4">Controls</h2>
        <button className="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded mb-2">
          Roll Dice
        </button>
        <button className="w-full bg-gray-700 text-white font-bold py-2 px-4 rounded mb-2">
          New Game
        </button>
        {/* Add more control buttons here */}
      </aside>

      {/* Center: Craps Table */}
      <main className="flex-1 p-6 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          <h1 className="text-3xl font-bold mb-4 text-center tracking-wider">
            Craps Table
          </h1>
          <div className="bg-green-800 rounded-xl p-6 shadow-inner border-4 border-yellow-500">
            <TableLayout />
          </div>
        </div>
      </main>

      {/* Right Sidebar: Player Info + Log */}
      <aside className="w-64 bg-green-950 p-4 border-l border-green-800">
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Bankroll</h2>
          <div className="text-yellow-300 text-xl">$1500</div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Play-by-Play</h2>
          <div className="bg-green-900 p-2 rounded h-64 overflow-y-auto text-sm">
            <div>New game started...</div>
            <div>Player bet on Pass Line</div>
            <div>Rolled 7 – win!</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
