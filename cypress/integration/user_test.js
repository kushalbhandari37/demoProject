
const mongoose = require('mongoose');

// after(async (done)=>{
//     await mongoose.connection.db.dropDatabase(done);
//     mongoose.connection.close();
// })


describe('Registration Test',() => {
    it('Registers the user',()=>{
        cy.request({
            method: 'POST',
            url:'http://localhost:3000/api/v1/register',
            body: {
                'email': 'test@gmail.com',
                'password': '123456'
            }
        }).then(res=>{
            expect(res.body).has.property("message","User Registered Successfully");
        });

    })
})

describe('Login Test',() => {
    it('Logs in the user',()=>{
        cy.request({
            method: 'POST',
            url:'http://localhost:3000/api/v1/login',
            body: {
                'email': 'test@gmail.com',
                'password': '123456'
            }
        }).then(res=>{
            expect(res.body).has.property("message","Login Successful");
            expect(res.body.token).to.exist;
        });

    })
})