function iniciar_registro() {
    let nombre = document.getElementById('nombre').value;
    let ape = document.getElementById('ape').value;
    let email = document.getElementById('email').value;

    if (!nombre || !ape || !email) {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    alert("REGISTRO EXITOSO " + nombre + " " + ape + ".");
    alert("Te registraste con el email " + email);

    // Limpiar (refrescar) los campos del formulario después del registro exitoso
    document.getElementById('nombre').value = '';
    document.getElementById('ape').value = '';
    document.getElementById('email').value = '';

    // *** Guardar el nombre del usuario en localStorage ***
    localStorage.setItem('loggedInUserName', nombre);

    // aca es donde se realiza la redirección.
    alert("Ahora serás redireccionado a la página principal. ¡ÉXITOS!");
    
    // *** Redirige a index.html ***
    window.location.href = "index.html"; 

    return false;
}

function cerrar_sesion() {
    // Preguntar al usuario si realmente quiere cerrar sesión
    let confirmarCierre = confirm("¿Estás seguro de que quieres cerrar sesión?");

    if (confirmarCierre) {
        alert("Cerrando sesión...");

        // Ocultar el mensaje de bienvenida y el enlace de cerrar sesión
        document.getElementById('welcomeMessage').style.display = 'none';
        document.getElementById('logoutLink').style.display = 'none';

        // Recargar la página para volver al estado inicial
        location.reload(); 

    } else {
        alert("Operación de cierre de sesión cancelada.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Recupera el nombre de usuario si existe en localStorage
    const loggedInUserName = localStorage.getItem('loggedInUserName');
    if (loggedInUserName) {
        document.getElementById('userName').textContent = loggedInUserName; // Muestra el nombre
        document.getElementById('welcomeMessage').style.display = 'block'; // Hace visible el mensaje
        document.getElementById('logoutLink').style.display = 'block'; // Hace visible el enlace
    }
});

/*function iniciar_registro() {
    let nombre = document.getElementById('nombre').value;
    let ape = document.getElementById('ape').value;
    let email = document.getElementById('email').value;

    // ... (validaciones y alerts) ...

    // Limpiar (refrescar) los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('ape').value = '';
    document.getElementById('email').value = '';

    // Guardar el nombre en localStorage
    localStorage.setItem('loggedInUserName', nombre); 

    // ... (mostrar mensaje en header) ...

    return false; 
}

function cerrar_sesion() {
    let confirmarCierre = confirm("¿Estás seguro de que quieres cerrar sesión?");

    if (confirmarCierre) {
        alert("Cerrando sesión...");
        localStorage.removeItem('loggedInUserName'); // Borra el nombre guardado de localStorage
        // ... (ocultar mensaje en header) ...
        location.reload(); // Recargar la página para resetearla completamente
    } else {
        alert("Operación de cierre de sesión cancelada.");
    }
}
*/