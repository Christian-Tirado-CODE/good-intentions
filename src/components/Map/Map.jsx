import React from 'react';
import classes from './Map.css';
import Events from '../ProfilePage/Events';
const Map = () => {
    return (
		<div>
<div class="grid-container">
  <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121154.5495853754!2d-66.130512918163!3d18.389224634333893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c03686fe268196f%3A0xad6b7f0f5c935adc!2sSan%20Juan!5e0!3m2!1sen!2spr!4v1605393308671!5m2!1sen!2spr" width="1000" height="100%" frameborder="0" class='google-map-code' allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
  <div class="form">
  <div class="form-item"><p class="text">Por Organización :</p><input type="text" id="fname" name="fname"></input></div>
  <div class="form-item"><p class="text">Por Categoria :</p><input type="text" id="fname" name="fname"></input></div>
  <div class="form-item"><p class="text">Por Zipcode :</p><input type="text" id="fname" name="fname"></input></div>
  <div class="form-item"><button>Buscar</button></div> 
  </div>
  </div>
  <p class="head">Esta Semana :</p>
  <Events/>
  </div>
    );
};

export default Map;