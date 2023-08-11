function somaUltimos(numeros) {
    let soma = numeros[numeros.length - 1] + numeros[numeros.length - 2];
    if (soma % 2 == 0) {
        return "A soma é um múltiplo de 2";
    } else {
        return "A soma não é um múltiplo de 2";
    }
}

let numeros = [1,4,6,9,11,8];
console.log(somaUltimos(numeros));