'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  ChevronDown,
  Menu,
  X,
  TrendingUp,
  Shield,
  Briefcase,
  Bot,
  LogOut,
  Search,
} from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPath: string;
  dashboardTitle: string;
  userName: string;
  userInitials: string;
  currentTab?: string;
  onNavigate: (path: string) => void;
  onTabChange?: (tab: string) => void;
  onAIClick?: () => void;
}

const navItems: NavItem[] = [
  { label: 'Executive', path: '/dashboard/executive', icon: <TrendingUp size={18} /> },
  { label: 'Advisor', path: '/dashboard/advisor', icon: <Briefcase size={18} /> },
  { label: 'Operations', path: '/dashboard/operations', icon: <Settings size={18} /> },
  { label: 'Compliance', path: '/dashboard/compliance', icon: <Shield size={18} /> },
];

export default function DashboardLayout({
  children,
  currentPath,
  dashboardTitle,
  userName,
  userInitials,
  onNavigate,
  onAIClick,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:flex lg:flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <TrendingUp size={16} className="text-white" />
            </div>
            <span className="text-white font-bold text-lg">Glynac WMS</span>
          </div>
          <button
            className="lg:hidden text-slate-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 mb-3">
            Dashboards
          </p>
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left
                  ${isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
              >
                {item.icon}
                {item.label} Dashboard
              </button>
            );
          })}

          <div className="pt-4 mt-4 border-t border-slate-700">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 mb-3">
              Tools
            </p>
            <button
              onClick={onAIClick}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Bot size={18} />
              AI Assistant
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <Users size={18} />
              Clients
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <LayoutDashboard size={18} />
              Reports
            </button>
          </div>
        </nav>

        {/* User section */}
        <div className="px-4 py-4 border-t border-slate-700">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {userInitials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white font-medium truncate">{userName.split(' - ')[0]}</p>
              <p className="text-xs text-slate-500 truncate">{userName.split(' - ')[1] || 'User'}</p>
            </div>
            <LogOut size={16} className="cursor-pointer hover:text-white flex-shrink-0" />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top header */}
        <header className="bg-white border-b border-slate-200 px-4 lg:px-6 py-3 flex items-center gap-4 flex-shrink-0">
          <button
            className="lg:hidden text-slate-500 hover:text-slate-900"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>

          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-semibold text-slate-900 truncate">{dashboardTitle}</h1>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 w-64">
            <Search size={16} className="text-slate-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none w-full"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User menu */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 hover:bg-slate-100 rounded-lg px-2 py-1.5 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {userInitials}
              </div>
              <ChevronDown size={16} className="text-slate-500 hidden sm:block" />
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-50 py-1">
                <div className="px-3 py-2 border-b border-slate-100">
                  <p className="text-sm font-medium text-slate-900 truncate">{userName.split(' - ')[0]}</p>
                  <p className="text-xs text-slate-500 truncate">{userName.split(' - ')[1] || ''}</p>
                </div>
                <button className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Profile Settings</button>
                <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50">Sign Out</button>
              </div>
            )}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
