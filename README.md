# Glynac WMS Analytics

A **Wealth Management System (WMS) Analytics Dashboard** built with Next.js 15, React 19, Tailwind CSS 4, Recharts, and Lucide React.

Live demo: [https://glynac-wms-demo.onrender.com](https://glynac-wms-demo.onrender.com)

---

## 📊 Dashboards

| Dashboard | Route | User |
|-----------|-------|------|
| Executive | `/dashboard/executive` | James Mitchell — CEO |
| Advisor | `/dashboard/advisor` | Sarah Chen — Senior Advisor |
| Operations | `/dashboard/operations` | Marcus Williams — Head of Operations |
| Compliance | `/dashboard/compliance` | Diana Foster — CCO |

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── page.tsx                        # Redirects → /dashboard/executive
│   ├── layout.tsx
│   └── dashboard/
│       ├── executive/page.tsx
│       ├── advisor/page.tsx
│       ├── operations/page.tsx
│       └── compliance/page.tsx
└── components/
    ├── layout/
    │   └── DashboardLayout.tsx         # Shared sidebar + header layout
    └── dashboard/
        ├── executive/
        │   ├── KPICards.tsx            # AUM, clients, returns, revenue KPIs
        │   ├── AUMChart.tsx            # 12-month AUM area chart by asset class
        │   ├── PerformanceOverview.tsx # Quarterly returns vs benchmark
        │   └── TopClients.tsx          # Top 5 clients by AUM
        ├── advisor/
        │   ├── PortfolioSummary.tsx    # Book KPIs + pie chart + AUM trend
        │   ├── ClientList.tsx          # Searchable & filterable client table
        │   └── PerformanceInsights.tsx # Radar scorecard + AI insights
        ├── operations/
        │   ├── ProcessMetrics.tsx      # Trade volume + processing time charts
        │   ├── ResourceUtilization.tsx # Team capacity utilization
        │   └── SystemHealth.tsx        # System status + latency monitoring
        └── compliance/
            ├── RegulatoryStatus.tsx    # Compliance scores by regulation
            ├── RiskAssessment.tsx      # Risk matrix + radar + top risks
            └── AuditTracking.tsx       # Audit items tracker + trend chart
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to the Executive Dashboard.

### Build for Production

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.4.6 | App framework (App Router) |
| [React](https://react.dev/) | 19 | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Styling |
| [Recharts](https://recharts.org/) | 2.x | Charts (Area, Bar, Line, Pie, Radar, Scatter) |
| [Lucide React](https://lucide.dev/) | 0.511 | Icons |
| TypeScript | 5 | Type safety |

---

## 🎨 Design Highlights

- **Responsive** — mobile, tablet, and desktop layouts
- **Interactive charts** — tooltips, hover effects on all Recharts components
- **Collapsible sidebar** — hamburger menu on mobile
- **Backend-ready data** — all mock data structured for easy API replacement
- **Color-coded status** — green/amber/red system for risk, compliance, and system health

---

## 📁 Data Structure

All mock data follows a backend-ready pattern. Example:

```ts
const mockData = {
  metrics: { value: 1247, change: 8.2, period: 'from last month' },
  chartData: [
    { month: 'Jan', value: 2200 },
    { month: 'Feb', value: 2350 },
  ],
  tableData: [
    { id: 1, name: 'Client Name', value: 124200000, change: 15.2 },
  ],
};
```

Replace mock data with API calls in each component to connect to a real backend.

---

## 📄 License

MIT — © 2025 Glynac AI
