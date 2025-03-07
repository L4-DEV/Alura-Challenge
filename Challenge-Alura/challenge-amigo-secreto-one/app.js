

let amigos = []


function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim(); // Remove espaços antes e depois

    // Expressão regular: permite apenas letras (A-Z, a-z) e acentos, sem espaços no meio
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;

    if (nomeAmigo.length <= 1) {  // Verifica se tem mais de 1 caractere
        alert('O nome deve ter pelo menos 2 caracteres.');
    } else if (!regex.test(nomeAmigo)) {
        alert('O nome deve conter apenas letras e sem espaços extras.');
    } else {
        let nomePadronizado = nomeAmigo.toLowerCase(); // Padroniza para maiúsculas

        if (amigos.some(amigo => amigo.toLowerCase() === nomePadronizado)) {
            alert('Esse nome já foi inserido. Escolha um diferente.');
        } else {
            amigos.push(nomePadronizado); // Adiciona o nome padronizado à lista
            AtualizarLista();
            inputAmigo.value = '';
        }
    }

    inputAmigo.focus();
}


function AtualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}


function sortearAmigo() {
    if (amigos.length == 0) {
        Alert("Não há amigos disponíveis para sortear.");
        return;  // Se o array estiver vazio, não faz o sorteio
    }

    // Se houver amigos, realiza o sorteio
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
    limparLista();

    setTimeout(() => {
        alert("Após o resultado do sorteio o jogo será reiniciado em 5 segundos...");
    }, 1000); // Exibe o alerta após 1 segundo

    // Aguarda 5 segundos e depois reseta o jogo
    setTimeout(() => {
        resetarJogo();
    }, 5000);
}



function limparLista() {
    let limparAmigos = document.getElementById("listaAmigos");
    limparAmigos.innerHTML = "";
}

function resetarJogo() {
    amigos = []; // Esvazia a lista de amigos
    AtualizarLista(); // Atualiza a lista exibida na tela
    document.getElementById("resultado").innerHTML = ""; // Limpa o sorteio
}

