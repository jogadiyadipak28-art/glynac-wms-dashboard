'use client';

import {
  ResponsiveContainer, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend,
} from 'recharts';

const teamUtilization = [
  { name: 'Trading Ops', utilization: 87, fill: '#3b82f6' },
  { name: 'Settlements', utilization: 74, fill: '#10b981' },
  { name: 'Client Ops', utilization: 91, fill: '#8b5cf6' },
  { name: 'Risk', utilization: 68, fill: '#f59e0b' },
  { name: 'Compliance', utilization: 82, fill: '#ec4899' },
];

const staffData = [
  { dept: 'Trading', current: 12, capacity: 14 },
  { dept: 'Settlement', current: 8, capacity: 10 },
  { dept: 'Client Ops', current: 15, capacity: 15 },
  { dept: 'Risk', current: 6, capacity: 9 },
  { dept: 'Compliance', current: 9, capacity: 11 },
];

export default function ResourceUtilization() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">Resource Utilization</h3>
        <p className="text-sm text-slate-500">Team capacity and workload distribution</p>
      </div>

      {/* Utilization bars */}
      <div className="space-y-3">
        {teamUtilization.map((team) => (
          <div key={team.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-slate-700 font-medium">{team.name}</span>
              <span className={`text-sm font-bold ${team.utilization >= 90 ? 'text-amber-600' : team.utilization >= 80 ? 'text-blue-600' : 'text-emerald-600'}`}>
                {team.utilization}%
              </span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${team.utilization}%`, backgroundColor: team.fill }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Staff chart */}
      <div>
        <h4 className="text-sm font-semibold text-slate-700 mb-3">Staff vs Capacity</h4>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={staffData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="dept" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar dataKey="capacity" name="Capacity" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
            <Bar dataKey="current" name="Current" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
