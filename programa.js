let numero = 0;

window.addEventListener( "load", (event) => {
    numero = numeroAleatorio();
    console.log("El numero es ", numero);
}  )


function numeroAleatorio() {
    return parseInt(Math.random() * 100);
}

function comprueba() {
    let numElegido = document.querySelector('#pregunta').value;
    if (numElegido == numero) {
        console.log("Acertaste");
    } else {
        console.log('Fallaste');
    }
}