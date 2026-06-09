import React, { useState } from 'react';
import { Calendar, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.problem) return;
    
    setStatus('loading');
    
    // Mock API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', problem: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-black border-t border-neutral-950">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-radial-glow opacity-40 pointer-events-none z-0"></div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Context copy and Calendar CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="reveal-on-scroll text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3 block">
              Contacto
            </span>
            <h2 className="reveal-on-scroll font-display font-bold text-3xl md:text-5xl text-white tracking-tight mb-6 leading-tight">
              ¿Listo para Automatizar tu Negocio?
            </h2>
            <div className="reveal-on-scroll w-12 h-1 bg-white mb-8"></div>
            <p className="reveal-on-scroll text-neutral-400 text-sm md:text-base leading-relaxed mb-10">
              Completa el formulario para solicitar tu <strong>auditoría de procesos gratuita</strong>. Evaluaremos tu flujo actual y te mostraremos exactamente qué tareas puedes delegar en software y agentes de IA.
            </p>

            {/* Calendar Link Card */}
            <div className="reveal-on-scroll p-6 rounded-sm glass-panel bg-neutral-950/40 border border-neutral-900 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="font-display font-semibold text-sm text-white">¿Prefieres hablar directamente?</span>
              </div>
              <p className="text-xs text-neutral-400 leading-normal">
                Si no quieres esperar, reserva una sesión estratégica directa de 15 minutos en nuestro calendario.
              </p>
              <a
                id="link-calendly"
                href="https://calendly.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors duration-200 mt-2 focus:outline-none"
              >
                Reservar en Calendly 
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Minimal Form */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="reveal-on-scroll w-full p-8 md:p-12 rounded-sm glass-panel bg-neutral-950/50 border border-neutral-900 relative min-h-[400px] flex items-center">
              
              {status === 'success' ? (
                /* Success Screen */
                <div className="w-full flex flex-col items-center text-center py-10 animate-fade-in">
                  <CheckCircle2 className="w-16 h-16 text-white mb-6 animate-bounce" />
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    ¡Mensaje Recibido!
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
                    Hemos registrado tu solicitud correctamente. Uno de nuestros ingenieros de automatización revisará tu caso y te escribirá en menos de 24 horas para coordinar la llamada.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-xs font-semibold uppercase tracking-wider text-white border border-neutral-800 hover:border-white px-6 py-3 rounded-sm transition-all duration-300"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
                  {/* Name field */}
                  <div className="flex flex-col gap-1 relative">
                    <label htmlFor="name" className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ej. Carlos Mendoza"
                      disabled={status === 'loading'}
                      className="minimal-input text-white text-sm md:text-base placeholder-neutral-700"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1 relative">
                    <label htmlFor="email" className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      Correo Corporativo
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Ej. carlos@tuempresa.com"
                      disabled={status === 'loading'}
                      className="minimal-input text-white text-sm md:text-base placeholder-neutral-700"
                    />
                  </div>

                  {/* Problem field */}
                  <div className="flex flex-col gap-1 relative">
                    <label htmlFor="problem" className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      ¿Cuál es tu principal cuello de botella operativo?
                    </label>
                    <textarea
                      id="problem"
                      name="problem"
                      value={formData.problem}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Ej. Perdemos leads por no contestar rápido / El onboarding de clientes requiere mucha entrada manual..."
                      disabled={status === 'loading'}
                      className="minimal-input text-white text-sm md:text-base placeholder-neutral-700 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="btn-submit-contact"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 text-xs md:text-sm font-semibold uppercase tracking-wider text-black bg-white border border-white rounded-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:pointer-events-none hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  >
                    {status === 'loading' ? (
                      <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        Solicitar Auditoría Gratis
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
