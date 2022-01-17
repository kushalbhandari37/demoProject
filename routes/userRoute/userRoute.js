const userController = require('../../Controller/User/userController');
const fileController = require('../../Controller/File/fileController');
const registrationSchema = require('../../Validations/registrationSchema');
const validationRequest = require('../../middleware/validation');
const { route } = require('express/lib/application');

module.exports = (router) => {    
    router.post('/register',registrationSchema,validationRequest, userController.registerUser);
    router.post('/upload',fileController.uploadFile);
    router.get('/read',fileController.readFile);
}
