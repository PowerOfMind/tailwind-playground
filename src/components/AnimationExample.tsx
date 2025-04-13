// src/components/AnimationExample.tsx
import React, { useState } from "react";

const AnimationExample: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Ejemplo de Animaciones</h2>
      <button
        onClick={() => setActive(!active)}
        className="mb-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-300"
      >
        {active ? "Detener Animación" : "Iniciar Animación"}
      </button>

      <div
        className={`w-32 h-32 bg-indigo-300 transition-transform duration-700 ${
          active
            ? "transform scale-125 rotate-12"
            : "transform scale-100 rotate-0"
        } flex items-center justify-center`}
      >
        Animado
      </div>
    </div>
  );
};

export default AnimationExample;
