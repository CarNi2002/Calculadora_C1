let expresion = '';
    
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error';

const ingresar = valor => {
  if (expresion === '0' && valor !== '.') {
    expresion = valor;
  } else {
    expresion += valor;
  }
  actualizarPantalla();
};

const borrar = () => {
  expresion = '';
  actualizarPantalla('0');
};

const calcular = () => {
  try {
    const resultado = Function(`return (${expresion})`)();
    expresion = resultado.toString();
    actualizarPantalla();
  } catch (error) {
    actualizarPantalla('Error');
  }
};

const actualizarPantalla = (valor) => {
  document.getElementById('pantalla').innerText = valor || expresion;
};