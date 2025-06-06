function iniciar_registro(nombre, ape, email){
    nombre = document.getElementById('nombre').value;
    ape = document.getElementById('ape').value;
    email = document.getElementById('email').value;

    alert("REGISTRO EXITOSO " + nombre + " " + ape + ".");
    alert("Te registraste con el email " + email)

    alert("Ahora te redireccionaremos a nuestra página principal. EXITOS!")    
    
    return location.href = "index.html";
}