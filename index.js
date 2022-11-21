const celula = document.querySelectorAll('.celula');
const placarJogador1Span = document.querySelector('.jogador1');
const placarJogador2Span = document.querySelector('.jogador2');
const restartBtn = document.querySelector('.restart');

const vitorias = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6]
]

let jogador1 = [];
let jogador2 = [];

let placar = {
    jogador1: 0,
    jogador2: 0,
}

let vez = true;

for(let i = 0; i < celula.length; i++) {
    celula[i].addEventListener('click', () => {
        if(vez === true) {
            if(celula[i].innerHTML === "") {
                marcaJogador1(i);
            }    
        } else {
            if(celula[i].innerHTML === "") {
                marcaJogador2(i);
            }
        }
        verificaVencedor();
        verificaEmpate();
    })
}

function marcaJogador1(i) {
    celula[i].innerHTML = "X";
    jogador1.push(i);
    vez = false;
}

function marcaJogador2(i) {
    celula[i].innerHTML = "O";
    jogador2.push(i);
    vez = true;
}

function verificaVencedor() {
    vitorias.find((item) => {
        if(item.filter((i) => jogador1.includes(i)).length === 3) {
            alert("Jogador 1 venceu!");
            placar.jogador1++;
            atualizaPlacar();
            limpaTabuleiro();
        } else if(item.filter((i) => jogador2.includes(i)).length === 3) {
            alert("Jogador 2 venceu!");
            placar.jogador2++;
            atualizaPlacar();
            limpaTabuleiro();
        }
        return
    })
}

function verificaEmpate() {
    if(jogador1.length + jogador2.length === 9){
        alert("Empate!")
        limpaTabuleiro();
    }
}

function atualizaPlacar() {
    placarJogador1Span.innerHTML = "Jogador 1: " + placar.jogador1;
    placarJogador2Span.innerHTML = "Jogador 2: " + placar.jogador2;
}
atualizaPlacar();

function limpaTabuleiro() {
    for(let i = 0; i < celula.length; i++){
        celula[i].innerHTML = "";
    }

    jogador1 = [];
    jogador2 = [];
    vez = true;
}

restartBtn.addEventListener('click', () => {
    limpaTabuleiro();
})
