
module.exports = {
    //Homepage
    home: async (req,res) => {        
        res.status(200).json({'message': 'This is home'});   
    }     
}