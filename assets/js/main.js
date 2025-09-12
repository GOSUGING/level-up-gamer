// main.js

// Inicializar Google Maps globalmente
window.initMap = function() { // Función llamada por la API de Google Maps
  const ubicacion = { lat: -33.4489, lng: -70.6693 }; // Santiago, ejemplo
  const map = new google.maps.Map(document.getElementById("map"), { //  Elemento del mapa
    zoom: 13, // Nivel de zoom
    center: ubicacion, // Centro del mapa
  });

  new google.maps.Marker({ // Marcador en el mapa
    position: ubicacion, // Posición del marcador
    map: map, // Mapa donde se coloca el marcador
    title: "Estamos aquí 😎", // Título del marcador
  });
};

document.addEventListener('DOMContentLoaded', () => { // Esperar a que el DOM esté cargado
  // --- Botones registrar/login ---
  const btnRegistrar = document.querySelector('.btn-register'); // Botón de registro
  const btnLogin = document.querySelector('.btn-login'); // Botón de login

  if (btnRegistrar) {
    btnRegistrar.addEventListener('click', () => { // Manejar clic en el botón de registro
      window.location.href = 'registro.html'; // Redirigir a la página de registro
    });
  }

  // --- Input fecha de nacimiento ---
  const fechaNacimientoInput = document.getElementById('fechaNacimiento'); // Input de fecha de nacimiento
  if (fechaNacimientoInput) { // Verificar que el elemento existe
    const hoy = new Date(); // Fecha actual
    // Calcular la fecha máxima permitida (hoy - 18 años)
    const año18Menos = new Date(hoy.getFullYear() - 18, hoy.getMonth(), hoy.getDate());
    fechaNacimientoInput.max = año18Menos.toISOString().split('T')[0]; // Formatear como YYYY-MM-DD
  }

  // --- Formulario registro ---
  const form = document.getElementById('registroForm'); // Formulario de registro
  const errorMsg = document.getElementById('errorMsg'); // Elemento para mostrar mensajes de error
  if (form) { // Verificar que el formulario existe
    form.addEventListener('submit', function(event) { // Manejar envío del formulario
      // Limpiar mensajes de error previos
      errorMsg.style.display = 'none';
      errorMsg.textContent = '';

      const nombre = form.nombre.value.trim(); // Trim para evitar espacios
      const email = form.email.value.trim(); // Trim para evitar espacios
      const fechaNacimiento = new Date(form.fechaNacimiento.value); // Convertir a objeto Date
      const password = form.password.value; // No trim para contraseñas
      const password2 = form.password2.value; // No trim para contraseñas
      const hoy = new Date(); // Fecha actual

      if (!form.fechaNacimiento.value) { // Verificar que la fecha no esté vacía
        errorMsg.textContent = 'Por favor, ingresa tu fecha de nacimiento.'; // Mensaje de error más específico 
        errorMsg.style.display = 'block'; // Mostrar mensaje de error
        event.preventDefault(); // Prevenir envío del formulario
        return;
      }

      const edadDifMs = hoy - fechaNacimiento; // Diferencia en milisegundos
      const edadDate = new Date(edadDifMs); //  Convertir a objeto Date
      const edad = Math.abs(edadDate.getUTCFullYear() - 1970); // Calcular edad

      if (edad < 18) { // Verificar que el usuario sea mayor de 18 años
        errorMsg.textContent = 'Debes ser mayor de 18 años para registrarte.'; // Mensaje de error más específico
        errorMsg.style.display = 'block'; // Mostrar mensaje de error
        event.preventDefault(); // Prevenir envío del formulario
        return;
      }

      if (password !== password2) {
        errorMsg.textContent = 'Las contraseñas no coinciden.'; // Mensaje de error más específico
        errorMsg.style.display = 'block'; // Mostrar mensaje de error
        event.preventDefault(); // Prevenir envío del formulario
        return;
      }

      // Puedes agregar más validaciones aquí
    });
  }

  // --- Login ---
  const inputEmail = document.getElementById('inputEmail'); // Input de email
  const inputPassword = document.getElementById('inputPassword'); // Input de contraseña
  if (btnLogin && inputEmail && inputPassword) { // Verificar que los elementos existen
    btnLogin.addEventListener('click', () => { // Cambiado de 'submit' a 'click'
      // Validaciones básicas
      const email = inputEmail.value.trim(); // Trim para evitar espacios
      const password = inputPassword.value; // No trim para contraseñas
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validación básica de email

      if (!emailRegex.test(email)) { // Validar formato de email
        alert('Por favor, ingresa un correo electrónico válido.'); // Mensaje de error más específico
        return;
      }

      if (!password) { // Verificar que la contraseña no esté vacía
        alert('Por favor, ingresa tu contraseña.'); // Mensaje de error más específico
        return;
      }

      alert('Iniciando sesión...'); // Aquí iría la lógica real de inicio de sesión
    });
  }
});
