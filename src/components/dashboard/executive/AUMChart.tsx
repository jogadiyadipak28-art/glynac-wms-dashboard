'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const aumData = [
  { month: 'Jan', aum: 3800, equity: 2200, fixedIncome: 980, alternatives: 620 },
  { month: 'Feb', aum: 3950, equity: 2310, fixedIncome: 1010, alternatives: 630 },
  { month: 'Mar', aum: 4020, equity: 2380, fixedIncome: 1020, alternatives: 620 },
  { month: 'Apr', aum: 4180, equity: 2470, fixedIncome: 1060, alternatives: 650 },
  { month: 'May', aum: 4290, equity: 2550, fixedIncome: 1090, alternatives: 650 },
  { month: 'Jun', aum: 4150, equity: 2430, fixedIncome: 1080, alternatives: 640 },
  { month: 'Jul', aum: 4380, equity: 2600, fixedIncome: 1110, alternatives: 670 },
  { month: 'Aug', aum: 4510, equity: 2700, fixedIncome: 1130, alternatives: 680 },
  { month: 'Sep', aum: 4620, equity: 2780, fixedIncome: 1160, alternatives: 680 },
  { month: 'Oct', aum: 4700, equity: 2840, fixedIncome: 1180, alternatives: 680 },
  { month: 'Nov', aum: 4780, equity: 2890, fixedIncome: 1200, alternatives: 690 },
  { month: 'Dec', aum: 4820, equity: 2930, fixedIncome: 1210, alternatives: 680 },
];

const formatYAxis = (value: number) => `$${value / 1000}B`;
const formatTooltip = (value: number) => [`$${value}M`, ''];

export default function AUMChart() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Assets Under Management</h3>
          <p className="text-sm text-slate-500">12-month AUM trend by asset class</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-slate-900">$4.82B</span>
          <span className="text-sm text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">+12.4%</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={aumData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="gradEquity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradFixed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradAlt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <Tooltip
            formatter={formatTooltip}
            contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Area type="monotone" dataKey="equity" name="Equity" stroke="#3b82f6" fill="url(#gradEquity)" strokeWidth={2} />
          <Area type="monotone" dataKey="fixedIncome" name="Fixed Income" stroke="#10b981" fill="url(#gradFixed)" strokeWidth={2} />
          <Area type="monotone" dataKey="alternatives" name="Alternatives" stroke="#8b5cf6" fill="url(#gradAlt)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
