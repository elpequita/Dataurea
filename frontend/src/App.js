import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./App.css";

/* =========================================================
   TRANSLATIONS (Spanish + English)
   ========================================================= */

const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      industries: "Industrias",
      testimonials: "Testimonios",
      process: "Cómo Trabajamos",
      contact: "Contacto",
    },
    hero: {
      badge: "Business Intelligence Líder en Puerto Rico",
      title: "Transformamos",
      titleHighlight: "Datos en Decisiones",
      subtitle:
        "Impulsamos tu empresa con soluciones de inteligencia empresarial, visualización avanzada y automatización de procesos.",
      cta1: "Consulta Gratuita",
      cta2: "Ver Servicios",
    },
    services: {
      title: "Nuestros",
      titleHighlight: "Servicios",
      subtitle:
        "Soluciones integrales de Business Intelligence adaptadas a empresas puertorriqueñas.",
      list: [
        {
          icon: "📊",
          title: "Análisis de Datos",
          desc: "Transformamos datos complejos en información útil para la toma de decisiones estratégicas.",
        },
        {
          icon: "⚙️",
          title: "Automatización de Procesos",
          desc: "Implementamos flujos de trabajo inteligentes para optimizar tus operaciones.",
        },
        {
          icon: "🧭",
          title: "Consultoría Estratégica",
          desc: "Definimos e implementamos estrategias basadas en datos para tu crecimiento.",
        },
      ],
    },
    about: {
      title: "Sobre",
      titleHighlight: "Datáurea",
      description1:
        "Somos una empresa puertorriqueña especializada en Business Intelligence y análisis de datos.",
      description2:
        "Combinamos conocimiento técnico y visión estratégica para ayudar a las organizaciones a crecer mediante el poder de sus datos.",
      stats: [
        { number: 50, suffix: "+", label: "Proyectos Completados" },
        { number: 95, suffix: "%", label: "Satisfacción del Cliente" },
        { number: 24, suffix: "/7", label: "Soporte Técnico" },
        { number: 5, suffix: "+", label: "Años de Experiencia" },
      ],
      cta: "Conoce Más",
    },
    industries: {
      title: "Industrias que Servimos",
      subtitle: "Experiencia en sectores donde los datos marcan la diferencia.",
      list: [
        { icon: "🏥", name: "Salud y Seguros Médicos" },
        { icon: "🏦", name: "Finanzas y Banca" },
        { icon: "🏗️", name: "Construcción e Ingeniería" },
        { icon: "📱", name: "Tecnología y Startups" },
      ],
    },
    testimonials: {
      title: "Qué Dicen Nuestros Clientes",
      subtitle:
        "Resultados reales y medibles de nuestras implementaciones BI.",
      list: [
        {
          text: "“Dataúrea redujo el tiempo de nuestros reportes en un 70% con automatización inteligente.”",
          author: "Director de Operaciones, Cliente Salud",
        },
        {
          text: "“Nuestros dashboards ahora cuentan historias. Las decisiones son más rápidas y confiables.”",
          author: "Gerente Financiero",
        },
        {
          text: "“Su acompañamiento transformó nuestra cultura de datos en menos de tres meses.”",
          author: "CEO, Empresa Tecnológica",
        },
      ],
    },
    process: {
      title: "Cómo Trabajamos",
      subtitle:
        "Un proceso diseñado para convertir tus datos en resultados tangibles.",
      steps: [
        {
          title: "Descubrimiento",
          desc: "Analizamos tus metas, retos y oportunidades de datos.",
        },
        {
          title: "Modelado de Datos",
          desc: "Diseñamos estructuras limpias, escalables y eficientes.",
        },
        {
          title: "Implementación y Automatización",
          desc: "Construimos dashboards y flujos automatizados.",
        },
        {
          title: "Entrenamiento y Soporte",
          desc: "Acompañamos a tu equipo para garantizar adopción y éxito.",
        },
      ],
    },
    contact: {
      title: "Hablemos de tu proyecto",
      titleHighlight: "hoy",
      description:
        "Agenda una consulta gratuita y descubre cómo tus datos pueden convertirse en tu ventaja competitiva.",
      form: {
        title: "Solicita tu consulta gratuita",
        name: "Nombre completo",
        email: "Correo electrónico",
        company: "Empresa",
        phone: "Teléfono",
        message: "¿Cómo podemos ayudarte?",
        submit: "Enviar",
        success: "¡Gracias! Tu mensaje fue enviado exitosamente.",
      },
    },
    footer: {
      tagline:
        "Datáurea — transformando datos en decisiones inteligentes para Puerto Rico.",
      copyright: "Todos los derechos reservados.",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      industries: "Industries",
      testimonials: "Testimonials",
      process: "How We Work",
      contact: "Contact",
    },
    hero: {
      badge: "Leading Business Intelligence in Puerto Rico",
      title: "Transforming",
      titleHighlight: "Data into Decisions",
      subtitle:
        "We help organizations turn information into strategic insight through advanced analytics and automation.",
      cta1: "Free Consultation",
      cta2: "View Services",
    },
    services: {
      title: "Our",
      titleHighlight: "Services",
      subtitle:
        "Comprehensive BI and automation solutions designed for modern businesses.",
      list: [
        {
          icon: "📊",
          title: "Data Analysis",
          desc: "Transforming raw data into actionable insights for better decision-making.",
        },
        {
          icon: "⚙️",
          title: "Process Automation",
          desc: "We build intelligent workflows to optimize daily operations.",
        },
        {
          icon: "🧭",
          title: "Strategic Consulting",
          desc: "Helping you define and implement a data-driven roadmap for growth.",
        },
      ],
    },
    about: {
      title: "About",
      titleHighlight: "Datáurea",
      description1:
        "We are a Puerto Rican Business Intelligence firm combining technical expertise and strategic vision.",
      description2:
        "Our mission is to help companies make smarter, faster, and more confident decisions with data.",
      stats: [
        { number: 50, suffix: "+", label: "Projects Completed" },
        { number: 95, suffix: "%", label: "Client Satisfaction" },
        { number: 24, suffix: "/7", label: "Technical Support" },
        { number: 5, suffix: "+", label: "Years Experience" },
      ],
      cta: "Learn More",
    },
    industries: {
      title: "Industries We Serve",
      subtitle: "Experience across sectors where data drives decisions.",
      list: [
        { icon: "🏥", name: "Healthcare & Insurance" },
        { icon: "🏦", name: "Finance & Banking" },
        { icon: "🏗️", name: "Construction & Engineering" },
        { icon: "📱", name: "Technology & Startups" },
      ],
    },
    testimonials: {
      title: "What Clients Say",
      subtitle:
        "Real stories of measurable impact achieved with Dataúrea.",
      list: [
        {
          text: "“Dataúrea helped us automate reporting and reduce manual work by 70%.”",
          author: "Operations Director, Healthcare Client",
        },
        {
          text: "“Our dashboards now tell a story. Decision-making has never been faster.”",
          author: "Finance Manager",
        },
        {
          text: "“They guided our data transformation from start to success.”",
          author: "CEO, Tech Company",
        },
      ],
    },
    process: {
      title: "How We Work",
      subtitle:
        "A structured process to ensure every project turns data into outcomes.",
      steps: [
        {
          title: "Discovery",
          desc: "We identify your goals, data sources, and business challenges.",
        },
        {
          title: "Modeling",
          desc: "We clean, organize, and model your data for scalability.",
        },
        {
          title: "Implementation",
          desc: "We build visual dashboards and automation flows.",
        },
        {
          title: "Training & Support",
          desc: "We train your team and provide continuous improvement.",
        },
      ],
    },
    contact: {
      title: "Let’s talk about your project",
      titleHighlight: "today",
      description:
        "Schedule a free consultation and discover how your data can become your competitive advantage.",
      form: {
        title: "Request your free consultation",
        name: "Full name",
        email: "Business email",
        company: "Company",
        phone: "Phone",
        message: "How can we help you?",
        submit: "Send Request",
        success: "Thank you! Your message was sent successfully.",
      },
    },
    footer: {
      tagline:
        "Datáurea — empowering business decisions with intelligence and precision.",
      copyright: "All rights reserved.",
    },
  },
};

/* =========================================================
   MAIN APP COMPONENT
   ========================================================= */

function App() {
  const [language, setLanguage] = useState("es");
  const t = translations[language];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App font-sans scroll-smooth">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <span className="text-2xl font-bold text-golden-600">DATÁUREA</span>

          <div className="hidden md:flex items-center space-x-6">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="hover:text-golden-600 font-medium transition-colors"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:border-golden-500 transition"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24"
      >
        <div className="max-w-7xl px-6 mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-golden-100 text-golden-700 px-4 py-2 rounded-full text-sm font-semibold">
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {t.hero.title}{" "}
              <span className="text-golden-600 block">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">{t.hero.subtitle}</p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection("contact")}
                className="bg-golden-600 hover:bg-golden-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
              >
                {t.hero.cta1}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection("services")}
                className="border border-golden-600 text-golden-600 px-8 py-3 rounded-lg font-semibold hover:bg-golden-50 transition"
              >
                {t.hero.cta2}
              </motion.button>
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
              alt="Analytics Dashboard"
              className="rounded-2xl shadow-2xl border border-gray-100"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}{" "}
            <span className="text-golden-600">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-gray-600 mb-10">{t.services.subtitle}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.list.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-golden-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t.about.title}{" "}
              <span className="text-golden-600">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t.about.description1}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {t.about.description2}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {t.about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-golden-600 mb-2">
                    <CountUp end={stat.number} duration={2} />{stat.suffix}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
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

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497701175-00c200fd57f0"
                alt="Team Collaboration"
                className="rounded-2xl shadow-2xl border border-gray-100"
              />
              <div className="absolute -bottom-6 -right-6 bg-golden-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold mb-1">
                  {t.about.stats[0].number}
                  {t.about.stats[0].suffix}
                </div>
                <div className="text-sm opacity-90">
                  {language === "es"
                    ? "Proyectos Completados"
                    : "Projects Completed"}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= INDUSTRIES SECTION ================= */}
      <section id="industries" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {t.industries.title}
          </motion.h2>
          <p className="text-gray-600 mb-12">{t.industries.subtitle}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.industries.list.map((ind, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md p-8 rounded-xl border border-gray-100 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-3">{ind.icon}</div>
                <p className="font-semibold text-gray-700">{ind.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section id="testimonials" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-600 mb-12">{t.testimonials.subtitle}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.list.map((ts, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow border border-gray-100"
              >
                <p className="italic text-gray-600 mb-4">“{ts.text}”</p>
                <p className="font-semibold text-golden-600">{ts.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section
        id="process"
        className="py-24 bg-gradient-to-br from-white via-gray-50 to-golden-50"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.process.title}
          </h2>
          <p className="text-gray-600 mb-12">{t.process.subtitle}</p>

          <div className="grid md:grid-cols-4 gap-8">
            {t.process.steps.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow border border-gray-100"
              >
                <div className="text-3xl text-golden-600 font-bold mb-2">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-golden-600 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-white via-gray-50 to-golden-50"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          {/* ===== Left: Info ===== */}
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
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

          {/* ===== Right: Form ===== */}
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
      const res = await fetch("https://formspree.io/f/mblpvwze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        e.target.reset();
        const box = document.getElementById("success-box");
        box.classList.remove("hidden");
        setTimeout(() => box.classList.add("hidden"), 4000);
      } else {
        alert("There was an issue sending your message. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Unable to send the form. Please check your connection.");
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

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-200 py-12 mt-12">
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
