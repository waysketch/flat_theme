module.exports = {
    authenticateUser: (req,res,next) => {
        if(req.user){
            next();  //logged in, continue
        }
        else{
            const result = { 
                error: `Authentication error. User is not logged in.`,
                status: 401
              };
              res.status(401).json(result);
        }
    }
}