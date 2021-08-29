import Toastify from 'toastify-js';
import '../../scss/toastify.scss';

class Notification {
  constructor() {
   this.duration = 3000;
   this.gravity = 'top'; // `top` or `bottom`
   this.position = 'right'; // `left`, `center` or `right`
  }

  info(message, data) {
    Toastify({
      text: message + (data ? '<br><div style="width: 100%; text-align: right;"> ~~ ' + data + '</div>' : ''),
      duration: this.duration,
      newWindow: false,
      close: false,
      gravity: this.gravity, 
      position: this.position, 
      backgroundColor: '#7f6da0',
      style: {'color': 'white'},
      escapeMarkup: false,
      stopOnFocus: true, // Prevents dismissing of toast on hover
      onClick: function(){} // Callback after click
    }).showToast();
  }  
}

export { Notification };
