// src/components/ColorsAndBordersDemo.tsx
import React, { useState } from "react";
import ClassDisplay from "./ClassDisplay";
import { usePrevious } from "../hooks/usePrevious";
import { motion, AnimatePresence } from "framer-motion";

const ColorsAndBordersDemo: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("bg-blue-500");
  const [borderColor, setBorderColor] = useState<string>("border-green-500");
  const [borderRadius, setBorderRadius] = useState<string>("rounded");

  const containerClasses = `p-4 ${bgColor} border ${borderColor} ${borderRadius} transition-all duration-300`;
  const prevContainerClasses = usePrevious(containerClasses);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Demo de Colores y Bordes</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Controles */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <label className="font-semibold">Color de Fondo:</label>
          <select
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="bg-blue-500">Azul</option>
            <option value="bg-green-500">Verde</option>
            <option value="bg-red-500">Rojo</option>
            <option value="bg-yellow-500">Amarillo</option>
          </select>
          <label className="font-semibold">Color de Borde:</label>
          <select
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="border-blue-500">Azul</option>
            <option value="border-green-500">Verde</option>
            <option value="border-red-500">Rojo</option>
            <option value="border-yellow-500">Amarillo</option>
          </select>
          <label className="font-semibold">Radio del Borde:</label>
          <select
            value={borderRadius}
            onChange={(e) => setBorderRadius(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="rounded-none">Ninguno</option>
            <option value="rounded-sm">Pequeño</option>
            <option value="rounded">Normal</option>
            <option value="rounded-lg">Grande</option>
            <option value="rounded-full">Completo</option>
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
              <p className="text-white">
                Este es un ejemplo de color y borde. Experimenta con las
                opciones.
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

export default ColorsAndBordersDemo;
