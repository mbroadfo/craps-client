interface BetZoneProps {
    label: string;
  }
  
  export default function BetZone({ label }: BetZoneProps) {
    return (
      <div className="bg-green-900 rounded-xl border border-green-600 p-4 text-center shadow-inner hover:bg-green-700 transition-colors">
        <span className="block font-semibold text-lg">{label}</span>
      </div>
    );
  }
  