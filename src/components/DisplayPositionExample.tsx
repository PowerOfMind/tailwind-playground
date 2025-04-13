// src/components/DisplayPositionExample.tsx
import React, { useState } from "react";

const DisplayPositionExample: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-4 mt-8 relative h-64 border border-gray-300">
      <h2 className="text-2xl font-bold mb-4">Display y Posicionamiento</h2>
      <button
        onClick={() => setToggle(!toggle)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        {toggle ? "Ocultar" : "Mostrar"} Caja Posicionada
      </button>

      {toggle && (
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-300 z-10 flex items-center justify-center">
          Posicionado
        </div>
      )}

      <div className="absolute bottom-4 right-4 w-32 h-32 bg-blue-300 flex items-center justify-center">
        Fijo
      </div>
    </div>
  );
};

export default DisplayPositionExample;
