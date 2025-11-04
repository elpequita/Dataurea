import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const t = (en, es) => (language === "en" ? en : es);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert(t("Please fill all fields.", "Por favor completa todos los campos."));
    }
  };

  return (
    <div className={`app ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      {/* ===== Navbar ===== */}
      <nav
        className={`navbar navbar-expand-lg fixed-top shadow-sm ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-white"
        }`}
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 text-primary" href="#hero">
            Dataúrea
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  {t("About", "Nosotros")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  {t("Services", "Servicios")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#consultation">
                  {t("Consultation", "Consulta")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  {t("Contact", "Contacto")}
                </a>
              </li>
              <li className="nav-item mx-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => setDarkMode(!darkMode)}
                  title={t("Toggle dark mode", "Cambiar modo oscuro")}
                >
                  {darkMode ? <FaSun /> : <FaMoon />}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => setLanguage(language === "en" ? "es" : "en")}
                >
                  {language === "en" ? "ES" : "EN"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center text-center vh-100"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #1b1b1b, #2d2e82)"
            : "linear-gradient(135deg, #ffffff, #dbe4ff)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container"
        >
          <h1 className="display-4 fw-bold mb-3 text-primary">
            {t(
              "Visual Strategy Consulting for Smarter Decisions",
              "Consultoría de Estrategia Visual para Decisiones Inteligentes"
            )}
          </h1>
          <p className="lead mb-4">
            {t(
              "We turn complex data into clear, executive-ready insights.",
              "Convertimos datos complejos en información clara y lista para ejecutivos."
            )}
          </p>
          <a href="#consultation" className="btn btn-primary btn-lg px-4">
            {t("Schedule a Consultation", "Solicitar Consulta")}
          </a>
        </motion.div>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4 text-primary">
            {t("About Dataúrea", "Sobre Dataúrea")}
          </h2>
          <p className="fs-5 mx-auto" style={{ maxWidth: "850px" }}>
            {t(
              "Dataúrea specializes in transforming raw data into strategic intelligence. We build dashboards, automate reporting, and create actionable insights for healthcare, financial, and corporate clients.",
              "Dataúrea se especializa en transformar datos crudos en inteligencia estratégica. Creamos dashboards, automatizamos reportes y generamos insights accionables para clientes de salud, finanzas y corporativos."
            )}
          </p>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section
        id="services"
        className={`py-5 ${darkMode ? "bg-secondary bg-opacity-25" : "bg-light"}`}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-5 text-primary">
            {t("Our Services", "Nuestros Servicios")}
          </h2>
          <div className="row g-4">
            {[
              {
                title: t("Data Dashboards", "Dashboards de Datos"),
                text: t(
                  "Interactive BI dashboards with key performance metrics and trends.",
                  "Dashboards interactivos con métricas de desempeño y tendencias clave."
                ),
              },
              {
                title: t("Automation & Integration", "Automatización e Integración"),
                text: t(
                  "Automate repetitive processes and integrate multiple data sources securely.",
                  "Automatiza procesos repetitivos e integra múltiples fuentes de datos de forma segura."
                ),
              },
              {
                title: t("Healthcare Analytics", "Analítica en Salud"),
                text: t(
                  "HEDIS, RAF, CDPS, and financial analytics for provider networks and IPAs.",
                  "Analítica de HEDIS, RAF, CDPS y finanzas para redes de proveedores e IPAs."
                ),
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="col-md-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className={`card h-100 border-0 shadow-sm rounded-4 p-4 ${
                    darkMode ? "bg-dark text-light" : "bg-white"
                  }`}
                >
                  <h5 className="fw-bold text-primary">{s.title}</h5>
                  <p className="mt-3">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Consultation Form Section ===== */}
      <section id="consultation" className="py-5 text-center">
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 className="fw-bold mb-4 text-primary">
            {t("Request a Consultation", "Solicitar Consulta")}
          </h2>
          <p className="mb-4">
            {t(
              "Send us your information and we’ll reach out to schedule a personalized consultation.",
              "Envíanos tu información y nos comunicaremos contigo para coordinar una consulta personalizada."
            )}
          </p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="text-start">
              <div className="mb-3">
                <label className="form-label">{t("Name", "Nombre")}</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">{t("Message", "Mensaje")}</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary px-4">
                {t("Submit", "Enviar")}
              </button>
            </form>
          ) : (
            <div className="alert alert-success mt-4">
              {t("Thank you! We’ll be in touch soon.", "¡Gracias! Nos comunicaremos pronto.")}
            </div>
          )}
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className={`py-5 ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-primary">{t("Contact", "Contacto")}</h2>
          <p className="mb-3 fs-5">
            <FaEnvelope className="me-2" /> info@dataurea.com
          </p>
          <p className="mb-4 fs-5">
            <FaPhone className="me-2" /> +1 (787) 555-1234
          </p>
          <a
            href="https://linkedin.com/company/dataurea"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary"
          >
            <FaLinkedin className="me-2" /> LinkedIn
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className={`text-center py-3 ${darkMode ? "bg-dark text-light" : "bg-light text-muted"}`}>
        © {new Date().getFullYear()} Dataúrea — {t("All rights reserved.", "Todos los derechos reservados.")}
      </footer>
    </div>
  );
}

export default App;
