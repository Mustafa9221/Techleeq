import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Server, Shield, Brain, Database, Code, Check } from 'lucide-react';
import { Button } from './Button';

const services = [
  {
    id: 1,
    icon: Brain,
    title: 'AI & Automation',
    description: 'Intelligent workflows that save hours of manual data entry every day.',
    features: ['Workflow automation', 'Predictive analytics', 'Machine learning models', 'Chatbots & assistants'],
  },
  {
    id: 2,
    icon: Server,
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure, and highly available cloud architecture for modern apps.',
    features: ['Cloud migration', 'Serverless computing', 'Infrastructure as Code', '24/7 Monitoring'],
  },
  {
    id: 3,
    icon: Database,
    title: 'Data Engineering',
    description: 'Transform raw data into actionable insights with robust data pipelines.',
    features: ['Data warehousing', 'ETL pipelines', 'Real-time processing', 'BI Dashboards'],
  },
  {
    id: 4,
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade protection against the latest digital threats.',
    features: ['Penetration testing', 'Zero-trust architecture', 'Compliance audits', 'Threat intelligence'],
  },
  {
    id: 5,
    icon: Code,
    title: 'Custom Development',
    description: 'Bespoke software solutions tailored to your unique business needs.',
    features: ['Web applications', 'Mobile development', 'API design', 'Legacy modernization'],
  }
];

export function ServicesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="services-slider" className="min-h-[100dvh] w-full flex flex-col justify-center bg-[var(--color-bg-base)] snap-start px-[20px] md:px-[40px] py-12 md:py-[clamp(24px,4vh,48px)] overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-8 md:mb-[clamp(16px,4vh,48px)]">
          <h2 className="font-['Syne'] text-[32px] md:text-[clamp(28px,4vh,40px)] font-bold leading-tight text-[var(--color-text-primary)] mb-2 md:mb-[clamp(8px,2vh,16px)]">
            Our Services
          </h2>
          <p className="text-[15px] md:text-[clamp(14px,2vh,17px)] text-[var(--color-text-secondary)] leading-relaxed">
            Tailored solutions to supercharge every layer of your business.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-[1100px] mx-auto py-8 md:py-[clamp(16px,3vh,48px)]">

          {/* Prev Button */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-bg-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden px-4 pt-12 md:pt-[clamp(24px,4vh,64px)] pb-12 md:pb-[clamp(24px,4vh,48px)]" ref={emblaRef}>
            <div className="flex touch-pan-y" style={{ backfaceVisibility: 'hidden' }}>
              {services.map((service, idx) => {
                const isActive = idx === selectedIndex;

                return (
                  <div
                    key={service.id}
                    className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_350px] min-w-0 pl-4 pr-4 md:pl-8 md:pr-8 cursor-pointer"
                    onClick={() => scrollTo(idx)}
                  >
                    <div
                      className={`relative bg-[var(--color-bg-surface)] border rounded-[var(--radius-xl)] p-6 md:p-[clamp(16px,3vh,32px)] flex flex-col h-full transition-all duration-500 ease-out ${isActive
                          ? 'border-[var(--color-primary)] shadow-glow-blue scale-100 md:scale-110 opacity-100 z-10'
                          : 'border-[var(--color-bg-border)] hover:border-[var(--color-text-muted)] scale-95 opacity-60 z-0'
                        }`}
                    >


                      <div className={`w-12 h-12 md:w-[clamp(40px,5vh,48px)] md:h-[clamp(40px,5vh,48px)] rounded-lg flex items-center justify-center mb-4 md:mb-[clamp(12px,2vh,24px)] transition-colors duration-500 ${isActive ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]'}`}>
                        <service.icon size={24} className="w-5 h-5 md:w-[clamp(20px,2.5vh,24px)] md:h-[clamp(20px,2.5vh,24px)]" />
                      </div>

                      <h3 className="font-['DM_Sans'] text-[20px] md:text-[clamp(18px,2.5vh,22px)] font-bold text-[var(--color-text-primary)] mb-2 md:mb-[clamp(8px,1vh,12px)]">
                        {service.title}
                      </h3>

                      <p className="text-[13px] md:text-[clamp(12px,1.8vh,14px)] text-[var(--color-text-muted)] mb-4 md:mb-[clamp(12px,2vh,24px)] flex-grow">
                        {service.description}
                      </p>

                      <ul className="space-y-2 md:space-y-[clamp(8px,1vh,12px)] mb-6 md:mb-[clamp(16px,3vh,32px)]">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check size={18} className={`${isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'} mt-0.5 flex-shrink-0 transition-colors duration-500`} />
                            <span className="text-[13px] md:text-[clamp(12px,1.8vh,13px)] text-[var(--color-text-secondary)]">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto">
                        <Button variant={isActive ? "primary" : "secondary"} className="w-full transition-colors duration-500">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-bg-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2 mt-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${selectedIndex === idx
                  ? 'w-8 bg-[var(--color-primary)]'
                  : 'w-2 bg-[var(--color-bg-border)] hover:bg-[var(--color-text-muted)]'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
