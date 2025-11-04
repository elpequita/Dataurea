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
      cta: "Consulta Especializada",
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
        "Empower your business with advanced business intelligence. We convert complex information into actionable insights for your company's growth in Puerto Rico.",
      cta1: "Free Consultation",
      cta2: "View Services",
      scrollText: "Scroll to explore",
    },
    medicare: {
      title: "Specialists in",
      titleHighlight: "Medicare Advantage",
      subtitle:
        "Specialized analysis for Medicare Advantage plans and medical data in Puerto Rico.",
      description:
        "Our team has deep experience in Medicare Advantage data analytics — helping organizations improve performance and outcomes.",
      cta: "Specialized Consultation",
    },
    about: {
      title: "About",
      titleHighlight: "Datáurea",
      description1:
        "We are a Puerto Rican company specialized in Business Intelligence and data analytics. Our team combines technical expertise with deep knowledge of the local market to offer solutions that drive business growth.",
      description2:
        "We help companies of all sizes make smarter decisions through the power of data. Every organization can achieve excellence with the right information at the right time.",
      stats: [
        { number: 50, suffix: "+", label: "Completed Projects" },
        { number: 95, suffix: "%", label: "Client Satisfaction" },
        { number: 24, suffix: "/7", label: "Technical Support" },
        { number: 5, suffix: "+", label: "Years of Experience" },
      ],
      cta: "Learn More",
    },
    contact: {
      title: "Let's transform your business",
      titleHighlight: "together",
      description:
        "Ready to turn your data into your competitive advantage? Contact us for a free consultation and discover how we can help your organization grow.",
      form: {
        title: "Request your free consultation",
        name: "Full Name",
        email: "Email",
        company: "Company",
        phone: "Phone",
        message: "How can we help you?",
        submit: "Send Request",
        success: "Thank you! Your request was successfully sent.",
      },
    },
    footer: {
      tagline:
        "Transforming data into intelligent decisions for Puerto Rican businesses.",
      copyright: "All rights reserved.",
    },
  },
};

/* ========= MAIN APP ========= */
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
      {/* ===== NAVBAR ===== */}
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

      {/* ===== HERO ===== */}
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
            {t.hero.title}{" "}
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

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.about.title}{" "}
            <span className="text-golden-600">{t.about.titleHighlight}</span>
          </motion.h2>
          <p className="text-lg text-gray-600 mb-4">{t.about.description1}</p>
          <p className="text-lg text-gray-600 mb-12">{t.about.description2}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.about.stats.map((s, i) => (
              <motion.div
                key={i}
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <h3 className="text-4xl font-bold text-golden-600">
                  <CountUp end={s.number} duration={2} /> {s.suffix}
                </h3>
                <p className="text-gray-600 mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.h2
            className="text-4xl font-bold mb-8 text-golden-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {language === "es" ? "Nuestros Servicios" : "Our Services"}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Analytics", "Automation", "Consulting"].map((x, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-golden-600 mb-3">
                  {
                    {
                      0:
                        language === "es"
                          ? "Análisis de Datos"
                          : "Data Analytics",
                      1:
                        language === "es"
                          ? "Automatización de Procesos"
                          : "Process Automation",
                      2:
                        language === "es"
                          ? "Consultoría Estratégica"
                          : "Strategic Consulting",
                    }[i]
                  }
                </h3>
                <p className="text-gray-600">
                  {
                    {
                      0: language === "es"
                        ? "Convertimos datos en decisiones estratégicas con dashboards y reportes automatizados."
                        : "Turning data into strategic insights through dashboards and automated reports.",
                      1: language === "es"
                        ? "Automatizamos flujos de trabajo e integramos sistemas de forma segura."
                        : "Automating workflows and integrating systems securely.",
                      2: language === "es"
                        ? "Te guiamos en la definición de estrategias basadas en datos."
                        : "Guiding your organization in defining data-driven strategies.",
                    }[i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              {t.contact.title}{" "}
              <span className="text-golden-600">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-gray-600 mb-6">{t.contact.description}</p>
            <ul className="space-y-2 text-gray-700">
              <li>📞 +1 (787) 403-1552</li>
              <li>✉️ info@dataurea.com</li>
              <li>📍 San Juan, Puerto Rico</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-8 shadow"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-golden-600 mb-6">
              {t.contact.form.title}
            </h3>
            {success ? (
              <motion.div
                className="bg-golden-100 text-golden-700 p-5 rounded-lg text-center font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {t.contact.form.success}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "email", "company", "phone"].map((f) => (
                  <div key={f}>
                    <label className="block text-sm font-medium mb-1">
                      {t.contact.form[f]}
                    </label>
                    <input
                      name={f}
                      type={f === "email" ? "email" : "text"}
                      required={["name", "email"].includes(f)}
                      value={formData[f]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-golden-500 outline-none"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-golden-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-golden-500 text-white py-3 rounded-lg font-semibold hover:bg-golden-600 transition ${
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting
                    ? language === "es"
                      ? "Enviando..."
                      : "Sending..."
                    : t.contact.form.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p className="mb-2">{t.footer.tagline}</p>
        <p className="text-sm opacity-75">
          © {new Date().getFullYear()} Datáurea — {t.footer.copyright}
        </p>
      </footer>
    </div>
  );
}

export default App;
