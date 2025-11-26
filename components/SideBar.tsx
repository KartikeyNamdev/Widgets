"use client";

import { useState } from "react";
import { availableWidgets } from "@/app/availableWidgets";
import { useWidgetStore } from "@/store/widgetStore";
import { useSidebarStore } from "@/store/sidebarStore";

export default function Sidebar() {
  const [query, setQuery] = useState("");
  const { addWidget } = useWidgetStore();
  const { selectedCategory, setCategory } = useSidebarStore();

  const filtered = availableWidgets.filter((w) =>
    w.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed left-0 top-0 h-full group z-50">
      {/* Sidebar (starts narrow, expands on hover) */}
      <div
        className="
          h-full bg-[#111] text-white 
          transition-all duration-300 
          w-16 group-hover:w-72 
          border-r border-gray-800 
          overflow-hidden
        "
      >
        <div className="p-4 space-y-4">
          {/* Title */}
          <h2
            className="
            font-semibold text-lg 
            opacity-0 group-hover:opacity-100 
            transition duration-300
          "
          >
            Widgets
          </h2>

          {/* Category Selector */}
          <div className="opacity-0 group-hover:opacity-100 transition duration-300">
            <p className="text-sm mb-1 text-gray-400">Select Category</p>
            <select
              className="w-full bg-[#222] border border-gray-700 rounded p-2"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">-- Choose --</option>
              <option value="cspm">CSPM Executive Dashboard</option>
              <option value="cwpp">CWPP Dashboard</option>
              <option value="registry">Registry Scan</option>
            </select>
          </div>

          {/* Search */}
          <input
            placeholder="Search widgets..."
            className="
              w-full bg-[#222] border border-gray-700 
              rounded p-2 text-sm 
              opacity-0 group-hover:opacity-100 
              transition duration-300
            "
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Widgets List */}
          <div className="space-y-3 opacity-0 group-hover:opacity-100 transition duration-300 pt-2">
            {filtered.map((w) => (
              <button
                key={w.id}
                className="
                  w-full text-left bg-[#1b1b1b] 
                  hover:bg-[#272727] 
                  border border-gray-700 
                  rounded p-3 text-sm
                "
                onClick={() => {
                  if (!selectedCategory)
                    return alert("Select a category first!");
                  addWidget(selectedCategory, {
                    id: crypto.randomUUID(),
                    title: w.title,
                    content: w.content,
                  });
                }}
              >
                <p className="font-medium">{w.title}</p>
                <p className="text-gray-400 text-xs">{w.content}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
