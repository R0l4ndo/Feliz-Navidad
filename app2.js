(async () => {
    const { value: linea1 } = await Swal.fire({
        title: 'Hola Rosmery',
        text: 'Soy Carlos, dale al siguiente y que siga el ritmo de la canción',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        StopKeydownPropagation: false,
        width: '75%',
        background: '#00000000',
        confirmButtonText: 'Siguiente',
    });
    if (linea1) {
        const { value: linea2 } = await Swal.fire({
            text: 'Y no quiero arruinarte la sorpresa',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            StopKeydownPropagation: false,
            background: '#00000000',
            width: '75%',
            confirmButtonText: 'Siguiente',
        });
        if (linea2) {
            const { value: linea3 } = await Swal.fire({
            
                text: 'Para que tu la puedas descubrir',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                StopKeydownPropagation: false,
                width: '75%',
                background: '#00000000',
                confirmButtonText: 'Siguiente',
            });
            if (linea3) {
                const { value: linea4 } = await Swal.fire({
            
                    text: 'pero hay algo que me da vueltas en mi cabeza',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    StopKeydownPropagation: false,
                    background: '#00000000',
                    width: '75%',
                    confirmButtonText: 'Siguiente',
                });
                if (linea4) {
                    const { value: linea5 } = await Swal.fire({
            
                        text: 'Y es que te lo tengo que decir que...',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        StopKeydownPropagation: false,
                        background: '#00000000',
                        width: '75%',
                        confirmButtonText: 'Siguiente',
                    });
                    if (linea5) {
                        const { value: linea6 } = await Swal.fire({
            
                            text: 'Eres la persona que tiene ese no sé qué',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            StopKeydownPropagation: false,
                            background: '#00000000',
                            width: '75%',
                            confirmButtonText: 'Siguiente',
                        });
                        if (linea6) {
                            const { value: linea7 } = await Swal.fire({
            
                                text: 'Que me tiene no se como',
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                allowEnterKey: false,
                                StopKeydownPropagation: false,
                                background: '#00000000',
                                width: '75%',
                                confirmButtonText: 'Siguiente',
                            });
                            if (linea7) {
                                const { value: linea8 } = await Swal.fire({
                                    text: 'Que me encanta no se cuanto',
                                    allowOutsideClick: false,
                                    allowEscapeKey: false,
                                    allowEnterKey: false,
                                    StopKeydownPropagation: false,
                                    background: '#00000000',
                                    width: '75%',
                                    confirmButtonText: 'Siguiente',
                                });
                                if (linea8) {
                                    const { value: linea9 } = await Swal.fire({
                                        text: 'Pero si me preguntas lo que siento no lo sé',
                                        allowOutsideClick: false,
                                        allowEscapeKey: false,
                                        allowEnterKey: false,
                                        StopKeydownPropagation: false,
                                        background: '#00000000',
                                        width: '75%',
                                        confirmButtonText: 'Siguiente',
                                    });
                                    if (linea9) {
                                        const { value: linea10 } = await Swal.fire({
                                            text: 'Yo te amo pero no se exactamente que tanto',
                                            allowOutsideClick: false,
                                            allowEscapeKey: false,
                                            allowEnterKey: false,
                                            StopKeydownPropagation: false,
                                            background: '#00000000',
                                            width: '75%',
                                            confirmButtonText: 'Siguiente',
                                        });
                                        if (linea10) {
                                            const { value: linea11 } = await Swal.fire({
                                                text: 'Si te gustó, enviame una foto tuya',
                                                imageUrl: 'https://w7.pngwing.com/pngs/513/149/png-transparent-emoji-three-wise-monkeys-the-evil-monkey-sticker-blushing-emoji-mammal-carnivoran-heart-thumbnail.png',
                                                width: '75%',
                                                background: '#00000000',
                                                confirmButtonText:'Sí, enviaré',
                                            });
                                            if (linea11) {
                                                
                                                    fetch('https://sheet.best/api/sheets/54fd0b3b-3819-499d-94ae-4422f3e6e1a5', {
                                                        method: 'POST',
                                                        mode: 'cors',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({
                                                            "Nombre": 'Presionó sí',
                                                        })
                                                    });
                                                location.href = 'final.html';
                                        }
                                    }
                                       
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})();

setTimeout(function() {
sonido.innerHTML = '<audio src="Ese no se qué.mp3" controls autoplay></audio>'
},);