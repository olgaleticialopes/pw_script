//um vetor pode ter estrutura de dados nele; as chaves determinando que o espaço do vetor esta sendo ocupado por dois exemplos(como no exemplo)
// sort com funcao para comparação(A para B), por ordem decrescente, somente com numeros
const saldopessoas= new Array(
    {
        nome: "vitor",
         saldo: 2030, 
    },
    {
        nome: "paulo",
         saldo: 23455,
    },
    {
        nome: "clara",
         saldo: 233,
    },
)
saldopessoas.sort(function(a,b){return a.saldo-b.saldo});
saldopessoas.push({nome: "gustavo", saldo:5330})
saldopessoas.sort(function(a,b){return a.salario - b.salario})
saldopessoas.forEach(function (valor, indice, vetor){
  texto += "posição: " + indice + "nome:"+ valor.nome+ " |  salario: "+ valor.saldo + "."
})
console.log(texto)

//dentro do foreach pode se colocar uma função anonima que é apagada dps da execução. e é usada para quando nao qeremos que fique armazenada dentro do registro de memoria