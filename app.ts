import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"

const peopleAccount = new PeopleAccount(1,'nath', 2)
peopleAccount.deposit()





const companyAccount: CompanyAccount = new CompanyAccount('Juan', 1)
console.log(companyAccount.deposit())


