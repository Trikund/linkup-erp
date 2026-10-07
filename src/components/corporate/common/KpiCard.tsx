import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface KpiCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'navy' | 'blue' | 'cyan' | 'red' | 'green' | 'amber';
}

export function KpiCard({ title, value, icon: Icon, subtitle, trend, color = 'navy' }: KpiCardProps) {
  const colorMap = {
    navy: 'bg-slate-50 text-slate-700 border-slate-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    cyan: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    red: 'bg-red-50 text-red-600 border-red-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100'
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{title}</p>
          <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
          {subtitle && (
            <p className={cn("text-xs font-medium mt-1.5", trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-slate-500')}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={cn("p-2.5 rounded-lg border", colorMap[color])}>
          <Icon size={18} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}