import { Download, Play, CheckCircle2, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './Button';
import { motion } from 'motion/react';

export function HeroSection() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 8 : 20;

  return (
    <section
      id="home"
      className="relative gradient-hero
        min-h-[700px] md:min-h-[800px] lg:min-h-[900px]
        flex items-center justify-center overflow-hidden"
    >
      {/* Animated Radial Glow Background - static on mobile */}
      <div
        className={`absolute inset-0 gradient-glow opacity-50 ${isMobile ? '' : 'animate-pulse'}`}
        style={{ animationDuration: '8s' }}
      ></div>

      {/* Subtle Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-text-primary) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Floating Particles - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden hide-mobile">
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--color-primary)] rounded-full opacity-60"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[860px] mx-auto
        px-[20px] md:px-[40px]
        py-[100px] md:py-[120px] lg:py-[140px] xl:py-[160px] 2xl:py-[180px]
        text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="inline-flex items-center gap-2
            px-3 py-1.5 md:px-4 md:py-2
            rounded-full border border-[rgba(10,132,255,0.3)] bg-[rgba(10,132,255,0.08)]
            text-[var(--color-primary)]
            text-[12px] md:text-[13px]
            font-medium tracking-wide mb-4 md:mb-6"
        >
          <span className="text-[var(--color-primary)]">✦</span> Trusted by 500+ Businesses
        </motion.div>

        {/* Headline - responsive sizes */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-['Syne'] font-extrabold
            text-[36px] leading-[1.15]
            md:text-[44px] md:leading-[1.1]
            lg:text-[56px]
            xl:text-[68px]
            2xl:text-[80px]
            text-[var(--color-text-primary)] mb-4 md:mb-6"
        >
          Powerful Software.{' '}
          <span className="gradient-text">Simpler Business.</span>
        </motion.h1>

        {/* Sub-headline - responsive sizes */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="font-['Geist']
            text-[15px] md:text-[16px] lg:text-[17px] xl:text-[19px]
            leading-[1.65] text-[var(--color-text-secondary)]
            max-w-full md:max-w-[600px] mx-auto mb-6 md:mb-8"
        >
          TechLeeq delivers enterprise-grade software solutions that automate, streamline, and supercharge every layer of your business operations — from day one.
        </motion.p>

        {/* CTA Buttons - stack on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4"
        >
          <Link to="/download" className="w-full md:w-auto">
            <Button variant="primary" size="xl" icon={<Download size={20} />} iconPosition="left" className="w-full md:w-auto h-[52px] md:h-auto">
              Download Free Trial
            </Button>
          </Link>
          <Button variant="secondary" size="xl" icon={<Play size={20} />} iconPosition="left" className="w-full md:w-auto h-[52px] md:h-auto">
            Watch Demo
          </Button>
        </motion.div>

        {/* Helper Text - smaller on mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="text-[12px] md:text-[13px] text-[var(--color-text-muted)] mb-8 md:mb-12"
        >
          No credit card required · Free 14-day trial · Windows & Mac
        </motion.p>

        {/* Hero Visual - Product Mockup - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: isMobile ? 0 : 6 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-8 md:mt-12 lg:mt-16"
          style={{ perspective: isMobile ? 'none' : '1000px' }}
        >
          {/* Mockup Container - remove 3D tilt on mobile */}
          <div
            className="relative mx-auto
              max-w-full md:max-w-[85%] lg:max-w-[900px]
              rounded-[var(--radius-lg)] md:rounded-[var(--radius-xl)]
              overflow-hidden shadow-card
              md:glow-blue"
            style={{
              transform: isMobile ? 'none' : 'rotateX(6deg) rotateY(-3deg)',
              transformStyle: isMobile ? 'flat' : 'preserve-3d',
              aspectRatio: isMobile ? '16/9' : 'auto',
            }}
          >
            <div className="bg-gradient-to-br from-[var(--color-bg-surface)] to-[var(--color-bg-elevated)]
              p-4 md:p-6 lg:p-8
              rounded-[var(--radius-lg)] md:rounded-[var(--radius-xl)]
              border border-[var(--color-bg-border)]">
              {/* Simulated Dashboard UI */}
              <div className="bg-[var(--color-bg-base)] rounded-lg p-3 md:p-4 lg:p-6 space-y-2 md:space-y-3 lg:space-y-4">
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-2 md:pb-4 border-b border-[var(--color-bg-border)]">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-xs md:text-sm font-bold">
                      T
                    </div>
                    <div>
                      <div className="text-xs md:text-sm font-semibold text-[var(--color-text-primary)]">Dashboard Overview</div>
                      <div className="text-[10px] md:text-xs text-[var(--color-text-muted)]">Real-time analytics</div>
                    </div>
                  </div>
                  <div className="flex gap-1 md:gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-accent-green)]"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-accent-amber)]"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-accent-red)]"></div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  {[
                    { label: 'Revenue', value: '$124.5K', change: '+12.5%' },
                    { label: 'Tasks', value: '842', change: '+8.2%' },
                    { label: 'Users', value: '1,234', change: '+15.3%' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[var(--color-bg-surface)] rounded-lg p-2 md:p-3 lg:p-4">
                      <div className="text-[10px] md:text-xs text-[var(--color-text-muted)] mb-0.5 md:mb-1">{stat.label}</div>
                      <div className="text-sm md:text-base lg:text-lg font-bold text-[var(--color-text-primary)]">{stat.value}</div>
                      <div className="text-[10px] md:text-xs text-[var(--color-accent-green)]">{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-[var(--color-bg-surface)] rounded-lg p-2 md:p-3 lg:p-4 h-16 md:h-24 lg:h-32 flex items-end gap-0.5 md:gap-1">
                  {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[var(--color-primary)] to-[var(--color-accent-violet)] rounded-t opacity-80"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Info Chips - hide 2 on mobile, show only bottom one */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -left-4 top-1/4 bg-[var(--color-bg-elevated)] border border-[var(--color-bg-border)] rounded-lg px-4 py-2 shadow-lg hidden lg:flex items-center gap-2"
          >
            <CheckCircle2 size={16} className="text-[var(--color-accent-green)]" />
            <span className="text-sm text-[var(--color-text-primary)]">Task automated</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -right-4 top-1/3 bg-[var(--color-bg-elevated)] border border-[var(--color-bg-border)] rounded-lg px-4 py-2 shadow-lg hidden lg:flex items-center gap-2"
          >
            <TrendingUp size={16} className="text-[var(--color-primary)]" />
            <span className="text-sm text-[var(--color-text-primary)]">+38% Efficiency</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[var(--color-bg-elevated)] border border-[var(--color-bg-border)] rounded-lg px-3 py-1.5 md:px-4 md:py-2 shadow-lg flex items-center gap-2"
          >
            <Shield size={14} className="text-[var(--color-accent-violet)] md:w-4 md:h-4" />
            <span className="text-xs md:text-sm text-[var(--color-text-primary)]">Enterprise Secure</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - hide on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[var(--color-text-muted)]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
