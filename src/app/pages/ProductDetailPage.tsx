import { useParams, Link } from 'react-router';
import { modules } from './ProductsPage';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { NotFoundPage } from './NotFoundPage';

export function ProductDetailPage() {
  const { id } = useParams();
  const product = modules.find((m) => m.id === id);

  if (!product) {
    return <NotFoundPage />;
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen py-[80px] px-[20px] md:px-[40px]">
      <div className="max-w-[800px] mx-auto">
        <Link to="/products" className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] mb-8 transition-colors">
          <ArrowLeft size={16} />
          Back to Products
        </Link>

        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)] rounded-[var(--radius-2xl)] p-8 md:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle gradient background based on product color */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-5 pointer-events-none" style={{ background: product.color }} />

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 relative z-10">
            <div className="w-16 h-16 rounded-[var(--radius-xl)] flex items-center justify-center shrink-0 border border-[var(--color-bg-border)]" style={{ background: `color-mix(in srgb, ${product.color} 15%, transparent)` }}>
              <Icon size={32} style={{ color: product.color }} />
            </div>
            <div>
              <h1 className="text-[32px] md:text-[40px] font-bold text-[var(--color-text-primary)] mb-2" style={{ letterSpacing: 'var(--tracking-tight)' }}>{product.name}</h1>
              <p className="text-[18px] text-[var(--color-text-secondary)] font-medium" style={{ color: product.color }}>{product.tagline}</p>
            </div>
          </div>

          <div className="mb-10 relative z-10">
            <p className="text-[16px] text-[var(--color-text-secondary)] leading-relaxed">{product.desc}</p>
          </div>

          <div className="mb-10 relative z-10">
            <h3 className="text-[20px] font-bold text-[var(--color-text-primary)] mb-6" style={{ letterSpacing: 'var(--tracking-tight)' }}>Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-elevated)] border border-[var(--color-bg-border)]">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: product.color }} />
                  <span className="text-[14px] text-[var(--color-text-secondary)] leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 mb-10 p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-elevated)] border border-[var(--color-bg-border)] relative z-10">
            <div className="flex-1">
              <p className="text-[12px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-1">Impact</p>
              <p className="text-[28px] font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'Syne' }}>{product.stat.value}</p>
              <p className="text-[13px] text-[var(--color-text-secondary)]">{product.stat.label}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-[var(--color-bg-border)] relative z-10">
            <Link to="/download" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full">
                Buy Module
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
