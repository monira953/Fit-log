"use client";

interface PlanTabsProps {
  activeTab: "plan" | "saved";
  onTabChange: (tab: "plan" | "saved") => void;
  planCount: number;
  savedCount: number;
}

const PlanTabs = ({
  activeTab,
  onTabChange,
  planCount,
  savedCount,
}: PlanTabsProps) => {
  return (
    <div className="flex gap-2 border-b border-white/10">
      <button
        onClick={() => onTabChange("plan")}
        className={`rounded-t-xl px-5 py-3 text-xs font-bold uppercase tracking-wider transition ${
          activeTab === "plan"
            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
            : "text-white/40 hover:text-white"
        }`}
      >
        Today&apos;s Plan ({planCount})
      </button>

      <button
        onClick={() => onTabChange("saved")}
        className={`rounded-t-xl px-5 py-3 text-xs font-bold uppercase tracking-wider transition ${
          activeTab === "saved"
            ? "border-b-2 border-[#ccff00] text-[#ccff00]"
            : "text-white/40 hover:text-white"
        }`}
      >
        Saved ({savedCount})
      </button>
    </div>
  );
};

export default PlanTabs;