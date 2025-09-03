// main.js

// Inicializar Google Maps globalmente
window.initMap = function() {
  const ubicacion = { lat: -33.4489, lng: -70.6693 }; // Santiago, ejemplo
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: ubicacion,
  });

  new google.maps.Marker({
    position: ubicacion,
    map: map,
    title: "Estamos aquí 😎",
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // --- Botones registrar/login ---
  const btnRegistrar = document.querySelector('.btn-register');
  const btnLogin = document.querySelector('.btn-login');

  if (btnRegistrar) {
    btnRegistrar.addEventListener('click', () => {
      window.location.href = 'registro.html';
    });
  }

  // --- Input fecha de nacimiento ---
  const fechaNacimientoInput = document.getElementById('fechaNacimiento');
  if (fechaNacimientoInput) {
    const hoy = new Date();
    const año18Menos = new Date(hoy.getFullYear() - 18, hoy.getMonth(), hoy.getDate());
    fechaNacimientoInput.max = año18Menos.toISOString().split('T')[0];
  }

  // --- Formulario registro ---
  const form = document.getElementById('registroForm');
  const errorMsg = document.getElementById('errorMsg');
  if (form) {
    form.addEventListener('submit', function(event) {
      errorMsg.style.display = 'none';
      errorMsg.textContent = '';

      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const fechaNacimiento = new Date(form.fechaNacimiento.value);
      const password = form.password.value;
      const password2 = form.password2.value;
      const hoy = new Date();

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

      if (password !== password2) {
        errorMsg.textContent = 'Las contraseñas no coinciden.';
        errorMsg.style.display = 'block';
        event.preventDefault();
        return;
      }

      // Puedes agregar más validaciones aquí
    });
  }

  // --- Login ---
  const inputEmail = document.getElementById('inputEmail');
  const inputPassword = document.getElementById('inputPassword');
  if (btnLogin && inputEmail && inputPassword) {
    btnLogin.addEventListener('click', () => {
      const email = inputEmail.value.trim();
      const password = inputPassword.value;
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
  }
});
