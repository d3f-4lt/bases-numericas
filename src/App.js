import React, { useState } from 'react';
import { base_para_dec, dec_para_base } from './conversoes';
import './css/app.css'
import MeuForm from './form';
import MinhaNavBar from './nav';

const App = () => {
  const [bin, set_bin] = useState();
  const [oct, set_oct] = useState();
  const [dec, set_dec] = useState();
  const [hex, set_hex] = useState();

  const bin_f = (event) => {
    let numero = event.target.value;
    set_bin(numero);
    
    let _dec = base_para_dec(numero, 2);
    let _oct = dec_para_base(_dec, 8);
    let _hex = dec_para_base(_dec, 16)

    set_dec(_dec);
    set_oct(_oct);
    set_hex(_hex);
  };
  const oct_f = (event) => {
    let numero = event.target.value;
    set_oct(numero);

    let _dec = base_para_dec(numero, 2);
    let _bin = dec_para_base(_dec, 2);
    let _hex = dec_para_base(_dec, 16)

    set_dec(_dec);
    set_bin(_bin);
    set_hex(_hex);
  };
  const dec_f = (event) => {
    let numero = event.target.value;
    set_dec(numero);

    let _bin = dec_para_base(numero, 2);
    let _oct = dec_para_base(numero, 8)
    let _hex = dec_para_base(numero, 16)

    set_bin(_bin);
    set_oct(_oct);
    set_hex(_hex);
  };
  const hex_f = (event) => {
    let numero = event.target.value;
    set_hex(numero);

    let _dec = base_para_dec(numero, 2);
    let _bin = dec_para_base(_dec, 2);
    let _oct = dec_para_base(_dec, 8)

    set_dec(_dec);
    set_bin(_bin);
    set_oct(_oct);
  };

  return (
    <div id="app_root">
      <MinhaNavBar />
      <div className="app">
        <MeuForm
          bin_f={bin_f}
          oct_f={oct_f}
          dec_f={dec_f}
          hex_f={hex_f}
          bin={bin}
          oct={oct}
          dec={dec}
          hex={hex}
          />
      </div>
    </div>
  );
};

export default App;