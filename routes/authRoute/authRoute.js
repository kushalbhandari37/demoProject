const authController = require('../../Controller/Auth/authController');

module.exports = (router) => {    
    router.post('/login',authController.loginUser);
    router.post('/google/login',authController.loginWithGoogle);
}
