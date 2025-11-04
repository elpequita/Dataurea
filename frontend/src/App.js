import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./App.css";

const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
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
        "Somos una empresa puertorriqueña especializada en Business Intelligence y análisis de datos.",
      description2:
        "Ayudamos a empresas a tomar decisiones más inteligentes mediante el poder de sus datos.",
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
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Leading Business Intelligence in Puerto Rico",
      title: "Transforming",
      titleHighlight: "Data into Decisions",
      subtitle:
        "Empower your business with advanced BI. We convert complex information into actionable insights for growth.",
      cta1: "Free Consultation",
      cta2: "View Services",
    },
    services: {
      title: "Our",
      titleHighlight: "Services",
      subtitle:
        "Comprehensive Business Intelligence solutions designed for Puerto Rican companies",
      service1: {
        title: "Data Analysis",
        description:
          "We turn complex data into clear insights for strategic decisions.",
        features: [
          "Interactive dashboards",
          "Automated reports",
          "Predictive analytics",
        ],
      },
      service2: {
        title: "Process Automation",
        description:
          "We optimize your operations through intelligent automation.",
        features: [
          "Automated workflows",
          "System integration",
          "Continuous monitoring",
        ],
      },
      service3: {
        title: "Strategic Consulting",
        description:
          "We help define and implement data-driven strategies.",
        features: [
          "Market analysis",
          "Strategic planning",
          "Continuous support",
        ],
      },
      ctaTitle: "Ready to transform your business?",
      ctaButton: "Start Now",
    },
    about: {
      title: "About",
      titleHighlight: "Datáurea",
      description1:
        "We are a Puerto Rican company specialized in Business Intelligence and data analysis.",
      description2:
        "We help organizations make smarter decisions using data power.",
      stats: [
        { number: 50, suffix: "+", label: "Completed Projects" },
        { number: 95, suffix: "%", label: "Client Satisfaction" },
        { number: 24, suffix: "/7", label: "Technical Support" },
        { number: 5, suffix: "+", label: "Years of Experience" },
      ],
      cta: "Learn More",
      badge: "BI & Analytics Experts",
    },
    contact: {
      title: "Let’s transform your business",
      titleHighlight: "together",
      description: "Ready to turn your data into an advantage?",
      form: {
        title: "Request your free consultation",
        name: "Full name",
        email: "Business email",
        company: "Company",
        phone: "Phone",
        message: "How can we help you?",
        submit: "Send Request",
        success: "Thank you! Your message has been sent successfully.",
      },
    },
    footer: {
      tagline:
        "Transforming data into intelligent decisions for Puerto Rican companies.",
      copyright: "All rights reserved.",
    },
  },
};

function App() {
  const [language, setLanguage] = useState("es");
  const t = translations[language];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <span className="text-2xl font-bold text-golden-600">DATÁUREA</span>
          <div className="hidden md:flex items-center space-x-6">
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
              onClick={() =>
                setLanguage(language === "es" ? "en" : "es")
              }
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:border-golden-500"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20"
      >
        <div className="max-w-7xl px-6 mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-golden-100 text-golden-700 px-4 py-2 rounded-full text-sm font-semibold">
              {t.hero.badge}
            </div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              {t.hero.title}{" "}
              <span className="text-golden-600 block">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-golden-600 hover:bg-golden-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
              >
                {t.hero.cta1}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="border border-golden-600 text-golden-600 px-6 py-3 rounded-lg font-semibold hover:bg-golden-50 transition"
              >
                {t.hero.cta2}
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1700498466261-824cbd01974e"
              alt="Analytics dashboard"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {t.services.title}{" "}
            <span className="text-golden-600">
              {t.services.titleHighlight}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 max-w-3xl mx-auto mb-12"
          >
            {t.services.subtitle}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[t.services.service1, t.services.service2, t.services.service3].map(
              (srv, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 text-left"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{srv.description}</p>
                  <ul className="space-y-2 text-gray-700">
                    {srv.features.map((f, j) => (
                      <li key={j} className="flex items-center">
                        <svg
                          className="w-4 h-4 text-golden-600 mr-2"
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
              )
            )}
          </div>

          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1717452716963-bc51037bd958"
              alt="Business Growth"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-golden-800/70 to-gray-900/70 flex flex-col justify-center items-center text-white">
              <h3 className="text-3xl font-semibold mb-4">
                {t.services.ctaTitle}
              </h3>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-golden-600 hover:bg-golden-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                {t.services.ctaButton}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.about.title}{" "}
              <span className="text-golden-600">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 mb-4">{t.about.description1}</p>
            <p className="text-gray-600 mb-8">{t.about.description2}</p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-golden-600"
                  >
                    <CountUp end={stat.number} duration={2} />{stat.suffix}
                  </motion.div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-golden-600 hover:bg-golden-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              {t.about.cta}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1573497701175-00c200fd57f0"
              alt="Professional Team"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-golden-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold mb-1">
                {t.about.stats[0].number}
                {t.about.stats[0].suffix}
              </div>
              <div className="text-sm opacity-90">{t.about.badge}</div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-white via-gray-50 to-golden-50"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.contact.title}{" "}
              <span className="text-golden-600">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 mb-10">{t.contact.description}</p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-golden-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>San Juan, Puerto Rico</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-golden-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H18C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>787 403 1552</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-golden-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>carlos.perez@dataurea.com</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t.contact.form.title}
            </h3>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const payload = Object.fromEntries(formData.entries());
                try {
                  const res = await fetch("https://formspree.io/f/xayvwjln", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });
                  if (res.ok) {
                    e.target.reset();
                    const box = document.getElementById("success-box");
                    box.classList.remove("hidden");
                    setTimeout(() => box.classList.add("hidden"), 4000);
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.form.name}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-golden-500 focus:ring-1 focus:ring-golden-500 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.email}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-golden-500 focus:ring-1 focus:ring-golden-500 outline-none"
                />
              </div>
              <input
                type="text"
                name="company"
                placeholder={t.contact.form.company}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-golden-500 focus:ring-1 focus:ring-golden-500 outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder={t.contact.form.phone}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-golden-500 focus:ring-1 focus:ring-golden-500 outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder={t.contact.form.message}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-golden-500 focus:ring-1 focus:ring-golden-500 outline-none resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-golden-600 text-white py-3 rounded-lg font-semibold hover:bg-golden-700 transition"
              >
                {t.contact.form.submit}
              </motion.button>

              <div
                id="success-box"
                className="hidden mt-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-center font-medium animate-fadeIn"
              >
                {t.contact.form.success}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <h4 className="text-xl font-semibold text-golden-500">DATÁUREA</h4>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.footer.tagline}</p>
          <div className="h-px bg-gray-700 w-24 mx-auto my-4"></div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dataúrea — {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
