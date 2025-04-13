import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DisplayDemo from "../components/DisplayDemo";
import FlexboxDemo from "../components/FlexboxDemo";
import GridDemo from "../components/GridDemo";
import SpacingDemo from "../components/SpacingDemo";
import TypographyDemo from "../components/TypographyDemo";
import ColorsAndBordersDemo from "../components/ColorsAndBordersDemo";
import VisualEffectsDemo from "../components/VisualEffectsDemo";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex space-x-4">
            <Link to="/" className="hover:underline">
              Inicio
            </Link>
            <Link to="/display" className="hover:underline">
              Display
            </Link>
            <Link to="/flexbox" className="hover:underline">
              Flexbox
            </Link>
            <Link to="/grid" className="hover:underline">
              Grid
            </Link>
            <Link to="/spacing" className="hover:underline">
              Espaciado
            </Link>
            <Link to="/typography" className="hover:underline">
              Tipografía
            </Link>
            <Link to="/colors" className="hover:underline">
              Colores y Bordes
            </Link>
            <Link to="/visual-effects" className="hover:underline">
              Efectos Visuales
            </Link>
          </nav>
        </header>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/display" element={<DisplayDemo />} />
            <Route path="/flexbox" element={<FlexboxDemo />} />
            <Route path="/grid" element={<GridDemo />} />
            <Route path="/spacing" element={<SpacingDemo />} />
            <Route path="/typography" element={<TypographyDemo />} />
            <Route path="/colors" element={<ColorsAndBordersDemo />} />
            <Route path="/visual-effects" element={<VisualEffectsDemo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="bg-gray-200 text-center p-2">
          © 2025 Tailwind Playground
        </footer>
      </div>
    </Router>
  );
};

export default AppRouter;
