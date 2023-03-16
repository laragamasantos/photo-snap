let mensagem = document.querySelector('#balaozinho');
let balaozinhosEl = document.querySelectorAll('.marcacao');
let inputX = document.querySelector('#marcacao-x');
let inputY = document.querySelector('#marcacao-y');
let inputH = document.querySelector('#marcacao-altura');
let inputW = document.querySelector('#marcacao-largura');
let inputsEl = document.querySelectorAll('input');

function texto(e){
    let apareceBalao = e.currentTarget;
    let posicaoEixoX = e.pageX;
    let posicaoEixoY = e.pageY;
    mensagem.innerHTML = `<b>${apareceBalao.dataset.titulo}</b> <br>${apareceBalao.dataset.conteudo}</br>`;
    mensagem.style.left = `${posicaoEixoX}px`;
    mensagem.style.top = `${posicaoEixoY}px`;
    mensagem.style.display = 'block';
}

function limpaTexto(){
    mensagem.innerHTML = '';
    mensagem.style.display = 'none';
}

function posicionaMarcacao(){
    balaozinhosEl[0].style.left = `${inputX.value}px`;
    balaozinhosEl[0].style.top = `${inputY.value}px`;
    balaozinhosEl[0].style.height = `${inputH.value}px`;
    balaozinhosEl[0].style.width = `${inputW.value}px`;
}

balaozinhosEl.forEach(el => el.addEventListener('mousemove', texto));
balaozinhosEl.forEach(el => el.addEventListener('mouseout', limpaTexto));
inputsEl.forEach(el => el.addEventListener('keydown', posicionaMarcacao));
