// src/components/ClassDisplay.tsx
import React from "react";

interface ClassDisplayProps {
  containerClasses: string;
  /** Opcional: las clases anteriores para la comparación. */
  previousClasses?: string;
}

const ClassDisplay: React.FC<ClassDisplayProps> = ({
  containerClasses,
  previousClasses,
}) => {
  // Si no se provee previousClasses, se muestra solo la cadena actual.
  if (!previousClasses) {
    return (
      <div className="mt-4 p-2 border border-gray-300 rounded bg-gray-50">
        <p className="text-gray-700 font-mono text-sm">
          <span>className="</span>
          <span className="text-blue-500">{containerClasses}</span>
          <span>"</span>
        </p>
      </div>
    );
  }

  // Separamos las clases en tokens.
  const prevTokens = previousClasses.split(/\s+/).filter(Boolean);
  const currTokens = containerClasses.split(/\s+/).filter(Boolean);

  // Se muestran las clases anteriores con marcados para las que se eliminaron.
  const renderOldTokens = () => {
    return prevTokens.map((token, index) => {
      const isRemoved = !currTokens.includes(token);
      return (
        <span
          key={`old-${index}`}
          className={`mr-1 ${isRemoved ? "text-red-500 line-through" : ""}`}
        >
          {token}
        </span>
      );
    });
  };

  // Se muestran las clases actuales resaltando las nuevas.
  const renderNewTokens = () => {
    return currTokens.map((token, index) => {
      const isNew = !prevTokens.includes(token);
      return (
        <span
          key={`new-${index}`}
          className={`mr-1 ${isNew ? "text-green-500" : ""}`}
        >
          {token}
        </span>
      );
    });
  };

  return (
    <div className="mt-4 p-2 border border-gray-300 rounded bg-gray-50">
      <p className="text-gray-700 font-mono text-sm">
        <span className="font-semibold">Anterior:&nbsp;</span>
        {renderOldTokens()}
      </p>
      <p className="text-gray-700 font-mono text-sm">
        <span className="font-semibold">Actual:&nbsp;</span>
        {renderNewTokens()}
      </p>
    </div>
  );
};

export default ClassDisplay;
