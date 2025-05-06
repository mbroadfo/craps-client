import PassLineZone from "./PassLineZone";
import ComeZone from "./ComeZone";
import FieldZone from "./FieldZone";
import HardwaysZone from "./HardwaysZone";
import NumberZone from "./NumberZone";
import PropositionZone from "./PropositionZone";
import HopsZone from "./HopsZone";
import BigSixEightZone from "./BigSixEightZone";
import ATSZone from "./ATSZone";

export default function TableLayout() {
  return (
    <div className="grid grid-cols-12 gap-2 p-4 bg-green-900 text-white text-sm">
      {/* Top ATS + Come + ATS */}
      <div className="col-span-3">
        <ATSZone />
      </div>
      <div className="col-span-6">
        <ComeZone />
      </div>
      <div className="col-span-3">
        <ATSZone />
      </div>

      {/* Number Zones (4-10) */}
      <div className="col-span-2">
        <NumberZone />
      </div>
      <div className="col-span-2">
        <NumberZone />
      </div>
      <div className="col-span-2">
        <NumberZone />
      </div>
      <div className="col-span-2">
        <NumberZone />
      </div>
      <div className="col-span-2">
        <NumberZone />
      </div>
      <div className="col-span-2">
        <NumberZone />
      </div>

      {/* Prop + Field + Big 6/8 */}
      <div className="col-span-4">
        <PropositionZone />
        <HopsZone />
      </div>
      <div className="col-span-4">
        <FieldZone />
      </div>
      <div className="col-span-4">
        <BigSixEightZone />
      </div>

      {/* Hardways */}
      <div className="col-span-12">
        <HardwaysZone />
      </div>

      {/* Pass Line */}
      <div className="col-span-12">
        <PassLineZone />
      </div>
    </div>
  );
}
