const Router = require('express').Router;
const authRoute = require('./authRoute/authRoute');
const userRoute = require('./userRoute/userRoute');
const homeRoute = require('./homeRoute/homeRoute');

module.exports = () =>{
    const router = Router();
    authRoute(router);
    userRoute(router);
    homeRoute(router);
    return router;
}