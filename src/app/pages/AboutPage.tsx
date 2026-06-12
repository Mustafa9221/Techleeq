import { Link } from 'react-router';
import { Target, Users, Globe2, Award, ArrowRight, Lightbulb, Shield, Zap, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../components/Button';

const values = [
  { icon: Lightbulb, title: 'Simplicity first', desc: 'Enterprise power should not require enterprise complexity. We obsess over usability so your team can focus on work, not software.' },
  { icon: Shield, title: 'Security by design', desc: 'Data stays local by default. Every feature is built with security as a constraint, not an afterthought.' },
  { icon: Zap, title: 'Performance everywhere', desc: 'Works offline, launches fast, and never holds your operations hostage to an internet connection.' },
  { icon: Globe2, title: 'Built for emerging markets', desc: 'We design for the realities of variable connectivity, local compliance, and growing teams.' },
];

const team = [
  { 
    name: 'Emeka Okafor', 
    title: 'CEO & Co-Founder', 
    bio: 'Former Head of Engineering at Interswitch. 15 years building enterprise software across Africa and Europe.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
    twitter: '#',
    linkedin: '#'
  },
  { 
    name: 'Amira Hassan', 
    title: 'CPO & Co-Founder', 
    bio: 'Previously led product at Flutterwave. Deep expertise in fintech and business workflow design.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    twitter: '#',
    linkedin: '#'
  },
  { 
    name: 'Kofi Mensah', 
    title: 'CTO', 
    bio: 'Distributed systems engineer, ex-Andela. Architect of TechLeeq\'s offline-first sync engine.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    twitter: '#',
    linkedin: '#'
  },
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)] hover:border-[rgba(10,132,255,0.3)] transition-all flex flex-col items-center text-center">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-5 border-4 border-[rgba(10,132,255,0.08)]">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-[18px] font-semibold text-[var(--color-text-primary)] mb-1">{member.name}</h4>
                <p className="text-[13px] text-[var(--color-primary)] font-medium mb-4">{member.title}</p>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed mb-6">{member.bio}</p>
                <div className="flex gap-4 mt-auto">
                  <a href={member.twitter} className="w-8 h-8 rounded-full bg-[rgba(10,132,255,0.08)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[rgba(10,132,255,0.15)] transition-all">
                    <Twitter size={16} />
                  </a>
                  <a href={member.linkedin} className="w-8 h-8 rounded-full bg-[rgba(10,132,255,0.08)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[rgba(10,132,255,0.15)] transition-all">
                    <Linkedin size={16} />
                  </a>
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
            <Link to="/products"><Button variant="primary" size="lg">Start Free Trial</Button></Link>
            <Link to="/careers"><Button variant="secondary" size="lg">Join Our Team <ArrowRight size={16} /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
