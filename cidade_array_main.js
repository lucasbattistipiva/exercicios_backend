const readlineSync = require('readline-sync')
const Cidade = require('./cidade_class')

console.log('==========================================')
console.log('    Dados da cidade e População');
console.log('==========================================')


let nome = readlineSync.question('Digite o nome da cidade: ')
let estado = readlineSync.question('Digite o nome da estado: ')
let numPopulacao = readlineSync.question('Digite o números de habitantes: ')
let numHomens = readlineSync.question('Digite o número de homens da cidade: ')
let numMulheres = readlineSync.question('Digite o número de mulheres da cidade: ')

const cidade1 = new Cidade(nome,estado,numPopulacao,numHomens,numMulheres)

let homensPercentual = cidade1.percentualHomens() 
let mulheresPercentual = cidade1.percentualMulheres() 

console.log('==========================================')
console.log('    Resultado sobre dados da Cidade');
console.log('==========================================')
console.log('O percentual de mulheres é '+mulheresPercentual.toFixed(0)+" % de "+numPopulacao+" habitantes");
console.log('O percentual de homens é '+homensPercentual.toFixed(0)+" % de "+numPopulacao+" habitantes");
console.log('==========================================')