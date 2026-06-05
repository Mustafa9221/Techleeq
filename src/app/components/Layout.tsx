import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[var(--color-bg-base)]">
      <Navigation />
      <main className="pt-[68px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
