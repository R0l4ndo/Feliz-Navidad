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
        const { value: linea1 } = await Swal.fire({
            title: "Cancion",
            text: "Primera linea",
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonText: "Siguiente",
        });
        if (linea1) {
            const { value: linea2} = await Swal.fire({
            title: "Esta es una indirecta?",
            text: "Prueba2",
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonText: 'Siguiente',
        });
        
        }

    } else {
        alert("ingreso fallido");
    }
}