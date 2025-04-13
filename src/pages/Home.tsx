import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        Bienvenido a Tailwind Playground
      </h1>
      <p className="mb-4">
        Explora las diferentes demos interactivas para aprender cómo funciona
        Tailwind CSS en diversas áreas:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <Link to="/display" className="text-blue-500 hover:underline">
            Display y Posicionamiento
          </Link>
        </li>
        <li>
          <Link to="/flexbox" className="text-blue-500 hover:underline">
            Flexbox
          </Link>
        </li>
        <li>
          <Link to="/grid" className="text-blue-500 hover:underline">
            Grid
          </Link>
        </li>
        <li>
          <Link to="/spacing" className="text-blue-500 hover:underline">
            Espaciado
          </Link>
        </li>
        <li>
          <Link to="/typography" className="text-blue-500 hover:underline">
            Tipografía
          </Link>
        </li>
        <li>
          <Link to="/colors" className="text-blue-500 hover:underline">
            Colores y Bordes
          </Link>
        </li>
        <li>
          <Link to="/visual-effects" className="text-blue-500 hover:underline">
            Efectos Visuales
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
