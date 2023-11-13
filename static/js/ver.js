document.addEventListener("DOMContentLoaded", function () {
    // Obtén el parámetro del correo electrónico de la URL
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    // Realiza una solicitud para obtener detalles del contacto con el correo electrónico proporcionado
    // Puedes utilizar una ruta en tu backend (FastAPI o Flask) para manejar esta solicitud

    // Ejemplo de solicitud con Fetch API
    fetch(`https://api-contactos-backend1-785dfc9292d6.herokuapp.com/contactos/${encodeURIComponent(email)}`)
        .then(response => response.json())
        .then(data => {
            // Manipula los detalles del contacto y actualiza el contenido en la página
            const contactDetailsDiv = document.getElementById("contact-details");
            contactDetailsDiv.innerHTML = `
                <p>Email: ${data.email}</p>
                <p>Nombre: ${data.nombre}</p>
                <p>Teléfono: ${data.telefono}</p>
            `;

            // Agregar el botón y el evento de redirección
            const backButton = document.getElementById("back-to-index");
            backButton.addEventListener("click", function () {
                window.location.href = "/"; // Redirige al index.html
            });
        })
        .catch(error => console.error("Error al obtener detalles del contacto:", error));
});
