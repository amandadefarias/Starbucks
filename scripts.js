let imagem = document.querySelector('.copo')
let circle = document.querySelector('.circle')

function changeImage(endereco){
    imagem.src = endereco
}

function changeColor(color){
    circle.style.background = color
}