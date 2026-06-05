import { Briefcase, Package, BarChart, MessageSquare, Lock, Users } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: 'Business Management',
    description: 'Manage departments, employees, and operations from one control center.',
  },
  {
    icon: Package,
    title: 'Inventory & Supply Chain',
    description: 'Track stock levels, orders, and suppliers in real-time.',
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Turn raw data into actionable insights with live dashboards.',
  },
  {
    icon: MessageSquare,
    title: 'Team Collaboration',
    description: 'Assign tasks, track progress, and communicate in one place.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption with role-based access and audit logs.',
  },
  {
    icon: Users,
    title: 'CRM & Sales Pipeline',
    description: 'Manage leads, clients, and deals from acquisition to close.',
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-[100px] px-[20px] md:px-[40px] bg-[var(--color-bg-surface)]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <p className="text-[13px] uppercase tracking-[0.12em] text-[var(--color-primary)] font-semibold mb-4">
            FEATURES
          </p>
          <h2 className="font-['Syne'] text-[36px] md:text-[40px] font-bold leading-tight text-[var(--color-text-primary)] mb-4">
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
              className="group bg-[var(--color-bg-base)] border border-[var(--color-bg-border)] rounded-[var(--radius-xl)] p-[28px] shadow-card hover:border-[rgba(10,132,255,0.4)] hover:-translate-y-1 hover:shadow-glow-blue transition-all duration-[var(--duration-base)]"
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

              {/* Learn More Link */}
              <a
                href="#"
                className="text-[14px] text-[var(--color-primary)] hover:underline opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1"
              >
                Learn more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
