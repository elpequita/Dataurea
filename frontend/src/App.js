@@ -1,4 +1,4 @@
import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';

/* =========================
@@ -247,19 +247,19 @@ function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const t = translations[language];

  // ✅ Success Toast state and effect
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
      setShowToast(true);
      // Remove ?sent=1 from URL
      // Remove ?sent=1 from URL (works on localhost & prod)
      if (window.history.replaceState) {
        const cleanUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
      }
      // Auto-hide after 5s
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
@@ -476,7 +476,7 @@ function App() {
            </h2>
          </div>

          {/* Simple custom tabs (no JS deps) */}
          {/* Simple columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ops */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
@@ -674,62 +674,67 @@ function App() {
              </div>
            </div>

            {/* Form (static) */}
            {/* Form (Formspree) */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.form.title}</h3>
<form
  className="space-y-6"
  action="https://formspree.io/f/mblpvwze"
  method="POST"
>
  <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

  <input
    type="text"
    name="name"
    required
    placeholder={t.contact.form.namePlaceholder}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
  />
  <input
    type="email"
    name="email"
    required
    placeholder={t.contact.form.emailPlaceholder}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
  />
  <input
    type="text"
    name="company"
    placeholder={t.contact.form.companyPlaceholder}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
  />
  <input
    type="tel"
    name="phone"
    placeholder={t.contact.form.phonePlaceholder}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
  />
  <textarea
    rows="4"
    name="message"
    required
    placeholder={t.contact.form.messagePlaceholder}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
  ></textarea>

  <input type="hidden" name="_subject" value="New consultation request from dataurea.com" />
  <input type="hidden" name="_next" value="https://www.dataurea.com/?sent=1" />

  <button
    type="submit"
    className="w-full bg-golden-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-golden-600 transition-colors"
  >
    {t.contact.form.submit}
  </button>
</form>

          
              <form
                className="space-y-6"
                action="https://formspree.io/f/mblpvwze"
                method="POST"
              >
                {/* Honeypot anti-spam */}
                <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder={t.contact.form.companyPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder={t.contact.form.phonePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                />
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                ></textarea>

                {/* Email subject & redirect back with success flag */}
                <input type="hidden" name="_subject" value="New consultation request from dataurea.com" />
                <input type="hidden" name="_next" value="/?sent=1" />

                <button
                  type="submit"
                  className="w-full bg-golden-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-golden-600 transition-colors"
                  onClick={(e) => { e.currentTarget.disabled = true; }}
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
@@ -800,32 +805,32 @@ function App() {
          </div>
        </div>
      </footer>
         {/* ✅ Success Toast */}
{showToast && (
  <div className="fixed bottom-6 right-6 z-[9999]">
    <div className="flex items-start gap-3 rounded-xl bg-white shadow-2xl border border-green-200 p-4 w-[320px]">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
        <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L3.293 10.12a1 1 0 111.414-1.414L8 12l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-900">Message sent</p>
        <p className="text-sm text-gray-600">Thanks! We’ll get back to you shortly.</p>
      </div>
      <button
        onClick={() => setShowToast(false)}
        aria-label="Close"
        className="text-gray-400 hover:text-gray-600"
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.415L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.415L8.586 10 3.636 5.05l1.414-1.414L10 8.586z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
)}
            

      {/* ✅ Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <div className="flex items-start gap-3 rounded-xl bg-white shadow-2xl border border-green-200 p-4 w-[320px]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
              <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L3.293 10.12a1 1 0 111.414-1.414L8 12l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Message sent</p>
              <p className="text-sm text-gray-600">Thanks! We’ll get back to you shortly.</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              aria-label="Close"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.415L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.415L8.586 10 3.636 5.05l1.414-1.414L10 8.586z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
