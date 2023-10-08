import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"

const peopleAccount = new PeopleAccount(1, 'Juan', 2)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('Juan', 1)
console.log(companyAccount)


