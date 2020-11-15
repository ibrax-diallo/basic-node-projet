const jwt = require('jsonwebtoken');

module.exports= (req, res, next) => {
    try{
     const token = req.headers.authorization.split(' ')[1];
     const decodeToken = jwt.verify(token, 'Admin@2020');
     const userId = decodeToken.userId;
     if(req.body.userId &&  req.body.userId !== userId) {
         throw 'User ID non Valable';
     }else{
         next();
     }
    } catch(error) {
        res.status(401).json({error: error | 'Requête non authentifiée !'})
    }
}
