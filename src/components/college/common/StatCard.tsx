import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'blue' | 'violet' | 'cyan' | 'red' | 'green' | 'amber';
}

export function StatCard({ title, value, icon: Icon, subtitle, trend, color = 'blue' }: StatCardProps) {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    violet: 'bg-violet-50 text-violet-600 border-violet-100',
    cyan: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    red: 'bg-red-50 text-red-600 border-red-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100'
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <h3 className="text-2xl font-black text-slate-800">{value}</h3>
          {subtitle && (
            <p className={cn("text-xs font-medium mt-1", trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-slate-400')}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={cn("p-3 rounded-xl border", colorMap[color])}>
          <Icon size={20} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}