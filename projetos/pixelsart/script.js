//  Iniciar com preto selecionado
function startWithPattern() {
  const chamaElemento = document.querySelector('.color');
  chamaElemento.classList.add('selected');
}

//  Cria paleta - feito novamente no bendito exercicio 6
const paletaDeCores = document.querySelector('#color-palette');
const cores = ['black', 'red', 'blue', 'pink'];
function paletteNew() {
  for (let index = 0; index < 4; index += 1) {
    const cor = document.createElement('div');
    cor.className = 'color';
    cor.id = cores[index];
    cor.style.backgroundColor = cores[index];
    paletaDeCores.appendChild(cor);
  }
}

//  Cria grid - feito novamente no bendito exercicio 7
function criaElemento() {
  for (let index = 0; index < 25; index += 1) {
    const chamaPai = document.getElementsByTagName('section')[2];
    //  acrescentar indice acima em caso de alteração!
    const criaFilho = document.createElement('div');
    criaFilho.classList.add('pixel');
    chamaPai.appendChild(criaFilho);
  }
}

//  Função para trocar as classes quando for clicado
function classExchange() {
  const black = document.getElementById('black');
  const red = document.getElementById('red');
  const blue = document.getElementById('blue');
  const pink = document.getElementById('pink');

  function blackClick() {
    red.classList.remove('selected');
    blue.classList.remove('selected');
    pink.classList.remove('selected');
    black.classList.add('selected');
  }
  function redClick() {
    black.classList.remove('selected');
    blue.classList.remove('selected');
    pink.classList.remove('selected');
    red.classList.add('selected');
  }
  function blueClick() {
    black.classList.remove('selected');
    red.classList.remove('selected');
    pink.classList.remove('selected');
    blue.classList.add('selected');
  }
  function pinkClick() {
    black.classList.remove('selected');
    red.classList.remove('selected');
    blue.classList.remove('selected');
    pink.classList.add('selected');
  }
  black.addEventListener('click', blackClick);
  red.addEventListener('click', redClick);
  blue.addEventListener('click', blueClick);
  pink.addEventListener('click', pinkClick);
}

//  Função para colorir os pixels do Grid
function coloPixels() {
  const chamaPai = document.querySelector('#pixel-board');
  chamaPai.addEventListener('click', (event) => {
    const elemento = event.target;
    if (elemento.classList.contains('pixel')) {
      const selected = document.querySelector('.selected');
      elemento.style.backgroundColor = selected.style.backgroundColor;
    }
  });
}

//  Função de botão para apagar todas as cores do Grid
function buttonToClear() {
  function clearBoard() {
    const pixelsGrid = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelsGrid.length; index += 1) {
      pixelsGrid[index].style.backgroundColor = 'white';
    }
  }
  const chamaPaiDoBotao = document.getElementsByTagName('main')[0];
  const botãoDeRecomecar = document.createElement('button');
  botãoDeRecomecar.id = 'clear-board';
  chamaPaiDoBotao.appendChild(botãoDeRecomecar);
  botãoDeRecomecar.innerText = 'Limpar';
  botãoDeRecomecar.addEventListener('click', clearBoard);
}

//  Carregamento automatico junto com a pagina
window.onload = function altoCarregamento() {
  paletteNew();
  startWithPattern();
  criaElemento();
  classExchange();
  coloPixels();
  buttonToClear();
  imput ();
};
