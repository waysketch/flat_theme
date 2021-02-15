const router = require("express").Router();
const testController = require('./test.controller.js');
const userController = require("./user.controller");
const loginController = require('./login.controller');
const pageController = require('./page.controller');
const Controller = require('./controller.js');

router.use("/api/test", testController);

router.use('/locked/api/users', userController); // keyword /locked means it will check the 'key' for a user and requires authentication 

router.use('/login/attempt', loginController);

router.use('/api/pages', pageController);

router.use('/test', Controller);

module.exports = router;