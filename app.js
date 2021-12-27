const formulario = document.getElementById('form-Inicio');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://sheet.best/api/sheets/341aee14-b767-459d-816c-d9aff760687a', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.Nombre.value,
            "Apellido": formulario.Apellido.value
        })
    });
    
});


function validar() {
    var user = document.getElementById('Nombre').value;
    var user2 = document.getElementById('Apellido').value;
    const sonido = document.getElementById('sonido');
    if (user == "Rolan" && user2=="Alburqueque") {
        sonido.innerHTML = '<audio src="Ese no se qué.mp3" controls></audio>';
        Swal.fire({
            title: "Esta es una indirecta?",
            text: "Creo que si",
            allowOutsideClick: true,
            allowEscape
        });

    } else {
        alert("ingreso fallido");
    }
}
