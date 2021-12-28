const formulario = document.getElementById('form-Inicio');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": "hola",

        })
    });
    
});
function validar() {
    var user = document.getElementById('Nombre').value;
    var user2 = document.getElementById('Apellido').value;
    if (user == "Rolan" && user2=="Alburqueque") {
        location.href = 'mensaje.html';
    }
    } 

            