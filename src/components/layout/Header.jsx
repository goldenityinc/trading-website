import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n.jsx';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { key: 'about', path: '/about' },
  { key: 'commodities', path: '/commodities' },
  { key: 'capabilities', path: '/capabilities' },
  { key: 'markets', path: '/markets' },
  { key: 'compliance', path: '/compliance' },
  { key: 'insights', path: '/insights' },
];

export default function Header() {
  const { t, language, setLanguage, languages } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setLangOpen(false); }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-navy/96 backdrop-blur-lg border-b border-white/[0.05]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-6 h-6 border border-copper/60 flex items-center justify-center">
              <div className="w-2 h-2 bg-copper" />
            </div>
            <span className="font-display font-bold text-white text-xs tracking-[0.2em] uppercase">
              Meridian
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.key}
                to={item.path}
                className={`px-3.5 py-2 text-[11px] tracking-[0.14em] uppercase font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-steel hover:text-white/90'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-steel hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[10px] tracking-[0.16em] uppercase font-mono">{language}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1.5 bg-charcoal border border-white/[0.08] shadow-xl py-1 min-w-[130px]"
                  >
                    {(languages || []).map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full px-3.5 py-2 text-[11px] text-left flex items-center gap-2 transition-colors ${
                          language === lang.code
                            ? 'text-white bg-white/[0.05]'
                            : 'text-steel hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        <span className="opacity-70">{lang.flag}</span>
                        <span className="tracking-wide">{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Inquiry CTA */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-5 py-2 border border-copper/50 text-copper text-[11px] tracking-[0.14em] uppercase font-medium hover:bg-copper hover:text-white hover:border-copper transition-all duration-300"
            >
              Inquiry
            </Link>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-steel hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-navy/98 backdrop-blur-xl border-t border-white/[0.05]"
          >
            <nav className="px-6 py-6 space-y-0.5">
              {[{ key: 'home', path: '/' }, ...NAV_ITEMS, { key: 'investor', path: '/investor' }].map(item => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`block px-3 py-3 text-xs tracking-[0.14em] uppercase transition-colors border-l-2 ${
                    location.pathname === item.path
                      ? 'text-white border-copper'
                      : 'text-steel hover:text-white border-transparent'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-5 px-4 py-3 bg-copper text-white text-center text-xs tracking-[0.14em] uppercase font-medium"
              >
                Submit Inquiry
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}