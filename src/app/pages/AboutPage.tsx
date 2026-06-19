import { Link } from 'react-router';
import { Target, Users, Globe2, ArrowRight, Lightbulb, Shield, Zap, Instagram, Facebook, Linkedin, Globe } from 'lucide-react';
import { Button } from '../components/Button';

const values = [
  { icon: Lightbulb, title: 'Creativity First', desc: "We don't just write lines of code. We obsess over the user experience, ensuring your software is beautifully designed, highly intuitive, and enjoyable for your team to use." },
  { icon: Shield, title: 'Built to Scale', desc: 'We engineer our products and services using modern, secure tech stacks. As your business grows, your Techleeq software smoothly evolves right alongside you.' },
  { icon: Zap, title: 'Agile & Transparent', desc: 'Being a focused, energetic team means we move fast. You get direct collaboration, rapid feature deployment, and absolute transparency at every single milestone.' },
  { icon: Globe2, title: 'The Perfect Hybrid', desc: 'Whether you need a bespoke application built from scratch or want to plug into our ready-to-go software products, we provide a complete technical ecosystem under one roof.' },
];

const team = [
  {
    name: 'Abdullah Bilal',
    title: 'Founder & CEO',
    bio: 'Business Management expert and AI/ML Engineer. Abdullah brings visionary leadership and technical depth, steering Techleeq to innovate at the intersection of AI and business strategy.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    portfolio: '#'
  },
  {
    name: 'Mustafa',
    title: 'CTO (Chief Technical Officer)',
    bio: 'Mustafa is a full-stack powerhouse with a passion for building robust, high-performance systems. He leads our engineering efforts, ensuring every line of code meets the highest standards.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    portfolio: '#'
  },
  {
    name: 'Hamza',
    title: 'COO (Chief Operation Officer)',
    bio: 'Hamza is the operational backbone of Techleeq, with extensive experience in streamlining workflows and scaling operations. He ensures seamless project delivery and exceptional client satisfaction.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    portfolio: '#'
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
            We are engineering the future<br />
            <span className="gradient-text">where creativity meets tech</span>
          </h1>
          <p className="text-[18px] text-[var(--color-text-secondary)] mb-8 leading-relaxed max-w-[700px] mx-auto">
            Techleeq was born out of a simple vision: high-performance software shouldn't look rigid, and creative ideas shouldn't lack technical power. We build elite digital products and bespoke solutions that push businesses forward.
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
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <Target size={18} className="text-[var(--color-primary)]" />
              <span className="text-[12px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] font-semibold">Our Mission</span>
            </div>
            <h2 className="text-[34px] text-[var(--color-text-primary)] mb-5" style={{ letterSpacing: 'var(--tracking-tight)' }}>
              Making world-class software accessible to growing brands.
            </h2>
            <p className="text-[16px] text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Great ideas often get trapped behind overly complicated technology or massive price tags. At Techleeq, we are changing that. We don't believe in rigid, one-size-fits-all solutions that are impossible to navigate.
            </p>
            <p className="text-[16px] text-[var(--color-text-secondary)] leading-relaxed">
              We are a dynamic, agile team built to bridge the gap. By combining intentional, creative design with robust modern engineering, we deliver custom software services and innovative digital products that give your business the ultimate competitive edge—without the enterprise headache.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)]">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[rgba(10,132,255,0.12)] flex items-center justify-center mb-3">
                  <Icon size={18} className="text-[var(--color-primary)]" />
                </div>
                <h4 className="text-[15px] font-semibold text-[var(--color-text-primary)] mb-2">{title}</h4>
                <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)] hover:border-[rgba(10,132,255,0.3)] transition-all flex flex-col items-center text-center">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-5 border-4 border-[rgba(10,132,255,0.08)]">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-[18px] font-semibold text-[var(--color-text-primary)] mb-1">{member.name}</h4>
                <p className="text-[13px] text-[var(--color-primary)] font-medium mb-4">{member.title}</p>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed mb-6">{member.bio}</p>
                <div className="flex gap-3 mt-auto">
                  <a href={member.instagram} className="w-8 h-8 rounded-full bg-[rgba(10,132,255,0.08)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[rgba(10,132,255,0.15)] transition-all" aria-label="Instagram">
                    <Instagram size={15} />
                  </a>
                  <a href={member.facebook} className="w-8 h-8 rounded-full bg-[rgba(10,132,255,0.08)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[rgba(10,132,255,0.15)] transition-all" aria-label="Facebook">
                    <Facebook size={15} />
                  </a>
                  <a href={member.linkedin} className="w-8 h-8 rounded-full bg-[rgba(10,132,255,0.08)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[rgba(10,132,255,0.15)] transition-all" aria-label="LinkedIn">
                    <Linkedin size={15} />
                  </a>
                  <a href={member.portfolio} className="w-8 h-8 rounded-full bg-[rgba(10,132,255,0.08)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[rgba(10,132,255,0.15)] transition-all" aria-label="Portfolio">
                    <Globe size={15} />
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
