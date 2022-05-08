import React from "react";


const Alerta = ({ children }) => {
  return (
    <>
      <div className=" bg-slate-600 uppercase text-red-700 text-center rounded-md p-3 my-4 font-bold">
        {children}
      </div>
      
    </>
  );
};

export default Alerta;
