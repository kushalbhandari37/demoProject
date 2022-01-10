const userController = require('../../Controller/User/userController');
const registrationSchema = require('../../Validations/registrationSchema');
const validationRequest = require('../../middleware/validation');

module.exports = (router) => {    
    router.post('/register',registrationSchema,validationRequest, userController.registerUser);
}
