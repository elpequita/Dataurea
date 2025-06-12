import React, { useState } from 'react';
import './App.css';

// Translation object
const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      medicare: 'Medicare Advantage',
      about: 'Nosotros',
      contact: 'Contacto'
    },
    hero: {
      badge: 'Business Intelligence Líder en Puerto Rico',
      title: 'Transformamos',
      titleHighlight: 'Datos en Decisiones',
      subtitle: 'Potencia tu negocio con inteligencia empresarial avanzada. Convertimos información compleja en insights accionables para el crecimiento de tu empresa en Puerto Rico.',
      cta1: 'Consulta Gratuita',
      cta2: 'Ver Servicios',
      scrollText: 'Scroll para explorar'
    },
    medicare: {
      title: 'Especialistas en',
      titleHighlight: 'Medicare Advantage',
      subtitle: 'Análisis especializado para planes Medicare Advantage e información médica en Puerto Rico',
      description: 'Nuestro equipo cuenta con experiencia específica en el análisis de datos de Medicare Advantage, ayudando a organizaciones de salud a optimizar sus programas y mejorar los resultados de los pacientes.',
      features: [
        {
          title: 'Análisis de Riesgo Médico',
          description: 'Evaluamos y modelamos riesgos de salud para optimizar la gestión de miembros de Medicare Advantage.',
          icon: 'medical'
        },
        {
          title: 'Reportes CMS Compliance',
          description: 'Generamos reportes automáticos que cumplen con las regulaciones de CMS para planes MA.',
          icon: 'document'
        },
        {
          title: 'Analytics de Utilización',
          description: 'Analizamos patrones de utilización médica para identificar oportunidades de mejora.',
          icon: 'chart'
        },
        {
          title: 'Quality Measures Tracking',
          description: 'Monitoreamos y optimizamos las métricas de calidad HEDIS y Star Ratings.',
          icon: 'star'
        }
      ],
      cta: 'Consulta Especializada'
    },
    services: {
      title: 'Nuestros',
      titleHighlight: 'Servicios',
      subtitle: 'Soluciones integrales de Business Intelligence diseñadas específicamente para empresas puertorriqueñas',
      service1: {
        title: 'Análisis de Datos',
        description: 'Convertimos datos complejos en información clara y accionable para impulsar la toma de decisiones estratégicas.',
        features: ['Dashboards interactivos', 'Reportes automatizados', 'Análisis predictivo']
      },
      service2: {
        title: 'Automatización de Procesos',
        description: 'Optimizamos tus operaciones mediante la automatización inteligente de procesos empresariales.',
        features: ['Flujos de trabajo automatizados', 'Integración de sistemas', 'Monitoreo continuo']
      },
      service3: {
        title: 'Consultoría Estratégica',
        description: 'Te acompañamos en la definición e implementación de estrategias basadas en datos para tu crecimiento.',
        features: ['Análisis de mercado', 'Planificación estratégica', 'Acompañamiento continuo']
      },
      ctaTitle: '¿Listo para transformar tu negocio?',
      ctaButton: 'Comienza Ahora'
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'Datáurea',
      description1: 'Somos una empresa puertorriqueña especializada en Business Intelligence y análisis de datos. Nuestro equipo combina experiencia técnica con profundo conocimiento del mercado local para ofrecer soluciones que realmente impulsan el crecimiento empresarial.',
      description2: 'Desde nuestra base en Puerto Rico, ayudamos a empresas de todos los tamaños a tomar decisiones más inteligentes mediante el poder de sus datos. Creemos que cada organización tiene el potencial de alcanzar la excelencia cuando cuenta con la información correcta en el momento preciso.',
      stats: [
        { number: '50+', label: 'Proyectos Completados' },
        { number: '95%', label: 'Satisfacción del Cliente' },
        { number: '24/7', label: 'Soporte Técnico' },
        { number: '5+', label: 'Años de Experiencia' }
      ],
      cta: 'Conoce Más',
      badge: 'Expertos en BI & Analytics'
    },
    testimonials: {
      title: 'Lo que dicen nuestros',
      titleHighlight: 'clientes',
      subtitle: 'Testimonios reales de empresas que han transformado su negocio con nuestras soluciones',
      testimonial1: {
        text: 'Datáurea transformó completamente nuestra forma de tomar decisiones. Los dashboards que crearon nos permiten ver el rendimiento de nuestras sucursales en tiempo real.',
        name: 'María Rodríguez',
        position: 'CEO, Retail Express PR'
      },
      testimonial2: {
        text: 'La automatización de nuestros procesos financieros nos ha ahorrado más de 20 horas semanales. El equipo de Datáurea es excepcional en su servicio.',
        name: 'Carlos López',
        position: 'CFO, Constructora Borinquen'
      },
      testimonial3: {
        text: 'Increíble cómo pudieron integrar todos nuestros sistemas. Ahora tenemos una vista única de toda nuestra operación hotelera.',
        name: 'Ana Santana',
        position: 'Directora, Hotel Caribe'
      }
    },
    contact: {
      title: 'Transformemos tu negocio',
      titleHighlight: 'juntos',
      description: '¿Listo para convertir tus datos en tu ventaja competitiva? Contáctanos para una consulta gratuita y descubre cómo podemos impulsar el crecimiento de tu empresa.',
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
        phonePlaceholder: '(787) 555-0123',
        message: '¿Cómo podemos ayudarte?',
        messagePlaceholder: 'Cuéntanos sobre tus necesidades de Business Intelligence...',
        submit: 'Enviar Solicitud'
      }
    },
    footer: {
      tagline: 'Transformando datos en decisiones inteligentes para empresas puertorriqueñas.',
      services: 'Servicios',
      servicesList: ['Análisis de Datos', 'Automatización de Procesos', 'Consultoría Estratégica', 'Dashboards Interactivos'],
      company: 'Empresa',
      companyList: ['Sobre Nosotros', 'Nuestro Equipo', 'Casos de Éxito', 'Contacto'],
      contact: 'Contacto',
      copyright: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      medicare: 'Medicare Advantage',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Transforming',
      titleHighlight: 'Data into Decisions',
      subtitle: 'Empower your business with advanced business intelligence. We convert complex information into actionable insights for your company\'s growth in Puerto Rico.',
      cta1: 'Free Consultation',
      cta2: 'View Services'
    },
    medicare: {
      title: 'Specialists in',
      titleHighlight: 'Medicare Advantage',
      subtitle: 'Specialized analysis for Medicare Advantage plans and medical information in Puerto Rico',
      description: 'Our team has specific experience in Medicare Advantage data analysis, helping health organizations optimize their programs and improve patient outcomes.',
      features: [
        {
          title: 'Medical Risk Analysis',
          description: 'We evaluate and model health risks to optimize Medicare Advantage member management.',
          icon: 'medical'
        },
        {
          title: 'CMS Compliance Reports',
          description: 'We generate automatic reports that comply with CMS regulations for MA plans.',
          icon: 'document'
        },
        {
          title: 'Utilization Analytics',
          description: 'We analyze medical utilization patterns to identify improvement opportunities.',
          icon: 'chart'
        },
        {
          title: 'Quality Measures Tracking',
          description: 'We monitor and optimize HEDIS quality metrics and Star Ratings.',
          icon: 'star'
        }
      ],
      cta: 'Specialized Consultation'
    },
    services: {
      title: 'Our',
      titleHighlight: 'Services',
      subtitle: 'Comprehensive Business Intelligence solutions designed specifically for Puerto Rican companies',
      service1: {
        title: 'Data Analysis',
        description: 'We convert complex data into clear and actionable information to drive strategic decision-making.',
        features: ['Interactive dashboards', 'Automated reports', 'Predictive analysis']
      },
      service2: {
        title: 'Process Automation',
        description: 'We optimize your operations through intelligent automation of business processes.',
        features: ['Automated workflows', 'System integration', 'Continuous monitoring']
      },
      service3: {
        title: 'Strategic Consulting',
        description: 'We accompany you in defining and implementing data-driven strategies for your growth.',
        features: ['Market analysis', 'Strategic planning', 'Continuous support']
      },
      ctaTitle: 'Ready to transform your business?',
      ctaButton: 'Start Now'
    },
    about: {
      title: 'About',
      titleHighlight: 'Datáurea',
      description1: 'We are a Puerto Rican company specialized in Business Intelligence and data analysis. Our team combines technical expertise with deep knowledge of the local market to offer solutions that truly drive business growth.',
      description2: 'From our base in Puerto Rico, we help companies of all sizes make smarter decisions through the power of their data. We believe that every organization has the potential to achieve excellence when it has the right information at the right time.',
      stats: [
        { number: '50+', label: 'Completed Projects' },
        { number: '95%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Technical Support' },
        { number: '5+', label: 'Years of Experience' }
      ],
      cta: 'Learn More',
      badge: 'BI & Analytics Experts'
    },
    testimonials: {
      title: 'What our',
      titleHighlight: 'clients say',
      subtitle: 'Real testimonials from companies that have transformed their business with our solutions',
      testimonial1: {
        text: 'Datáurea completely transformed our decision-making process. The dashboards they created allow us to see our branches\' performance in real time.',
        name: 'María Rodríguez',
        position: 'CEO, Retail Express PR'
      },
      testimonial2: {
        text: 'The automation of our financial processes has saved us more than 20 hours weekly. The Datáurea team is exceptional in their service.',
        name: 'Carlos López',
        position: 'CFO, Constructora Borinquen'
      },
      testimonial3: {
        text: 'Amazing how they could integrate all our systems. Now we have a single view of our entire hotel operation.',
        name: 'Ana Santana',
        position: 'Director, Hotel Caribe'
      }
    },
    contact: {
      title: 'Let\'s transform your business',
      titleHighlight: 'together',
      description: 'Ready to turn your data into your competitive advantage? Contact us for a free consultation and discover how we can boost your company\'s growth.',
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
        phonePlaceholder: '(787) 555-0123',
        message: 'How can we help you?',
        messagePlaceholder: 'Tell us about your Business Intelligence needs...',
        submit: 'Send Request'
      }
    },
    footer: {
      tagline: 'Transforming data into intelligent decisions for Puerto Rican companies.',
      services: 'Services',
      servicesList: ['Data Analysis', 'Process Automation', 'Strategic Consulting', 'Interactive Dashboards'],
      company: 'Company',
      companyList: ['About Us', 'Our Team', 'Success Stories', 'Contact'],
      contact: 'Contact',
      copyright: 'All rights reserved.'
    }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  
  const t = translations[language];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0Q0QUYzNyIvPgo8cmVjdCB4PSI4IiB5PSIyMCIgd2lkdGg9IjQiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjE0IiB5PSIxNiIgd2lkdGg9IjQiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjIwIiB5PSIxMiIgd2lkdGg9IjQiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjI2IiB5PSI4IiB3aWR0aD0iNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" 
                  alt="Datáurea Logo" 
                  className="h-8 w-8"
                />
                <span className="ml-2 text-xl font-bold text-gray-900">DATÁUREA</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium transition-colors">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium transition-colors">
                  {t.nav.services}
                </button>
                <button onClick={() => scrollToSection('medicare')} className="text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium transition-colors">
                  {t.nav.medicare}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium transition-colors">
                  {t.nav.about}
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-golden-500 text-white px-6 py-2 rounded-lg hover:bg-golden-600 transition-colors font-medium">
                  {t.nav.contact}
                </button>
                
                {/* Language Toggle */}
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium transition-colors border border-gray-300 rounded-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span>{language === 'es' ? 'EN' : 'ES'}</span>
                </button>
              </div>
            </div>
            
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Language Toggle */}
              <button 
                onClick={toggleLanguage}
                className="text-gray-700 hover:text-golden-500 px-2 py-1 text-sm font-medium border border-gray-300 rounded"
              >
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
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-golden-500">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-golden-500">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('medicare')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-golden-500">
                {t.nav.medicare}
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-golden-500">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium bg-golden-500 text-white rounded-lg">
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Background with professional gradient and subtle pattern */}
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
              
              {/* Left Content */}
              <div className="space-y-8">
                {/* Company Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-golden-100 rounded-full text-golden-700 text-sm font-semibold">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Business Intelligence Líder en Puerto Rico
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    {t.hero.title}
                    <span className="block bg-gradient-to-r from-golden-500 to-golden-600 bg-clip-text text-transparent">
                      {t.hero.titleHighlight}
                    </span>
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-golden-500 to-blue-600 rounded-full"></div>
                </div>

                {/* Subtitle */}
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  {t.hero.subtitle}
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    95% Satisfacción del Cliente
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-golden-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    CMS Compliance Certified
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-golden-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    50+ Proyectos Exitosos
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="group bg-golden-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-golden-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <span className="flex items-center justify-center">
                      {t.hero.cta1}
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-golden-500 hover:text-golden-600 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      {t.hero.cta2}
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Content - Professional Dashboard Preview */}
              <div className="relative lg:pl-8">
                <div className="relative">
                  {/* Main Dashboard Card */}
                  <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">Analytics Dashboard</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Mock Chart */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-end h-32 border-b border-gray-100 pb-2">
                        <div className="flex flex-col items-center">
                          <div className="w-8 bg-golden-500 rounded-t" style={{height: '60%'}}></div>
                          <span className="text-xs text-gray-500 mt-1">Ene</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 bg-blue-500 rounded-t" style={{height: '80%'}}></div>
                          <span className="text-xs text-gray-500 mt-1">Feb</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 bg-golden-500 rounded-t" style={{height: '100%'}}></div>
                          <span className="text-xs text-gray-500 mt-1">Mar</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 bg-blue-500 rounded-t" style={{height: '75%'}}></div>
                          <span className="text-xs text-gray-500 mt-1">Abr</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 bg-golden-500 rounded-t" style={{height: '90%'}}></div>
                          <span className="text-xs text-gray-500 mt-1">May</span>
                        </div>
                      </div>
                      
                      {/* Stats */}
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

                  {/* Floating Cards */}
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                    <div className="text-sm font-medium">Medicare Analytics</div>
                    <div className="text-2xl font-bold">24/7</div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                    <div className="text-sm font-medium">Real-time Data</div>
                    <div className="text-2xl font-bold">Live</div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-golden-100 to-blue-100 rounded-full opacity-30 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-500">Scroll para explorar</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-golden-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Medicare Advantage Section */}
      <section id="medicare" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.medicare.title} <span className="text-golden-500">{t.medicare.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t.medicare.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {t.medicare.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1698306642516-9841228dcff3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxoZWFsdGhjYXJlJTIwYW5hbHl0aWNzfGVufDB8fHxibHVlfDE3NDk3NjI2Mzl8MA&ixlib=rb-4.1.0&q=85" 
                alt="Healthcare Analytics" 
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.medicare.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    {feature.icon === 'medical' && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {feature.icon === 'document' && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {feature.icon === 'chart' && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                    {feature.icon === 'star' && (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {t.medicare.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.services.title} <span className="text-golden-500">{t.services.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-golden-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.services.service1.title}</h3>
              <p className="text-gray-600 mb-6">{t.services.service1.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {t.services.service1.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.services.service2.title}</h3>
              <p className="text-gray-600 mb-6">{t.services.service2.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {t.services.service2.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.services.service3.title}</h3>
              <p className="text-gray-600 mb-6">{t.services.service3.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {t.services.service3.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1717452716963-bc51037bd958?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGdyb3d0aHxlbnwwfHx8Ymx1ZXwxNzQ5NzQ4MTEwfDA&ixlib=rb-4.1.0&q=85" 
              alt="Business Growth" 
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-golden-900/80 to-blue-900/60 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">{t.services.ctaTitle}</h3>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-golden-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-golden-600 transition-colors"
                >
                  {t.services.ctaButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.about.title} <span className="text-golden-500">{t.about.titleHighlight}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t.about.description1}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t.about.description2}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {t.about.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-golden-500 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-golden-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-golden-600 transition-colors"
              >
                {t.about.cta}
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573497701175-00c200fd57f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBtZWV0aW5nfGVufDB8fHxibHVlfDE3NDk3NjE5MDV8MA&ixlib=rb-4.1.0&q=85" 
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.testimonials.title} <span className="text-golden-500">{t.testimonials.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[t.testimonials.testimonial1, t.testimonials.testimonial2, t.testimonials.testimonial3].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-golden-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${index === 0 ? 'bg-golden-100' : index === 1 ? 'bg-blue-100' : 'bg-green-100'} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`${index === 0 ? 'text-golden-600' : index === 1 ? 'text-blue-600' : 'text-green-600'} font-bold`}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.contact.title} <span className="text-golden-500">{t.contact.titleHighlight}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t.contact.description}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.contact.info.phone}</div>
                    <div className="text-gray-600">+1 (787) 555-0123</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.contact.info.email}</div>
                    <div className="text-gray-600">info@dataurea.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
                  src="https://images.unsplash.com/photo-1637665662134-db459c1bbb46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBtZWV0aW5nfGVufDB8fHxibHVlfDE3NDk3NjE5MDV8MA&ixlib=rb-4.1.0&q=85" 
                  alt="Professional Office" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.form.title}</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.company}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder={t.contact.form.companyPlaceholder}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder={t.contact.form.phonePlaceholder}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder={t.contact.form.messagePlaceholder}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-golden-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-golden-600 transition-colors"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0Q0QUYzNyIvPgo8cmVjdCB4PSI4IiB5PSIyMCIgd2lkdGg9IjQiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjE0IiB5PSIxNiIgd2lkdGg9IjQiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjIwIiB5PSIxMiIgd2lkdGg9IjQiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjI2IiB5PSI4IiB3aWR0aD0iNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" 
                  alt="Datáurea Logo" 
                  className="h-8 w-8"
                />
                <span className="ml-2 text-xl font-bold">DATÁUREA</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t.footer.tagline}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.services}</h4>
              <div className="space-y-2 text-sm text-gray-400">
                {t.footer.servicesList.map((service, index) => (
                  <div key={index}>{service}</div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.company}</h4>
              <div className="space-y-2 text-sm text-gray-400">
                {t.footer.companyList.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>+1 (787) 555-0123</div>
                <div>info@dataurea.com</div>
                <div>{t.contact.info.locationValue}</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Datáurea. {t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;