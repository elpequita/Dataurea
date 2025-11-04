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
      industries: "Industrias",
      testimonials: "Testimonios",
      process: "Cómo Trabajamos",
      contact: "Contacto",
    },
    hero: {
      badge: "Inteligencia Empresarial Avanzada",
      title: "Transformamos tus datos en",
      titleHighlight: "decisiones estratégicas",
      subtitle:
        "Ayudamos a las empresas puertorriqueñas a convertir información compleja en estrategias accionables mediante análisis, automatización y visualización de datos.",
      cta1: "Consulta Gratuita",
      cta2: "Ver Servicios",
    },
    services: {
      title: "Nuestros",
      titleHighlight: "Servicios",
      subtitle:
        "Soluciones integrales de Business Intelligence, automatización y consultoría estratégica.",
      service1: {
        title: "Análisis de Datos",
        description:
          "Convierta sus datos en insights claros para tomar decisiones basadas en evidencia.",
        features: [
          "Dashboards interactivos",
          "Reportes automatizados",
          "Análisis predictivo",
        ],
      },
      service2: {
        title: "Automatización de Procesos",
        description:
          "Optimice operaciones con flujos de trabajo automatizados y monitoreo continuo.",
        features: [
          "Integración de sistemas",
          "Procesos inteligentes",
          "Reducción de errores operacionales",
        ],
      },
      service3: {
        title: "Consultoría Estratégica",
        description:
          "Alineamos su estrategia empresarial con la analítica avanzada para alcanzar resultados medibles.",
        features: [
          "Auditoría de datos",
          "Planificación estratégica",
          "Acompañamiento continuo",
        ],
      },
      ctaTitle: "¿Listo para escalar con datos?",
      ctaButton: "Comienza Ahora",
    },
    about: {
      title: "Sobre",
      titleHighlight: "Datáurea",
      description1:
        "Somos una empresa puertorriqueña de Business Intelligence que combina conocimiento técnico y visión estratégica para ayudarle a crecer.",
      description2:
        "Nuestra misión es transformar la forma en que las empresas usan los datos — simplificando decisiones, optimizando operaciones y potenciando resultados.",
      stats: [
        { number: 50, suffix: "+", label: "Proyectos Completados" },
        { number: 95, suffix: "%", label: "Satisfacción del Cliente" },
        { number: 24, suffix: "/7", label: "Soporte Técnico" },
        { number: 5, suffix: "+", label: "Años de Experiencia" },
      ],
      cta: "Conoce Más",
    },
    industries: {
      title: "Industrias a las que Servimos",
      subtitle:
        "Experiencia en sectores donde los datos impulsan la toma de decisiones.",
      list: [
        { icon: "🏥", name: "Salud y Seguros Médicos" },
        { icon: "🏦", name: "Finanzas y Seguros" },
        { icon: "🏗️", name: "Construcción e Ingeniería" },
        { icon: "📱", name: "Tecnología y Startups" },
      ],
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      subtitle:
        "Resultados medibles y satisfacción comprobada en cada proyecto.",
      list: [
        {
          text: "“Dataúrea nos ayudó a reducir el tiempo de reportes en un 70% y automatizar procesos críticos.”",
          author: "Director de Operaciones, Cliente Salud",
        },
        {
          text: "“Nuestros dashboards ahora cuentan una historia clara. Tomamos decisiones más rápidas y precisas.”",
          author: "Gerente Financiero",
        },
        {
          text: "“El acompañamiento de Dataúrea cambió nuestra cultura de datos en menos de tres meses.”",
          author: "CEO, Empresa de Tecnología",
        },
      ],
    },
    process: {
      title: "Cómo Trabajamos",
      subtitle:
        "Un proceso diseñado para transformar tus datos en resultados tangibles.",
      steps: [
        {
          title: "Descubrimiento",
          desc: "Analizamos tus necesidades y objetivos de negocio.",
        },
        {
          title: "Modelado de Datos",
          desc: "Diseñamos estructuras limpias y optimizadas.",
        },
        {
          title: "Implementación y Automatización",
          desc: "Creamos dashboards y procesos inteligentes.",
        },
        {
          title: "Entrenamiento y Soporte",
          desc: "Acompañamos a tu equipo para asegurar adopción total.",
        },
      ],
    },
    contact: {
      title: "Conversemos sobre tu proyecto",
      titleHighlight: "hoy",
      description:
        "Agenda una consulta gratuita y descubre cómo tus datos pueden impulsar decisiones más inteligentes.",
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
        "Dataúrea — impulsando decisiones empresariales con inteligencia y precisión.",
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
      badge: "Advanced Business Intelligence",
      title: "We turn your data into",
      titleHighlight: "strategic decisions",
      subtitle:
        "We help Puerto Rican businesses turn complex data into actionable strategies through analytics, automation, and visualization.",
      cta1: "Free Consultation",
      cta2: "View Services",
    },
    services: {
      title: "Our",
      titleHighlight: "Services",
      subtitle:
        "Comprehensive BI, automation, and strategic consulting for data-driven organizations.",
      service1: {
        title: "Data Analysis",
        description:
          "Transform your raw data into actionable insights that drive performance.",
        features: [
          "Interactive dashboards",
          "Automated reports",
          "Predictive analytics",
        ],
      },
      service2: {
        title: "Process Automation",
        description:
          "Optimize your workflows with intelligent automation and integration.",
        features: [
          "System integration",
          "Smart workflows",
          "Operational efficiency",
        ],
      },
      service3: {
        title: "Strategic Consulting",
        description:
          "We align your business strategy with analytics to achieve measurable outcomes.",
        features: [
          "Data audits",
          "Strategic planning",
          "Continuous support",
        ],
      },
      ctaTitle: "Ready to scale with data?",
      ctaButton: "Start Now",
    },
    about: {
      title: "About",
      titleHighlight: "Datáurea",
      description1:
        "We are a Puerto Rican Business Intelligence company that combines technical knowledge and strategic vision to help you grow.",
      description2:
        "Our mission is to transform how organizations use data — simplifying decisions, optimizing operations, and driving measurable results.",
      stats: [
        { number: 50, suffix: "+", label: "Completed Projects" },
        { number: 95, suffix: "%", label: "Client Satisfaction" },
        { number: 24, suffix: "/7", label: "Technical Support" },
        { number: 5, suffix: "+", label: "Years of Experience" },
      ],
      cta: "Learn More",
    },
    industries: {
      title: "Industries We Serve",
      subtitle:
        "Experience across sectors where data drives decision-making.",
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
        "Real results and measurable impact across our projects.",
      list: [
        {
          text: "“Dataúrea helped us cut reporting time by 70% and automate key workflows.”",
          author: "Operations Director, Healthcare Client",
        },
        {
          text: "“Our dashboards finally tell a story — decisions are faster and more confident.”",
          author: "Finance Manager",
        },
        {
          text: "“Their support transformed our data culture in less than three months.”",
          author: "Tech Company CEO",
        },
      ],
    },
    process: {
      title: "How We Work",
      subtitle:
        "A process designed to turn your data into measurable outcomes.",
      steps: [
        {
          title: "Discovery",
          desc: "We identify your goals, pain points, and data opportunities.",
        },
        {
          title: "Data Modeling",
          desc: "We design optimized, scalable, and clean data structures.",
        },
        {
          title: "Implementation & Automation",
          desc: "We build dashboards and smart automation workflows.",
        },
        {
          title: "Training & Support",
          desc: "We guide your team to ensure lasting adoption and impact.",
        },
      ],
    },
    contact: {
      title: "Let’s talk about your project",
      titleHighlight: "today",
      description:
        "Book a free consultation and discover how your data can become your competitive advantage.",
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
        "Dataúrea — empowering business decisions with intelligence and precision.",
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
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
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
            <p className="text-gray-600 text-lg max-w-xl">{t.hero.subtitle}</p>
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

      {/* Services */}
      {/* (Services + About sections here — identical to previous version) */}

      {/* Industries */}
      <section id="industries" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.industries.title}
          </h2>
          <p className="text-gray-600 mb-10">{t.industries.subtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.industries.list.map((ind, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow p-6 rounded-xl border border-gray-100"
              >
                <div className="text-4xl mb-3">{ind.icon}</div>
                <p className="font-semibold text-gray-700">{ind.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-600 mb-10">{t.testimonials.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.list.map((ts, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl shadow"
              >
                <p className="italic text-gray-600">“{ts.text}”</p>
                <p className="mt-4 font-semibold text-golden-600">
                  {ts.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="process" className="py-24 bg-gradient-to-br from-white via-gray-50 to-golden-50">
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
                <h3 className="text-xl font-semibold text-golden-600 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Footer */}
      {/* Use your previously updated contact section with phone/email and footer */}
    </div>
  );
}
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

