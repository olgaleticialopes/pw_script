const saldoPessoas = new Array(
    {
        nome:"Victor",
        saldo: 2030
    },
    {
        nome: "Lucas",
        saldo: 6480
    },
    {
        nome: "Olga",
        saldo: 10560
    }
)
let texto=""
saldoPessoas.push({nome:"Gustavo",saldo:5630})
saldoPessoas.sort(function(a,b){return a.saldo - b.saldo});
saldoPessoas.forEach(function (valor, indice, vetor){
    texto += "Posicao: "+indice+" Nome: "+valor.nome+" | Salario: "+valor.saldo+". "
})
console.log(texto)