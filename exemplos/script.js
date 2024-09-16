let botao = document.querySelector('button')
botao.onclick = () => {
    alert('Forma externa de JS');
}

// Manipuladores de eventos
botao.addEventListener('click', mensagem)
botao.addEventListener('click', alteraTitulo)

function mensagem() {
    alert('Forma com manipulador de evento JS');
}

function alteraTitulo() {
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Web Academy';
    titulo.style.color = 'red';
}