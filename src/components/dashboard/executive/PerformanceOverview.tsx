'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const performanceData = [
  { quarter: 'Q1 2024', returns: 6.2, benchmark: 5.1 },
  { quarter: 'Q2 2024', returns: 4.8, benchmark: 4.2 },
  { quarter: 'Q3 2024', returns: -1.2, benchmark: -2.1 },
  { quarter: 'Q4 2024', returns: 8.4, benchmark: 7.2 },
  { quarter: 'Q1 2025', returns: 5.6, benchmark: 4.8 },
  { quarter: 'Q2 2025', returns: 3.9, benchmark: 3.1 },
];

export default function PerformanceOverview() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Portfolio Performance vs Benchmark</h3>
        <p className="text-sm text-slate-500">Quarterly returns comparison</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={performanceData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="quarter" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 11, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(val: number) => [`${val}%`, '']}
            contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
          />
          <ReferenceLine y={0} stroke="#cbd5e1" />
          <Bar dataKey="returns" name="Portfolio" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="benchmark" name="Benchmark" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <span className="text-xs text-slate-600">Portfolio</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bg-slate-200 rounded-sm"></div>
          <span className="text-xs text-slate-600">Benchmark</span>
        </div>
      </div>
    </div>
  );
}
