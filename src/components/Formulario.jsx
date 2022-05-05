import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import Alerta from "./Alerta";

const Formulario = () => {
  const navigate = useNavigate()
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(20, "El nombre es muy largo")
      .required("Este campo es obligatorio"),
    empresa: Yup.string().required("Este campo es obligatorio"),
    email: Yup.string()
      .email("Formato no valido")
      .required("Este campo es obligatorio"),
    telefono: Yup.number()
      .typeError("Numero no valido")
      .integer("Numero no valido")
      .positive("Numero no valido")
  });

  const handleSubmit = async (valores) => {
    try {
      const url = 'http://localhost:4000/clientes'

      const respuesta = await fetch(url, {
        method:'POST',
        body: JSON.stringify(valores),
        headers: {
          'Content-type': 'application/json'
        }
      })
      console.log(respuesta);
      const resultado = await respuesta.json();
      console.log(resultado);
      navigate('/clientes');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-lg md:w-3/4 mx-auto">
      <h1 className="text-sky-600 font-bold text-2xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          notas: "",
        }}
        onSubmit={ async (values, {resetForm}) => {
          await handleSubmit(values);

          resetForm();
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => {
          
          return (
            <Form className="mt-10">
              <div>
                <label className="text-gray-500 font-bold mt-5" htmlFor="">
                  Nombre del cliente
                </label>
                <Field
                  className="w-full bg-slate-300 p-3 rounded-md mt-5 mb-5"
                  type="text"
                  placeholder="Nombre del cliente"
                  name="nombre"
                />
                {errors.nombre && touched.nombre ? (
                  <Alerta>{errors.nombre}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="text-gray-500 font-bold mt-5" htmlFor="">
                  Empresa
                </label>
                <Field
                  className="w-full bg-slate-300 p-3 rounded-md mt-5 mb-5"
                  type="text"
                  placeholder="Empresa del cliente"
                  name="empresa"
                />
                {errors.empresa && touched.empresa ? (
                  <Alerta>{errors.empresa}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="text-gray-500 font-bold mt-5" htmlFor="">
                  Email del cliente
                </label>
                <Field
                  className="w-full bg-slate-300 p-3 rounded-md mt-5 mb-5"
                  type="email"
                  placeholder="Empresa del cliente"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <Alerta>{errors.email}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="text-gray-500 font-bold mt-5" htmlFor="">
                  Telefono
                </label>
                <Field
                  className="w-full bg-slate-300 p-3 rounded-md mt-5 mb-5"
                  type="tel"
                  placeholder="Telefono del cliente"
                  name="telefono"
                />
                {errors.telefono && touched.telefono ? (
                  <Alerta>{errors.telefono}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="text-gray-500 font-bold mt-5" htmlFor="">
                  Notas
                </label>
                <Field
                  as="textarea"
                  className="w-full bg-slate-300 p-3 rounded-md mt-5 mb-5 h-40"
                  type="tel"
                  placeholder="Telefono del cliente"
                  name="notas"
                />
                {errors.notas && touched.notas ? (
                  <Alerta>{errors.notas}</Alerta>
                ) : null}
              </div>

              <input
                type="submit"
                value="Agregar cliente"
                className="uppercase bg-indigo-500 w-full p-2 font-bold rounded-md cursor-pointer"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Formulario;
