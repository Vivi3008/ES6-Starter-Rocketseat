const usuarios = [
    {nome:"Diego", idade:23, empresa:'Rocketseat'},
    {nome:"Gabriel", idade:15, empresa:'Rocketseat'},
    {nome:"Lucas", idade:30, empresa:'Facebook'}
]
//2.1
const age = usuarios.map( ({idade}) => idade)

console.table(age)

//2.2
const emp = usuarios.filter( ({idade,empresa}) => idade >= 18 && empresa ==='Rocketseat' )

console.table(emp)

//2.3
const go = usuarios.find( ({empresa} ) => empresa==='Google' )

console.table(go)

//2.4
const maior = usuarios
    .map((usuario) => ({...usuario, idade: usuario.idade*2}))
    .filter((usuario)=>usuario.idade<=50)

console.table(maior)
