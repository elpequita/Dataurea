import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('analytics');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                  Inicio
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium transition-colors">
                  Servicios
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-golden-500 px-3 py-2 text-sm font-medium transition-colors">
                  Nosotros
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-golden-500 text-white px-6 py-2 rounded-lg hover:bg-golden-600 transition-colors font-medium">
                  Contacto
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
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
                Inicio
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-golden-500">
                Servicios
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-golden-500">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium bg-golden-500 text-white rounded-lg">
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <img 
            src="https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg" 
            alt="Data Analytics Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos
            <span className="text-golden-400 block">Datos en Decisiones</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Potencia tu negocio con inteligencia empresarial avanzada. Convertimos información compleja en insights accionables para el crecimiento de tu empresa en Puerto Rico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-golden-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-golden-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Consulta Gratuita
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border-2 border-golden-400 text-golden-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-golden-400 hover:text-white transition-all duration-300"
            >
              Ver Servicios
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-golden-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros <span className="text-golden-500">Servicios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales de Business Intelligence diseñadas específicamente para empresas puertorriqueñas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-golden-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análisis de Datos</h3>
              <p className="text-gray-600 mb-6">
                Convertimos datos complejos en información clara y accionable para impulsar la toma de decisiones estratégicas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dashboards interactivos
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reportes automatizados
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Análisis predictivo
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automatización de Procesos</h3>
              <p className="text-gray-600 mb-6">
                Optimizamos tus operaciones mediante la automatización inteligente de procesos empresariales.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flujos de trabajo automatizados
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Integración de sistemas
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Monitoreo continuo
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultoría Estratégica</h3>
              <p className="text-gray-600 mb-6">
                Te acompañamos en la definición e implementación de estrategias basadas en datos para tu crecimiento.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Análisis de mercado
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Planificación estratégica
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-golden-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Acompañamiento continuo
                </li>
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
                <h3 className="text-3xl font-bold mb-4">¿Listo para transformar tu negocio?</h3>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-golden-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-golden-600 transition-colors"
                >
                  Comienza Ahora
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
                Sobre <span className="text-golden-500">Datáurea</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos una empresa puertorriqueña especializada en Business Intelligence y análisis de datos. 
                Nuestro equipo combina experiencia técnica con profundo conocimiento del mercado local para 
                ofrecer soluciones que realmente impulsan el crecimiento empresarial.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Desde nuestra base en Puerto Rico, ayudamos a empresas de todos los tamaños a tomar decisiones 
                más inteligentes mediante el poder de sus datos. Creemos que cada organización tiene el potencial 
                de alcanzar la excelencia cuando cuenta con la información correcta en el momento preciso.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-golden-500 mb-2">50+</div>
                  <div className="text-gray-600">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-golden-500 mb-2">95%</div>
                  <div className="text-gray-600">Satisfacción del Cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-golden-500 mb-2">24/7</div>
                  <div className="text-gray-600">Soporte Técnico</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-golden-500 mb-2">5+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-golden-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-golden-600 transition-colors"
              >
                Conoce Más
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573497701175-00c200fd57f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBtZWV0aW5nfGVufDB8fHxibHVlfDE3NDk3NjE5MDV8MA&ixlib=rb-4.1.0&q=85" 
                alt="Professional Team" 
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-golden-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold mb-1">Expertos</div>
                <div className="text-sm opacity-90">en BI & Analytics</div>
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
              Lo que dicen nuestros <span className="text-golden-500">clientes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Testimonios reales de empresas que han transformado su negocio con nuestras soluciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-golden-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Datáurea transformó completamente nuestra forma de tomar decisiones. Los dashboards que crearon nos permiten ver el rendimiento de nuestras sucursales en tiempo real."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-golden-600 font-bold">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">María Rodríguez</div>
                  <div className="text-sm text-gray-600">CEO, Retail Express PR</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-golden-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "La automatización de nuestros procesos financieros nos ha ahorrado más de 20 horas semanales. El equipo de Datáurea es excepcional en su servicio."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">CL</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Carlos López</div>
                  <div className="text-sm text-gray-600">CFO, Constructora Borinquen</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-golden-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Increíble cómo pudieron integrar todos nuestros sistemas. Ahora tenemos una vista única de toda nuestra operación hotelera."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">AS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ana Santana</div>
                  <div className="text-sm text-gray-600">Directora, Hotel Caribe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transformemos tu negocio <span className="text-golden-500">juntos</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ¿Listo para convertir tus datos en tu ventaja competitiva? Contáctanos para una consulta gratuita 
                y descubre cómo podemos impulsar el crecimiento de tu empresa.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-golden-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono</div>
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
                    <div className="font-semibold text-gray-900">Email</div>
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
                    <div className="font-semibold text-gray-900">Ubicación</div>
                    <div className="text-gray-600">San Juan, Puerto Rico</div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita tu consulta gratuita</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email empresarial
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder="tu@empresa.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder="(787) 555-0123"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Cómo podemos ayudarte?
                  </label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                    placeholder="Cuéntanos sobre tus necesidades de Business Intelligence..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-golden-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-golden-600 transition-colors"
                >
                  Enviar Solicitud
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
                Transformando datos en decisiones inteligentes para empresas puertorriqueñas.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Análisis de Datos</div>
                <div>Automatización de Procesos</div>
                <div>Consultoría Estratégica</div>
                <div>Dashboards Interactivos</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Sobre Nosotros</div>
                <div>Nuestro Equipo</div>
                <div>Casos de Éxito</div>
                <div>Contacto</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>+1 (787) 555-0123</div>
                <div>info@dataurea.com</div>
                <div>San Juan, Puerto Rico</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Datáurea. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;