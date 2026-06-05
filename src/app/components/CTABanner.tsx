import { Link } from 'react-router';
import { Button } from './Button';
import { Download, Phone } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-[100px] px-[20px] md:px-[40px] bg-[var(--color-bg-surface)] relative overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 gradient-glow opacity-30 animate-pulse" style={{ animationDuration: '10s' }}></div>

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(10,132,255,0.15) 0%, transparent 60%)',
        }}
      ></div>

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        {/* Headline */}
        <h2 className="font-['Syne'] text-[42px] md:text-[54px] font-bold leading-tight text-[var(--color-text-primary)] mb-6">
          Ready to simplify your business?
        </h2>

        {/* Sub-headline */}
        <p className="text-[18px] md:text-[20px] text-[var(--color-text-secondary)] leading-relaxed mb-10">
          Join 500+ companies that run smarter on TechLeeq.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/download">
            <Button variant="primary" size="xl" icon={<Download size={20} />} iconPosition="left">
              Download Free Trial
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary" size="xl" icon={<Phone size={20} />} iconPosition="left">
              Talk to Sales
            </Button>
          </Link>
        </div>

        {/* Trust Signal */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-[var(--color-text-muted)] text-sm">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Bank-level security</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
