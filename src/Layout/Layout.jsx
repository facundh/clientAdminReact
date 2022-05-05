import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;
  return (
    <div className="md:flex md:min-h-screen w-full">
      <div className="md:w-1/4 bg-stone-600 px-1 py-10">
        <h2 className="text-center text-2xl font-black text-sky-600 text-decoration-line: underline">
          Administrador
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              urlActual === "/clientes"
              ? "text-black font-bold"
              : "text-emerald-500"
            }  mt-2  text-xl block text-sky-400/50`}
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${
              urlActual === "/clientes/nuevo"
              ? "text-black font-bold"
              : "text-emerald-500"
            }  mt-2  text-xl block text-sky-400/50`}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>

      <div className="md:w-3/4 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
