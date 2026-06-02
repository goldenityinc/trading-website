import React, { useEffect, useState } from 'react';
import { Kanban, Truck, Settings, MoreVertical, Plus, TrendingUp, Archive, CheckCircle2, Clock, AlertCircle, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_CRM_LEADS, MOCK_ERP_LOGISTICS, MOCK_KYC_KYB_REQUESTS } from '../mockData';

const KYC_QUEUE_STORAGE_KEY = 'meridianKycQueue';

const InternalPortal = () => {
  const demoRole = sessionStorage.getItem('meridianDemoRole');

  if (demoRole !== 'employee') {
    return (
      <div className="min-h-screen bg-slate-100 text-slate-900 flex items-center justify-center px-4">
        <div className="max-w-lg w-full border border-slate-300 bg-white rounded-2xl p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold mb-3">Employee Login Required</h1>
          <p className="text-slate-600 mb-6">
            Please login as karyawan before accessing CRM and ERP internal workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/auth?mode=login&role=employee" className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors">
              Go to Employee Login
            </Link>
            <Link to="/portals" className="px-5 py-2.5 rounded-lg border border-slate-300 hover:border-slate-400 transition-colors">
              Back to Portals
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState('crm');
  const [toastMessage, setToastMessage] = useState(null);
  const [crmLeads] = useState(MOCK_CRM_LEADS);
  const [erpShipments] = useState(MOCK_ERP_LOGISTICS);
  const [kycQueue, setKycQueue] = useState(MOCK_KYC_KYB_REQUESTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KYC_QUEUE_STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(KYC_QUEUE_STORAGE_KEY, JSON.stringify(MOCK_KYC_KYB_REQUESTS));
        setKycQueue(MOCK_KYC_KYB_REQUESTS);
        return;
      }

      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setKycQueue(parsed);
      }
    } catch (error) {
      setKycQueue(MOCK_KYC_KYB_REQUESTS);
    }
  }, []);

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

  const updateKycQueue = (id, nextStatus) => {
    const next = kycQueue.map((item) => {
      if (item.id !== id) {
        return item;
      }

      return {
        ...item,
        status: nextStatus,
      };
    });

    setKycQueue(next);
    localStorage.setItem(KYC_QUEUE_STORAGE_KEY, JSON.stringify(next));
    setToastMessage(`KYC/KYB request ${id} updated to ${nextStatus}.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const getKycStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
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
              <Link to="/auth?mode=login&role=customer" className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-3 py-1 rounded text-sm transition-colors">
                Customer Login
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

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
              <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">KYC / KYB Review Queue</h3>
                <span className="text-sm text-gray-600">Open Items: {kycQueue.filter((item) => item.status === 'Pending Review').length}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Request ID</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Company</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Type</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Submitted</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-slate-600 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kycQueue.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-2 font-mono text-blue-700">{item.id}</td>
                        <td className="px-4 py-2 text-gray-800">{item.companyName}</td>
                        <td className="px-4 py-2 text-gray-700">{item.entityType}</td>
                        <td className="px-4 py-2 text-gray-700">{item.submittedAt}</td>
                        <td className="px-4 py-2">
                          <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getKycStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex gap-2">
                            <button
                              onClick={() => updateKycQueue(item.id, 'Approved')}
                              className="px-2 py-1 text-xs rounded bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => updateKycQueue(item.id, 'Rejected')}
                              className="px-2 py-1 text-xs rounded bg-red-600 hover:bg-red-700 text-white transition-colors"
                            >
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
