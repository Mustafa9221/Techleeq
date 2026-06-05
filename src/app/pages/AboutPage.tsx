import { Link } from 'react-router';
import { Target, Users, Globe2, Award, ArrowRight, Lightbulb, Shield, Zap } from 'lucide-react';
import { Button } from '../components/Button';

const timeline = [
  { year: '2018', title: 'Founded in Lagos', desc: 'TechLeeq was founded by a team of enterprise software veterans frustrated with the complexity and cost of existing business management tools.' },
  { year: '2019', title: 'First 100 customers', desc: 'Launched the beta version to early adopters across Nigeria and Ghana. Reached 100 paying customers within 6 months.' },
  { year: '2020', title: 'Series A funding', desc: 'Raised $4.2M to expand the product team and accelerate development of the enterprise module suite.' },
  { year: '2021', title: 'Expansion to 12 countries', desc: 'Launched across East and West Africa with localized compliance modules. Passed 10,000 active users.' },
  { year: '2022', title: 'Professional v3.0 released', desc: 'Major platform overhaul with the full module suite, offline-first architecture, and end-to-end encryption.' },
  { year: '2023', title: 'ISO 27001 certified', desc: 'Achieved ISO 27001 information security certification and SOC 2 Type II compliance, clearing the path for enterprise deals.' },
  { year: '2024', title: '50,000+ businesses served', desc: 'TechLeeq is now the fastest-growing business management platform in sub-Saharan Africa.' },
];

const values = [
  { icon: Lightbulb, title: 'Simplicity first', desc: 'Enterprise power should not require enterprise complexity. We obsess over usability so your team can focus on work, not software.' },
  { icon: Shield, title: 'Security by design', desc: 'Data stays local by default. Every feature is built with security as a constraint, not an afterthought.' },
  { icon: Zap, title: 'Performance everywhere', desc: 'Works offline, launches fast, and never holds your operations hostage to an internet connection.' },
  { icon: Globe2, title: 'Built for emerging markets', desc: 'We design for the realities of variable connectivity, local compliance, and growing teams.' },
];

const team = [
  { name: 'Emeka Okafor', title: 'CEO & Co-Founder', bio: 'Former Head of Engineering at Interswitch. 15 years building enterprise software across Africa and Europe.' },
  { name: 'Amira Hassan', title: 'CPO & Co-Founder', bio: 'Previously led product at Flutterwave. Deep expertise in fintech and business workflow design.' },
  { name: 'Kofi Mensah', title: 'CTO', bio: 'Distributed systems engineer, ex-Andela. Architect of TechLeeq\'s offline-first sync engine.' },
  { name: 'Priya Sharma', title: 'VP Sales', bio: 'Scaled sales teams at SAP and Oracle across EMEA. Joined TechLeeq to bring enterprise sales discipline to a lean company.' },
  { name: 'Fatima Al-Rashid', title: 'Head of Customer Success', bio: 'Passionate about turning customers into champions. Built CS from 0 to 50+ at Paystack.' },
  { name: 'David Nkosi', title: 'Head of Design', bio: 'Ex-IDEO and Google. Leads the vision for TechLeeq\'s design system and user experience.' },
];

const stats = [
  { value: '50,000+', label: 'Businesses served' },
  { value: '22', label: 'Countries' },
  { value: '4.8★', label: 'Average rating' },
  { value: '99.97%', label: 'Uptime SLA' },
];

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-[80px] px-[20px] md:px-[40px] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-40 pointer-events-none" />
        <div className="max-w-[800px] mx-auto relative z-10">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[rgba(10,132,255,0.12)] border border-[rgba(10,132,255,0.25)] text-[var(--color-primary)] text-[12px] tracking-[0.12em] uppercase font-medium">
            Our Story
          </span>
          <h1 className="text-[42px] md:text-[56px] text-[var(--color-text-primary)] mb-5" style={{ letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-tight)' }}>
            We're building the operating system<br />
            <span className="gradient-text">for African business</span>
          </h1>
          <p className="text-[18px] text-[var(--color-text-secondary)] mb-8">
            TechLeeq was born from a simple frustration: world-class business software shouldn't require a world-class IT department.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-[var(--radius-xl)] border border-[var(--color-bg-border)] bg-[var(--color-bg-surface)] p-6 text-center">
              <p className="text-[36px] font-bold text-[var(--color-primary)] mb-1" style={{ fontFamily: 'Syne' }}>{s.value}</p>
              <p className="text-[13px] text-[var(--color-text-secondary)]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <Target size={18} className="text-[var(--color-primary)]" />
              <span className="text-[12px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] font-semibold">Our Mission</span>
            </div>
            <h2 className="text-[34px] text-[var(--color-text-primary)] mb-5" style={{ letterSpacing: 'var(--tracking-tight)' }}>
              Democratize enterprise-grade software for every business
            </h2>
            <p className="text-[16px] text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Legacy ERP systems cost hundreds of thousands to deploy and months to learn. Cloud-first SaaS tools fail when connectivity does. Small and mid-sized businesses are caught between unaffordable enterprise software and inadequate consumer tools.
            </p>
            <p className="text-[16px] text-[var(--color-text-secondary)] leading-relaxed">
              TechLeeq is different: a professional-grade, offline-first desktop platform that works the way your business works — fast, reliable, and completely under your control.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)]">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[rgba(10,132,255,0.12)] flex items-center justify-center mb-3">
                  <Icon size={18} className="text-[var(--color-primary)]" />
                </div>
                <h4 className="text-[14px] font-semibold text-[var(--color-text-primary)] mb-1">{title}</h4>
                <p className="text-[12px] text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[40px] text-[var(--color-text-primary)] mb-3" style={{ letterSpacing: 'var(--tracking-tight)' }}>Our journey</h2>
            <p className="text-[var(--color-text-secondary)]">From a Lagos apartment to 50,000+ businesses worldwide.</p>
          </div>
          <div className="relative">
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-bg-border)] md:-translate-x-px" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-bg-base)] z-10 top-1" />
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <span className="inline-block mb-2 px-3 py-1 rounded-full bg-[rgba(10,132,255,0.12)] text-[var(--color-primary)] text-[12px] font-semibold">{item.year}</span>
                    <h4 className="text-[16px] font-semibold text-[var(--color-text-primary)] mb-1">{item.title}</h4>
                    <p className="text-[13px] text-[var(--color-text-secondary)]">{item.desc}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <Users size={18} className="text-[var(--color-primary)]" />
              <span className="text-[12px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] font-semibold">Leadership</span>
            </div>
            <h2 className="text-[32px] md:text-[40px] text-[var(--color-text-primary)]" style={{ letterSpacing: 'var(--tracking-tight)' }}>Meet the team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)] hover:border-[rgba(10,132,255,0.3)] transition-all">
                <div className="w-14 h-14 rounded-full bg-[var(--color-bg-elevated)] flex items-center justify-center mb-4 text-[20px] font-bold text-[var(--color-primary)]" style={{ fontFamily: 'Syne' }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-[16px] font-semibold text-[var(--color-text-primary)] mb-0.5">{member.name}</h4>
                <p className="text-[12px] text-[var(--color-primary)] font-medium mb-3">{member.title}</p>
                <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Award size={20} className="text-[var(--color-accent-amber)]" />
            <h2 className="text-[24px] font-semibold text-[var(--color-text-primary)]">Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { award: 'Best Business Software 2024', org: 'Africa Tech Summit' },
              { award: 'Top 50 SaaS Startups', org: 'TechCrunch Africa' },
              { award: 'Gartner Cool Vendor', org: 'Gartner Research 2023' },
            ].map((a) => (
              <div key={a.award} className="p-5 rounded-[var(--radius-lg)] bg-[rgba(245,166,35,0.06)] border border-[rgba(245,166,35,0.2)] flex items-start gap-4">
                <Award size={22} className="text-[var(--color-accent-amber)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-semibold text-[var(--color-text-primary)] mb-0.5">{a.award}</p>
                  <p className="text-[12px] text-[var(--color-text-muted)]">{a.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[20px] md:px-[40px] pb-[100px]">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-[30px] text-[var(--color-text-primary)] mb-4" style={{ letterSpacing: 'var(--tracking-tight)' }}>Ready to join 50,000+ businesses?</h2>
          <p className="text-[var(--color-text-secondary)] mb-8">Start your free 14-day trial. No credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/download"><Button variant="primary" size="lg">Start Free Trial</Button></Link>
            <Link to="/careers"><Button variant="secondary" size="lg">Join Our Team <ArrowRight size={16} /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
