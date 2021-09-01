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
    if (parseInt(base) === 16) {
      let hex = '';
      switch (parseInt(numero) % parseInt(base)) {
        case 10:
          hex = 'A';
          break;
        case 11:
          hex = 'B';
          break;
        case 12:
          hex = 'C';
          break;
        case 13:
          hex = 'D';
          break;
        case 14:
          hex = 'E';
          break;
        case 15:
          hex = 'F';
          break;
        default:
          hex = (parseInt(numero) % parseInt(base)).toString();
          break;
      }
      resultado += hex;
    } else {
      resultado += (parseInt(numero) % parseInt(base)).toString();
    }
    numero = Math.trunc(parseInt(numero) / parseInt(base));
  }
  return resultado.split('').reverse().join('');
};