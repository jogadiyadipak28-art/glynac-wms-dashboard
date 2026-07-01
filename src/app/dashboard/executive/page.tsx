'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import KPICards from '@/components/dashboard/executive/KPICards';
import AUMChart from '@/components/dashboard/executive/AUMChart';
import PerformanceOverview from '@/components/dashboard/executive/PerformanceOverview';
import TopClients from '@/components/dashboard/executive/TopClients';

export default function ExecutivePage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <DashboardLayout
      currentPath="/dashboard/executive"
      dashboardTitle="Executive Dashboard"
      userName="James Mitchell - Chief Executive Officer"
      userInitials="JM"
      currentTab={currentTab}
      onNavigate={(path) => router.push(path)}
      onTabChange={setCurrentTab}
      onAIClick={() => console.log('AI clicked')}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Executive Overview</h2>
          <p className="text-slate-500 mt-1">Firm-wide performance metrics and strategic insights</p>
        </div>
        <KPICards />
        <AUMChart />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <PerformanceOverview />
          <TopClients />
        </div>
      </div>
    </DashboardLayout>
  );
}
