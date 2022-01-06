const jwt = require("jsonwebtoken");

//Middleware for protected Routes
let userAccess = async (req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization']; 
        console.log(bearerHeader);       
        if(typeof bearerHeader=='undefined'){            
            res.status(403).json({message:'Forbidden'})
        }
        else{
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            jwt.verify(bearerToken,'secretkey',(err,decoded)=>{
                if(err) res.status(403).json(err);
                next();
            })
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports =  userAccess;