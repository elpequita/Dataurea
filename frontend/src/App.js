import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./App.css";

/* ========= TRANSLATIONS ========= */
const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      medicare: "Medicare Advantage",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      badge: "Business Intelligence Líder en Puerto Rico",
      title: "Transformamos",
      titleHighlight: "Datos en Decisiones",
      subtitle:
        "Potencia tu negocio con inteligencia empresarial avanzada. Convertimos información compleja en insights accionables para el crecimiento de tu empresa en Puerto Rico.",
      cta1: "Consulta Gratuita",
      cta2: "Ver Servicios",
      scrollText: "Desliza para explorar",
    },
    medicare: {
      title: "Especialistas en",
      titleHighlight: "Medicare Advantage",
      subtitle:
        "Análisis especializado para planes Medicare Advantage e información médica en Puerto Rico",
      description:
        "Nuestro equipo cuenta con experiencia específica en el análisis de datos de Medicare Advantage, ayudando a organizaciones de salud a optimizar sus programas y mejorar los resultados de los pacientes.",
      features: [
        {
          title: "Análisis de Riesgo Médico",
          description:
            "Evaluamos y modelamos riesgos de salud para optimizar la gestión de miembros de Medicare Advantage.",
          icon: "medical",
        },
        {
          title: "Reportes CMS Compliance",
          description:
            "Generamos reportes automáticos que cumplen con las regulaciones de CMS para planes MA.",
          icon: "document",
        },
        {
          title: "Analytics de Utilización",
          description:
            "Analizamos patrones de utilización médica para identificar oportunidades de mejora.",
          icon: "chart",
        },
        {
          title: "Quality Measures Tracking",
          description:
            "Monitoreamos y optimizamos las métricas de calidad HEDIS y Star Ratings.",
          icon: "star",
        },
      ],
      cta: "Consulta Especializada",
    },
    services: {
      title: "Nuestros",
      titleHighlight: "Servicios",
      subtitle:
        "Soluciones integrales de Business Intelligence diseñadas específicamente para empresas puertorriqueñas",
      service1: {
        title: "Análisis de Datos",
        description:
          "Convertimos datos complejos en información clara y accionable para impulsar la toma de decisiones estratégicas.",
        features: [
          "Dashboards interactivos",
          "Reportes automatizados",
          "Análisis predictivo",
        ],
      },
      service2: {
        title: "Automatización de Procesos",
        description:
          "Optimizamos tus operaciones mediante la automatización inteligente de procesos empresariales.",
        features: [
          "Flujos de trabajo automatizados",
          "Integración de sistemas",
          "Monitoreo continuo",
        ],
      },
      service3: {
        title: "Consultoría Estratégica",
        description:
          "Te acompañamos en la definición e implementación de estrategias basadas en datos para tu crecimiento.",
        features: [
          "Análisis de mercado",
          "Planificación estratégica",
          "Acompañamiento continuo",
        ],
      },
      ctaTitle: "¿Listo para transformar tu negocio?",
      ctaButton: "Comienza Ahora",
    },
    about: {
      title: "Sobre",
      titleHighlight: "Datáurea",
      description1:
        "Somos una empresa puertorriqueña especializada en Business Intelligence y análisis de datos. Nuestro equipo combina experiencia técnica con conocimiento del mercado local para ofrecer soluciones que realmente impulsan el crecimiento.",
      description2:
        "Ayudamos a empresas a tomar decisiones más inteligentes mediante el poder de sus datos. Cada organización tiene el potencial de alcanzar la excelencia con la información correcta en el momento preciso.",
      stats: [
        { number: 50, suffix: "+", label: "Proyectos Completados" },
        { number: 95, suffix: "%", label: "Satisfacción del Cliente" },
        { number: 24, suffix: "/7", label: "Soporte Técnico" },
        { number: 5, suffix: "+", label: "Años de Experiencia" },
      ],
      cta: "Conoce Más",
      badge: "Expertos en BI & Analytics",
    },
    contact: {
      title: "Transformemos tu negocio",
      titleHighlight: "juntos",
      description:
        "¿Listo para convertir tus datos en tu ventaja competitiva? Contáctanos para una consulta gratuita y descubre cómo podemos impulsar el crecimiento de tu empresa.",
      form: {
        title: "Solicita tu consulta gratuita",
        name: "Nombre completo",
        email: "Correo electrónico",
        company: "Empresa",
        phone: "Teléfono",
        message: "¿Cómo podemos ayudarte?",
        submit: "Enviar Solicitud",
        success: "¡Gracias! Tu solicitud ha sido enviada correctamente.",
      },
    },
    footer: {
      tagline:
        "Transformando datos en decisiones inteligentes para empresas puertorriqueñas.",
      copyright: "Todos los derechos reservados.",
    },
  },
};

function App() {
  const [language, setLanguage] = useState("es");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const t = translations[language];

  const scrollToSection = (id) => {
    const s = document.getElementById(id);
    if (s) s.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    try {
      const res = await fetch("https://formspree.io/f/xayvwjln", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSuccess(false), 7000);
    }
  };

  return (
    <div className="App scroll-smooth font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <span className="text-2xl font-bold text-golden-600">DATÁUREA</span>
          <div className="hidden md:flex space-x-6 items-center">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="hover:text-golden-600 font-medium transition"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:border-golden-500"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block bg-golden-100 text-golden-700 px-4 py-1 rounded-full mb-5 font-semibold">
            {t.hero.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t.hero.title} {" "}
            <span className="bg-gradient-to-r from-golden-500 to-golden-700 text-transparent bg-clip-text">
              {t.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-golden-500 text-white px-8 py-3 rounded-lg hover:bg-golden-600 transition"
            >
              {t.hero.cta1}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border border-golden-500 text-golden-600 px-8 py-3 rounded-lg hover:bg-golden-500 hover:text-white transition"
            >
              {t.hero.cta2}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-gray-500 flex flex-col items-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm mb-1">{t.hero.scrollText}</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-golden-500 mt-2 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Medicare Section */}
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
                src="https://images.unsplash.com/photo-1698306642516-9841228dcff3"
                alt="Healthcare Analytics"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.medicare.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection("contact")}
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
            {[t.services.service1, t.services.service2, t.services.service3].map((s, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-600 mb-6">{s.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-golden-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1717452716963-bc51037bd958"
              alt="Business Growth"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-golden-900/80 to-blue-900/60 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">{t.services.ctaTitle}</h3>
                <button
                  onClick={() => scrollToSection("contact")}
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
      <section id="about" className="py-20
