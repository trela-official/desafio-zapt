import React from 'react';
import Button from '../Button';
import ImageMain from '../../assets/img-main.png';
import IconRed from '../../assets/icone-red.png';
import IconBlue from '../../assets/icone-blue.png';
import IconEclipse from '../../assets/eclipse.png';
import IconWhite from '../../assets/icone-white.png';

import './welcome.css';

function Welcome() {
  return (
    <main className="container">
      <div className="section-welcome">
        <div className="content-welcome">
          <h1>Bem vindo Marcio,</h1>
          <p>Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar.</p>
          <h2>O que você prefere?</h2>
          <div className="btn-welcome">
            <Button title="Criar um grupo" />
            <Button title="Entrar em um grupo" />
          </div>
        </div>
        <div className="img-welcome">
          <img src={ ImageMain } alt="Imagem" />
        </div>
        <div className="icones-main">
          <img
            className="icon-red"
            src={ IconRed }
            alt="Icone vermelho"
          />
          <img
            className="icon-blue"
            src={ IconBlue }
            alt="Icon azul"
          />
          <img
            className="icon-eclipse"
            src={ IconEclipse }
            alt="Icon eclipse"
          />
          <img
            className="icon-white"
            src={ IconWhite }
            alt="Icon branco"
          />
        </div>
      </div>
      <p className="p-main">Qualquer dúvida que você tiver é só nos chamar no nosso número de <a href="#">WhatsApp</a></p>
    </main>
  );
}

export default Welcome;