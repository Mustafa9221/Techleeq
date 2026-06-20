import { useState } from 'react';
import { Link } from 'react-router';
import {
  Package, DollarSign, Users, FolderKanban, ShoppingCart, BarChart3, Settings, ChevronRight, Check, PlayCircle
} from 'lucide-react';
import { Button } from '../components/Button';

export const modules = [
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

        </div>
      </section>

      {/* Products Grid */}
      <section className="px-[20px] md:px-[40px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map(({ id, icon: Icon, name, tagline, color }) => (
              <div key={id} className="bg-[var(--color-bg-surface)] border border-[var(--color-bg-border)] rounded-[var(--radius-xl)] p-8 flex flex-col h-full hover:border-[rgba(10,132,255,0.3)] hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 mb-6" style={{ background: `color-mix(in srgb, ${color} 15%, transparent)` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 className="text-[18px] font-bold text-[var(--color-text-primary)] mb-3">{name}</h3>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-8">{tagline}</p>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <Link to="/download">
                    <Button variant="primary" size="md" className="w-full">
                      Buy
                    </Button>
                  </Link>
                  <Link to={`/products/${id}`}>
                    <Button variant="secondary" size="md" className="w-full">
                      Detail
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
