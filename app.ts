
/*      

    Classe Normal:
Uma classe normal pode ser instanciada para criar objetos.
Ela pode conter métodos e propriedades concretos (ou seja, métodos com implementações definidas).
Pode ser usada diretamente para criar instâncias e herdar de outras classes.   

    Classe Abstrata:
Uma classe abstrata não pode ser instanciada diretamente. Ela serve como um modelo para outras classes, ou seja, é projetada para ser herdada por outras classes.
Pode conter métodos abstratos (métodos sem implementações) que devem ser implementados pelas classes que herdam dela.
Pode conter métodos concretos que são herdados pelas subclasses, mas também podem ser sobrescritos.
Geralmente usada quando você deseja definir um conjunto de métodos e propriedades comuns para várias classes relacionadas.
*/

abstract class Account{
    name: string;
    accountNumber: number;
    balance: number = 0;


    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log("voce depositou");
        
    }

    withdraw = () => {
        console.log("voce sacou");
    }
    
    getBalance = () => {
        console.log(this.balance);
    }
}

class PeopleAccount  extends Account{
    doc_id: number;

    constructor(doc_id: number, name: string, accountNumber: number) {
        // o super construtor é responsavel por inicializar a classe que estamos extendendo, no caso a Account 
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}

class CompanyAccount extends Account{
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = () => {
        console.log("voce pegou um emprestimo")
    }
}

const peopleAccount = new PeopleAccount(1, 'Juan', 2)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('Juan', 1)
companyAccount.getLoan


