import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="mb-4">Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
