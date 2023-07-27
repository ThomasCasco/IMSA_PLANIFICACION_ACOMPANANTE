// Base de usuarios
const users = [
  { username: 'sebastian.pereyra', password: 'coffeman1', area: 'planificacion' },
  { username: 'nicolas.rubio', password: 'teaboy1', area: 'planificacion' },
  { username: 'ariel.pesce', password: 'coffeman2', area: 'planificacion' },
  { username: 'facundo.sanchez', password: 'taekwondo', area: 'planificacion' },
  { username: 'joseluis.rodriguez', password: 'coffeman3', area: 'planificacion' },
  { username: 'thomas.casco', password: 'adminboy', area: 'planificacion' },
  { username: 'daniel.kreser', password: 'dani123', area: 'mejoras'},
  { username: 'gonzalo.salvatierra', password: 'gonza123', area: 'mejoras'}
];

// Función para verificar el inicio de sesión
function loginUser() {
  // Obtener los valores ingresados en los campos de usuario y contraseña
  const usernameInput = document.getElementById('user').value;
  const passwordInput = document.getElementById('password').value;

  // Verificar si el usuario y la contraseña coinciden en la base de usuarios
  const user = users.find(
    user => user.username === usernameInput && user.password === passwordInput
  );

  if (user) {
    // Verificar el área del usuario y redireccionar a la página correspondiente
    if (user.area === 'mejoras') {
      window.location.href = './src/pages/main_page_mejoras.html';
    } else if (user.area === 'planificacion') {
      window.location.href = './src/pages/main_page.html';
    }
  } else {
    // Mostrar un mensaje de error si las credenciales son incorrectas
    alert('Usuario o contraseña incorrectos');
  }
}


// Asignar la función loginUser al evento click del botón "Entrar"
const loginButton = document.querySelector('button');
loginButton.addEventListener('click', loginUser);

