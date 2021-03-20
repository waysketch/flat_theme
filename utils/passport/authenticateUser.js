module.exports = {
    authenticateUser: (req,res,next) => {
		console.log("authenticateUser.js");

        if(req.user){
            next();  //logged in, continue
        } else {
            const result = { 
                error: `Authentication error. User is not logged in.`,
                status: 401,
                msg: "Incorrect username or password.",
              };
              res.status(401).json(result);
        }
    }
}