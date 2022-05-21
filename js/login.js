(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = [...document.getElementsByClassName('needs-validation')];
    const email = document.getElementById('emailUsuario');
    const password = document.getElementById('contraseñaUsuario');
    const rememberMe = document.getElementById('remindEmail');
    // Loop over them and prevent submission

    email.value = this.localStorage.getItem('email')

    forms.forEach(form => {
      form.addEventListener('submit', function(event) {
        console.log(email.value);
        console.log(password.value);
        console.log(rememberMe.value);
        if (email.value && password.value) {        
          form.classList.add('was-validated');

          if(rememberMe){
            localStorage.setItem('email', email.value);
          }

          if(email.value == 'pepe@gmail.com' && password.value == 'pepe123'){
            localStorage.setItem('usuario', email.value);
            window.location = '/login.html';
          }
        }

        event.preventDefault();
        event.stopPropagation();
      }, false);
    });
  }, false);
})();