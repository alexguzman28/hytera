import React from 'react';
import { Shield, Clock, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Tiempo de Respuesta', before: '4 Horas', after: '2 Segundos', icon: Clock },
    { label: 'Errores Operacionales', before: '12%', after: '0%', icon: Shield },
    { label: 'Conversión de Leads', before: 'Lento', after: '+35%', icon: TrendingUp }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-black border-t border-neutral-950 overflow-hidden">
      {/* Accent lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-radial-gradient opacity-20 pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copywriting */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="reveal-on-scroll text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3 block">
              Nosotros
            </span>
            <h2 className="reveal-on-scroll font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-8">
              Nuestra Misión: Eliminar lo Tedioso. Potenciar tu Crecimiento.
            </h2>
            <div className="reveal-on-scroll w-12 h-1 bg-white mb-8"></div>
            
            <p className="reveal-on-scroll text-neutral-400 text-base md:text-lg mb-6 leading-relaxed">
              En <strong>Hytera IA</strong> creemos que los humanos no nacieron para copiar y pegar datos o responder repetidamente los mismos correos. Nuestro propósito es diseñar la infraestructura tecnológica que libere el potencial creativo de tu equipo.
            </p>
            <p className="reveal-on-scroll text-neutral-400 text-base md:text-lg mb-10 leading-relaxed">
              Utilizamos herramientas avanzadas de bajo código (no-code/low-code) e integraciones de inteligencia artificial generativa para construir soluciones escalables y estables en tiempo récord, logrando eficiencias inmediatas sin necesidad de contratar desarrolladores a tiempo completo.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-3 gap-6 border-t border-neutral-900 pt-8">
              <div className="reveal-on-scroll text-center lg:text-left">
                <span className="block font-display font-bold text-2xl md:text-3xl text-white mb-1">20+</span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider">Horas Ahorradas / Sem</span>
              </div>
              <div className="reveal-on-scroll text-center lg:text-left">
                <span className="block font-display font-bold text-2xl md:text-3xl text-white mb-1">100%</span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider">Flujos Seguros</span>
              </div>
              <div className="reveal-on-scroll text-center lg:text-left">
                <span className="block font-display font-bold text-2xl md:text-3xl text-white mb-1">3x</span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider">Retorno de Inversión</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive ROI Graph */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="reveal-on-scroll w-full max-w-md p-8 rounded-sm glass-panel bg-neutral-950/60 border border-neutral-900 flex flex-col gap-6 relative">
              
              {/* Scanline overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.005] to-transparent pointer-events-none bg-[length:100%_4px] animate-scanline"></div>

              <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-neutral-400">
                  Métricas de Eficiencia (ROI)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-semibold text-white uppercase tracking-wider">
                  En Vivo
                </span>
              </div>

              {/* Stats Visualizers */}
              <div className="flex flex-col gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-neutral-400 font-medium flex items-center gap-2">
                          <Icon className="w-4 h-4 text-neutral-500" />
                          {stat.label}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="text-neutral-600 line-through text-xs font-semibold">{stat.before}</span>
                          <span className="text-white font-bold text-glow">{stat.after}</span>
                        </div>
                      </div>
                      
                      {/* Bar graph representing the improvement */}
                      <div className="relative h-2 w-full bg-neutral-900 rounded-sm overflow-hidden border border-neutral-950">
                        {/* Before block */}
                        <div 
                          className="absolute left-0 top-0 bottom-0 bg-neutral-800 transition-all duration-1000"
                          style={{ width: index === 0 ? '100%' : index === 1 ? '100%' : '15%' }}
                        ></div>
                        {/* After block (glow) */}
                        <div 
                          className="absolute left-0 top-0 bottom-0 bg-white transition-all duration-1000 shadow-[0_0_10px_#ffffff]"
                          style={{ width: index === 0 ? '5%' : index === 1 ? '0%' : '100%' }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Callout */}
              <div className="mt-4 p-4 rounded-sm bg-neutral-950 border border-neutral-900 flex flex-col gap-1 text-[11px] md:text-xs text-neutral-400">
                <span className="text-white font-semibold uppercase tracking-wider block mb-1">
                  ¿Cómo lo logramos?
                </span>
                Reemplazamos sistemas manuales inconexos con integraciones robustas de bajo código y modelos GPT optimizados. Menos fricción, más velocidad.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
