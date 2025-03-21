"use client";

import { useState } from "react";

export default function Narrador() {
  const [narrando, setNarrando] = useState(false);

  function alternarNarrador() {
    if (narrando) {
      speechSynthesis.cancel();
      setNarrando(false);
    } else {
      const texto = document.body.innerText; // Captura el texto de la página
      if (texto) {
        const narrador = new SpeechSynthesisUtterance(texto);
        narrador.lang = "es-ES"; // Español
        speechSynthesis.speak(narrador);
        setNarrando(true);
        
        // Detectar cuando termina
        narrador.onend = () => setNarrando(false);
      }
    }
  }

  return (
    <button
      onClick={alternarNarrador}
      className={`fixed bottom-5 right-5 p-4 rounded-full shadow-lg transition 
        ${narrando ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"} 
        text-white text-xl outline-none focus:ring-4 
        focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-800`}
    >
      🔊
    </button>
  );
}
