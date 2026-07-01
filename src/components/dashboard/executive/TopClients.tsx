'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

const clients = [
  { id: 1, name: 'Hartwell Family Office', aum: 284200000, change: 15.2, advisor: 'Sarah Chen', tier: 'Platinum' },
  { id: 2, name: 'Meridian Capital Partners', aum: 198400000, change: 8.7, advisor: 'James Rivera', tier: 'Platinum' },
  { id: 3, name: 'Westfield Endowment', aum: 156700000, change: -3.1, advisor: 'Sarah Chen', tier: 'Gold' },
  { id: 4, name: 'Chen Enterprises Trust', aum: 143800000, change: 22.4, advisor: 'Michael Park', tier: 'Gold' },
  { id: 5, name: 'Nolan Foundation', aum: 128900000, change: 11.8, advisor: 'Lisa Thompson', tier: 'Gold' },
];

const formatAUM = (value: number) => {
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
  return `$${value.toLocaleString()}`;
};

const tierColors: Record<string, string> = {
  Platinum: 'bg-violet-100 text-violet-700',
  Gold: 'bg-amber-100 text-amber-700',
  Silver: 'bg-slate-100 text-slate-600',
};

export default function TopClients() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Top Clients by AUM</h3>
        <p className="text-sm text-slate-500">Highest value client relationships</p>
      </div>
      <div className="space-y-3">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                {client.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">{client.name}</p>
                <p className="text-xs text-slate-500 truncate">{client.advisor}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 ml-2">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${tierColors[client.tier]}`}>
                {client.tier}
              </span>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">{formatAUM(client.aum)}</p>
                <span
                  className={`flex items-center gap-0.5 text-xs font-medium justify-end ${
                    client.change >= 0 ? 'text-emerald-600' : 'text-red-500'
                  }`}
                >
                  {client.change >= 0 ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                  {Math.abs(client.change)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
