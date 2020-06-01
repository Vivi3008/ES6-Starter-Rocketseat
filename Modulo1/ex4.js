//4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
   };
   
   const { nome } = empresa
   const { endereco: {cidade} } = empresa
   const { endereco: {estado} } = empresa

   console.log(nome, cidade, estado)

//4.2
   function monstraUsuario( {nome,idade} ){
       return `O usuario ${nome} tem ${idade}`
   }

  console.log(monstraUsuario( {nome:"Viviane", idade:34} ))