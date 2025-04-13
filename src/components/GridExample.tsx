// src/components/GridExample.tsx
import React, { useState } from "react";

const GridExample: React.FC = () => {
  const [cols, setCols] = useState(3);

  return (
    <div className="p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Ejemplo de Grid</h2>
      <div className="mb-4">
        <label htmlFor="cols" className="mr-2">
          Número de Columnas:{" "}
        </label>
        <input
          id="cols"
          type="number"
          value={cols}
          onChange={(e) => setCols(parseInt(e.target.value) || 1)}
          className="border rounded px-2"
          min={1}
          max={6}
        />
      </div>
      <div className={`grid gap-4 grid-cols-${cols}`}>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-purple-200 p-4 flex items-center justify-center"
          >
            {index + 1}
          </div>
        ))}
      </div>
      <p className="text-sm mt-2 text-gray-600">
        Cambia el número de columnas para ver la reconfiguración del grid.
      </p>
    </div>
  );
};

export default GridExample;
