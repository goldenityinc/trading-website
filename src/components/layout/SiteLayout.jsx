import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '@/lib/i18n.jsx';

export default function SiteLayout() {
  const { isRTL } = useLanguage();

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-navy">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}