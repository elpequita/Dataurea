import React from "react";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-4xl font-bold text-golden-600 mb-4">¡Gracias!</h1>
      <p className="text-gray-700 text-lg mb-6">
        Tu mensaje fue enviado exitosamente. Te contactaremos pronto.
      </p>
      <a href="/" className="text-golden-600 underline">
        Volver al inicio
      </a>
    </div>
  );
}
