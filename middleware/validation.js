const {validationResult} = require('express-validator');

const validationRequest = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({message: 'Validation Error',errors:errors.array()});
    }
    next();
}

module.exports = validationRequest;