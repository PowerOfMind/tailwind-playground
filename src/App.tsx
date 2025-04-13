// src/App.tsx
import React from "react";
import FlexExample from "./components/FlexExample";
import GridExample from "./components/GridExample";
import SpacingExample from "./components/SpacingExample";
import DisplayPositionExample from "./components/DisplayPositionExample";
import AnimationExample from "./components/AnimationExample";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Tailwind CSS Interactivo
      </h1>
      <FlexExample />
      <GridExample />
      <SpacingExample />
      <DisplayPositionExample />
      <AnimationExample />
    </div>
  );
};

export default App;
