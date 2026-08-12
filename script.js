const botoes = document.querySelectorAll("button");

    botoes.forEach( function(botao){
        let curtiu = false;
        botao.addEventListener("click", botaoClicado);
    })
    

    function botaoClicado(event){
        console.log("fui clicado");
        let botaoAtual = event.currentTarget;
        let texto = botaoAtual.querySelector("span");
        if (curtiu === false){
                texto.textContent++;
                curtiu = true;
        } else{
            text.textContent--;
            curtiu = false;
        }
    
    }