function descendingOrder(n){
    let con =   n.toString().split('')
    let arr = []
   con.map(x=>arr.push(Number(x)))
    return   Number(arr.sort((a,b)=>b-a).join(''));

}

console.log(descendingOrder(143))