const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

class User{
    constructor(){
        this.id = Math.floor(Math.random() * 1000);
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.id = Math.floor(Math.random() * 1000);
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}

app.get("/api",(req, res)=>{
    res.json({message: "hello"})
})

app.get("/api/user/new",(req, res)=>{
    res.json(new User());
})

app.get("/api/companies/new",(req, res)=>{
    res.json(new Company());
})

app.get("/api/user/company",(req, res)=>{
    const newUser = new User();
    const newCompany = new Company();
    res.json({user : newUser, company : newCompany});
})





app.listen(port, ()=> console.log(`Running on port ${port} is a new way I like to be`));