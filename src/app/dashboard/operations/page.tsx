'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import ProcessMetrics from '@/components/dashboard/operations/ProcessMetrics';
import ResourceUtilization from '@/components/dashboard/operations/ResourceUtilization';
import SystemHealth from '@/components/dashboard/operations/SystemHealth';

export default function OperationsPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <DashboardLayout
      currentPath="/dashboard/operations"
      dashboardTitle="Operations Dashboard"
      userName="Marcus Williams - Head of Operations"
      userInitials="MW"
      currentTab={currentTab}
      onNavigate={(path) => router.push(path)}
      onTabChange={setCurrentTab}
      onAIClick={() => console.log('AI clicked')}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Operations Overview</h2>
          <p className="text-slate-500 mt-1">Monitor processes, resources and system health</p>
        </div>
        <ProcessMetrics />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ResourceUtilization />
          <SystemHealth />
        </div>
      </div>
    </DashboardLayout>
  );
}
