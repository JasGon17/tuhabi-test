import {
    object,
    string,
    number,
  } from 'yup';

const NombreCliente = object().shape({
  nombre: string().required('Nombre completo requerido.'),
  apellido: string().required('Apellidos son requeridos.'),
});

const EMailCliente = object().shape({
    email: string()
    .required('Email es requerido.')
    .matches(/^\S+@\S+$/i, 'Formato e-mail invalido.'),
});
const DireccionCliente = object().shape({
    direccion: string().required('Dirección es requerida.'),
});
const NumeroPisoApartamento = object().shape({
    numeroPiso: string().required('Este campo es requerido.'),
});