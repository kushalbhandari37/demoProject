const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const Token = require('../../models/token');
const bcrypt = require('bcryptjs/dist/bcrypt');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = {
    //Login User
    loginUser: async (req,res) => {
        try {
            let userData = {
                email: req.body.email,
                password: req.body.password
            };
            const user = await User.find({'email':userData.email});        
            if(user.length==0){
                return res.status(400).json({'message':'User Not Found'});
            }        
            const comparePassword = await bcrypt.compare(userData.password,user[0].password);
            if(!comparePassword){
                return res.status(403).json({message:'Password is incorrect'});
            }
            const token = jwt.sign({user},'secretkey');
            let tokenData = {
                token,
                user: user[0]._id
            }
            await Token(tokenData).save();
            res.json({
                'message': 'Login Successful',
                token
            })
            
        } catch (error) {
            console.log(error);            
        }        
    },

    //Login with Google
    loginWithGoogle: async (req,res) => {
        try {
            const {access_token} = req.body;
            const ticket = await client.verifyIdToken({
                idToken: access_token,
                requiredAudience: process.env.CLIENT_ID
            });
            const { email } = ticket.getPayload();        
            let user = await User.findOne({'email':email});        
            if(!user){
                user = await User({email}).save();            
            }
            const token = jwt.sign({user},'secretkey');
            let tokenData = {
                token,
                user: user._id
            }
            await Token(tokenData).save();
            res.json({
                'message': 'Login Successful',
                token
            });
            
        } catch (error) {
            console.log(error);            
        }        
    }
}