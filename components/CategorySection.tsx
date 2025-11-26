"use client";

import { useWidgetStore } from "@/store/widgetStore";
import WidgetCard from "./WidgetCard";
import { useState } from "react";
import AddWidgetModal from "@/app/dashboard/AddWidgetModal";

export default function CategorySection({ category }) {
  const [showModal, setShowModal] = useState(false);
  const { searchQuery } = useWidgetStore();

  const filteredWidgets = category.widgets.filter((w) =>
    w.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-3 text-gray-600">
        {category.title}
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {filteredWidgets.map((widget) => (
          <WidgetCard
            key={widget.id}
            widget={widget}
            categoryId={category.id}
          />
        ))}

        {/* Add Widget Box */}
        <div
          onClick={() => setShowModal(true)}
          className="
    flex flex-col items-center justify-center 
    border-2 border-dashed border-gray-300 
    bg-white/40 backdrop-blur-sm 
    rounded-xl 
    py-10 
    cursor-pointer 
    text-gray-500 
    transition all duration-200
    hover:bg-white/60 hover:text-black hover:border-gray-400
  "
        >
          <span className="text-lg font-medium">+ Add Widget</span>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <AddWidgetModal
          categoryId={category.id}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
