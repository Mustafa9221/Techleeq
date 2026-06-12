import { Link } from 'react-router';
import {
  Headphones, BookOpen, Wrench, ArrowUpRight, BarChart3, RefreshCw, ShieldCheck, Users2, Clock, CheckCircle2
} from 'lucide-react';
import { Button } from '../components/Button';

const services = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
    title: 'Implementation & Onboarding',
    color: 'var(--color-primary)',
    desc: 'Our certified implementation specialists handle the full rollout — from data migration to staff training — so your team is productive from day one.',
    features: ['Dedicated project manager', 'Data migration from legacy systems', 'Custom workflow configuration', 'Multi-site rollout coordination', 'Go-live support & hypercare'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
    title: 'Training & Enablement',
    color: 'var(--color-accent-teal)',
    desc: 'Live virtual training, on-demand video courses, and custom playbooks tailored to each role in your organization.',
    features: ['Role-based training programs', 'Live virtual instructor sessions', 'Self-paced video library (150+ lessons)', 'Admin certification program', 'Ongoing lunch-and-learn sessions'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
    title: 'Custom Development',
    color: 'var(--color-accent-violet)',
    desc: 'Need a module that doesn\'t exist yet? Our engineering team builds custom extensions, integrations, and workflows on your timeline.',
    features: ['Custom module development', 'API integration with third-party tools', 'ERP/accounting system connectors', 'Custom report & dashboard builds', 'White-label configurations'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    title: 'Business Intelligence & Analytics',
    color: 'var(--color-accent-amber)',
    desc: 'Turn your TechLeeq data into strategic insight with our BI consulting team. We build dashboards that actually get used.',
    features: ['KPI dashboard design', 'Executive reporting templates', 'Data warehouse connectors', 'Automated scheduled reports', 'Predictive analytics models'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop',
    title: 'Managed Updates & Maintenance',
    color: 'var(--color-accent-green)',
    desc: 'Let our ops team handle version upgrades, patch deployments, and database maintenance on your schedule, not ours.',
    features: ['Scheduled update deployments', 'Zero-downtime upgrade process', 'Database optimization & cleanup', 'Configuration backup & recovery', 'Change management advisory'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop',
    title: 'Security & Compliance Advisory',
    color: 'var(--color-accent-red)',
    desc: 'Our compliance specialists help you meet local regulatory requirements — from NDPR to GDPR — and prepare for security audits.',
    features: ['NDPR / GDPR compliance review', 'SOC 2 audit preparation', 'Penetration testing support', 'Access control policy design', 'Data residency configuration'],
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
          {services.map(({ imageUrl, title, color, desc, features }) => (
            <div key={title} className="group p-8 rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)] hover:border-[rgba(10,132,255,0.3)] transition-all flex flex-col overflow-hidden">
              <div className="w-[calc(100%+4rem)] h-[180px] -mt-8 -mx-8 mb-6 relative max-w-none">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-surface)] to-transparent" />
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
