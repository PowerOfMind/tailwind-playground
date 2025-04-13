// src/components/SpacingDemo.tsx
import React, { useState } from "react";
import { paddingClasses, marginClasses } from "../utils/tailwindClasses";
import ClassDisplay from "./ClassDisplay";
import { usePrevious } from "../hooks/usePrevious";
import { motion, AnimatePresence } from "framer-motion";

const SpacingDemo: React.FC = () => {
  const [padding, setPadding] = useState<number>(4);
  const [margin, setMargin] = useState<number>(4);

  const containerClasses = `${paddingClasses[padding]} ${marginClasses[margin]} bg-gray-200 transition-all duration-300`;
  const prevContainerClasses = usePrevious(containerClasses);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Demo de Espaciado</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Controles */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <label className="font-semibold">Padding:</label>
          <input
            type="number"
            min={0}
            max={20}
            value={padding}
            onChange={(e) => setPadding(parseInt(e.target.value))}
            className="p-2 border border-gray-300 rounded w-20"
          />
          <label className="font-semibold">Margin:</label>
          <input
            type="number"
            min={0}
            max={20}
            value={margin}
            onChange={(e) => setMargin(parseInt(e.target.value))}
            className="p-2 border border-gray-300 rounded w-20"
          />
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
              <p className="text-gray-700">
                Este elemento tiene: <strong>{paddingClasses[padding]}</strong>{" "}
                y <strong>{marginClasses[margin]}</strong>
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

export default SpacingDemo;
