import { Briefcase, Package, BarChart, MessageSquare, Lock, Users } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router';

const features = [
  {
    icon: Briefcase,
    id: 'hr',
    title: 'Business Management',
    description: 'Manage departments, employees, and operations from one control center.',
  },
  {
    icon: Package,
    id: 'inventory',
    title: 'Inventory & Supply Chain',
    description: 'Track stock levels, orders, and suppliers in real-time.',
  },
  {
    icon: BarChart,
    id: 'finance',
    title: 'Advanced Analytics',
    description: 'Turn raw data into actionable insights with live dashboards.',
  },
  {
    icon: MessageSquare,
    id: 'projects',
    title: 'Team Collaboration',
    description: 'Assign tasks, track progress, and communicate in one place.',
  },
  {
    icon: Lock,
    id: 'pos',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption with role-based access and audit logs.',
  },
  {
    icon: Users,
    id: 'crm',
    title: 'CRM & Sales Pipeline',
    description: 'Manage leads, clients, and deals from acquisition to close.',
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="max-md:min-h-0 min-h-[100dvh] w-full flex flex-col justify-center bg-[var(--color-bg-surface)] snap-start px-[20px] md:px-[40px] py-20 md:py-12">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <p className="text-[13px] uppercase tracking-[0.12em] text-[var(--color-primary)] font-semibold mb-4">
            PRODUCTS
          </p>
          <h2 className="font-['Syne'] text-[40px] md:text-[40px] font-bold leading-tight text-[var(--color-text-primary)] mb-4">
            Built for how your business actually works
          </h2>
          <p className="text-[17px] text-[var(--color-text-secondary)] leading-relaxed">
            Everything you need to run a modern business, packaged into one powerful platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-[var(--color-bg-base)] border border-[var(--color-bg-border)] rounded-[var(--radius-xl)] p-[28px] shadow-card hover:border-[rgba(10,132,255,0.4)] hover:-translate-y-1 hover:shadow-glow-blue transition-all duration-[var(--duration-base)] flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-[48px] h-[48px] rounded-[var(--radius-lg)] bg-[var(--color-bg-elevated)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary-glow)] transition-colors">
                <feature.icon size={24} className="text-[var(--color-primary)]" />
              </div>

              {/* Title */}
              <h3 className="font-['DM_Sans'] text-[18px] font-semibold text-[var(--color-text-primary)] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[var(--color-text-muted)] leading-[1.6] mb-4">
                {feature.description}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-auto pt-4">
                <Link to="/download" className="w-full">
                  <Button variant="primary" size="sm" className="w-full">
                    Buy
                  </Button>
                </Link>
                <Link to={`/products/${feature.id}`} className="w-full">
                  <Button variant="secondary" size="sm" className="w-full">
                    Detail
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Link to="/products">
            <Button variant="secondary" size="lg" className="px-8 font-semibold">
              See all products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
