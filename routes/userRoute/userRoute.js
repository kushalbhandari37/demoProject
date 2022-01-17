const userController = require('../../Controller/User/userController');
const uploadController = require('../../Controller/Upload/uploadController');
const registrationSchema = require('../../Validations/registrationSchema');
const validationRequest = require('../../middleware/validation');
const { route } = require('express/lib/application');

module.exports = (router) => {    
    router.post('/register',registrationSchema,validationRequest, userController.registerUser);
    router.post('/upload',uploadController.uploadFile);
}
