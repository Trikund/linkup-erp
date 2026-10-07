import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ScanFace, Smartphone, Fingerprint } from 'lucide-react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LoginFormProps {
  organizationType: 'school' | 'college' | 'corporate';
  selectedRole: string;
  accent?: 'blue' | 'violet' | 'navy';
}

export function LoginForm({ organizationType, selectedRole, accent = 'blue' }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/${organizationType}/${selectedRole}`);
    }, 1200);
  };

  const buttonAccent = {
    blue: "bg-linkup-blue hover:bg-blue-700",
    violet: "bg-linkup-violet hover:bg-violet-700",
    navy: "bg-linkup-navy hover:bg-blue-900"
  };

  const checkboxColors = {
    blue: "text-linkup-blue focus:ring-linkup-blue/50",
    violet: "text-linkup-violet focus:ring-linkup-violet/50",
    navy: "text-linkup-navy focus:ring-linkup-navy/50"
  };

  const linkColors = {
    blue: "text-linkup-blue",
    violet: "text-linkup-violet",
    navy: "text-linkup-navy"
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {/* Dynamic Form Fields Based on Role */}
      {selectedRole === 'parent' ? (
        // PARENT LOGIN: Mobile Number + OTP
        <div className="space-y-4">
          <div>
            <Input 
              icon={Smartphone}
              type="tel" 
              placeholder="Registered Mobile Number" 
              required
              disabled={isLoading || otpSent}
            />
          </div>
          {otpSent && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
              <Input 
                icon={Lock}
                type="text" 
                placeholder="Enter 6-digit OTP" 
                maxLength={6}
                required
                disabled={isLoading}
              />
            </motion.div>
          )}
        </div>
      ) : (
        // DEFAULT LOGIN (Student, Teacher, Admin, Employee)
        <div className="space-y-4">
          <div>
            <Input 
              icon={Mail}
              type="text" 
              placeholder={organizationType === 'corporate' ? "Work Email" : "Email or Username"} 
              required
              disabled={isLoading}
            />
          </div>
          <div className="relative">
            <Input 
              icon={Lock}
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              required
              disabled={isLoading}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input 
            type="checkbox" 
            className={`w-4 h-4 rounded border-slate-300 transition-colors ${checkboxColors[accent]}`}
          />
          <span className="text-slate-600 group-hover:text-slate-900 transition-colors">Remember me</span>
        </label>
        
        {selectedRole !== 'parent' && (
          <a href="#" className={`font-medium hover:underline ${linkColors[accent]}`}>
            Forgot password?
          </a>
        )}
      </div>

      {selectedRole === 'parent' && !otpSent ? (
        <Button 
          type="button" 
          fullWidth 
          onClick={() => setOtpSent(true)}
          disabled={isLoading}
          className={`group ${buttonAccent[accent]} border-0 text-white`}
        >
          Send OTP
        </Button>
      ) : (
        <Button 
          type="submit" 
          fullWidth 
          disabled={isLoading}
          className={`group ${buttonAccent[accent]} border-0 text-white`}
        >
          {isLoading ? (
            <span className="animate-pulse">Authenticating...</span>
          ) : (
            <>
              Login
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </Button>
      )}
      
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white/80 backdrop-blur-sm text-slate-500 rounded-full font-medium tracking-wide">
            or continue with
          </span>
        </div>
      </div>

      {selectedRole === 'student' ? (
        // STUDENT ALTERNATIVE: Face ID
        <Button variant="secondary" type="button" fullWidth className="bg-white border-slate-200 shadow-sm hover:border-linkup-blue transition-colors">
          <ScanFace className="w-5 h-5 mr-3 text-linkup-blue" />
          <span className="font-semibold text-slate-700">Face Verification</span>
        </Button>
      ) : selectedRole === 'parent' ? (
        // PARENT ALTERNATIVE: Student ID
        <Button variant="secondary" type="button" fullWidth className="bg-white border-slate-200 shadow-sm hover:border-linkup-blue transition-colors">
          <Fingerprint className="w-5 h-5 mr-3 text-slate-600" />
          <span className="font-semibold text-slate-700">Login with Student ID</span>
        </Button>
      ) : (
        // STANDARD ALTERNATIVES (Google/MS)
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" type="button" className="bg-white border-slate-200 shadow-sm hover:bg-slate-50">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </Button>
          <Button variant="secondary" type="button" className="bg-white border-slate-200 shadow-sm hover:bg-slate-50">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 21 21">
              <path fill="#f25022" d="M1 1h9v9H1z" />
              <path fill="#00a4ef" d="M1 11h9v9H1z" />
              <path fill="#7fba00" d="M11 1h9v9h-9z" />
              <path fill="#ffb900" d="M11 11h9v9h-9z" />
            </svg>
            Microsoft
          </Button>
        </div>
      )}
    </form>
  );
}
