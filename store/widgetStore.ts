import { create } from "zustand";
import DashBoardData from "../app/data.json";

export type Widget = {
  id: string;
  title: string;
  content: string;
};

export type Category = {
  id: string;
  title: string;
  widgets: Widget[];
};

interface StoreState {
  categories: Category[];
  searchQuery: string;

  addWidget: (categoryId: string, widget: Widget) => void;
  removeWidget: (categoryId: string, widgetId: string) => void;
  setSearch: (query: string) => void;
}

export const useWidgetStore = create<StoreState>((set) => ({
  categories: DashBoardData.categories,
  searchQuery: "",

  addWidget: (categoryId, widget) =>
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, widgets: [...cat.widgets, widget] }
          : cat
      ),
    })),

  removeWidget: (categoryId, widgetId) =>
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              widgets: cat.widgets.filter((w) => w.id !== widgetId),
            }
          : cat
      ),
    })),

  setSearch: (query) => set({ searchQuery: query }),
}));
