function verificaNome(nomes, nome, posicao) {
    const nomeNormalizado = nome.toLowerCase();

    if (posicao < 0 || posicao >= nomes.length) {
        return `Posição inválida`;
    }

    const nomeNaPosicao = nomes[posicao];
    const nomeNaPosicaoNormalizado = nomeNaPosicao.toLowerCase();

    if (nomeNormalizado === nomeNaPosicaoNormalizado) {
        return `Acertei`;
    } else {
        return `Não é quem eu pensava`;
    }
}

let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];
console.log(verificaNome(nomes, "carla", 3));
console.log(verificaNome(nomes, "Maria", 5));