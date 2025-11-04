import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const t = (en, es) => (language === "en" ? en : es);

  return (
    <div className={`app ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      {/* ===== Navbar ===== */}
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        } shadow-sm`}
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#hero">
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
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
                <a className="nav-link" href="#contact">
                  {t("Contact", "Contacto")}
                </a>
              </li>
              <li className="nav-item d-flex align-items-center mx-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => setDarkMode(!darkMode)}
                  title={t("Toggle dark mode", "Cambiar modo oscuro")}
                >
                  {darkMode ? <FaSun /> : <FaMoon />}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-sm btn-outline-primary"
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
          background:
            darkMode
              ? "linear-gradient(135deg, #1b1b1b, #2d2e82)"
              : "linear-gradient(135deg, #ffffff, #e6e9ff)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container"
        >
          <h1 className="display-4 fw-bold mb-3">
            {t("Visual Strategy Consulting for Smarter Decisions", "Consultoría de Estrategia Visual para Decisiones Inteligentes")}
          </h1>
          <p className="lead mb-4">
            {t(
              "We turn complex data into clear, executive-ready insights.",
              "Convertimos datos complejos en información clara y lista para ejecutivos."
            )}
          </p>
          <a href="#services" className="btn btn-primary btn-lg px-4">
            {t("Explore Services", "Explorar Servicios")}
          </a>
        </motion.div>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-4 text-center">
              {t("About Us", "Sobre Nosotros")}
            </h2>
            <p className="fs-5 text-center mx-auto" style={{ maxWidth: "800px" }}>
              {t(
                "Dataúrea provides Business Intelligence solutions that empower healthcare organizations, financial firms, and government agencies to make faster, smarter, data-driven decisions.",
                "Dataúrea ofrece soluciones de Inteligencia de Negocios que empoderan a organizaciones de salud, empresas financieras y agencias gubernamentales a tomar decisiones más rápidas e inteligentes basadas en datos."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section id="services" className={`py-5 ${darkMode ? "bg-secondary bg-opacity-10" : "bg-light"}`}>
        <div className="container">
          <h2 className="fw-bold mb-5 text-center">
            {t("Our Services", "Nuestros Servicios")}
          </h2>
          <div className="row g-4">
            {[
              {
                title: t("Data Visualization & Dashboards", "Visualización de Datos y Dashboards"),
                text: t(
                  "Interactive BI dashboards that reveal trends and drive better decisions.",
                  "Dashboards interactivos que revelan tendencias y ayudan a tomar mejores decisiones."
                ),
              },
              {
                title: t("Process Automation", "Automatización de Procesos"),
                text: t(
                  "Streamline workflows with custom automations that save time and reduce errors.",
                  "Optimiza flujos de trabajo con automatizaciones personalizadas que ahorran tiempo y reducen errores."
                ),
              },
              {
                title: t("Data Strategy & Governance", "Estrategia y Gobernanza de Datos"),
                text: t(
                  "Build strong foundations for secure, compliant, and scalable data use.",
                  "Crea bases sólidas para un uso de datos seguro, escalable y en cumplimiento normativo."
                ),
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="col-md-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`card h-100 border-0 shadow-sm rounded-4 ${darkMode ? "bg-dark text-light" : ""}`}>
                  <div className="card-body text-center p-4">
                    <h5 className="fw-bold mb-3">{s.title}</h5>
                    <p className="text-muted">{s.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-5 text-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-4">{t("Contact Us", "Contáctanos")}</h2>
            <p className="fs-5 mb-4">
              {t(
                "Let’s discuss how Dataúrea can transform your data strategy.",
                "Hablemos sobre cómo Dataúrea puede transformar tu estrategia de datos."
              )}
            </p>

            <div className="d-flex justify-content-center gap-3">
              <a
                href="mailto:info@dataurea.com"
                className="btn btn-outline-primary"
              >
                <FaEnvelope className="me-2" /> info@dataurea.com
              </a>
              <a
                href="https://linkedin.com/company/dataurea"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary"
              >
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer
        className={`text-center py-3 mt-5 ${darkMode ? "bg-dark text-light" : "bg-light text-muted"}`}
      >
        <p className="mb-0">
          © {new Date().getFullYear()} Dataúrea — {t("All rights reserved.", "Todos los derechos reservados.")}
        </p>
      </footer>
    </div>
  );
}

export default App;
