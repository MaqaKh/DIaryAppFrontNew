export class User {
    id: number
    userName: string
    password: string
    firstName: string
    secondName: string
    constructor(id,username,password,firstName,secondName){
        this.userName=username;
        this.id=id;
        this.password=password;
        this.firstName=firstName;
        this.secondName=secondName
    }
}