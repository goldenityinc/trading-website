import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Cog, TrendingUp } from 'lucide-react';

const PortalLauncher = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <div className="bg-slate-800/50 border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <TrendingUp className="w-6 h-6 text-amber-500" />
            <span className="font-bold text-lg">Meridian</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Meridian Trading Platform Demo</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore our commodity trading solution with two powerful portals: one for clients and one for internal operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Customer Portal Card */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-600 p-8 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Customer Portal</h2>
                  <p className="text-slate-400 text-sm">Client Dashboard</p>
                </div>
              </div>
            </div>

            <p className="text-slate-300 mb-6">
              A professional dashboard for commodity trading clients to view their active contracts, monitor shipments, and place new orders. Features include:
            </p>

            <ul className="space-y-2 mb-8 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Portfolio overview with KYC status
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Active orders tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Portfolio allocation visualization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Order management interface
              </li>
            </ul>

            <Link
              to="/customer-portal"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors group"
            >
              Launch Portal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Internal Portal Card */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-600 p-8 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 group">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Cog className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Internal Portal</h2>
                  <p className="text-slate-400 text-sm">Backoffice Management</p>
                </div>
              </div>
            </div>

            <p className="text-slate-300 mb-6">
              A comprehensive backoffice solution combining CRM and ERP for sales and operations teams. Features include:
            </p>

            <ul className="space-y-2 mb-8 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                CRM Kanban board for sales pipeline
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Lead and inquiry management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                ERP logistics tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                Shipment and document management
              </li>
            </ul>

            <Link
              to="/internal-portal"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors group"
            >
              Launch Portal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-slate-700/30 border border-slate-600 rounded-xl p-8">
          <h3 className="text-lg font-semibold mb-4">Demo Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-2">Mock Data Included</h4>
              <p>Realistic commodity trading data including orders, shipments, and leads to demonstrate the platform's capabilities.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Dark & Light Themes</h4>
              <p>Customer Portal features a professional dark theme for modern appeal, while Internal Portal uses light mode for data clarity.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Enterprise Grade</h4>
              <p>Built with enterprise UX patterns, real-time data visualization, and professional status indicators for business operations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-sm">
          <p>Meridian Trading Platform © 2025 - Demo Portal Demo</p>
        </div>
      </div>
    </div>
  );
};

export default PortalLauncher;
