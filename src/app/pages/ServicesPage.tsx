import { Link } from 'react-router';
import {
  Headphones, BookOpen, Wrench, ArrowUpRight, BarChart3, RefreshCw, ShieldCheck, Users2, Clock, CheckCircle2
} from 'lucide-react';
import { Button } from '../components/Button';

const services = [
  {
    icon: Headphones,
    title: 'Implementation & Onboarding',
    color: 'var(--color-primary)',
    desc: 'Our certified implementation specialists handle the full rollout — from data migration to staff training — so your team is productive from day one.',
    features: ['Dedicated project manager', 'Data migration from legacy systems', 'Custom workflow configuration', 'Multi-site rollout coordination', 'Go-live support & hypercare'],
  },
  {
    icon: BookOpen,
    title: 'Training & Enablement',
    color: 'var(--color-accent-teal)',
    desc: 'Live virtual training, on-demand video courses, and custom playbooks tailored to each role in your organization.',
    features: ['Role-based training programs', 'Live virtual instructor sessions', 'Self-paced video library (150+ lessons)', 'Admin certification program', 'Ongoing lunch-and-learn sessions'],
  },
  {
    icon: Wrench,
    title: 'Custom Development',
    color: 'var(--color-accent-violet)',
    desc: 'Need a module that doesn\'t exist yet? Our engineering team builds custom extensions, integrations, and workflows on your timeline.',
    features: ['Custom module development', 'API integration with third-party tools', 'ERP/accounting system connectors', 'Custom report & dashboard builds', 'White-label configurations'],
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence & Analytics',
    color: 'var(--color-accent-amber)',
    desc: 'Turn your TechLeeq data into strategic insight with our BI consulting team. We build dashboards that actually get used.',
    features: ['KPI dashboard design', 'Executive reporting templates', 'Data warehouse connectors', 'Automated scheduled reports', 'Predictive analytics models'],
  },
  {
    icon: RefreshCw,
    title: 'Managed Updates & Maintenance',
    color: 'var(--color-accent-green)',
    desc: 'Let our ops team handle version upgrades, patch deployments, and database maintenance on your schedule, not ours.',
    features: ['Scheduled update deployments', 'Zero-downtime upgrade process', 'Database optimization & cleanup', 'Configuration backup & recovery', 'Change management advisory'],
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance Advisory',
    color: 'var(--color-accent-red)',
    desc: 'Our compliance specialists help you meet local regulatory requirements — from NDPR to GDPR — and prepare for security audits.',
    features: ['NDPR / GDPR compliance review', 'SOC 2 audit preparation', 'Penetration testing support', 'Access control policy design', 'Data residency configuration'],
  },
];

const supportTiers = [
  {
    name: 'Standard',
    hours: 'Business hours',
    response: '< 24 hours',
    channels: 'Email',
    sla: '99.5%',
    plan: 'Starter plans',
  },
  {
    name: 'Priority',
    hours: 'Extended (8am–10pm)',
    response: '< 4 hours',
    channels: 'Email + Live Chat',
    sla: '99.9%',
    plan: 'Professional plans',
  },
  {
    name: 'Enterprise',
    hours: '24/7/365',
    response: '< 1 hour',
    channels: 'Email, Chat, Phone, Slack',
    sla: '99.99%',
    plan: 'Enterprise plans',
  },
];

const processSteps = [
  { step: '01', title: 'Discovery call', desc: 'We map your current workflows, pain points, and goals in a 60-minute session.' },
  { step: '02', title: 'Solution design', desc: 'Our team crafts a custom implementation plan with timeline, milestones, and cost breakdown.' },
  { step: '03', title: 'Phased rollout', desc: 'We deploy module by module to minimize disruption, with dedicated support at every phase.' },
  { step: '04', title: 'Ongoing success', desc: 'Quarterly business reviews, proactive health checks, and a named CSM to grow with you.' },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-[80px] px-[20px] md:px-[40px] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-40 pointer-events-none" />
        <div className="max-w-[800px] mx-auto relative z-10">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[rgba(10,132,255,0.12)] border border-[rgba(10,132,255,0.25)] text-[var(--color-primary)] text-[12px] tracking-[0.12em] uppercase font-medium">
            Professional Services
          </span>
          <h1 className="text-[42px] md:text-[56px] text-[var(--color-text-primary)] mb-5" style={{ letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-tight)' }}>
            We're with you from<br />
            <span className="gradient-text">day one to long-term</span>
          </h1>
          <p className="text-[18px] text-[var(--color-text-secondary)]">
            Software is only half the story. Our services team ensures you get maximum value — fast adoption, smooth operations, and measurable ROI.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, color, desc, features }) => (
            <div key={title} className="group p-8 rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)] hover:border-[rgba(10,132,255,0.3)] transition-all flex flex-col">
              <div className="w-12 h-12 rounded-[var(--radius-lg)] flex items-center justify-center mb-5" style={{ background: `color-mix(in srgb, ${color} 15%, transparent)` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="text-[18px] font-semibold text-[var(--color-text-primary)] mb-3">{title}</h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed mb-5">{desc}</p>
              <ul className="space-y-2 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color }} />
                    <span className="text-[13px] text-[var(--color-text-secondary)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[40px] text-[var(--color-text-primary)] mb-3" style={{ letterSpacing: 'var(--tracking-tight)' }}>How we work with you</h2>
            <p className="text-[var(--color-text-secondary)]">A structured process built around your timeline and goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative flex flex-col items-center text-center px-6">
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-[28px] w-1/2 h-px bg-[var(--color-bg-border)]" />
                )}
                <div className="w-14 h-14 rounded-full bg-[rgba(10,132,255,0.12)] border border-[rgba(10,132,255,0.25)] flex items-center justify-center mb-4 z-10">
                  <span className="font-['Syne'] font-bold text-[var(--color-primary)] text-[14px]">{step.step}</span>
                </div>
                <h4 className="text-[15px] font-semibold text-[var(--color-text-primary)] mb-2">{step.title}</h4>
                <p className="text-[13px] text-[var(--color-text-secondary)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support tiers */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <Clock size={18} className="text-[var(--color-primary)]" />
              <span className="text-[12px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] font-semibold">Support SLAs</span>
            </div>
            <h2 className="text-[32px] md:text-[40px] text-[var(--color-text-primary)]" style={{ letterSpacing: 'var(--tracking-tight)' }}>Support that matches your needs</h2>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-bg-border)] overflow-hidden">
            <div className="grid grid-cols-4 bg-[var(--color-bg-elevated)] border-b border-[var(--color-bg-border)] p-5 text-[12px] uppercase tracking-[0.1em] text-[var(--color-text-muted)] font-semibold">
              <div>Tier</div>
              <div>Response time</div>
              <div>Channels</div>
              <div>Uptime SLA</div>
            </div>
            {supportTiers.map((tier, i) => (
              <div key={tier.name} className={`grid grid-cols-4 p-5 border-b border-[var(--color-bg-border)] last:border-b-0 items-center ${i === 2 ? 'bg-[rgba(10,132,255,0.04)]' : ''}`}>
                <div>
                  <p className={`text-[15px] font-semibold ${i === 2 ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-primary)]'}`}>{tier.name}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{tier.plan}</p>
                </div>
                <div>
                  <p className="text-[14px] text-[var(--color-accent-green)] font-semibold">{tier.response}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{tier.hours}</p>
                </div>
                <div className="text-[13px] text-[var(--color-text-secondary)]">{tier.channels}</div>
                <div className="text-[14px] font-semibold text-[var(--color-text-primary)]">{tier.sla}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Users2 size={20} className="text-[var(--color-primary)]" />
            <h2 className="text-[24px] font-semibold text-[var(--color-text-primary)]">Certified Partners</h2>
          </div>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Don't need a full professional services engagement? Our network of 120+ certified implementation partners spans 18 countries, offering local expertise and language support.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="md">Find a Partner Near You <ArrowUpRight size={16} /></Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[20px] md:px-[40px] pb-[100px]">
        <div className="max-w-[700px] mx-auto rounded-[var(--radius-2xl)] border border-[rgba(10,132,255,0.3)] p-12 text-center" style={{ background: 'linear-gradient(135deg, rgba(10,132,255,0.08) 0%, rgba(124,92,252,0.08) 100%)' }}>
          <h2 className="text-[28px] text-[var(--color-text-primary)] mb-3" style={{ letterSpacing: 'var(--tracking-tight)' }}>Ready to get started?</h2>
          <p className="text-[var(--color-text-secondary)] mb-6">Schedule a free discovery call with our implementation team.</p>
          <Link to="/contact">
            <Button variant="primary" size="lg">Book a Discovery Call</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
