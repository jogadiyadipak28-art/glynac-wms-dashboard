'use client';

import { TrendingUp, TrendingDown, Users, DollarSign, BarChart2, Target } from 'lucide-react';

const kpis = [
  {
    label: 'Total AUM',
    value: '$4.82B',
    change: 12.4,
    period: 'from last quarter',
    icon: <DollarSign size={20} className="text-blue-600" />,
    bg: 'bg-blue-50',
  },
  {
    label: 'Active Clients',
    value: '1,247',
    change: 8.2,
    period: 'from last month',
    icon: <Users size={20} className="text-emerald-600" />,
    bg: 'bg-emerald-50',
  },
  {
    label: 'YTD Returns',
    value: '18.6%',
    change: 3.1,
    period: 'vs benchmark',
    icon: <TrendingUp size={20} className="text-violet-600" />,
    bg: 'bg-violet-50',
  },
  {
    label: 'Revenue',
    value: '$38.4M',
    change: -2.3,
    period: 'from last quarter',
    icon: <BarChart2 size={20} className="text-orange-600" />,
    bg: 'bg-orange-50',
  },
  {
    label: 'Client Retention',
    value: '96.8%',
    change: 1.2,
    period: 'from last year',
    icon: <Target size={20} className="text-rose-600" />,
    bg: 'bg-rose-50',
  },
  {
    label: 'New AUM (QTD)',
    value: '$284M',
    change: 22.7,
    period: 'vs last quarter',
    icon: <TrendingUp size={20} className="text-cyan-600" />,
    bg: 'bg-cyan-50',
  },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`p-2 rounded-lg ${kpi.bg}`}>{kpi.icon}</div>
            <span
              className={`flex items-center gap-1 text-xs font-semibold ${
                kpi.change >= 0 ? 'text-emerald-600' : 'text-red-500'
              }`}
            >
              {kpi.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {Math.abs(kpi.change)}%
            </span>
          </div>
          <p className="text-2xl font-bold text-slate-900">{kpi.value}</p>
          <p className="text-xs text-slate-500 mt-1">{kpi.label}</p>
          <p className="text-xs text-slate-400 mt-0.5">{kpi.period}</p>
        </div>
      ))}
    </div>
  );
}
