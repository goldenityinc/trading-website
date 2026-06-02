import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useMutation } from '@tanstack/react-query';
import PageHero from '../components/shared/PageHero';
import SectionReveal from '../components/shared/SectionReveal';
import SectionLabel from '../components/shared/SectionLabel';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, CheckCircle2, Building2, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CARGO_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/f9f5c92c3_generated_8e27970f.png';

const inquiryTypes = [
  { value: 'buyer', label: 'Buyer Inquiry' },
  { value: 'seller', label: 'Seller Inquiry' },
  { value: 'strategic_partnership', label: 'Strategic Partnership' },
  { value: 'investor_corporate', label: 'Corporate / Investor' },
];

const initialForm = {
  inquiry_type: '',
  company_name: '',
  contact_name: '',
  email: '',
  phone: '',
  country: '',
  commodity_of_interest: '',
  volume: '',
  destination: '',
  message: '',
  compliance_acknowledged: false,
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: (data) => base44.entities.Inquiry.create(data),
    onSuccess: () => setSubmitted(true),
  });

  const handleChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));
  const handleSubmit = (e) => { e.preventDefault(); mutation.mutate(formData); };

  const inputClass = "bg-navy/60 border-white/[0.08] text-white h-11 text-sm focus:border-copper/50 focus:ring-0 placeholder:text-steel/30 rounded-none";

  return (
    <div>
      <PageHero
        title="Transaction Inquiry"
        subtitle="Initiate a structured conversation with our team. Complete the form below to begin the engagement process."
        image={CARGO_IMAGE}
      />

      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SectionReveal>
                <div className="lg:sticky lg:top-28">
                  <SectionLabel>Contact</SectionLabel>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-4 h-4 text-copper/50 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <div className="text-white text-sm font-semibold">Meridian Global Trading</div>
                        <div className="text-steel text-xs mt-0.5 font-light">Institutional Commodity Platform</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-copper/50 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-steel text-xs font-light">inquiries@meridian-global.com</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-copper/50 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-steel text-xs font-light">+41 22 000 0000</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-copper/50 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <div className="text-steel text-xs font-light">Geneva, Switzerland</div>
                        <div className="text-steel/40 text-xs mt-0.5 font-mono tracking-wide">Dubai · Singapore · Jakarta · Houston</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-charcoal border border-white/[0.06]">
                    <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-copper/50 mb-3">Response Timeline</div>
                    <p className="text-steel text-xs leading-relaxed font-light">
                      All inquiries receive an initial acknowledgment within 24 business hours. Qualified inquiries are reviewed and responded to within 3–5 business days.
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-copper/20 bg-charcoal p-12 lg:p-16 text-center"
                  >
                    <CheckCircle2 className="w-10 h-10 text-copper/60 mx-auto mb-5" strokeWidth={1.5} />
                    <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">Inquiry Submitted</h3>
                    <p className="text-steel text-sm max-w-md mx-auto font-light leading-relaxed">
                      Thank you for your interest. Our team will review your inquiry and respond within the standard processing timeline. An acknowledgment will be sent to the email address provided.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <SectionReveal>
                      {/* Inquiry Type */}
                      <div className="mb-10">
                        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-copper/60 mb-4">Inquiry Type</div>
                        <div className="grid grid-cols-2 gap-2">
                          {inquiryTypes.map(type => (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => handleChange('inquiry_type', type.value)}
                              className={`text-left px-4 py-3.5 border text-xs tracking-wide transition-all duration-200 ${
                                formData.inquiry_type === type.value
                                  ? 'border-copper/50 bg-copper/8 text-white'
                                  : 'border-white/[0.07] text-steel hover:border-white/15 hover:text-white'
                              }`}
                            >
                              {type.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-steel/50 text-[10px] tracking-[0.2em] uppercase font-mono mb-2 block">Company *</Label>
                            <Input required value={formData.company_name} onChange={(e) => handleChange('company_name', e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <Label className="text-steel/50 text-[10px] tracking-[0.2em] uppercase font-mono mb-2 block">Contact Name *</Label>
                            <Input required value={formData.contact_name} onChange={(e) => handleChange('contact_name', e.target.value)} className={inputClass} />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-steel/50 text-[10px] tracking-[0.2em] uppercase font-mono mb-2 block">Email *</Label>
                            <Input required type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <Label className="text-steel/50 text-[10px] tracking-[0.2em] uppercase font-mono mb-2 block">Phone</Label>
                            <Input value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} className={inputClass} />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-steel/50 text-[10px] tracking-[0.2em] uppercase font-mono mb-2 block">Country *</Label>
                            <Input required value={formData.country} onChange={(e) => handleChange('country', e.target.value)} className={inputClass} />
                          </div>
                          <div>
                            <Label className="text-steel/50 text-[10px] tracking-[0.2em] uppercase font-mono mb-2 block">Commodity</Label>
                            <Select value={formData.commodity_of_interest} onValueChange={(v) => handleChange('commodity_of_interest', v)}>
                              <SelectTrigger className={`${inputClass} w-full`}>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent className="bg-charcoal border-white/[0.08]">
                                <SelectItem value="crude_oil">Crude Oil</SelectItem>
                                <SelectItem value="refined_products">Refined Products</SelectItem>
                                <SelectItem value="sulfur">Sulfur</SelectItem>
                                <SelectItem value="feedstocks">Industrial Feedstocks</SelectItem>
                                <SelectItem value="minerals">Minerals</SelectItem>
                                <SelectItem value="metals">Metals</SelectItem>
                                <SelectItem value="multiple">Multiple</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-steel/50 text-[10px] tracking-[0.2em] uppercase font-mono mb-2 block">Volume / Quantity</Label>
                            <Input value={formData.volume} onChange={(e) => handleChange('volume', e.target.value)} placeholder="e.g. 50,000 MT" className={inputClass} />
                          </div>
                          <div>
                            <Label className="text-steel/50 text-[10px] tracking-[0.2em] uppercase font-mono mb-2 block">Destination</Label>
                            <Input value={formData.destination} onChange={(e) => handleChange('destination', e.target.value)} placeholder="e.g. Port of Singapore" className={inputClass} />
                          </div>
                        </div>

                        <div>
                          <Label className="text-steel/50 text-[10px] tracking-[0.2em] uppercase font-mono mb-2 block">Message</Label>
                          <Textarea
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            rows={5}
                            placeholder="Additional details about your inquiry..."
                            className="bg-navy/60 border-white/[0.08] text-white text-sm focus:border-copper/50 focus:ring-0 placeholder:text-steel/30 rounded-none resize-none"
                          />
                        </div>

                        <div className="flex items-start gap-3 p-5 bg-charcoal/50 border border-white/[0.05]">
                          <Checkbox
                            id="compliance"
                            checked={formData.compliance_acknowledged}
                            onCheckedChange={(checked) => handleChange('compliance_acknowledged', checked)}
                            className="mt-0.5 border-white/20 data-[state=checked]:bg-copper data-[state=checked]:border-copper"
                          />
                          <Label htmlFor="compliance" className="text-steel/60 text-xs leading-relaxed cursor-pointer font-light">
                            I acknowledge that this inquiry may be subject to counterparty qualification procedures including KYC/KYB verification. I confirm the information provided is accurate and I am authorized to submit this inquiry on behalf of the named organization.
                          </Label>
                        </div>

                        <button
                          type="submit"
                          disabled={!formData.inquiry_type || !formData.company_name || !formData.email || !formData.country || !formData.contact_name || mutation.isPending}
                          className="inline-flex items-center gap-2 px-10 py-3.5 bg-copper text-white text-xs tracking-[0.16em] uppercase font-medium hover:bg-copper-light transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                        >
                          {mutation.isPending ? 'Submitting...' : 'Submit Inquiry'}
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </form>
                    </SectionReveal>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}