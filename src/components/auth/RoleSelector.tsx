import React from 'react';
import { cn } from '../../lib/utils';
import { LucideIcon } from 'lucide-react';

export interface Role {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface RoleSelectorProps {
  roles: Role[];
  selectedRole: string;
  onSelect: (roleId: string) => void;
  accent?: 'blue' | 'violet' | 'navy';
}

export function RoleSelector({ roles, selectedRole, onSelect, accent = 'blue' }: RoleSelectorProps) {
  
  const accentColors: Record<string, string> = {
    blue: "bg-linkup-blue text-white shadow-md shadow-linkup-blue/30 border-transparent",
    violet: "bg-[#7c3aed] text-white shadow-md shadow-purple-500/30 border-transparent",
    navy: "bg-linkup-navy text-white shadow-md shadow-linkup-navy/30 border-transparent"
  };

  const textHoverColors: Record<string, string> = {
    blue: "hover:text-linkup-blue hover:border-linkup-blue/30",
    violet: "hover:text-[#7c3aed] hover:border-[#7c3aed]/30",
    navy: "hover:text-linkup-navy hover:border-linkup-navy/30"
  };

  return (
    <div className="flex gap-2 mb-8 justify-between">
      {roles.map((role) => {
        const isSelected = selectedRole === role.id;
        
        return (
          <button
            key={role.id}
            type="button"
            onClick={() => onSelect(role.id)}
            className={cn(
              "flex-1 flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl text-xs font-semibold transition-all duration-200 border",
              isSelected 
                ? accentColors[accent] 
                : cn("bg-white border-slate-200 text-slate-500 shadow-sm", textHoverColors[accent])
            )}
          >
            <role.icon size={18} strokeWidth={isSelected ? 2.5 : 2} />
            {role.label}
          </button>
        );
      })}
    </div>
  );
}
