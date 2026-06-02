import React, { useState } from 'react';
import { TrendingUp, Plus, AlertCircle, Package, Calendar, MapPin, CheckCircle2, Clock, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerPortal = () => {
  const [showNewOrderModal, setShowNewOrderModal] = useState(false);
  const [formData, setFormData] = useState({
    commodity: 'Crude Oil',
    volume: '',
    destination: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitInquiry = () => {
    if (!formData.volume || !formData.destination) {
      alert('Please fill in all fields!');
      return;
    }
    alert(`Inquiry successfully submitted to CRM!\n\nCommodity: ${formData.commodity}\nVolume: ${formData.volume}\nDestination: ${formData.destination}`);
    setShowNewOrderModal(false);
    setFormData({ commodity: 'Crude Oil', volume: '', destination: '' });
  };

  const handleCloseModal = () => {
    setShowNewOrderModal(false);
    setFormData({ commodity: 'Crude Oil', volume: '', destination: '' });
  };
  
  const portfolio = {
    clientName: 'Acme Corp',
    totalVolume: '$12.5M',
    kycStatus: 'Verified',
    allocation: {
      crude_oil: 60,
      minerals: 40,
    },
    activeOrders: [
      {
        id: 'ORD-2025-001',
        commodity: 'Crude Oil (Brent)',
        volume: '5,000 bbls',
        destination: 'Rotterdam, NL',
        eta: '2025-06-15',
        status: 'In Transit',
        price: '$82.50/bbl',
      },
      {
        id: 'ORD-2025-002',
        commodity: 'Iron Ore (62% Fe)',
        volume: '50,000 MT',
        destination: 'Shanghai, CN',
        eta: '2025-07-20',
        status: 'Pending LC',
        price: '$145/MT',
      },
      {
        id: 'ORD-2025-003',
        commodity: 'Natural Gas',
        volume: '1,000 MMBtu',
        destination: 'Singapore, SG',
        eta: '2025-06-08',
        status: 'Confirmed',
        price: '$8.25/MMBtu',
      },
      {
        id: 'ORD-2025-004',
        commodity: 'Copper (Grade A)',
        volume: '250 MT',
        destination: 'London, UK',
        eta: '2025-06-22',
        status: 'Processing Docs',
        price: '$9,800/MT',
      },
      {
        id: 'ORD-2025-005',
        commodity: 'Coal (Thermal)',
        volume: '100,000 MT',
        destination: 'Mumbai, IN',
        eta: '2025-08-10',
        status: 'Quote Sent',
        price: '$125/MT',
      },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending LC':
        return 'bg-yellow-100 text-yellow-800';
      case 'Processing Docs':
        return 'bg-orange-100 text-orange-800';
      case 'Quote Sent':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'In Transit':
        return <TrendingUp className="w-4 h-4" />;
      case 'Confirmed':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'Pending LC':
        return <Clock className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/portals" className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors text-sm">
              <ChevronLeft className="w-4 h-4" />
              Back to Portal Launcher
            </Link>
            <div className="flex gap-2">
              <Link to="/internal-portal" className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded text-sm transition-colors">
                Internal Portal
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Package className="w-8 h-8 text-amber-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">{portfolio.clientName}</h1>
                <p className="text-sm text-slate-400">Commodity Trading Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-green-900/30 px-3 py-2 rounded-lg border border-green-700/50">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-300">KYC {portfolio.kycStatus}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Total Volume Card */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border border-slate-600 p-6 hover:border-amber-500/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-slate-400 text-sm mb-1">Total Active Contracts</p>
                <h2 className="text-4xl font-bold text-white">{portfolio.totalVolume}</h2>
              </div>
              <TrendingUp className="w-10 h-10 text-amber-500" />
            </div>
            <div className="text-xs text-slate-500">
              Based on current market rates as of today
            </div>
          </div>

          {/* Allocation Chart */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border border-slate-600 p-6">
            <p className="text-slate-400 text-sm mb-4">Portfolio Allocation</p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">Crude Oil</span>
                  <span className="text-amber-400">{portfolio.allocation.crude_oil}%</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full"
                    style={{ width: `${portfolio.allocation.crude_oil}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white font-medium">Minerals & Metals</span>
                  <span className="text-blue-400">{portfolio.allocation.minerals}%</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                    style={{ width: `${portfolio.allocation.minerals}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setShowNewOrderModal(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-600/40 active:scale-95"
          >
            <Plus className="w-5 h-5" />
            Create New Order / Inquiry
          </button>
        </div>

        {/* Active Orders Table */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border border-slate-600 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-600 bg-slate-800/50">
            <h3 className="text-lg font-semibold text-white">Active Orders</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-800/80 border-b border-slate-600">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Commodity</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Volume</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Destination</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">ETA</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.activeOrders.map((order, idx) => (
                  <tr key={order.id} className={`border-b border-slate-600 hover:bg-slate-700/50 transition-colors ${idx % 2 === 0 ? 'bg-slate-800/30' : 'bg-slate-700/20'}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-amber-400">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{order.commodity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{order.volume}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300 flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      {order.destination}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300 flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      {order.eta}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {order.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-400">{order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* New Order Modal */}
        {showNewOrderModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600 p-8 max-w-md w-full mx-4 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Create New Inquiry</h2>
              
              <div className="space-y-5 mb-8">
                {/* Commodity Select */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Commodity</label>
                  <select
                    name="commodity"
                    value={formData.commodity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                  >
                    <option>Crude Oil</option>
                    <option>Natural Gas</option>
                    <option>Iron Ore</option>
                    <option>Coal</option>
                    <option>Copper</option>
                    <option>Minerals</option>
                  </select>
                </div>

                {/* Volume Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Volume</label>
                  <input
                    type="text"
                    name="volume"
                    placeholder="e.g., 5000 bbls, 50000 MT"
                    value={formData.volume}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                  />
                </div>

                {/* Destination Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Destination</label>
                  <input
                    type="text"
                    name="destination"
                    placeholder="e.g., Rotterdam, NL"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitInquiry}
                  className="flex-1 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white font-semibold py-2 px-4 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-600/40 active:scale-95"
                >
                  Submit Inquiry
                </button>
              </div>

              <p className="text-xs text-slate-400 text-center mt-4">
                Your inquiry will be processed by our CRM team immediately.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerPortal;
