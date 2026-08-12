const botoes = document.querySelectorAll('button');

botoes.forEach(function(botao){
    botao.dataset.curtiu = "false";
    
    botao.addEventListener('click', botaoClicado);
});

function botaoClicado(event){
    console.log('fui clicado');
    let botaoAtual = event.currentTarget;
    let texto = botaoAtual.querySelector('span');
    
    if (botaoAtual.dataset.curtiu === "false"){
        texto.textContent++;
        botaoAtual.dataset.curtiu = "true";
    } else {
        texto.textContent--;
        botaoAtual.dataset.curtiu = "false";
    }
}