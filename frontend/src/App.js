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
