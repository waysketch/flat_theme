module.exports = {
    authenticateUser: (req,res,next) => {
        console.log('test');
        if(req.user){
            next();
        }
        else{
            const result = { 
                error: `Authentication error. Unable to login.`,
                status: 401
              };
              res.status(401).json(result);
        }
    }
}