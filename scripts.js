let circulo = document.querySelector('.circulo');
let imagemCopo = document.querySelector('.imagem-copo');

function mudarCor(cor) {
    document.querySelectorAll('.circulo').forEach((elementoCirculo) => {
        elementoCirculo.style.backgroundColor = cor;
    });
}

function trocaImagem(imagem){
    imagemCopo.src = imagem;
}