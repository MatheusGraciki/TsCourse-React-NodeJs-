
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

export abstract class DioAccount{
    private name: string;
    accountNumber: number;
    balance: number = 0;
    private status: boolean = true;


    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber
    }

    setName(name: string):void{
        this.name = name
    }


    getName():string{
        return this.name
    }

    deposit = (): void => {
        if(this.validate()){
        console.log("voce depositou");
        }
        
        
    }

    withdraw = (): void => {
        console.log("voce sacou");
    }
    
    getBalance = (): void => {
        console.log(this.balance);
    }

    validate = (): boolean => {
        if(this.status){
            return this.status
        }
        throw new Error("conta inválida");
        
    }
}
