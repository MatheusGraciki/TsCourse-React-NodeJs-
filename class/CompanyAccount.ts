import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (): void => {
        console.log("voce pegou um emprestimo")
    }
// a assinatura do metodo foi alterado, na classe mãe(DioAccount) ele é  assinado como void(retorna vazio), aqui ele retorna um número
    deposit = (): number => {
        return 2
    }
}

