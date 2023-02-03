console.log("TypeScript is here still")
console.log("TypeScript is amazing")

class User {
    //We are making sure TS is aware of email and name in advance
    email: string
    name: string
    city: string = "" //Needs an initializer, or we can mark it as empty
    constructor(email: string, name: string){
        this.email = email
        this.name = name
    }
}

const newUser = new User("g@g.com", "Gman")
newUser.city = "Berlin"