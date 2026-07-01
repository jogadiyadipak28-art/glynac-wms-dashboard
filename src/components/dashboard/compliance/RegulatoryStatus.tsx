'use client';

import { AlertTriangle, Clock, XCircle, TrendingUp, TrendingDown } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';

const kpis = [
  { label: 'Compliance Score', value: '94.2%', change: 1.8, icon: <TrendingUp size={18} className="text-emerald-600" />, bg: 'bg-emerald-50' },
  { label: 'Open Issues', value: '7', change: -36.4, icon: <AlertTriangle size={18} className="text-amber-600" />, bg: 'bg-amber-50' },
  { label: 'Filings Due (30d)', value: '12', change: 0, icon: <Clock size={18} className="text-blue-600" />, bg: 'bg-blue-50' },
  { label: 'Overdue Items', value: '2', change: -50, icon: <XCircle size={18} className="text-red-500" />, bg: 'bg-red-50' },
];

const regulatoryData = [
  { regulation: 'Form ADV', score: 98, status: 'Pass' },
  { regulation: 'Reg BI', score: 91, status: 'Pass' },
  { regulation: 'SOX', score: 96, status: 'Pass' },
  { regulation: 'AML/KYC', score: 88, status: 'Watch' },
  { regulation: 'GDPR', score: 94, status: 'Pass' },
  { regulation: 'FINRA', score: 79, status: 'Watch' },
];

const getBarColor = (score: number) => {
  if (score >= 93) return '#10b981';
  if (score >= 85) return '#f59e0b';
  return '#f87171';
};

export default function RegulatoryStatus() {
  return (
    <div className="space-y-4">
      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${k.bg}`}>{k.icon}</div>
              {k.change !== 0 && (
                <span className={`flex items-center gap-0.5 text-xs font-semibold ${k.change >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                  {k.change >= 0 ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                  {Math.abs(k.change)}%
                </span>
              )}
            </div>
            <p className="text-xl font-bold text-slate-900">{k.value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{k.label}</p>
          </div>
        ))}
      </div>

      {/* Regulatory compliance bar chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-1">Regulatory Compliance Scores</h3>
        <p className="text-xs text-slate-500 mb-4">Score by regulation — target 90+</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={regulatoryData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="regulation" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis domain={[60, 100]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            <Bar dataKey="score" radius={[4, 4, 0, 0]}>
              {regulatoryData.map((entry) => (
                <Cell key={entry.regulation} fill={getBarColor(entry.score)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" /><span className="text-xs text-slate-600">Pass (≥93)</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-amber-500 rounded-full" /><span className="text-xs text-slate-600">Watch (85-92)</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-red-400 rounded-full" /><span className="text-xs text-slate-600">Fail (&lt;85)</span></div>
        </div>
      </div>
    </div>
  );
}
