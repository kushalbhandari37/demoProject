const homeController = require('../../Controller/Home/homeController');
const userAccess = require('../../middleware/userAccess');

module.exports = (router) => {   
    router.get('/home',userAccess,homeController.home);
}
