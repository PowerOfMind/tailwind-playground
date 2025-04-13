// src/components/GridDemo.tsx
import React, { useState } from "react";
import ClassDisplay from "./ClassDisplay";
import { usePrevious } from "../hooks/usePrevious";
import { motion, AnimatePresence } from "framer-motion";

const GridDemo: React.FC = () => {
  const [cols, setCols] = useState<number>(3);
  const [gap, setGap] = useState<number>(4);

  const gridColsClasses: { [key: number]: string } = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
  };

  const gridGapClasses: { [key: number]: string } = {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    7: "gap-7",
    8: "gap-8",
    9: "gap-9",
    10: "gap-10",
  };

  const containerClasses = `grid ${gridColsClasses[cols]} ${gridGapClasses[gap]} bg-gray-100 p-4 transition-all duration-300`;
  const prevContainerClasses = usePrevious(containerClasses);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Demo de Grid</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Controles */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <label className="font-semibold">Número de columnas:</label>
          <input
            type="number"
            min={1}
            max={6}
            value={cols}
            onChange={(e) => setCols(parseInt(e.target.value) || 1)}
            className="p-2 border border-gray-300 rounded w-20"
          />
          <label className="font-semibold">Espacio (gap):</label>
          <input
            type="number"
            min={0}
            max={10}
            value={gap}
            onChange={(e) => setGap(parseInt(e.target.value) || 0)}
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
              {Array.from({ length: cols * 2 }).map((_, index) => (
                <div key={index} className="bg-blue-500 text-white p-4 rounded">
                  {index + 1}
                </div>
              ))}
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

export default GridDemo;
