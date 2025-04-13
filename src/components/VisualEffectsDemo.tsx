// src/components/VisualEffectsDemo.tsx
import React, { useState } from "react";
import ClassDisplay from "./ClassDisplay";
import { usePrevious } from "../hooks/usePrevious";
import { motion, AnimatePresence } from "framer-motion";

const VisualEffectsDemo: React.FC = () => {
  const [shadow, setShadow] = useState<string>("shadow");
  const [opacity, setOpacity] = useState<number>(100);

  const containerClasses = `p-4 bg-purple-500 text-white ${shadow} transition-all duration-300`;
  const prevContainerClasses = usePrevious(containerClasses);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Demo de Efectos Visuales</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Controles */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <label className="font-semibold">Sombra:</label>
          <select
            value={shadow}
            onChange={(e) => setShadow(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="shadow-none">Ninguna</option>
            <option value="shadow-sm">Pequeña</option>
            <option value="shadow">Normal</option>
            <option value="shadow-lg">Grande</option>
          </select>
          <label className="font-semibold">Opacidad:</label>
          <input
            type="range"
            min={0}
            max={100}
            value={opacity}
            onChange={(e) => setOpacity(parseInt(e.target.value))}
            className="p-2"
          />
          <span className="text-sm">{opacity}%</span>
        </div>

        {/* Área de demostración */}
        <div className="relative min-h-[150px] md:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={containerClasses + opacity} // Se puede incluir "opacity" en el key para animar cambios
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className={containerClasses}
              style={{ opacity: opacity / 100 }}
            >
              <p>
                Experimenta con efectos visuales. Cambia la sombra y la opacidad
                para ver el efecto.
              </p>
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

export default VisualEffectsDemo;
