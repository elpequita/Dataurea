import React, { useState, useEffect } from 'react';
import './App.css';

/* =====================================
   DATAÚREA WEBSITE APP.JS (Full Version)
   ===================================== */

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const [showToast, setShowToast] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
      setShowToast(true);
      if (window.history.replaceState) {
        const cleanUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
      }
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSendError(null);

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const resp = await fetch('https://formspree.io/f/mblpvwze', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (resp.ok) {
        form.reset();
        setShowToast(true);
      } else {
        const err = await resp.json().catch(() => ({}));
        setSendError(err?.error || 'Error sending form. Please try again.');
      }
    } catch (err) {
      setSendError('Network error. Check your connection.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="App">
      {/* ✅ NAVBAR */}
      <nav className="navbar">
        <div className="logo">DATÁUREA</div>
        <div className="menu">
          <button onClick={toggleLanguage}>{language === 'es' ? 'EN' : 'ES'}</button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>
        </div>
      </nav>

      {/* ✅ HERO */}
      <section id="home" className="hero">
        <h1>Transformamos Datos en Decisiones</h1>
        <p>Consultoría estratégica en Business Intelligence y analítica moderna.</p>
      </section>

      {/* ✅ CONTACT SECTION */}
      <section id="contact" className="contact">
        <h2>Solicita tu consulta gratuita</h2>

        <form className="contact-form" onSubmit={handleConsultationSubmit}>
          <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

          <input type="text" name="name" required placeholder="Nombre completo" />
          <input type="email" name="email" required placeholder="Email empresarial" />
          <input type="text" name="company" placeholder="Empresa" />
          <input type="tel" name="phone" placeholder="Teléfono" />
          <textarea name="message" required placeholder="¿Cómo podemos ayudarte?" rows="4"></textarea>

          <input type="hidden" name="_subject" value="New consultation request from dataurea.com" />

          <button type="submit" disabled={sending}>
            {sending ? 'Enviando…' : 'Enviar Solicitud'}
          </button>
          {sendError && <p className="error">{sendError}</p>}
        </form>
      </section>

      {/* ✅ TOAST */}
      {showToast && (
        <div className="toast success">
          <p>✅ Message sent successfully! We’ll get back to you shortly.</p>
        </div>
      )}

      {/* ✅ FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} Datáurea. Transformando datos en decisiones inteligentes.</p>
      </footer>
    </div>
  );
}

export default App;
