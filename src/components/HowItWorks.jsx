import React from 'react';
import { PhoneCall, FileSearch, Code, LineChart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Llamada de Descubrimiento',
      description: 'Analizamos a fondo tu negocio, identificamos cuellos de botella y mapeamos los flujos de trabajo repetitivos que más tiempo te consumen.',
      icon: PhoneCall
    },
    {
      number: '02',
      title: 'Diseño de la Solución',
      description: 'Arquitecturamos un plan de automatización detallado, definiendo herramientas (Make, Zapier, Voiceflow) y el ROI estimado para tu aprobación.',
      icon: FileSearch
    },
    {
      number: '03',
      title: 'Construcción y Despliegue',
      description: 'Programamos e integramos tus sistemas y agentes de IA. Probamos cada conexión minuciosamente antes del lanzamiento definitivo.',
      icon: Code
    },
    {
      number: '04',
      title: 'Optimización y Escala',
      description: 'Monitoreamos el rendimiento en tiempo real, refinamos los flujos y añadimos nuevas integraciones a medida que tu negocio crece.',
      icon: LineChart
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-black border-t border-neutral-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-radial-gradient opacity-20 pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="reveal-on-scroll text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3 block">
            El Proceso
          </span>
          <h2 className="reveal-on-scroll font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-6">
            De la Idea al Piloto Automático
          </h2>
          <div className="reveal-on-scroll w-12 h-1 bg-white mx-auto mb-6"></div>
          <p className="reveal-on-scroll text-neutral-400 text-base md:text-lg">
            Nuestra metodología está diseñada para ser rápida, transparente y con mínima interrupción a tus operaciones diarias.
          </p>
        </div>

        {/* Steps Flow (Vertical on mobile, horizontal cards on desktop with linking line) */}
        <div className="relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-neutral-900 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full animate-pulse-slow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="reveal-on-scroll flex flex-col items-center text-center lg:items-start lg:text-left group relative"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Step Card Wrapper */}
                  <div className="w-full p-8 rounded-sm glass-panel bg-neutral-950/80 border border-neutral-900 group-hover:border-white/20 transition-all duration-300 flex flex-col items-center lg:items-start h-full">
                    
                    {/* Header: Number and Icon */}
                    <div className="flex items-center justify-between w-full mb-8">
                      <span className="font-display font-extrabold text-3xl text-neutral-800 group-hover:text-white/25 transition-colors duration-300">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-sm border border-neutral-900 bg-neutral-950 flex items-center justify-center group-hover:border-white/40 group-hover:bg-neutral-900 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-3 tracking-wide">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
