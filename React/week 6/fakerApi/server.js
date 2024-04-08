const express = require("express");
const { faker } = require('@faker-js/faker');

const app = express();
const port = 5000;

const createUser = () => {
    const generatedUserData = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return generatedUserData
};

const createCompany = () =>({
    id: faker.datatype.uuid(),
    companyName: faker.company.name(),
    address: {
        street: faker.address.street(),
        cityName: faker.address.cityName(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
});

app.get("/api/users/new", (request, response) => {
    const newUser = createUser();
    response.json(newUser) 
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const employeeData = {
        user: newUser,
        company: newCompany
    };
    res.json(employeeData);
});

app.listen( port, () => console.log(`Listening on port: ${port}`));