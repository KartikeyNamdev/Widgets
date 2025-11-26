"use client";

import { useWidgetStore } from "@/store/widgetStore";
import { X } from "lucide-react";

export default function WidgetCard({ widget, categoryId }) {
  const removeWidget = useWidgetStore((s) => s.removeWidget);

  return (
    <div
      className="
  relative 
  bg-white/90 
  backdrop-blur-md 
  rounded-xl 
  p-5 
  shadow-[0_4px_14px_rgba(0,0,0,0.08)] 
  border border-gray-200 
  transition-all duration-200 
  hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] 
  hover:-translate-y-1
"
    >
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="absolute top-2 right-2"
      >
        <X size={18} className="text-gray-600 hover:text-black" />
      </button>

      <h3 className="font-semibold text-gray-500">{widget.title}</h3>
      <p className="text-gray-600 text-sm mt-2">{widget.content}</p>
    </div>
  );
}
