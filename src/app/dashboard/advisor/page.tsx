'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import PortfolioSummary from '@/components/dashboard/advisor/PortfolioSummary';
import ClientList from '@/components/dashboard/advisor/ClientList';
import PerformanceInsights from '@/components/dashboard/advisor/PerformanceInsights';

export default function AdvisorPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <DashboardLayout
      currentPath="/dashboard/advisor"
      dashboardTitle="Advisor Dashboard"
      userName="Sarah Chen - Senior Advisor"
      userInitials="SC"
      currentTab={currentTab}
      onNavigate={(path) => router.push(path)}
      onTabChange={setCurrentTab}
      onAIClick={() => console.log('AI clicked')}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Advisor Overview</h2>
          <p className="text-slate-500 mt-1">Manage your client portfolios and track performance</p>
        </div>
        <PortfolioSummary />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <ClientList />
          </div>
          <div>
            <PerformanceInsights />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
