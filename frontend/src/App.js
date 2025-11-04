import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./App.css";

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
  en: {
    nav: {
      home: "Home",
      services: "Services",
      medicare: "Medicare Advantage",
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
      scrollText: "Scroll to explore",
    },
   
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
    {/* Medicare Section */}
      <section
        id="medicare"
        className="py-20 bg-gradient-to-br from-gray-50 to-golden-50"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {t.medicare.title}{" "}
            <span className="text-golden-600">
              {t.medicare.titleHighlight}
            </span>
          </motion.h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            {t.medicare.description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.medicare.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-golden-100 rounded-full text-golden-600">
                  {feature.icon === "medical" && "🩺"}
                  {feature.icon === "document" && "📄"}
                  {feature.icon === "chart" && "📊"}
                  {feature.icon === "star" && "⭐"}
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("contact")}
              className="bg-golden-600 hover:bg-golden-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              {t.medicare.cta}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.services.title}{" "}
              <span className="text-golden-600">
                {t.services.titleHighlight}
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[t.services.service1, t.services.service2, t.services.service3].map(
              (service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-5 bg-golden-100 text-golden-600 rounded-full flex items-center justify-center text-xl">
                    {i === 0 ? "📈" : i === 1 ? "⚙️" : "💡"}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {service.features.map((f, j) => (
                      <li key={j}>✔ {f}</li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 text-center bg-golden-50 py-12 rounded-xl shadow-inner"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              {t.services.ctaTitle}
            </h3>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-golden-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-golden-700 transition"
            >
              {t.services.ctaButton}
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              {t.about.title}{" "}
              <span className="text-golden-600">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-gray-600">{t.about.description1}</p>
            <p className="text-gray-600">{t.about.description2}</p>

            <div className="grid grid-cols-2 gap-6">
              {t.about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center bg-white shadow-md p-6 rounded-xl"
                >
                  <div className="text-3xl font-bold text-golden-600">
                    <CountUp
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("contact")}
              className="bg-golden-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-golden-700 transition"
            >
              {t.about.cta}
            </motion.button>
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
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
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
          {/* Contact text */}
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
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                📍 <span>San Juan, Puerto Rico</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                📞 <span>(787) 403-1552</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                ✉️ <span>carlos.perez@dataurea.com</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
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
                    const successBox = document.getElementById("success-box");
                    successBox.classList.remove("hidden");
                    setTimeout(
                      () => successBox.classList.add("hidden"),
                      4000
                    );
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

              {/* Success box */}
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
