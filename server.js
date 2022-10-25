const express = require('express');
const {faker} = require('@faker-js/faker')
const app = express();

class Usuario {     
    constructor(){   
    this._id = faker.datatype.uuid();    
    this.nombre = faker.name.firstName();    
    this.apellido = faker.name.lastName();    
    this.telefono = faker.phone.number();      
    this.email = faker.internet.email();
    this.password = faker.internet.password();
    }
}

class Empresa {    
    constructor(){         
    this._id = faker.datatype.uuid();        
    this.nombre = faker.company.name();       
    this.direccion = {           
        calle: faker.address.street(),         
        ciudad: faker.address.city(),           
        estado: faker.address.state(),
        cp: faker.address.zipCode(),
        pais: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res)=>{
    let newUser = new Usuario();
    res.json(newUser);
})

app.get("/api/companies/new", (req, res)=>{
    let newCompany = new Empresa();
    res.json(newCompany);
})

app.get("/api/user/company", (req, res)=>{
    let newUser2 = new Usuario();
    let newCompany2 = new Empresa();
    res.json({user: newUser2, company: newCompany2});
})




app.listen(8000, ()=>console.log("Server Corriendo"));