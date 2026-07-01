'use client';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar,
} from 'recharts';
import { CheckCircle, Clock, AlertTriangle, TrendingUp } from 'lucide-react';

const kpis = [
  { label: 'Trades Processed', value: '8,492', change: 12.3, icon: <CheckCircle size={18} className="text-emerald-600" />, bg: 'bg-emerald-50' },
  { label: 'Avg Settlement Time', value: '1.2 days', change: -8.4, icon: <Clock size={18} className="text-blue-600" />, bg: 'bg-blue-50' },
  { label: 'Failed Transactions', value: '14', change: -22.1, icon: <AlertTriangle size={18} className="text-amber-600" />, bg: 'bg-amber-50' },
  { label: 'STP Rate', value: '97.8%', change: 0.8, icon: <TrendingUp size={18} className="text-violet-600" />, bg: 'bg-violet-50' },
];

const dailyVolume = [
  { day: 'Mon', trades: 1840, settled: 1820, failed: 20 },
  { day: 'Tue', trades: 2110, settled: 2090, failed: 20 },
  { day: 'Wed', trades: 1760, settled: 1748, failed: 12 },
  { day: 'Thu', trades: 2380, settled: 2368, failed: 12 },
  { day: 'Fri', trades: 2040, settled: 2026, failed: 14 },
];

const processingTime = [
  { week: 'Wk 1', front: 0.8, middle: 0.5, back: 0.6 },
  { week: 'Wk 2', front: 0.9, middle: 0.4, back: 0.5 },
  { week: 'Wk 3', front: 0.7, middle: 0.5, back: 0.7 },
  { week: 'Wk 4', front: 0.8, middle: 0.4, back: 0.5 },
  { week: 'Wk 5', front: 0.6, middle: 0.4, back: 0.5 },
];

export default function ProcessMetrics() {
  return (
    <div className="space-y-4">
      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${k.bg}`}>{k.icon}</div>
              <span className={`flex items-center gap-0.5 text-xs font-semibold ${k.change >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                {k.change >= 0 ? '↑' : '↓'} {Math.abs(k.change)}%
              </span>
            </div>
            <p className="text-xl font-bold text-slate-900">{k.value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{k.label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-4">Daily Trade Volume</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dailyVolume} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Bar dataKey="settled" name="Settled" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
              <Bar dataKey="failed" name="Failed" stackId="a" fill="#f87171" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-4">Processing Time by Office (days)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={processingTime} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} domain={[0, 1.5]} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="front" name="Front Office" stroke="#3b82f6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="middle" name="Middle Office" stroke="#10b981" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="back" name="Back Office" stroke="#8b5cf6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
