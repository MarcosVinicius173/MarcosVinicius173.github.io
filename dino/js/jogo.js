console.log('[dino] Inicio do jogo');

const dino = document.querySelector('.dino');
let dinoPosition = 0;
let cactoPosition = 1000;
let estaPulando = false;

document.addEventListener('keydown', (event)=>{
    //console.log(event.code);
    if (event.code === 'Space')
    //se nao estiver pulando!
        if (!estaPulando) pular();
});

function pular() {
    let intervaloPulo = setInterval(()=>{
        estaPulando = true;
        console.log('Pulou!');
        if (dinoPosition >= 250){
            clearInterval(intervaloPulo);
            let intervaloQueda = setInterval(()=>{
                if (dinoPosition <= 0) {
                    estaPulando = false;
                    clearInterval(intervaloQueda);
                    console.log('Caiu')
                } else {
                    dinoPosition -= 20;
                    dino.style.bottom = dinoPosition + 'px';
                }
            },20);
        } else{
        dinoPosition += 20;
        dino.style.bottom = dinoPosition + 'px';
        }
    }, 20);
}

const background = 
        document.querySelector('.background');

function criarCacto(){
    cactoPosition = 1000;
    const cacto = document.createElement('div');
    let tempoRandom = Math.random() * 6000 + 100;
    cacto.classList.add('cacto');
    cacto.style.left = cactoPosition + 'px';
    background.appendChild(cacto);

    let intervaloEsquerda = setInterval(()=> {
        if(cactoPosition <= -60){
            clearInterval(intervaloEsquerda);
            background.removeChild(cacto);
        } else if( cactoPosition > 0 && cactoPosition <= 120 && dinoPosition <= 60) {
            clearTimeout(tempoCacto);
            document.body.innerHTML='<h1 class="Fim-de-jogo">Fim de jogo </h1>';
        }
        else{
            cactoPosition -= 10;
            cacto.style.left = cactoPosition + 'px';
        }
    },20);

    let tempoCacto = setTimeout(criarCacto, tempoRandom);
}

criarCacto();
