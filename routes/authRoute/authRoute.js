const authController = require('../../Controller/Auth/authController');
const loginSchema = require('../../Validations/loginSchema');
const validationRequest = require('../../middleware/validation');

module.exports = (router) => {    
    router.post('/login',loginSchema,validationRequest,authController.loginUser);
    router.post('/google/login',authController.loginWithGoogle);
}
