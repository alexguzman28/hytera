import React from 'react';
import { Zap, MessageSquare, Check } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: 'service-ops',
      title: 'Operaciones y Flujos de Trabajo',
      description: 'Conectamos tus herramientas para que la información fluya sin esfuerzo humano.',
      icon: Zap,
      bullets: [
        'Automatización del proceso de onboarding de clientes e integrantes.',
        'Sincronización bidireccional entre gestores de proyectos (Notion, Asana, Monday).',
        'Eliminación de la entrada manual de datos mediante flujos automatizados con Make y Zapier.'
      ]
    },
    {
      id: 'service-support',
      title: 'Soporte al Cliente con IA',
      description: 'Respuestas precisas al instante sin sobrecargar a tu equipo de soporte.',
      icon: MessageSquare,
      bullets: [
        'Chatbots inteligentes activos 24/7 entrenados con información de tu empresa.',
        'Escalabilidad fluida a agentes humanos cuando sea necesario.',
        'Integración multicanal en Web, WhatsApp, Instagram y Telegram.'
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-black border-t border-neutral-950">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient opacity-30 pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="reveal-on-scroll text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3 block">
            Nuestros Pilares
          </span>
          <h2 className="reveal-on-scroll font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-6">
            Soluciones de Automatización Hechas a Medida
          </h2>
          <div className="reveal-on-scroll w-12 h-1 bg-white mx-auto mb-6"></div>
          <p className="reveal-on-scroll text-neutral-400 text-base md:text-lg">
            Liberamos a tu equipo de las tareas repetitivas para que se enfoquen en lo que realmente aporta valor y hace crecer el negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="reveal-on-scroll glass-panel glass-panel-hover p-8 md:p-10 rounded-sm flex flex-col justify-between group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-sm border border-neutral-800 bg-neutral-950 flex items-center justify-center mb-8 group-hover:border-white/50 group-hover:bg-neutral-900 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-4 border-t border-neutral-900/50 pt-6">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-neutral-400">
                      <div className="w-4 h-4 rounded-full border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="leading-normal">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
