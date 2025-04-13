// src/components/DisplayDemo.tsx
import React, { useState } from "react";
import ClassDisplay from "./ClassDisplay";
import { usePrevious } from "../hooks/usePrevious";
import { motion, AnimatePresence } from "framer-motion";

const DisplayDemo: React.FC = () => {
  const [displayMode, setDisplayMode] = useState<string>("block");

  const containerClasses =
    displayMode !== "hidden"
      ? `${displayMode} bg-gray-200 p-4`
      : "bg-gray-200 p-4 hidden";

  const prevContainerClasses = usePrevious(containerClasses);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Demo de Display y Posicionamiento
      </h2>

      {/* Grid responsive: 1 columna en móvil y 3 columnas en md */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Controles en la columna izquierda */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <label className="font-semibold">
            Selecciona el tipo de display:
          </label>
          <select
            value={displayMode}
            onChange={(e) => setDisplayMode(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="block">Block</option>
            <option value="inline-block">Inline-Block</option>
            <option value="inline">Inline</option>
            <option value="flex">Flex</option>
            <option value="inline-flex">Inline Flex</option>
            <option value="grid">Grid</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>

        {/* Área de demostración en columnas 2 y 3 */}
        <div className="relative min-h-[150px] md:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={containerClasses}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className={containerClasses}
            >
              <div className="bg-blue-500 text-white p-2 m-2 rounded">
                Elemento 1
              </div>
              <div className="bg-green-500 text-white p-2 m-2 rounded">
                Elemento 2
              </div>
              <div className="bg-red-500 text-white p-2 m-2 rounded">
                Elemento 3
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <ClassDisplay
        containerClasses={containerClasses}
        previousClasses={prevContainerClasses}
      />
    </div>
  );
};

export default DisplayDemo;
