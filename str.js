// complete the function
function solution(string) {
    let reg = /[A-Z]/;
    let res = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(reg)) {
            res += ' ' + string[i];
        } else {
            res += string[i]
        }
    }
    console.log(res)
    return res;

}

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

solution('camelCasingTest');