class User {
    name: string = '2';
    age:number = 2;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    showName(){
        console.log(this.name, this.age);
    }
}

const user = new User('Jooj', 2);
user.showName();
