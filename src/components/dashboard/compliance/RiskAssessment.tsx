'use client';

import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis,
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
} from 'recharts';
import { Shield, AlertTriangle } from 'lucide-react';

const riskMatrix = [
  { name: 'Market Risk', likelihood: 7, impact: 8, size: 400, category: 'Financial' },
  { name: 'Operational Risk', likelihood: 4, impact: 6, size: 250, category: 'Operations' },
  { name: 'Regulatory Risk', likelihood: 3, impact: 9, size: 350, category: 'Compliance' },
  { name: 'Cyber Risk', likelihood: 5, impact: 9, size: 400, category: 'Technology' },
  { name: 'Conduct Risk', likelihood: 2, impact: 7, size: 200, category: 'People' },
  { name: 'Concentration Risk', likelihood: 6, impact: 7, size: 300, category: 'Financial' },
  { name: 'Liquidity Risk', likelihood: 3, impact: 8, size: 280, category: 'Financial' },
];

const radarData = [
  { category: 'Market', score: 72 },
  { category: 'Credit', score: 85 },
  { category: 'Liquidity', score: 78 },
  { category: 'Operational', score: 81 },
  { category: 'Compliance', score: 91 },
  { category: 'Cyber', score: 68 },
];

const topRisks = [
  { name: 'Cyber Risk Exposure', level: 'High', owner: 'IT Security', due: 'Jan 31', color: 'bg-red-100 text-red-700 border-red-200' },
  { name: 'Market Volatility Impact', level: 'High', owner: 'Risk Team', due: 'Ongoing', color: 'bg-red-100 text-red-700 border-red-200' },
  { name: 'Regulatory Compliance Gap', level: 'Medium', owner: 'Compliance', due: 'Feb 15', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  { name: 'Concentration in Tech Sector', level: 'Medium', owner: 'Portfolio Mgmt', due: 'Feb 28', color: 'bg-amber-100 text-amber-700 border-amber-200' },
];

export default function RiskAssessment() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Shield size={18} className="text-violet-600" />
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Risk Assessment</h3>
          <p className="text-sm text-slate-500">Firm-wide risk exposure matrix</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Risk matrix scatter */}
        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-3">Risk Matrix (Likelihood vs Impact)</h4>
          <ResponsiveContainer width="100%" height={200}>
            <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: -10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" dataKey="likelihood" name="Likelihood" domain={[0, 10]} label={{ value: 'Likelihood', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#94a3b8' }} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <YAxis type="number" dataKey="impact" name="Impact" domain={[0, 10]} label={{ value: 'Impact', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#94a3b8' }} tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <ZAxis dataKey="size" range={[60, 300]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const d = payload[0].payload;
                  return (
                    <div className="bg-white border border-slate-200 rounded-lg p-2 shadow text-xs">
                      <p className="font-semibold text-slate-800">{d.name}</p>
                      <p className="text-slate-500">Likelihood: {d.likelihood}/10</p>
                      <p className="text-slate-500">Impact: {d.impact}/10</p>
                    </div>
                  );
                }
                return null;
              }} />
              <Scatter data={riskMatrix} fill="#8b5cf6" fillOpacity={0.7} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Risk radar */}
        <div>
          <h4 className="text-sm font-semibold text-slate-700 mb-3">Risk Category Scores</h4>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="category" tick={{ fontSize: 10, fill: '#64748b' }} />
              <Radar dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} strokeWidth={2} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top risks */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle size={14} className="text-amber-500" />
          <h4 className="text-sm font-semibold text-slate-700">Top Risk Items</h4>
        </div>
        <div className="space-y-2">
          {topRisks.map((risk) => (
            <div key={risk.name} className={`flex items-center justify-between p-3 rounded-lg border ${risk.color}`}>
              <div>
                <p className="text-sm font-medium">{risk.name}</p>
                <p className="text-xs opacity-80 mt-0.5">Owner: {risk.owner}</p>
              </div>
              <div className="text-right flex-shrink-0 ml-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/60">{risk.level}</span>
                <p className="text-xs opacity-70 mt-1">Due: {risk.due}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
