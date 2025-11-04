import React, { useState, useEffect } from 'react';
import './App.css';

/* =========================
   Translations (ES / EN)
   ========================= */
const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      industries: 'Industrias',
      about: 'Nosotros',
      contact: 'Contacto'
    },
    hero: {
      badge: 'Business Intelligence Líder en Puerto Rico',
      title: 'Transformamos',
      titleHighlight: 'Datos en Decisiones',
      subtitle:
        'Convertimos datos complejos en insights accionables para acelerar tu toma de decisiones y el crecimiento de tu empresa.',
      cta1: 'Agenda 30 min',
      cta2: 'Ver Ejemplos',
      scrollText: 'Desliza para explorar',
      outcomes: [
        { big: '–60%', small: 'tiempo de reportería' },
        { big: '+3×', small: 'velocidad de decisión' },
        { big: '99.9%', small: 'confiabilidad de datos' }
      ]
    },
    industries: {
      title: 'Dónde ayudamos más',
      tabs: { ops: 'Operaciones', fin: 'Finanzas', health: 'Salud' },
      ops: [
        { t: 'Dashboards ejecutivos', d: 'Tendencias KPI, SLAs y cuellos de botella con drill-downs claros.' },
        { t: 'Calidad de datos', d: 'Definiciones y validaciones automáticas para discusiones sin fricción.' },
        { t: 'Self-service', d: 'Datasets pre-modelados para análisis sin depender de TI.' }
      ],
      fin: [
        { t: 'Visibilidad P&L', d: 'Márgenes, variaciones y sensibilidad para CFOs y operaciones.' },
        { t: 'Forecasting', d: 'Escenarios para anticipar costos, volúmenes y estacionalidad.' },
        { t: 'Trazabilidad', d: 'Lineaje y versionado audit-ready con definiciones claras.' }
      ],
      health: [
        { t: 'Calidad & Utilización', d: 'KPIs estilo HEDIS, ED evitable y readmisiones.' },
        { t: 'Operaciones clínicas', d: 'Paneles RN/PCP, segmentación y resultados de outreach.' },
        { t: 'Finanzas pagador/proveedor', d: 'RAF/CDPS, MLR y PMPM con explicaciones de variación.' }
      ],
      cta: 'Quiero una demo'
    },
    services: {
      title: 'Nuestros',
      titleHighlight: 'Servicios',
      subtitle:
        'Soluciones BI end-to-end: desde la calidad de datos hasta tableros ejecutivos y automatizaciones.',
      service1: {
        title: 'Análisis de Datos',
        description: 'Insights accionables y claros para decisiones estratégicas.',
        features: ['Dashboards interactivos', 'Reportes automatizados', 'Análisis predictivo']
      },
      service2: {
        title: 'Automatización de Procesos',
        description: 'Optimización operativa con flujos inteligentes e integraciones.',
        features: ['Workflows', 'Integración de sistemas', 'Monitoreo continuo']
      },
      service3: {
        title: 'Consultoría Estratégica',
        description: 'Hoja de ruta BI, gobierno de datos y adopción analítica.',
        features: ['Def. de KPIs', 'Planificación', 'Acompañamiento']
      },
      ctaTitle: '¿Listo para transformar tu negocio?',
      ctaButton: 'Comienza Ahora'
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'Datáurea',
      description1:
        'Empresa puertorriqueña experta en Business Intelligence y análisis de datos. Unimos dominio técnico y enfoque de negocio.',
      description2:
        'Aceleramos decisiones con datos confiables y tableros ejecutivos que tu equipo realmente usa.',
      stats: [
        { number: '50+', label: 'Proyectos' },
        { number: '95%', label: 'Satisfacción' },
        { number: '24/7', label: 'Soporte' },
        { number: '5+', label: 'Años' }
      ],
      cta: 'Conoce Más',
      badge: 'Expertos en BI & Analytics'
    },
    contact: {
      title: 'Transformemos tu negocio',
      titleHighlight: 'juntos',
      description:
        'Cuéntanos tus 2–3 KPIs críticos y tus bloqueos actuales. Te mostramos una ruta más clara y rápida.',
      info: {
        phone: 'Teléfono',
        email: 'Email',
        location: 'Ubicación',
        locationValue: 'San Juan, Puerto Rico'
      },
      form: {
        title: 'Solicita tu consulta gratuita',
        name: 'Nombre completo',
        namePlaceholder: 'Tu nombre completo',
        email: 'Email empresarial',
        emailPlaceholder: 'tu@empresa.com',
        company: 'Empresa',
        companyPlaceholder: 'Nombre de tu empresa',
        phone: 'Teléfono',
        phonePlaceholder: '(787) 403-1552',
        message: '¿Cómo podemos ayudarte?',
        messagePlaceholder: 'Cuéntanos tus necesidades de BI...',
        submit: 'Enviar Solicitud'
      }
    },
    footer: {
      tagline: 'Transformando datos en decisiones inteligentes.',
      services: 'Servicios',
      servicesList: ['Análisis de Datos', 'Automatización', 'Consultoría', 'Dashboards'],
      company: 'Empresa',
      companyList: ['Sobre Nosotros', 'Equipo', 'Casos de Éxito', 'Contacto'],
      contact: 'Contacto',
      copyright: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      industries: 'Industries',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      badge: 'Leading Business Intelligence in Puerto Rico',
      title: 'Transforming',
      titleHighlight: 'Data into Decisions',
      subtitle:
        'We turn complex data into clear, executive-ready insights so your team moves faster with confidence.',
      cta1: 'Book 30-min',
      cta2: 'See Examples',
      scrollText: 'Scroll to explore',
      outcomes: [
        { big: '–60%', small: 'reporting time' },
        { big: '+3×', small: 'decision speed' },
        { big: '99.9%', small: 'data reliability' }
      ]
    },
    industries: {
      title: 'Where we help most',
      tabs: { ops: 'Operations', fin: 'Finance', health: 'Healthcare' },
      ops: [
        { t: 'Executive dashboards', d: 'KPI trends, SLAs and bottlenecks with clear drill-downs.' },
        { t: 'Data quality layers', d: 'Definitions and automated checks that remove meeting friction.' },
        { t: 'Self-service reporting', d: 'Pre-modeled datasets so teams answer questions without tickets.' }
      ],
      fin: [
        { t: 'P&L / PMPM visibility', d: 'Margins, variance and sensitivity for CFOs and operators.' },
        { t: 'Forecasting', d: 'Scenario modeling to anticipate costs, volumes and seasonality.' },
        { t: 'Audit-ready lineage', d: 'Versioning and traceability with clear definitions.' }
      ],
      health: [
        { t: 'Quality & utilization', d: 'HEDIS-style KPIs, avoidable ED and readmissions.' },
        { t: 'Care ops reporting', d: 'RN/PCP panels, segmentation and outreach outcomes.' },
        { t: 'Payer/provider finance', d: 'RAF/CDPS, MLR and PMPM with clear variance explanations.' }
      ],
      cta: 'Request a demo'
    },
    services: {
      title: 'Our',
      titleHighlight: 'Services',
      subtitle:
        'End-to-end BI: from data quality and modeling to executive dashboards and automations.',
      service1: {
        title: 'Data Analysis',
        description: 'Actionable insights that drive strategic decisions.',
        features: ['Interactive dashboards', 'Automated reports', 'Predictive analysis']
      },
      service2: {
        title: 'Process Automation',
        description: 'Operational optimization with smart workflows and integrations.',
        features: ['Workflows', 'System integration', 'Continuous monitoring']
      },
      service3: {
        title: 'Strategic Consulting',
        description: 'BI roadmap, data governance and analytics adoption.',
        features: ['KPI definitions', 'Planning', 'Enablement']
      },
      ctaTitle: 'Ready to transform your business?',
      ctaButton: 'Start Now'
    },
    about: {
      title: 'About',
      titleHighlight: 'Datáurea',
      description1:
        'Puerto Rican BI company blending technical depth with business clarity.',
      description2:
        'We speed up decisions with trustworthy data and executive dashboards your team actually uses.',
      stats: [
        { number: '50+', label: 'Projects' },
        { number: '95%', label: 'Satisfaction' },
        { number: '24/7', label: 'Support' },
        { number: '5+', label: 'Years' }
      ],
      cta: 'Learn More',
      badge: 'BI & Analytics Experts'
    },
    contact: {
      title: "Let's transform your business",
      titleHighlight: 'together',
      description:
        'Tell us your top 2–3 KPIs and current roadblocks. We’ll show you a faster, clearer way to review performance.',
      info: {
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        locationValue: 'San Juan, Puerto Rico'
      },
      form: {
        title: 'Request your free consultation',
        name: 'Full name',
        namePlaceholder: 'Your full name',
        email: 'Business email',
        emailPlaceholder: 'you@company.com',
        company: 'Company',
        companyPlaceholder: 'Your company name',
        phone: 'Phone',
        phonePlaceholder: '(787) 403-1552',
        message: 'How can we help you?',
        messagePlaceholder: 'Tell us your BI needs…',
        submit: 'Send Request'
      }
    },
    footer: {
      tagline: 'Transforming data into intelligent decisions.',
      services: 'Services',
      servicesList: ['Data Analysis', 'Automation', 'Consulting', 'Dashboards'],
      company: 'Company',
      companyList: ['About Us', 'Team', 'Case Studies', 'Contact'],
      contact: 'Contact',
      copyright: 'All rights reserved.'
    }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const t = translations[language];

  // ✅ Success Toast state and effect
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
      setShowToast(true);
      // Remove ?sent=1 from URL (works on localhost & prod)
      if (window.history.replaceState) {
        const cleanUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
      }
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* Logo (placeholder SVG) */}
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjRjRFREUyIi8+PHJlY3QgeD0iOCIgeT0iMjAiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIiBmaWxsPSIjQzg5RDM4Ii8+PHJlY3QgeD0iMTQiIHk9IjE2IiB3aWR0aD0iNCIgaGVpZ2h0PSIxNiIgZmlsbD0iI0M4OUQzOCIvPjxyZWN0IHg9IjIwIiB5PSIxMiIgd2lkdGg9IjQiIGhlaWdodD0iMjAiIGZpbGw9IiNDODlEMzgiLz48cmVjdCB4PSIyNiIgeT0iOCIgd2lkdGg9IjQiIGhlaWdodD0iMjQiIGZpbGw9IiNDODlEMzgiLz48L3N2Zz4="
                  alt="Datáurea Logo"
                  className="h-8 w-8"
                />
                <span className="ml-2 text-xl font-bold text-gray-900">DATÁUREA</span>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium">
                  {t.nav.services}
                </button>
                <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium">
                  {t.nav.industries}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium">
                  {t.nav.about}
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-golden-500 text-white px-6 py-2 rounded-lg hover:bg-golden-600 text-sm font-medium">
                  {t.nav.contact}
                </button>

                {/* Language toggle */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg"
                >
                  <span>{language === 'es' ? 'EN' : 'ES'}</span>
                </button>
              </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center space-x-2">
              <button onClick={toggleLanguage} className="text-gray-700 hover:text-golden-500 px-2 py-1 text-sm font-medium border border-gray-300 rounded">
                {language === 'es' ? 'EN' : 'ES'}
              </button>
              <button onClick={toggleMenu} className="text-gray-700 hover:text-golden-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-golden-500">{t.nav.home}</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-golden-500">{t.nav.services}</button>
              <button onClick={() => scrollToSection('industries')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-golden-500">{t.nav.industries}</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-golden-500">{t.nav.about}</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium bg-golden-500 text-white rounded-lg">{t.nav.contact}</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <img
            src="https://images.unsplash.com/photo-1700498466261-824cbd01974e"
            alt="Professional Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-blue-50/80 to-indigo-100/70"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-golden-100 rounded-full text-golden-700 text-sm font-semibold">
                  {t.hero.badge}
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    {t.hero.title}{' '}
                    <span className="block bg-gradient-to-r from-golden-500 to-golden-600 bg-clip-text text-transparent">
                      {t.hero.titleHighlight}
                    </span>
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-golden-500 to-blue-600 rounded-full"></div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">{t.hero.subtitle}</p>

                {/* Outcomes */}
                <div className="flex flex-wrap items-center gap-8 text-sm text-gray-600">
                  {t.hero.outcomes.map((o, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-golden-600">{o.big}</div>
                      <div className="text-gray-500">{o.small}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="group bg-golden-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-golden-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                  >
                    {t.hero.cta1}
                  </a>
                  <a
                    href="#work"
                    className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-golden-500 hover:text-golden-600 transition-all text-center"
                  >
                    {t.hero.cta2}
                  </a>
                </div>
              </div>

              {/* Right (mock dashboard) */}
              <div className="relative lg:pl-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Analytics Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                  {/* simple bars */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-end h-32 border-b border-gray-100 pb-2">
                      {[
                        { m: 'Jan', h: '60%' },
                        { m: 'Feb', h: '80%' },
                        { m: 'Mar', h: '100%' },
                        { m: 'Apr', h: '75%' },
                        { m: 'May', h: '90%' }
                      ].map((b, i) => (
                        <div className="flex flex-col items-center" key={i}>
                          <div className={`w-8 ${i % 2 ? 'bg-blue-500' : 'bg-golden-500'} rounded-t`} style={{ height: b.h }}></div>
                          <span className="text-xs text-gray-500 mt-1">{b.m}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-golden-500">+127%</div>
                        <div className="text-sm text-gray-500">Revenue Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">98.5%</div>
                        <div className="text-sm text-gray-500">Accuracy Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-golden-100 to-blue-100 rounded-full opacity-30 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-500">{t.hero.scrollText}</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-golden-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES (tabs) */}
      <section id="industries" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t.industries.title}
            </h2>
          </div>

          {/* Simple columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ops */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-4">{t.industries.tabs.ops}</h3>
              <ul className="space-y-4">
                {t.industries.ops.map((x, i) => (
                  <li key={i}>
                    <div className="font-semibold">{x.t}</div>
                    <div className="text-sm text-gray-600">{x.d}</div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Finance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-4">{t.industries.tabs.fin}</h3>
              <ul className="space-y-4">
                {t.industries.fin.map((x, i) => (
                  <li key={i}>
                    <div className="font-semibold">{x.t}</div>
                    <div className="text-sm text-gray-600">{x.d}</div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Healthcare */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-4">{t.industries.tabs.health}</h3>
              <ul className="space-y-4">
                {t.industries.health.map((x, i) => (
                  <li key={i}>
                    <div className="font-semibold">{x.t}</div>
                    <div className="text-sm text-gray-600">{x.d}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg"
            >
              {t.industries.cta}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.services.title} <span className="text-golden-500">{t.services.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Cards */}
            {[t.services.service1, t.services.service2, t.services.service3].map((svc, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{svc.title}</h3>
                <p className="text-gray-600 mb-6">{svc.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {svc.features.map((f, j) => (
                    <li key={j} className="flex items-center">
                      <svg className="w-4 h-4 text-golden-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Promo banner */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1717452716963-bc51037bd958"
              alt="Business Growth"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-golden-900/80 to-blue-900/60 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">{t.services.ctaTitle}</h3>
                <a href="#contact" className="bg-golden-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-golden-600 transition-colors">
                  {t.services.ctaButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.about.title} <span className="text-golden-500">{t.about.titleHighlight}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">{t.about.description1}</p>
              <p className="text-lg text-gray-600 mb-8">{t.about.description2}</p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {t.about.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-golden-500 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="bg-golden-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-golden-600 transition-colors">
                {t.about.cta}
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497701175-00c200fd57f0"
                alt="Professional Team"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-golden-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold mb-1">{t.about.stats[0].number.split('+')[0]}</div>
                <div className="text-sm opacity-90">{t.about.badge}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.contact.title} <span className="text-golden-500">{t.contact.titleHighlight}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">{t.contact.description}</p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.contact.info.phone}</div>
                    <div className="text-gray-600">+1 (787) 403-1552</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.contact.info.email}</div>
                    <div className="text-gray-600">carlos.perez@dataurea.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.contact.info.location}</div>
                    <div className="text-gray-600">{t.contact.info.locationValue}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1637665662134-db459c1bbb46"
                  alt="Professional Office"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Form (Formspree) */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.form.title}</h3>
              <form
                className="space-y-6"
                action="https://formspree.io/f/mblpvwze"
                method="POST"
              >
                {/* Honeypot anti-spam */}
                <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder={t.contact.form.companyPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder={t.contact.form.phonePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                />
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                ></textarea>

                {/* Email subject & redirect back with success flag */}
                <input type="hidden" name="_subject" value="New consultation request from dataurea.com" />
                <input type="hidden" name="_next" value="/?sent=1" />

                <button
                  type="submit"
                  className="w-full bg-golden-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-golden-600 transition-colors"
                  onClick={(e) => { e.currentTarget.disabled = true; }}
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WORK (placeholder for examples) */}
      <section id="work" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Selected work (redacted)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Executive KPI Hub', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71' },
              { title: 'Utilization & Quality', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7' },
              { title: 'Forecasting & Finance', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' }
            ].map((c, i) => (
              <div className="bg-white rounded-xl shadow p-3" key={i}>
                <img src={c.img} alt={c.title} className="rounded-lg h-40 w-full object-cover"/>
                <div className="mt-3 font-semibold">{c.title}</div>
                <div className="text-sm text-gray-500">Ask for a private walkthrough.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjRjRFREUyIi8+PHJlY3QgeD0iOCIgeT0iMjAiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIiBmaWxsPSIjQzg5RDM4Ii8+PHJlY3QgeD0iMTQiIHk9IjE2IiB3aWR0aD0iNCIgaGVpZ2h0PSIxNiIgZmlsbD0iI0M4OUQzOCIvPjxyZWN0IHg9IjIwIiB5PSIxMiIgd2lkdGg9IjQiIGhlaWdodD0iMjAiIGZpbGw9IiNDODlEMzgiLz48cmVjdCB4PSIyNiIgeT0iOCIgd2lkdGg9IjQiIGhlaWdodD0iMjQiIGZpbGw9IiNDODlEMzgiLz48L3N2Zz4="
                  alt="Datáurea Logo"
                  className="h-8 w-8"
                />
                <span className="ml-2 text-xl font-bold">DATÁUREA</span>
              </div>
              <p className="text-gray-400 text-sm">{t.footer.tagline}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.footer.services}</h4>
              <div className="space-y-2 text-sm text-gray-400">
                {t.footer.servicesList.map((s, i) => <div key={i}>{s}</div>)}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.footer.company}</h4>
              <div className="space-y-2 text-sm text-gray-400">
                {t.footer.companyList.map((c, i) => <div key={i}>{c}</div>)}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>+1 (787) 403-1552</div>
                <div>carlos.perez@dataurea.com</div>
                <div>{t.contact.info.locationValue}</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Datáurea. {t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* ✅ Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <div className="flex items-start gap-3 rounded-xl bg-white shadow-2xl border border-green-200 p-4 w-[320px]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
              <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L3.293 10.12a1 1 0 111.414-1.414L8 12l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Message sent</p>
              <p className="text-sm text-gray-600">Thanks! We’ll get back to you shortly.</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              aria-label="Close"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.415L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.415L8.586 10 3.636 5.05l1.414-1.414L10 8.586z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
