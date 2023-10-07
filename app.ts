const typeOfUser = {
    admin: 'you are a admin',
    student: 'you are a student',
    viewer: 'you are a viewer'
}


function validateUser(user:string) {
    console.log(typeOfUser[user as keyof typeof typeOfUser] )
}
const user = 'admin'

validateUser(user)