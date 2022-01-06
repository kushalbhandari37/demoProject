const bcrypt = require('bcryptjs');
const User = require('../../models/user');
module.exports = {
    //Register user
    registerUser: async (req,res) => {
        let userData = {           
            'email': req.body.email,           
            'password': req.body.password            
        };
        //hash user password
        userData.password = bcrypt.hashSync(userData.password, bcrypt.genSaltSync(10), null);
        await User(userData).save();
        res.status(200).json({'message': 'User Registered Successfully'});
    }
}