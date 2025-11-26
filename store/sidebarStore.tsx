import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isOpen: false,
  selectedCategory: null,

  setCategory: (catId: string) => set({ selectedCategory: catId }),
}));
