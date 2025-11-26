"use client";

import { useWidgetStore } from "@/store/widgetStore";
import CategorySection from "@/components/CategorySection";

export default function DashboardPage() {
  const { categories, setSearch } = useWidgetStore();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">CNAPP Dashboard</h1>

      <input
        placeholder="Search widgets..."
        className="w-1/3 border px-3 py-2 rounded mb-6"
        onChange={(e) => setSearch(e.target.value)}
      />

      {categories.map((cat) => (
        <CategorySection key={cat.id} category={cat} />
      ))}
    </div>
  );
}
