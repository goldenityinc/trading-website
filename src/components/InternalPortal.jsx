import React, { useState } from 'react';
import { Kanban, Truck, Settings, MoreVertical, Plus, TrendingUp, Archive, CheckCircle2, Clock, AlertCircle, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternalPortal = () => {
  const [activeTab, setActiveTab] = useState('crm');
  const [toastMessage, setToastMessage] = useState(null);
  const [crmLeads] = useState([
    {
      id: 'INQ-001',
      companyName: 'Global Energy Solutions',
      inquiryDate: '2025-06-01',
      commodityInterest: 'Crude Oil, Natural Gas',
      contactPerson: 'John Martinez',
      email: 'john@globalenergy.com',
      status: 'New Inquiry',
      volume: '10,000 bbls',
    },
    {
      id: 'INQ-002',
      companyName: 'Asian Metals Corp',
      inquiryDate: '2025-05-28',
      commodityInterest: 'Iron Ore, Copper',
      contactPerson: 'Li Chen',
      email: 'li.chen@asianmetals.com',
      status: 'KYC Review',
      volume: '75,000 MT',
    },
    {
      id: 'INQ-003',
      companyName: 'European Industrial Group',
      inquiryDate: '2025-05-25',
      commodityInterest: 'Coal, Minerals',
      contactPerson: 'Hans Mueller',
      email: 'hans@euindustrial.de',
      status: 'Quotation',
      volume: '50,000 MT',
    },
    {
      id: 'INQ-004',
      companyName: 'Pacific Trade Partners',
      inquiryDate: '2025-05-20',
      commodityInterest: 'Natural Gas',
      contactPerson: 'Sarah Wong',
      email: 'sarah@pacifictrade.sg',
      status: 'KYC Review',
      volume: '5,000 MMBtu',
    },
    {
      id: 'INQ-005',
      companyName: 'Middle East Resources',
      inquiryDate: '2025-05-15',
      commodityInterest: 'Crude Oil',
      contactPerson: 'Ahmed Al-Rashid',
      email: 'ahmed@meresources.ae',
      status: 'Deal Closed',
      volume: '20,000 bbls',
    },
    {
      id: 'INQ-006',
      companyName: 'Africa Commodities Ltd',
      inquiryDate: '2025-06-02',
      commodityInterest: 'Minerals, Copper',
      contactPerson: 'Amara Okafor',
      email: 'amara@africacommodities.ng',
      status: 'New Inquiry',
      volume: '30,000 MT',
    },
  ]);

  const [erpShipments] = useState([
    {
      shipmentId: 'SHIP-2025-001',
      client: 'Acme Corp',
      commodity: 'Crude Oil (Brent)',
      supplier: 'Saudi Aramco',
      quantity: '5,000 bbls',
      vesselName: 'MT Arabian Breeze',
      vesselStatus: 'In Transit',
      departure: '2025-05-25',
      eta: '2025-06-15',
      documentStatus: 'Complete',
      lc_status: 'Confirmed',
    },
    {
      shipmentId: 'SHIP-2025-002',
      client: 'Asian Metals Corp',
      commodity: 'Iron Ore (62% Fe)',
      supplier: 'Vale Brazil',
      quantity: '50,000 MT',
      vesselName: 'Bulk Carrier Fortuna',
      vesselStatus: 'At Port - Loading',
      departure: '2025-06-05',
      eta: '2025-07-20',
      documentStatus: 'In Progress',
      lc_status: 'Pending',
    },
    {
      shipmentId: 'SHIP-2025-003',
      client: 'Global Energy Solutions',
      commodity: 'Natural Gas (LNG)',
      supplier: 'Qatar Petroleum',
      quantity: '1,000 MMBtu',
      vesselName: 'LNG Carrier Doha Explorer',
      vesselStatus: 'At Loading Terminal',
      departure: '2025-06-08',
      eta: '2025-06-28',
      documentStatus: 'Complete',
      lc_status: 'Confirmed',
    },
    {
      shipmentId: 'SHIP-2025-004',
      client: 'European Industrial Group',
      commodity: 'Coal (Thermal)',
      supplier: 'Indonesian Mining',
      quantity: '100,000 MT',
      vesselName: 'Bulk Carrier Supreme',
      vesselStatus: 'Scheduled',
      departure: '2025-07-01',
      eta: '2025-08-10',
      documentStatus: 'Pending',
      lc_status: 'Review',
    },
    {
      shipmentId: 'SHIP-2025-005',
      client: 'Pacific Trade Partners',
      commodity: 'Copper (Grade A)',
      supplier: 'Peru Copper Mining',
      quantity: '250 MT',
      vesselName: 'Container Ship Pacific',
      vesselStatus: 'In Transit',
      departure: '2025-06-01',
      eta: '2025-06-22',
      documentStatus: 'Complete',
      lc_status: 'Confirmed',
    },
    {
      shipmentId: 'SHIP-2025-006',
      client: 'Middle East Resources',
      commodity: 'Crude Oil (WTI)',
      supplier: 'US Energy Corp',
      quantity: '20,000 bbls',
      vesselName: 'MT Gulf Stream',
      vesselStatus: 'Delivered',
      departure: '2025-05-10',
      eta: '2025-05-30',
      documentStatus: 'Complete',
      lc_status: 'Settled',
    },
  ]);

  const kanbanColumns = [
    {
      id: 'new-inquiry',
      title: 'New Inquiry',
      color: 'from-blue-500 to-blue-600',
      icon: Plus,
    },
    {
      id: 'kyc-review',
      title: 'KYC/KYB Process',
      color: 'from-yellow-500 to-orange-600',
      icon: AlertCircle,
    },
    {
      id: 'quotation',
      title: 'Quotation Sent',
      color: 'from-purple-500 to-purple-600',
      icon: Clock,
    },
    {
      id: 'deal-closed',
      title: 'Deal Closed',
      color: 'from-green-500 to-green-600',
      icon: CheckCircle2,
    },
  ];

  const getStatusToColumnId = (status) => {
    const statusMap = {
      'New Inquiry': 'new-inquiry',
      'KYC Review': 'kyc-review',
      'Quotation': 'quotation',
      'Deal Closed': 'deal-closed',
    };
    return statusMap[status];
  };

  const handleApproveDocs = (shipmentId) => {
    setToastMessage(`✓ Documents successfully approved for ${shipmentId}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const getVesselStatusColor = (status) => {
    switch (status) {
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'At Port - Loading':
        return 'bg-yellow-100 text-yellow-800';
      case 'At Loading Terminal':
        return 'bg-orange-100 text-orange-800';
      case 'Scheduled':
        return 'bg-gray-100 text-gray-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDocStatusColor = (status) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLCStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Review':
        return 'bg-orange-100 text-orange-800';
      case 'Settled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/portals" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm">
              <ChevronLeft className="w-4 h-4" />
              Back to Portal Launcher
            </Link>
            <div className="flex gap-2">
              <Link to="/customer-portal" className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-3 py-1 rounded text-sm transition-colors">
                Customer Portal
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Meridian Internal Portal</h1>
                <p className="text-sm text-gray-600">CRM & ERP Management Dashboard</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Backoffice Operations & Sales Management
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('crm')}
              className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'crm'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Kanban className="w-5 h-5" />
              CRM (Sales)
            </button>
            <button
              onClick={() => setActiveTab('erp')}
              className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'erp'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Truck className="w-5 h-5" />
              ERP (Logistics)
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* CRM Kanban Board */}
        {activeTab === 'crm' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Sales Pipeline - Inquiries</h2>
              <div className="text-sm text-gray-600">
                Total Leads: <span className="font-semibold text-gray-900">{crmLeads.length}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {kanbanColumns.map((column) => {
                const ColumnIcon = column.icon;
                const leadsInColumn = crmLeads.filter(
                  (lead) => getStatusToColumnId(lead.status) === column.id
                );

                return (
                  <div key={column.id} className="bg-gray-50 rounded-lg border border-gray-200 p-4 min-h-96">
                    <div className={`flex items-center gap-2 mb-4 pb-3 border-b-2 border-gray-200`}>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${column.color}`}></div>
                      <h3 className="font-semibold text-gray-900">{column.title}</h3>
                      <span className="ml-auto bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full">
                        {leadsInColumn.length}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {leadsInColumn.map((lead) => (
                        <div
                          key={lead.id}
                          className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer hover:scale-105 transform origin-top"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-sm text-gray-900">{lead.companyName}</h4>
                            <MoreVertical className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{lead.commodityInterest}</p>
                          <div className="space-y-1 text-xs text-gray-500">
                            <p>
                              <span className="font-medium text-gray-700">Contact:</span> {lead.contactPerson}
                            </p>
                            <p>
                              <span className="font-medium text-gray-700">Volume:</span> {lead.volume}
                            </p>
                            <p>
                              <span className="font-medium text-gray-700">Date:</span> {lead.inquiryDate}
                            </p>
                          </div>
                        </div>
                      ))}
                      {leadsInColumn.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                          <ColumnIcon className="w-8 h-8 mb-2" />
                          <p className="text-xs text-center">No leads in this stage</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ERP Logistics Table */}
        {activeTab === 'erp' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Active Shipments</h2>
              <div className="text-sm text-gray-600">
                Total Shipments: <span className="font-semibold text-gray-900">{erpShipments.length}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Shipment ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Commodity
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Supplier
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Vessel
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Vessel Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Doc Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        LC Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        ETA
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {erpShipments.map((shipment, idx) => (
                      <tr key={shipment.shipmentId} className="border-b border-gray-200 hover:bg-blue-50/80 hover:shadow-sm transition-all duration-200 cursor-pointer">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-mono text-blue-600 font-semibold">
                          {shipment.shipmentId}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{shipment.client}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{shipment.commodity}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{shipment.supplier}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-medium">
                          {shipment.vesselName}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getVesselStatusColor(shipment.vesselStatus)}`}>
                            {shipment.vesselStatus}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getDocStatusColor(shipment.documentStatus)}`}>
                            {shipment.documentStatus}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getLCStatusColor(shipment.lc_status)}`}>
                            {shipment.lc_status}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{shipment.eta}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <button
                            onClick={() => handleApproveDocs(shipment.shipmentId)}
                            className="text-white bg-green-600 hover:bg-green-700 active:scale-95 font-medium px-3 py-1 rounded-lg flex items-center gap-1 transition-all hover:shadow-md"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Approve Docs
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 flex items-center gap-2">
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default InternalPortal;
