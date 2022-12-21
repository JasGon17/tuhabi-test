const datosCliente = {
    type: 'text',
    nextPage: '/E-Mail-Cliente',
    Label: 'Nombre Completo',
    name: 'datosCliente',
    placeholder: 'Máximo Décimo Meridio',
    tooltip: 'Escribe tu nombre completo, incluyendo apellidos.',
};

const eMailCliente = {
    type: 'email',
    nextPage: '/Direccoin-Apartamento',
    Label: 'E-Mail',
    name: 'eMailCliente',
    placeholder: 't1@faker.com',
    tooltip: 'Escribe tu correo electrónico, verifica que sea un correo valido.',
};

const direccionApartamento = { 
    type: 'text',
    nextPage: '/Planta-Apartamento',
    Label: 'Dirección del Apartamento',
    name: 'direccionApartamento',
    placeholder: 'P. Sherman calle Wallaby 42 Sydney',
    tooltip: 'Escribe la direccion donde se encuentra el apartamento.',
};

const pisoApartamento = { 
    type: 'number',
    nextPage: '/Extras-Apartamento',
    Label: '¿En que piso se encuentra el apartamento?',
    name: 'pisoApartamento',
    tooltip: 'Indica en que piso se encuentra el apartamento, tomando en cuenta planta baja como piso 1.',
};

const extrasApartamento = { 
    type: 'check',
    nextPage: '/Cochera-Apartamento',
    Label: 'Selecciona si el apartamento cuenta con:',
    name: 'extrasApartamento',
    tooltip: 'Indica si el apartamento cuenta con alguno de los extras mencionados.',
};

const cocheraApartamento = { 
    type: 'option',
    nextPage: '/Precio-Apartamento',
    Label: '¿El Apartamento cuenta con cochera?',
    name: 'cocheraApartamento',
    tooltip: 'Indica si el apartamento cuenta con cochera.',
};

const costoApartamento = { 
    type: 'money',
    nextPage: '/Imagen-Apartamento',
    Label: '¿Cuàl es el costo del apartamento?',
    name: 'costoApartamento',
    placeholder: '2000,000.00',
    tooltip: 'Escribe el costo del apartamento y en que moneda esta indicado.',
};

const imageApartamento = { 
    type: 'image',
    nextPage: '/Ascensor-Apartamento',
    Label: 'Sube una imagen del apartamento',
    name: 'imageApartamento',
    tooltip: '',
};

const ascensorApartamento = { 
    type: 'option',
    nextPage: '/Resumen-TUHABI',
    Label: '¿Hay ascensor en el apartamento?',
    name: 'ascensorApartamento',
    tooltip: 'Indica si el edificio donde se encuentra el apartamento cuenta con ascensor.',
};

export const inputData = {
    datosCliente,
    direccionApartamento,
    eMailCliente,
    pisoApartamento,
    extrasApartamento,
    cocheraApartamento,
    costoApartamento,
    imageApartamento,
    ascensorApartamento,
  };