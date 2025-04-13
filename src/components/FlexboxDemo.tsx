// src/components/FlexboxDemo.tsx
import React, { useState } from "react";
import ClassDisplay from "./ClassDisplay";
import { usePrevious } from "../hooks/usePrevious";
import { motion, AnimatePresence } from "framer-motion";

const FlexboxDemo: React.FC = () => {
  const [direction, setDirection] = useState<string>("flex-row");

  const containerClasses = `flex ${direction} gap-4 bg-gray-100 p-4 transition-all duration-300`;
  const prevContainerClasses = usePrevious(containerClasses);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Demo de Flexbox</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Controles */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <label className="font-semibold">Dirección:</label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="flex-row">Row</option>
            <option value="flex-col">Column</option>
            <option value="flex-row-reverse">Row Reverse</option>
            <option value="flex-col-reverse">Column Reverse</option>
          </select>
        </div>

        {/* Área de demostración */}
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
              <div className="bg-blue-500 text-white p-4 rounded">
                Elemento 1
              </div>
              <div className="bg-green-500 text-white p-4 rounded">
                Elemento 2
              </div>
              <div className="bg-red-500 text-white p-4 rounded">
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

export default FlexboxDemo;
