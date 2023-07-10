// Base de usuarios
const users = [
  { username: 'sebastian.pereyra', password: 'coffeman1' },
  { username: 'nicolas.rubio', password: 'coffeman2' },
  { username: 'ariel.pesce', password: 'coffeman3' },
  { username: 'facundo.sanchez', password: 'coffeman4' },
  { username: 'joseluis.rodriguez', password: 'coffeman5' },
  { username: 'thomas.casco', password: 'coffeman6' }
];

// Función para verificar el inicio de sesión
function loginUser() {
  // Obtener los valores ingresados en los campos de usuario y contraseña
  const usernameInput = document.getElementById('user').value;
  const passwordInput = document.getElementById('password').value;

  // Verificar si el usuario y la contraseña coinciden en la base de usuarios
  const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

  if (user) {
    // Redireccionar a otra página si el inicio de sesión es exitoso
    window.location.href = './src/pages/main_page.html';
    console.log("holaaa")
  } else {
    // Mostrar un mensaje de error si las credenciales son incorrectas
    alert('Usuario o contraseña incorrectos');
  }
}

// Asignar la función loginUser al evento click del botón "Entrar"
const loginButton = document.querySelector('button');
loginButton.addEventListener('click', loginUser);
