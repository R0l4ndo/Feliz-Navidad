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