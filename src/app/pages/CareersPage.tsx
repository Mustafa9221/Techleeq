import { useState } from 'react';
import { Link } from 'react-router';
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp, ArrowRight, Heart, Globe2, TrendingUp, Coffee } from 'lucide-react';
import { Button } from '../components/Button';

const departments = ['All', 'Engineering', 'Product', 'Sales', 'Customer Success', 'Design', 'Operations'];

const jobs = [
  { id: 1, title: 'Senior Full-Stack Engineer', dept: 'Engineering', location: 'Lagos / Remote', type: 'Full-time', level: 'Senior', desc: 'Build the core modules of our desktop application using Electron, React, and Node.js. Own features end-to-end from design through deployment.' },
  { id: 2, title: 'Backend Engineer – Sync Engine', dept: 'Engineering', location: 'Remote', type: 'Full-time', level: 'Senior', desc: 'Design and scale our offline-sync infrastructure. Experience with CRDTs, conflict resolution, and distributed data systems preferred.' },
  { id: 3, title: 'Mobile Engineer (React Native)', dept: 'Engineering', location: 'Remote', type: 'Full-time', level: 'Mid', desc: 'Build the companion mobile app for iOS and Android. Tight integration with the desktop product and real-time notifications.' },
  { id: 4, title: 'Product Manager – Finance Module', dept: 'Product', location: 'Lagos', type: 'Full-time', level: 'Senior', desc: 'Own the roadmap and delivery for our finance and accounting module. Work closely with enterprise customers and engineering.' },
  { id: 5, title: 'Enterprise Account Executive', dept: 'Sales', location: 'Nairobi / Lagos', type: 'Full-time', level: 'Senior', desc: 'Close enterprise deals across East and West Africa. 5+ years B2B SaaS sales experience required.' },
  { id: 6, title: 'Customer Success Manager', dept: 'Customer Success', location: 'Remote', type: 'Full-time', level: 'Mid', desc: 'Own a portfolio of 50+ business accounts. Drive adoption, reduce churn, and identify expansion opportunities.' },
  { id: 7, title: 'Senior Product Designer', dept: 'Design', location: 'Remote', type: 'Full-time', level: 'Senior', desc: 'Lead UX research and interaction design for our desktop application. Proficiency in Figma and a strong systems-thinking mindset.' },
  { id: 8, title: 'DevOps Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time', level: 'Mid', desc: 'Manage CI/CD pipelines, cloud infrastructure, and deployment tooling for our desktop app release process.' },
  { id: 9, title: 'Sales Development Representative', dept: 'Sales', location: 'Lagos', type: 'Full-time', level: 'Junior', desc: 'Generate qualified pipeline for the enterprise sales team. Outbound prospecting, cold calling, and demo scheduling.' },
  { id: 10, title: 'Implementation Specialist', dept: 'Customer Success', location: 'Accra / Remote', type: 'Full-time', level: 'Mid', desc: 'Lead new customer implementations from kickoff to go-live. Strong project management and technical aptitude required.' },
];

const perks = [
  { icon: Globe2, title: 'Remote-first culture', desc: 'Work from anywhere in Africa or Europe. Our team spans 12 countries.' },
  { icon: TrendingUp, title: 'Equity for everyone', desc: 'Every full-time employee receives stock options, not just executives.' },
  { icon: Heart, title: 'Comprehensive health cover', desc: 'Full medical, dental, and vision for you and your dependants.' },
  { icon: Coffee, title: 'Learning budget', desc: '$2,000/year for courses, conferences, books, and certifications.' },
  { icon: Clock, title: 'Flexible hours', desc: 'We care about outcomes, not when you start your day.' },
  { icon: Briefcase, title: 'Home office stipend', desc: '$1,500 one-time setup allowance for new hires.' },
];

export function CareersPage() {
  const [activeDept, setActiveDept] = useState('All');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filtered = activeDept === 'All' ? jobs : jobs.filter((j) => j.dept === activeDept);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-[80px] px-[20px] md:px-[40px] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-40 pointer-events-none" />
        <div className="max-w-[800px] mx-auto relative z-10">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[rgba(10,132,255,0.12)] border border-[rgba(10,132,255,0.25)] text-[var(--color-primary)] text-[12px] tracking-[0.12em] uppercase font-medium">
            We're Hiring
          </span>
          <h1 className="text-[42px] md:text-[56px] text-[var(--color-text-primary)] mb-5" style={{ letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-tight)' }}>
            Help build the future of<br />
            <span className="gradient-text">African enterprise software</span>
          </h1>
          <p className="text-[18px] text-[var(--color-text-secondary)]">
            We're a team of 80+ people across 12 countries, building software that powers real businesses. Come make an impact.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-[20px] md:px-[40px] pb-[60px]">
        <div className="max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { v: '80+', l: 'Team members' },
            { v: '12', l: 'Countries' },
            { v: '4.7★', l: 'Glassdoor rating' },
            { v: '92%', l: 'Retention rate' },
          ].map((s) => (
            <div key={s.l} className="rounded-[var(--radius-lg)] border border-[var(--color-bg-border)] bg-[var(--color-bg-surface)] p-5 text-center">
              <p className="text-[28px] font-bold text-[var(--color-primary)]" style={{ fontFamily: 'Syne' }}>{s.v}</p>
              <p className="text-[12px] text-[var(--color-text-muted)] mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] font-bold text-[var(--color-text-primary)] mb-8 text-center" style={{ letterSpacing: 'var(--tracking-tight)' }}>Why TechLeeq?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)]">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[rgba(10,132,255,0.12)] flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[var(--color-text-primary)] mb-1">{title}</h4>
                  <p className="text-[13px] text-[var(--color-text-secondary)]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="px-[20px] md:px-[40px] pb-[100px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <h2 className="text-[28px] font-bold text-[var(--color-text-primary)]" style={{ letterSpacing: 'var(--tracking-tight)' }}>Open roles <span className="text-[var(--color-primary)]">({filtered.length})</span></h2>
            <div className="flex flex-wrap gap-2">
              {departments.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDept(d)}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                    activeDept === d
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filtered.map((job) => (
              <div key={job.id} className="rounded-[var(--radius-lg)] border border-[var(--color-bg-border)] bg-[var(--color-bg-surface)] overflow-hidden hover:border-[rgba(10,132,255,0.3)] transition-all">
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full flex flex-col md:flex-row md:items-center gap-3 md:gap-6 px-6 py-5 text-left"
                >
                  <div className="flex-1">
                    <h4 className="text-[16px] font-semibold text-[var(--color-text-primary)]">{job.title}</h4>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1.5 text-[12px] text-[var(--color-text-muted)]">
                        <MapPin size={12} />{job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px] text-[var(--color-text-muted)]">
                        <Clock size={12} />{job.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px] text-[var(--color-text-muted)]">
                        <Briefcase size={12} />{job.level}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-3 py-1 rounded-full bg-[rgba(10,132,255,0.1)] text-[var(--color-primary)] text-[11px] font-medium">{job.dept}</span>
                    {expandedJob === job.id ? <ChevronUp size={16} className="text-[var(--color-text-muted)]" /> : <ChevronDown size={16} className="text-[var(--color-text-muted)]" />}
                  </div>
                </button>
                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-[var(--color-bg-border)] pt-4">
                    <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed mb-4">{job.desc}</p>
                    <Link to="/contact">
                      <Button variant="primary" size="sm">Apply Now <ArrowRight size={14} /></Button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--color-text-muted)]">No open roles in this department right now.</p>
              <p className="text-[13px] text-[var(--color-text-muted)] mt-2">Send us your CV and we'll keep it on file.</p>
              <div className="mt-4">
                <Link to="/contact"><Button variant="secondary" size="md">Send Speculative Application</Button></Link>
              </div>
            </div>
          )}

          <div className="mt-12 p-8 rounded-[var(--radius-xl)] border border-[var(--color-bg-border)] bg-[var(--color-bg-surface)] text-center">
            <p className="text-[15px] text-[var(--color-text-secondary)] mb-2">Don't see the right role?</p>
            <p className="text-[13px] text-[var(--color-text-muted)] mb-5">We hire for attitude and aptitude. Send us your story.</p>
            <Link to="/contact"><Button variant="secondary" size="md">Send Speculative Application</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
