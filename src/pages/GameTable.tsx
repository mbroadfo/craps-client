import TableLayout from "@/components/Table/TableLayout";

export default function GameTable() {
  return (
    <div className="min-h-screen bg-green-800 p-4">
      <h1 className="text-3xl font-bold text-white mb-4 text-center">Craps Table</h1>
      <div className="max-w-screen-xl mx-auto">
        <TableLayout />
      </div>
    </div>
  );
}