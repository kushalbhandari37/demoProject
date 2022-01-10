const supertest = require('supertest');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');
let server;
let request;

beforeAll(async () => {
    server = http.createServer(app);
    server.listen();
    request = supertest(server);    
    mongoose.connect(process.env.MONGODB_TEST_CONNECTION_URL, { useNewUrlParser : true})
  });
  
  afterAll(async () => {    
    await mongoose.connection.db.dropDatabase();    
    server.close();
    mongoose.connection.close();
  });
  
  //Test Registration
  test('Register User', async ()=>{
    await request.post('/api/v1/register')
    .send({
        "email": "test@gmail.com",
        "password": "123456"
    })
    .expect(200)
    .then(res=>{
        expect(res.body.message).toEqual('User Registered Successfully');
    })
  })

  //Test User Login
  test('Login User', async ()=>{
    await request.post('/api/v1/login')
    .send({
        "email": "test@gmail.com",
        "password": "123456"
    })
    .expect(200)
    .then(res=>{
        expect(res.body.message).toEqual('Login Successful');
        expect(res.body.token).toBeDefined()
    })
  })