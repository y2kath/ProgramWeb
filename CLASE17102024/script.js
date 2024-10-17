
document.title = 'Iniciar Sesion';

const container = document.createElement('div');
container.style.margin = '20px';

const title = document.createElement('h2');
title.textContent = 'Iniciar sesion'

container.appendChild(title);

const form=document.createElement('form');

//crear campo de nombre de usuario
const usernamelabel = document.createElement('label');
usernamelabel.textContent='Nombre de usuarie: ';
const usernameinput=document.createElement('input');
usernameinput.type='text';
usernameinput.required=true;

form.appendChild(usernamelabel);
form.appendChild(usernameinput);

const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Contraseña: ';
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.required = true;

form.appendChild(passwordLabel);
form.appendChild(passwordInput);

const submitButton = document.createElement('button');
submitButton.textContent = 'Iniciar Sesion';
form.appendChild(submitButton);

// Mostrar mensaje de respuesta //

const message = document.createElement('p')
container.appendChild(form);
container.appendChild(message);

// Agregar el contenedor al cuerpo del docuemntento //

document.body.appendChild(container);

//DATOS DE INICIO DE SESION PREDEFIIDA

const validauser='Catherine';
const validapassword = '1234'

//validar el user y el password

form.addEventListener('submit',(event) => {
    event.preventDefault()
    //validar envio
    if (passwordInput.value === validapassword && usernameinput.value === validauser){
        message.textContent = '¡¡¡ Bienvenido !!!'
        message.style.color = 'purple'
        message.style.textAlign = 'center'
        message.style.fontSize = '2rem'
    }
    else{
        message.textContent = 'Nombre o contraseña incorrecta'
        message.style.color = 'red'
        message.style.textAlign = 'center'
        message.style.fontSize = '2rem'
    }
    //limpiar los input //
    usernameinput.value = '';
    passwordInput.value = '';
});
