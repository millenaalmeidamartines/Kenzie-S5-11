function nomeArray(index) {
    let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];
    if (index >= 0 && index < arr.length) {
        return arr[index];
    } else {
        return "Valor não encontrado.";
    }
}
console.log(nomeArray(3));