function fiveChars(str) {
    if (str.length >= 5 && typeof str === 'string') {
        let arr = [];
        arr.push(str);
        return arr;
    } else {
        return `O valor deve ser uma string com no mínimo 5 caracteres.`
    }
}
console.log(fiveChars('cinco'));