import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import { LanguageProvider } from '@/lib/i18n';

import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import About from './pages/about';
import Commodities from './pages/Commodities';
import Capabilities from './pages/Capabilities';
import Markets from './pages/Markets';
import Compliance from './pages/Compliance';
import Insights from './pages/Insights';
import Investor from './pages/Investor';
import Contact from './pages/Contact';
import CustomerPortal from './components/CustomerPortal';
import InternalPortal from './components/InternalPortal';
import PortalLauncher from './components/PortalLauncher';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-navy">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border border-copper flex items-center justify-center">
            <div className="w-3 h-3 bg-copper animate-pulse" />
          </div>
          <div className="w-6 h-6 border-2 border-steel/20 border-t-copper rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/commodities" element={<Commodities />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      {/* Demo Portals */}
      <Route path="/portals" element={<PortalLauncher />} />
      <Route path="/customer-portal" element={<CustomerPortal />} />
      <Route path="/internal-portal" element={<InternalPortal />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <LanguageProvider>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </LanguageProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App