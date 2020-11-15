import React from 'react';
import classes from './Firmas.css';

const Firmas = () => {
    return (
      <div>
        <div class="grid-container">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div><img class="grid-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.france24.com%2Fmedia%2Fdisplay%2Fb7edcf24-abb6-11e9-ae12-005056a98db9%2Fw%3A1240%2Fp%3A16x9%2Fportada_puerto_rico_0.jpg&f=1&nofb=1"/>
        <h4>Title</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        <div>
        <div class="form">
        <div class="form-item"><h4>Necesitamos 1,000 firmas!</h4>
          <progress value="190" max="1000">
      </progress></div>
        <div class="form-item"><input type="text" id="fname" name="fname" placeholder="	Nombre"></input></div>
        <div class="form-item"><input type="text" id="fname" name="fname" placeholder="	Correo Electronico">
        </input></div>
        <div class="form-item"><button>Firma</button></div> 
        <div class="form-item profile"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2q79iu7y748jz.cloudfront.net%2Fs%2F_squarelogo%2F5d7e06fa445b760683f190b2ee7db1bb&f=1&nofb=1"  class="avatar"/>
        <h4>Foundation for Puerto Rico</h4>
        <button>Ver Mas</button>
        </div> 
        <div class="form-item">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-reddit"></a>
        </div>
        </div>
        </div> 
      </div>
      <div class="grid-container">
      <div class="form-item profile">
        <h4>Renuncia del Gobernador de Puerto Rico</h4>
        <button>Ver Mas</button>
        </div> 
        <div class="form-item profile">
        <h4>Aumento salarial de maestros en Puerto Rico</h4>
        <button>Ver Mas</button>
        </div> 
        <div class="form-item profile">
        <h4>Rescatemos la Playa Flamenco</h4>
        <button>Ver Mas</button>
        </div> 
      </div>
      </div>
    );
};

export default Firmas;