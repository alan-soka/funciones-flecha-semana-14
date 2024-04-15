// ejemplo sin funcion flecha

function sumar(a, b) {
    return a + b
}
vf

// ejemplo con funcion flecha

const prueba = (edad, nombre) => (
    { nombre : nombre, edad: edad }
)



// ejemplo de this

const test = {
    moto: 42,
    coche: function () {
        return this.moto;
    },
};


// ejemplo funcion flecha

const test0 = {
    moto0: 42,
    coche0: () => {
      return this.moto0;
    }
  };
