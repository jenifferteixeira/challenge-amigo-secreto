let amigos = [];
let sorteados = [];


function addAmigos() {
    let nome = document.querySelector('input').value;

    if (nome == '') { //se input vazio
        alert('Digite um nome para continuar');
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado. Inclua um sobrenome ou siga para o próximo.')
        return;
    }

    amigos.push(nome);
    limparCampo();
    nomesNaTela();
};

function nomesNaTela() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    })

};


function sortearAmigo() {
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos para sortear.');
        return;
    }

    if (sorteados.length === amigos.length) {
        alert('Todos os amigos já foram sorteados! 🎇 Divirtam-se!');

        sorteados = [];
        amigos = [];

        let lista = document.getElementById('listaAmigos', 'resultado');
        lista.innerHTML = '';
        resultado.innerHTML = '';

        return;
    }

    let amigoSorteado;
    do {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[amigoAleatorio];
    } while (sorteados.includes(amigoSorteado));

    sorteados.push(amigoSorteado);

    let audio = new Audio('assets/drum-roll-sound-effect.mp3');
    audio.play();

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Sorteando... </li> 🥁`;

    setTimeout(() => {
        resultado.innerHTML = `<li>Teu Amigo Secreto é ${amigoSorteado} </li> 🎉`;

        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            resultado.innerHTML = '';

        }, 5000)
    }, 2000);
};

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
};

