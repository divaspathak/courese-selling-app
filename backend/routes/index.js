const express = require('express'); 
const userRouter = require('./user');
const courseRouter = require('./courses');
const rootRouter = express.Router(); 

rootRouter.get("/user", userRouter); 
rootRouter.get("/courses", courseRouter); 

module.exports = rootRouter; 