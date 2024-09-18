const fondo = document.querySelector(".fondo");
const loginLink = document.querySelector(".login-link");
const registrarLink = document.querySelector(".registrar-link");
const btn = document.querySelector(".btn");
const iconoCerrar = document.querySelector(".icono-cerrar");

// Mostrar formulario de registro
registrarLink.addEventListener("click", () => {
    fondo.classList.add('active');
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.registrar').style.display = 'block';
});

// Mostrar formulario de inicio de sesión
loginLink.addEventListener("click", () => {
    fondo.classList.add('active');
    document.querySelector('.registrar').style.display = 'none';
    document.querySelector('.login').style.display = 'block';
});

// Al hacer clic en el botón "Iniciar Sesión" mostrar ambos formularios
btn.addEventListener("click", () => {
    fondo.classList.add('active-btn');
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.registrar').style.display = 'block';
});

// Cerrar el formulario
iconoCerrar.addEventListener("click", () => {
    fondo.classList.remove('active-btn');
    fondo.classList.remove('active');
});
