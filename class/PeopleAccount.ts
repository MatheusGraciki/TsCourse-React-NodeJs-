import { DioAccount } from "./DioAccount";

export class PeopleAccount  extends DioAccount{
    doc_id: number;

    constructor(doc_id: number, name: string, accountNumber: number) {
        // o super construtor é responsavel por inicializar a classe que estamos extendendo, no caso a DioAccount 
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}