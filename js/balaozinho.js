let mensagem = document.querySelector('#balaozinho');
let balaozinhosEl = document.querySelectorAll('.marcacao');

function texto(e){
    let apareceBalao = e.currentTarget;
    mensagem.innerHTML = `<b>${apareceBalao.dataset.titulo}</b> <br>${apareceBalao.dataset.conteudo}</br>`;
    mensagem.style.display = 'block';
}

function limpaTexto(){
    mensagem.innerHTML = '';
    mensagem.style.display = 'none';
}


balaozinhosEl.forEach(el => el.addEventListener('mouseover', texto));
balaozinhosEl.forEach(el => el.addEventListener('mouseout', limpaTexto));