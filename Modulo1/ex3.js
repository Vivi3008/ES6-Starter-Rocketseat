//3.1
const array = [1,2,3,4,5]

console.log(array.map( (item)=> item + 10))

//3.2

const usuario = {nome:'Viviane', idade:34}

const {idade} = usuario
 
console.log(idade)

//3.3 
const nome = 'Viviane'
const age = 34

const mostraUsuario = (nome='Giovanna', age= 8) => nome + age


console.log(mostraUsuario(nome,age))
console.log(mostraUsuario(nome))

//3.4
const promise = () => {
    return new Promise((resolve,reject) => resolve())
}

console.log(promise)