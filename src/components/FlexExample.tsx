// src/components/FlexExample.tsx
import React, { useState } from "react";

const FlexExample: React.FC = () => {
  const [reverse, setReverse] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Ejemplo de Flexbox</h2>
      <button
        onClick={() => setReverse(!reverse)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {reverse ? "Orden Normal" : "Invertir Orden"}
      </button>
      <div
        className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} gap-4`}
      >
        <div className="w-20 h-20 bg-red-300 flex items-center justify-center">
          1
        </div>
        <div className="w-20 h-20 bg-green-300 flex items-center justify-center">
          2
        </div>
        <div className="w-20 h-20 bg-yellow-300 flex items-center justify-center">
          3
        </div>
      </div>
    </div>
  );
};

export default FlexExample;
