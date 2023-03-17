let mensagem = document.querySelector('#balaozinho');
let marcacoessEl = document.querySelectorAll('.marcacao');
let inputX = document.querySelector('#marcacao-x');
let inputY = document.querySelector('#marcacao-y');
let inputH = document.querySelector('#marcacao-altura');
let inputW = document.querySelector('#marcacao-largura');
let inputsEl = document.querySelectorAll('input');
let marcacaoAtualEl;

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

function seleciona(e){
    marcacoessEl.forEach(el => el.classList.remove('selecionada'));
    marcacaoAtualEl = e.currentTarget;
    marcacaoAtualEl.classList.add('selecionada');
}

function posicionaMarcacao(){
    marcacaoAtualEl.style.left = `${inputX.value}px`;
    marcacaoAtualEl.style.top = `${inputY.value}px`;
    marcacaoAtualEl.style.height = `${inputH.value}px`;
    marcacaoAtualEl.style.width = `${inputW.value}px`;
}

marcacoessEl.forEach(el => el.addEventListener('click', seleciona));
marcacoessEl.forEach(el => el.addEventListener('mousemove', texto));
marcacoessEl.forEach(el => el.addEventListener('mouseout', limpaTexto));
inputsEl.forEach(el => el.addEventListener('keydown', posicionaMarcacao));
