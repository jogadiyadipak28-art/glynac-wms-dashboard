'use client';

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { TrendingUp, Award, AlertCircle } from 'lucide-react';

const radarData = [
  { metric: 'Returns', score: 88 },
  { metric: 'Risk Mgmt', score: 74 },
  { metric: 'Client Sat', score: 92 },
  { metric: 'AUM Growth', score: 81 },
  { metric: 'Retention', score: 95 },
  { metric: 'New Clients', score: 67 },
];

const insights = [
  { type: 'success', icon: <Award size={14} />, text: 'Client retention at 95% — top quartile', color: 'text-emerald-600 bg-emerald-50' },
  { type: 'info', icon: <TrendingUp size={14} />, text: 'Avg YTD return 16.2%, outperforming benchmark by 3.1%', color: 'text-blue-600 bg-blue-50' },
  { type: 'warn', icon: <AlertCircle size={14} />, text: '3 clients flagged for portfolio review', color: 'text-amber-600 bg-amber-50' },
  { type: 'warn', icon: <AlertCircle size={14} />, text: 'New client pipeline below Q3 pace', color: 'text-orange-600 bg-orange-50' },
];

export default function PerformanceInsights() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6">
      <div>
        <h3 className="text-base font-semibold text-slate-900">Performance Score</h3>
        <p className="text-xs text-slate-500">Multi-dimensional advisor scorecard</p>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: '#64748b' }} />
          <Radar dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} strokeWidth={2} />
          <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
        </RadarChart>
      </ResponsiveContainer>

      <div>
        <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Insights</h4>
        <div className="space-y-2">
          {insights.map((insight, i) => (
            <div key={i} className={`flex items-start gap-2 p-2.5 rounded-lg ${insight.color}`}>
              <span className="flex-shrink-0 mt-0.5">{insight.icon}</span>
              <p className="text-xs font-medium leading-relaxed">{insight.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
