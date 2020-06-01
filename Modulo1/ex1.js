class usuario {
    constructor(email,senha){
        this.email = email
        this.senha = senha
    }
 
    isAdmin(){
        return this.adm === true
    }
}

class Admin extends usuario{
   constructor(email,senha){
       super(email,senha)
       this.adm = true
   }

}

const user1 = new usuario('email@email.com.br', 'senha123')
const adm1 = new Admin('email@email.com.br', 'senha123')

console.log(user1.isAdmin())
console.log(adm1.isAdmin())