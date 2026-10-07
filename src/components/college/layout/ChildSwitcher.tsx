import React from 'react';
import { Users, ChevronDown } from 'lucide-react';
import { CollegeStudent } from '../../../types/college';

interface ChildSwitcherProps {
  childrenList: CollegeStudent[];
  activeChildId: string;
  onSwitch: (id: string) => void;
}

export function ChildSwitcher({ childrenList, activeChildId, onSwitch }: ChildSwitcherProps) {
  const activeChild = childrenList.find(c => c.id === activeChildId) || childrenList[0];
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 p-4 bg-white border border-[#7c3aed]/20 shadow-md shadow-[#7c3aed]/5 rounded-2xl w-full sm:w-auto hover:border-[#7c3aed]/40 transition-all text-left"
      >
        <div className="w-12 h-12 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed]">
          <Users size={24} />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Viewing Details For</p>
          <p className="text-lg font-black text-slate-800">{activeChild?.name}</p>
          <p className="text-sm font-medium text-slate-500">{activeChild?.program} • Sem {activeChild?.semester}</p>
        </div>
        <ChevronDown size={20} className="text-slate-400 ml-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full sm:w-72 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden z-20">
          {childrenList.map(child => (
            <button
              key={child.id}
              onClick={() => { onSwitch(child.id); setIsOpen(false); }}
              className={`w-full flex items-center gap-3 p-4 text-left transition-colors ${activeChildId === child.id ? 'bg-[#7c3aed]/5' : 'hover:bg-slate-50'}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeChildId === child.id ? 'bg-[#7c3aed] text-white' : 'bg-slate-100 text-slate-500'}`}>
                <Users size={18} />
              </div>
              <div>
                <p className={`text-sm font-bold ${activeChildId === child.id ? 'text-[#7c3aed]' : 'text-slate-700'}`}>{child.name}</p>
                <p className="text-xs text-slate-500">{child.program}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}