import { MessageSquare, Package } from 'lucide-react';
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
        min-h-[100dvh] w-full pt-[60px] md:pt-[68px]
        flex flex-col items-center justify-center snap-start"
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
        py-8 md:py-12
        text-center flex flex-col items-center justify-center h-full">
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
          <Link to="/contact" className="w-full md:w-auto">
            <Button variant="primary" size="xl" icon={<MessageSquare size={20} />} iconPosition="left" className="w-full md:w-auto h-[52px] md:h-auto">
              Ask for a Service
            </Button>
          </Link>
          <Link to="/products" className="w-full md:w-auto">
            <Button variant="secondary" size="xl" icon={<Package size={20} />} iconPosition="left" className="w-full md:w-auto h-[52px] md:h-auto">
              Our Products
            </Button>
          </Link>
        </motion.div>

        {/* Helper Text - smaller on mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="text-[12px] md:text-[13px] text-[var(--color-text-muted)] mb-8 md:mb-12"
        >
          Trusted by 500+ businesses · Enterprise-grade solutions · Dedicated support
        </motion.p>


      </div>
    </section>
  );
}
