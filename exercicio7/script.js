function maiorLista(numeros, outrosNumeros) {
    if (numeros.length > outrosNumeros.length) {
        return "A maior lista é a lista cujo último número é: " + numeros[numeros.length - 1];
    } else if (outrosNumeros.length > numeros.length) {
        return "A maior lista é a lista cujo último número é: " + outrosNumeros[outrosNumeros.length - 1];
    } else {
        return "Ambas as listas tem o mesmo tamanho";
    }
}

let numeros = [1, 2, 3, 4, 5, 6, 10, 7];
let outrosNumeros = [5, 7, 9, 4, 2, 3, 9];

console.log(maiorLista(numeros, outrosNumeros));