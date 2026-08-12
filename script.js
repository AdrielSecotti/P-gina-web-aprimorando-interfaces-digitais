const botoes = document.querySelectorAll('button'); 

botoes.forEach( function(botao){ 
    botao.curtiu = false;
    botao.addEventListener('click', botaoClicado); 
}) 

function botaoClicado(event){ 
    console.log('fui clicado'); 
    let botaoAtual = event.currentTarget; 
    let texto = botaoAtual.querySelector('span'); 
    
    if (botaoAtual.curtiu === false){ 
        texto.textContent++; 
        botaoAtual.curtiu = true; 
    } else { 
        texto.textContent--;
        botaoAtual.curtiu = false; 
    } 
}