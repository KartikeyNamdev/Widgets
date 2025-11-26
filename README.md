# 🧩 Dynamic CNAPP Dashboard — Next.js + Zustand

A fully dynamic, widget-based dashboard inspired by modern CNAPP platforms like Prisma Cloud, Wiz, and Lacework.  
Users can add, remove, and manage widgets across multiple categories using a JSON-driven architecture and a hover-expanding sidebar.

This project uses **Next.js (App Router)**, **TypeScript**, **Zustand**, and **TailwindCSS**.

---

## ✨ Features

### 🔹 Dynamic Dashboard (JSON-Driven)
- Each category (CSPM, CWPP, Registry Scan) is generated from JSON
- Widgets inside each category are also parsed from JSON
- Adding/removing widgets updates the state globally

### 🔹 Hover-to-Expand Sidebar
- Sidebar stays collapsed (60px) by default
- Expands smoothly to full width on hover
- Lets user:
  - Pick a category (CSPM, CWPP, Registry…)
  - Search available widgets
  - Add widgets directly into a category

### 🔹 Widget Management
- Add widget via sidebar or category `+ Add Widget` tile
- Each widget has:
  - Title
  - Description
  - Remove (X) button

### 🔹 Modal for Creating New Widgets
- Optionally open modal
- Enter widget title + description
- Insert into selected category dynamically

### 🔹 Clean & Modern UI
- Smooth hover animations
- Soft-glass widget look
- Dark theme layout
- Responsive layout (1–3 columns)

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | **Next.js 14 — App Router** |
| Language | **TypeScript** |
| State Management | **Zustand** |
| Styling | **TailwindCSS** |
| UI Additions | (Optional) ShadCN / Radix |
| Data Storage | JSON (for widget definitions) |

---

## 📁 Project Structure

```
/app
  /dashboard
    page.tsx
    AddWidgetModal.tsx
  /components
    Sidebar.tsx
    CategorySection.tsx
    WidgetCard.tsx
  /data
    dashboard.json
    availableWidgets.ts
  /store
    widgetStore.ts
    sidebarStore.ts
```

---

## 📦 JSON Structure

### dashboard.json

```json
{
  "categories": [
    {
      "id": "cspm",
      "title": "CSPM Executive Dashboard",
      "widgets": [
        {
          "id": "cloud_accounts",
          "title": "Cloud Accounts",
          "content": "This widget shows cloud account stats"
        }
      ]
    }
  ]
}
```

### Available Widgets Pool (sidebar suggestions)

```typescript
export const availableWidgets = [
  { id: "w1", title: "Cloud Accounts", content: "Shows cloud stats" },
  { id: "w2", title: "Risk Assessment", content: "Risk score overview" },
  { id: "w3", title: "Namespace Alerts", content: "Top 5 alerts" }
];
```

---

## ⚙️ Zustand Store

### /store/widgetStore.ts
Handles:
- Adding widget
- Removing widget
- Searching widgets
- Global dashboard categories

### /store/sidebarStore.ts
Handles:
- Selected category for adding widgets

---

## ▶️ Running the Project

### 1️⃣ Clone the repository:
```bash
git clone <your-repo-url>
cd dashboard-project
```

### 2️⃣ Install dependencies:
```bash
npm install
```

### 3️⃣ Run locally:
```bash
npm run dev
```

### 4️⃣ Open:
```
http://localhost:3000
```

---

## 🧠 How Widget Adding Works

1. **Sidebar** → Select category
2. **Sidebar** → Search widget
3. **Sidebar** → Click widget
4. **Zustand** updates global category list
5. **UI** re-renders category with new widget

This architecture is inspired by real production dashboards.

---

## 🧲 How the Hover Sidebar Works

The sidebar uses Tailwind's `group-hover` technique:

```tsx
<div className="group fixed left-0 top-0 h-full">
  <div className="w-16 group-hover:w-72 transition-all">
     ...
  </div>
</div>
```

When the user hovers over the outer wrapper (`group`), the inner sidebar expands smoothly.

---

## 🖼️ Screenshots

### 🌑 Dashboard (Dark Theme)
*Add your screenshot here*

### 📚 Hover Sidebar Expanded
*Add your screenshot here*

### ➕ Add Widget Modal
*Add your screenshot here*

---

## 🚀 Future Enhancements (Optional)

- [ ] Drag-and-drop widget repositioning
- [ ] Save layout to localStorage or backend
- [ ] Category collapse / expand
- [ ] Light mode
- [ ] User-defined widget colors
- [ ] ShadCN UI components
- [ ] Widget graphs using ReCharts or AG-Grid

---

## 🤝 Contributing

Feel free to open an Issue or Pull Request if you'd like to improve UI/UX, store logic, or add new widgets.

---

## 📜 License

This project is licensed under MIT — free to use, modify, and share.

---

## 🌟 Author

**KA** — Full Stack Developer  
Passionate about dynamic dashboards, clean UI, and scalable architecture.
