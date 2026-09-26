import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, User, KeyRound, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import BrandLogo from '../../assets/BrandLogo.jsx';
import { useApp } from '../../context/AppContext.jsx';

export default function AdminLoginPage() {
  const { adminLogin, isAdminLoggedIn } = useApp();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // If already logged in, redirect directly to dashboard
  React.useEffect(() => {
    if (isAdminLoggedIn) {
      navigate('/admin');
    }
  }, [isAdminLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    const success = adminLogin(username.trim(), password);
    if (success) {
      navigate('/admin');
    } else {
      setErrorMsg('Invalid Username or Password. Use admin / admin123 or check demo credentials.');
    }
  };

  const handleQuickDemoFill = () => {
    setUsername('admin');
    setPassword('admin123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative px-4">
      {/* Back to store link */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Store
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <div className="flex justify-center">
          <BrandLogo invert={true} size="large" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30">
          <Lock className="w-3.5 h-3.5 text-sky-400" />
          <span>RO POINT CONTROL CENTER</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Admin Portal Login
        </h2>
        <p className="text-xs text-slate-400">
          Authorized store management for Raju & Ajahar
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-5">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Username / Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="admin or ropoint"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none"
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              Sign In to Admin Panel
            </button>
          </form>

          {/* Quick Demo Login Preset Helper */}
          <div className="pt-4 border-t border-slate-100">
            <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sky-900 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> Default Demo Credentials:
                </span>
                <button
                  type="button"
                  onClick={handleQuickDemoFill}
                  className="text-[10px] font-bold text-sky-700 hover:underline uppercase bg-white px-2 py-0.5 rounded shadow-xs"
                >
                  Auto Fill
                </button>
              </div>
              <p className="text-[11px] font-mono text-slate-700">
                User: <strong>admin</strong> | Pass: <strong>admin123</strong>
              </p>
              <p className="text-[10px] text-slate-500">
                (Also accepts Raju's phone: <strong>9660063962</strong> as password)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
