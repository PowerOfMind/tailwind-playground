// src/components/SpacingExample.tsx
import React, { useState } from "react";

const SpacingExample: React.FC = () => {
  const [spacing, setSpacing] = useState(4);

  return (
    <div className="p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Ejemplo de Espaciado</h2>
      <div className="mb-4">
        <label htmlFor="spacing" className="mr-2">
          Espaciado:{" "}
        </label>
        <input
          id="spacing"
          type="number"
          value={spacing}
          onChange={(e) => setSpacing(parseInt(e.target.value) || 0)}
          className="border rounded px-2"
          min={0}
          max={20}
        />
      </div>
      <div className={`bg-blue-100 p-${spacing}`}>
        <p className="bg-blue-300 p-2">
          Este párrafo tiene un padding dinámico.
        </p>
      </div>
      <p className="text-sm mt-2 text-gray-600">
        Cambia el valor para ver cómo varía el padding del contenedor.
      </p>
    </div>
  );
};

export default SpacingExample;
