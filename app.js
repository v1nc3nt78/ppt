const botonPiedra = document.getElementById("piedra");
const botonPapel = document.getElementById("papel");
const botonTijera = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const resultText2 = document.getElementById("start-text2"); //muestra puntajes 
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");


const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

let usuarioScore = 0;
let computadoraScore = 0;




function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
        }
}



function jugar(userOption){
    const machineOption = calcMachineOption();

    const result = calcResult(userOption, machineOption);

    userImg.src = "img/" + userOption + "izq.svg";
    // userImg.src = "img/" + userOption + "izqnoche.svg";
    machineImg.src = "img/" + machineOption + "dernoche.svg";
    // machineImg.src = "img/" + machineOption + "der.svg";

    if(usuarioScore < 3 && computadoraScore < 3) {

        //while
        switch(result){
            case PERDISTE: 
                resultText.innerHTML = "Perdiste";
                computadoraScore = computadoraScore+1 ;
                resultText2.innerHTML = "Usuario: " + usuarioScore + " / Computadora: " + computadoraScore;
                break;
            case GANASTE: 
                resultText.innerHTML = "¡Ganaste!";
                usuarioScore = usuarioScore+1;
                resultText2.innerHTML = "Usuario: " + usuarioScore + " / Computadora: " + computadoraScore;
                break;    
            case EMPATE: 
                resultText.innerHTML = "Empate...";
                resultText2.innerHTML = "Usuario: " + usuarioScore + " / Computadora: " + computadoraScore;
                break;
        }
        
    
    }else if(usuarioScore == 3){
        resultText2.innerHTML = "FELICITACIONES GANASTE LA PARTIDA!!! <br> <h7>(apreta [F5] para volver a jugar) </h7>";
    }else {
        resultText2.innerHTML = "LAMENTABLEMENTE PERDISTE LA PARTIDA <br> <h7>(apreta [F5] para volver a jugar) </h7>"; //revisar asi avisa un tiempo antes y termina el juego
    }


}



function calcResult(userOption, machineOption){
    
    if(userOption === machineOption){
        return EMPATE;
    
    }else if (userOption === PIEDRA) {
        if(machineOption === PAPEL) return PERDISTE;
        if(machineOption === TIJERA) return GANASTE;
            
    } else if (userOption === PAPEL){
        if(machineOption === PIEDRA) return GANASTE;
        if(machineOption === TIJERA) return PERDISTE;
        
    }else if (userOption === TIJERA){
        if(machineOption === PIEDRA) return PERDISTE;
        if(machineOption === PAPEL) return GANASTE;
        
    }
}


const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);

botonPiedra.addEventListener("click", ()=>{
    jugar(PIEDRA);
});

botonPapel.addEventListener("click", ()=>{
    jugar(PAPEL);
});

botonTijera.addEventListener("click", ()=>{
    jugar(TIJERA);
});

