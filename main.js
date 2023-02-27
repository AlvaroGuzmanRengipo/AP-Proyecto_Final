/* Formulario de Mensaje */

function onClick(event) {
    event.preventDefault();

    this.style.backgroundColor = "white";
    console.log("click...");
    console.log(event);


    const mensaje = {
        comercio: document.getElementById('name').value,
        titular: document.getElementById('email').value,
        celular: document.getElementById('message').value
    }
    console.log(mensaje);


    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(mensaje),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            Swal.fire(
                'Enviado',
                'Gracias por tu mensaje',
                'success'
            );
            cleanForm();
            /* redirectUrl(); */
        })
        .catch((err) => console.log(err));

}

function cleanForm() {
    let formulario = document.getElementById('formulario_mensaje');
    formulario.reset();
}
function redirectUrl() {
    window.location.href = "https://google.com";
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);