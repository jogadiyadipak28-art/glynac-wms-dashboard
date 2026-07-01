'use client';

import { CheckCircle, AlertTriangle, XCircle, Activity, RefreshCw } from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const systems = [
  { name: 'Trading Platform', status: 'Operational', uptime: 99.98, latency: '12ms', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'Portfolio System', status: 'Operational', uptime: 99.95, latency: '18ms', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'Risk Engine', status: 'Degraded', uptime: 98.42, latency: '145ms', color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Reporting Suite', status: 'Operational', uptime: 99.90, latency: '34ms', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'Client Portal', status: 'Operational', uptime: 99.87, latency: '28ms', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'Data Feeds', status: 'Incident', uptime: 95.12, latency: '—', color: 'text-red-500', bg: 'bg-red-50' },
];

const latencyData = [
  { time: '08:00', api: 14, db: 8, cache: 2 },
  { time: '09:00', api: 18, db: 10, cache: 3 },
  { time: '10:00', api: 22, db: 14, cache: 3 },
  { time: '11:00', api: 45, db: 28, cache: 4 },
  { time: '12:00', api: 28, db: 16, cache: 3 },
  { time: '13:00', api: 19, db: 11, cache: 2 },
  { time: '14:00', api: 16, db: 9, cache: 2 },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === 'Operational') return <CheckCircle size={14} className="text-emerald-600" />;
  if (status === 'Degraded') return <AlertTriangle size={14} className="text-amber-600" />;
  return <XCircle size={14} className="text-red-500" />;
};

export default function SystemHealth() {
  const operational = systems.filter(s => s.status === 'Operational').length;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">System Health</h3>
          <p className="text-sm text-slate-500">{operational}/{systems.length} systems operational</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors">
          <RefreshCw size={13} />
          Refresh
        </button>
      </div>

      {/* System list */}
      <div className="space-y-2">
        {systems.map((sys) => (
          <div key={sys.name} className={`flex items-center justify-between p-3 rounded-lg ${sys.bg} transition-all`}>
            <div className="flex items-center gap-2.5">
              <StatusIcon status={sys.status} />
              <span className="text-sm font-medium text-slate-800">{sys.name}</span>
            </div>
            <div className="flex items-center gap-4 text-right">
              <div className="hidden sm:block">
                <p className="text-xs text-slate-500">Uptime</p>
                <p className="text-xs font-semibold text-slate-800">{sys.uptime}%</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-slate-500">Latency</p>
                <p className="text-xs font-semibold text-slate-800">{sys.latency}</p>
              </div>
              <span className={`text-xs font-semibold ${sys.color}`}>{sys.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Latency chart */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Activity size={14} className="text-slate-500" />
          <h4 className="text-sm font-semibold text-slate-700">Response Time (ms) — Today</h4>
        </div>
        <ResponsiveContainer width="100%" height={130}>
          <AreaChart data={latencyData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <defs>
              <linearGradient id="gradApi" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            <Area type="monotone" dataKey="api" name="API" stroke="#3b82f6" fill="url(#gradApi)" strokeWidth={2} />
            <Area type="monotone" dataKey="db" name="Database" stroke="#10b981" fill="transparent" strokeWidth={1.5} strokeDasharray="4 2" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
