const express = require("express");
const app = express();
const port = 8000;
const faker = require('@faker-js/faker');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));




class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
}

//route
app.get("/api/users/new", (req, res) => {
    let newUser = new User()
    res.json({ results: newUser })

})

app.get("/api/companies/new", (req, res) => {
    let newCompany = new Company()
    res.json({ results: newCompany })
})

app.get("/api/user/company", (req, res) => {
    res.json({ 
    newUser : newUser = new User(),
    newCompany : newCompany = new Company()
})
    res.json({message : "user company works"})
     // let newUserandCompany = {
    //     newUser: newUser = new User(),
    //     newCompany: newCompany = new Company()
    // }
    // res.json({ results: newUserandCompany })
})






app.listen(port, () => console.log(`Listening on port: ${port}`));