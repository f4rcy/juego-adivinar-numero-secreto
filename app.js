let numeroSecreto=0;
let intentos=0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

function condicionesIniciales() {
    AsignarElementoHTML('h1','Juego del numero secreto'); //asi llamamos la funcion
    AsignarElementoHTML('p','Digite un numero del 1-10');
    numeroSecreto = generarNumeroSecreto(); //creamos la variable y el numero secreto lo dara la funcion.
    intentos = 1;
}

function AsignarElementoHTML(elemento,texto){ //le damos 2 parametros
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
} 

function generarNumeroSecreto() {
    //let numeroSecreto = Math.floor(Math.random()*10)+1; 
    //return numero secreto;
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroSecreto);
    console.log(listaNumerosSecretos);

    if(listaNumerosSecretos.length == numeroMaximo){
        AsignarElementoHTML('p','Ya adivinaste todos los numeros posibles del juego.')
    }else{
        if(listaNumerosSecretos.includes(numeroSecreto)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSecretos.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function VerificarIntentoUsuario(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); //en el html creamos un id en el input.
    
    if(numeroUsuario===numeroSecreto){
        AsignarElementoHTML('p',`Acertaste el numero en ${intentos} ${intentos==1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario>numeroSecreto){
            AsignarElementoHTML('p','El numero es menor');
        }else{
           AsignarElementoHTML('p','El numero es mayor');
        }
        intentos++;
        limpiarTexto();
    }
    return;
} 

function limpiarTexto(){
    let valorTexto = document.querySelector('#valorUsuario');
    valorTexto.value = '';
}

function reiniciarJuego() {
    //limpiamos el texto de la caja
    limpiarTexto();
    //mostrar mensaje de el intervalo del numero a digitar
    //generamos el numero secreto
    //inicializar numero de intentos
    //desabilitar boton nuevo juego
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


