// src/components/TypographyDemo.tsx
import React, { useState } from "react";
import ClassDisplay from "./ClassDisplay";
import { usePrevious } from "../hooks/usePrevious";
import { motion, AnimatePresence } from "framer-motion";

const TypographyDemo: React.FC = () => {
  const [fontSize, setFontSize] = useState<string>("text-base");
  const [fontWeight, setFontWeight] = useState<string>("font-normal");

  const containerClasses = `p-4 border rounded ${fontSize} ${fontWeight} transition-all duration-300`;
  const prevContainerClasses = usePrevious(containerClasses);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Demo de Tipografía</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Controles */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <label className="font-semibold">Tamaño de fuente:</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="text-xs">Extra Pequeño</option>
            <option value="text-sm">Pequeño</option>
            <option value="text-base">Base</option>
            <option value="text-lg">Grande</option>
            <option value="text-xl">Extra Grande</option>
            <option value="text-2xl">2XL</option>
            <option value="text-3xl">3XL</option>
          </select>
          <label className="font-semibold">Peso de fuente:</label>
          <select
            value={fontWeight}
            onChange={(e) => setFontWeight(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="font-thin">Thin</option>
            <option value="font-light">Light</option>
            <option value="font-normal">Normal</option>
            <option value="font-bold">Bold</option>
            <option value="font-black">Black</option>
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
              <p>
                Este es un ejemplo de tipografía. Cambia el tamaño y el peso de
                la fuente usando los selectores.
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

export default TypographyDemo;
