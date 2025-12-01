
let p1 = document.getElementById("p1");
let coracao = document.getElementById("heart");
let foto1 = document.getElementById("eu_e_elo");
let cliques = 0;
let br_tag = "<br>";

const musica = document.getElementById("musica");

function clicks(event) {
    cliques += 1;
    p1.innerHTML = "Clique no coração 20 vezes para ter uma surpresa! " + "Você já clicou: " + cliques.toString() + " vezes";
    
    let tamanho_inicial = parseInt(window.getComputedStyle(coracao).width);
    let novo_tamanho = tamanho_inicial + 25;

    let margin_inicial = parseInt(window.getComputedStyle(coracao).marginTop);
    let margin_add = margin_inicial - 5 + "px"

    let opacidade = parseFloat(window.getComputedStyle(coracao).opacity);
    let opacidade_nova = opacidade + 0.05;
    if (opacidade_nova > 1) opacidade_nova = 1;
    coracao.style.opacity = opacidade_nova; 
    
    coracao.style.width = novo_tamanho + "px";
    coracao.style.marginTop = margin_add;

    if (coracao.style.width >= "600px") {
        p1.innerHTML = "Pronto, meu amor!" + br_tag + "Só queria te lembrar que eu te amo! 🥰🫶";
        coracao.style.visibility = "hidden";
        foto1.style.visibility = "visible";
        foto1.style.marginTop = "-550px";
        foto1.style.border = "solid 3px black";  
    };
};

coracao.addEventListener("click", clicks);