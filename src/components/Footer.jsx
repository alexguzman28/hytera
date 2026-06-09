import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: 'https://www.linkedin.com/company/hytera-ia/?viewAsMember=true'
    }
  ];

  return (
    <footer id="footer" className="relative bg-black border-t border-neutral-950 py-12 md:py-16 overflow-hidden">
      {/* Subtle bottom line glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand logo & tagline */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <a href="#" className="flex items-center gap-3.5 group focus:outline-none" id="footer-logo">
            <svg className="w-10 h-8 text-white transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 10 24 L 38 24 C 48 24, 52 12, 62 12 L 90 12" />
              <path d="M 10 28 L 38 28 C 48 28, 52 16, 62 16 L 90 16" />
              <path d="M 10 32 L 38 32 C 48 32, 52 20, 62 20 L 90 20" />
              <path d="M 45 28 L 55 16" />
              <path d="M 47 20 L 51 24" />
            </svg>
            <span className="font-display font-bold text-base tracking-wider text-white uppercase">
              HYTERA IA
            </span>
          </a>
          <p className="text-[11px] text-neutral-500 max-w-xs leading-normal">
            Arquitectura de operaciones inteligentes y flujos de trabajo en piloto automático.
          </p>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-wider font-semibold text-neutral-500">
          <a href="#privacy" className="hover:text-white transition-colors duration-200" id="link-privacy">
            Política de Privacidad
          </a>
          <a href="#terms" className="hover:text-white transition-colors duration-200" id="link-terms">
            Términos de Servicio
          </a>
          <a href="#cookies" className="hover:text-white transition-colors duration-200" id="link-cookies">
            Configuración de Cookies
          </a>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  id={`social-${social.name.toLowerCase()}`}
                  className="w-8 h-8 rounded-full border border-neutral-900 bg-neutral-950 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/45 transition-all duration-300"
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
          <span className="text-[10px] text-neutral-600">
            &copy; {currentYear} HYTERA_IA. Todos los derechos reservados.
          </span>
        </div>

      </div>
    </footer>
  );
}
