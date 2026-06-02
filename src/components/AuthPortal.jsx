import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogIn, UserPlus, BriefcaseBusiness, UserRound, ChevronLeft } from 'lucide-react';

const getSearchParams = (search) => new URLSearchParams(search || '');

const AuthPortal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useMemo(() => getSearchParams(location.search), [location.search]);

  const defaultMode = params.get('mode') === 'register' ? 'register' : 'login';
  const defaultRole = params.get('role') === 'employee' ? 'employee' : 'customer';

  const [mode, setMode] = useState(defaultMode);
  const [loginRole, setLoginRole] = useState(defaultRole);
  const [loginForm, setLoginForm] = useState({
    email: params.get('email') || '',
    password: '',
  });
  const [registerForm, setRegisterForm] = useState({
    companyName: '',
    email: '',
    contactPerson: '',
    entityType: 'KYC',
  });

  const onLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const onRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();

    if (!loginForm.email || !loginForm.password) {
      alert('Please complete email and password before login.');
      return;
    }

    if (loginRole === 'employee') {
      sessionStorage.setItem('meridianDemoRole', 'employee');
      sessionStorage.setItem('meridianDemoEmail', loginForm.email);
      navigate('/internal-portal');
      return;
    }

    sessionStorage.setItem('meridianDemoRole', 'customer');
    sessionStorage.setItem('meridianDemoEmail', loginForm.email);
    navigate('/customer-portal');
  };

  const onSubmitRegister = (event) => {
    event.preventDefault();

    if (!registerForm.companyName || !registerForm.email || !registerForm.contactPerson) {
      alert('Please complete all registration fields.');
      return;
    }

    navigate('/kyc-form', {
      state: {
        companyName: registerForm.companyName,
        email: registerForm.email,
        contactPerson: registerForm.contactPerson,
        entityType: registerForm.entityType,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/portals" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-4 h-4" />
          Back to Portal Launcher
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold leading-tight">Welcome to Meridian Access</h1>
            <p className="text-slate-300 leading-relaxed max-w-lg">
              Login as a customer to access the trading dashboard. New customer registrations will continue to the KYC/KYB form before onboarding is completed.
            </p>
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 text-sm text-slate-300">
              <p className="font-semibold text-white mb-2">Flow overview</p>
              <p>Customer register -> KYC/KYB form -> reviewed by employee in CRM.</p>
              <p className="mt-1">Customer login -> Customer Portal.</p>
              <p className="mt-1">Karyawan login -> Internal Portal (CRM + ERP).</p>
            </div>
          </div>

          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-2xl">
            <div className="flex gap-2 mb-6 bg-slate-900/70 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  mode === 'login' ? 'bg-amber-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <LogIn className="w-4 h-4 inline mr-2" />
                Login
              </button>
              <button
                type="button"
                onClick={() => setMode('register')}
                className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  mode === 'register' ? 'bg-amber-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <UserPlus className="w-4 h-4 inline mr-2" />
                Register
              </button>
            </div>

            {mode === 'login' && (
              <form onSubmit={onSubmitLogin} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-2">Login as</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setLoginRole('customer')}
                      className={`rounded-lg px-3 py-2 text-sm border transition-colors ${
                        loginRole === 'customer'
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'border-slate-600 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <UserRound className="w-4 h-4 inline mr-1" />
                      Customer
                    </button>
                    <button
                      type="button"
                      onClick={() => setLoginRole('employee')}
                      className={`rounded-lg px-3 py-2 text-sm border transition-colors ${
                        loginRole === 'employee'
                          ? 'bg-emerald-600 border-emerald-500 text-white'
                          : 'border-slate-600 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <BriefcaseBusiness className="w-4 h-4 inline mr-1" />
                      Karyawan
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-slate-300 mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={loginForm.email}
                    onChange={onLoginChange}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:border-amber-500 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm text-slate-300 mb-2">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={loginForm.password}
                    onChange={onLoginChange}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:border-amber-500 focus:outline-none"
                    placeholder="********"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 transition-colors"
                >
                  Continue Login
                </button>
              </form>
            )}

            {mode === 'register' && (
              <form onSubmit={onSubmitRegister} className="space-y-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm text-slate-300 mb-2">Company Name</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={registerForm.companyName}
                    onChange={onRegisterChange}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:border-amber-500 focus:outline-none"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm text-slate-300 mb-2">Contact Person</label>
                  <input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    value={registerForm.contactPerson}
                    onChange={onRegisterChange}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:border-amber-500 focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="registerEmail" className="block text-sm text-slate-300 mb-2">Email</label>
                  <input
                    id="registerEmail"
                    name="email"
                    type="email"
                    value={registerForm.email}
                    onChange={onRegisterChange}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:border-amber-500 focus:outline-none"
                    placeholder="onboarding@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="entityType" className="block text-sm text-slate-300 mb-2">Verification Flow</label>
                  <select
                    id="entityType"
                    name="entityType"
                    value={registerForm.entityType}
                    onChange={onRegisterChange}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="KYC">KYC (Individual)</option>
                    <option value="KYB">KYB (Business)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 transition-colors"
                >
                  Continue to KYC/KYB Form
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPortal;
