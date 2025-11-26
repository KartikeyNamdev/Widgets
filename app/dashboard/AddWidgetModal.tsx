"use client";

import { useState } from "react";
import { useWidgetStore } from "@/store/widgetStore";

export default function AddWidgetModal({ categoryId, onClose }) {
  const addWidget = useWidgetStore((s) => s.addWidget);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    addWidget(categoryId, {
      id: crypto.randomUUID(),
      title,
      content,
    });
    onClose();
  };

  return (
    <>
      {/* Blurred background overlay */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
          <h2 className="font-bold text-lg mb-4 text-gray-600">Add Widget</h2>

          <input
            placeholder="Widget title"
            className="w-full border px-3 py-2 rounded mb-3 text-gray-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Widget description"
            className="w-full border px-3 text-gray-500 py-2 rounded mb-3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
