import React, { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import SectionReveal from '../components/shared/SectionReveal';
import SectionLabel from '../components/shared/SectionLabel';
import CTABanner from '../components/shared/CTABanner';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MINERALS_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/7f978f041_generated_1da41720.png';
const REFINERY_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/0af63b141_generated_3bf6e1bd.png';
const SULFUR_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/92b67e416_generated_82dda5ed.png';

const commodityData = [
  { category: 'Crude Oil', sector: 'Energy', image: REFINERY_IMAGE, overview: 'We facilitate the trading and logistics of crude oil grades across strategic supply corridors, connecting producing regions with refinery destinations worldwide.', specs: 'API gravity ranges, sulfur content classifications, pour point specifications, and viscosity parameters per industry standards.', origins: 'Middle East, West Africa, Central Asia, North America', destinations: 'Asia Pacific, Europe, Indian Subcontinent', shipment: 'VLCC, Suezmax, Aframax — CFR, FOB, CIF delivery terms', documentation: 'Bill of lading, certificate of origin, quality certificate, letter of credit, insurance certificate, inspection report' },
  { category: 'Refined Products', sector: 'Energy', image: REFINERY_IMAGE, overview: 'Gasolines, diesel, jet fuel, fuel oil, and naphtha — sourced from established refineries and delivered through coordinated logistics channels.', specs: 'Product specifications per ASTM/ISO standards including density, flash point, cetane/octane ratings, and sulfur content.', origins: 'Middle East, Southeast Asia, Mediterranean, North America', destinations: 'Global — with focus on Asia Pacific and African markets', shipment: 'MR/LR tankers, pipeline delivery where applicable', documentation: 'Product quality certificate, bill of lading, SGS/Intertek inspection, L/C documentation, customs clearance' },
  { category: 'Sulfur', sector: 'Industrial', image: SULFUR_IMAGE, overview: 'Industrial-grade sulfur in various forms — sourced from major producing regions and supplied to fertilizer, chemical, and industrial consumers.', specs: 'Granular, prilled, lump, and liquid sulfur. Purity levels of 99.5%+ with moisture content per buyer specifications.', origins: 'Middle East (UAE, Saudi Arabia, Qatar, Kuwait), Central Asia', destinations: 'Southeast Asia, Africa, South Asia, South America', shipment: 'Bulk carriers, break-bulk, bagged options — CFR, FOB', documentation: 'Certificate of analysis, weight certificate, bill of lading, fumigation certificate, L/C documentation' },
  { category: 'Industrial Feedstocks', sector: 'Industrial', image: MINERALS_IMAGE, overview: 'Key industrial input materials including petroleum coke, carbon black feedstock, and specialty chemical intermediates.', specs: 'Per buyer and end-use specifications. Standard quality certifications provided.', origins: 'Middle East, North America, Asia', destinations: 'Global industrial markets', shipment: 'Bulk carriers, containerized, break-bulk', documentation: 'Material safety data sheet, certificate of analysis, bill of lading, customs documentation' },
  { category: 'Minerals', sector: 'Resources', image: MINERALS_IMAGE, overview: 'Mineral commodities including iron ore, manganese, chrome, bauxite, and other industrial minerals sourced from established mining jurisdictions.', specs: 'Grade, particle size, moisture content, and chemical composition per buyer requirements.', origins: 'Africa, Southeast Asia, South America, Central Asia', destinations: 'China, Southeast Asia, India, Europe', shipment: 'Capesize, Panamax, Supramax — bulk carriers, FOB/CFR', documentation: 'Certificate of origin, assay report, weight survey, bill of lading, mining license documentation' },
  { category: 'Metals', sector: 'Resources', image: MINERALS_IMAGE, overview: 'Base metals and ferroalloys including copper, zinc, nickel, and specialty metal products for industrial and manufacturing applications.', specs: 'LME-grade specifications where applicable. Purity, form (cathode, ingot, concentrate), and packaging per contract.', origins: 'Africa, South America, Central Asia, Southeast Asia', destinations: 'Asia Pacific, Europe, Middle East', shipment: 'Containerized, break-bulk, specialized carriers', documentation: 'Assay certificate, weight certificate, bill of lading, certificate of origin, L/C documentation' },
];

function CommodityRow({ commodity, index }) {
  const [expanded, setExpanded] = useState(false);

  const details = [
    { label: 'Indicative Specifications', value: commodity.specs },
    { label: 'Origin Options', value: commodity.origins },
    { label: 'Destination Markets', value: commodity.destinations },
    { label: 'Shipment Modes', value: commodity.shipment },
    { label: 'Documentation Flow', value: commodity.documentation },
  ];

  return (
    <SectionReveal delay={index * 0.06}>
      <div className="border-t border-white/[0.05] group">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left py-8 flex items-start gap-6 lg:gap-10 hover:bg-white/[0.01] transition-colors"
        >
          <div className="lg:w-64 flex-shrink-0">
            <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-steel/35 group-hover:text-copper/50 transition-colors block mb-1">
              {commodity.sector}
            </span>
            <h3 className="font-display text-xl font-bold text-white/90 tracking-tight group-hover:text-white transition-colors">
              {commodity.category}
            </h3>
          </div>
          <p className="flex-1 text-steel text-sm leading-[1.8] font-light hidden md:block">
            {commodity.overview}
          </p>
          <div className="flex-shrink-0 flex items-center gap-2 pt-0.5">
            <span className="font-mono text-[10px] tracking-widest uppercase text-copper/50 hidden lg:block">
              {expanded ? 'Collapse' : 'Details'}
            </span>
            <ChevronDown className={`w-4 h-4 text-steel/30 group-hover:text-copper/50 transition-all duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </div>
        </button>

        <p className="text-steel text-sm leading-[1.8] font-light mb-4 md:hidden px-0 pb-2">{commodity.overview}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 border-t border-white/[0.04] pt-7">
                {details.map((d, i) => (
                  <div key={i}>
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-copper/40 block mb-1.5">
                      {d.label}
                    </span>
                    <p className="text-steel text-sm leading-[1.8] font-light">{d.value}</p>
                  </div>
                ))}
                <div className="md:col-span-2 lg:col-span-1 flex items-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-copper text-white text-xs tracking-[0.14em] uppercase font-medium hover:bg-copper-light transition-all duration-300 group"
                  >
                    Inquire
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionReveal>
  );
}

export default function Commodities() {
  return (
    <div>
      <PageHero
        title="Commodity Portfolio"
        subtitle="A diversified platform spanning energy, industrial inputs, minerals, and metals — coordinating cross-border transactions at institutional scale."
        image={MINERALS_IMAGE}
      />

      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionReveal>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight mb-14 leading-tight">
              Traded Commodities
            </h2>
          </SectionReveal>

          <div>
            {commodityData.map((commodity, i) => (
              <CommodityRow key={commodity.category} commodity={commodity} index={i} />
            ))}
            <div className="border-t border-white/[0.05]" />
          </div>
        </div>
      </section>

      <CTABanner
        title="Discuss Your Commodity Requirements"
        subtitle="Our team is prepared to review specifications, discuss volumes, and initiate the counterparty qualification process."
      />
    </div>
  );
}