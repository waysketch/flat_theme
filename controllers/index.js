const router = require("express").Router();
const testController = require('./test.controller.js');
const userController = require("./user.controller.js");
const loginController = require('./login.controller.js');
const pageController = require('./page.controller.js');
const emailController = require('./email.controller.js');

router.use("/api/test", testController);

router.use('/locked/api/users', userController); // keyword /locked means it will check the 'key' for a user and requires authentication 

router.use('/login/attempt', loginController);

router.use('/api/pages', pageController);

router.use('/api/email', emailController), pageController;


module.exports = router;