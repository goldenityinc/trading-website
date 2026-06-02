import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ShieldCheck } from 'lucide-react';
import { MOCK_KYC_KYB_REQUESTS } from '../mockData';

const KYC_QUEUE_STORAGE_KEY = 'meridianKycQueue';

const readKycQueue = () => {
  try {
    const raw = localStorage.getItem(KYC_QUEUE_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(KYC_QUEUE_STORAGE_KEY, JSON.stringify(MOCK_KYC_KYB_REQUESTS));
      return [...MOCK_KYC_KYB_REQUESTS];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [...MOCK_KYC_KYB_REQUESTS];
    }

    return parsed;
  } catch (error) {
    return [...MOCK_KYC_KYB_REQUESTS];
  }
};

const writeKycQueue = (list) => {
  localStorage.setItem(KYC_QUEUE_STORAGE_KEY, JSON.stringify(list));
};

const KycForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const registrationState = useMemo(() => location.state || {}, [location.state]);

  const [formData, setFormData] = useState({
    companyName: registrationState.companyName || '',
    email: registrationState.email || '',
    contactPerson: registrationState.contactPerson || '',
    entityType: registrationState.entityType || 'KYC',
    incorporationCountry: '',
    registrationNumber: '',
    sourceOfFunds: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const requiredFields = ['companyName', 'email', 'contactPerson', 'incorporationCountry', 'registrationNumber', 'sourceOfFunds'];
    const hasMissing = requiredFields.some((field) => !formData[field]);

    if (hasMissing) {
      alert('Please complete all required KYC/KYB fields.');
      return;
    }

    const queue = readKycQueue();
    const prefix = formData.entityType === 'KYB' ? 'KYB' : 'KYC';
    const generatedId = `${prefix}-2026-${String(queue.length + 1).padStart(3, '0')}`;

    const newEntry = {
      id: generatedId,
      companyName: formData.companyName,
      email: formData.email,
      entityType: formData.entityType,
      submittedAt: new Date().toISOString().slice(0, 10),
      riskLevel: 'Pending Assessment',
      status: 'Pending Review',
      contactPerson: formData.contactPerson,
      incorporationCountry: formData.incorporationCountry,
      registrationNumber: formData.registrationNumber,
      sourceOfFunds: formData.sourceOfFunds,
    };

    const nextQueue = [newEntry, ...queue];
    writeKycQueue(nextQueue);

    alert('KYC/KYB submitted successfully. Our CRM team will review your profile shortly.');
    navigate(`/auth?mode=login&role=customer&email=${encodeURIComponent(formData.email)}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/auth?mode=register" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-4 h-4" />
          Back to Registration
        </Link>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-7 h-7 text-amber-400" />
            <div>
              <h1 className="text-2xl font-bold">KYC/KYB Verification Form</h1>
              <p className="text-sm text-slate-300">Complete onboarding before customer portal activation.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Company Name</label>
                <input
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={onChange}
                  className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Contact Person</label>
                <input
                  name="contactPerson"
                  type="text"
                  value={formData.contactPerson}
                  onChange={onChange}
                  className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={onChange}
                  className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Verification Type</label>
                <select
                  name="entityType"
                  value={formData.entityType}
                  onChange={onChange}
                  className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 focus:outline-none focus:border-amber-500"
                >
                  <option value="KYC">KYC</option>
                  <option value="KYB">KYB</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">Incorporation Country</label>
                <input
                  name="incorporationCountry"
                  type="text"
                  value={formData.incorporationCountry}
                  onChange={onChange}
                  placeholder="Singapore"
                  className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Registration Number</label>
                <input
                  name="registrationNumber"
                  type="text"
                  value={formData.registrationNumber}
                  onChange={onChange}
                  placeholder="REG-884738"
                  className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">Source of Funds</label>
              <input
                name="sourceOfFunds"
                type="text"
                value={formData.sourceOfFunds}
                onChange={onChange}
                placeholder="Commodity exports and treasury operations"
                className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300">
              After submit, your profile is sent to Internal CRM -> KYC/KYB Review Queue for employee approval.
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 transition-colors"
            >
              Submit KYC/KYB
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KycForm;
