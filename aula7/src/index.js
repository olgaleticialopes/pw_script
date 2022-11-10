// const frutas = [ "abacaxi", "Goiaba", "melancia", "manga", "melao", "caju","acerola"] 
//console.log(frutas[1]) para mostrar apenas uma fruta do vetor 
//for(let i=0; i<frutas.length;i++){ console.log(frutas[i])} //para mostrar toda a lista do vetor
// o .push enfia no ultimo
// .pop tira o ultimo
//.shift tira a primeira possição
// .unshift coloca na primeira possição 
// .splice define em qual espaço/possicao eu quero colocar
// .slice 
// .srt transforma filas em listas
//. reverse transforma listas em filas

const frutas= new Array("abacaxi", "Goiaba", "melancia", "manga","uva")
console.log(frutas.join("|"))

console.log(frutas.pop())
console.log(frutas.join("|"))

frutas.push("kiwi")
console.log(frutas.join("|"))
frutas.push("uva")
console.log(frutas.join("|"))

frutas.shift()
console.log(frutas.join("|"))

frutas.unshift()
console.log(frutas.join("|"))

frutas.splice(4,0, "abacaxi")
console.log(frutas.join("|"))

frutas.shift()
console.log(frutas.join("|"))

let outrasfrutas=frutas.slice(2,4)
console.log(frutas.join("|"))
console.log(outrasfrutas.join("|"))

frutas.sort()
console.log(frutas.join("|"))

frutas.reverse()
console.log(frutas.join("|"))