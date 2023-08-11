function longestName(name) {
    let longest = name[0];

    for (let i = 1; i < name.length; i++) {
        if (name[i].length > longest.length) {
            longest = name[i];
        }
    }
    return `O nome ${longest} é o maior da lista`
}

let nomes = ["Pedro", "Rafael", "José", "Henrique"];
console.log(longestName(nomes));