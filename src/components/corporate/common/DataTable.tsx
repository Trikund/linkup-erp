import React from 'react';
import { Search } from 'lucide-react';

interface DataTableProps {
  columns: string[];
  children: React.ReactNode;
  searchPlaceholder?: string;
}

export function DataTable({ columns, children, searchPlaceholder = "Search..." }: DataTableProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <input 
            type="text" 
            placeholder={searchPlaceholder}
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:bg-white focus:border-linkup-navy focus:ring-1 focus:ring-linkup-navy outline-none transition-all"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              {columns.map((col, i) => (
                <th key={i} className="px-5 py-3 text-xs font-semibold text-slate-600 tracking-wide">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}