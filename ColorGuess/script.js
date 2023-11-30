const createBall = document.getElementById('balls-section');
function createBalls() {
  for (let index = 0; index < 6; index += 1) {
    const balls = document.createElement('span');
    balls.addEventListener('click', () => {
      if(verifyColor(getBalls[index].style.backgroundColor)){
        count += 3;
        document.getElementById('score').textContent = 'Placar: ' + count;
      }
      resetColors();
    });
    balls.className = 'ball';
    createBall.appendChild(balls).lastChild;
  }
}
createBalls();

// criando as cores de cada bola
function randomColor1() {
  return Math.round(Math.random() * 255);
}

function randomColor2() {
  return Math.round(Math.random() * 255);
}

function randomColor3() {
  return Math.round(Math.random() * 255);
}

const getBalls = document.querySelectorAll('span');
function backgroundColorBalls() {
  for (let index = 0; index < 6; index += 1) {
    getBalls[index].style.backgroundColor =
     `rgb(${randomColor1()},${randomColor2()},${randomColor3()})`;
  }
}
backgroundColorBalls();

// funcao para pegar um numero aleatorio entre 0 e 5, indicando as posicoes das bolas
function getRandomArbitrary() {
  return Math.floor(Math.random() * (5 - 0) + 0);
}

// a cor a ser adivinhada recebe uma cor aleatoria das cores já geradas
let colorGuess = getBalls[getRandomArbitrary()].style.backgroundColor;

const getParagrafo = document.getElementById('rgb-color');
getParagrafo.textContent = colorGuess;

let count = 0;

function verifyColor(cor) {
  if (cor === getParagrafo.textContent) {
    document.getElementById('answer').textContent = 'Acertou!';
    return true;
  } else {
    document.getElementById('answer').textContent = 'Errou! Tente novamente!';
  }
}

function resetPlacar() {
  count = 0;
  document.getElementById('score').textContent = 'Placar: ' + count;
}

function resetColors() {
  backgroundColorBalls();
  colorGuess = getBalls[getRandomArbitrary()].style.backgroundColor;
  getParagrafo.textContent = colorGuess;
}

function resetAll () {
  resetPlacar();
  resetColors();
}

const btnReset = document.getElementById('reset-game');
btnReset.addEventListener('click', resetAll);