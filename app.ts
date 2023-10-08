class UserAccount{
    name: string;
    accountNumber: number;


    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber
    }

    deposit = (amount:string, accountNumber: number) => {
        console.log("voce depositou");
        
    }

    withdraw = (amount:string, accountNumber: number) => {
        console.log("voce sacou");
    }
}

class AdminAccount  extends UserAccount{
    balance: number;
    
    constructor(name: string, accountNumber:number) {
        super(name, accountNumber);
        this.balance = 20
    }

    getValue = () => {
        console.log(this.balance);
    }
}

const newAdminAccount: AdminAccount = new AdminAccount('joao', 1)
console.log(newAdminAccount)

const newAccount:UserAccount = new UserAccount('Paulin', 1)
console.log(newAccount);
newAccount.deposit