import React from "react";
import { useNavigate } from "react-router-dom";

const AlertaUser = ({ children }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-slate-600 uppercase text-red-700 text-center rounded-md p-3 my-4 font-bold">
        {children}
      </div>
      <button
        type="button"
        className="block bg-black p-2 rounded-md w-full mb-2 font-bold uppercase text-xs text-white"
        onClick={() => navigate(`/clientes`)}
      >
        Volver atras
      </button>
    </>
  );
};

export default AlertaUser;
