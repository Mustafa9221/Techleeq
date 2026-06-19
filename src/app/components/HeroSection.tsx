import { MessageSquare, Package } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './Button';
import { motion } from 'motion/react';

/* ── Animated decorative orb / circuit graphic ───────────────────────── */
function AnimatedGraphic() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Large blurred primary glow – top-right */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(10,132,255,0.18) 0%, rgba(124,92,252,0.10) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary violet glow – bottom-left */}
      <motion.div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(124,92,252,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* SVG circuit / orb decoration – right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[0.12] hidden xl:block">
        <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="240" cy="240" r="200" stroke="#0A84FF" strokeWidth="1" strokeDasharray="6 10" />
          <circle cx="240" cy="240" r="150" stroke="#7C5CFC" strokeWidth="0.8" strokeDasharray="4 8" />
          <circle cx="240" cy="240" r="100" stroke="#00D4C8" strokeWidth="0.6" />
          <circle cx="240" cy="240" r="50" fill="rgba(10,132,255,0.08)" stroke="#0A84FF" strokeWidth="1.5" />
          {/* Nodes */}
          {[0,60,120,180,240,300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x = 240 + 200 * Math.cos(rad);
            const y = 240 + 200 * Math.sin(rad);
            return <circle key={i} cx={x} cy={y} r="4" fill="#0A84FF" opacity="0.8" />;
          })}
          {[30,90,150,210,270,330].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x = 240 + 150 * Math.cos(rad);
            const y = 240 + 150 * Math.sin(rad);
            return <circle key={i} cx={x} cy={y} r="3" fill="#7C5CFC" opacity="0.8" />;
          })}
          {/* Connecting lines */}
          <line x1="240" y1="40" x2="240" y2="90" stroke="#0A84FF" strokeWidth="0.8" opacity="0.5" />
          <line x1="240" y1="390" x2="240" y2="440" stroke="#0A84FF" strokeWidth="0.8" opacity="0.5" />
          <line x1="40" y1="240" x2="90" y2="240" stroke="#7C5CFC" strokeWidth="0.8" opacity="0.5" />
          <line x1="390" y1="240" x2="440" y2="240" stroke="#7C5CFC" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 3 === 0 ? '3px' : '2px',
            height: i % 3 === 0 ? '3px' : '2px',
            background: i % 2 === 0 ? '#0A84FF' : '#7C5CFC',
            left: `${(i * 5.7) % 100}%`,
            top: `${(i * 7.3 + 10) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] hidden md:block"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(10,132,255,0.3), transparent)' }}
        animate={{ top: ['10%', '90%', '10%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

/* ── Hero Section ─────────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative gradient-hero w-full overflow-hidden"
      style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-text-primary) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Animated background graphics */}
      <AnimatedGraphic />

      {/* ── Main content ── */}
      <div
        className="relative z-10 w-full mx-auto text-center flex flex-col items-center justify-center"
        style={{
          paddingTop: 'clamp(100px, 15vh, 140px)',
          paddingBottom: 'clamp(40px, 8vh, 80px)',
          paddingLeft: 'clamp(20px, 5vw, 80px)',
          paddingRight: 'clamp(20px, 5vw, 80px)',
          maxWidth: '1280px',
        }}
      >
        {/* ── Top badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0 }}
          className="inline-flex items-center gap-2 mb-5 md:mb-7"
          style={{
            padding: '6px 16px',
            borderRadius: '9999px',
            border: '1px solid rgba(10,132,255,0.35)',
            background: 'rgba(10,132,255,0.09)',
            color: 'var(--color-primary)',
            fontSize: 'clamp(11px, 1.2vw, 13px)',
            fontFamily: "'Geist', sans-serif",
            fontWeight: 500,
            letterSpacing: '0.06em',
          }}
        >
          <span style={{ color: 'var(--color-primary)', fontSize: '14px' }}>✦</span>
          Trusted by 500+ Businesses
        </motion.div>

        {/* ── Main headline ── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            fontSize: 'clamp(42px, 7.5vw, 96px)',
            color: 'var(--color-text-primary)',
            marginBottom: 'clamp(8px, 1.5vw, 16px)',
            width: '100%',
          }}
        >
          Where Creativity
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            fontSize: 'clamp(42px, 7.5vw, 96px)',
            background: 'linear-gradient(90deg, #0A84FF 0%, #7C5CFC 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 'clamp(16px, 3vw, 32px)',
            width: '100%',
          }}
        >
          Meets Technology.
        </motion.div>

        {/* ── Sub-headline ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 'clamp(15px, 1.6vw, 19px)',
            lineHeight: 1.7,
            color: 'var(--color-text-secondary)',
            maxWidth: '680px',
            marginBottom: 'clamp(28px, 5vw, 48px)',
          }}
        >
          Techleeq builds custom digital solutions and ready-to-scale software
          products designed to streamline your operations, elevate your brand,
          and supercharge your growth.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <Link to="/products">
            <Button
              variant="primary"
              size="xl"
              icon={<Package size={20} />}
              iconPosition="left"
              className="h-[52px] md:h-auto"
            >
              Explore Products
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="secondary"
              size="xl"
              icon={<MessageSquare size={20} />}
              iconPosition="left"
              className="h-[52px] md:h-auto"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>

        {/* ── Trust micro-copy ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          style={{
            marginTop: 'clamp(14px, 2vw, 24px)',
            fontSize: 'clamp(11px, 1.1vw, 13px)',
            color: 'var(--color-text-muted)',
            fontFamily: "'Geist', sans-serif",
          }}
        >
          Enterprise-grade solutions · Dedicated support · Scalable from day one
        </motion.p>
      </div>
    </section>
  );
}
