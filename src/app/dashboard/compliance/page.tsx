'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import RegulatoryStatus from '@/components/dashboard/compliance/RegulatoryStatus';
import RiskAssessment from '@/components/dashboard/compliance/RiskAssessment';
import AuditTracking from '@/components/dashboard/compliance/AuditTracking';

export default function CompliancePage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <DashboardLayout
      currentPath="/dashboard/compliance"
      dashboardTitle="Compliance Dashboard"
      userName="Diana Foster - Chief Compliance Officer"
      userInitials="DF"
      currentTab={currentTab}
      onNavigate={(path) => router.push(path)}
      onTabChange={setCurrentTab}
      onAIClick={() => console.log('AI clicked')}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Compliance Overview</h2>
          <p className="text-slate-500 mt-1">Regulatory status, risk assessment and audit tracking</p>
        </div>
        <RegulatoryStatus />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <RiskAssessment />
          <AuditTracking />
        </div>
      </div>
    </DashboardLayout>
  );
}
