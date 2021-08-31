export const base_para_dec = (numero, base) => {
  let numero_split = numero.toString().split('').reverse();
  let resultado = 0;
  for (let i = 0; i < numero_split.length; i++) {
    resultado += parseInt(numero_split[i]) * Math.pow(parseInt(base), i);
  }
  return resultado;
};

export const dec_para_base = (numero, base) => {
  let resultado = '';
  while (numero > 0) {
    resultado += (parseInt(numero) % parseInt(base)).toString();
    numero = Math.trunc(parseInt(numero) / parseInt(base));
  }
  return resultado.split('').reverse().join('');
};