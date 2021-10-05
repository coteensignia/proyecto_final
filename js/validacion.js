// VALIDACION
var ValidarDatos = function () {
    var nombre = document.getElementById("name");
    var telefono = document.getElementById("tel");
    var email = document.getElementById("email");
    var mensaje = document.getElementById("mensaje");
    var enviar = "";


    if (nombre.value == '') {
        nombre.classList.remove("success");
        nombre.classList.add("error");
        enviar += 1;
    } else {
        nombre.classList.remove("error");
        nombre.classList.add("success");
    }


    if (telefono.value == '') {
        telefono.classList.remove("success");
        telefono.classList.add("error");
        enviar += 1;
    } else {
        telefono.classList.remove("error");
        telefono.classList.add("success");
    }


    if (email.value == '') {
        email.classList.remove("success");
        email.classList.add("error");
        enviar += 1;
    } else {
        email.classList.remove("error");
        email.classList.add("success");
    }


    if (mensaje.value == '') {
        mensaje.classList.remove("success");
        mensaje.classList.add("error");
        enviar += 1;
    } else {
        mensaje.classList.remove("error");
        mensaje.classList.add("success");
    }

    if (enviar == "") {
        return true;
    } else {
        alert("completa todos los campos, por favor");
        return false;

    }

}

var miformulario = document.getElementById("formulario");

miformulario.onsubmit = ValidarDatos;