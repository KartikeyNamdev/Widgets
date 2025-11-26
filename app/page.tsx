"use client";

import { useWidgetStore } from "@/store/widgetStore";
import CategorySection from "@/components/CategorySection";
import Sidebar from "@/components/SideBar";

export default function DashboardPage() {
  const { categories, setSearch } = useWidgetStore();

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex">
      <Sidebar />

      <div className="flex-1 ml-16 p-8 transition-all">
        <h1 className="text-2xl font-semibold mb-6">CNAPP Dashboard</h1>

        <input
          placeholder="Search widgets..."
          className="
            w-1/3 bg-white/10 border border-gray-600 
            text-gray-200 rounded-lg px-4 py-2 mb-6
          "
          onChange={(e) => setSearch(e.target.value)}
        />

        {categories.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
}
