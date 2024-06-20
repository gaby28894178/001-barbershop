const validaFallia = (elemento, mensaje) => {
    console.error(mensaje);
    elemento.style.border = "2px solid red";
    elemento.style.backgroundColor = "#FFCCCC";
};

const validaExito = (elemento) => {
    elemento.style.border = "2px solid green";
    elemento.style.backgroundColor = "#CCFFCC";
};

window.addEventListener('load', () => {
    const form = document.querySelector('#registroForm');
    const nombre1 = document.querySelector('#nombre1');
    const apellido = document.querySelector('#apellido');
    const direccion = document.querySelector('#direccion');
    const email = document.querySelector('#email');
    const telefono = document.querySelector('#telefono');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validarCampos();
    });

    const validarCampos = () => {
        const nombreVal = nombre1.value.trim();
        const apellidoVal = apellido.value.trim();
        const direccionVal = direccion.value.trim();
        const emailVal = email.value.trim();
        const telefonoVal = telefono.value.trim();

        // Función para verificar si es un número
        const esNumero = (valor) => !isNaN(valor);

        // Función para verificar si es un correo electrónico válido
        const esCorreoValido = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

        if (!nombreVal) {
            validaFallia(nombre1, "El campo de nombre no puede estar vacío");
        } else if (esNumero(nombreVal)) {
            validaFallia(nombre1, "El campo de nombre no puede contener números");
        } else {
            validaExito(nombre1);
        }

        if (!apellidoVal) {
            validaFallia(apellido, "El campo de apellido no puede estar vacío");
        } else if (esNumero(apellidoVal)) {
            validaFallia(apellido, "El campo de apellido no puede ser un número");
        } else {
            validaExito(apellido);
        }

        if (!direccionVal) {
            validaFallia(direccion, "El campo de dirección no puede estar vacío");
        } else {
            validaExito(direccion);
        }

        if (!emailVal) {
            validaFallia(email, "El campo de correo electrónico no puede estar vacío");
        } else if (!esCorreoValido(emailVal)) {
            validaFallia(email, "Ingrese un correo electrónico válido");
        } else {
            validaExito(email);
        }

        if (!telefonoVal) {
            validaFallia(telefono, "El campo de teléfono no puede estar vacío");
        } else if (!esNumero(telefonoVal)) {
            validaFallia(telefono, "El campo de teléfono debe contener solo números");
        } else {
            validaExito(telefono);
        }
    };
});


// // Aplicar estilo CSS al campo para indicar un error
// const validaFallia = (elemento, mensaje) => {
//     console.error(mensaje);
//     elemento.style.border = "2px solid red";
//     elemento.style.backgroundColor = "#FFCCCC";
// };

// // Quitar cualquier estilo CSS previo para reiniciar el estado del campo
// const validaExito = (elemento) => {
//     elemento.style.border = "2px solid green";
//     elemento.style.backgroundColor = "#CCFFCC";
// };

// window.addEventListener('load', () => {
//     const form = document.querySelector('#registroForm');
//     const nombre1 = document.querySelector('#nombre1');
//     const apellido = document.querySelector('#apellido');
//     const direccion = document.querySelector('#direccion');
//     const email = document.querySelector('#email');
//     const telefono = document.querySelector('#telefono');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         validarCampos();
//     });

//     // Valido los campos le saco los espacios de adelante y de atras 
//     const validarCampos = () => {
//         const nombreVal = nombre1.value.trim();
//         const apellidoVal = apellido.value.trim(); 
//         const direccionVal = direccion.value.trim(); 
//         const emailVal = email.value.trim(); 
//         const telefonoVal = telefono.value.trim(); 

//         if(!nombreVal) {
//             if(isNumber){
//                 validaFallia(nombre1, "El campo de nombre no puede estar vacío o contiene numero ");

//             }
//         } else {
//             validaExito(nombre1);
//         }

//         if(!apellidoVal) {
//             validaFallia(apellido, "El campo de apellido no puede estar vacío");
//         } else {
//             validaExito(apellido);
//         }

//         if(!direccionVal) {
//             validaFallia(direccion, "El campo de dirección no puede estar vacío");
//         } else {
//             validaExito(direccion);
//         }

//         if(!emailVal) {
//             validaFallia(email, "El campo de correo electrónico no puede estar vacío");
//         } else {
//             validaExito(email);
//         }

//         if(!telefonoVal) {
//             validaFallia(telefono, "El campo de teléfono no puede estar vacío");
//         } else {
//             validaExito(telefono);
//         }
//     };
// });

// // Aplicar estilo CSS al campo para indicar un error
// const validaFallia = (elemento, mensaje) => {
//     console.error(mensaje);
//     elemento.style.border = "2px solid red";
//     elemento.style.backgroundColor = "#FFCCCC";
    
// };

// // Quitar cualquier estilo CSS previo para reiniciar el estado del campo
// const validaExito = (elemento) => {
//     elemento.style.border = "2px solid green";
//     elemento.style.backgroundColor = "#CCFFCC";
// };

// window.addEventListener('load', () => {
//     const form = document.querySelector('#formulario');
//     const usuario = document.getElementById('usuario');
//     const email = document.querySelector('#email');
//     const password = document.querySelector('#password');
//     const passwordConfirmar = document.querySelector('#passwordConfirmar');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         validarCampos();
//     });

//     // Valido los campos  le saco los espacios de adelante y de atras 
//    const validarCampos = () => {
//         const user = usuario.value.trim();
//         const mail = email.value.trim(); 
//         const pass = password.value.trim(); 
//         const passConfirmar = passwordConfirmar.value.trim(); 

//         if(!user){
//             console.log("Campo de usuario vacío");
//             validaFallia(usuario, "El campo de usuario no puede estar vacío");
//         }
//         else {
//             console.log("Usuario:", user);
//             validaExito(usuario);
//         }

//         if(!email){
//             console.log("Campo de correo electrónico vacío");
//             validaFallia(email, "El campo de correo electrónico no puede estar vacío");
//         }
//         else {
//             console.log("Correo electrónico:", mail);
//             validaExito(email);
//         }

//         if(!pass){
//             console.log("Campo de contraseña vacío");
//             validaFallia(password, "El campo de contraseña no puede estar vacío");
//         }
//         else {
//             console.log("Contraseña:", pass);
//             validaExito(password);
//         }

//         if(!passConfirmar){
//             console.log("Campo de confirmación de contraseña vacío");
//             validaFallia(passwordConfirmar, "El campo de confirmación de contraseña no puede estar vacío");
//         }
//         else {
//             console.log("Confirmación de contraseña:", passConfirmar);
//             validaExito(passwordConfirmar);
//         }

//         if(pass !== passConfirmar){
//             console.log("Las contraseñas no coinciden");
//             validaFallia(passwordConfirmar, "Las contraseñas no coinciden");
//         }
//         else {
//             validaExito(passwordConfirmar);
//         }
//     };
// });




