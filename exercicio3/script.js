let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verificaParidade(position) {
    let valor = numbers[position];
    if (valor % 2 === 0) {
        return 'O valor encontrado nesta posição é par'
    } else {
        return `O valor encontrado nesta posição é ímpar`
    }
}
console.log(verificaParidade(2));