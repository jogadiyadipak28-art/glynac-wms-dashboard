'use client';

import { TrendingUp, TrendingDown, Users, DollarSign, Activity } from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const metrics = [
  { label: 'Book AUM', value: '$487M', change: 9.4, icon: <DollarSign size={18} className="text-blue-600" />, bg: 'bg-blue-50' },
  { label: 'Active Clients', value: '43', change: 4.8, icon: <Users size={18} className="text-emerald-600" />, bg: 'bg-emerald-50' },
  { label: 'Avg Return', value: '16.2%', change: 2.3, icon: <TrendingUp size={18} className="text-violet-600" />, bg: 'bg-violet-50' },
  { label: 'At-Risk Clients', value: '3', change: -1, icon: <Activity size={18} className="text-red-500" />, bg: 'bg-red-50' },
];

const allocationData = [
  { name: 'US Equity', value: 38, color: '#3b82f6' },
  { name: "Int'l Equity", value: 18, color: '#6366f1' },
  { name: 'Fixed Income', value: 28, color: '#10b981' },
  { name: 'Alternatives', value: 11, color: '#8b5cf6' },
  { name: 'Cash', value: 5, color: '#94a3b8' },
];

const recentActivity = [
  { month: 'Jul', value: 463 },
  { month: 'Aug', value: 471 },
  { month: 'Sep', value: 468 },
  { month: 'Oct', value: 479 },
  { month: 'Nov', value: 483 },
  { month: 'Dec', value: 487 },
];

export default function PortfolioSummary() {
  return (
    <div className="space-y-4">
      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${m.bg}`}>{m.icon}</div>
              <span className={`flex items-center gap-1 text-xs font-semibold ${m.change >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                {m.change >= 0 ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                {Math.abs(m.change)}%
              </span>
            </div>
            <p className="text-xl font-bold text-slate-900">{m.value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Allocation Pie */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-4">Book Asset Allocation</h3>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="50%" height={160}>
              <PieChart>
                <Pie data={allocationData} dataKey="value" cx="50%" cy="50%" innerRadius={45} outerRadius={70}>
                  {allocationData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => [`${v}%`, '']} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {allocationData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-xs text-slate-600">{item.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AUM Trend */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-4">Book AUM Trend (6M)</h3>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={recentActivity} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis domain={[450, 500]} tickFormatter={(v) => `$${v}M`} tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip formatter={(v) => [`$${v}M`, 'AUM']} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4, fill: '#3b82f6' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
