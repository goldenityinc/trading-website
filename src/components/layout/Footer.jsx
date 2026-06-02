import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n.jsx';

const NAV_LINKS = [
  { key: 'about', path: '/about' },
  { key: 'commodities', path: '/commodities' },
  { key: 'capabilities', path: '/capabilities' },
  { key: 'markets', path: '/markets' },
  { key: 'insights', path: '/insights' },
  { key: 'investor', path: '/investor' },
];

export default function Footer() {
  const { t, language, setLanguage, languages } = useLanguage();

  return (
    <footer className="bg-charcoal border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 border border-copper/60 flex items-center justify-center">
                <div className="w-2 h-2 bg-copper" />
              </div>
              <span className="font-display font-bold text-white text-xs tracking-[0.2em] uppercase">
                Meridian Global Trading
              </span>
            </div>
            <p className="text-steel text-xs leading-relaxed max-w-xs font-light">
              {t('footer.overview')}
            </p>
            <div className="mt-8">
              <div className="flex gap-1.5">
                {(languages || []).map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2.5 py-1.5 text-[10px] tracking-[0.12em] uppercase font-mono border transition-all duration-200 ${
                      language === lang.code
                        ? 'border-copper/60 text-copper'
                        : 'border-white/[0.07] text-steel hover:text-white hover:border-white/20'
                    }`}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase text-copper/70 mb-5">
              {t('footer.navigation')}
            </h4>
            <nav className="space-y-2.5">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.key}
                  to={link.path}
                  className="block text-steel text-xs hover:text-white transition-colors duration-200 tracking-wide"
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal + Contact */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase text-copper/70 mb-5">
              {t('footer.contact_heading')}
            </h4>
            <div className="space-y-2.5 text-steel text-xs tracking-wide">
              <p>inquiries@meridian-global.com</p>
              <p>+41 22 000 0000</p>
              <p>Geneva, Switzerland</p>
              <p className="text-steel/50 pt-1 text-[11px] font-mono">Dubai · Singapore · Jakarta</p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/[0.04]">
              <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase text-copper/70 mb-3">
                {t('footer.legal')}
              </h4>
              <nav className="space-y-2">
                <Link to="/compliance" className="block text-steel text-xs hover:text-white transition-colors">
                  {t('footer.compliance_link')}
                </Link>
                <span className="block text-steel/40 text-xs">{t('footer.privacy')}</span>
                <span className="block text-steel/40 text-xs">{t('footer.terms')}</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-steel/40 text-[11px] tracking-wider font-mono">
            {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-steel/30 text-[11px] font-mono tracking-wider">EST. 2012</span>
            <div className="w-1 h-1 bg-copper/40 rounded-full" />
            <span className="text-steel/30 text-[11px] font-mono tracking-wider">Geneva</span>
          </div>
        </div>
      </div>
    </footer>
  );
}