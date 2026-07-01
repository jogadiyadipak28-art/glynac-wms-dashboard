'use client';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { CheckCircle, Clock, AlertTriangle, FileText, ExternalLink } from 'lucide-react';

const auditTrend = [
  { month: 'Jul', open: 18, closed: 12, overdue: 4 },
  { month: 'Aug', open: 14, closed: 15, overdue: 3 },
  { month: 'Sep', open: 16, closed: 18, overdue: 2 },
  { month: 'Oct', open: 11, closed: 14, overdue: 3 },
  { month: 'Nov', open: 9, closed: 12, overdue: 2 },
  { month: 'Dec', open: 7, closed: 10, overdue: 2 },
];

const auditItems = [
  { id: 'AUD-2025-001', title: 'Annual ADV Part 2A Review', type: 'Regulatory', status: 'Complete', dueDate: 'Dec 31', priority: 'High' },
  { id: 'AUD-2025-002', title: 'Client Suitability Assessment Q4', type: 'Internal', status: 'In Progress', dueDate: 'Jan 15', priority: 'High' },
  { id: 'AUD-2025-003', title: 'Trade Surveillance Review', type: 'FINRA', status: 'In Progress', dueDate: 'Jan 20', priority: 'Medium' },
  { id: 'AUD-2025-004', title: 'Anti-Money Laundering Procedures', type: 'Regulatory', status: 'Overdue', dueDate: 'Dec 20', priority: 'High' },
  { id: 'AUD-2025-005', title: 'Cybersecurity Risk Assessment', type: 'Internal', status: 'Pending', dueDate: 'Feb 1', priority: 'Medium' },
  { id: 'AUD-2025-006', title: 'Fee Disclosure Accuracy Check', type: 'SEC', status: 'Overdue', dueDate: 'Dec 15', priority: 'High' },
];

const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  Complete: { color: 'text-emerald-600 bg-emerald-50', icon: <CheckCircle size={12} /> },
  'In Progress': { color: 'text-blue-600 bg-blue-50', icon: <Clock size={12} /> },
  Pending: { color: 'text-slate-600 bg-slate-100', icon: <Clock size={12} /> },
  Overdue: { color: 'text-red-600 bg-red-50', icon: <AlertTriangle size={12} /> },
};

const priorityColors: Record<string, string> = {
  High: 'bg-red-100 text-red-700',
  Medium: 'bg-amber-100 text-amber-700',
  Low: 'bg-slate-100 text-slate-600',
};

export default function AuditTracking() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Audit & Findings Tracker</h3>
          <p className="text-sm text-slate-500">Active audit items and resolution tracking</p>
        </div>
        <div className="flex items-center gap-3 text-center">
          <div className="bg-slate-50 rounded-lg px-3 py-2">
            <p className="text-lg font-bold text-slate-900">7</p>
            <p className="text-xs text-slate-500">Open</p>
          </div>
          <div className="bg-red-50 rounded-lg px-3 py-2">
            <p className="text-lg font-bold text-red-600">2</p>
            <p className="text-xs text-slate-500">Overdue</p>
          </div>
          <div className="bg-emerald-50 rounded-lg px-3 py-2">
            <p className="text-lg font-bold text-emerald-600">10</p>
            <p className="text-xs text-slate-500">Closed</p>
          </div>
        </div>
      </div>

      {/* Trend chart */}
      <div>
        <h4 className="text-sm font-semibold text-slate-700 mb-3">6-Month Audit Trend</h4>
        <ResponsiveContainer width="100%" height={140}>
          <LineChart data={auditTrend} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            <Line type="monotone" dataKey="open" name="Open" stroke="#f59e0b" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="closed" name="Closed" stroke="#10b981" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="overdue" name="Overdue" stroke="#f87171" strokeWidth={2} dot={false} strokeDasharray="4 2" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Audit items table */}
      <div>
        <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-1.5">
          <FileText size={14} />
          Current Audit Items
        </h4>
        <div className="space-y-2">
          {auditItems.map((item) => {
            const s = statusConfig[item.status];
            return (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all cursor-pointer group"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-slate-400">{item.id}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${priorityColors[item.priority]}`}>{item.priority}</span>
                    <span className="text-xs text-slate-400">{item.type}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-800 truncate group-hover:text-blue-600 transition-colors">{item.title}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-slate-500">Due</p>
                    <p className={`text-xs font-semibold ${item.status === 'Overdue' ? 'text-red-600' : 'text-slate-700'}`}>{item.dueDate}</p>
                  </div>
                  <span className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${s.color}`}>
                    {s.icon}
                    {item.status}
                  </span>
                  <ExternalLink size={13} className="text-slate-300 group-hover:text-slate-500 transition-colors hidden sm:block" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
