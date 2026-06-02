import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { format } from 'date-fns';
import PageHero from '../components/shared/PageHero';
import SectionReveal from '../components/shared/SectionReveal';
import SectionLabel from '../components/shared/SectionLabel';
import CTABanner from '../components/shared/CTABanner';
import { ArrowUpRight } from 'lucide-react';

const REFINERY_IMAGE = 'https://media.base44.com/images/public/69cc091198ceab0f2508eb90/0af63b141_generated_3bf6e1bd.png';

const categoryLabels = {
  market_commentary: 'Market Commentary',
  commodity_update: 'Commodity Update',
  logistics: 'Logistics',
  regulatory: 'Regulatory',
  trade_intelligence: 'Trade Intelligence',
};

const placeholderInsights = [
  { id: 'p1', title: 'Global Crude Oil Market: Q1 Supply-Demand Dynamics', category: 'market_commentary', summary: 'An overview of shifting crude oil supply patterns as OPEC+ adjustments interact with emerging refinery capacity in Asia Pacific.', publish_date: '2026-03-15' },
  { id: 'p2', title: 'Sulfur Trade Flows: Middle East to Southeast Asia Corridor', category: 'commodity_update', summary: 'Key developments in the sulfur trade corridor between Gulf producers and fertilizer consumers in Indonesia, Vietnam, and Bangladesh.', publish_date: '2026-03-08' },
  { id: 'p3', title: 'Shipping Rate Developments: Dry Bulk and Tanker Markets', category: 'logistics', summary: 'A review of freight rate trends across major commodity shipping segments and their implications for landed cost calculations.', publish_date: '2026-02-28' },
  { id: 'p4', title: 'Evolving Trade Documentation Standards: Letter of Credit Updates', category: 'regulatory', summary: 'Recent developments in international trade finance documentation requirements and their impact on commodity transaction workflows.', publish_date: '2026-02-20' },
  { id: 'p5', title: 'African Mineral Exports: Infrastructure and Trade Route Developments', category: 'trade_intelligence', summary: 'Strategic developments in African mineral export infrastructure, including port capacity expansions and new rail corridors.', publish_date: '2026-02-12' },
  { id: 'p6', title: 'Refined Products Demand Outlook: Asia Pacific Refinery Landscape', category: 'commodity_update', summary: 'Analysis of new refining capacity coming online in Southeast Asia and implications for refined product import demand patterns.', publish_date: '2026-02-01' },
];

export default function Insights() {
  const { data: dbInsights } = useQuery({
    queryKey: ['insights'],
    queryFn: () => base44.entities.Insight.filter({ is_published: true }, '-publish_date'),
    initialData: [],
  });

  const insights = dbInsights.length > 0 ? dbInsights : placeholderInsights;

  return (
    <div>
      <PageHero
        title="Insights & Intelligence"
        subtitle="Market commentary, commodity analysis, logistics observations, and regulatory developments from our global operations."
        image={REFINERY_IMAGE}
      />

      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionReveal>
            <SectionLabel>Publications</SectionLabel>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white tracking-tight mb-14 leading-tight">
              Recent Intelligence
            </h2>
          </SectionReveal>

          <div className="space-y-0">
            {insights.map((insight, i) => (
              <SectionReveal key={insight.id} delay={i * 0.05}>
                <article className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 border-t border-white/[0.05] hover:border-copper/15 transition-colors duration-500 cursor-pointer">
                  <div className="lg:col-span-2">
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-copper/50 mb-1 group-hover:text-copper/70 transition-colors">
                      {categoryLabels[insight.category] || insight.category}
                    </div>
                    {insight.publish_date && (
                      <div className="font-mono text-[10px] tracking-wider text-steel/35">
                        {format(new Date(insight.publish_date), 'MMM d, yyyy')}
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-base font-semibold text-white/90 leading-snug group-hover:text-white transition-colors">
                      {insight.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-steel text-sm leading-[1.8] font-light">
                      {insight.summary}
                    </p>
                  </div>
                  <div className="lg:col-span-1 flex items-start justify-end">
                    <ArrowUpRight className="w-4 h-4 text-steel/20 group-hover:text-copper/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-0.5" />
                  </div>
                </article>
              </SectionReveal>
            ))}
            <div className="border-t border-white/[0.05]" />
          </div>
        </div>
      </section>

      <CTABanner
        title="Market Intelligence Access"
        subtitle="Our market intelligence is available to qualified counterparties and institutional partners. Contact our team for access."
        ctaText="Request Access"
      />
    </div>
  );
}