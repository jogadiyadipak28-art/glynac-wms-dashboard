'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, Search } from 'lucide-react';

const clients = [
  { id: 1, name: 'Robert Hartwell', aum: 28400000, returns: 15.2, risk: 'Low', status: 'Active', lastContact: '2 days ago', advisor: 'Self', nextReview: 'Jan 15', flag: null },
  { id: 2, name: 'Catherine Meridian', aum: 19800000, returns: 8.7, risk: 'Medium', status: 'Active', lastContact: '1 week ago', advisor: 'Self', nextReview: 'Jan 22', flag: null },
  { id: 3, name: 'Thomas Westfield', aum: 15600000, returns: -3.1, risk: 'High', status: 'At Risk', lastContact: '3 weeks ago', advisor: 'Self', nextReview: 'Overdue', flag: 'review' },
  { id: 4, name: 'Linda Chen', aum: 14300000, returns: 22.4, risk: 'Low', status: 'Active', lastContact: '3 days ago', advisor: 'Self', nextReview: 'Feb 1', flag: null },
  { id: 5, name: 'Samuel Nolan', aum: 12800000, returns: 11.8, risk: 'Medium', status: 'Active', lastContact: '5 days ago', advisor: 'Self', nextReview: 'Jan 28', flag: null },
  { id: 6, name: 'Patricia Ashby', aum: 11200000, returns: -1.4, risk: 'High', status: 'At Risk', lastContact: '1 month ago', advisor: 'Self', nextReview: 'Overdue', flag: 'urgent' },
  { id: 7, name: 'Derek Monroe', aum: 9800000, returns: 6.3, risk: 'Low', status: 'Active', lastContact: '4 days ago', advisor: 'Self', nextReview: 'Feb 8', flag: null },
  { id: 8, name: 'Angela Torres', aum: 8700000, returns: 14.1, risk: 'Medium', status: 'Active', lastContact: '1 day ago', advisor: 'Self', nextReview: 'Jan 31', flag: null },
];

const riskColors: Record<string, string> = {
  Low: 'bg-emerald-100 text-emerald-700',
  Medium: 'bg-amber-100 text-amber-700',
  High: 'bg-red-100 text-red-600',
};

const formatAUM = (v: number) => `$${(v / 1e6).toFixed(1)}M`;

export default function ClientList() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'All' | 'Active' | 'At Risk'>('All');

  const filtered = clients.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || c.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Client Book</h3>
          <p className="text-sm text-slate-500">{clients.length} total clients</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-100 rounded-lg px-3 py-1.5">
            <Search size={14} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search clients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none w-32"
            />
          </div>
          {(['All', 'Active', 'At Risk'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filter === f ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-slate-100">
              <th className="pb-3 pr-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
              <th className="pb-3 pr-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">AUM</th>
              <th className="pb-3 pr-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">YTD Return</th>
              <th className="pb-3 pr-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Risk</th>
              <th className="pb-3 pr-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Next Review</th>
              <th className="pb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((client) => (
              <tr key={client.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{client.name}</p>
                      <p className="text-xs text-slate-400">{client.lastContact}</p>
                    </div>
                    {client.flag === 'urgent' && <AlertTriangle size={14} className="text-red-500 flex-shrink-0" />}
                  </div>
                </td>
                <td className="py-3 pr-4 text-right">
                  <span className="text-sm font-semibold text-slate-900">{formatAUM(client.aum)}</span>
                </td>
                <td className="py-3 pr-4 text-right">
                  <span className={`flex items-center justify-end gap-1 text-sm font-semibold ${client.returns >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                    {client.returns >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {Math.abs(client.returns)}%
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${riskColors[client.risk]}`}>{client.risk}</span>
                </td>
                <td className="py-3 pr-4">
                  <span className={`flex items-center gap-1 text-xs font-medium ${client.nextReview === 'Overdue' ? 'text-red-500' : 'text-slate-600'}`}>
                    <Clock size={11} />
                    {client.nextReview}
                  </span>
                </td>
                <td className="py-3">
                  <span className={`flex items-center gap-1 text-xs font-medium ${client.status === 'Active' ? 'text-emerald-600' : 'text-red-500'}`}>
                    {client.status === 'Active' ? <CheckCircle size={12} /> : <AlertTriangle size={12} />}
                    {client.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
