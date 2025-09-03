// main.js

document.addEventListener('DOMContentLoaded', () => {
  const btnRegistrar = document.querySelector('.btn-register');
  const btnLogin = document.querySelector('.btn-login');

  if (btnRegistrar) {
    btnRegistrar.addEventListener('click', () => {
      // Redirige a la página de registro
      window.location.href = 'registro.html';
    });
  }

  if (btnLogin) {
    btnLogin.addEventListener('click', () => {
      // Aquí puedes poner la lógica para iniciar sesión
      // Por ejemplo, validar formulario o redirigir
      alert('Función de iniciar sesión aún no implementada.');
    });
  }
});

// Establecer el máximo valor para fecha de nacimiento (hoy menos 18 años)
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    const hoy = new Date();
    const año18Menos = new Date(hoy.getFullYear() - 18, hoy.getMonth(), hoy.getDate());
    fechaNacimientoInput.max = año18Menos.toISOString().split('T')[0];

    const form = document.getElementById('registroForm');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function(event) {
      errorMsg.style.display = 'none';
      errorMsg.textContent = '';

      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const fechaNacimiento = new Date(form.fechaNacimiento.value);
      const password = form.password.value;
      const password2 = form.password2.value;

      // Validar que la fecha de nacimiento sea válida y mayor o igual a 18 años
      if (!form.fechaNacimiento.value) {
        errorMsg.textContent = 'Por favor, ingresa tu fecha de nacimiento.';
        errorMsg.style.display = 'block';
        event.preventDefault();
        return;
      }

      const edadDifMs = hoy - fechaNacimiento;
      const edadDate = new Date(edadDifMs);
      const edad = Math.abs(edadDate.getUTCFullYear() - 1970);

      if (edad < 18) {
        errorMsg.textContent = 'Debes ser mayor de 18 años para registrarte.';
        errorMsg.style.display = 'block';
        event.preventDefault();
        return;
      }

      // Validar que las contraseñas coincidan
      if (password !== password2) {
        errorMsg.textContent = 'Las contraseñas no coinciden.';
        errorMsg.style.display = 'block';
        event.preventDefault();
        return;
      }

      // Aquí podrías agregar más validaciones si quieres

    });

document.addEventListener('DOMContentLoaded', () => {
  const btnLogin = document.querySelector('.btn-login');
  const inputEmail = document.getElementById('inputEmail');
  const inputPassword = document.getElementById('inputPassword');

  btnLogin.addEventListener('click', () => {
    const email = inputEmail.value.trim();
    const password = inputPassword.value;

    // Validación email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    if (!password) {
      alert('Por favor, ingresa tu contraseña.');
      return;
    }

    alert('Iniciando sesión...');
  });
});

 function initMap() {
    // Coordenadas de Santiago (ejemplo, puedes cambiarlas por tu ciudad)
    const ubicacion = { lat: -33.4489, lng: -70.6693 };

    // Crear mapa
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: ubicacion,
    });

    // Agregar marcador
    new google.maps.Marker({
      position: ubicacion,
      map: map,
      title: "Estamos aquí 😎",
    });
  }
