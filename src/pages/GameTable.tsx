import TableLayout from "../components/Table/TableLayout";

export default function GameTable() {
  return (
    <div className="min-h-screen bg-green-800 p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Craps Table</h1>
      <TableLayout />
    </div>
  );
}
