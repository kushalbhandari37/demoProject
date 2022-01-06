const userController = require('../../Controller/User/userController');

module.exports = (router) => {    
    router.post('/register',userController.registerUser);
}
