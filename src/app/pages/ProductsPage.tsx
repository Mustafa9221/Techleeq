import { useState } from 'react';
import { Link } from 'react-router';
import {
  Package, DollarSign, Users, FolderKanban, ShoppingCart, BarChart3, Settings, ChevronRight, Check, PlayCircle
} from 'lucide-react';
import { Button } from '../components/Button';

const modules = [
  {
    id: 'inventory',
    icon: Package,
    name: 'Inventory Management',
    tagline: 'Never run out. Never overstock.',
    color: 'var(--color-primary)',
    desc: 'Real-time stock tracking across multiple warehouses, automated reorder alerts, batch/serial tracking, and supplier management — all in one place.',
    features: [
      'Multi-warehouse stock tracking',
      'Automated reorder point alerts',
      'Batch & serial number tracking',
      'Supplier & purchase order management',
      'Barcode / QR code scanning support',
      'Stock valuation (FIFO, LIFO, Average)',
    ],
    stat: { value: '32%', label: 'avg. reduction in stockouts' },
  },
  {
    id: 'finance',
    icon: DollarSign,
    name: 'Finance & Accounting',
    tagline: 'Books that close themselves.',
    color: 'var(--color-accent-green)',
    desc: 'Double-entry accounting, multi-currency support, tax compliance across 22 countries, automated bank reconciliation, and audit-ready financial reports.',
    features: [
      'Double-entry ledger',
      'Multi-currency with live FX rates',
      'Tax management (VAT, WHT, GST)',
      'Automated bank reconciliation',
      'Profit & loss, balance sheet, cash flow',
      'Audit trail & compliance reports',
    ],
    stat: { value: '8hrs', label: 'saved on month-end close' },
  },
  {
    id: 'crm',
    icon: Users,
    name: 'CRM & Sales',
    tagline: 'Close more, track everything.',
    color: 'var(--color-accent-teal)',
    desc: 'Visual deal pipeline, contact management, activity logging, automated follow-up reminders, and sales performance dashboards.',
    features: [
      'Visual drag-and-drop pipeline',
      'Contact & company management',
      'Activity logging (calls, meetings, emails)',
      'Automated follow-up reminders',
      'Quotation & invoice generation',
      'Sales leaderboard & forecasting',
    ],
    stat: { value: '24%', label: 'increase in close rate' },
  },
  {
    id: 'projects',
    icon: FolderKanban,
    name: 'Project Management',
    tagline: 'From kickoff to delivery.',
    color: 'var(--color-accent-violet)',
    desc: 'Kanban boards, Gantt charts, task dependencies, resource allocation, time tracking, and client billing — all tied to your financial module.',
    features: [
      'Kanban & Gantt views',
      'Task dependencies & milestones',
      'Resource allocation & capacity planning',
      'Time tracking & timesheets',
      'Budget tracking vs. actuals',
      'Client portal & progress sharing',
    ],
    stat: { value: '18%', label: 'improvement in on-time delivery' },
  },
  {
    id: 'hr',
    icon: Users,
    name: 'HR & Payroll',
    tagline: 'People operations, simplified.',
    color: 'var(--color-accent-amber)',
    desc: 'Employee records, leave management, payroll processing with automatic deductions, payslip generation, and compliance with local labor laws.',
    features: [
      'Employee profiles & org chart',
      'Leave request & approval workflows',
      'Payroll processing with tax deductions',
      'Payslip generation & distribution',
      'Attendance tracking & shift scheduling',
      'Performance review cycles',
    ],
    stat: { value: '95%', label: 'reduction in payroll errors' },
  },
  {
    id: 'pos',
    icon: ShoppingCart,
    name: 'Point of Sale (POS)',
    tagline: 'Fast transactions, even offline.',
    color: '#FF6B6B',
    desc: 'Touchscreen-optimized POS that works fully offline, syncs when connected, integrates with inventory and finance in real time.',
    features: [
      'Touchscreen-optimized interface',
      'Full offline operation',
      'Real-time inventory sync',
      'Multiple payment methods',
      'Loyalty program integration',
      'End-of-day reconciliation',
    ],
    stat: { value: '2s', label: 'average transaction time' },
  },
];

const integrations = [
  'QuickBooks', 'Xero', 'Sage', 'Flutterwave', 'Paystack', 'Stripe',
  'Shopify', 'WooCommerce', 'Slack', 'Microsoft 365', 'Google Workspace', 'Zapier',
];

export function ProductsPage() {
  const [activeModule, setActiveModule] = useState('inventory');
  const active = modules.find((m) => m.id === activeModule)!;
  const ActiveIcon = active.icon;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-[80px] px-[20px] md:px-[40px] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-40 pointer-events-none" />
        <div className="max-w-[800px] mx-auto relative z-10">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[rgba(10,132,255,0.12)] border border-[rgba(10,132,255,0.25)] text-[var(--color-primary)] text-[12px] tracking-[0.12em] uppercase font-medium">
            The Platform
          </span>
          <h1 className="text-[42px] md:text-[56px] text-[var(--color-text-primary)] mb-5" style={{ letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-tight)' }}>
            One platform.<br />
            <span className="gradient-text">Every business function.</span>
          </h1>
          <p className="text-[18px] text-[var(--color-text-secondary)] mb-8">
            Six fully integrated modules that replace a stack of disconnected tools. Data flows seamlessly between them so you never duplicate work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/download"><Button variant="primary" size="lg">Try All Modules Free</Button></Link>
            <button className="flex items-center gap-2 px-6 py-3 rounded-[var(--radius-lg)] border border-[var(--color-bg-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-primary)] transition-all">
              <PlayCircle size={18} className="text-[var(--color-primary)]" />
              Watch product tour
            </button>
          </div>
        </div>
      </section>

      {/* Module explorer */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-6">
            {/* Sidebar */}
            <div className="flex flex-col gap-2">
              {modules.map(({ id, icon: Icon, name, color }) => (
                <button
                  key={id}
                  onClick={() => setActiveModule(id)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-[var(--radius-lg)] text-left transition-all ${
                    activeModule === id
                      ? 'bg-[var(--color-bg-elevated)] border border-[rgba(10,132,255,0.3)]'
                      : 'hover:bg-[var(--color-bg-surface)] border border-transparent'
                  }`}
                >
                  <div className="w-9 h-9 rounded-[var(--radius-md)] flex items-center justify-center shrink-0" style={{ background: `color-mix(in srgb, ${color} 15%, transparent)` }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  <span className={`text-[14px] font-medium ${activeModule === id ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'}`}>{name}</span>
                  {activeModule === id && <ChevronRight size={16} className="text-[var(--color-text-muted)] ml-auto" />}
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-bg-border)] bg-[var(--color-bg-surface)] p-8 flex flex-col gap-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-[var(--radius-lg)] flex items-center justify-center shrink-0" style={{ background: `color-mix(in srgb, ${active.color} 15%, transparent)` }}>
                  <ActiveIcon size={26} style={{ color: active.color }} />
                </div>
                <div>
                  <h2 className="text-[24px] font-bold text-[var(--color-text-primary)] mb-1">{active.name}</h2>
                  <p className="text-[15px] font-medium" style={{ color: active.color }}>{active.tagline}</p>
                </div>
                <div className="ml-auto text-right shrink-0">
                  <p className="text-[28px] font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'Syne' }}>{active.stat.value}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)]">{active.stat.label}</p>
                </div>
              </div>

              <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">{active.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {active.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check size={15} className="shrink-0 mt-0.5" style={{ color: active.color }} />
                    <span className="text-[13px] text-[var(--color-text-secondary)]">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <Link to="/download"><Button variant="primary" size="md">Try this module free</Button></Link>
                <Link to="/contact"><Button variant="secondary" size="md">Request a demo</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics highlight */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="rounded-[var(--radius-2xl)] border border-[var(--color-bg-border)] bg-[var(--color-bg-surface)] p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <BarChart3 size={18} className="text-[var(--color-accent-amber)]" />
                <span className="text-[12px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] font-semibold">Unified Analytics</span>
              </div>
              <h2 className="text-[30px] font-bold text-[var(--color-text-primary)] mb-4" style={{ letterSpacing: 'var(--tracking-tight)' }}>Every metric. One dashboard.</h2>
              <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed mb-6">
                TechLeeq's analytics layer aggregates data across all modules — giving you a real-time executive view of your entire business without exporting to spreadsheets.
              </p>
              <ul className="space-y-2.5">
                {['Cross-module KPI dashboards', 'Drill-down from summary to transaction', 'Exportable to Excel, PDF, CSV', 'Scheduled email reports'].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check size={15} className="text-[var(--color-accent-amber)] shrink-0" />
                    <span className="text-[13px] text-[var(--color-text-secondary)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Revenue this month', value: '₦14.2M', change: '+12%' },
                { label: 'Active customers', value: '1,847', change: '+5%' },
                { label: 'Inventory turnover', value: '4.2x', change: '+0.3x' },
                { label: 'Avg deal size', value: '₦320K', change: '+8%' },
              ].map((metric) => (
                <div key={metric.label} className="p-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-elevated)] border border-[var(--color-bg-border)]">
                  <p className="text-[11px] text-[var(--color-text-muted)] mb-2">{metric.label}</p>
                  <p className="text-[22px] font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'Syne' }}>{metric.value}</p>
                  <p className="text-[12px] text-[var(--color-accent-green)] mt-1">{metric.change} vs last month</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <Settings size={18} className="text-[var(--color-primary)]" />
            <span className="text-[12px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] font-semibold">Integrations</span>
          </div>
          <h2 className="text-[28px] font-bold text-[var(--color-text-primary)] mb-3" style={{ letterSpacing: 'var(--tracking-tight)' }}>Connects with the tools you already use</h2>
          <p className="text-[var(--color-text-secondary)] mb-8">100+ native integrations and a full REST API for everything else.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((name) => (
              <div key={name} className="px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)] text-[13px] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-primary)] transition-all cursor-default">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[20px] md:px-[40px] pb-[100px]">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-[30px] text-[var(--color-text-primary)] mb-4" style={{ letterSpacing: 'var(--tracking-tight)' }}>Ready to see it for yourself?</h2>
          <p className="text-[var(--color-text-secondary)] mb-8">Download TechLeeq and explore every module for free for 14 days.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/download"><Button variant="primary" size="lg">Download Free Trial</Button></Link>
            <Link to="/pricing"><Button variant="secondary" size="lg">See Pricing</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
