// return masked string
function maskify(cc) {
    let result = ''
    let start = cc.length - 4;
    for (let i = 0; i < cc.length; i++) {
        if (i < start) {
            result += '#'
        } else {
            result += cc[i];
        }

    }

    return result
}

console.log(maskify("4556364607935616"))
